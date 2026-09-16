/* UniFil Polo Iguaraçu — Pedagogia */
(function(){
  const ROOT_ID='pedagogiaBlock';
  const WA='https://wa.me/5544997239673?text=Tenho%20interesse%20no%20curso%20de%20Pedagogia';
  function render(){
    const host=document.getElementById('cursoModulos') || document.querySelector('.courseSection .wrap');
    if(!host || document.getElementById(ROOT_ID)) return;
    const el=document.createElement('section');
    el.id=ROOT_ID;
    el.innerHTML=`
      <style>
        #${ROOT_ID}{margin:28px 0;font-family:inherit}
        #${ROOT_ID} .pgCard{background:linear-gradient(135deg,#250632 0%,#5b1685 72%,#70219b 100%);border-radius:24px;padding:30px;color:#fff;box-shadow:0 18px 50px rgba(37,6,50,.18);overflow:hidden;position:relative}
        #${ROOT_ID} .pgBadge{display:inline-flex;padding:8px 12px;border-radius:999px;background:#ff7000;color:#fff;font-size:12px;font-weight:900;letter-spacing:.04em}
        #${ROOT_ID} h2{margin:14px 0 10px;font-size:clamp(30px,5vw,46px);line-height:1.05}
        #${ROOT_ID} .pgIntro{max-width:850px;font-size:17px;line-height:1.7;color:#f4eafb}
        #${ROOT_ID} .pgMeta{display:flex;flex-wrap:wrap;gap:10px;margin:20px 0}
        #${ROOT_ID} .pgMeta span{padding:9px 12px;border:1px solid rgba(255,255,255,.2);border-radius:999px;background:rgba(255,255,255,.08);font-weight:800;font-size:13px}
        #${ROOT_ID} .pgBtn,#${ROOT_ID} .pgClose{border:0;border-radius:14px;padding:13px 17px;font-weight:900;cursor:pointer;font-size:14px}
        #${ROOT_ID} .pgBtn{background:#ff7000;color:#fff;box-shadow:0 10px 25px rgba(255,112,0,.25)}
        #${ROOT_ID} .pgPanel{margin-top:22px;background:#fff;color:#211827;border-radius:20px;padding:24px;display:none}
        #${ROOT_ID} .pgPanel.open{display:block}
        #${ROOT_ID} .pgPanel h3{color:#5b1685;margin:24px 0 9px;font-size:20px}
        #${ROOT_ID} .pgPanel h3:first-child{margin-top:0}
        #${ROOT_ID} .pgPanel p{line-height:1.75;margin:0 0 12px;color:#4e4352}
        #${ROOT_ID} .pgPanel ul{margin:8px 0 16px;padding-left:22px;color:#4e4352;line-height:1.8}
        #${ROOT_ID} .pgClose{background:#250632;color:#fff;margin-bottom:8px}
        #${ROOT_ID} .pgCoordinator{display:grid;grid-template-columns:110px 1fr;gap:18px;align-items:center;margin-top:18px;padding:16px;border-radius:18px;background:#f7f2fa}
        #${ROOT_ID} .pgCoordinator img{width:110px;height:110px;object-fit:cover;border-radius:16px}
        #${ROOT_ID} .pgCoordinator strong{color:#250632;display:block;font-size:17px;margin-bottom:5px}
        #${ROOT_ID} .pgWa{display:inline-block;margin-top:18px;padding:13px 18px;border-radius:14px;background:#ff7000;color:#fff;text-decoration:none;font-weight:900}
        @media(max-width:620px){#${ROOT_ID} .pgCard{padding:22px}#${ROOT_ID} .pgPanel{padding:18px}#${ROOT_ID} .pgCoordinator{grid-template-columns:1fr}#${ROOT_ID} .pgCoordinator img{width:100%;height:180px}}
      </style>
      <div class="pgCard">
        <span class="pgBadge">LICENCIATURA • EAD</span>
        <h2>Pedagogia</h2>
        <p class="pgIntro">Formação para atuação na educação, preparando futuros pedagogos para o ensino, o planejamento e a gestão dos sistemas educacionais, considerando a relação entre escola, estudante, família e comunidade.</p>
        <div class="pgMeta"><span>Licenciatura</span><span>EAD</span><span>4 anos</span></div>
        <button class="pgBtn" type="button">Ver informações do curso →</button>
        <div class="pgPanel" aria-hidden="true">
          <button class="pgClose" type="button">← Fechar informações</button>
          <h3>Sobre o curso</h3>
          <p>O curso de Pedagogia da UniFil prepara futuros pedagogos para o ensino, o planejamento e a gestão dos sistemas educacionais, tendo como base a relação entre escola, estudante, família e comunidade.</p>
          <h3>Por que cursar o EAD da UniFil?</h3>
          <p>A qualidade do curso é reconhecida com nota máxima pelo MEC. O estudante conta com aulas on-line ministradas por professores e tutores altamente qualificados, material didático elaborado pelo corpo docente da UniFil disponibilizado no AVA e acesso aos conteúdos e ao calendário no início de cada semestre.</p>
          <h3>O aluno de ensino a distância participa de encontros presenciais?</h3>
          <p>Sim. Ao final de cada bimestre, o estudante vai ao Polo ao qual está vinculado para realizar as avaliações presenciais. As provas são agendadas previamente na mesma unidade.</p>
          <h3>Quais áreas poderei atuar como profissional de Pedagogia?</h3>
          <ul>
            <li>Administração, coordenação, direção, orientação, supervisão e docência.</li>
            <li>Educação infantil, anos iniciais do ensino fundamental e formação em nível de magistério.</li>
            <li>Atuação com estudantes com deficiência.</li>
            <li>Serviços pedagógicos em escolas e clínicas de psicopedagogia.</li>
            <li>Empresas, incluindo recursos humanos, orientação profissional e programas educacionais.</li>
            <li>Desenvolvimento e trabalho com brinquedos educativos e projetos educacionais.</li>
            <li>Hospitais, editoras, brinquedotecas e organizações não governamentais.</li>
            <li>Produção e utilização de materiais didáticos e outras atividades relacionadas à educação.</li>
          </ul>
          <div class="pgCoordinator">
            <img src="https://unifil.br/assets/uploads/2020/03/luana.png" alt="Profa. Dra. Luana Pagano Peres Molina">
            <div><strong>Coordenação</strong><span>Profa. Dra. Luana Pagano Peres Molina — coordenadora e professora titular do curso.</span></div>
          </div>
          <h3>Duração</h3>
          <p><strong>4 anos.</strong></p>
          <a class="pgWa" href="${WA}" target="_blank" rel="noopener">Tenho interesse em Pedagogia pelo WhatsApp</a>
        </div>
      </div>`;
    host.appendChild(el);
    const btn=el.querySelector('.pgBtn'), panel=el.querySelector('.pgPanel'), close=el.querySelector('.pgClose');
    btn.addEventListener('click',()=>{panel.classList.add('open');panel.setAttribute('aria-hidden','false');btn.style.display='none';el.scrollIntoView({behavior:'smooth',block:'start'});});
    close.addEventListener('click',()=>{panel.classList.remove('open');panel.setAttribute('aria-hidden','true');btn.style.display='inline-flex';});
  }
  function start(){render();setTimeout(render,300);setTimeout(render,1000);}
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start,{once:true}); else start();
})();