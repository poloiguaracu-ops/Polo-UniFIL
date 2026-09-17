function headers() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

async function ensureTable(db) {
  await db.prepare(`
    CREATE TABLE IF NOT EXISTS matriculas (
      id TEXT PRIMARY KEY,
      nome TEXT,
      cpf TEXT,
      curso TEXT,
      data_solicitacao TEXT,
      payload_json TEXT NOT NULL,
      documentos_json TEXT,
      criado_em INTEGER NOT NULL
    )
  `).run();
}

export async function onRequestGet({ request, env }) {
  if (!env.MATRICULAS_DB) {
    return new Response(JSON.stringify({ ok: false, error: 'Banco MATRICULAS_DB não configurado no Cloudflare.' }), {
      status: 503,
      headers: { ...headers(), 'Content-Type': 'application/json; charset=utf-8' },
    });
  }

  try {
    await ensureTable(env.MATRICULAS_DB);
    const url = new URL(request.url);
    const nome = String(url.searchParams.get('nome') || '').trim();
    let result;

    if (nome) {
      result = await env.MATRICULAS_DB.prepare(`
        SELECT id, nome, curso, data_solicitacao, criado_em
        FROM matriculas
        WHERE nome LIKE ?
        ORDER BY criado_em DESC
        LIMIT 100
      `).bind(`%${nome}%`).all();
    } else {
      result = await env.MATRICULAS_DB.prepare(`
        SELECT id, nome, curso, data_solicitacao, criado_em
        FROM matriculas
        ORDER BY criado_em DESC
        LIMIT 100
      `).all();
    }

    return new Response(JSON.stringify({ ok: true, matriculas: result.results || [] }), {
      status: 200,
      headers: { ...headers(), 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ ok: false, error: error?.message || 'Não foi possível consultar as matrículas.' }), {
      status: 500,
      headers: { ...headers(), 'Content-Type': 'application/json; charset=utf-8' },
    });
  }
}

export async function onRequestPost({ request, env }) {
  if (!env.MATRICULAS_DB) {
    return new Response(JSON.stringify({ ok: false, error: 'Banco MATRICULAS_DB não configurado no Cloudflare.' }), {
      status: 503,
      headers: { ...headers(), 'Content-Type': 'application/json; charset=utf-8' },
    });
  }

  try {
    await ensureTable(env.MATRICULAS_DB);
    const form = await request.formData();
    const id = crypto.randomUUID();
    const payload = {};
    const documentos = [];

    for (const [key, value] of form.entries()) {
      if (typeof value === 'string') {
        payload[key] = value;
      } else if (value && typeof value === 'object' && 'name' in value) {
        const file = value;
        if (!file.name) continue;
        const meta = { campo: key, nome: file.name, tipo: file.type || 'application/octet-stream', tamanho: file.size || 0, armazenado: false };
        if (env.MATRICULAS_ARQUIVOS) {
          const safeName = file.name.replace(/[^a-zA-Z0-9._-]/g, '_');
          const keyR2 = `matriculas/${id}/${key}-${safeName}`;
          await env.MATRICULAS_ARQUIVOS.put(keyR2, file.stream(), {
            httpMetadata: { contentType: file.type || 'application/octet-stream' },
            customMetadata: { matriculaId: id, campo: key, nomeOriginal: file.name },
          });
          meta.armazenado = true;
          meta.chave = keyR2;
        }
        documentos.push(meta);
      }
    }

    const nome = String(payload.nomeCompleto || '').trim();
    const cpf = String(payload.cpf || '').trim();
    const curso = String(payload.cursoGraduacao || '').trim();
    const dataSolicitacao = String(payload.dataSolicitacao || '').trim();

    await env.MATRICULAS_DB.prepare(`
      INSERT INTO matriculas (id, nome, cpf, curso, data_solicitacao, payload_json, documentos_json, criado_em)
      VALUES (?, ?, ?, ?, ?, ?, ?, ?)
    `).bind(id, nome, cpf, curso, dataSolicitacao, JSON.stringify(payload), JSON.stringify(documentos), Date.now()).run();

    return new Response(JSON.stringify({ ok: true, id, mensagem: 'Matrícula salva com sucesso.', documentosArmazenados: documentos.filter(d => d.armazenado).length, documentosRecebidos: documentos.length }), {
      status: 201,
      headers: { ...headers(), 'Content-Type': 'application/json; charset=utf-8' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ ok: false, error: error?.message || 'Não foi possível salvar a matrícula.' }), {
      status: 500,
      headers: { ...headers(), 'Content-Type': 'application/json; charset=utf-8' },
    });
  }
}

export async function onRequestOptions() {
  return new Response(null, { status: 204, headers: headers() });
}
