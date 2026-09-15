/* UniFil Polo Iguaraçu — Internet das Coisas Tecnólogo */
(function(){
  'use strict';
  function init(){
    var root=document.getElementById('cursoModulos');
    if(!root || document.getElementById('iotBlock')) return;
    var box=document.createElement('section');
    box.id='iotBlock';
    box.className='courseModule';
    box.innerHTML=`
      <style>
        #iotBlock{margin-top:18px;background:#fff;border:1px solid #e7dfeb;border-radius:24px;overflow:hidden;box-shadow:0 14px 38px rgba(37,6,50,.08)}
        #iotBlock .iotHero{padding:30px;background:linear-gradient(135deg,#250632,#5b1685);color:#fff}
        #iotBlock .iotBadge{display:inline-block;padding:7px 10px;border-radius:999px;background:rgba(255,255,255,.12);font-size:9px;font-weight:900;letter-spacing:1px}
        #iotBlock h2{margin:12px 0 7px;font-size:32px;line-height:1.05;letter-spacing:-1px}
        #iotBlock .iotMeta{display:flex;gap:7px;flex-wrap:wrap}
        #iotBlock .iotMeta span{padding:7px 9px;border-radius:9px;background:rgba(255,255,255,.12);font-size:10px;font-weight:800}
        #iotBlock .iotIntro{margin:14px 0 0;color:#eadff0;font-size:12px;line-height:1.7;max-width:800px}
        #iotBlock .iotBody{padding:24px}
        #iotBlock .iotPanel{display:none}
        #iotBlock .iotPanel.open{display:block}
        #iotBlock .iotButton{border:0;background:#ff7000;color:#fff;padding:13px 17px;border-radius:12px;font-weight:900;cursor:pointer;margin-top:18px}
        #iotBlock .iotPanel{border-top:1px solid #e7dfeb;padding-top:22px}
        #iotBlock .iotClose{border:0;background:#f3edf7;color:#250632;padding:10px 14px;border-radius:10px;font-weight:900;cursor:pointer;margin-bottom:18px}
        #iotBlock h3{color:#250632;font-size:18px;margin:18px 0 7px}
        #iotBlock p{color:#716576;font-size:12px;line-height:1.75;margin:0 0 12px}
        #iotBlock ul{margin:8px 0 0;padding-left:19px;color:#716576;font-size:12px;line-height:1.8}
        #iotBlock .iotGrid{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:16px}
        #iotBlock .iotCard{border:1px solid #e7dfeb;border-radius:15px;padding:16px;background:#fcfafd}
        #iotBlock .iotCard strong{display:block;color:#250632;font-size:11px;margin-bottom:4px}
        #iotBlock .iotWa{display:inline-flex;margin-top:18px;padding:13px 17px;border-radius:12px;background:#ff7000;color:#fff;font-weight:900;text-decoration:none}
        @media(max-width:680px){#iotBlock .iotHero{padding:23px 18px}#iotBlock h2{font-size:27px}#iotBlock .iotBody{padding:18px}#iotBlock .iotGrid{grid-template-columns:1fr}}
      </style>
      <div class="iotHero">
        <span class="iotBadge">NOVO • TECNÓLOGO</span>
        <h2>Internet das Coisas</h2>
        <div class="iotMeta"><span>Tecnólogo</span><span>EAD</span><span>2 anos</span></div>
        <p class="iotIntro">Formação para projetar, implementar e gerenciar soluções conectadas que integram dispositivos inteligentes, sensores, automação e análise de dados.</p>
      </div>
      <div class="iotBody">
        <button class="iotButton" type="button">Ver informações do curso →</button>
        <div class="iotPanel">
          <button class="iotClose" type="button">← Fechar informações</button>
          <h3>Sobre o curso</h3>
          <p>O curso de Tecnologia em Internet das Coisas da UniFil EAD capacita profissionais para projetar, implementar e gerenciar soluções conectadas que integram dispositivos inteligentes, sensores, automação e análise de dados. Com conhecimentos em redes, computação embarcada, programação e segurança, o estudante aprende a desenvolver aplicações inovadoras para diferentes setores.</p>
          <h3>Quais áreas poderei atuar como profissional em IoT?</h3>
          <p>O tecnólogo pode atuar em empresas de tecnologia, indústrias, agronegócio, automação residencial e predial, smart cities, logística, saúde e consultorias especializadas.</p>
          <ul>
            <li>Desenvolvimento de dispositivos</li>
            <li>Integração de sistemas</li>
            <li>Monitoramento remoto</li>
            <li>Análise de dados</li>
            <li>Automação</li>
            <li>Implementação de soluções inteligentes</li>
          </ul>
          <div class="iotGrid">
            <div class="iotCard"><strong>Formação</strong>Redes, computação embarcada, programação e segurança.</div>
            <div class="iotCard"><strong>Duração</strong>2 anos de duração.</div>
          </div>
          <p style="margin-top:18px">Assim, o curso oferece uma formação alinhada às demandas tecnológicas atuais, habilitando profissionais a inovar e transformar processos por meio de soluções conectadas.</p>
          <a class="iotWa" href="https://wa.me/5544997239673?text=Tenho%20interesse%20no%20curso%20de%20Internet%20das%20Coisas" target="_blank" rel="noopener">💬 Tenho interesse</a>
        </div>
      </div>`;
    root.appendChild(box);
    var open=box.querySelector('.iotButton'), panel=box.querySelector('.iotPanel'), close=box.querySelector('.iotClose');
    open.addEventListener('click',function(){panel.classList.add('open');open.style.display='none';box.scrollIntoView({behavior:'smooth',block:'start'});});
    close.addEventListener('click',function(){panel.classList.remove('open');open.style.display='inline-block';box.scrollIntoView({behavior:'smooth',block:'start'});});
  }
  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',init); else init();
  setTimeout(init,500); setTimeout(init,1500);
})();