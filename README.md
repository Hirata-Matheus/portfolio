# Hirata Portfolio

[English](./README.md) | [Português](./README.pt-BR.md) | [Español](./README.es.md)

Personal portfolio built with Vue 3, TypeScript, Vite, and Tailwind CSS.

This project presents Matheus Hirata's professional profile through a dark, editorial landing page focused on front-end engineering, product thinking, user experience, and selected case studies.

## Overview

The portfolio is structured as a single-page experience with:

- Hero section and professional positioning
- About section and current focus areas
- Highlighted projects and technical context
- Stack and specialization cards
- Differentiators, career timeline, and work process
- Drone photography section
- Testimonial and contact section

## Tech Stack

- Vue 3
- TypeScript
- Vite
- Tailwind CSS 4
- Custom modular CSS architecture

## Project Structure

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

### Main folders

- `src/data`: centralized portfolio content
- `src/types`: shared TypeScript types
- `src/composables`: reusable UI behavior such as scroll reveal
- `src/utils`: small reusable helpers
- `src/styles`: split CSS files by responsibility

## Scripts

```bash
npm run dev
npm run build
npm run preview
```

## Getting Started

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Build for production:

```bash
npm run build
```

## Content Editing

Most portfolio content can be updated from:

- `src/data/portfolio.ts`

Main layout and rendering logic:

- `src/App.vue`

Global style entrypoint:

- `src/styles.css`

## Design Notes

- Dark UI with accent green highlights
- Scroll reveal transitions and hover emphasis
- Responsive layout for desktop and mobile
- Contact cards with external links and copy-to-clipboard email action

## License

This project is intended for personal portfolio use.
