/* UniFil Polo Iguaraçu — Relações Internacionais */
(function(){
  const ROOT_ID='relacoesInternacionaisBlock';
  const WA='https://wa.me/5544997239673?text=Tenho%20interesse%20no%20curso%20de%20Rela%C3%A7%C3%B5es%20Internacionais';

  function render(){
    const host=document.getElementById('cursoModulos')||document.querySelector('.courseSection .wrap');
    if(!host)return false;
    let root=document.getElementById(ROOT_ID);
    if(!root){
      root=document.createElement('article');
      root.id=ROOT_ID;
      root.className='riCourseCard';
      host.appendChild(root);
    }
    if(root.dataset.rendered==='1')return true;
    root.dataset.rendered='1';
    root.innerHTML=`
      <style>
        #${ROOT_ID}{margin:22px 0;border-radius:24px;overflow:hidden;background:linear-gradient(135deg,#250632 0%,#5b1685 72%,#70219b 100%);color:#fff;box-shadow:0 18px 45px rgba(37,6,50,.18)}
        #${ROOT_ID} .riInner{padding:30px}
        #${ROOT_ID} .riBadge{display:inline-flex;padding:8px 12px;border-radius:999px;background:#ff7000;color:#fff;font-weight:800;font-size:12px;letter-spacing:.05em}
        #${ROOT_ID} h2{margin:14px 0 10px;font-size:clamp(25px,4vw,38px);line-height:1.05}
        #${ROOT_ID} .riIntro{max-width:900px;color:rgba(255,255,255,.9);line-height:1.7;font-size:16px}
        #${ROOT_ID} .riMeta{display:flex;flex-wrap:wrap;gap:9px;margin:18px 0}
        #${ROOT_ID} .riMeta span{padding:8px 12px;border:1px solid rgba(255,255,255,.2);border-radius:999px;background:rgba(255,255,255,.08);font-weight:700;font-size:13px}
        #${ROOT_ID} .riBtn,#${ROOT_ID} .riClose{border:0;cursor:pointer;border-radius:14px;padding:13px 17px;font-weight:800;font-size:14px}
        #${ROOT_ID} .riBtn{background:#ff7000;color:#fff;box-shadow:0 10px 24px rgba(255,112,0,.22)}
        #${ROOT_ID} .riBody{margin-top:22px;background:#fff;color:#211827;border-radius:18px;padding:24px}
        #${ROOT_ID} .riClose{background:#250632;color:#fff;margin-bottom:18px}
        #${ROOT_ID} .riBody h3{color:#5b1685;margin:20px 0 8px;font-size:20px}
        #${ROOT_ID} .riBody p{line-height:1.75;margin:0 0 12px}
        #${ROOT_ID} .riDuration{display:inline-block;margin-top:6px;padding:10px 14px;border-radius:12px;background:#fff1e7;color:#8a3b00;font-weight:800}
        #${ROOT_ID} .riInterest{display:inline-block;margin-top:20px;background:#ff7000;color:#fff;text-decoration:none;padding:13px 17px;border-radius:14px;font-weight:800}
        @media(max-width:600px){#${ROOT_ID} .riInner{padding:22px}#${ROOT_ID} .riBody{padding:18px}}
      </style>
      <div class="riInner">
        <span class="riBadge">BACHARELADO • EAD</span>
        <h2>Relações Internacionais</h2>
        <p class="riIntro">O curso de Relações Internacionais da UniFil EAD forma profissionais capazes de compreender as dinâmicas políticas, econômicas e culturais do sistema internacional. O estudante desenvolve habilidades analíticas e estratégicas para atuar em ambientes globais e multiculturais.</p>
        <div class="riMeta"><span>Bacharelado</span><span>EAD</span><span>4 anos</span></div>
        <button class="riBtn" type="button">Ver informações do curso →</button>
        <div class="riBody" hidden>
          <button class="riClose" type="button">← Fechar informações</button>
          <h3>Sobre o curso</h3>
          <p>O curso de Relações Internacionais da UniFil EAD forma profissionais capazes de compreender as dinâmicas políticas, econômicas e culturais do sistema internacional. O estudante desenvolve habilidades analíticas e estratégicas para atuar em ambientes globais e multiculturais.</p>
          <h3>Quais áreas poderei atuar como profissional em Relações Internacionais?</h3>
          <p>O internacionalista pode atuar em órgãos governamentais, embaixadas, empresas multinacionais, ONGs, instituições financeiras, organismos internacionais e consultorias, nas áreas de comércio exterior, diplomacia, cooperação e políticas públicas.</p>
          <p>O curso proporciona uma formação ampla e interdisciplinar, que une teoria, política e ética, preparando profissionais para promover o diálogo e a integração entre nações e culturas.</p>
          <div class="riDuration">4 anos de duração</div>
          <br><a class="riInterest" href="${WA}" target="_blank" rel="noopener">Tenho interesse no curso</a>
        </div>
      </div>`;
    const btn=root.querySelector('.riBtn'),body=root.querySelector('.riBody'),close=root.querySelector('.riClose');
    btn.addEventListener('click',()=>{body.hidden=false;btn.hidden=true});
    close.addEventListener('click',()=>{body.hidden=true;btn.hidden=false;root.scrollIntoView({behavior:'smooth',block:'center'})});
    return true;
  }
  function start(){if(render())return;setTimeout(render,400);setTimeout(render,1000);setTimeout(render,1800);setTimeout(render,2800)}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
