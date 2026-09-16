/* UniFil Polo Iguaraçu — Mídias Sociais Digitais */
(function(){
  const rootId='midiasSociaisBlock';
  const WA='https://wa.me/5544997239673?text=Tenho%20interesse%20no%20curso%20de%20M%C3%ADdias%20Sociais%20Digitais';

  function render(){
    const target=document.getElementById('cursoModulos') || document.querySelector('.courseSection .wrap');
    if(!target || document.getElementById(rootId)) return;
    const el=document.createElement('article');
    el.id=rootId;
    el.innerHTML=`
      <style>
        #${rootId}{margin:28px 0;border-radius:24px;overflow:hidden;background:linear-gradient(135deg,#250632 0%,#5b1685 72%,#70219b 100%);color:#fff;box-shadow:0 18px 50px rgba(37,6,50,.16)}
        #${rootId} .msdInner{padding:32px}
        #${rootId} .msdBadge{display:inline-flex;padding:7px 12px;border-radius:999px;background:rgba(255,112,0,.18);border:1px solid rgba(255,155,63,.5);color:#ffb16b;font-weight:800;font-size:12px;letter-spacing:.05em}
        #${rootId} h2{margin:12px 0 8px;font-size:clamp(26px,4vw,40px);line-height:1.05;color:#fff}
        #${rootId} .msdIntro{margin:0;max-width:900px;color:#f4eafa;line-height:1.75;font-size:16px}
        #${rootId} .msdMeta{display:flex;flex-wrap:wrap;gap:9px;margin:20px 0}
        #${rootId} .msdMeta span{padding:8px 12px;border-radius:12px;background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.14);font-weight:700;font-size:13px}
        #${rootId} .msdBtn{border:0;border-radius:13px;padding:13px 17px;background:#ff7000;color:#fff;font-weight:900;cursor:pointer;box-shadow:0 10px 24px rgba(255,112,0,.25)}
        #${rootId} .msdPanel{margin-top:22px;background:#fff;color:#211827;border-radius:18px;padding:26px;line-height:1.7}
        #${rootId} .msdPanel[hidden]{display:none}
        #${rootId} .msdClose{border:0;background:transparent;color:#5b1685;font-weight:900;font-size:15px;cursor:pointer;padding:0;margin-bottom:18px}
        #${rootId} .msdPanel h3{color:#5b1685;margin:20px 0 8px;font-size:20px}
        #${rootId} .msdPanel h3:first-of-type{margin-top:0}
        #${rootId} .msdPanel p{margin:0;color:#4f4553}
        #${rootId} .msdArea{margin-top:16px;padding:18px;border-radius:15px;background:#f7f2fa;border-left:4px solid #ff7000}
        #${rootId} .msdWhats{display:inline-block;margin-top:22px;text-decoration:none;background:#ff7000;color:#fff;padding:13px 18px;border-radius:12px;font-weight:900}
        @media(max-width:650px){#${rootId} .msdInner{padding:22px}#${rootId} .msdPanel{padding:20px}}
      </style>
      <div class="msdInner">
        <span class="msdBadge">NOVO • TECNÓLOGO • EAD</span>
        <h2>Mídias Sociais Digitais</h2>
        <p class="msdIntro">O curso de Tecnologia em Mídias Sociais Digitais da UniFil EAD prepara profissionais para planejar, produzir e gerenciar conteúdos e estratégias nos ambientes digitais. O estudante desenvolve competências em comunicação, marketing digital, análise de métricas, comportamento do usuário e gestão de comunidades online.</p>
        <div class="msdMeta"><span>Tecnólogo</span><span>EAD</span><span>2 anos</span></div>
        <button class="msdBtn" type="button" data-open-midia>Ver informações do curso →</button>
        <div class="msdPanel" data-midia-panel hidden>
          <button class="msdClose" type="button" data-close-midia>← Fechar informações</button>
          <h3>Sobre o curso</h3>
          <p>O curso de Tecnologia em Mídias Sociais Digitais da UniFil EAD prepara profissionais para planejar, produzir e gerenciar conteúdos e estratégias nos ambientes digitais. O estudante desenvolve competências em comunicação, marketing digital, análise de métricas, comportamento do usuário e gestão de comunidades online.</p>
          <div class="msdArea">
            <h3>Quais áreas poderei atuar como profissional em Mídias Sociais Digitais?</h3>
            <p>O tecnólogo pode atuar em agências de comunicação, departamentos de marketing, empresas privadas, órgãos públicos, startups, ONGs e como consultor ou social media independente. Suas atribuições envolvem gestão de redes sociais, produção de conteúdo, monitoramento de dados, criação de campanhas, atendimento digital, branding e relacionamento com o público.</p>
          </div>
          <h3>Formação profissional</h3>
          <p>Assim, o curso proporciona uma formação dinâmica e atualizada, capacitando profissionais a atuar de forma estratégica no ecossistema digital contemporâneo.</p>
          <h3>Duração</h3>
          <p><strong>2 anos de curso.</strong></p>
          <a class="msdWhats" href="${WA}" target="_blank" rel="noopener">Tenho interesse neste curso</a>
        </div>
      </div>`;
    target.appendChild(el);
    const open=el.querySelector('[data-open-midia]'), close=el.querySelector('[data-close-midia]'), panel=el.querySelector('[data-midia-panel]');
    open.addEventListener('click',()=>{panel.hidden=false;open.hidden=true;el.scrollIntoView({behavior:'smooth',block:'center'})});
    close.addEventListener('click',()=>{panel.hidden=true;open.hidden=false;el.scrollIntoView({behavior:'smooth',block:'center'})});
  }
  function start(){render();setTimeout(render,400);setTimeout(render,1200)}
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start,{once:true}); else start();
})();
