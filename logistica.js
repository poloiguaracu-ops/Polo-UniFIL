/* UniFil Polo Iguaraçu — Logística Tecnólogo */
(function(){
  const root=document.getElementById('cursoModulos') || document.querySelector('.courseSection .wrap');
  if(!root) return;
  const WA='https://wa.me/5544997239673';
  const html=`
  <article class="unifilCourse" id="logisticaBlock">
    <div class="ucBadge">TECNÓLOGO • EAD</div>
    <h3>Logística</h3>
    <p class="ucIntro">Formação de profissionais especializados em aquisição, recebimento, armazenagem, distribuição e transporte, preparados para a nova realidade das áreas de logística, transportes e comércio exterior.</p>
    <div class="ucMeta"><span>Tecnólogo</span><span>EAD</span><span>2 anos</span></div>
    <button class="ucBtn" type="button" data-logistica-open>Ver informações do curso →</button>
    <div class="ucPanel" data-logistica-panel hidden>
      <button class="ucClose" type="button" data-logistica-close aria-label="Fechar informações">← Fechar informações</button>
      <h4>Logística — informações do curso</h4>
      <section><h5>Sobre o curso</h5><p>O curso tecnólogo em Logística forma profissionais especializados em aquisição, recebimento, armazenagem, distribuição e transporte.</p><p>As aulas de nível superior formam profissionais capazes de lidar com a nova realidade em que as áreas de logística, transportes e comércio exterior estão inseridas.</p></section>
      <section><h5>Por que cursar o EAD da UniFil?</h5><p>As aulas do EAD são disponibilizadas de forma on-line por professores e tutores altamente qualificados. O material didático é elaborado pelo corpo docente da UniFil e disponibilizado em Ambiente Virtual de Aprendizagem (AVA). Para comodidade e organização dos alunos, o conteúdo e o calendário de aulas são disponibilizados no início de cada semestre.</p></section>
      <section><h5>O aluno de ensino a distância participa de encontros presenciais?</h5><p>Sim! Ao final de cada bimestre, o aluno do curso Tecnólogo em Logística da UniFil deverá comparecer à unidade Polo ao qual tem sua matrícula vinculada para a realização de avaliações presenciais. As provas devem ser agendadas com antecedência na mesma unidade.</p></section>
      <section><h5>Quais áreas poderei atuar como tecnólogo em Logística?</h5><p>O profissional vai atuar na área de logística de uma empresa ou organização, planejando e coordenando a movimentação física e de informações sobre as operações multimodais de transporte, para proporcionar fluxo otimizado e de qualidade para peças, matérias-primas e produtos.</p></section>
      <section><h5>Coordenador</h5><div class="ucCoordinator"><img src="https://unifil.br/assets/uploads/2019/11/FME_1717_ADMGEAD.png" alt="Matheus Toledo Bechara" loading="lazy"><div><strong>Matheus Toledo Bechara</strong><p>O curso de Logística a distância da UniFil é coordenado pelo Matheus Toledo Bechara. Ele é, também, professor titular do curso.</p></div></div></section>
      <div class="ucDuration"><strong>2 anos</strong><span>Duração do curso</span></div>
      <a class="ucWhats" href="${WA}?text=Tenho%20interesse%20no%20curso%20de%20Log%C3%ADstica" target="_blank" rel="noopener">💬 Tenho interesse neste curso</a>
    </div>
  </article>`;
  if(document.getElementById('logisticaBlock')) return;
  root.insertAdjacentHTML('beforeend',html);
  if(!document.getElementById('logisticaStyle')){
    const s=document.createElement('style');s.id='logisticaStyle';s.textContent=`
      #logisticaBlock{margin:14px 0;background:linear-gradient(135deg,#250632 0%,#5b1685 72%,#70219b 100%);border:1px solid #6f2890;border-radius:22px;padding:25px;box-shadow:0 15px 40px rgba(37,6,50,.2);position:relative;overflow:hidden;color:#fff}
      #logisticaBlock:before{content:"";position:absolute;left:0;top:0;bottom:0;width:6px;background:linear-gradient(#ff7000,#ff9b3f)}
      #logisticaBlock:after{content:"";position:absolute;width:220px;height:220px;right:-100px;top:-120px;border-radius:50%;background:rgba(255,155,63,.14)}
      #logisticaBlock h3{color:#fff;font-size:29px;margin:9px 0 7px;position:relative;z-index:1}
      #logisticaBlock .ucBadge{display:inline-flex;padding:6px 9px;border-radius:999px;background:rgba(255,255,255,.12);color:#ffb06a;font-size:9px;font-weight:1000;letter-spacing:.7px;position:relative;z-index:1}
      #logisticaBlock .ucIntro{color:#eee3f2;font-size:12px;line-height:1.7;max-width:850px;position:relative;z-index:1}
      #logisticaBlock .ucMeta{display:flex;gap:7px;flex-wrap:wrap;margin:15px 0;position:relative;z-index:1}
      #logisticaBlock .ucMeta span{padding:7px 10px;border-radius:9px;background:rgba(255,255,255,.1);color:#fff;font-size:9px;font-weight:900;border:1px solid rgba(255,255,255,.12)}
      #logisticaBlock .ucBtn,.ucWhats{border:0;border-radius:12px;background:linear-gradient(135deg,#ff7000,#ff9b3f);color:#fff;padding:12px 16px;font-size:11px;font-weight:950;cursor:pointer;text-decoration:none;display:inline-flex;align-items:center;justify-content:center;position:relative;z-index:2}
      #logisticaBlock .ucPanel{margin-top:20px;padding:20px;border-radius:17px;background:#fff;color:#211827;border:1px solid rgba(255,255,255,.18);position:relative;z-index:2}
      #logisticaBlock .ucClose{border:0;background:#f1e8f5;color:#250632;border-radius:10px;padding:10px 13px;font-weight:900;cursor:pointer;margin-bottom:15px}
      #logisticaBlock h4{color:#250632;font-size:24px;margin:5px 0 18px}
      #logisticaBlock section{padding:17px 0;border-top:1px solid #eee7f1}
      #logisticaBlock h5{color:#5b1685;font-size:15px;margin:0 0 7px}
      #logisticaBlock section p{color:#716576;font-size:12px;line-height:1.75;margin:6px 0}
      #logisticaBlock .ucCoordinator{display:flex;gap:18px;align-items:center;margin-top:10px;padding:14px;border:1px solid #e7dfeb;border-radius:15px;background:#faf8fc}
      #logisticaBlock .ucCoordinator img{width:92px;height:92px;border-radius:14px;object-fit:cover}
      #logisticaBlock .ucCoordinator strong{color:#250632;font-size:14px}
      #logisticaBlock .ucCoordinator p{margin:5px 0 0!important}
      #logisticaBlock .ucDuration{display:flex;flex-direction:column;margin:17px 0;padding:15px;border-radius:14px;background:#250632;color:#fff}
      #logisticaBlock .ucDuration strong{font-size:20px;color:#ff9b3f}.ucDuration span{font-size:9px;color:#e8ddea}
      @media(max-width:600px){#logisticaBlock{padding:20px 16px}.ucCoordinator{align-items:flex-start!important}.ucCoordinator img{width:72px!important;height:72px!important}.ucBtn,.ucWhats{width:100%}}
    `;document.head.appendChild(s);
  }
  const open=()=>{const p=document.querySelector('[data-logistica-panel]');p.hidden=false;p.scrollIntoView({behavior:'smooth',block:'start'});};
  const close=()=>{const p=document.querySelector('[data-logistica-panel]');p.hidden=true;document.getElementById('logisticaBlock').scrollIntoView({behavior:'smooth',block:'center'});};
  document.querySelector('[data-logistica-open]').addEventListener('click',open);
  document.querySelector('[data-logistica-close]').addEventListener('click',close);
})();