/* UniFil Polo Iguaraçu — correção de cor da imagem oficial */
(function(){
  'use strict';
  function fix(){
    const selectors=[
      '.unifilOfficialLogo',
      '.unifilHeroOfficialLogo',
      '.brand img',
      '.heroLogo img',
      'img[alt*="UniFil" i]',
      'img[src*="unifil" i]'
    ];
    document.querySelectorAll(selectors.join(',')).forEach(img=>{
      img.style.setProperty('filter','none','important');
      img.style.setProperty('opacity','1','important');
      img.style.setProperty('mix-blend-mode','normal','important');
      img.style.setProperty('background','transparent','important');
      img.style.setProperty('visibility','visible','important');
    });
  }
  function run(){
    fix();
    setTimeout(fix,300);
    setTimeout(fix,900);
    setTimeout(fix,1800);
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',run); else run();
})();
