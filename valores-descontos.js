(()=>{
'use strict';
const rows=[
['Administração','Bacharelado • Online','4 anos','R$ 49,90','R$ 239,85','35%','R$ 369,00'],
['Administração - Intensivo','Bacharelado • Online','2 anos','R$ 49,90','R$ 479,05','35%','R$ 737,00'],
['Análise e Desenvolvimento de Sistemas','CST - Tecnólogo • Online','2,5 anos','R$ 49,90','R$ 253,50','35%','R$ 390,00'],
['Banco de Dados','CST - Tecnólogo • Online','2 anos','R$ 49,90','R$ 293,48','50%','R$ 586,95'],
['Ciências Contábeis - 4 anos','Bacharelado • Online','4 anos','R$ 49,90','R$ 239,20','35%','R$ 368,00'],
['Ciências de Dados e Inteligência Artificial','Bacharelado • Online','4 anos','R$ 49,90','R$ 147,20','60%','R$ 368,00'],
['Ciências Econômicas','Bacharelado • Online','3 anos','R$ 49,90','R$ 292,50','50%','R$ 585,00'],
['Comércio Exterior','CST - Tecnólogo • Online','2 anos','R$ 49,90','R$ 219,70','50%','R$ 439,40'],
['Comunicação Social - Publicidade e Propaganda','Bacharelado • Online','4 anos','R$ 49,90','R$ 300,30','50%','R$ 600,60'],
['Desenvolvimento e Gestão de Startups','Bacharelado • Online','2 anos','R$ 49,90','R$ 219,70','50%','R$ 439,40'],
['Design de Moda','Bacharelado • Online','2 anos','R$ 49,90','R$ 247,00','50%','R$ 494,00'],
['Educação Especial e Inclusiva','Licenciatura • Semipresencial','4 anos','R$ 49,90','R$ 296,40','50%','R$ 592,80'],
['Educação Física','Bacharelado • Semipresencial','4 anos','R$ 49,90','R$ 297,70','35%','R$ 458,00'],
['Engenharia Civil','Bacharelado • Semipresencial','4 anos','R$ 49,90','R$ 501,15','35%','R$ 771,00'],
['Engenharia de Produção','Bacharelado • Semipresencial','4 anos','R$ 49,90','R$ 501,15','35%','R$ 771,00'],
['Engenharia de Software','Bacharelado • Online','4 anos','R$ 49,90','R$ 323,05','35%','R$ 497,00'],
['Engenharia Elétrica','Bacharelado • Semipresencial','4 anos','R$ 49,90','R$ 308,40','60%','R$ 771,00'],
['Estética e Cosmética','CST - Tecnólogo • Semipresencial','2 anos','R$ 49,90','R$ 857,74','37,9%','R$ 622,00'],
['Estudos Teóricos Psicanalíticos e Sociais','Bacharelado • Online','3 anos','R$ 49,90','R$ 199,90','61,3%','R$ 516,00'],
['Geografia','Licenciatura • Semipresencial','4 anos','R$ 49,90','R$ 296,40','50%','R$ 592,80'],
['Gestão Comercial','CST - Tecnólogo • Online','2 anos','R$ 49,90','R$ 222,95','35%','R$ 343,00'],
['Gestão de Qualidade','CST - Tecnólogo • Semipresencial','2 anos','R$ 49,90','R$ 218,40','50%','R$ 436,80'],
['Gestão do Esporte e Alto Rendimento','CST - Tecnólogo • Semipresencial','2 anos','R$ 49,90','R$ 230,75','50%','R$ 461,50'],
['Gestão Financeira','CST - Tecnólogo • Online','2 anos','R$ 49,90','R$ 222,95','35%','R$ 343,00'],
['Gestão Pública','CST - Tecnólogo • Online','2 anos','R$ 49,90','R$ 222,95','35%','R$ 343,00'],
['Gestão RH','CST - Tecnólogo • Online','2 anos','R$ 49,90','R$ 222,95','35%','R$ 343,00'],
['História','Licenciatura • Semipresencial','4 anos','R$ 49,90','R$ 296,40','50%','R$ 592,80'],
['Inteligência Artificial','CST - Tecnólogo • Online','2 anos','R$ 49,90','R$ 293,48','50%','R$ 586,95'],
['Internet das Coisas','CST - Tecnólogo • Online','2 anos','R$ 49,90','R$ 293,48','50%','R$ 586,95'],
['Letras - Inglês/Português','Licenciatura • Semipresencial','4 anos','R$ 49,90','R$ 173,55','35%','R$ 267,00'],
['Logística','CST - Tecnólogo • Online','2 anos','R$ 49,90','R$ 222,95','35%','R$ 343,00'],
['Marketing','CST - Tecnólogo • Online','2 anos','R$ 49,90','R$ 222,95','35%','R$ 343,00'],
['Matemática','Licenciatura • Semipresencial','4 anos','R$ 49,90','R$ 296,40','50%','R$ 592,80'],
['Mídias Sociais Digitais','CST - Tecnólogo • Online','2 anos','R$ 49,90','R$ 247,00','50%','R$ 494,00'],
['Ministério Pastoral','CST - Tecnólogo • Online','2 anos','R$ 49,90','R$ 192,40','35%','R$ 296,00'],
['Pedagogia (Licenciatura)','Licenciatura • Semipresencial','4 anos','R$ 49,90','R$ 227,50','35%','R$ 350,00'],
['Pedagogia (para Magistério)','Licenciatura • Semipresencial','2 anos','R$ 49,90','R$ 227,50','35%','R$ 350,00'],
['Podologia','CST - Tecnólogo • Semipresencial','2 anos','R$ 49,90','R$ 405,60','35%','R$ 624,00'],
['Processos Gerenciais','CST - Tecnólogo • Online','2 anos','R$ 49,90','R$ 222,95','35%','R$ 343,00'],
['Produção Audiovisual','CST - Tecnólogo • Online','2 anos','R$ 49,90','R$ 247,00','50%','R$ 494,00'],
['Radiologia','CST - Tecnólogo • Semipresencial','2,5 anos','R$ 49,90','R$ 404,95','35%','R$ 623,00'],
['Redes de Computadores','Bacharelado • Online','4 anos','R$ 49,90','R$ 392,44','50%','R$ 784,88'],
['Relações Internacionais','Bacharelado • Online','4 anos','R$ 49,90','R$ 297,70','50%','R$ 595,40'],
['Segurança Cibernética','CST - Tecnólogo • Online','2 anos','R$ 49,90','R$ 273,00','50%','R$ 546,00'],
['Sociologia','Licenciatura • Semipresencial','4 anos','R$ 49,90','R$ 296,40','50%','R$ 592,80'],
['Tecnologia em Jogos Digitais','CST - Tecnólogo • Online','2 anos','R$ 49,90','R$ 293,48','50%','R$ 586,95'],
['Teologia','Bacharelado • Online','3 anos','R$ 49,90','R$ 192,40','35%','R$ 296,00']
];
function start(){
 if(document.getElementById('valoresCursosAba'))return;
 const style=document.createElement('style');
 style.textContent=`#valoresCursosAba{margin:35px auto 0;max-width:1180px}.valoresBtn{width:100%;border:0;border-radius:20px;padding:22px 25px;background:linear-gradient(135deg,#250632,#5b1685);color:#fff;text-align:left;cursor:pointer;display:flex;align-items:center;justify-content:space-between;gap:15px;box-shadow:0 16px 40px rgba(37,6,50,.18)}.valoresBtn strong{display:block;font-size:20px}.valoresBtn span{display:block;margin-top:4px;font-size:11px;color:#eadff0}.valoresBtn b{width:43px;height:43px;border-radius:13px;background:#ff7000;display:grid;place-items:center;font-size:22px;flex:none}.valoresOverlay{position:fixed;inset:0;z-index:999;background:rgba(14,3,22,.82);backdrop-filter:blur(8px);display:none;align-items:center;justify-content:center;padding:16px}.valoresOverlay.open{display:flex}.valoresDialog{width:min(1120px,100%);max-height:92vh;overflow:auto;background:#fff;border-radius:24px;padding:25px;color:#211827}.valoresHead{display:flex;align-items:flex-start;justify-content:space-between;gap:15px;border-bottom:1px solid #e7dfeb;padding-bottom:16px}.valoresHead h2{color:#250632;margin:0;font-size:30px}.valoresHead p{color:#716576;font-size:11px;margin:5px 0 0}.valoresClose{border:0;width:42px;height:42px;border-radius:12px;background:#f2edf5;color:#250632;font-size:23px;cursor:pointer}.valoresNotice{margin:18px 0;padding:14px 16px;border-radius:15px;background:#fff0e5;border-left:4px solid #ff7000;color:#6b3513;font-size:11px}.valoresSearch{width:100%;height:48px;border:1px solid #e7dfeb;border-radius:13px;padding:0 14px;font-size:13px;outline:none;margin-bottom:14px}.valoresTableWrap{overflow:auto;border:1px solid #e7dfeb;border-radius:16px}.valoresTable{width:100%;border-collapse:collapse;min-width:850px;font-size:10px}.valoresTable th{background:#250632;color:#fff;padding:11px 9px;text-align:left;position:sticky;top:0}.valoresTable td{padding:10px 9px;border-bottom:1px solid #eee7f1}.valoresTable tr:nth-child(even){background:#faf8fc}.valoresTable td:nth-child(5){font-weight:900;color:#5b1685}.valoresTable td:nth-child(6){font-weight:1000;color:#d95d00}.valoresFooter{margin-top:14px;color:#716576;font-size:10px}.valoresFooter strong{color:#250632}@media(max-width:680px){#valoresCursosAba{margin-top:25px}.valoresBtn{padding:18px}.valoresBtn strong{font-size:17px}.valoresDialog{padding:17px 12px;border-radius:19px;max-height:94dvh}.valoresHead h2{font-size:23px}.valoresOverlay{padding:7px;align-items:flex-end}}`;
 document.head.appendChild(style);
 const sec=document.createElement('section');sec.id='valoresCursosAba';
 sec.innerHTML=`<button class="valoresBtn" type="button"><div><strong>💰 Valores dos cursos e descontos</strong><span>Consulte a tabela de mensalidades, primeira mensalidade e descontos.</span></div><b>→</b></button>`;
 const footer=document.querySelector('footer');(footer?footer.parentNode.insertBefore(sec,footer):document.body.appendChild(sec));
 const overlay=document.createElement('div');overlay.className='valoresOverlay';overlay.id='valoresCursosModal';
 overlay.innerHTML=`<div class="valoresDialog" role="dialog" aria-modal="true" aria-label="Valores dos cursos e descontos"><div class="valoresHead"><div><h2>Valores dos cursos e descontos</h2><p>Tabela de mensalidades — Graduação EAD • E4</p></div><button class="valoresClose" type="button" aria-label="Fechar">×</button></div><div class="valoresNotice"><strong>Primeira mensalidade: R$ 49,90</strong><br>As demais mensalidades e os descontos variam conforme o curso e estão indicados na tabela abaixo. Valores reproduzidos da tabela E4 fornecida pelo Polo.</div><input class="valoresSearch" type="search" placeholder="Pesquisar curso..." aria-label="Pesquisar curso"><div class="valoresTableWrap"><table class="valoresTable"><thead><tr><th>Curso</th><th>Modalidade</th><th>Duração</th><th>1ª mensalidade</th><th>Mensalidade até dia 07</th><th>Desconto</th><th>Mensalidade após dia 07</th></tr></thead><tbody></tbody></table></div><div class="valoresFooter"><strong>Observação:</strong> a tabela também informa cursos novos e cursos ofertados em Londrina. Consulte o Polo para confirmar condições vigentes no momento da matrícula.</div></div>`;
 document.body.appendChild(overlay);
 const tbody=overlay.querySelector('tbody'),search=overlay.querySelector('.valoresSearch');
 function fill(q=''){tbody.innerHTML='';rows.filter(r=>r[0].toLowerCase().includes(q.toLowerCase())).forEach(r=>{const tr=document.createElement('tr');tr.innerHTML=r.map(v=>`<td>${v}</td>`).join('');tbody.appendChild(tr)});}
 fill();
 const open=()=>{overlay.classList.add('open');search.focus();document.body.style.overflow='hidden'};
 const close=()=>{overlay.classList.remove('open');document.body.style.overflow=''};
 sec.querySelector('.valoresBtn').onclick=open;overlay.querySelector('.valoresClose').onclick=close;overlay.addEventListener('click',e=>{if(e.target===overlay)close()});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()});search.addEventListener('input',()=>fill(search.value));
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',start,{once:true});else start();
})();
