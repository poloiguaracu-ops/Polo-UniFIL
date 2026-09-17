/* Cloudflare Pages Function — Registro de Visitas UniFil Polo Iguaraçu */
const headers={
  'content-type':'application/json; charset=utf-8',
  'cache-control':'no-store'
};
const json=(data,status=200)=>new Response(JSON.stringify(data),{status,headers});

async function init(db){
  await db.prepare(`CREATE TABLE IF NOT EXISTS visitas (
    id TEXT PRIMARY KEY,
    nome TEXT NOT NULL,
    data TEXT NOT NULL,
    criado_em INTEGER NOT NULL,
    atualizado_em INTEGER
  )`).run();
}

export async function onRequest(context){
  const db=context.env?.VISITAS_DB;
  if(!db) return json({ok:false,error:'Banco VISITAS_DB não configurado no Cloudflare.'},503);
  try{
    await init(db);
    const method=context.request.method.toUpperCase();

    if(method==='GET'){
      const {results}=await db.prepare('SELECT id,nome,data,criado_em,atualizado_em FROM visitas ORDER BY data DESC, criado_em DESC').all();
      return json({ok:true,visitas:results||[]});
    }

    if(method==='POST'){
      const body=await context.request.json().catch(()=>null);
      if(!body) return json({ok:false,error:'Dados inválidos.'},400);
      const itens=Array.isArray(body.visitas)?body.visitas:[body];
      const agora=Date.now();
      for(const v of itens){
        if(!v?.id || !String(v.nome||'').trim() || !String(v.data||'').trim()) continue;
        await db.prepare(`INSERT OR IGNORE INTO visitas (id,nome,data,criado_em,atualizado_em) VALUES (?,?,?,?,?)`)
          .bind(String(v.id),String(v.nome).trim(),String(v.data),Number(v.criadoEm||agora),v.atualizadoEm?Number(v.atualizadoEm):null).run();
      }
      return json({ok:true});
    }

    if(method==='PUT'){
      const body=await context.request.json().catch(()=>null);
      if(!body?.id || !String(body.nome||'').trim() || !String(body.data||'').trim()) return json({ok:false,error:'Dados inválidos.'},400);
      const r=await db.prepare('UPDATE visitas SET nome=?, data=?, atualizado_em=? WHERE id=?')
        .bind(String(body.nome).trim(),String(body.data),Date.now(),String(body.id)).run();
      if(!r.meta?.changes) return json({ok:false,error:'Registro não encontrado.'},404);
      return json({ok:true});
    }

    if(method==='DELETE'){
      const body=await context.request.json().catch(()=>null);
      if(body?.all===true){
        await db.prepare('DELETE FROM visitas').run();
        return json({ok:true});
      }
      if(!body?.id) return json({ok:false,error:'ID não informado.'},400);
      await db.prepare('DELETE FROM visitas WHERE id=?').bind(String(body.id)).run();
      return json({ok:true});
    }

    return json({ok:false,error:'Método não permitido.'},405);
  }catch(error){
    return json({ok:false,error:String(error?.message||error)},500);
  }
}
