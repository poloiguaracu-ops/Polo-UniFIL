(()=>{
'use strict';
function ajustar(){
 const radios=document.querySelectorAll('#matriculaForm input[name="modalidade"]');
 radios.forEach(r=>{if(r.value==='Semipresencial'){const label=r.closest('label');if(label)label.remove();r.remove()}});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(ajustar,80),{once:true});else setTimeout(ajustar,80);
})();