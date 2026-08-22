# Anotações DSM — FATEC Jaú

Site estático (Astro + Tailwind) que transforma os `.md` gerados pelo Coconote
em páginas de resumo bonitas, automaticamente — sem precisar criar rota manual
para cada aula.

## Como funciona

1. Cada matéria é uma **pasta** dentro de `src/content/notes/`.
2. Cada resumo é um **arquivo `.md`** dentro da pasta da matéria.
3. O Astro Content Collections lê essas pastas e o arquivo dinâmico
   `src/pages/materias/[materia]/[slug].astro` gera a página sozinho.
4. As matérias que aparecem na home vêm de `src/data/subjects.ts` — é aqui
   que você cadastra sigla / nome / professor.

Ou seja: **para adicionar uma aula nova, basta salvar o `.md` na pasta certa
e rodar `npm run build` de novo (ou `git push`, se estiver publicado no
Netlify).** Nenhum código precisa ser tocado.

### Frontmatter (opcional, mas recomendado)

O Coconote normalmente não gera frontmatter, então todos os campos abaixo
são opcionais — se faltar, o site usa um fallback (título = nome do arquivo,
sem data). Se quiser controlar título/data/tags manualmente, adicione isso
no topo do `.md`:

```md
---
title: "Aula 02 – Cardinalidade e Relacionamentos"
date: 2026-08-14
tags: ["modelagem", "cardinalidade"]
---
```

## Instalação local

Pré-requisitos: [Node.js](https://nodejs.org) 18+ instalado.

```bash
# 1. entrar na pasta do projeto
cd fatec-notes

# 2. instalar dependências
npm install

# 3. rodar em modo desenvolvimento
npm run dev
```

Acesse `http://localhost:4321` no navegador. Qualquer `.md` novo salvo em
`src/content/notes/<matéria>/` aparece automaticamente (com hot-reload).

## Adicionando uma nova matéria

1. Crie a pasta em `src/content/notes/SIGLA-nome-da-materia/`.
2. Adicione a matéria em `src/data/subjects.ts`:

```ts
{
  slug: 'sigla-nome-da-materia', // SEMPRE minúsculo — o Astro lowercasa o nome da pasta na rota
  sigla: 'SIGLA',
  nome: 'Nome completo da matéria',
  professor: 'Nome do professor',
  accent: 'from-indigo-500 to-indigo-700', // cor do card (opcional)
}
```

> ⚠️ **Atenção ao `slug`**: mesmo que a pasta se chame `IBD015-banco-de-dados`
> (com maiúsculas), o Astro gera a rota em minúsculas
> (`ibd015-banco-de-dados`). Por isso o `slug` em `subjects.ts` **precisa
> estar em minúsculo**, senão o site conta "0 resumos" mesmo com os
> arquivos lá.

Pronto — a home e a rota `/materias/SIGLA-nome-da-materia` já funcionam.

## Publicando no Netlify (via GitHub)

1. Crie um repositório no GitHub e suba o projeto:
   ```bash
   git init
   git add .
   git commit -m "primeira versão do site de anotações"
   git branch -M main
   git remote add origin https://github.com/SEU-USUARIO/fatec-notes.git
   git push -u origin main
   ```
2. Entre em [app.netlify.com](https://app.netlify.com) → **Add new site →
   Import an existing project** → escolha o repositório no GitHub.
3. O Netlify detecta o `netlify.toml` automaticamente:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Clique em **Deploy**. Pronto — toda vez que você der `git push`, o site
   é reconstruído sozinho.
5. (Opcional) Depois do primeiro deploy, troque `site:` em
   `astro.config.mjs` pela URL real que o Netlify te deu, e faça outro commit.

## Estrutura de pastas

```
fatec-notes/
├─ src/
│  ├─ content/
│  │  ├─ config.ts              ← schema das anotações
│  │  └─ notes/
│  │     ├─ IBD015-banco-de-dados/
│  │     │  └─ aula-02.md
│  │     ├─ IED005-estrutura-de-dados/
│  │     └─ ...
│  ├─ data/
│  │  └─ subjects.ts            ← sigla, nome, professor de cada matéria
│  ├─ lib/
│  │  └─ notes.ts               ← helpers (título/data fallback, ordenação)
│  ├─ components/                ← Header, cards, TOC, barra de progresso...
│  ├─ layouts/
│  │  ├─ BaseLayout.astro
│  │  └─ NoteLayout.astro       ← TOC lateral + progresso de leitura
│  └─ pages/
│     ├─ index.astro                        → "/"
│     └─ materias/
│        └─ [materia]/
│           ├─ index.astro                  → "/materias/IBD015-banco-de-dados"
│           └─ [slug].astro                 → "/materias/IBD015-banco-de-dados/aula-02"
├─ astro.config.mjs
├─ tailwind.config.mjs
└─ netlify.toml
```
