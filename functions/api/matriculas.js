function headers() {
  return {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
  };
}

async function ensureTable(db) {
  await db.prepare(`CREATE TABLE IF NOT EXISTS matriculas (id TEXT PRIMARY KEY,nome TEXT,cpf TEXT,curso TEXT,data_solicitacao TEXT,payload_json TEXT NOT NULL,documentos_json TEXT,criado_em INTEGER NOT NULL)`).run();
}

function jsonResponse(data, status = 200) {
  return new Response(JSON.stringify(data), { status, headers: { ...headers(), 'Content-Type': 'application/json; charset=utf-8', 'Cache-Control': 'no-store' } });
}

export async function onRequestGet({ request, env }) {
  if (!env.MATRICULAS_DB) return jsonResponse({ ok:false, error:'Banco MATRICULAS_DB não configurado no Cloudflare.' },503);
  try {
    await ensureTable(env.MATRICULAS_DB);
    const nome=String(new URL(request.url).searchParams.get('nome')||'').trim();
    const result=nome?await env.MATRICULAS_DB.prepare(`SELECT * FROM matriculas WHERE nome LIKE ? ORDER BY criado_em DESC LIMIT 100`).bind(`%${nome}%`).all():await env.MATRICULAS_DB.prepare(`SELECT * FROM matriculas ORDER BY criado_em DESC LIMIT 100`).all();
    const matriculas=(result.results||[]).map(x=>({id:x.id,nome:x.nome,cpf:x.cpf,curso:x.curso,data_solicitacao:x.data_solicitacao,criado_em:x.criado_em,dados:(()=>{try{return JSON.parse(x.payload_json||'{}')}catch(e){return{}}})(),documentos:(()=>{try{return JSON.parse(x.documentos_json||'[]')}catch(e){return[]}})()}));
    return jsonResponse({ok:true,matriculas});
  } catch(error){return jsonResponse({ok:false,error:error?.message||'Não foi possível consultar as matrículas.'},500)}
}

export async function onRequestPost({ request, env }) {
  if (!env.MATRICULAS_DB) return jsonResponse({ok:false,error:'Banco MATRICULAS_DB não configurado no Cloudflare.'},503);
  try {
    await ensureTable(env.MATRICULAS_DB); const form=await request.formData(); const id=crypto.randomUUID(),payload={},documentos=[];
    for(const [key,value] of form.entries()){
      if(typeof value==='string') payload[key]=value;
      else if(value&&typeof value==='object'&&'name' in value){const file=value;if(!file.name)continue;const meta={campo:key,nome:file.name,tipo:file.type||'application/octet-stream',tamanho:file.size||0,armazenado:false};if(env.MATRICULAS_ARQUIVOS){const safeName=file.name.replace(/[^a-zA-Z0-9._-]/g,'_'),keyR2=`matriculas/${id}/${key}-${safeName}`;await env.MATRICULAS_ARQUIVOS.put(keyR2,file.stream(),{httpMetadata:{contentType:file.type||'application/octet-stream'},customMetadata:{matriculaId:id,campo:key,nomeOriginal:file.name}});meta.armazenado=true;meta.chave=keyR2}documentos.push(meta)}
    }
    await env.MATRICULAS_DB.prepare(`INSERT INTO matriculas (id,nome,cpf,curso,data_solicitacao,payload_json,documentos_json,criado_em) VALUES (?,?,?,?,?,?,?,?)`).bind(id,String(payload.nomeCompleto||'').trim(),String(payload.cpf||'').trim(),String(payload.cursoGraduacao||'').trim(),String(payload.dataSolicitacao||'').trim(),JSON.stringify(payload),JSON.stringify(documentos),Date.now()).run();
    return jsonResponse({ok:true,id,mensagem:'Matrícula salva com sucesso.',documentosArmazenados:documentos.filter(d=>d.armazenado).length,documentosRecebidos:documentos.length},201);
  }catch(error){return jsonResponse({ok:false,error:error?.message||'Não foi possível salvar a matrícula.'},500)}
}

export async function onRequestPut({ request, env }) {
  if(!env.MATRICULAS_DB)return jsonResponse({ok:false,error:'Banco MATRICULAS_DB não configurado no Cloudflare.'},503);
  try{await ensureTable(env.MATRICULAS_DB);const body=await request.json(),id=String(body.id||'').trim(),dados=body.dados&&typeof body.dados==='object'?body.dados:null;if(!id||!dados)return jsonResponse({ok:false,error:'ID e dados da matrícula são obrigatórios.'},400);const exists=await env.MATRICULAS_DB.prepare(`SELECT id FROM matriculas WHERE id=?`).bind(id).first();if(!exists)return jsonResponse({ok:false,error:'Matrícula não encontrada.'},404);await env.MATRICULAS_DB.prepare(`UPDATE matriculas SET nome=?,cpf=?,curso=?,data_solicitacao=?,payload_json=? WHERE id=?`).bind(String(dados.nomeCompleto||'').trim(),String(dados.cpf||'').trim(),String(dados.cursoGraduacao||'').trim(),String(dados.dataSolicitacao||'').trim(),JSON.stringify(dados),id).run();return jsonResponse({ok:true,id,mensagem:'Matrícula atualizada com sucesso.'})}catch(error){return jsonResponse({ok:false,error:error?.message||'Não foi possível editar a matrícula.'},500)}
}

export async function onRequestDelete({ request, env }) {
  if(!env.MATRICULAS_DB)return jsonResponse({ok:false,error:'Banco MATRICULAS_DB não configurado no Cloudflare.'},503);
  try{await ensureTable(env.MATRICULAS_DB);const url=new URL(request.url);let id=String(url.searchParams.get('id')||'').trim();if(!id){const body=await request.json().catch(()=>({}));id=String(body.id||'').trim()}if(!id)return jsonResponse({ok:false,error:'ID da matrícula não informado.'},400);const result=await env.MATRICULAS_DB.prepare(`DELETE FROM matriculas WHERE id=?`).bind(id).run();return jsonResponse({ok:true,id,removida:(result.meta?.changes||0)>0,mensagem:'Matrícula excluída com sucesso.'})}catch(error){return jsonResponse({ok:false,error:error?.message||'Não foi possível excluir a matrícula.'},500)}
}

export async function onRequestOptions(){return new Response(null,{status:204,headers:headers()})}
