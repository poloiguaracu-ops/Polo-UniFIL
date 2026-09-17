(()=>{
'use strict';
const API='/api/matriculas',LOCAL='unifil_polo_matriculas_salvas_v1',LAST='unifil_polo_ultima_matricula_enviada_v3';
function init(){
 const section=document.getElementById('matriculasSection'),form=document.getElementById('matriculaForm'),btn=document.getElementById('matSalvar'),msg=document.getElementById('matMsg');
 if(!section||!form||!btn||!msg||btn.dataset.persistenciaAtiva==='3') return; btn.dataset.persistenciaAtiva='3'; const originalText=btn.textContent;
 const nomeEl=()=>document.getElementById('nomeCompleto')||form.querySelector('[name="nomeCompleto"]');
 const dados=()=>{const fd=new FormData(form),o={};for(const [k,v] of fd.entries())o[k]=typeof v==='string'?v:(v?.name||'');return o};
 const local=()=>{try{return JSON.parse(localStorage.getItem(LOCAL)||'[]')}catch(e){return[]}};
 const saveLocal=x=>{const a=local();a.unshift(x);try{localStorage.setItem(LOCAL,JSON.stringify(a.slice(0,1000)))}catch(e){}};
 const msgset=(t,ok=false)=>{msg.textContent=t;msg.style.color=ok?'#26733a':'#716576';msg.style.fontWeight='800'};
 async function enviar(){
  const nome=String(nomeEl()?.value||'').trim(); if(!nome){nomeEl()?.focus();msgset('Digite pelo menos o nome do aluno para salvar.');return}
  const d=dados(),snap=JSON.stringify(d);try{if(sessionStorage.getItem(LAST)===snap){msgset('Esta matrícula já foi salva anteriormente.',true);return}}catch(e){}
  btn.disabled=true;btn.textContent='⏳ Salvando...';msgset('Salvando o preenchimento...');
  const id=globalThis.crypto?.randomUUID?crypto.randomUUID():`local-${Date.now()}`;
  try{
   const r=await fetch(API,{method:'POST',body:new FormData(form),cache:'no-store'});
   const raw=await r.text(); let data={}; try{data=raw?JSON.parse(raw):{}}catch(e){data={}}
   if(r.ok&&data.ok){try{sessionStorage.setItem(LAST,snap)}catch(e){};msgset(`✓ Matrícula de ${nome} salva com sucesso. Protocolo: ${data.id}`,true);btn.textContent='✓ Matrícula salva';setTimeout(()=>{btn.disabled=false;btn.textContent=originalText},2200);return}
   if(r.status!==404&&r.status!==503) throw new Error(data.error||`Erro ${r.status} ao salvar a matrícula.`);
  }catch(e){
   if(!String(e.message||'').startsWith('Erro 4')&&!String(e.message||'').startsWith('Erro 5')) throw e;
  }
  saveLocal({id,nome,curso:String(d.cursoGraduacao||''),data_solicitacao:String(d.dataSolicitacao||''),criado_em:Date.now(),dados:d});try{sessionStorage.setItem(LAST,snap)}catch(e){}
  msgset(`✓ Matrícula de ${nome} salva neste dispositivo.`,true);btn.textContent='✓ Salva';setTimeout(()=>{btn.disabled=false;btn.textContent=originalText},2200);
 }
 btn.addEventListener('click',enviar);form.addEventListener('submit',e=>e.preventDefault());
}
function boot(){init();[250,700,1400,2500,4000].forEach(ms=>setTimeout(init,ms))} if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();