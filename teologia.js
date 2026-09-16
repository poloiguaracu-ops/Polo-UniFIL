/* UniFil Polo Iguaraçu — Teologia */
(function(){
  const ID='teologiaBlock';
  function render(){
    const host=document.getElementById('cursoModulos') || document.querySelector('.courseSection .wrap');
    if(!host || document.getElementById(ID)) return;
    const el=document.createElement('section');
    el.id=ID;
    el.innerHTML=`
      <style>
        #${ID}{margin:28px 0;font-family:inherit}
        #${ID} .tgCard{background:linear-gradient(135deg,#250632 0%,#5b1685 72%,#70219b 100%);color:#fff;border-radius:24px;padding:30px;box-shadow:0 18px 50px rgba(37,6,50,.22);position:relative;overflow:hidden}
        #${ID} .tgCard:before{content:'';position:absolute;width:260px;height:260px;border-radius:50%;right:-100px;top:-120px;background:rgba(255,112,0,.18)}
        #${ID} .tgBadge{display:inline-block;background:#ff7000;color:#fff;font-weight:900;font-size:12px;letter-spacing:.08em;padding:8px 12px;border-radius:999px;margin-bottom:12px;position:relative}
        #${ID} h2{margin:0 0 10px;font-size:clamp(28px,4vw,44px);line-height:1.05;position:relative}
        #${ID} .tgIntro{font-size:16px;line-height:1.7;max-width:900px;color:#f5eafa;position:relative}
        #${ID} .tgMeta{display:flex;flex-wrap:wrap;gap:10px;margin:18px 0;position:relative}
        #${ID} .tgMeta span{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.18);padding:9px 13px;border-radius:12px;font-weight:800;font-size:13px}
        #${ID} .tgBtn{border:0;background:#ff7000;color:#fff;border-radius:13px;padding:13px 18px;font-weight:900;cursor:pointer;font-size:14px;position:relative;box-shadow:0 10px 24px rgba(0,0,0,.18)}
        #${ID} .tgBtn:hover{background:#ff8a29;transform:translateY(-1px)}
        #${ID} .tgBody{display:none;margin-top:22px;background:#fff;color:#211827;border-radius:18px;padding:24px;position:relative}
        #${ID} .tgBody.open{display:block}
        #${ID} .tgClose{display:inline-flex;border:0;background:#250632;color:#fff;border-radius:10px;padding:9px 13px;font-weight:900;cursor:pointer;margin-bottom:18px}
        #${ID} h3{color:#5b1685;margin:22px 0 8px;font-size:20px}
        #${ID} p{line-height:1.7;margin:8px 0}
        #${ID} ul{line-height:1.75;padding-left:22px}
        #${ID} .tgCoord{display:flex;align-items:center;gap:18px;margin-top:12px;padding:16px;border:1px solid #e7dfeb;border-radius:16px;background:#faf8fb}
        #${ID} .tgCoord img{width:92px;height:92px;object-fit:cover;border-radius:14px}
        #${ID} .tgWa{display:inline-block;margin-top:18px;background:#ff7000;color:#fff;text-decoration:none;padding:13px 18px;border-radius:12px;font-weight:900}
        @media(max-width:600px){#${ID} .tgCard{padding:22px;border-radius:18px}#${ID} .tgBody{padding:18px}.tgCoord{align-items:flex-start}}
      </style>
      <div class="tgCard">
        <span class="tgBadge">BACHARELADO • EAD • 3 ANOS</span>
        <h2>Teologia</h2>
        <p class="tgIntro">A Teologia é conhecida como a “mãe das ciências”. O curso faz parte das Ciências Humanas e envolve o estudo crítico da natureza, do metafísico, do transcendente, de Deus e Seus atributos, a criação e Sua relação com o homem.</p>
        <div class="tgMeta"><span>Bacharelado</span><span>EAD</span><span>3 anos</span></div>
        <button class="tgBtn" type="button">Ver informações do curso →</button>
        <div class="tgBody">
          <button class="tgClose" type="button">← Fechar informações</button>
          <h3>Sobre o curso</h3>
          <p>O curso contempla formação teórica com viés prático, espiritualidade, pastoral e evangelização, dialogando com a sociedade contemporânea em frentes político-econômicas, éticas, multiculturais, científicas e educacionais.</p>
          <p>No curso de Teologia EAD da UniFil, Cristo é a chave hermenêutica das Escrituras Sagradas. O curso possui vertente reformada.</p>
          <h3>Por que cursar o EAD da UniFil?</h3>
          <p>A formação conta com professores qualificados, materiais elaborados pela equipe docente da UniFil disponibilizados no AVA e organização de conteúdos e calendário acadêmico no início do semestre.</p>
          <h3>O aluno de ensino a distância participa de encontros presenciais?</h3>
          <p>Sim. Ao final de cada bimestre, o estudante deve comparecer ao Polo ao qual está vinculado para realizar as avaliações presenciais, que são agendadas previamente na unidade.</p>
          <h3>Quais áreas poderei atuar como teólogo?</h3>
          <ul>
            <li>Ministério Pastoral;</li>
            <li>Ensino religioso em escolas públicas e privadas, conforme a formação e a legislação aplicável;</li>
            <li>Aconselhamento;</li>
            <li>Docência em Teologia e áreas relacionadas, conforme a formação exigida;</li>
            <li>Capelania;</li>
            <li>Gestão de departamentos ministeriais;</li>
            <li>Organização e administração de igrejas;</li>
            <li>Elaboração de estratégias e materiais;</li>
            <li>Formação de líderes;</li>
            <li>Planejamento de ações organizacionais e comunitárias.</li>
          </ul>
          <h3>Onde o profissional pode atuar?</h3>
          <p>Ministério Pastoral em Igrejas, Seminários e Instituições de Ensino Superior, Hospitais, Penitenciárias, Escolas Públicas, Consultoria em Gestão de Pessoas, Concursos Públicos e Docência.</p>
          <h3>Coordenador do curso</h3>
          <div class="tgCoord"><img src="https://unifil.br/assets/uploads/2020/03/FME_3108_TEOGEAD.png" alt="Coordenador do curso de Teologia"><div><strong>Prof. Dr. Emerson Claudio Mildënbërg</strong><p>Responsável pelo Núcleo de Pastoralidade, professor titular de Teologia, capelão institucional e coordenador de Ministério Pastoral UniFil.</p></div></div>
          <h3>Duração</h3><p><strong>3 anos</strong></p>
          <a class="tgWa" href="https://wa.me/5544997239673?text=Tenho%20interesse%20no%20curso%20de%20Teologia" target="_blank" rel="noopener">Tenho interesse em Teologia</a>
        </div>
      </div>`;
    host.appendChild(el);
    const btn=el.querySelector('.tgBtn'), body=el.querySelector('.tgBody'), close=el.querySelector('.tgClose');
    btn.addEventListener('click',()=>{body.classList.add('open');btn.style.display='none';el.scrollIntoView({behavior:'smooth',block:'start'});});
    close.addEventListener('click',()=>{body.classList.remove('open');btn.style.display='inline-block';});
  }
  function start(){render();setTimeout(render,400);setTimeout(render,1200);setTimeout(render,2500);}
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start); else start();
})();