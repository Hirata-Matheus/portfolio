# Hirata Portfolio

[English](./README.md) | [Português](./README.pt-BR.md) | [Español](./README.es.md)

Portfólio pessoal construído com Vue 3, TypeScript, Vite e Tailwind CSS.

Este projeto apresenta o perfil profissional de Matheus Hirata por meio de uma landing page escura, com linguagem editorial e foco em engenharia front-end, visão de produto, experiência do usuário e estudos de caso selecionados.

## Perfil Profissional

Matheus Hirata atua atualmente como Analista de Desenvolvimento Web Pleno, com uma trajetória construída por evolução contínua dentro do mesmo ambiente corporativo:

- 10 meses como estagiário em desenvolvimento web
- 2 anos e 9 meses como Analista de Desenvolvimento Web Júnior
- Mais de 2 anos como Analista de Desenvolvimento Web Pleno

É formado em Análise e Desenvolvimento de Sistemas pela UniSalesiano Araçatuba, pós-graduado em Engenharia de Software pela UniToledo Wyden e concluiu o nível 6 do curso de inglês da Open English.

## Visão Geral

O portfólio foi estruturado como uma experiência de página única com:

- Hero section e posicionamento profissional
- Seção sobre e áreas de foco atuais
- Projetos em destaque e contexto técnico
- Cards de stack e especialização
- Diferenciais, trajetória e processo de trabalho
- Seção sobre fotografia com drones
- Depoimento e área de contato

## Stack

- Vue 3
- TypeScript
- Vite
- Tailwind CSS 4
- Arquitetura CSS modular customizada

### Base técnica ampliada

- HTML e CSS
- AngularJS
- Vue 2, Vue 3, Vuetify e Nuxt 4
- Tailwind CSS e Material Design
- JavaScript e TypeScript
- WebSocket
- Java, Kotlin, Go e Spring Boot
- Redis, Oracle e PostgreSQL

## Estrutura do Projeto

```text
src/
  composables/
  data/
  styles/
  types/
  utils/
  App.vue
  main.ts
```

### Pastas principais

- `src/data`: conteúdo centralizado do portfólio
- `src/types`: tipos TypeScript compartilhados
- `src/composables`: comportamentos reutilizáveis de UI, como reveal no scroll
- `src/utils`: helpers pequenos e reutilizáveis
- `src/styles`: arquivos CSS separados por responsabilidade

## Scripts

```bash
npm run dev
npm run build
npm run preview
```

## Como executar

1. Instale as dependências:

```bash
npm install
```

2. Inicie o servidor de desenvolvimento:

```bash
npm run dev
```

3. Gere a build de produção:

```bash
npm run build
```

## Edição de conteúdo

A maior parte do conteúdo do portfólio pode ser alterada em:

- `src/data/portfolio.ts`

Layout principal e lógica de renderização:

- `src/App.vue`

Entrypoint global de estilos:

- `src/styles.css`

## Notas de design

- Interface escura com destaques em verde
- Transições de entrada no scroll e hover com mais ênfase
- Layout responsivo para desktop e mobile
- Cards de contato com links externos e ação de copiar e-mail

## Licença

Este projeto foi pensado para uso como portfólio pessoal.
