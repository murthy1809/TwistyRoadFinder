# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server with HMR at http://localhost:5173
npm run build      # Production build to dist/
npm run preview    # Preview production build
npm run lint       # Run ESLint
```

## Architecture

This is a minimal React 19 + Vite app scaffolded from the default Vite React template.

- `src/main.jsx` — entry point, mounts `<App />` into `#root`
- `src/App.jsx` — single root component, the starting point for all UI
- `src/App.css` / `src/index.css` — component and global styles
- `public/` — static assets served as-is (favicon, SVG icon sprites via `icons.svg`)
- `src/assets/` — assets imported directly by components (bundled by Vite)

SVG icons are sprite-based: `public/icons.svg` contains named symbols referenced via `<use href="/icons.svg#icon-name">`.

ESLint is configured with `eslint-plugin-react-hooks` and `eslint-plugin-react-refresh`. The `no-unused-vars` rule ignores variables matching `^[A-Z_]` (constants/components).

The React Compiler is intentionally not enabled (see README for how to add it).
