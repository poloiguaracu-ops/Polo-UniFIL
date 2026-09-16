/* UniFil Polo Iguaraçu — Processos Gerenciais */
(function(){
  const WA='https://wa.me/5544997239673?text=Tenho%20interesse%20no%20curso%20de%20Processos%20Gerenciais';
  function render(){
    const root=document.getElementById('cursoModulos') || document.querySelector('.courseSection .wrap');
    if(!root || document.getElementById('processosGerenciaisBlock')) return;
    const el=document.createElement('article');
    el.id='processosGerenciaisBlock';
    el.innerHTML=`
      <style>
        #processosGerenciaisBlock{margin:22px 0;border-radius:24px;overflow:hidden;background:linear-gradient(135deg,#250632 0%,#5b1685 72%,#70219b 100%);color:#fff;box-shadow:0 18px 50px rgba(37,6,50,.16)}
        #processosGerenciaisBlock .pgInner{padding:30px}
        #processosGerenciaisBlock .pgBadge{display:inline-flex;padding:7px 10px;border-radius:999px;background:rgba(255,255,255,.12);color:#ffb06d;font-size:9px;font-weight:1000;letter-spacing:1px;text-transform:uppercase}
        #processosGerenciaisBlock h2{margin:13px 0 8px;font-size:clamp(28px,4vw,42px);line-height:1.02;letter-spacing:-1.5px;color:#fff}
        #processosGerenciaisBlock .pgIntro{max-width:850px;color:#f1e8f5;font-size:14px;line-height:1.7;margin:0}
        #processosGerenciaisBlock .pgMeta{display:flex;flex-wrap:wrap;gap:8px;margin:18px 0}
        #processosGerenciaisBlock .pgMeta span{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.14);padding:7px 10px;border-radius:10px;font-size:10px;font-weight:900}
        #processosGerenciaisBlock .pgBtn{border:0;border-radius:12px;padding:13px 17px;background:linear-gradient(135deg,#ff7000,#ff9b3f);color:#fff;font-size:11px;font-weight:1000;cursor:pointer;box-shadow:0 10px 24px rgba(255,112,0,.22)}
        #processosGerenciaisBlock .pgBody{display:none;margin-top:22px;background:#fff;color:#211827;border-radius:19px;padding:24px}
        #processosGerenciaisBlock .pgBody.open{display:block}
        #processosGerenciaisBlock .pgClose{border:0;background:#f3edf6;color:#250632;border-radius:11px;padding:10px 13px;font-size:11px;font-weight:1000;cursor:pointer;margin-bottom:18px}
        #processosGerenciaisBlock .pgSection{border-top:1px solid #e8dfeb;padding:18px 0 0;margin-top:18px}
        #processosGerenciaisBlock .pgSection:first-of-type{border-top:0;padding-top:0;margin-top:0}
        #processosGerenciaisBlock h3{color:#5b1685;font-size:18px;margin:0 0 8px}
        #processosGerenciaisBlock .pgBody p{color:#665a6b;font-size:12px;line-height:1.75;margin:0}
        #processosGerenciaisBlock .pgBody ul{margin:9px 0 0;padding-left:20px;color:#665a6b;font-size:12px;line-height:1.8}
        #processosGerenciaisBlock .pgCoord{display:flex;align-items:center;gap:18px;margin-top:12px}
        #processosGerenciaisBlock .pgCoord img{width:86px;height:86px;object-fit:cover;border-radius:16px;border:3px solid #f1e6f5}
        #processosGerenciaisBlock .pgCoord strong{display:block;color:#250632;font-size:13px;margin-bottom:4px}
        #processosGerenciaisBlock .pgCoord span{color:#665a6b;font-size:11px;line-height:1.55}
        #processosGerenciaisBlock .pgActions{display:flex;gap:9px;flex-wrap:wrap;margin-top:20px}
        #processosGerenciaisBlock .pgWa{display:inline-flex;align-items:center;justify-content:center;background:#ff7000;color:#fff;border-radius:12px;padding:12px 16px;font-size:11px;font-weight:1000}
        @media(max-width:680px){#processosGerenciaisBlock .pgInner{padding:21px}#processosGerenciaisBlock .pgBody{padding:18px}.pgCoord{align-items:flex-start!important}}
      </style>
      <div class="pgInner">
        <span class="pgBadge">TECNÓLOGO • EAD • 2 ANOS</span>
        <h2>Processos Gerenciais</h2>
        <p class="pgIntro">O curso de Processos Gerenciais prepara profissionais para o gerenciamento de organizações, abordando a elaboração de planos de negócios e relatórios gerenciais, além da tomada de decisões a partir das informações disponíveis, para o planejamento de ações, assim como o controle e avaliação destas ações.</p>
        <div class="pgMeta"><span>Tecnólogo</span><span>EAD</span><span>2 anos</span></div>
        <button class="pgBtn" type="button" data-pg-open>Ver informações do curso →</button>
        <div class="pgBody" data-pg-body>
          <button class="pgClose" type="button" data-pg-close>← Fechar informações</button>
          <div class="pgSection"><h3>Sobre o curso</h3><p>O curso de Processos Gerenciais prepara profissionais para o gerenciamento de organizações, abordando a elaboração de planos de negócios e relatórios gerenciais, além da tomada de decisões a partir das informações disponíveis, para o planejamento de ações, assim como o controle e avaliação destas ações.</p></div>
          <div class="pgSection"><h3>Por que cursar o EAD da UniFil?</h3><p>A qualidade do curso de Processos Gerenciais à distância da UniFil é reconhecida com nota máxima pelo MEC. As aulas do EAD são disponibilizadas de forma on-line por professores e tutores altamente qualificados. O material didático é elaborado pelo corpo docente da UniFil e disponibilizado em Ambiente Virtual de Aprendizagem (AVA). Para comodidade e organização dos alunos, o conteúdo e o calendário de aulas são disponibilizados no início de cada semestre.</p><p style="margin-top:10px">O curso tem o objetivo de desenvolver capacidade inovadora para gestão de novos ou continuidade dos negócios, especializando-se em áreas fundamentais para o processo como Gestão de Pessoas, Logística, Finanças e Marketing.</p></div>
          <div class="pgSection"><h3>O aluno de ensino EAD participa de encontros presenciais?</h3><p>Sim! Ao final de cada bimestre, o aluno de Processos Gerenciais EAD da UniFil deverá comparecer à unidade Polo ao qual tem sua matrícula vinculada para a realização de avaliações presenciais. As provas devem ser agendadas com antecedência na mesma unidade.</p></div>
          <div class="pgSection"><h3>Quais áreas poderei atuar com graduação em Processos Gerenciais?</h3><p>O profissional formado em processos gerenciais poderá planejar, abrir e gerenciar seu próprio negócio ou, então, atuar nas áreas administrativa, contábil, financeira, de recursos humanos, marketing e vendas de empresas de vários portes. Pode ainda trabalhar em consultorias e assessorias ou prestar consultoria em processos gerenciais como autônomo. Há ainda a possibilidade de atuar em órgãos públicos municipais, estaduais ou federais ou administrar e gerenciar organizações do terceiro setor (não governamentais).</p></div>
          <div class="pgSection"><h3>Coordenador</h3><div class="pgCoord"><img src="https://unifil.br/assets/uploads/2019/11/FME_1717_ADMGEAD.png" alt="Matheus Toledo Bechara"><div><strong>Matheus Toledo Bechara</strong><span>O curso de Processos Gerenciais EAD UniFil é coordenado pelo Mestre Matheus Toledo Bechara. Matheus é, também, professor titular do curso.</span></div></div></div>
          <div class="pgActions"><a class="pgWa" href="${WA}" target="_blank" rel="noopener">💬 Tenho interesse neste curso</a></div>
        </div>
      </div>`;
    root.appendChild(el);
    const open=el.querySelector('[data-pg-open]'), body=el.querySelector('[data-pg-body]'), close=el.querySelector('[data-pg-close]');
    open.addEventListener('click',()=>{body.classList.add('open');open.style.display='none';el.scrollIntoView({behavior:'smooth',block:'start'})});
    close.addEventListener('click',()=>{body.classList.remove('open');open.style.display='inline-flex';el.scrollIntoView({behavior:'smooth',block:'start'})});
  }
  function start(){render();setTimeout(render,300);setTimeout(render,1000);setTimeout(render,2200)}
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start,{once:true}); else start();
})();
