(()=>{
'use strict';
function instalar(){
 const form=document.getElementById('matriculasSection');
 const feitas=document.getElementById('matFeitasSection');
 if(!form||!feitas)return false;
 const head=form.querySelector('.matHead');
 if(!head)return false;
 if(head.querySelector('[data-voltar-matriculas-feitas]'))return true;
 const s=document.createElement('style');
 s.id='voltarMatriculasFeitasStyle';
 s.textContent=`
 [data-voltar-matriculas-feitas]{display:inline-flex;align-items:center;gap:7px;margin:0 0 13px;padding:10px 15px;border:1px solid rgba(255,255,255,.28);border-radius:11px;background:rgba(255,255,255,.12);color:#fff;font:900 11px/1 Arial,sans-serif;cursor:pointer;transition:.2s}
 [data-voltar-matriculas-feitas]:hover{background:#ff7000;border-color:#ff7000;transform:translateX(-2px)}
 .matHead [data-voltar-matriculas-feitas]{display:flex}
 @media(max-width:760px){[data-voltar-matriculas-feitas]{font-size:10px;padding:9px 12px}}
 `;
 document.head.appendChild(s);
 const area=head.firstElementChild;
 if(!area)return false;
 const btn=document.createElement('button');
 btn.type='button';
 btn.setAttribute('data-voltar-matriculas-feitas','1');
 btn.setAttribute('aria-label','Voltar para Matrículas feitas');
 btn.textContent='← Voltar para Matrículas feitas';
 area.insertBefore(btn,area.firstChild);
 btn.addEventListener('click',()=>{
  form.classList.remove('open');
  form.setAttribute('aria-hidden','true');
  feitas.classList.add('open');
  feitas.setAttribute('aria-hidden','false');
 });
 return true;
}
function boot(){if(instalar())return;[200,500,1000,1800,3000,5000].forEach(ms=>setTimeout(instalar,ms))}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();
