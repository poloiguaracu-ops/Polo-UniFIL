(()=>{
'use strict';
function abrirSeguro(){
 const mat=document.getElementById('matriculasSection');
 if(mat){mat.classList.add('open');mat.setAttribute('aria-hidden','false');mat.querySelector('[name="nomeCompleto"]')?.focus();return true}
 const id='matriculasLoaderFallback';
 if(!document.getElementById(id)){
  const s=document.createElement('script');s.id=id;s.src='matriculas.js?v=2';s.async=false;document.body.appendChild(s);
 }
 return false;
}
function instalarVoltar(){
 const mat=document.getElementById('matriculasSection');
 const feitas=document.getElementById('matFeitasSection');
 if(!mat||!feitas)return false;
 const head=mat.querySelector('.matHead');
 const area=head?.firstElementChild;
 if(!area)return false;
 let b=area.querySelector('[data-voltar-matriculas-fix]');
 if(!b){
  b=document.createElement('button');b.type='button';b.dataset.voltarMatriculasFix='1';b.textContent='← Voltar para Matrículas feitas';
  b.style.cssText='display:block;margin:0 0 12px;padding:10px 15px;border:1px solid rgba(255,255,255,.3);border-radius:11px;background:rgba(255,255,255,.12);color:#fff;font-weight:900;font-size:11px;cursor:pointer';
  area.insertBefore(b,area.firstChild);
 }
 b.onclick=()=>{mat.classList.remove('open');mat.setAttribute('aria-hidden','true');feitas.classList.add('open');feitas.setAttribute('aria-hidden','false')};
 return true;
}
function boot(){
 document.addEventListener('click',e=>{
  const btn=e.target.closest?.('[data-edit]');
  if(!btn)return;
  setTimeout(()=>{
   if(!document.getElementById('matriculasSection')?.classList.contains('open'))abrirSeguro();
   instalarVoltar();
  },150);
  setTimeout(instalarVoltar,500);setTimeout(instalarVoltar,1200);
 },false);
 instalarVoltar();
 [250,700,1400,2500,4000,6000].forEach(ms=>setTimeout(instalarVoltar,ms));
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();
