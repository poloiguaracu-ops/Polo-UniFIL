/* UniFil Polo Iguaraçu — Registro de Visitas com armazenamento persistente */
(()=>{
'use strict';
const KEY='unifil_polo_registro_visitas_v1';
const API='/api/visitas';
const CACHE_BUSTER='?t='+Date.now();
let servidorDisponivel=false;
let registros=[];
const norm=s=>(s||'').normalize('NFD').replace(/[\u0300-\u036f]/g,'').toLowerCase();
function localGet(){try{const v=JSON.parse(localStorage.getItem(KEY)||'[]');return Array.isArray(v)?v:[]}catch{return[]}}
function localSet(v){try{localStorage.setItem(KEY,JSON.stringify(v))}catch{}}
function hoje(){const d=new Date();return new Date(d.getTime()-d.getTimezoneOffset()*60000).toISOString().slice(0,10)}
function brDate(v){if(!v)return'';const [y,m,d]=v.split('-');return d&&m&&y?`${d}/${m}/${y}`:v}
function esc(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]))}
function id(){return crypto.randomUUID?crypto.randomUUID():String(Date.now()+Math.random())}
function ordenados(arr){return [...arr].sort((a,b)=>String(b.data).localeCompare(String(a.data))||Number(b.criadoEm||0)-Number(a.criadoEm||0))}
async function api(method,body){const opt={method,headers:{'content-type':'application/json'},body:body===undefined?undefined:JSON.stringify(body),cache:'no-store'};const r=await fetch(API+CACHE_BUSTER,opt);if(!r.ok)throw new Error(await r.text());return r.json()}
async function sincronizar(){
 const locais=localGet();
 try{
  const r=await api('GET');
  servidorDisponivel=true;
  const remotos=(r.visitas||[]).map(v=>({id:String(v.id),nome:String(v.nome),data:String(v.data),criadoEm:Number(v.criado_em||Date.now()),atualizadoEm:v.atualizado_em?Number(v.atualizado_em):undefined}));
  const remotoIds=new Set(remotos.map(v=>v.id));
  const faltantes=locais.filter(v=>!remotoIds.has(String(v.id)));
  if(faltantes.length)await api('POST',{visitas:faltantes});
  const r2=await api('GET');
  registros=(r2.visitas||[]).map(v=>({id:String(v.id),nome:String(v.nome),data:String(v.data),criadoEm:Number(v.criado_em||Date.now()),atualizadoEm:v.atualizado_em?Number(v.atualizado_em):undefined}));
  localSet(registros);
  render();status('Dados protegidos no banco do Polo.');
 }catch(e){
  servidorDisponivel=false;registros=locais;render();status('Modo local: o banco do Polo ainda precisa ser conectado no Cloudflare.');
 }
}
function status(msg){const el=document.getElementById('registroStatus');if(el)el.textContent=msg}
function mount(){
 if(document.getElementById('registroVisitasSection'))return true;
 const contato=document.querySelector('#contato'),main=document.querySelector('main');if(!main)return false;
 const sec=document.createElement('section');sec.id='registroVisitasSection';sec.className='registroVisitasSection';
 sec.innerHTML=`<div class="registroWrap">
  <div class="registroHead"><div><span class="registroKicker">CONTROLE DO POLO</span><h2>Registro de visitas</h2><p>Registre quem veio ao Polo e mantenha um histórico organizado de atendimentos e visitas.</p><div id="registroStatus" class="registroStatus">Carregando proteção dos registros...</div></div><div class="registroCount"><b id="registroTotal">0</b><span>registros</span></div></div>
  <div class="registroGrid">
   <form id="registroForm" class="registroForm"><input type="hidden" id="registroId"><label>Nome da pessoa<input id="registroNome" type="text" maxlength="120" required placeholder="Digite o nome completo"></label><label>Dia da visita<input id="registroData" type="date" required></label><div class="registroActions"><button class="registroSave" type="submit" id="registroSalvar">Salvar registro</button><button class="registroCancel" type="button" id="registroCancelar" hidden>Cancelar edição</button></div><small>Os registros são mantidos no banco do Polo quando o armazenamento do Cloudflare está conectado. A exclusão só acontece quando você confirma a exclusão.</small></form>
   <div class="registroHistory"><div class="registroHistoryTop"><h3>Histórico de visitas</h3><input id="registroFiltro" type="search" placeholder="Pesquisar nome..."><button type="button" id="registroLimparFiltro">×</button></div><div id="registroLista"></div><div class="registroTools"><button type="button" id="registroExportar">Exportar histórico</button><button type="button" id="registroApagarTudo">Apagar todos</button></div></div>
  </div>
 </div>`;
 if(contato)contato.parentNode.insertBefore(sec,contato);else main.appendChild(sec);
 document.getElementById('registroData').value=hoje();bind();registros=localGet();render();return true;
}
function bind(){
 const form=document.getElementById('registroForm');
 form.addEventListener('submit',async e=>{e.preventDefault();const nome=document.getElementById('registroNome').value.trim(),data=document.getElementById('registroData').value;if(!nome||!data)return;const rid=document.getElementById('registroId').value;
  if(rid){const i=registros.findIndex(x=>x.id===rid);if(i<0)return;const antigo=registros[i];registros[i]={...antigo,nome,data,atualizadoEm:Date.now()};localSet(registros);render();try{if(servidorDisponivel)await api('PUT',{id:rid,nome,data});toast('Alteração salva.')}catch{servidorDisponivel=false;toast('Alteração salva localmente; banco indisponível.')}}
  else{const novo={id:id(),nome,data,criadoEm:Date.now()};registros.push(novo);localSet(registros);render();try{if(servidorDisponivel)await api('POST',novo);toast(servidorDisponivel?'Registro salvo no banco do Polo.':'Registro salvo localmente.')}catch{servidorDisponivel=false;toast('Registro salvo localmente; banco indisponível.')}}
  resetForm();if(!servidorDisponivel)sincronizar();
 });
 document.getElementById('registroCancelar').addEventListener('click',resetForm);
 document.getElementById('registroFiltro').addEventListener('input',render);
 document.getElementById('registroLimparFiltro').addEventListener('click',()=>{document.getElementById('registroFiltro').value='';render()});
 document.getElementById('registroApagarTudo').addEventListener('click',async()=>{if(!registros.length)return;if(!confirm('Deseja apagar TODOS os registros de visitas? Esta ação não pode ser desfeita.'))return;if(!servidorDisponivel){toast('O banco do Polo não está conectado. Nada foi apagado.');return}try{await api('DELETE',{all:true});registros=[];localSet([]);resetForm();render();toast('Histórico apagado.')}catch{toast('Não foi possível apagar do banco. Nada foi apagado.');sincronizar()}});
 document.getElementById('registroExportar').addEventListener('click',exportar);
}
function resetForm(){document.getElementById('registroId').value='';document.getElementById('registroNome').value='';document.getElementById('registroData').value=hoje();document.getElementById('registroSalvar').textContent='Salvar registro';document.getElementById('registroCancelar').hidden=true}
function render(){const box=document.getElementById('registroLista');if(!box)return;const q=norm(document.getElementById('registroFiltro').value);const arr=ordenados(registros).filter(x=>!q||norm(x.nome).includes(q));document.getElementById('registroTotal').textContent=registros.length;box.innerHTML=arr.length?arr.map(x=>`<div class="registroItem"><div class="registroPerson"><b>${esc(x.nome)}</b><span>📅 ${brDate(x.data)}</span></div><div class="registroItemActions"><button type="button" data-edit="${esc(x.id)}">Editar</button><button type="button" data-del="${esc(x.id)}">Excluir</button></div></div>`).join(''):`<div class="registroEmpty">Nenhuma visita registrada ainda.</div>`;box.querySelectorAll('[data-edit]').forEach(b=>b.addEventListener('click',()=>editar(b.dataset.edit)));box.querySelectorAll('[data-del]').forEach(b=>b.addEventListener('click',()=>excluir(b.dataset.del)))}
function editar(rid){const x=registros.find(v=>v.id===rid);if(!x)return;document.getElementById('registroId').value=x.id;document.getElementById('registroNome').value=x.nome;document.getElementById('registroData').value=x.data;document.getElementById('registroSalvar').textContent='Salvar alterações';document.getElementById('registroCancelar').hidden=false;document.getElementById('registroNome').focus()}
async function excluir(rid){const x=registros.find(v=>v.id===rid);if(!x||!confirm(`Excluir o registro de ${x.nome}?`))return;try{if(servidorDisponivel)await api('DELETE',{id:rid});else throw new Error('offline');registros=registros.filter(v=>v.id!==rid);localSet(registros);render();toast('Registro excluído.')}catch{toast('Não foi possível excluir do banco. Nada foi apagado.');sincronizar()}}
function exportar(){const arr=ordenados(registros);if(!arr.length){toast('Não há registros para exportar.');return}const csv='Nome;Data da visita\n'+arr.map(x=>`"${String(x.nome).replace(/"/g,'""')}";${brDate(x.data)}`).join('\n');const blob=new Blob(['\ufeff'+csv],{type:'text/csv;charset=utf-8'}),a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='historico-visitas-polo-unifil.csv';a.click();setTimeout(()=>URL.revokeObjectURL(a.href),1000)}
function toast(msg){let t=document.getElementById('registroToast');if(!t){t=document.createElement('div');t.id='registroToast';t.className='registroToast';document.body.appendChild(t)}t.textContent=msg;t.classList.add('show');clearTimeout(t._tm);t._tm=setTimeout(()=>t.classList.remove('show'),2600)}
function css(){if(document.getElementById('registroVisitasCSS'))return;const s=document.createElement('style');s.id='registroVisitasCSS';s.textContent=`.registroVisitasSection{padding:72px 0;background:#f7f5f9;border-top:1px solid #e7dfeb}.registroWrap{width:min(1180px,calc(100% - 32px));margin:auto}.registroHead{display:flex;justify-content:space-between;gap:20px;align-items:center;margin-bottom:26px}.registroKicker{color:#ff7000;font-size:9px;font-weight:1000;letter-spacing:1.6px}.registroHead h2{color:#250632;font-size:clamp(30px,4vw,45px);margin:8px 0}.registroHead p{color:#716576;font-size:13px;margin:0;max-width:720px}.registroStatus{display:inline-flex;margin-top:10px;padding:6px 9px;border-radius:999px;background:#eee7f2;color:#5b1685;font-size:9px;font-weight:800}.registroCount{min-width:105px;padding:15px;border-radius:17px;background:#250632;color:#fff;text-align:center}.registroCount b{display:block;font-size:27px;color:#ff9b3f}.registroCount span{font-size:9px}.registroGrid{display:grid;grid-template-columns:.8fr 1.2fr;gap:16px}.registroForm,.registroHistory{background:#fff;border:1px solid #e7dfeb;border-radius:20px;padding:22px;box-shadow:0 12px 30px rgba(37,6,50,.06)}.registroForm label{display:block;color:#250632;font-size:11px;font-weight:900;margin-bottom:14px}.registroForm input,.registroHistoryTop input{width:100%;height:48px;margin-top:6px;border:1px solid #ded4e3;border-radius:12px;background:#faf8fc;padding:0 13px;color:#211827;outline:0}.registroForm input:focus,.registroHistoryTop input:focus{border-color:#ff7000;box-shadow:0 0 0 3px rgba(255,112,0,.12)}.registroActions{display:flex;gap:8px}.registroSave,.registroCancel,.registroTools button,.registroItemActions button{border:0;border-radius:11px;padding:12px 14px;font-weight:900;cursor:pointer}.registroSave{background:#ff7000;color:#fff;flex:1}.registroCancel{background:#f0eaf3;color:#250632}.registroForm small{display:block;margin-top:12px;color:#8a7e90;font-size:9px;line-height:1.5}.registroHistoryTop{display:grid;grid-template-columns:1fr 34px;gap:7px;align-items:end;margin-bottom:12px}.registroHistoryTop h3{grid-column:1/-1;color:#250632;margin:0;font-size:18px}.registroHistoryTop input{margin:0}.registroHistoryTop button{height:48px;border:0;border-radius:11px;background:#f0eaf3;color:#250632;font-size:22px;cursor:pointer}.registroItem{display:flex;justify-content:space-between;gap:10px;align-items:center;padding:13px 0;border-bottom:1px solid #eee7f1}.registroPerson{display:flex;flex-direction:column;gap:3px}.registroPerson b{color:#2d2032;font-size:12px}.registroPerson span{color:#8a7e90;font-size:10px}.registroItemActions{display:flex;gap:5px}.registroItemActions button{padding:8px 10px;background:#f3edf7;color:#250632;font-size:9px}.registroItemActions button:last-child{color:#9c321b}.registroEmpty{text-align:center;padding:32px 10px;color:#8a7e90;font-size:11px}.registroTools{display:flex;justify-content:flex-end;gap:7px;margin-top:14px}.registroTools button{background:#250632;color:#fff;font-size:9px}.registroTools button:last-child{background:#f3edf7;color:#8a321d}.registroNav{background:#250632!important;color:#fff!important}.registroToast{position:fixed;right:20px;bottom:20px;z-index:9999;background:#250632;color:#fff;padding:13px 17px;border-radius:12px;box-shadow:0 12px 30px rgba(0,0,0,.18);font-size:11px;font-weight:800;transform:translateY(20px);opacity:0;pointer-events:none;transition:.2s}.registroToast.show{transform:none;opacity:1}@media(max-width:800px){.registroHead{display:block}.registroCount{margin-top:15px;width:100%}.registroGrid{grid-template-columns:1fr}.registroWrap{width:calc(100% - 24px)}.registroActions{display:grid;grid-template-columns:1fr}.registroItem{align-items:flex-start}.registroItemActions{flex-direction:column}}`;document.head.appendChild(s)}
function boot(){css();if(mount())sincronizar()}if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});else boot();[1000,3000].forEach(ms=>setTimeout(()=>{if(document.getElementById('registroVisitasSection')&&!servidorDisponivel)sincronizar()},ms));
})();
