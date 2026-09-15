/* FALLBACK DO CATÁLOGO — garante que os cursos apareçam mesmo se um script antigo falhar */
(function(){
'use strict';
const cursos=[
['Administração','Graduação','Online','4 anos','Formação em gestão, planejamento, pessoas, processos e negócios.'],
['Análise e Desenvolvimento de Sistemas','Graduação','Tecnólogo','2 anos e meio','Desenvolvimento de sistemas, programação, bancos de dados e soluções tecnológicas.'],
['Ciências Contábeis','Graduação','Online','4 anos','Contabilidade, patrimônio, custos e informações para tomada de decisão.'],
['Pedagogia','Licenciatura','Online','4 anos','Educação, ensino e aprendizagem e gestão dos espaços educativos.'],
['Gestão Financeira','Graduação','Tecnólogo','2 anos','Análise financeira, planejamento, controle e decisões econômicas.'],
['Gestão de Recursos Humanos','Graduação','Tecnólogo','2 anos','Pessoas, relações de trabalho e desenvolvimento profissional.'],
['Gestão Pública','Graduação','Tecnólogo','2 anos','Administração pública, políticas, planejamento e gestão.'],
['Logística','Graduação','Tecnólogo','2 anos','Estoque, transporte, distribuição e cadeia de suprimentos.'],
['Gestão Comercial','Graduação','Tecnólogo','2 anos','Vendas, negociação, relacionamento e gestão comercial.'],
['Gestão da Qualidade','Graduação','Tecnólogo','2 anos','Processos, indicadores, melhoria contínua e qualidade.'],
['Marketing','Graduação','Tecnólogo','2 anos','Mercados, marcas, consumidores e estratégias de marketing.'],
['Inteligência Artificial','Graduação','Tecnólogo','2 anos','Conceitos, aplicações e soluções baseadas em inteligência artificial.'],
['Segurança Cibernética','Graduação','Tecnólogo','2 anos','Proteção de sistemas, informações, redes e ambientes digitais.'],
['História','Licenciatura','Online','4 anos','Processos históricos, sociedades, culturas e pesquisa histórica.'],
['Letras Português-Inglês','Licenciatura','Online','4 anos','Línguas portuguesa e inglesa, literatura, linguagem e ensino.']
];
function init(){
 const grid=document.getElementById('grid');
 const count=document.getElementById('count');
 const empty=document.getElementById('empty');
 if(!grid)return;
 const render=(term='')=>{
  const t=term.toLowerCase().trim();
  const list=cursos.filter(c=>!t||c.join(' ').toLowerCase().includes(t));
  grid.innerHTML=list.map((c,i)=>`<article class="course" data-course="${c[0]}" tabindex="0"><span class="badge">${c[1]}</span><h3>${c[0]}</h3><p>${c[4]}</p><div class="meta"><span>${c[2]}</span><span>${c[3]}</span></div><div class="more"><span>Ver detalhes</span><span>→</span></div></article>`).join('');
  if(count)count.textContent=list.length+' cursos disponíveis';
  if(empty)empty.style.display=list.length?'none':'block';
  grid.querySelectorAll('.course').forEach(card=>{card.onclick=()=>open(card.dataset.course);card.onkeydown=e=>{if(e.key==='Enter'||e.key===' ')open(card.dataset.course)}});
 };
 function open(nome){
  const c=cursos.find(x=>x[0]===nome); if(!c)return;
  let modal=document.getElementById('catalogoFixModal');
  if(!modal){modal=document.createElement('div');modal.id='catalogoFixModal';modal.className='modal';document.body.appendChild(modal)}
  modal.innerHTML=`<div class="dialog"><div class="dialogTop"><div><span class="badge">${c[1]}</span><h2>${c[0]}</h2></div><button class="close" aria-label="Fechar">×</button></div><div class="details"><div class="detail"><b>Modalidade</b><p>${c[2]}</p></div><div class="detail"><b>Duração</b><p>${c[3]}</p></div><div class="detail full"><h3>Sobre o curso</h3><p>${c[4]}</p></div></div><div class="dialogActions"><a class="btn" target="_blank" rel="noopener" href="https://wa.me/5544997239673?text=${encodeURIComponent('Olá! Tenho interesse no curso de '+c[0]+'. Gostaria de mais informações.')}">💬 Tenho interesse</a></div></div>`;
  modal.classList.add('open');modal.querySelector('.close').onclick=()=>modal.classList.remove('open');modal.onclick=e=>{if(e.target===modal)modal.classList.remove('open')};
 }
 const search=document.getElementById('search');if(search)search.addEventListener('input',()=>render(search.value));
 render();
 const ver=document.querySelector('a[href="#cursos"]');
 if(ver)ver.addEventListener('click',e=>{e.preventDefault();document.getElementById('cursos').scrollIntoView({behavior:'smooth',block:'start'});setTimeout(()=>{if(search)search.focus()},500)});
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init);else init();
})();