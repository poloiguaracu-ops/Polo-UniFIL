/* MELHORIAS EXTRAS — Polo UniFil Iguaraçu
   Arquivo separado para facilitar futuras alterações sem bagunçar o catálogo.
*/
(function(){
  const ready=()=>{
    const root=document.querySelector('#cursos');
    if(!root)return;
    const wrap=document.createElement('div');
    wrap.className='finder-pro';
    wrap.innerHTML=`
      <div class="finder-intro">
        <span>✨ ENCONTRE UMA FORMAÇÃO</span>
        <h2>Qual caminho combina com você?</h2>
        <p>Responda rapidamente e veja sugestões do catálogo. Você pode alterar as respostas quando quiser.</p>
      </div>
      <div class="finder-steps">
        <label>1. O que mais interessa?<select id="find-area"><option value="">Todos os interesses</option><option>Gestão e negócios</option><option>Tecnologia</option><option>Educação e humanas</option></select></label>
        <label>2. Quanto tempo você procura?<select id="find-time"><option value="">Qualquer duração</option><option value="2">Até 2 anos</option><option value="4">4 anos</option></select></label>
        <label>3. Como prefere estudar?<select id="find-mode"><option value="">Qualquer modalidade</option><option value="Online">Online</option><option value="Tecnólogo">Tecnólogo</option></select></label>
      </div>
      <div class="finder-result" id="finder-result">Escolha uma ou mais opções para começar.</div>`;
    root.parentNode.insertBefore(wrap,root);

    const style=document.createElement('style');style.textContent=`
      .finder-pro{margin:0 auto 34px;padding:28px;border-radius:25px;background:linear-gradient(135deg,#250632,#5b1685);color:#fff;box-shadow:0 22px 55px rgba(37,6,50,.18)}
      .finder-intro{max-width:700px}.finder-intro>span{font-size:9px;font-weight:1000;letter-spacing:1.5px;color:#ff9b3f}.finder-intro h2{font-size:30px;line-height:1.05;letter-spacing:-1px;margin:8px 0}.finder-intro p{font-size:12px;color:#eadff0;margin:0}
      .finder-steps{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:20px}.finder-steps label{font-size:10px;font-weight:900;color:#fff}.finder-steps select{display:block;width:100%;margin-top:6px;height:45px;border:1px solid rgba(255,255,255,.2);border-radius:12px;padding:0 12px;background:rgba(255,255,255,.1);color:#fff;outline:none}.finder-steps option{color:#250632;background:#fff}.finder-result{margin-top:13px;padding:11px 13px;border-radius:12px;background:rgba(255,255,255,.08);font-size:11px;color:#f5edf8}
      .finder-result strong{color:#ff9b3f}.finder-result button{margin-left:7px;border:0;border-radius:999px;padding:7px 10px;background:#fff;color:#250632;font-size:10px;font-weight:900;cursor:pointer}
      @media(max-width:680px){.finder-pro{padding:21px;border-radius:20px}.finder-intro h2{font-size:25px}.finder-steps{grid-template-columns:1fr}.finder-steps select{height:48px}.finder-result{line-height:1.6}}
    `;document.head.appendChild(style);
    const area=document.getElementById('find-area'),time=document.getElementById('find-time'),mode=document.getElementById('find-mode'),out=document.getElementById('finder-result');
    const areaMatch=(c,v)=>{if(!v)return true;const n=(c.nome+' '+c.categoria+' '+c.descricao).toLowerCase();if(v==='Gestão e negócios')return /gest|admin|logíst|marketing|contáb|comercial|qualidade/.test(n);if(v==='Tecnologia')return /tecn|sistema|intelig|dados|cibern|software/.test(n);return /pedagog|história|letras|educa|human/.test(n)};
    const run=()=>{const a=area.value,t=time.value,m=mode.value;const list=(window.CURSOS||[]).filter(c=>areaMatch(c,a)&&(!t||(t==='2'?/2 anos/.test(c.duracao):/4 anos/.test(c.duracao)))&&(!m||c.modalidade===m||c.categoria===m));if(!a&&!t&&!m){out.textContent='Escolha uma ou mais opções para começar.';return}if(!list.length){out.innerHTML='<strong>Nenhuma combinação encontrada.</strong> Tente mudar uma das opções.';return}const names=list.slice(0,3).map(c=>c.nome).join(' • ');out.innerHTML='<strong>Encontramos '+list.length+' opção(ões).</strong> '+names+(list.length>3?' • e mais opções no catálogo.':'')+' <button type="button" id="see-results">Ver no catálogo ↓</button>';document.getElementById('see-results')?.addEventListener('click',()=>root.scrollIntoView({behavior:'smooth',block:'start'}))};[area,time,mode].forEach(x=>x.addEventListener('change',run));
  };
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',ready);else setTimeout(ready,30);
})();
