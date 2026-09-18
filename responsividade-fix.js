(()=>{'use strict';
function corrigir(){
 const html=document.documentElement, body=document.body, nav=document.querySelector('.nav'), navin=document.querySelector('.navin'), links=document.querySelector('.links');
 if(!body)return;
 html.style.overflowX='hidden'; body.style.overflowX='hidden'; body.style.maxWidth='100vw'; body.style.width='100%';
 [nav,document.querySelector('.hero'),document.querySelector('main'),document.querySelector('footer')].forEach(el=>{if(el){el.style.maxWidth='100%';el.style.width='100%'}});
 if(!navin||!links)return;
 let btn=navin.querySelector('#menuResponsivoPolo');
 if(window.innerWidth<=900){
   navin.style.minHeight='72px';
   navin.style.width='100%';
   navin.style.maxWidth='100%';
   const brand=navin.querySelector('.brand');
   if(brand){brand.style.minWidth='0';brand.style.flex='1 1 auto';brand.style.maxWidth='calc(100% - 58px)';}
   const logo=navin.querySelector('.logo');
   if(logo){logo.style.fontSize=window.innerWidth<=600?'34px':'40px';logo.style.letterSpacing='-3px';}
   links.style.display='none';
   if(!btn){
     btn=document.createElement('button');btn.id='menuResponsivoPolo';btn.type='button';btn.textContent='☰';btn.setAttribute('aria-label','Abrir menu');
     btn.style.cssText='width:46px;height:46px;flex:none;border:1px solid rgba(255,255,255,.25);border-radius:11px;background:#ff7000;color:#fff;font-size:23px;font-weight:900;cursor:pointer';
     navin.appendChild(btn);
     btn.onclick=()=>{
       const aberto=links.style.display==='flex';
       if(aberto){links.style.display='none';btn.textContent='☰';}
       else{
         links.style.cssText='display:flex!important;position:absolute;left:12px;right:12px;top:78px;z-index:999;background:#250632;border-radius:0 0 16px 16px;padding:8px;flex-direction:column;box-shadow:0 18px 45px rgba(0,0,0,.28);height:auto;align-items:stretch';
         links.querySelectorAll('a').forEach(a=>{a.style.width='100%';a.style.minHeight='46px';a.style.padding='10px 12px';a.style.justifyContent='flex-start';});
         btn.textContent='×';
       }
     };
   }
 }else{
   if(btn)btn.remove();
   links.style.cssText='';
 }
}
function boot(){corrigir();window.addEventListener('resize',corrigir,{passive:true});}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();
})();