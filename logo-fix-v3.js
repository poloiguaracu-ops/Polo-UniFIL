(()=>{
'use strict';
function logo(className){
 const wrap=document.createElement('div');
 wrap.className=className;
 wrap.setAttribute('aria-label','UniFil');
 wrap.innerHTML=`<svg viewBox="0 0 420 150" role="img" aria-label="UniFil" xmlns="http://www.w3.org/2000/svg"><g transform="translate(8 8)"><path fill="#ff7a00" d="M38 18h72c28 0 49 20 49 45 0 15-7 28-18 37l-39 31c-12 10-29 6-36-7-5-9-3-20 4-28l34-36H55c-18 0-31-11-31-25S34 18 38 18Z"/><path fill="#55585b" d="M28 50h48l-29 46c-8 12-24 14-34 5-9-8-10-21-3-31l18-20Z"/></g><text x="157" y="108" font-family="Arial,Helvetica,sans-serif" font-size="70" font-weight="800" font-style="italic" fill="#55585b" letter-spacing="-5">UniFil</text></svg>`;
 wrap.style.cssText='display:block!important;width:220px!important;height:auto!important;line-height:0!important;background:transparent!important;filter:none!important;opacity:1!important';
 return wrap;
}
function fix(){
 const brand=document.querySelector('.brand .logo');
 if(brand){const p=brand.parentElement;brand.remove();p.insertBefore(logo('unifilSvgLogo'),p.firstChild)}
 const hero=document.querySelector('.heroLogo');
 if(hero){hero.replaceChildren(logo('unifilSvgHeroLogo'));hero.style.cssText='display:flex!important;align-items:flex-start!important;background:transparent!important;min-height:0!important'}
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fix);else fix();
setTimeout(fix,300);setTimeout(fix,1200);setTimeout(fix,2200);
})();
