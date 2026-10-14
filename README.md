# Smart Solar Tree

Landing page institucional, responsiva e mobile-first em português. HTML5, CSS3 e JavaScript puro, sem build ou frameworks. Inter e Space Grotesk são carregadas do Google Fonts, com fontes locais de fallback.

## Estrutura

```text
index.html                  Conteúdo, SEO, navegação e formulário
styles.css                  Identidade visual e responsividade
script.js                   Menu, animações e envio do formulário
.nojekyll                   Publicação estática direta
README.md                   Instruções de manutenção e publicação
assets/
  logo.png                  Logo original extraído do início do vídeo
  smart-solar-tree.mp4      Vídeo original, preparado com faststart
  images/
    logo-frame.png         Frame de origem para rastreabilidade do logo
    video-poster.jpg       Capa otimizada do player
```

O vídeo foi localizado em Downloads com o nome `Pitch Future Makers - Projeto Smart Solar Tree.mp4`. O logo foi extraído do frame de 1 segundo e recortado para remover margens e o título do pitch, preservando cores, desenho e proporções. Corresponde ao logo enviado na conversa. O vídeo não foi reeditado: apenas o contêiner MP4 foi preparado para iniciar o carregamento progressivamente.

## Testar localmente

Abra `index.html` diretamente no navegador. O conteúdo, a navegação, o logo e o vídeo funcionam sem servidor. Google Fonts e FormSubmit precisam de internet. O envio externo a partir de `file://` pode sofrer restrições de origem; valide o formulário por HTTP e na URL publicada.

Para servir localmente, execute na pasta do projeto:

```sh
python -m http.server 8080
```

Abra `http://localhost:8080`. Não há instalação ou compilação. O formulário não salva dados em localStorage ou banco local. A integração Google Analytics descrita abaixo pode usar cookies de medição.

## Substituir logo e vídeo

Substitua `assets/logo.png` pelo original, preservando sua proporção. Ajuste os atributos `width` e `height` no HTML se mudar a proporção. Não redesenhe a marca.

Se a única fonte for o vídeo, extraia um frame nítido do início e recorte apenas a região da marca. Exemplo (ajuste o instante conforme o vídeo):

```sh
ffmpeg -ss 00:00:01 -i assets/smart-solar-tree.mp4 -frames:v 1 assets/images/logo-frame.png
```

Substitua `assets/smart-solar-tree.mp4`. Prefira MP4 H.264/AAC com faststart e tamanho adequado para rede móvel. Atualize a capa em `assets/images/video-poster.jpg`. O player usa `controls`, `preload="metadata"` e `playsinline`, sem autoplay. Nenhuma imagem genérica de protótipo foi adicionada.

O texto apresenta apenas conceitos públicos. Antes de publicar, a equipe deve aprovar o conteúdo audiovisual original para apresentação pública, inclusive áudio, pois ele foi mantido integralmente. Não adicionar algoritmos, arquitetura interna, sensores específicos, parâmetros ou detalhes construtivos.

## Formulário: configuração e ativação manual

Destino: `optimizasavings@gmail.com`. O formulário usa POST com `action="https://formsubmit.co/optimizasavings@gmail.com"`. Com JavaScript, o endpoint AJAX apresenta o resultado na própria página. Sem JavaScript, o POST nativo leva à confirmação do serviço.

Campos hidden: `_subject = Novo contato - Smart Solar Tree`, `_template = table`, `_captcha = false`, além do honeypot `_honey`. Nome, organização, e-mail, interesse e consentimento são obrigatórios. Telefone e mensagem são opcionais. O botão fica desabilitado durante o envio; falhas preservam os campos e sucesso depende de resposta positiva do serviço.

1. Depois de publicar, envie um contato identificado como teste.
2. Abra a caixa de entrada de `optimizasavings@gmail.com` e confirme a ativação enviada pelo FormSubmit. Confira spam. Se o AJAX não disparar a ativação, desative temporariamente o JavaScript e faça o primeiro envio pelo POST nativo na URL publicada.
3. Reative JavaScript, envie um novo teste e confirme que o e-mail chegou com todos os campos. Uma resposta positiva do endpoint não substitui essa verificação de entrega.
4. A confirmação precisa ser feita por quem tem acesso à caixa postal. Nenhuma mensagem real foi enviada durante a implementação.

Não foram incluídos senhas, tokens ou credenciais de Gmail. O endereço destinatário é público. O FormSubmit processa os dados enviados. Para trocar o destino, altere o `action` em `index.html`, o endpoint e mensagens em `script.js`, e ative o novo endereço.

Referências: [FormSubmit](https://formsubmit.co/) e [documentação AJAX](https://formsubmit.co/ajax-documentation).

## Publicar gratuitamente no GitHub Pages

1. Crie um repositório **público** chamado `smart-solar-tree` no GitHub.
2. Envie os arquivos e `assets` para a raiz da branch **main**. `index.html` deve ficar diretamente na raiz, não dentro de uma pasta `Page`. Como o vídeo supera 25 MB, use Git/GitHub Desktop para enviar os arquivos, em vez do upload pelo navegador. Não use Git LFS para o vídeo no Pages.
3. Vá a **Settings → Pages**.
4. Em **Build and deployment → Source**, escolha **Deploy from a branch**.
5. Selecione **main** e **/(root)**; clique em **Save**.
6. Aguarde o deploy em **Actions**. Retorne a **Settings → Pages** para encontrar a URL e o botão **Visit site**.
7. Abra `https://USUARIO.github.io/smart-solar-tree/`, trocando `USUARIO` pelo nome real do usuário ou organização. Ative **Enforce HTTPS** quando disponível.

Os caminhos dos assets são relativos e funcionam no subdiretório do repositório. Não precisa de servidor ou workflow próprio. Consulte a [documentação oficial do GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site).

## SEO e QR Code

A página inclui `<meta name="robots" content="noindex">` para solicitar que buscadores compatíveis não a exibam nos resultados nesta fase. Isso não restringe o acesso por link nem torna o site ou repositório privados. Para permitir a indexação no futuro, remova essa tag de `index.html` e publique a atualização. Não bloqueie o rastreamento por `robots.txt`: os buscadores precisam acessar a página para ler a instrução.

Título, descrição, idioma, theme-color e Open Graph básico estão configurados. Após a publicação, acrescente `og:url` e canonical com a URL real. Opcionalmente adicione `og:image` com URL absoluta de uma imagem PNG/JPEG aprovada. Não há URLs fictícias nos metadados.

Depois de verificar o site publicado, gere um QR Code para **https://USUARIO.github.io/smart-solar-tree/** com o nome real. Teste o código impresso em celulares e rede móvel antes da feira. Não foi gerado QR Code porque a URL final ainda não existe.

## Verificações finais

Validar em 360, 390, 430, 768, 1366 e 1920 px; menu mobile, Escape, navegação por teclado, links internos e preferência por movimento reduzido. Confirmar reprodução do vídeo e consentimento obrigatório. Testes simulados do formulário não comprovam entrega real: a ativação e o recebimento na caixa postal continuam sendo etapas manuais.

A publicação no GitHub e a ativação do e-mail não foram executadas automaticamente.

### Resultado da validação nesta entrega

- Chrome: capturas e verificação de largura em 360, 390, 430, 768, 1366 e 1920 px, sem rolagem horizontal.
- Links internos válidos; menu mobile abre, fecha ao navegar e fecha com Escape, devolvendo foco ao botão.
- Logo carregado; vídeo H.264/AAC de aproximadamente 2min42s carregou metadados e reproduziu no navegador.
- Formulário: obrigatoriedade, consentimento, honeypot, sucesso, resposta negativa do serviço e falha de rede verificados com interceptação local. Nenhum e-mail foi enviado.
- Abertura direta por file:// e navegação sem JavaScript verificadas; nenhum erro de execução JavaScript nos testes.
- Capturas revisadas com movimento reduzido. O vídeo original foi preservado; a revisão visual por amostragem não substitui a aprovação integral do audiovisual pela equipe.

Os testes de navegador usaram ferramentas em pasta temporária, sem adicionar dependências ao site. A entrega não contém segredos, senhas ou tokens.

## Histórico de cores

A paleta Verde Solar foi aplicada em 25/09/2026, com verde-esmeralda, lima, menta e amarelo solar. As variáveis principais ficam no início de `styles.css`.

A paleta anterior está preservada com CSS completo, inventário de cores e [instruções de restauração](historico/2026-09-25-paleta-original/README.md).

### Versao anterior: Azul Hermes

Aplicada em 25/09/2026: azul intenso `#0000f2`, superfícies em azul profundo, texto e botões claros, amarelo solar e detalhes em menta, inspirados no [Hermes Agent](https://hermes-agent.nousresearch.com/). Os tokens de destaque agora se chamam `--accent` e `--accent-hover`.

A versão Verde Solar também foi preservada: [restaurar o verde](historico/2026-09-25-paleta-verde/README.md). Os PDFs verde e azul ficam na pasta `divulgacao` para comparação.

### Paleta atual: Bio-Tech Solar

A identidade atual usa os tokens solicitados: fundos Deep Bio (`--bg-main`, `--bg-surface`, `--bg-surface-elevated`), amarelo solar para ações e verde neon para tecnologia. As cores estão centralizadas no `:root` de `styles.css`.

- `.button--solar`: ações principais, texto escuro e hover amarelo luminoso.
- `.button--outline`: ação secundária com contorno neon.
- `.card[data-tone="tech"]` / `.card[data-tone="solar"]`: ícones, linha superior e estados de hover por função.
- Hero com halos de luz, grade e órbitas; etapa de decisão e próximo marco destacados em amarelo.
- Campos com foco neon, contraste de bordas reforçado e preferência por movimento reduzido respeitada.
- HTML com `data-theme="bio-tech-solar"` e comentários identificando as melhorias; logo e vídeo originais preservados.

[Restaurar a versão azul](historico/2026-09-25-paleta-azul/README.md). As versões verde e original também continuam no histórico.

Componentes refinados: CTAs com peso 600 e glow solar, bot?es secund?rios claros, gradiente radial solar no hero, badges neon, cards nas etapas e na equipe, ?cones de energia amarelos. Hover e foco respeitam movimento reduzido.

## Atualização para publicação — 27/09/2026

- Repositório: https://github.com/optimizasavings-byte/smart-solar-tree
- Site: https://optimizasavings-byte.github.io/smart-solar-tree/
- O site usa `assets/logo-transparente.png`, com canal alpha. O logo original permanece em `assets/logo.png`. A edição por imagegen também intensificou cores e contornos.
- Para trocar o logo atual, atualize `assets/logo-transparente.png` e as dimensões da imagem em `index.html`.
- O player usa `assets/smart-solar-tree-web.mp4`: cópia em 720p, H.264/AAC e faststart, otimizada a partir do vídeo local. O arquivo local de origem `assets/smart-solar-tree.mp4` foi preservado e sua alteração de 392 MB não faz parte deste envio.
- `historico/` preserva as paletas anteriores; `divulgacao/` contém os PDFs e o QR Code com a URL do site.

## Quem Somos — 13/10/2026

A seção `#equipe` foi aprimorada no mesmo ponto da página: depois da visão do projeto e antes do convite para parcerias e contato. Isso mantém a jornada da proposta tecnológica para as pessoas responsáveis e, em seguida, para a conversa com o visitante. Menu, âncoras, cabeçalho, rodapé, metadados, formulário e `script.js` foram preservados.

### Conteúdo e manutenção

- `index.html`: apresentação institucional, cinco artigos com nome, competência, biografia integral e LinkedIn, além do bloco separado de orientação acadêmica do Professor Paulo Sergio Silva Rodrigues. Os textos estão agrupados por integrante dentro de `#equipe`, inclusive sem JavaScript.
- `styles.css`: estilos `team-*`, usando os tokens Bio-Tech Solar e as fontes existentes. Heitor aparece primeiro, com selo e borda verde discreta; os outros quatro cartões formam duas colunas a partir de 700 px e uma abaixo disso. As biografias ficam sempre abertas. Animações de entrada reutilizam `data-reveal`; a preferência por movimento reduzido é respeitada.
- `README.md`: registro da implementação, testes e publicação.
- As cinco fotografias fornecidas, em `assets/images/`, são usadas sem modificar os arquivos: `Heitor.jfif`, `Rafael.jfif`, `Nádia Vieira.jfif`, `Vinicius.jfif` e `Giovanna.jfif`. Já possuem 400 × 400 px e somam aproximadamente 149 KiB; a conversão não foi necessária. Exibição quadrada, sem ampliação ou recorte adicional, com `object-fit: cover`, texto alternativo, dimensões explícitas e carregamento preguiçoso. O caminho de Nádia usa codificação de URL para o acento e o espaço.

Para atualizar um integrante, edite seu `article.team-card` no HTML. Mantenha o nome acessível do link, `target="_blank"`, `rel="noopener noreferrer"`, os atributos da imagem e a correspondência entre `aria-labelledby` e o ID do título.

### Validação desta alteração

Chrome headless local, com Playwright já disponível no ambiente; nenhuma biblioteca foi adicionada ao projeto.

- 360, 768, 1024 e 1440 px: cinco fotos carregadas, proporção quadrada, colunas esperadas e ausência de rolagem horizontal.
- Biografias comparadas literalmente com a missão fornecida; cinco integrantes, ordem e selo de Heitor conferidos.
- Destinos dos cinco links comparados com a missão; abertura em nova aba exercitada com interceptação local. A disponibilidade dos perfis no LinkedIn não foi verificada externamente.
- Âncoras existentes válidas; menu mobile, fechamento ao navegar e Escape com retorno de foco testados.
- Foco de teclado visível e movimento reduzido verificados; conteúdo dos cartões também verificado com JavaScript desabilitado.
- Formulário: campos obrigatórios e respostas simuladas de sucesso, rejeição e falha de rede. Campos preservados nas falhas e limpos no sucesso. Nenhum e-mail real enviado; entrega na caixa postal não é comprovada por esses testes.
- Prefixo `/smart-solar-tree/` validado em navegador com reescrita local das requisições, preservando a resolução relativa de URLs: cinco fotos carregadas; nenhuma resposta HTTP de erro nessa verificação.
- Capturas nas quatro larguras revisadas visualmente; animações com movimento normal verificadas, com todos os cartões tornando-se visíveis.
- Comparação com a versão Git confirmou que o HTML fora de `#equipe` e o JavaScript estão intactos.
- `node --check script.js` executado. Não existe etapa de build, pacote de dependências ou suíte de testes no repositório: os arquivos estáticos são a versão de produção.
- Um aviso 404 de `/favicon.ico` já existente foi observado. Nenhum erro de execução JavaScript foi detectado; a falha de rede do formulário foi provocada pelo teste.

A referência publicada não pôde ser consultada pela ferramenta web; a implementação utilizou o código local como fonte principal. A alteração preexistente em `assets/smart-solar-tree.mp4` foi mantida e não integra esta entrega.

### Revisar localmente e publicar após aprovação

Execute `python -m http.server 8080` na raiz e abra `http://localhost:8080/#equipe`. Confira nomes, enquadramento das fotos e conteúdo antes de aprovar a publicação. O servidor de validação automatizada pode ser encerrado; esse comando inicia uma nova prévia.

Após aprovação, inclua **apenas** `index.html`, `styles.css`, `README.md` e as cinco fotografias fornecidas no commit destinado à branch já usada pelo GitHub Pages. As fotografias ainda não estavam versionadas no início desta tarefa. Não use `git add .`, pois há uma alteração independente no vídeo original. Faça push pela rotina existente e acompanhe o deploy no GitHub. Preserve `.nojekyll`, a configuração atual e a raiz do site; os caminhos relativos atendem ao prefixo `/smart-solar-tree/`. Confira depois a URL publicada com `#equipe` e o carregamento das cinco fotos.

Nenhum commit, push, merge ou deploy foi realizado nesta tarefa.


## Google Analytics 4 — 13/10/2026

A tag fornecida pelo responsável foi adicionada uma única vez ao `head` de `index.html`, com carregamento assíncrono e ID de medição `G-B57P1L99JD`. Não exige biblioteca, build, Google Tag Manager ou mudança na hospedagem GitHub Pages. A coleta começa após publicar esta versão; não recupera visitas anteriores.

Esta integração utiliza o código padrão fornecido pelo Google. Não adiciona eventos personalizados de envio do formulário, não envia seus campos explicitamente e não inclui um gerenciador de consentimento. Os eventos automáticos adicionais dependem das configurações de medição otimizada do fluxo no Google Analytics. Um evento automático de formulário não comprova entrega de e-mail.

Para trocar a propriedade, atualize o ID nos dois pontos do bloco: URL do script e chamada `gtag('config', ...)`. A tag também carrega ao abrir a página localmente com internet. Nos testes automatizados, as requisições do Google são interceptadas para não registrar visitas de teste na propriedade.

Após aprovação e publicação no GitHub Pages, abra o site e confira **Relatórios → Tempo real** na propriedade correspondente. A instalação local não comprova recebimento no Google: essa confirmação deve ocorrer após o deploy, com a tag acessível e sem bloqueadores de rastreamento. Nenhum commit, push ou deploy foi executado nesta alteração.


### Cache de estilos no GitHub Pages

O link do CSS em `index.html` inclui `?v=` com os primeiros 12 caracteres do SHA-256 do conteúdo UTF-8 de `styles.css` (quebras de linha normalizadas para LF). Isso evita combinar o HTML novo com o CSS de uma publicação anterior armazenado no navegador. Ao alterar o CSS, atualize essa versão no HTML antes de publicar. O arquivo permanece `styles.css`, com caminho relativo compatível com abertura local e `/smart-solar-tree/`.
