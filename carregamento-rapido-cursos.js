/* UniFil Polo Iguaraçu — carregamento rápido dos módulos de cursos */
(function(){
  'use strict';
  const modulos = [
    ['logisticaLoader','logistica.js'],
    ['matematicaLoader','matematica.js'],
    ['marketingLoader','marketing.js'],
    ['midiasSociaisLoader','midias-sociais-digitais.js'],
    ['ministerioPastoralLoader','ministerio-pastoral.js'],
    ['pedagogiaLoader','pedagogia.js'],
    ['processosGerenciaisLoader','processos-gerenciais.js'],
    ['relacoesInternacionaisLoader','relacoes-internacionais.js'],
    ['segurancaCiberneticaLoader','seguranca-cibernetica.js'],
    ['sociologiaLoader','sociologia.js'],
    ['jogosDigitaisLoader','jogos-digitais.js'],
    ['teologiaLoader','teologia.js?v=2'],
    ['historiaLoader','historia.js'],
    ['inteligenciaArtificialLoader','inteligencia-artificial.js'],
    ['internetCoisasLoader','internet-das-coisas.js'],
    ['administracaoLoader','administracao.js'],
    ['engenhariaSoftwareLoader','engenharia-de-software.js'],
    ['estudosPsicanaliticosLoader','estudos-teoricos-psicanaliticos-e-sociais.js'],
    ['educacaoEspecialLoader','educacao-especial.js'],
    ['comercioExteriorLoader','comercio-exterior.js'],
    ['publicidadePropagandaLoader','publicidade-propaganda.js'],
    ['startupsLoader','desenvolvimento-gestao-startups.js'],
    ['gestaoEsporteLoader','gestao-esporte-alto-rendimento.js'],
    ['letrasPortuguesInglesLoader','letras-portugues-ingles.js'],
    ['cienciasEconomicasLoader','ciencias-economicas.js'],
    ['logoFixLoader','logo-fix-v3.js?v=6'],
    ['interfaceReferenciaLoader','interface-referencia.js?v=2']
  ];

  function carregar(id, src){
    if(document.getElementById(id)) return;
    const existente=[...document.scripts].find(s=>s.src && s.src.split('/').pop().split('?')[0]===src.split('?')[0]);
    if(existente) return;
    const s=document.createElement('script');
    s.id=id;
    s.src=src;
    s.async=false;
    document.body.appendChild(s);
  }

  function iniciar(){
    if(!document.body) return;
    modulos.forEach(([id,src])=>carregar(id,src));
  }

  if(document.readyState==='loading') document.addEventListener('DOMContentLoaded',iniciar,{once:true});
  else iniciar();
})();