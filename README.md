# Church History Studio

Aplicación web para crear y presentar líneas de tiempo sobre la historia de la iglesia con entornos gráficos dinámicos.

## Características

- Creación manual de eventos históricos.
- Línea de tiempo visual interactiva.
- Eliminación rápida de hitos.
- Entornos gráficos dinámicos para narrar diferentes periodos.
- Código en TypeScript estricto, ESLint con reglas para evitar `any` y `console.log`.

## Requisitos

- Node.js 20+
- npm 10+

## Inicio rápido

```bash
npm install
npm run dev
```

## Validación de calidad

```bash
npm run lint
npm run build
```

## Estructura

- `src/App.tsx`: composición principal de la app y manejo de estado.
- `src/components/EventForm.tsx`: formulario para crear eventos.
- `src/components/TimelineCanvas.tsx`: renderizado SVG de la línea de tiempo.
- `src/components/DynamicScene.tsx`: selector de entorno visual.
- `src/types.ts`: contratos de tipos fuertes.
