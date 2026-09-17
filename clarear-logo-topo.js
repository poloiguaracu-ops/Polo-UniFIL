/* Ajuste visual da logo UniFil — resolução nítida e proporcional */
(function(){
'use strict';
function aplicar(){
 const id='logoResolucaoNítidaStyle';
 if(!document.getElementById(id)){
  const s=document.createElement('style');s.id=id;
  s.textContent=`
   .nav .logo,.nav .logo img,header .logo,header .logo img,.brand .logo,.brand .logo img{opacity:1!important}
   .nav .logo img,header .logo img,.brand .logo img{
    width:190px!important;height:auto!important;max-width:none!important;
    object-fit:contain!important;object-position:center!important;
    display:block!important;image-rendering:auto!important;
    filter:brightness(1.28) contrast(1.08) saturate(1.04)!important;
   }
   .nav .logo,.brand .logo{overflow:visible!important;flex-shrink:0!important}
   @media(max-width:700px){.nav .logo img,header .logo img,.brand .logo img{width:155px!important}}
  `;document.head.appendChild(s)
 }
 const imgs=document.querySelectorAll('.nav .logo img,header .logo img,.brand .logo img');
 imgs.forEach(img=>{img.style.imageRendering='auto';img.decoding='async';img.setAttribute('fetchpriority','high')});
}
function boot(){aplicar();[100,400,900,1600,2600].forEach(ms=>setTimeout(aplicar,ms))}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();