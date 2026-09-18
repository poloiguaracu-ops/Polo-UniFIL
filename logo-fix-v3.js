(()=>{
'use strict';
/* Logo UniFil — versão segura e nítida. Não usa imagem externa/base64, evitando erro de carregamento. */
function aplicar(){
  if(document.getElementById('logoNítidaStyle')) return;
  const s=document.createElement('style');
  s.id='logoNítidaStyle';
  s.textContent=`
    .nav .logo,.brand .logo,.heroLogo,.footerLogo{font-family:Arial,Helvetica,sans-serif!important;font-weight:900!important;display:flex!important;align-items:center!important;white-space:nowrap!important;opacity:1!important;filter:none!important;text-shadow:none!important}
    .nav .logo{font-size:40px!important;letter-spacing:-4px!important;color:#fff!important;line-height:1!important}
    .nav .logo::before{content:'◢';font-size:31px!important;color:#ff7000!important;margin-right:6px!important;line-height:1!important;transform:skew(-10deg)!important}
    .nav .logo span{color:#fff!important}
    .heroLogo{font-size:64px!important;letter-spacing:-7px!important;color:#250632!important}
    .heroLogo span{color:#ff7000!important}
    .footerLogo{font-size:41px!important;letter-spacing:-4px!important;color:#fff!important}
    .footerLogo span{color:#ff7000!important}
    @media(max-width:680px){
      .nav .logo{font-size:31px!important;letter-spacing:-3px!important}
      .nav .logo::before{font-size:24px!important}
      .heroLogo{font-size:49px!important;letter-spacing:-5px!important}
      .footerLogo{font-size:34px!important}
    }
  `;
  document.head.appendChild(s);
}
function boot(){aplicar();}
if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',boot,{once:true}); else boot();
})();