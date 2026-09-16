/* UniFil Polo Iguaraçu — Segurança Cibernética */
(function(){
  const ROOT_ID='segurancaCiberneticaBlock';
  const WA='https://wa.me/5544997239673?text=Tenho%20interesse%20no%20curso%20de%20Seguran%C3%A7a%20Cibern%C3%A9tica';
  function render(){
    const host=document.getElementById('cursoModulos')||document.querySelector('.courseSection .wrap'); if(!host)return false;
    let root=document.getElementById(ROOT_ID); if(!root){root=document.createElement('article');root.id=ROOT_ID;host.appendChild(root)}
    if(root.dataset.rendered==='1')return true; root.dataset.rendered='1';
    root.innerHTML=`<style>
      #${ROOT_ID}{margin:22px 0;border-radius:24px;overflow:hidden;background:linear-gradient(135deg,#250632,#5b1685 72%,#70219b);color:#fff;box-shadow:0 18px 45px rgba(37,6,50,.18)}
      #${ROOT_ID} .scInner{padding:30px} #${ROOT_ID} .scBadge{display:inline-flex;padding:8px 12px;border-radius:999px;background:#ff7000;color:#fff;font-weight:800;font-size:12px;letter-spacing:.05em}
      #${ROOT_ID} h2{margin:14px 0 10px;font-size:clamp(25px,4vw,38px);line-height:1.05} #${ROOT_ID} .scIntro{max-width:950px;color:rgba(255,255,255,.9);line-height:1.7;font-size:16px}
      #${ROOT_ID} .scMeta{display:flex;flex-wrap:wrap;gap:9px;margin:18px 0} #${ROOT_ID} .scMeta span{padding:8px 12px;border:1px solid rgba(255,255,255,.2);border-radius:999px;background:rgba(255,255,255,.08);font-weight:700;font-size:13px}
      #${ROOT_ID} button,#${ROOT_ID} .scInterest{border:0;cursor:pointer;border-radius:14px;padding:13px 17px;font-weight:800;font-size:14px} #${ROOT_ID} .scBtn{background:#ff7000;color:#fff;box-shadow:0 10px 24px rgba(255,112,0,.22)}
      #${ROOT_ID} .scBody{margin-top:22px;background:#fff;color:#211827;border-radius:18px;padding:24px} #${ROOT_ID} .scClose{background:#250632;color:#fff;margin-bottom:18px}
      #${ROOT_ID} .scBody h3{color:#5b1685;margin:20px 0 8px;font-size:20px} #${ROOT_ID} .scBody p{line-height:1.75;margin:0 0 12px}
      #${ROOT_ID} .scDuration{display:inline-block;margin-top:6px;padding:10px 14px;border-radius:12px;background:#fff1e7;color:#8a3b00;font-weight:800}
      #${ROOT_ID} .scInterest{display:inline-block;margin-top:20px;background:#ff7000;color:#fff;text-decoration:none}
      @media(max-width:600px){#${ROOT_ID} .scInner{padding:22px}#${ROOT_ID} .scBody{padding:18px}}
    </style><div class="scInner"><span class="scBadge">TECNÓLOGO • EAD</span><h2>Segurança Cibernética</h2><p class="scIntro">O curso de Segurança Cibernética da UniFil EAD forma profissionais capazes de identificar, analisar e mitigar ameaças digitais em diferentes ambientes tecnológicos. Com uma base sólida em redes, criptografia, monitoramento, governança e políticas de segurança, o estudante desenvolve competências para proteger sistemas, dados e infraestruturas críticas contra ataques e vulnerabilidades.</p><div class="scMeta"><span>Tecnólogo</span><span>EAD</span><span>2 anos</span></div><button class="scBtn" type="button">Ver informações do curso →</button><div class="scBody" hidden><button class="scClose" type="button">← Fechar informações</button><h3>Sobre o curso</h3><p>O curso de Segurança Cibernética da UniFil EAD forma profissionais capazes de identificar, analisar e mitigar ameaças digitais em diferentes ambientes tecnológicos. Com uma base sólida em redes, criptografia, monitoramento, governança e políticas de segurança, o estudante desenvolve competências para proteger sistemas, dados e infraestruturas críticas contra ataques e vulnerabilidades.</p><h3>Quais áreas poderei atuar como profissional em Segurança Cibernética?</h3><p>O especialista pode atuar em empresas de tecnologia, instituições financeiras, prestadoras de serviços de TI, órgãos governamentais, consultorias e setores de segurança corporativa. Está habilitado para trabalhar com análise de vulnerabilidades, gestão de incidentes, implementação de políticas de segurança, testes de invasão (pentest), auditorias, proteção de dados e conformidade com normas e legislações.</p><p>Assim, o curso oferece uma formação atualizada e estratégica, preparando profissionais capazes de responder de maneira ética, eficiente e inovadora aos desafios crescentes da segurança digital.</p><div class="scDuration">2 anos de duração</div><br><a class="scInterest" href="${WA}" target="_blank" rel="noopener">Tenho interesse no curso</a></div></div>`;
    const btn=root.querySelector('.scBtn'),body=root.querySelector('.scBody'),close=root.querySelector('.scClose'); btn.onclick=()=>{body.hidden=false;btn.hidden=true}; close.onclick=()=>{body.hidden=true;btn.hidden=false}; return true;
  }
  function start(){if(render())return;setTimeout(render,400);setTimeout(render,1000);setTimeout(render,1800);setTimeout(render,2800)}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
