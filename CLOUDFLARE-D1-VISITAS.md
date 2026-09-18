# Salvamento permanente — Registro de Visitas

O site já possui a API `/api/visitas` e o schema D1 em `migrations/0001_visitas.sql`.

## O que precisa existir no Cloudflare

Crie um banco D1 para o projeto do site e faça o binding com o nome EXATO:

`VISITAS_DB`

O nome precisa ser exatamente `VISITAS_DB` porque a Function usa:

`context.env.VISITAS_DB`

## No Cloudflare Pages

1. Abra o projeto que publica o site **Polo-UniFIL**.
2. Entre em **Settings**.
3. Procure **Functions** / **Bindings**.
4. Adicione um binding do tipo **D1 database**.
5. Em **Variable name**, coloque:
   `VISITAS_DB`
6. Em **D1 database**, selecione o banco criado para o Polo.
7. Salve.
8. Faça um novo deploy do projeto.

## Importante

Antes do binding, o navegador pode guardar uma cópia local, mas essa cópia pertence somente àquele navegador/computador.

Depois do binding, o registro passa a ser salvo no D1 do Cloudflare e pode ser consultado por qualquer computador, celular ou navegador que abra o mesmo site.

Os registros que ainda estiverem somente no navegador antigo são enviados para o D1 assim que esse navegador abrir o site depois que o banco estiver conectado.

## Regra de segurança

A exclusão continua sendo uma ação explícita pelo botão **Excluir** ou **Apagar todos**. O carregamento de outro computador não apaga os registros do banco.

## Teste definitivo

Depois do deploy:

1. No computador A, cadastre uma visita.
2. Atualize a página.
3. No computador B, abra o mesmo endereço.
4. A visita deverá aparecer no histórico.
5. Cadastre outra visita no computador B.
6. Volte ao computador A e atualize.
7. As duas visitas deverão aparecer.

Se isso acontecer, o armazenamento deixou de depender do navegador.
