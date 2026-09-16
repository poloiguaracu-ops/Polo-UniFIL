(()=>{
'use strict';
const LOGO='data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDAAsICAoIBwsKCQoNDAsNERwSEQ8PESIZGhQcKSQrKigkJyctMkA3LTA9MCcnOEw5PUNFSElIKzZPVU5GVEBHSEX/2wBDAQwNDREPESESEiFFLicuRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRUX/wAARCA...
';
function makeLogo(cls){const img=document.createElement('img');img.src=LOGO;img.alt='UniFil';img.className=cls;img.decoding='async';img.loading='eager';img.style.cssText='display:block!important;width:220px!important;height:auto!important;max-width:100%!important;object-fit:contain!important;filter:none!important;opacity:1!important;background:transparent!important;border:0!important;box-shadow:none!important';return img}
function fix(){const brand=document.querySelector('.brand .logo');if(brand){const p=brand.parentElement;brand.remove();p.insertBefore(makeLogo('unifilRealLogo'),p.firstChild)}const hero=document.querySelector('.heroLogo');if(hero){hero.textContent='';hero.appendChild(makeLogo('unifilHeroRealLogo'));hero.style.cssText='display:flex!important;align-items:flex-start!important;min-height:0!important;background:transparent!important'} }
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',fix);else fix();setTimeout(fix,500);setTimeout(fix,1600);
})();
