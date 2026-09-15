/* UNIFIL POLO IGUARACU — ADMINISTRACAO: 2 E 4 ANOS */
(function(){
  'use strict';
  const INTENSIVO={
    nome:'Administração de Empresas Intensivo',
    tipo:'Bacharelado',
    modalidade:'A Distância - EaD',
    duracao:'02 anos / 04 semestres',
    horas:'4000 horas (60\')'
  };
  const TRADICIONAL={
    nome:'Administração de Empresas',
    tipo:'Bacharelado',
    modalidade:'A Distância - EaD',
    duracao:'04 anos / 08 semestres',
    horas:'4000 horas (60\')'
  };
  const disciplinas=[
    'Administração em Perspectiva','Análise de Investimentos e Perspectivas de Mercado','Análise e Gestão Estratégica de Custos','Comércio Internacional','Contabilidade Organizacional','Direito Empresarial','Fundamentos da Estratégia Organizacional','Gestão de Marketing','Gestão de Pessoas','Gestão Estratégica de Marketing','Gestão Estratégica de Pessoas','Gestão Estratégica de Sistemas de Informações','Gestão Financeira','Business Games','Consultoria Empresarial','E-Commerce','Empreendedorismo e Inovação','Gestão da Qualidade','Laboratório de Negócios: Logística e Gestão da Produção','Mercado de Capitais','Pesquisa Mercadológica','Matemática Aplicada à Gestão','Economia Aplicada à Gestão','Negociação e Gestão de Conflitos','Otimização de Sistemas Produtivos','Gestão de Projetos','Relações Trabalhistas e Sistemas de Informação em RH','Pesquisa de Mercado','Higiene, Segurança e Qualidade de Vida no Trabalho','Ética e Sociologia aplicados à Administração','Marketing Digital','Pesquisa aplicada à Gestão de Negócios','Optativa','Extensão I - VIII','Prática Profissional I','Prática Profissional II','Prática Profissional III','Prática Profissional IV'
  ];
  function inject(){
    const s=document.createElement('style');
    s.textContent=`
      .adm-hero{margin:0 0 22px;padding:26px;border-radius:24px;background:linear-gradient(135deg,#250632,#5b1685);color:#fff;position:relative;overflow:hidden;box-shadow:0 18px 45px rgba(37,6,50,.16)}
      .adm-hero:after{content:'ADMINISTRAÇÃO';position:absolute;right:-20px;bottom:-35px;font-size:72px;font-weight:1000;letter-spacing:-4px;color:rgba(255,255,255,.06)}
      .adm-kicker{color:#ff9b3f;font-size:9px;font-weight:1000;letter-spacing:1.5px}.adm-hero h2{margin:8px 0 7px;font-size:clamp(26px,4vw,40px);line-height:1;letter-spacing:-1.5px;color:#fff}.adm-hero p{max-width:760px;margin:0;color:#eee4f2;font-size:12px;line-height:1.65}
      .adm-options{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:18px;position:relative;z-index:1}.adm-option{background:rgba(255,255,255,.1);border:1px solid rgba(255,255,255,.2);border-radius:17px;padding:17px}.adm-option.hot{background:#ff7000;border-color:#ff7000}.adm-option small{display:block;font-size:8px;font-weight:1000;letter-spacing:1px;text-transform:uppercase}.adm-option strong{display:block;font-size:22px;margin:4px 0}.adm-option span{font-size:10px;color:#f1e8f4}.adm-option.hot span{color:#fff}.adm-cta{display:flex;gap:8px;flex-wrap:wrap;margin-top:16px}.adm-cta button{border:0;border-radius:11px;padding:11px 14px;font-size:10px;font-weight:1000;cursor:pointer;background:#fff;color:#250632}.adm-cta button.orange{background:#ff7000;color:#fff}
      .adm-panel{display:none;margin-top:14px;border:1px solid #e7dfeb;border-radius:20px;background:#fff;padding:20px}.adm-panel.open{display:block}.adm-panel h3{color:#250632;margin:0 0 8px;font-size:20px}.adm-panel .adm-meta{display:flex;gap:7px;flex-wrap:wrap;margin-bottom:14px}.adm-panel .adm-meta span{background:#f5edf9;color:#5b1685;border-radius:999px;padding:7px 10px;font-size:9px;font-weight:900}.adm-panel p{color:#716576;font-size:11px;line-height:1.65}.adm-subtitle{color:#250632;font-size:12px;font-weight:1000;margin:17px 0 9px}.adm-list{display:grid;grid-template-columns:repeat(2,1fr);gap:6px}.adm-list span{border:1px solid #eee6f1;border-radius:10px;padding:9px;color:#5f5365;font-size:10px;background:#fcfafc}.adm-summary{display:grid;grid-template-columns:repeat(4,1fr);gap:8px;margin-top:15px}.adm-summary div{border:1px solid #e7dfeb;border-radius:12px;padding:11px}.adm-summary b{display:block;color:#250632;font-size:10px}.adm-summary span{font-size:9px;color:#716576}.adm-note{margin-top:12px;padding:12px;border-radius:12px;background:#fff7ef;color:#8a4b18;font-size:9px;line-height:1.5}
      @media(max-width:680px){.adm-options{grid-template-columns:1fr}.adm-list{grid-template-columns:1fr}.adm-summary{grid-template-columns:1fr 1fr}.adm-hero{padding:20px}.adm-option strong{font-size:20px}}
    `;
    document.head.appendChild(s);
  }
  function findAdmin(){return window.CURSOS&&CURSOS.find(c=>c.nome==='Administração')}
  function render(){
    const grid=document.querySelector('#grid'); if(!grid||!window.CURSOS)return false;
    const existing=document.querySelector('#admOfficialBlock'); if(existing)return true;
    const box=document.createElement('section'); box.id='admOfficialBlock'; box.className='adm-hero';
    box.innerHTML=`<span class="adm-kicker">FORMAÇÃO OFICIAL • ADMINISTRAÇÃO</span><h2>Administração de Empresas</h2><p>Agora você pode apresentar ao aluno as duas opções de duração disponibilizadas no material curricular: a formação intensiva de 2 anos e a formação de 4 anos.</p><div class="adm-options"><article class="adm-option hot"><small>Opção 01 • Intensivo</small><strong>2 anos</strong><span>02 anos / 04 semestres • Bacharelado • EaD</span></article><article class="adm-option"><small>Opção 02 • Regular</small><strong>4 anos</strong><span>04 anos / 08 semestres • Bacharelado • EaD</span></article></div><div class="adm-cta"><button class="orange" id="adm2">Ver currículo de 2 anos</button><button id="adm4">Ver currículo de 4 anos</button></div><div class="adm-panel" id="admPanel"></div></section>`;
    grid.parentElement.insertBefore(box,grid);
    const panel=document.querySelector('#admPanel');
    function show(data,label){panel.classList.add('open');panel.innerHTML=`<h3>${data.nome}</h3><div class="adm-meta"><span>${data.tipo}</span><span>${data.modalidade}</span><span>${data.duracao}</span></div><p>O documento curricular apresenta a mesma relação de disciplinas para as duas versões. A diferença indicada no material está na duração e na organização dos semestres.</p><div class="adm-subtitle">Disciplinas e componentes curriculares</div><div class="adm-list">${disciplinas.map((x,i)=>`<span>${String(i+1).padStart(2,'0')} · ${x}</span>`).join('')}</div><div class="adm-summary"><div><b>3100 h</b><span>Componentes obrigatórios</span></div><div><b>400 h</b><span>Atividades de extensão</span></div><div><b>400 h</b><span>Prática profissional</span></div><div><b>100 h</b><span>Atividades acadêmicas complementares</span></div></div><div class="adm-summary"><div><b>4000 h</b><span>Carga horária total</span></div><div><b>0 h</b><span>Trabalho de conclusão</span></div><div><b>0 h</b><span>Estágio curricular obrigatório</span></div><div><b>${label}</b><span>Organização da formação</span></div></div><div class="adm-note">A ordem da oferta das disciplinas será estipulada conforme o mês de ingresso do aluno no Curso de Graduação na modalidade EaD.</div>`;panel.scrollIntoView({behavior:'smooth',block:'nearest'});}
    document.querySelector('#adm2').onclick=()=>show(INTENSIVO,'02 anos / 04 semestres');
    document.querySelector('#adm4').onclick=()=>show(TRADICIONAL,'04 anos / 08 semestres');
    return true;
  }
  function start(){inject();let n=0;const t=setInterval(()=>{if(render()||++n>30)clearInterval(t)},250)}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start);else start();
})();