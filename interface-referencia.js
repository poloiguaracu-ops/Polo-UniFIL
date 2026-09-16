/* UniFil Polo Iguaraçu — interface visual inspirada na referência enviada */
(function(){
  'use strict';
  function apply(){
    if(document.getElementById('interface-referencia-style')) return;
    const st=document.createElement('style');
    st.id='interface-referencia-style';
    st.textContent=`
      :root{--ref-purple:#3b0870;--ref-purple2:#6413a0;--ref-orange:#ff7900;--ref-orange2:#ff9d21;--ref-cream:#faf9fc}
      body{font-family:Inter,Segoe UI,Arial,sans-serif;background:var(--ref-cream)}
      .top{display:none!important}
      .nav{position:absolute;top:0;left:0;right:0;background:rgba(49,5,91,.92)!important;border:0!important;box-shadow:none!important;backdrop-filter:blur(8px)}
      .navin{min-height:78px}.brand .logo{color:#fff!important;font-size:26px;letter-spacing:-2px}.brand .logo span{color:var(--ref-orange)!important}.brand small{color:#fff!important;border-left-color:rgba(255,255,255,.28)!important}.links a{color:#fff!important;border-radius:0;padding:28px 18px 25px;font-size:13px}.links a:hover{color:#ff9d21!important;background:rgba(255,255,255,.06)}.links .cta{background:transparent!important;color:#fff!important}.links .cta:hover{background:var(--ref-orange)!important;color:#fff!important;border-radius:10px}
      .hero{min-height:610px;padding-top:78px;background:linear-gradient(125deg,#27034f 0%,#4d0a7e 52%,#7d1aaa 100%)!important;position:relative;isolation:isolate}.hero:before{content:"";position:absolute;inset:0;z-index:-1;background:linear-gradient(145deg,transparent 0 43%,rgba(255,255,255,.04) 43% 52%,transparent 52%),linear-gradient(35deg,transparent 0 58%,rgba(255,121,0,.95) 58% 73%,transparent 73%);clip-path:polygon(0 0,100% 0,100% 100%,0 100%)}.hero:after{content:"";position:absolute;z-index:-1;width:560px;height:560px;right:-170px;top:-90px;border-radius:50%;background:radial-gradient(circle,rgba(255,166,74,.42),rgba(255,121,0,.12) 48%,transparent 70%)}
      .heroIn{min-height:532px;padding:58px 0 54px;grid-template-columns:1.03fr .97fr;gap:36px}.eyebrow{border:0;background:rgba(255,255,255,.08);font-size:10px;padding:8px 12px}.hero h1{font-size:clamp(48px,6vw,76px);line-height:.98;letter-spacing:-4px;margin:20px 0 18px}.hero h1 span{color:#ff8a00}.hero p{font-size:17px;line-height:1.55;max-width:600px;color:#f6eff9}.actions{margin-top:25px}.primary{background:var(--ref-orange)!important;border-radius:30px;padding:14px 27px;font-size:14px}.ghost{display:none!important}
      .heroCard{border:0;background:transparent;padding:0;transform:none}.heroCardIn{min-height:395px;border-radius:0 0 0 110px;padding:35px 45px;background:rgba(255,255,255,.97);box-shadow:0 20px 55px rgba(15,0,35,.18);position:relative;overflow:hidden}.heroCardIn:before{content:"";position:absolute;left:0;top:0;width:7px;height:100%;background:var(--ref-orange)}.heroLogo{font-size:67px;letter-spacing:-7px}.heroCard h2{font-size:31px;color:var(--ref-purple);margin:15px 0 6px}.heroCard p{font-size:13px}.miniTag{background:#fff0e4;color:#b34e00}.quick div{box-shadow:none}.quick b{color:var(--ref-purple)}
      .section.white{display:none!important}
      .courseSection{padding:55px 0 75px;background:#fff}.courseHead{display:flex;align-items:end;justify-content:space-between;gap:20px;margin-bottom:22px}.courseHead h2{color:var(--ref-purple)!important;font-size:42px!important;letter-spacing:-2px!important;margin:5px 0!important}.courseHead h2:before{content:"";display:inline-block;width:7px;height:36px;background:var(--ref-orange);border-radius:6px;margin-right:14px;vertical-align:-4px}.courseHead p{display:none}.courseHead .badge{border:1.5px solid var(--ref-orange);background:#fff;color:var(--ref-purple);padding:11px 17px;font-size:11px;border-radius:24px}
      .tools{grid-template-columns:1fr auto;gap:12px;margin-bottom:20px}.search input{height:47px;border-radius:24px;background:#faf7fc}.chips{justify-content:flex-end}.chip{border-radius:20px}
      .grid{grid-template-columns:repeat(6,minmax(0,1fr));gap:14px}.course{min-height:300px;padding:0 12px 14px;border:0!important;border-radius:16px!important;background:linear-gradient(180deg,#54108a 0%,#3d086e 100%)!important;color:#fff;box-shadow:0 9px 25px rgba(49,5,91,.13);overflow:hidden;display:flex;flex-direction:column;justify-content:flex-end}.course:before{content:"";position:relative;left:auto;top:auto;bottom:auto;width:100%;height:145px;flex:none;background:linear-gradient(135deg,#8b2bd1,#ff9b1f 72%,#4a0b83)!important;border:0!important;opacity:1}.course:after{content:"✦";position:absolute;top:116px;left:14px;width:43px;height:43px;border-radius:50%;display:grid;place-items:center;background:var(--ref-orange);color:#fff;font-size:22px;font-weight:900;box-shadow:0 4px 12px rgba(0,0,0,.18)}.course h3{color:#fff!important;font-size:17px!important;line-height:1.08!important;margin:11px 4px 6px!important}.course p{color:#f6eefe!important;font-size:10px!important;line-height:1.45!important;margin:0 4px 9px!important}.course .badge{background:transparent!important;color:#fff!important;padding:0!important;font-size:9px!important}.course .meta span{background:rgba(255,255,255,.1)!important;color:#fff!important}.course .more{color:#fff!important;background:var(--ref-orange);border-radius:22px;padding:10px 12px;margin:7px 2px 0!important;font-size:9px!important;justify-content:center!important}
      #cursoModulos{margin-top:25px}.ux-featured{display:none!important}
      .contactBox{border-radius:0!important}.section#como,.section#duvidas{background:#fff}.section#como .heading h2,.section#duvidas .heading h2{color:var(--ref-purple)}
      footer{background:#23043f!important}
      @media(max-width:1250px){.grid{grid-template-columns:repeat(3,minmax(0,1fr))}.heroIn{padding-left:12px;padding-right:12px}}
      @media(max-width:850px){.nav{position:absolute}.navin{min-height:68px}.links a{padding:22px 10px;font-size:11px}.heroIn{grid-template-columns:1fr}.heroCardIn{margin-top:24px;border-radius:0 0 0 55px}.courseHead{align-items:center}.courseHead h2{font-size:34px!important}.chips{justify-content:flex-start}.grid{grid-template-columns:repeat(2,minmax(0,1fr))}}
      @media(max-width:600px){.nav{position:absolute}.brand small{display:none}.links{display:none}.hero{padding-top:68px}.heroIn{padding-top:42px}.hero h1{font-size:43px;letter-spacing:-2.6px}.hero p{font-size:14px}.heroCardIn{min-height:310px;padding:25px 23px;border-radius:0 0 0 42px}.heroLogo{font-size:49px}.heroCard h2{font-size:25px}.courseSection{padding-top:38px}.courseHead{display:block}.courseHead .badge{display:none}.courseHead h2{font-size:31px!important}.courseHead h2:before{height:29px;width:6px}.tools{display:none}.grid{grid-template-columns:1fr 1fr;gap:10px}.course{min-height:265px}.course:before{height:120px}.course:after{top:93px;width:38px;height:38px}.course h3{font-size:14px!important}.course p{font-size:9px!important}.course .more{font-size:8px;padding:9px 5px}.ux-service{margin-left:0;margin-right:0}}
    `;
    document.head.appendChild(st);
  }
  function text(){
    const h=document.querySelector('.hero h1');
    if(h){h.innerHTML='A educação<br><span>abre caminhos.</span>';}
    const p=document.querySelector('.hero p');
    if(p){p.textContent='Na UniFil, você encontra mais do que um curso. Você encontra novas possibilidades para o seu futuro.';}
    const b=document.querySelector('.actions .primary');
    if(b){b.innerHTML='Conheça nossos cursos <span aria-hidden="true">→</span>';}
    const eyebrow=document.querySelector('.hero .eyebrow');
    if(eyebrow) eyebrow.textContent='POLO UNIFIL EM IGUARAÇU • PR';
    const head=document.querySelector('.courseHead h2');
    if(head) head.textContent='Nossos Cursos';
    const count=document.getElementById('count');
    if(count) count.textContent='Ver todos os cursos  →';
    const links=document.querySelectorAll('.links a');
    links.forEach(a=>{
      const t=a.textContent.trim().toLowerCase();
      if(t==='início') {a.textContent='Início';a.href='#inicio'}
      else if(t==='cursos'){a.textContent='Cursos';a.href='#cursos'}
      else if(t==='como funciona'){a.textContent='Sobre o Polo';a.href='#como'}
      else if(t==='dúvidas'){a.remove()}
      else if(t.includes('fale com')){a.textContent='Fale Conosco';a.href='#contato'}
    });
  }
  function run(){apply();text();}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
  setTimeout(run,600);setTimeout(run,1600);
})();
