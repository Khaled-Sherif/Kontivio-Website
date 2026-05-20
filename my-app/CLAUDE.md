# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # start Vite dev server
npm run build        # type-check then Vite production build (tsc -b && vite build)
npm run lint         # ESLint
npm run test         # run all tests once (Vitest)
npm run test:watch   # run tests in watch mode
npm run test:ui      # open Vitest browser UI
```

Run a single test file:
```bash
npx vitest run src/components/Hero.test.tsx
```

## Architecture

**React 19 + TypeScript + Vite SPA** — no router library. Navigation is entirely managed with a `useState<Page>` in `src/App.tsx`. Adding a new page requires:
1. Adding a string literal to the `Page` union type in `App.tsx`
2. Adding a `navigate*` function that calls `setCurrentPage()`
3. Adding a `case` to `renderPage()`
4. Passing the new navigate callback through `<Header>` props if it needs to be in the nav

**Internationalisation** — `src/contexts/LanguageContext.tsx` provides EN / DE / NL translations via a `t(key)` hook (`useLanguage()`). All user-visible strings must be keyed in the `translations` record there. The `LanguageProvider` wraps the whole app in `App.tsx`.

**Component layout**
- `src/components/` — one file per page or section; each has a co-located `.test.tsx`
- `src/components/ui/` — low-level primitives (shadcn/ui style: `button`, `card`, `badge`, `input`, `label`, `textarea`, `navigation-menu`, `dropdown-menu`)
- `src/lib/utils.ts` — exports `cn()` (clsx + tailwind-merge) used everywhere for conditional class names
- `src/components/common/` — shared helpers (e.g. `ImageWithFallback`)

**Styling** — Tailwind CSS v4. Brand accent colour is `#3b9ac9`. Use the `cn()` utility for conditional/merged class names.

**Path alias** — `@/` resolves to `src/` (configured in both `tsconfig.json` and `vite.config.ts`).

**Testing** — Vitest with jsdom + `@testing-library/react`. Setup file is `vitest.setup.ts`. Static asset imports (images) are stubbed via `src/test/mocks/fileMock.ts`. Tests that render components needing `LanguageProvider` must wrap with it, or mock the context.
