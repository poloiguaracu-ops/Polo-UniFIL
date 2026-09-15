/* UniFil Polo Iguaraçu — Inteligência Artificial Tecnólogo */
(function(){
'use strict';
const WA='https://wa.me/5544997239673';
function render(){
 const root=document.getElementById('cursoModulos');
 if(!root||document.getElementById('iaBlock')) return;
 const style=document.createElement('style');
 style.textContent=`#iaBlock{border:1px solid #e7dfeb;border-radius:24px;background:#fff;overflow:hidden;box-shadow:0 12px 35px rgba(37,6,50,.07);margin-top:16px}.ia-head{padding:27px;background:linear-gradient(135deg,#250632,#5b1685);color:#fff}.ia-k{font-size:9px;font-weight:900;letter-spacing:1.5px;color:#ff9b3f}.ia-head h3{font-size:27px;line-height:1.05;margin:8px 0;color:#fff}.ia-meta{display:flex;gap:7px;flex-wrap:wrap;margin-top:12px}.ia-meta span{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.16);padding:7px 10px;border-radius:999px;font-size:9px;font-weight:900}.ia-btn{margin-top:18px;border:0;background:#ff7000;color:#fff;border-radius:11px;padding:12px 15px;font-weight:900;font-size:10px;cursor:pointer}.ia-panel{display:none;padding:25px}.ia-panel.open{display:block}.ia-close{float:right;border:0;background:#f2edf5;color:#250632;width:39px;height:39px;border-radius:10px;font-size:22px;cursor:pointer}.ia-panel h4{color:#250632;font-size:17px;margin:0 0 8px}.ia-panel p,.ia-panel li{color:#716576;font-size:11px;line-height:1.7}.ia-panel section{border:1px solid #e7dfeb;border-radius:16px;padding:18px;margin-bottom:11px}.ia-wa{display:inline-block;background:#ff7000;color:#fff!important;border-radius:11px;padding:12px 15px;text-decoration:none;font-size:10px;font-weight:900}@media(max-width:700px){.ia-head h3{font-size:22px}.ia-panel{padding:18px}}`;
 document.head.appendChild(style);
 const el=document.createElement('article');
 el.id='iaBlock';
 el.innerHTML=`<div class="ia-head"><div class="ia-k">NOVO • TECNOLOGIA</div><h3>Inteligência Artificial</h3><div class="ia-meta"><span>Tecnólogo</span><span>EAD</span><span>2 anos</span></div><button class="ia-btn" id="iaOpen">Ver informações do curso →</button></div><div class="ia-panel" id="iaPanel"><button class="ia-close" id="iaClose" aria-label="Fechar">←</button><section><h4>Sobre o curso</h4><p>O curso de Tecnologia em Inteligência Artificial da UniFil EAD capacita profissionais para desenvolver soluções baseadas em aprendizado de máquina, processamento de linguagem natural e visão computacional. A formação une fundamentos de programação, estatística e ciência de dados.</p></section><section><h4>Quais áreas poderei atuar como profissional em Inteligência Artificial?</h4><p>O tecnólogo pode atuar em empresas de tecnologia, startups, instituições financeiras, saúde, indústria e comércio. Suas funções incluem desenvolvimento de algoritmos, análise de dados, automação inteligente e consultoria em inovação digital.</p></section><section><h4>Formação tecnológica</h4><p>Assim, o curso garante formação tecnológica de ponta, alinhada às transformações digitais globais.</p></section><a class="ia-wa" href="${WA}?text=${encodeURIComponent('Olá! Tenho interesse no curso de Inteligência Artificial - Tecnólogo.')}" target="_blank" rel="noopener">💬 Tenho interesse neste curso</a></div>`;
 root.appendChild(el);
 document.getElementById('iaOpen').onclick=()=>document.getElementById('iaPanel').classList.add('open');
 document.getElementById('iaClose').onclick=()=>document.getElementById('iaPanel').classList.remove('open');
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',render);else render();
})();