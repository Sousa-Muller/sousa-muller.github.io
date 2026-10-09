# Portfólio · Alex Müller

Site estático de portfólio profissional, voltado a empresas que contratam engenheiros de software (PJ ou CLT). HTML, CSS e JavaScript puro — sem build, sem backend. Pronto para o GitHub Pages.

Publicado em **https://sousa-muller.github.io/**. O conteúdo vem do currículo de Alex Müller e da análise dos projetos reais. Estilo do texto: tom de profissional buscando uma posição PJ ou CLT, sem travessão.

## Estrutura

```
index.html              Estrutura semântica, SEO e Open Graph
assets/css/styles.css   Tokens de design (cores, tipografia, espaços), layout e animações
assets/js/data.js       TODO o conteúdo do site (edite aqui)
assets/js/main.js       Renderização, navegação, modal de projetos, FAQ, formulário
assets/images/          favicon.svg, og-image.png e suas imagens
```

## Personalização

1. **Conteúdo** — edite apenas `assets/js/data.js`. Cada seção é um objeto (`profile`, `experience`, `projects`, `services` (áreas de atuação), `skills`, `about`, `testimonials`, `education`, `faq`, `contact`).
   - Adicione ou remova itens dos arrays livremente; o layout se adapta.
2. **Ocultar seções** — em `sections`, defina `false` (ex.: `education: false`). A navegação se ajusta sozinha. A ordem das seções na página é a ordem das `<section>` em `index.html`.
3. **Avisos de demonstração** — quando o conteúdo for real, defina `meta.showDemoNotices: false`.
4. **Foto** — salve em `assets/images/` (proporção 4:5) e informe em `profile.photo`, ex.: `"assets/images/retrato.jpg"`. A foto aparece no topo da página; sem foto, o espaço some.
5. **Capas dos projetos** — cada projeto tem uma ilustração gerada em HTML/CSS (`cover`: `flow`, `landing`, `agents`, `mcp`, `saas`, `fleet`, `dashboard`, `automation`) e uma cor (`hue`, 0–360). A capa `flow` lê os nós de `flow.left`, `flow.hub`, `flow.hubNote` e `flow.right`; a capa `agents` lê `agents.title` e `agents.rows` (`[nome, "ok"|"warn"|"", status]`). Para usar um print real, preencha `image` com o caminho do arquivo (16:10 recomendado).
6. **Links de projetos** — `links` é uma lista `[{ label, url }]`; lista vazia esconde os botões. `note` mostra um aviso abaixo (ex.: código privado). `confidential: true` exibe a etiqueta "Confidencial" no cartão. Campos vazios (`duration`, `process`, `learnings`) somem do estudo de caso.
7. **Contato** — `contact.email`, `contact.whatsapp.number` (formato internacional, só números; ex.: `5511987654321`) e `contact.socials`. Defina `whatsapp.isExample: false` ao usar seu número real.
8. **Visual** — cores, fontes e espaçamentos estão em variáveis CSS no topo de `styles.css` (`:root`). O tema é escuro; a cor de destaque é `--accent` e deve ser usada com moderação (links, foco e item ativo do menu).
9. **SEO** — atualize `<title>`, `meta description` e as tags `og:` em `index.html`. Troque `assets/images/og-image.png` (1200×630) e `favicon.svg`. Para o Open Graph funcionar em todas as redes, use a URL absoluta da imagem após publicar.

## Formulário de contato (limitação importante)

Não existe backend: **o site não envia mensagens**. Ao enviar o formulário, os campos são validados e o aplicativo de e-mail do visitante é aberto (`mailto:`) com assunto e corpo preenchidos. O envio só acontece quando o visitante confirma no próprio aplicativo. Se nenhum aplicativo de e-mail estiver configurado, o site oferece o botão "Copiar mensagem".

Para receber mensagens diretamente, você pode integrar futuramente um serviço de formulários estáticos (ex.: Formspree ou similar) alterando `bindForm()` em `main.js`.

## Rodar localmente

Abra `index.html` no navegador, ou sirva a pasta (recomendado):

```bash
python3 -m http.server 8000
# http://localhost:8000
```

## Publicar no GitHub Pages

1. Crie um repositório e envie todos os arquivos (com `index.html` na raiz).
2. Em **Settings → Pages**, selecione **Deploy from a branch**, branch `main`, pasta `/ (root)`.
3. Aguarde alguns minutos. O site ficará em `https://SEU-USUARIO.github.io/NOME-DO-REPO/`.

Todos os caminhos são relativos, então o site funciona tanto na raiz quanto em subdiretórios.

## Acessibilidade e desempenho

- HTML semântico, link "pular para o conteúdo", foco visível e navegação por teclado.
- FAQ com `aria-expanded`/`aria-controls`; modal com `<dialog>` nativo (Esc fecha, foco retorna).
- Animações respeitam `prefers-reduced-motion`; o conteúdo nunca fica invisível se o JavaScript ou as animações falharem.
- Sem bibliotecas externas além das fontes do Google Fonts (com fontes de sistema como alternativa).
