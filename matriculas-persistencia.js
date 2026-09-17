(()=>{
'use strict';
const API='/api/matriculas';
const LAST='unifil_polo_ultima_matricula_enviada_v2';
function init(){
 const section=document.getElementById('matriculasSection'),form=document.getElementById('matriculaForm'),btn=document.getElementById('matSalvar'),msg=document.getElementById('matMsg');
 if(!section||!form||!btn||!msg||btn.dataset.persistenciaAtiva==='2') return;
 btn.dataset.persistenciaAtiva='2';
 const originalText=btn.textContent;
 const nomeEl=()=>document.getElementById('nomeCompleto')||form.querySelector('[name="nomeCompleto"]');
 const snapshot=()=>{const fd=new FormData(form),o=[];for(const [k,v] of fd.entries()){if(typeof v==='string'&&v.trim())o.push([k,v]);else if(v&&v.name)o.push([k,v.name,String(v.size||0),v.type||''])}return JSON.stringify(o)};
 const setMsg=(t,ok=false)=>{msg.textContent=t;msg.style.color=ok?'#26733a':'#716576';msg.style.fontWeight='800'};
 async function enviar(){
  const nome=String(nomeEl()?.value||'').trim();
  if(!nome){nomeEl()?.focus();setMsg('Digite pelo menos o nome do aluno para salvar.');return}
  const current=snapshot();
  try{if(sessionStorage.getItem(LAST)===current){setMsg('Esta matrícula já foi salva anteriormente.',true);return}}catch(e){}
  btn.disabled=true;btn.textContent='⏳ Salvando...';setMsg('Salvando a matrícula no sistema do Polo...');
  try{
   const r=await fetch(API,{method:'POST',body:new FormData(form),headers:{Accept:'application/json'}});
   const raw=await r.text();let data={};try{data=raw?JSON.parse(raw):{}}catch(e){throw new Error('O servidor não retornou uma resposta válida.')}
   if(!r.ok||!data.ok) throw new Error(data.error||`Erro ${r.status} ao salvar a matrícula.`);
   try{sessionStorage.setItem(LAST,current)}catch(e){}
   setMsg(`✓ Matrícula de ${nome} salva com sucesso. Protocolo: ${data.id}`,true);btn.textContent='✓ Matrícula salva';
   setTimeout(()=>{btn.disabled=false;btn.textContent=originalText},2200);
  }catch(e){setMsg(`⚠ ${e.message||'Não foi possível salvar a matrícula.'}`);btn.disabled=false;btn.textContent=originalText}
 }
 btn.addEventListener('click',enviar);
 form.addEventListener('submit',e=>e.preventDefault());
}
function boot(){init();[250,700,1400,2500,4000].forEach(ms=>setTimeout(init,ms))}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();