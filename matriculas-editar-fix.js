(()=>{
'use strict';
function instalarVoltar(){
 const mat=document.getElementById('matriculasSection'),feitas=document.getElementById('matFeitasSection');
 if(!mat||!feitas)return false;
 const head=mat.querySelector('.matHead'),area=head?.firstElementChild;
 if(!area)return false;
 let b=area.querySelector('[data-voltar-matriculas-fix]');
 if(!b){
  b=document.createElement('button');b.type='button';b.dataset.voltarMatriculasFix='1';b.textContent='← Voltar para Matrículas feitas';
  b.style.cssText='display:block;margin:0 0 12px;padding:10px 15px;border:1px solid rgba(255,255,255,.3);border-radius:11px;background:rgba(255,255,255,.12);color:#fff;font-weight:900;font-size:11px;cursor:pointer';
  area.insertBefore(b,area.firstChild);
 }
 b.onclick=()=>{mat.classList.remove('open');mat.setAttribute('aria-hidden','true');document.documentElement.style.overflow='';document.body.style.overflow='';feitas.classList.add('open');feitas.setAttribute('aria-hidden','false');feitas.querySelector('#mfBusca')?.focus()};
 return true;
}
function boot(){
 instalarVoltar();
 [250,700,1400,2500,4000,6000].forEach(ms=>setTimeout(instalarVoltar,ms));
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();
