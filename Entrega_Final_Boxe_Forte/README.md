# Entrega Final — Boxe Forte

**Resumo**
Este repositório contém a entrega final do projeto *Boxe Forte*, preparada para upload direto ao GitHub (arrastar e soltar).
Inclui: controle de versão (exemplo), requisitos de acessibilidade (WCAG 2.1 AA), otimizações para produção e documentação.

## Estrutura do repositório
```
/ (raiz)
├─ index.html
├─ README.md
├─ LICENSE
├─ .gitignore
├─ /css
│  ├─ styles.css
│  └─ styles.min.css
├─ /js
│  ├─ main.js
│  └─ main.min.js
├─ /assets
│  └─ images (exemplo)
└─ /docs
   └─ release_notes.md
```

## Instruções rápidas
1. Baixe e extraia os arquivos.
2. Arraste a pasta **{repo_name}** para a interface do GitHub (nova repo) ou use `git init` localmente e faça push.
3. Para publicar no GitHub Pages: Settings → Pages → Branch `main` / `gh-pages`.

## Git / GitFlow (exemplo)
- Branch principal: `main`
- Desenvolvimento: `develop`
- Features: `feature/<nome>`
- Release: `release/vX.Y.Z`
- Hotfix: `hotfix/vX.Y.Z`

### Exemplo de mensagens de commit semântico
- `feat(auth): adicionar login com OAuth`
- `fix(nav): correção de foco no menu`
- `chore(deps): atualizar dependências`
- `docs(readme): atualizar instruções de deploy`

## Acessibilidade (implementações presentes)
- Navegação por teclado (tabindex, :focus visible).
- Landmark roles (header, nav, main, footer).
- ARIA labels onde pertinente.
- Contraste mínimo testado para textos principais (>= 4.5:1).
- Modo alto contraste e modo escuro via CSS custom properties.
- Suporte básico a leitores de tela com aria-live e labels.

## Otimização para produção
- Arquivos CSS/JS minificados inclusos (`styles.min.css`, `main.min.js`).
- Recomendações: executar pipeline (imagemmin, terser, cssnano) no CI antes do deploy.

## Deploy
- GitHub Pages (recomendado para entregas estáticas)
- Netlify / Vercel via drag-and-drop também suportam este pacote.

## Licença
MIT — ver arquivo LICENSE.

