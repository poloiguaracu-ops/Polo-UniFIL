(()=>{
'use strict';
const API='/api/matriculas',LOCAL='unifil_polo_matriculas_salvas_v1',LAST='unifil_polo_ultima_matricula_enviada_v3';
function init(){
 const section=document.getElementById('matriculasSection'),form=document.getElementById('matriculaForm'),btn=document.getElementById('matSalvar'),msg=document.getElementById('matMsg');
 if(!section||!form||!btn||!msg||btn.dataset.persistenciaAtiva==='5') return; btn.dataset.persistenciaAtiva='5'; const originalText='💾 Salvar preenchimento';
 const nomeEl=()=>document.getElementById('nomeCompleto')||form.querySelector('[name="nomeCompleto"]');
 const dados=()=>{const fd=new FormData(form),o={};for(const [k,v] of fd.entries())o[k]=typeof v==='string'?v:(v?.name||'');return o};
 const local=()=>{try{return JSON.parse(localStorage.getItem(LOCAL)||'[]')}catch(e){return[]}};
 const saveLocal=x=>{const a=local().filter(y=>y.id!==x.id);a.unshift(x);try{localStorage.setItem(LOCAL,JSON.stringify(a.slice(0,1000)))}catch(e){}};
 const msgset=(t,ok=false)=>{msg.textContent=t;msg.style.color=ok?'#26733a':'#716576';msg.style.fontWeight='800'};
 function limparModoEdicao(){delete form.dataset.matriculaEditId;delete form.dataset.matriculaEditMode;btn.textContent=originalText;}
 async function enviar(){
  const nome=String(nomeEl()?.value||'').trim(); if(!nome){nomeEl()?.focus();msgset('Digite pelo menos o nome do aluno para salvar.');return}
  const d=dados();
  const editId=String(form.dataset.matriculaEditId||'').trim();
  if(editId){
   btn.disabled=true;btn.textContent='⏳ Atualizando...';msgset('Atualizando a matrícula...');
   let servidor=false;
   try{
    const r=await fetch(API,{method:'PUT',headers:{'Content-Type':'application/json'},body:JSON.stringify({id:editId,dados:d}),cache:'no-store'});
    const raw=await r.text();let data={};try{data=raw?JSON.parse(raw):{}}catch(e){}
    if(r.ok&&data.ok){servidor=true;msgset(`✓ Matrícula de ${nome} atualizada com sucesso.`,true)}
    else if(r.status!==404&&r.status!==503) throw new Error(data.error||`Erro ${r.status} ao atualizar a matrícula.`);
   }catch(e){if(!String(e.message||'').includes('Failed to fetch')&&!String(e.message||'').startsWith('Erro 4')&&!String(e.message||'').startsWith('Erro 5')) throw e}
   saveLocal({id:editId,nome,curso:String(d.cursoGraduacao||''),data_solicitacao:String(d.dataSolicitacao||''),criado_em:Date.now(),dados:d});
   msgset(servidor?`✓ Matrícula de ${nome} atualizada com sucesso.`:`✓ Matrícula de ${nome} atualizada neste dispositivo.`,true);
   limparModoEdicao();
   btn.textContent='✓ Atualizada';setTimeout(()=>{btn.disabled=false;btn.textContent=originalText},2200);return;
  }
  const snap=JSON.stringify(d);let last='';try{last=sessionStorage.getItem(LAST)||''}catch(e){} if(last===snap){msgset('Esta matrícula já foi salva no dispositivo.',true);saveLocal({id:'local-'+Date.now(),nome,curso:String(d.cursoGraduacao||''),data_solicitacao:String(d.dataSolicitacao||''),criado_em:Date.now(),dados:d});return}
  btn.disabled=true;btn.textContent='⏳ Salvando...';msgset('Salvando o preenchimento...');
  const id=globalThis.crypto?.randomUUID?crypto.randomUUID():`local-${Date.now()}`;let servidor=false;
  try{
   const r=await fetch(API,{method:'POST',body:new FormData(form),cache:'no-store'});const raw=await r.text();let data={};try{data=raw?JSON.parse(raw):{}}catch(e){}
   if(r.ok&&data.ok){servidor=true;try{sessionStorage.setItem(LAST,snap)}catch(e){};saveLocal({id:data.id||id,nome,curso:String(d.cursoGraduacao||''),data_solicitacao:String(d.dataSolicitacao||''),criado_em:Date.now(),dados:d});msgset(`✓ Matrícula de ${nome} salva com sucesso. Protocolo: ${data.id||id}`,true)}
   else if(r.status!==404&&r.status!==503) throw new Error(data.error||`Erro ${r.status} ao salvar a matrícula.`);
  }catch(e){if(!String(e.message||'').includes('Failed to fetch')&&!String(e.message||'').startsWith('Erro 4')&&!String(e.message||'').startsWith('Erro 5')) throw e}
  if(!servidor){saveLocal({id,nome,curso:String(d.cursoGraduacao||''),data_solicitacao:String(d.dataSolicitacao||''),criado_em:Date.now(),dados:d});try{sessionStorage.setItem(LAST,snap)}catch(e){};msgset(`✓ Matrícula de ${nome} salva neste dispositivo.`,true)}
  btn.textContent=servidor?'✓ Matrícula salva':'✓ Salva';setTimeout(()=>{btn.disabled=false;btn.textContent=originalText},2200);
 }
 btn.addEventListener('click',enviar);form.addEventListener('submit',e=>e.preventDefault());
}
function boot(){init();[250,700,1400,2500,4000].forEach(ms=>setTimeout(init,ms))} if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();