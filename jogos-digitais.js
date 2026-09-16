/* UniFil Polo Iguaraçu — Jogos Digitais */
(function(){
  const ROOT_ID='jogosDigitaisBlock';
  const WA='https://wa.me/5544997239673?text=Tenho%20interesse%20no%20curso%20de%20Jogos%20Digitais';
  function render(){
    const host=document.getElementById('cursoModulos')||document.querySelector('.courseSection .wrap');
    if(!host)return false;
    let root=document.getElementById(ROOT_ID);
    if(!root){root=document.createElement('article');root.id=ROOT_ID;host.appendChild(root)}
    if(root.dataset.rendered==='1')return true;
    root.dataset.rendered='1';
    root.innerHTML=`<style>
      #${ROOT_ID}{margin:22px 0;border-radius:24px;overflow:hidden;background:linear-gradient(135deg,#250632 0%,#5b1685 72%,#70219b 100%);color:#fff;box-shadow:0 18px 45px rgba(37,6,50,.18)}
      #${ROOT_ID} .jdInner{padding:30px} #${ROOT_ID} .jdBadge{display:inline-flex;padding:8px 12px;border-radius:999px;background:#ff7000;color:#fff;font-weight:800;font-size:12px;letter-spacing:.05em}
      #${ROOT_ID} h2{margin:14px 0 10px;font-size:clamp(25px,4vw,38px);line-height:1.05} #${ROOT_ID} .jdIntro{max-width:950px;color:rgba(255,255,255,.9);line-height:1.7;font-size:16px}
      #${ROOT_ID} .jdMeta{display:flex;flex-wrap:wrap;gap:9px;margin:18px 0} #${ROOT_ID} .jdMeta span{padding:8px 12px;border:1px solid rgba(255,255,255,.2);border-radius:999px;background:rgba(255,255,255,.08);font-weight:700;font-size:13px}
      #${ROOT_ID} button,#${ROOT_ID} .jdInterest{border:0;cursor:pointer;border-radius:14px;padding:13px 17px;font-weight:800;font-size:14px} #${ROOT_ID} .jdBtn{background:#ff7000;color:#fff;box-shadow:0 10px 24px rgba(255,112,0,.22)}
      #${ROOT_ID} .jdBody{margin-top:22px;background:#fff;color:#211827;border-radius:18px;padding:24px} #${ROOT_ID} .jdClose{background:#250632;color:#fff;margin-bottom:18px}
      #${ROOT_ID} .jdBody h3{color:#5b1685;margin:20px 0 8px;font-size:20px} #${ROOT_ID} .jdBody p{line-height:1.75;margin:0 0 12px}
      #${ROOT_ID} .jdDuration{display:inline-block;margin-top:6px;padding:10px 14px;border-radius:12px;background:#fff1e7;color:#8a3b00;font-weight:800}
      #${ROOT_ID} .jdInterest{display:inline-block;margin-top:20px;background:#ff7000;color:#fff;text-decoration:none}
      @media(max-width:600px){#${ROOT_ID} .jdInner{padding:22px}#${ROOT_ID} .jdBody{padding:18px}}
    </style><div class="jdInner"><span class="jdBadge">TECNÓLOGO • EAD</span><h2>Jogos Digitais</h2><p class="jdIntro">O curso de Tecnologia em Jogos Digitais da UniFil EAD forma profissionais capacitados a desenvolver, projetar e implementar jogos eletrônicos para diversas plataformas. Com base em programação, design, modelagem, narrativa e mecânicas de jogo, o estudante desenvolve competências para atuar na criação de experiências imersivas e interativas.</p><div class="jdMeta"><span>Tecnólogo</span><span>EAD</span><span>2 anos</span></div><button class="jdBtn" type="button">Ver informações do curso →</button><div class="jdBody" hidden><button class="jdClose" type="button">← Fechar informações</button><h3>Sobre o curso</h3><p>O curso de Tecnologia em Jogos Digitais da UniFil EAD forma profissionais capacitados a desenvolver, projetar e implementar jogos eletrônicos para diversas plataformas. Com base em programação, design, modelagem, narrativa e mecânicas de jogo, o estudante desenvolve competências para atuar na criação de experiências imersivas e interativas.</p><h3>Quais áreas poderei atuar como profissional em Jogos Digitais?</h3><p>O tecnólogo pode trabalhar em estúdios de desenvolvimento, empresas de tecnologia, produtoras de conteúdo, agências de comunicação, startups e como profissional autônomo. As áreas de atuação incluem programação, game design, arte e animação, testes e qualidade, experiência do usuário (UX), realidade virtual e aumentada.</p><p>Assim, o curso oferece uma formação criativa e contemporânea, preparando profissionais para atuar de forma inovadora no mercado crescente da indústria de games.</p><div class="jdDuration">2 anos de duração</div><br><a class="jdInterest" href="${WA}" target="_blank" rel="noopener">Tenho interesse no curso</a></div></div>`;
    const btn=root.querySelector('.jdBtn'),body=root.querySelector('.jdBody'),close=root.querySelector('.jdClose');
    btn.onclick=()=>{body.hidden=false;btn.hidden=true};
    close.onclick=()=>{body.hidden=true;btn.hidden=false};
    return true;
  }
  function start(){if(render())return;setTimeout(render,400);setTimeout(render,1000);setTimeout(render,1800);setTimeout(render,2800)}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
