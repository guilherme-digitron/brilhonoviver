# Brilho no Viver — protótipo

Protótipo novo e simples, feito para validar ideias antes da versão completa.

- **Astro 5 + TypeScript** (site estático)
- **CSS puro** em `src/styles/global.css`
- Publicação no **GitHub Pages** via GitHub Actions

## Rodar localmente

Requer Node 20+ (veja `.nvmrc`).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # checa tipos e gera dist/
```

## Estrutura

```
.github/workflows/deploy.yml   # deploy automático no GitHub Pages
public/                        # arquivos estáticos copiados como estão
src/
├── components/                # componentes reutilizáveis
├── layouts/BaseLayout.astro   # <html>, <head> e estrutura comum
├── lib/url.ts                 # helper de links com o base do GitHub Pages
├── pages/                     # cada arquivo vira uma rota
└── styles/global.css
```
