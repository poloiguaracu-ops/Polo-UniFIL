/* UniFil Polo Iguaraçu — História Licenciatura */
(function(){
'use strict';
const WA='https://wa.me/5544997239673';
function render(){
 const root=document.getElementById('cursoModulos');
 if(!root||document.getElementById('historiaBlock')) return;
 const style=document.createElement('style');
 style.textContent=`#historiaBlock{border:1px solid #e7dfeb;border-radius:24px;background:#fff;overflow:hidden;box-shadow:0 12px 35px rgba(37,6,50,.07);margin-top:16px}.hist-head{padding:27px;background:linear-gradient(135deg,#250632,#5b1685);color:#fff}.hist-k{font-size:9px;font-weight:900;letter-spacing:1.5px;color:#ff9b3f}.hist-head h3{font-size:27px;line-height:1.05;margin:8px 0;color:#fff}.hist-meta{display:flex;gap:7px;flex-wrap:wrap;margin-top:12px}.hist-meta span{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.16);padding:7px 10px;border-radius:999px;font-size:9px;font-weight:900}.hist-btn{margin-top:18px;border:0;background:#ff7000;color:#fff;border-radius:11px;padding:12px 15px;font-weight:900;font-size:10px;cursor:pointer}.hist-panel{display:none;padding:25px}.hist-panel.open{display:block}.hist-close{float:right;border:0;background:#f2edf5;color:#250632;width:39px;height:39px;border-radius:10px;font-size:22px;cursor:pointer}.hist-panel h4{color:#250632;font-size:17px;margin:0 0 8px}.hist-panel p,.hist-panel li{color:#716576;font-size:11px;line-height:1.7}.hist-panel section{border:1px solid #e7dfeb;border-radius:16px;padding:18px;margin-bottom:11px}.hist-wa{display:inline-block;background:#ff7000;color:#fff!important;border-radius:11px;padding:12px 15px;text-decoration:none;font-size:10px;font-weight:900}.hist-list{padding-left:19px}@media(max-width:700px){.hist-head h3{font-size:22px}.hist-panel{padding:18px}}`;
 document.head.appendChild(style);
 const el=document.createElement('article');
 el.id='historiaBlock';
 el.innerHTML=`<div class="hist-head"><div class="hist-k">NOVA • LICENCIATURA</div><h3>História</h3><div class="hist-meta"><span>Licenciatura</span><span>Semipresencial</span><span>4 anos</span></div><button class="hist-btn" id="histOpen">Ver informações do curso →</button></div><div class="hist-panel" id="histPanel"><button class="hist-close" id="histClose" aria-label="Fechar">←</button><section><h4>Sobre o curso</h4><p>O curso de História da UniFil EAD proporciona formação crítica e reflexiva sobre os processos históricos e culturais da humanidade. O estudante é conduzido ao estudo de fontes, teorias e métodos que permitem compreender as transformações sociais e políticas ao longo do tempo.</p></section><section><h4>Quais áreas poderei atuar como profissional em História?</h4><p>O historiador pode atuar em escolas, centros culturais, museus, arquivos públicos e privados, editoras, pesquisa acadêmica e consultoria em preservação do patrimônio histórico.</p></section><section><h4>Formação profissional</h4><p>O curso assegura formação teórica e prática para interpretar e transmitir o conhecimento histórico com rigor científico e compromisso ético.</p></section><a class="hist-wa" href="${WA}?text=${encodeURIComponent('Olá! Tenho interesse no curso de História - Licenciatura.')}" target="_blank" rel="noopener">💬 Tenho interesse neste curso</a></div>`;
 root.appendChild(el);
 document.getElementById('histOpen').onclick=()=>document.getElementById('histPanel').classList.add('open');
 document.getElementById('histClose').onclick=()=>document.getElementById('histPanel').classList.remove('open');
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',render);else render();
})();