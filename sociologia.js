/* UniFil Polo Iguaraçu — Sociologia */
(function(){
  const ROOT_ID='sociologiaBlock';
  const WA='https://wa.me/5544997239673?text=Tenho%20interesse%20no%20curso%20de%20Sociologia';
  function render(){
    const host=document.getElementById('cursoModulos')||document.querySelector('.courseSection .wrap');
    if(!host)return false;
    let root=document.getElementById(ROOT_ID);
    if(!root){root=document.createElement('article');root.id=ROOT_ID;host.appendChild(root)}
    if(root.dataset.rendered==='1')return true;
    root.dataset.rendered='1';
    root.innerHTML=`<style>
      #${ROOT_ID}{margin:22px 0;border-radius:24px;overflow:hidden;background:linear-gradient(135deg,#250632 0%,#5b1685 72%,#70219b 100%);color:#fff;box-shadow:0 18px 45px rgba(37,6,50,.18)}
      #${ROOT_ID} .soInner{padding:30px} #${ROOT_ID} .soBadge{display:inline-flex;padding:8px 12px;border-radius:999px;background:#ff7000;color:#fff;font-weight:800;font-size:12px;letter-spacing:.05em}
      #${ROOT_ID} h2{margin:14px 0 10px;font-size:clamp(25px,4vw,38px);line-height:1.05} #${ROOT_ID} .soIntro{max-width:950px;color:rgba(255,255,255,.9);line-height:1.7;font-size:16px}
      #${ROOT_ID} .soMeta{display:flex;flex-wrap:wrap;gap:9px;margin:18px 0} #${ROOT_ID} .soMeta span{padding:8px 12px;border:1px solid rgba(255,255,255,.2);border-radius:999px;background:rgba(255,255,255,.08);font-weight:700;font-size:13px}
      #${ROOT_ID} button,#${ROOT_ID} .soInterest{border:0;cursor:pointer;border-radius:14px;padding:13px 17px;font-weight:800;font-size:14px} #${ROOT_ID} .soBtn{background:#ff7000;color:#fff;box-shadow:0 10px 24px rgba(255,112,0,.22)}
      #${ROOT_ID} .soBody{margin-top:22px;background:#fff;color:#211827;border-radius:18px;padding:24px} #${ROOT_ID} .soClose{background:#250632;color:#fff;margin-bottom:18px}
      #${ROOT_ID} .soBody h3{color:#5b1685;margin:20px 0 8px;font-size:20px} #${ROOT_ID} .soBody p{line-height:1.75;margin:0 0 12px}
      #${ROOT_ID} .soDuration{display:inline-block;margin-top:6px;padding:10px 14px;border-radius:12px;background:#fff1e7;color:#8a3b00;font-weight:800}
      #${ROOT_ID} .soInterest{display:inline-block;margin-top:20px;background:#ff7000;color:#fff;text-decoration:none}
      @media(max-width:600px){#${ROOT_ID} .soInner{padding:22px}#${ROOT_ID} .soBody{padding:18px}}
    </style><div class="soInner"><span class="soBadge">LICENCIATURA • EAD</span><h2>Sociologia</h2><p class="soIntro">O curso de Sociologia da UniFil EAD prepara profissionais capazes de compreender, interpretar e analisar as dinâmicas sociais que estruturam a vida coletiva. Com formação teórica consistente, o estudante desenvolve habilidades de pesquisa, leitura crítica da realidade, elaboração de diagnósticos sociais e reflexão sobre desigualdades, culturas, políticas públicas e processos sociais contemporâneos.</p><div class="soMeta"><span>Licenciatura</span><span>EAD</span><span>4 anos</span></div><button class="soBtn" type="button">Ver informações do curso →</button><div class="soBody" hidden><button class="soClose" type="button">← Fechar informações</button><h3>Sobre o curso</h3><p>O curso de Sociologia da UniFil EAD prepara profissionais capazes de compreender, interpretar e analisar as dinâmicas sociais que estruturam a vida coletiva. Com formação teórica consistente, o estudante desenvolve habilidades de pesquisa, leitura crítica da realidade, elaboração de diagnósticos sociais e reflexão sobre desigualdades, culturas, políticas públicas e processos sociais contemporâneos.</p><h3>Quais áreas poderei atuar como profissional em Sociologia?</h3><p>O sociólogo pode atuar em órgãos públicos, organizações da sociedade civil, institutos de pesquisa, escolas, consultorias, empresas privadas e projetos sociais. Sua atuação abrange pesquisas sociais, planejamento e avaliação de políticas públicas, análise de dados sociais, mediação comunitária, educação, consultoria em diversidade e responsabilidade social.</p><p>Dessa forma, o curso promove uma formação crítica e comprometida com a compreensão e transformação da realidade social.</p><div class="soDuration">4 anos de curso</div><br><a class="soInterest" href="${WA}" target="_blank" rel="noopener">Tenho interesse no curso</a></div></div>`;
    const btn=root.querySelector('.soBtn'),body=root.querySelector('.soBody'),close=root.querySelector('.soClose');
    btn.onclick=()=>{body.hidden=false;btn.hidden=true};
    close.onclick=()=>{body.hidden=true;btn.hidden=false};
    return true;
  }
  function start(){if(render())return;setTimeout(render,400);setTimeout(render,1000);setTimeout(render,1800);setTimeout(render,2800)}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
