/* UniFil Polo Iguaraçu — Marketing Tecnólogo */
(function(){
  const ROOT_ID='marketingBlock';
  const WA='https://wa.me/5544997239673?text=Tenho%20interesse%20no%20curso%20de%20Marketing';

  function render(){
    const root=document.getElementById(ROOT_ID);
    if(root) return;
    const host=document.getElementById('cursoModulos') || document.querySelector('.courseSection .wrap');
    if(!host) return;

    const el=document.createElement('article');
    el.id=ROOT_ID;
    el.innerHTML=`
      <style>
        #${ROOT_ID}{margin:28px 0;border-radius:24px;overflow:hidden;background:linear-gradient(135deg,#250632 0%,#5b1685 72%,#70219b 100%);box-shadow:0 20px 55px rgba(37,6,50,.18);color:#fff}
        #${ROOT_ID} .mkTop{padding:30px 30px 26px}
        #${ROOT_ID} .mkBadge{display:inline-block;padding:7px 11px;border-radius:999px;background:#ff7000;color:#fff;font-size:11px;font-weight:900;letter-spacing:.08em}
        #${ROOT_ID} h2{margin:12px 0 8px;font-size:clamp(26px,4vw,40px);line-height:1.05}
        #${ROOT_ID} .mkIntro{max-width:850px;margin:0;color:#f3eafa;line-height:1.65}
        #${ROOT_ID} .mkMeta{display:flex;flex-wrap:wrap;gap:9px;margin-top:18px}
        #${ROOT_ID} .mkMeta span{padding:8px 11px;border:1px solid rgba(255,255,255,.2);border-radius:999px;font-size:13px;background:rgba(255,255,255,.08)}
        #${ROOT_ID} .mkBtn{border:0;border-radius:13px;background:#ff7000;color:#fff;padding:13px 17px;font-weight:900;cursor:pointer;margin-top:20px;box-shadow:0 9px 22px rgba(0,0,0,.16)}
        #${ROOT_ID} .mkBody{background:#fff;color:#211827;padding:28px 30px 30px}
        #${ROOT_ID} .mkBody[hidden]{display:none}
        #${ROOT_ID} .mkClose{border:0;background:transparent;color:#5b1685;font-weight:900;font-size:15px;cursor:pointer;padding:0;margin-bottom:20px}
        #${ROOT_ID} h3{color:#5b1685;margin:24px 0 9px;font-size:19px}
        #${ROOT_ID} p{line-height:1.7;margin:0 0 10px}
        #${ROOT_ID} ul{margin:8px 0 0;padding-left:21px;line-height:1.8}
        #${ROOT_ID} .mkCoord{display:flex;gap:20px;align-items:center;margin-top:12px;padding:18px;border-radius:18px;background:#f7f5f9;border:1px solid #e7dfeb}
        #${ROOT_ID} .mkCoord img{width:92px;height:92px;object-fit:cover;border-radius:16px;border:3px solid #ff7000}
        #${ROOT_ID} .mkCoord strong{display:block;color:#250632;font-size:18px;margin-bottom:5px}
        #${ROOT_ID} .mkDuration{display:inline-block;margin-top:18px;padding:9px 12px;border-radius:10px;background:#250632;color:#fff;font-weight:800}
        #${ROOT_ID} .mkWa{display:inline-block;margin-top:20px;background:#ff7000;color:#fff;text-decoration:none;padding:13px 17px;border-radius:13px;font-weight:900}
        @media(max-width:640px){#${ROOT_ID} .mkTop,#${ROOT_ID} .mkBody{padding:22px 18px}#${ROOT_ID} .mkCoord{align-items:flex-start;flex-direction:column}#${ROOT_ID} .mkCoord img{width:80px;height:80px}}
      </style>
      <div class="mkTop">
        <span class="mkBadge">TECNÓLOGO • EAD</span>
        <h2>Marketing</h2>
        <p class="mkIntro">O curso de Marketing forma executivos capazes de gerir atividades em pequenas, médias e grandes empresas.</p>
        <div class="mkMeta"><span>Tecnólogo</span><span>EAD</span><span>2 anos</span></div>
        <button class="mkBtn" type="button" data-open-marketing>Ver informações do curso →</button>
      </div>
      <div class="mkBody" data-marketing-panel hidden>
        <button class="mkClose" type="button" data-close-marketing>← Fechar informações</button>
        <h3>Sobre o curso</h3>
        <p>O profissional de Marketing formado pela UniFil tem como diferencial a capacidade de apresentar soluções para problemas de gestão da comunicação. Além desta competência para o diagnóstico, ele é o profissional capaz de traçar estratégias de marketing e de convertê-las em vendas, adesão à uma determinada marca e chegar até o público-alvo.</p>

        <h3>Por que cursar o EAD da UniFil?</h3>
        <p>A qualidade do curso tecnólogo em Marketing a distância da UniFil é reconhecida com nota máxima pelo MEC. As aulas do EAD são disponibilizadas de forma on-line por professores e tutores altamente qualificados. O material didático é elaborado pelo corpo docente da UniFil e disponibilizado em Ambiente Virtual de Aprendizagem (AVA). Para comodidade e organização dos alunos, o conteúdo e o calendário de aulas são disponibilizados no início de cada semestre.</p>

        <h3>O aluno de ensino a distância participa de encontros presenciais?</h3>
        <p>Sim! Ao final de cada bimestre, o aluno de Marketing EAD da UniFil deverá comparecer à unidade Polo ao qual tem sua matrícula vinculada para a realização de avaliações presenciais. As provas devem ser agendadas com antecedência na mesma unidade.</p>

        <h3>Quais áreas poderei atuar como tecnólogo em Marketing?</h3>
        <p>O tecnólogo em Marketing pode atuar em empresas públicas e privadas em tarefas como o desenvolvimento de plano de Marketing estratégico, pesquisa de mercado quantitativa e qualitativa, gerenciamento de ações decisórias e plano de comunicação integrada de marketing.</p>

        <h3>Coordenador</h3>
        <div class="mkCoord">
          <img src="https://unifil.br/assets/uploads/2019/11/FME_1717_ADMGEAD.png" alt="Matheus Toledo Bechara">
          <div><strong>Matheus Bechara</strong><p>O curso de Gestão de Marketing a distância da UniFil é coordenado pelo Matheus Toledo Bechara. Ele é, também, professor titular do curso.</p></div>
        </div>
        <span class="mkDuration">2 anos de duração</span>
        <br><a class="mkWa" href="${WA}" target="_blank" rel="noopener">Tenho interesse no curso</a>
      </div>`;
    host.appendChild(el);

    const open=el.querySelector('[data-open-marketing]');
    const close=el.querySelector('[data-close-marketing]');
    const panel=el.querySelector('[data-marketing-panel]');
    open.addEventListener('click',()=>{panel.hidden=false;open.hidden=true});
    close.addEventListener('click',()=>{panel.hidden=true;open.hidden=false;el.scrollIntoView({behavior:'smooth',block:'start'})});
  }

  function start(){render();setTimeout(render,300);setTimeout(render,1000)}
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',start,{once:true}); else start();
})();
