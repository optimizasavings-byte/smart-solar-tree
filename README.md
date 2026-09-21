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

Abra `http://localhost:8080`. Não há instalação ou compilação. O código não salva dados em localStorage, cookies ou banco local.

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
