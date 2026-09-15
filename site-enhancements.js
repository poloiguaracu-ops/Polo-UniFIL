/* UNIFIL POLO IGUARACU — CAMADA DE EXPERIENCIA PREMIUM */
(function(){
  'use strict';
  const WA='https://wa.me/5544997239673';
  const $=(s,r=document)=>r.querySelector(s);
  const $$=(s,r=document)=>[...r.querySelectorAll(s)];
  const toast=(msg)=>{let t=$('.ux-toast');if(!t){t=document.createElement('div');t.className='ux-toast';document.body.appendChild(t)}t.textContent=msg;t.classList.add('show');clearTimeout(t._t);t._t=setTimeout(()=>t.classList.remove('show'),1800)};

  function inject(){
    const st=document.createElement('style');
    st.textContent=`
      :root{--ux-purple:#250632;--ux-purple2:#5b1685;--ux-orange:#ff7000;--ux-orange2:#ff9b3f}
      html{scroll-behavior:smooth}
      body{overflow-x:hidden}
      .ux-progress{position:fixed;left:0;top:0;height:3px;width:0;background:linear-gradient(90deg,var(--ux-orange),#ffb15e);z-index:9999;box-shadow:0 0 12px rgba(255,112,0,.5)}
      .ux-toast{position:fixed;left:50%;bottom:24px;transform:translate(-50%,20px);opacity:0;pointer-events:none;background:var(--ux-purple);color:#fff;border-radius:999px;padding:11px 17px;font-size:11px;font-weight:900;z-index:10000;box-shadow:0 14px 40px rgba(0,0,0,.25);transition:.25s}.ux-toast.show{opacity:1;transform:translate(-50%,0)}
      .ux-menu{display:none;border:1px solid #e5dce9;background:#fff;color:var(--ux-purple);border-radius:11px;width:43px;height:43px;font-size:21px;cursor:pointer;font-weight:900}
      .ux-mobile-open{display:flex!important}
      .ux-floating{position:fixed;right:18px;bottom:18px;z-index:500;display:grid;gap:8px}.ux-float-btn{width:52px;height:52px;border:0;border-radius:50%;display:grid;place-items:center;cursor:pointer;font-size:21px;box-shadow:0 12px 30px rgba(0,0,0,.2)}.ux-float-wa{background:#25d366;color:#fff}.ux-float-top{background:var(--ux-purple);color:#fff;display:none}.ux-float-top.show{display:grid}
      .ux-service{margin:0 0 20px;padding:18px 20px;border-radius:18px;background:linear-gradient(135deg,#fff7f0,#fff);border:1px solid #f1d9c5;display:flex;justify-content:space-between;align-items:center;gap:15px}.ux-service strong{color:var(--ux-purple);font-size:14px}.ux-service span{display:block;color:#756778;font-size:10px;margin-top:3px}.ux-service button{border:0;border-radius:11px;background:var(--ux-orange);color:#fff;padding:11px 14px;font-size:10px;font-weight:900;cursor:pointer;white-space:nowrap}
      .ux-section{padding:72px 0;background:#fff}.ux-section.alt{background:#faf7fc}.ux-section .ux-title{text-align:center;max-width:760px;margin:0 auto 30px}.ux-title small{color:var(--ux-orange);font-size:9px;font-weight:1000;letter-spacing:1.5px}.ux-title h2{color:var(--ux-purple);font-size:clamp(30px,4vw,46px);line-height:1.05;letter-spacing:-1.7px;margin:8px 0}.ux-title p{color:#716576;font-size:13px}
      .ux-featured{display:grid;grid-template-columns:repeat(3,1fr);gap:13px}.ux-feature-card{border:1px solid #e7dfeb;border-radius:22px;background:#fff;padding:22px;position:relative;overflow:hidden;transition:.22s;box-shadow:0 8px 30px rgba(37,6,50,.04)}.ux-feature-card:hover{transform:translateY(-5px);box-shadow:0 18px 45px rgba(37,6,50,.11)}.ux-feature-card:before{content:"";position:absolute;left:0;top:0;right:0;height:4px;background:linear-gradient(90deg,var(--ux-orange),var(--ux-orange2))}.ux-feature-card .num{font-size:9px;font-weight:1000;color:var(--ux-orange);letter-spacing:1px}.ux-feature-card h3{color:var(--ux-purple);font-size:20px;line-height:1.1;margin:13px 0 7px}.ux-feature-card p{color:#716576;font-size:11px;line-height:1.65;margin:0}.ux-feature-card button{margin-top:16px;border:0;background:#f5edf9;color:var(--ux-purple2);border-radius:10px;padding:9px 11px;font-size:10px;font-weight:900;cursor:pointer}
      .ux-favs-panel{display:none;margin-top:13px;border:1px solid #e7dfeb;border-radius:20px;background:#fff;padding:18px}.ux-favs-panel.open{display:block}.ux-favs-head{display:flex;justify-content:space-between;align-items:center;gap:10px}.ux-favs-head h3{color:var(--ux-purple);margin:0;font-size:16px}.ux-favs-head button{border:0;background:#f4edf7;color:var(--ux-purple);border-radius:9px;padding:8px 10px;font-size:9px;font-weight:900;cursor:pointer}.ux-favs-list{display:flex;gap:7px;flex-wrap:wrap;margin-top:12px}.ux-fav-chip{border:1px solid #e7dfeb;background:#faf8fc;border-radius:999px;padding:8px 10px;color:var(--ux-purple);font-size:10px;font-weight:900;cursor:pointer}
      .ux-mode{position:fixed;inset:0;z-index:800;background:#fff;display:none;overflow:auto}.ux-mode.open{display:block}.ux-mode-head{position:sticky;top:0;background:var(--ux-purple);color:#fff;padding:15px 20px;display:flex;justify-content:space-between;align-items:center;gap:15px;z-index:2}.ux-mode-head strong{font-size:13px}.ux-mode-head button{border:0;background:rgba(255,255,255,.12);color:#fff;border-radius:9px;padding:9px 12px;font-weight:900;cursor:pointer}.ux-mode-body{width:min(1000px,calc(100% - 34px));margin:auto;padding:45px 0 70px}.ux-mode-body .mode-kicker{color:var(--ux-orange);font-size:10px;font-weight:1000;letter-spacing:1.5px}.ux-mode-body h1{color:var(--ux-purple);font-size:clamp(38px,6vw,64px);line-height:.98;letter-spacing:-3px;margin:12px 0}.ux-mode-body .mode-meta{display:flex;gap:8px;flex-wrap:wrap}.ux-mode-body .mode-meta span{background:#f5edf9;color:var(--ux-purple2);border-radius:999px;padding:8px 11px;font-size:10px;font-weight:900}.ux-mode-body .mode-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:30px}.ux-mode-body article{border:1px solid #e7dfeb;border-radius:18px;padding:20px}.ux-mode-body article.full{grid-column:1/-1}.ux-mode-body h2{color:var(--ux-purple);font-size:18px;margin:0 0 9px}.ux-mode-body p,.ux-mode-body li{color:#716576;font-size:12px;line-height:1.7}.ux-mode-body ul{padding-left:19px}.ux-mode-actions{display:flex;gap:9px;flex-wrap:wrap;margin-top:25px}.ux-mode-actions a,.ux-mode-actions button{border:0;border-radius:12px;padding:13px 16px;font-size:11px;font-weight:900;cursor:pointer;text-decoration:none}.ux-mode-actions a{background:var(--ux-orange);color:#fff}.ux-mode-actions button{background:#f3edf7;color:var(--ux-purple)}
      .ux-modal-tools{display:flex;gap:7px;flex-wrap:wrap;margin-top:13px}.ux-modal-tools button{border:0;border-radius:10px;padding:10px 12px;background:#f3edf7;color:var(--ux-purple);font-size:10px;font-weight:900;cursor:pointer}.ux-modal-tools button.primary{background:var(--ux-orange);color:#fff}
      @media(max-width:850px){.ux-featured{grid-template-columns:1fr}.ux-service{align-items:flex-start}.ux-menu{display:block}.links.ux-mobile{display:none}.links.ux-mobile-open{position:absolute;left:12px;right:12px;top:70px;background:#fff;border:1px solid #e7dfeb;border-radius:16px;padding:8px;box-shadow:0 18px 40px rgba(37,6,50,.14);flex-direction:column}.links.ux-mobile-open a{width:100%}.navin{position:relative}.ux-mode-body .mode-grid{grid-template-columns:1fr}.ux-mode-body article.full{grid-column:auto}}
      @media(max-width:600px){.ux-service{display:grid}.ux-service button{width:100%}.ux-floating{right:12px;bottom:12px}.ux-float-btn{width:48px;height:48px}.ux-section{padding:58px 0}}
    `;
    document.head.appendChild(st);
    const prog=document.createElement('div');prog.className='ux-progress';document.body.appendChild(prog);
    window.addEventListener('scroll',()=>{const d=document.documentElement;prog.style.width=((d.scrollTop/(d.scrollHeight-d.clientHeight))*100)+'%';},{passive:true});
  }

  function mobileMenu(){
    const nav=$('.links');const navin=$('.navin');if(!nav||!navin||$('.ux-menu',navin))return;
    const b=document.createElement('button');b.className='ux-menu';b.setAttribute('aria-label','Abrir menu');b.textContent='☰';navin.appendChild(b);
    b.onclick=()=>{nav.classList.toggle('ux-mobile-open');b.textContent=nav.classList.contains('ux-mobile-open')?'×':'☰'};
    $$('.links a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('ux-mobile-open');b.textContent='☰'}));
  }

  function floating(){
    const box=document.createElement('div');box.className='ux-floating';box.innerHTML=`<a class="ux-float-btn ux-float-wa" href="${WA}?text=${encodeURIComponent('Olá! Gostaria de informações sobre os cursos do Polo UniFil Iguaraçu.') }" target="_blank" rel="noopener" aria-label="Falar no WhatsApp">◉</a><button class="ux-float-btn ux-float-top" aria-label="Voltar ao topo">↑</button>`;document.body.appendChild(box);
    const top=$('.ux-float-top',box);window.addEventListener('scroll',()=>top.classList.toggle('show',scrollY>500),{passive:true});top.onclick=()=>scrollTo({top:0,behavior:'smooth'});
  }

  function atendimentoBanner(){
    const grid=$('#grid');if(!grid)return;
    const parent=grid.parentElement; if(!parent||$('.ux-service',parent))return;
    const box=document.createElement('div');box.className='ux-service';box.innerHTML='<div><strong>👩‍🎓 Atendimento no Polo</strong><span>Use o site durante o atendimento para apresentar cursos, conteúdos e possibilidades ao aluno.</span></div><button id="uxAtendimento">Abrir modo atendimento</button>';
    parent.insertBefore(box,grid);
    $('#uxAtendimento').onclick=()=>openMode(CURSOS&&CURSOS[0]);
  }

  function addFeatured(){
    if(!window.CURSOS||$('#uxFeatured'))return;
    const target=$('#cursos');if(!target)return;
    const sec=document.createElement('section');sec.className='ux-section alt';sec.id='uxFeatured';sec.innerHTML='<div class="wrap"><div class="ux-title"><small>DESTAQUES PARA COMEÇAR</small><h2>Três caminhos para você explorar agora.</h2><p>Escolha uma formação abaixo e veja rapidamente o que ela envolve.</p></div><div class="ux-featured" id="uxFeaturedGrid"></div></div>';
    target.parentNode.insertBefore(sec,target);
    const picks=['Administração','Pedagogia','Análise e Desenvolvimento de Sistemas'];
    const arr=picks.map(n=>CURSOS.find(c=>c.nome===n)).filter(Boolean);
    $('#uxFeaturedGrid').innerHTML=arr.map((c,i)=>`<article class="ux-feature-card"><span class="num">0${i+1} • ${c.categoria||'FORMAÇÃO'}</span><h3>${c.nome}</h3><p>${c.descricao}</p><div class="feature-meta" style="display:flex;gap:6px;flex-wrap:wrap;margin-top:13px"><span style="background:#f8f4fa;color:#5b1685;border-radius:8px;padding:6px 8px;font-size:9px;font-weight:900">${c.modalidade}</span><span style="background:#fff4eb;color:#b64b00;border-radius:8px;padding:6px 8px;font-size:9px;font-weight:900">${c.duracao}</span></div><button data-course="${c.nome.replace(/"/g,'&quot;')}">Ver formação →</button></article>`).join('');
    $$('.ux-feature-card button').forEach(b=>b.onclick=()=>openCourseByName(b.dataset.course));
  }

  function openCourseByName(name){
    const i=window.CURSOS?.findIndex(c=>c.nome===name);if(i<0)return;
    const card=$$('.course').find(x=>+x.dataset.i===i);if(card){card.click();return;}
    if(window.location.hash!==`#curso=${encodeURIComponent(name)}`)window.location.hash=`curso=${encodeURIComponent(name)}`;
  }

  function favPanel(){
    const grid=$('#grid');if(!grid||$('.ux-favs-panel'))return;
    const p=document.createElement('div');p.className='ux-favs-panel';p.innerHTML='<div class="ux-favs-head"><h3>★ Meus cursos salvos</h3><button id="uxCloseFav">Fechar</button></div><div class="ux-favs-list" id="uxFavList"></div>';
    grid.parentElement.insertBefore(p,grid);
    function render(){const names=JSON.parse(localStorage.getItem('unifil_favoritos')||'[]');$('#uxFavList').innerHTML=names.length?names.map(n=>`<button class="ux-fav-chip" data-name="${n.replace(/"/g,'&quot;')}">★ ${n}</button>`).join(''):'<span style="font-size:10px;color:#716576">Você ainda não salvou nenhum curso. Use a estrela nos cursos.</span>';$$('.ux-fav-chip',p).forEach(b=>b.onclick=()=>openCourseByName(b.dataset.name))}
    window.renderUniFilFavs=render;$('#uxCloseFav').onclick=()=>p.classList.remove('open');render();
    const bar=document.createElement('div');bar.style.cssText='display:flex;justify-content:flex-end;margin:0 0 10px';bar.innerHTML='<button class="favorites-toggle" id="uxFavOpen">★ Ver meus cursos salvos</button>';grid.parentElement.insertBefore(bar,p);$('#uxFavOpen').onclick=()=>{p.classList.toggle('open');render()};
  }

  function openMode(c){
    if(!c)return toast('Abra um curso primeiro para usar o modo atendimento.');
    let m=$('.ux-mode');if(!m){m=document.createElement('div');m.className='ux-mode';document.body.appendChild(m)}
    m.innerHTML=`<div class="ux-mode-head"><strong>UNIFIL • MODO ATENDIMENTO</strong><button id="uxModeClose">Fechar ×</button></div><div class="ux-mode-body"><div class="mode-kicker">POLO IGUARAÇU • APRESENTAÇÃO DO CURSO</div><h1>${c.nome}</h1><div class="mode-meta"><span>${c.categoria}</span><span>${c.modalidade}</span><span>${c.duracao}</span></div><div class="mode-grid"><article><h2>O que é esta formação?</h2><p>${c.detalhes||c.descricao}</p></article><article><h2>Onde pode atuar?</h2><p>${c.atuacao||'Consulte o Polo para conhecer as possibilidades de atuação.'}</p></article><article class="full"><h2>O que você vai estudar?</h2><ul>${(c.conteudos||[]).map(x=>`<li>${x}</li>`).join('')}</ul></article></div><div class="ux-mode-actions"><a href="${WA}?text=${encodeURIComponent('Olá! Gostaria de saber mais sobre o curso de '+c.nome+' no Polo UniFil Iguaraçu.') }" target="_blank" rel="noopener">💬 Conversar com o Polo</a><button id="uxModePrint">🖨 Imprimir</button></div></div>`;
    m.classList.add('open');document.body.style.overflow='hidden';$('#uxModeClose',m).onclick=closeMode;$('#uxModePrint',m).onclick=()=>window.print();
  }
  function closeMode(){const m=$('.ux-mode');if(m)m.classList.remove('open');document.body.style.overflow='';}

  function enhanceModal(){
    const modal=$('.modal');if(!modal||modal.dataset.ux)return;
    modal.dataset.ux=1;
    const obs=new MutationObserver(()=>{
      const dialog=$('.dialog',modal);if(!dialog)return;
      if($('.ux-modal-tools',dialog))return;
      const h=$('.dialogTop',dialog);if(!h)return;
      const tools=document.createElement('div');tools.className='ux-modal-tools';tools.innerHTML='<button class="primary" id="uxModeOpen">📺 Modo atendimento</button><button id="uxShare">↗ Compartilhar</button><button id="uxPrint">🖨 Imprimir</button>';
      h.parentElement.insertBefore(tools,h.nextSibling);
      $('#uxModeOpen',tools).onclick=()=>{const title=$('.dialogTop h2',dialog)?.textContent.trim();const c=CURSOS?.find(x=>x.nome===title);openMode(c)};
      $('#uxPrint',tools).onclick=()=>window.print();
      $('#uxShare',tools).onclick=async()=>{const title=$('.dialogTop h2',dialog)?.textContent.trim()||'curso';const url=location.href.split('#')[0]+'#curso='+encodeURIComponent(title);try{if(navigator.share)await navigator.share({title:'UniFil — '+title,text:'Conheça este curso no Polo UniFil Iguaraçu.',url});else{await navigator.clipboard.writeText(url);toast('Link do curso copiado!')}}catch(e){}}
    });obs.observe(modal,{childList:true,subtree:true});
  }

  function keyboard(){document.addEventListener('keydown',e=>{if(e.key==='Escape')closeMode();if(e.key==='/'&&document.activeElement?.tagName!=='INPUT'){e.preventDefault();const s=$('.search input');if(s)s.focus()}})}

  function start(){
    inject();mobileMenu();floating();addFeatured();atendimentoBanner();favPanel();enhanceModal();keyboard();
    const mo=new MutationObserver(()=>{if(window.renderUniFilFavs)window.renderUniFilFavs()});
    if($('#grid'))mo.observe($('#grid'),{childList:true,subtree:true});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>setTimeout(start,150));else setTimeout(start,150);
})();