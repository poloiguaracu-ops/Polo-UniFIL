/* UniFil Polo Iguaraçu — busca rápida de cursos */
(function(){
  'use strict';
  const ID='buscaCursosRapida';
  const norm=s=>(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase().trim();
  let ultimo='';

  function acharBlocos(){
    const root=document.getElementById('cursoModulos');
    if(!root) return [];
    return Array.from(root.children).filter(el=>el.nodeType===1 && !el.matches('[data-busca-ui]'));
  }

  function textoDoBloco(el){
    const h=el.querySelector('h1,h2,h3,h4,strong');
    return norm((h?h.textContent:'')+' '+el.textContent);
  }

  function aplicar(valor,rolar){
    const q=norm(valor);
    ultimo=q;
    const blocos=acharBlocos();
    let encontrados=[];
    blocos.forEach(el=>{
      const ok=!q || textoDoBloco(el).includes(q);
      el.style.display=ok?'':'none';
      if(ok && q) encontrados.push(el);
    });
    const status=document.querySelector('[data-busca-status]');
    if(status){
      if(!q) status.textContent='Digite o nome do curso para encontrar rapidamente.';
      else if(encontrados.length) status.textContent=encontrados.length===1?'Curso encontrado.':'Cursos encontrados: '+encontrados.length+'.';
      else status.textContent='Nenhum curso encontrado. Tente outro nome.';
    }
    if(rolar && encontrados[0]){
      setTimeout(()=>encontrados[0].scrollIntoView({behavior:'smooth',block:'center'}),40);
    }
  }

  function montar(){
    if(document.getElementById(ID)) return true;
    const alvo=document.getElementById('cursoModulos');
    if(!alvo || !alvo.parentElement) return false;
    const box=document.createElement('div');
    box.id=ID;
    box.setAttribute('data-busca-ui','1');
    box.innerHTML=`<div class="buscaCursosCard" data-busca-ui="1">
      <div class="buscaCursosIcon">⌕</div>
      <div class="buscaCursosText"><strong>Encontre seu curso rapidamente</strong><span data-busca-status>Digite o nome do curso para encontrar rapidamente.</span></div>
      <div class="buscaCursosInputWrap"><input id="buscaCursoInput" type="search" autocomplete="off" placeholder="Digite o nome do curso..." aria-label="Pesquisar curso pelo nome"><button type="button" id="limparBuscaCurso" aria-label="Limpar busca">×</button></div>
    </div>`;
    alvo.parentElement.insertBefore(box,alvo);

    const input=box.querySelector('#buscaCursoInput');
    const limpar=box.querySelector('#limparBuscaCurso');
    input.addEventListener('input',()=>aplicar(input.value,false));
    input.addEventListener('keydown',e=>{
      if(e.key==='Enter') aplicar(input.value,true);
      if(e.key==='Escape'){input.value='';aplicar('',false);input.blur();}
    });
    limpar.addEventListener('click',()=>{input.value='';aplicar('',false);input.focus();});
    return true;
  }

  function css(){
    if(document.getElementById('buscaCursosCSS')) return;
    const s=document.createElement('style'); s.id='buscaCursosCSS';
    s.textContent=`#${ID}{margin:0 auto 22px;width:min(1180px,calc(100% - 32px));position:relative;z-index:20}.buscaCursosCard{display:grid;grid-template-columns:auto 1fr minmax(300px,520px);gap:14px;align-items:center;padding:16px 18px;border:1px solid #e4d8ea;border-radius:18px;background:linear-gradient(135deg,#250632,#5b1685);box-shadow:0 14px 35px rgba(37,6,50,.14);color:#fff}.buscaCursosIcon{width:45px;height:45px;border-radius:13px;background:#ff7000;display:grid;place-items:center;font-size:25px;font-weight:900}.buscaCursosText{display:flex;flex-direction:column;gap:2px}.buscaCursosText strong{font-size:15px}.buscaCursosText span{font-size:10px;color:#eadff0}.buscaCursosInputWrap{position:relative}.buscaCursosInputWrap input{width:100%;height:48px;border:2px solid rgba(255,255,255,.2);border-radius:13px;background:#fff;color:#211827;padding:0 44px 0 15px;font-size:13px;outline:0}.buscaCursosInputWrap input:focus{border-color:#ff9b3f;box-shadow:0 0 0 4px rgba(255,155,63,.18)}.buscaCursosInputWrap button{position:absolute;right:5px;top:5px;width:38px;height:38px;border:0;border-radius:10px;background:#f2edf5;color:#250632;font-size:24px;cursor:pointer}.buscaCursosInputWrap button:hover{background:#ff7000;color:#fff}@media(max-width:760px){#${ID}{width:calc(100% - 24px);margin-bottom:16px}.buscaCursosCard{grid-template-columns:auto 1fr;gap:10px;padding:14px}.buscaCursosInputWrap{grid-column:1/-1}.buscaCursosText strong{font-size:13px}.buscaCursosText span{font-size:9px}.buscaCursosInputWrap input{height:50px}}`;
    document.head.appendChild(s);
  }

  function iniciar(){
    css();
    montar();
    aplicar(document.getElementById('buscaCursoInput')?.value||'',false);
    const root=document.getElementById('cursoModulos');
    if(root && !root.__buscaCursosObserver){
      const obs=new MutationObserver(()=>{
        if(!document.getElementById(ID)) montar();
        if(ultimo) aplicar(ultimo,false);
      });
      obs.observe(root,{childList:true,subtree:true});
      root.__buscaCursosObserver=obs;
    }
  }

  function boot(){iniciar();[300,900,1800,3200,5000].forEach(ms=>setTimeout(iniciar,ms));
    const nav=document.createElement('script');nav.id='navegacaoRapidaLoader';nav.src='navegacao-rapida.js?v=1';nav.async=true;document.body.appendChild(nav);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{once:true}); else boot();
})();