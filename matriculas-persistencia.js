(()=>{
'use strict';
const API='/api/matriculas';
const LAST='unifil_polo_ultima_matricula_enviada_v1';

function init(){
  const section=document.getElementById('matriculasSection');
  const form=document.getElementById('matriculaForm');
  const btn=document.getElementById('matSalvar');
  const msg=document.getElementById('matMsg');
  if(!section||!form||!btn||!msg||btn.dataset.persistenciaAtiva) return;
  btn.dataset.persistenciaAtiva='1';
  const originalText=btn.textContent;

  const snapshot=()=>{
    const fd=new FormData(form), out=[];
    for(const [k,v] of fd.entries()){
      if(typeof v==='string') out.push([k,v]);
      else if(v&&v.name) out.push([k,v.name,String(v.size||0),v.type||'']);
    }
    return JSON.stringify(out);
  };

  function setMsg(text,ok=false){
    msg.textContent=text;
    msg.style.color=ok?'#26733a':'#716576';
    msg.style.fontWeight=ok?'900':'700';
  }

  async function enviar(){
    const nome=document.getElementById('nomeCompleto');
    if(!nome||!String(nome.value||'').trim()){
      nome?.focus();
      setMsg('Digite pelo menos o nome do aluno para salvar a matrícula.');
      return;
    }

    const current=snapshot();
    let last='';
    try{last=sessionStorage.getItem(LAST)||'';}catch(e){}
    if(last===current){
      setMsg('Esta matrícula já foi salva. Altere algum dado para salvar uma nova versão.',true);
      return;
    }

    btn.disabled=true;
    btn.textContent='⏳ Salvando...';
    setMsg('Salvando o preenchimento no sistema do Polo...');

    try{
      const response=await fetch(API,{method:'POST',body:new FormData(form)});
      const data=await response.json().catch(()=>({}));
      if(!response.ok||!data.ok) throw new Error(data.error||'Não foi possível salvar a matrícula.');
      try{sessionStorage.setItem(LAST,current);}catch(e){}
      setMsg(`✓ Preenchimento salvo no sistema do Polo. Protocolo: ${data.id}`,true);
      btn.textContent='✓ Preenchimento salvo';
      setTimeout(()=>{btn.disabled=false;btn.textContent=originalText;},2200);
    }catch(error){
      setMsg(`⚠ ${error.message||'Erro ao salvar.'}`);
      btn.disabled=false;
      btn.textContent=originalText;
    }
  }

  btn.addEventListener('click',enviar);
  form.addEventListener('submit',e=>e.preventDefault());
}

function boot(){
  init();
  [250,700,1400,2500,4000].forEach(ms=>setTimeout(init,ms));
}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{once:true}); else boot();
})();