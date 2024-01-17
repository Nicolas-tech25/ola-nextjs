# Anotaçõesgerais sobre o Next.js

Next.js é um framework Fullstack que permite criar aplicações React modernas e otimizadas para mecanismos de busca.

Next.js faz a renderização do HTML no servidor, ou seja, é `SSR Server Side Rendering`.

Para criar e navegar por páginas na aplicação Next.js, basta criar components/páginas no diretório `Pages` que automaticamente estarão disponíveis para navegação através de rotas.

## Sobre o arquivo \_app.js

Arquivos de configuração global para personalizar o comportamento de aplicação Next.js.

### \_app.js

- Adicionar components globais ao app
- Pode ser usado para layouts e estilos globais
- Team a finalidade semelhante ao app.js ou index.js do React
- Renderizar no Client e no Server

### Document.js

- Personalizar o HTML de todas as páginas em relação ao <head>
- Pode ser usado para meta tags, scripts, estilos globais
- É carregado no servidor na renderização inicial
