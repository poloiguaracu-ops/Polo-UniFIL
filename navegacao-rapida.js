/* UniFil Polo Iguaraçu — navegação rápida */
(function(){
  'use strict';
  const ID='navegacaoRapida';

  function criar(){
    if(document.getElementById(ID)) return;
    const box=document.createElement('div');
    box.id=ID;
    box.innerHTML=`
      <button type="button" id="irTopo" aria-label="Ir para o começo do site" title="Ir para o começo">↑</button>
      <button type="button" id="irFim" aria-label="Ir para o fim do site" title="Ir para o fim">↓</button>`;
    document.body.appendChild(box);

    document.getElementById('irTopo').addEventListener('click',()=>{
      window.scrollTo({top:0,behavior:'smooth'});
    });
    document.getElementById('irFim').addEventListener('click',()=>{
      window.scrollTo({top:document.documentElement.scrollHeight,behavior:'smooth'});
    });
  }

  function css(){
    if(document.getElementById('navegacaoRapidaCSS')) return;
    const style=document.createElement('style');
    style.id='navegacaoRapidaCSS';
    style.textContent=`
      #${ID}{position:fixed;right:18px;bottom:20px;z-index:9999;display:flex;flex-direction:column;gap:8px}
      #${ID} button{width:46px;height:46px;border:0;border-radius:14px;background:linear-gradient(135deg,#250632,#5b1685);color:#fff;box-shadow:0 10px 25px rgba(37,6,50,.25);font-size:25px;font-weight:900;line-height:1;cursor:pointer;display:grid;place-items:center;transition:transform .2s,background .2s}
      #${ID} button:hover{transform:translateY(-2px);background:linear-gradient(135deg,#ff7000,#ff9b3f)}
      #${ID} button:active{transform:scale(.94)}
      @media(max-width:680px){#${ID}{right:12px;bottom:14px;gap:6px}#${ID} button{width:42px;height:42px;border-radius:12px;font-size:22px}}
    `;
    document.head.appendChild(style);
  }

  function iniciar(){css();criar();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',iniciar,{once:true});else iniciar();
})();