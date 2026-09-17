/* UniFil Polo Iguaraçu — conteúdo atualizado de Teologia Bacharelado */
(function(){
'use strict';
const WA='https://wa.me/5544997239673';
const COORD='https://unifil.br/assets/uploads/2020/03/FME_3108_TEOGEAD.png';
function render(){
 const host=document.getElementById('cursoModulos');
 if(!host || document.getElementById('teologiaFixBlock')) return !!host;
 const el=document.createElement('section');
 el.id='teologiaFixBlock';
 el.style.cssText='display:block!important;margin:18px 0;position:relative;z-index:30;border-radius:24px;overflow:hidden;background:linear-gradient(135deg,#250632,#5b1685 72%,#70219b);color:#fff;box-shadow:0 16px 40px rgba(37,6,50,.16);';
 el.innerHTML=`
 <div style="padding:28px">
  <span style="display:inline-block;padding:7px 10px;border-radius:999px;background:rgba(255,255,255,.12);font-size:9px;font-weight:900;letter-spacing:1px">BACHARELADO • EAD</span>
  <h2 style="font-size:clamp(28px,4vw,42px);line-height:1.05;margin:12px 0 9px;color:#fff">Teologia</h2>
  <div style="display:flex;gap:7px;flex-wrap:wrap">
   <span style="padding:7px 9px;border-radius:9px;background:rgba(255,255,255,.12);font-size:9px;font-weight:800">Bacharelado</span>
   <span style="padding:7px 9px;border-radius:9px;background:rgba(255,255,255,.12);font-size:9px;font-weight:800">EAD</span>
   <span style="padding:7px 9px;border-radius:9px;background:rgba(255,255,255,.12);font-size:9px;font-weight:800">3 anos</span>
  </div>
  <p style="font-size:12px;line-height:1.75;color:#eee5f2;margin:18px 0 0">A Teologia é conhecida como a “mãe das ciências”. O curso de Teologia faz parte das Ciências Humanas e envolve o estudo crítico da natureza, do metafísico, do transcendente, de Deus e Seus atributos, a criação e Sua relação com o homem.</p>
  <button id="teologiaFixOpen" type="button" style="margin-top:18px;border:0;border-radius:12px;padding:12px 16px;background:#ff7000;color:#fff;font-size:10px;font-weight:900;cursor:pointer">Ver informações do curso →</button>
 </div>
 <div id="teologiaFixBody" hidden style="background:#fff;color:#211827;padding:26px">
  <h3 style="color:#250632;margin:0 0 10px;font-size:20px">Sobre o curso</h3>
  <p style="color:#716576;font-size:12px;line-height:1.8;margin:0">O curso de Teologia faz parte das Ciências Humanas e envolve o estudo crítico da natureza, do metafísico, do transcendente, de Deus e Seus atributos, a criação e Sua relação com o homem. Compreende formação teórica com viés prático, contemplando a espiritualidade, a pastoral e a evangelização, e dialoga com a sociedade contemporânea em suas diversas frentes, tais quais, político-econômicas, éticas, multiculturais, científicas e educacionais.</p>
  <p style="color:#716576;font-size:12px;line-height:1.8;margin:14px 0 0">No curso de Teologia EAD da UniFil, Cristo é a chave hermenêutica das Escrituras Sagradas. Proporciona o desenvolvimento espiritual, emocional e intelectual do estudante, bem como o capacita profissionalmente para diversos campos, como Ministério Pastoral em Igrejas, Seminários e Instituições de Ensino Superior, Hospitais, Penitenciárias, Escolas Públicas, Consultoria em Gestão de Pessoas, Concursos Públicos e Docência.</p>
  <p style="color:#5b1685;font-size:12px;line-height:1.8;font-weight:800;margin:14px 0 0">O curso possui vertente reformada.</p>

  <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:22px">
   <div style="border:1px solid #e7dfeb;border-radius:16px;padding:18px;background:#fbf9fc">
    <strong style="display:block;color:#5b1685;font-size:11px;margin-bottom:7px">Por que cursar o EAD da UniFil?</strong>
    <p style="color:#716576;font-size:11px;line-height:1.75;margin:0">O curso de Teologia a distância da UniFil é reconhecido com nota máxima junto pelo MEC. As aulas do EAD são disponibilizadas de forma on-line por professores e tutores altamente qualificados. O material didático é elaborado pelo corpo docente da UniFil e disponibilizado em Ambiente Virtual de Aprendizagem (AVA). Para comodidade e organização dos alunos, o conteúdo e o calendário de aulas são disponibilizados no início de cada semestre.</p>
   </div>
   <div style="border:1px solid #e7dfeb;border-radius:16px;padding:18px;background:#fbf9fc">
    <strong style="display:block;color:#5b1685;font-size:11px;margin-bottom:7px">O aluno de ensino a distância participa de encontros presenciais?</strong>
    <p style="color:#716576;font-size:11px;line-height:1.75;margin:0">Sim! Ao final de cada bimestre, o aluno do curso de Teologia EAD UniFil deverá comparecer à unidade Polo ao qual tem sua matrícula vinculada para a realização de avaliações presenciais. As provas devem ser agendadas com antecedência na mesma unidade.</p>
   </div>
  </div>

  <div style="border:1px solid #e7dfeb;border-radius:16px;padding:20px;background:#fbf9fc;margin-top:12px">
   <strong style="display:block;color:#5b1685;font-size:11px;margin-bottom:8px">Quais áreas poderei atuar como teólogo?</strong>
   <p style="color:#716576;font-size:11px;line-height:1.8;margin:0">O profissional formado em Teologia tem algumas possibilidades de atuação. Entre as principais estão: a atuação no Ministério Pastoral, como professor de ensino religioso para estudantes do ensino fundamental e do ensino médio em escolas públicas ou privadas, podendo ainda trabalhar como conselheiro, professor de religião ou na área de capelania.</p>
   <p style="color:#716576;font-size:11px;line-height:1.8;margin:13px 0 0">Além disso, o teólogo pode se dedicar à docência universitária desde que participe do programa de formação pedagógica para bacharéis em Filosofia, ou Sociologia ou Ensino Religioso (RESOLUÇÃO CNE/CP Nº 2, DE 20 DE DEZEMBRO DE 2019), e desta maneira, atuar como professor de Filosofia, Sociologia e Ensino Religioso. O profissional graduado em Teologia pode, também, trabalhar na gestão de departamentos ministeriais de organizações religiosas, atuar na organização e administração da Igreja atuante, com estratégias, criação de materiais, capacitação de líderes e planejamento organizacional e ações voltadas para a comunidade social.</p>
  </div>

  <div style="margin-top:24px;border-radius:20px;background:linear-gradient(135deg,#250632,#5b1685);padding:20px;color:#fff;display:grid;grid-template-columns:120px 1fr;gap:18px;align-items:center">
   <img src="${COORD}" alt="Emerson Mildenberg — Coordenador do curso de Teologia" style="width:120px;height:120px;object-fit:cover;border-radius:16px;background:#fff;display:block" loading="lazy" decoding="async">
   <div>
    <span style="font-size:9px;font-weight:900;letter-spacing:1px;opacity:.8;text-transform:uppercase">Coordenador</span>
    <h3 style="font-size:20px;margin:7px 0 8px;color:#fff">Emerson Mildenberg</h3>
    <p style="font-size:11px;line-height:1.75;color:#eee5f2;margin:0">O curso de bacharelado em Teologia da UniFil conta com a coordenação do Prof. Dr. Emerson Claudio Mildënbërg, cujo, qual, é responsável pelo Núcleo de Pastoralidade da IES, professor Titular de Teologia, capelão institucional e Coordenador do curso de Ministério Pastoral UniFil.</p>
   </div>
  </div>

  <div style="margin-top:20px;display:flex;gap:8px;flex-wrap:wrap">
   <a target="_blank" rel="noopener" href="${WA}?text=Olá! Tenho interesse no curso de Teologia da UniFil Polo Iguaraçu." style="display:inline-flex;align-items:center;justify-content:center;padding:12px 17px;border-radius:12px;background:#ff7000;color:#fff;font-size:10px;font-weight:900;text-decoration:none">💬 Tenho interesse</a>
   <button id="teologiaFixClose" type="button" style="border:0;border-radius:12px;padding:12px 17px;background:#f2edf5;color:#250632;font-size:10px;font-weight:900;cursor:pointer">← Fechar informações</button>
  </div>
 </div>`;
 host.insertBefore(el,host.firstChild);
 const body=el.querySelector('#teologiaFixBody');
 const open=el.querySelector('#teologiaFixOpen');
 const close=el.querySelector('#teologiaFixClose');
 open.onclick=()=>{body.hidden=false;open.hidden=true;el.scrollIntoView({behavior:'smooth',block:'start'});};
 close.onclick=()=>{body.hidden=true;open.hidden=false;el.scrollIntoView({behavior:'smooth',block:'start'});};
 return true;
}
function boot(){render();[50,200,500,1000,1800,3000].forEach(ms=>setTimeout(render,ms));}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();