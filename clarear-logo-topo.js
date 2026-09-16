/* Ajuste visual: clareia somente o logo do topo, preservando os demais logos */
(function(){
'use strict';
function aplicar(){
  const styleId='clarearLogoTopoStyle';
  if(!document.getElementById(styleId)){
    const s=document.createElement('style');
    s.id=styleId;
    s.textContent=`
      .nav .logo img,
      header .logo img,
      .brand .logo img{
        filter:brightness(1.22) contrast(1.04)!important;
        opacity:1!important;
      }
      .nav .logo,
      header .logo,
      .brand .logo{
        opacity:1!important;
      }
    `;
    document.head.appendChild(s);
  }
}
function boot(){aplicar();[200,700,1500,2500].forEach(ms=>setTimeout(aplicar,ms));}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();