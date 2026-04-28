# Hirata Portfolio

[English](./README.md) | [Português](./README.pt-BR.md) | [Español](./README.es.md)

Portafolio personal construido con Vue 3, TypeScript, Vite y Tailwind CSS.

Este proyecto presenta el perfil profesional de Matheus Hirata mediante una landing page oscura, con lenguaje editorial y enfoque en ingeniería front-end, visión de producto, experiencia de usuario y estudios de caso seleccionados.

## Descripción General

El portafolio fue estructurado como una experiencia de una sola página con:

- Hero section y posicionamiento profesional
- Sección sobre mí y áreas de enfoque actuales
- Proyectos destacados y contexto técnico
- Tarjetas de stack y especialización
- Diferenciales, trayectoria y proceso de trabajo
- Sección sobre fotografía con drones
- Testimonio y bloque de contacto

## Stack Tecnológico

- Vue 3
- TypeScript
- Vite
- Tailwind CSS 4
- Arquitectura CSS modular personalizada

## Estructura del Proyecto

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

### Carpetas principales

- `src/data`: contenido centralizado del portafolio
- `src/types`: tipos TypeScript compartidos
- `src/composables`: comportamientos reutilizables de UI, como reveal al hacer scroll
- `src/utils`: helpers pequeños y reutilizables
- `src/styles`: archivos CSS separados por responsabilidad

## Scripts

```bash
npm run dev
npm run build
npm run preview
```

## Cómo ejecutar

1. Instala las dependencias:

```bash
npm install
```

2. Inicia el servidor de desarrollo:

```bash
npm run dev
```

3. Genera la build de producción:

```bash
npm run build
```

## Edición de contenido

La mayor parte del contenido del portafolio puede editarse en:

- `src/data/portfolio.ts`

Layout principal y lógica de renderizado:

- `src/App.vue`

Punto de entrada global de estilos:

- `src/styles.css`

## Notas de diseño

- Interfaz oscura con acentos verdes
- Transiciones de entrada al hacer scroll y hover con más énfasis
- Layout responsivo para desktop y mobile
- Tarjetas de contacto con enlaces externos y acción para copiar el correo

## Licencia

Este proyecto fue pensado para uso como portafolio personal.
