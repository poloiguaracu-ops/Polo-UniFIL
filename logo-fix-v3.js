(()=>{
'use strict';
function logo(className){
 const wrap=document.createElement('div');
 wrap.className=className;
 wrap.setAttribute('aria-label','UniFil');
 wrap.innerHTML=`<svg viewBox="0 0 596 335" role="img" aria-label="UniFil" xmlns="http://www.w3.org/2000/svg"><rect width="596" height="335" fill="#ff7000"/><g transform="translate(80 112) scale(.78)"><path fill="#fff" d="M38 18h72c28 0 49 20 49 45 0 15-7 28-18 37l-39 31c-12 10-29 6-36-7-5-9-3-20 4-28l34-36H55c-18 0-31-11-31-25S34 18 38 18Z"/><path fill="#fff" d="M28 50h48l-29 46c-8 12-24 14-34 5-9-8-10-21-3-31l18-20Z"/></g><text x="206" y="208" font-family="Arial,Helvetica,sans-serif" font-size="94" font-weight="800" font-style="italic" fill="#fff" letter-spacing="-6">UniFil</text></svg>`;
 wrap.style.cssText='display:block!important;width:220px!important;height:auto!important;line-height:0!important;background:transparent!important;filter:none!important;opacity:1!important';
 return wrap;
}
function inlineLogo(className){
 const w=logo(className);w.style.cssText='display:inline-block!important;width:72px!important;height:40px!important;vertical-align:middle!important;margin:0 4px!important;line-height:0!important';return w;
}
function replaceBrandText(){
 const nodes=[];
 const walker=document.createTreeWalker(document.body,NodeFilter.SHOW_TEXT,{acceptNode(n){if(!n.nodeValue||!/UniFil/i.test(n.nodeValue))return NodeFilter.FILTER_REJECT;const p=n.parentElement;if(!p||['SCRIPT','STYLE','NOSCRIPT'].includes(p.tagName)||p.closest('.unifilSvgLogo,.unifilSvgHeroLogo,.unifilSvgFooterLogo,.unifilSvgInline'))return NodeFilter.FILTER_REJECT;return NodeFilter.FILTER_ACCEPT;}});
 let n;while(n=walker.nextNode())nodes.push(n);
 nodes.forEach(n=>{const parts=n.nodeValue.split(/(UniFil)/ig);const frag=document.createDocumentFragment();parts.forEach(part=>{if(/UniFil/i.test(part))frag.appendChild(inlineLogo('unifilSvgInline'));else if(part)frag.appendChild(document.createTextNode(part));});n.parentNode.replaceChild(frag,n);});
}
function fix(){
 const brand=document.querySelector('.brand .logo');
 if(brand){const p=brand.parentElement;brand.remove();p.insertBefore(logo('unifilSvgLogo'),p.firstChild)}
 const hero=document.querySelector('.heroLogo');
 if(hero){hero.replaceChildren(logo('unifilSvgHeroLogo'));hero.style.cssText='display:flex!important;align-items:flex-start!important;background:transparent!important;min-height:0!important'}
 const footer=document.querySelector('.footerLogo');
 if(footer){footer.replaceChildren(logo('unifilSvgFooterLogo'));footer.style.cssText='display:flex!important;align-items:center!important;background:transparent!important;min-height:0!important'}
 replaceBrandText();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fix);else fix();
setTimeout(fix,300);setTimeout(fix,1200);setTimeout(fix,2200);setTimeout(fix,4200);
})();
