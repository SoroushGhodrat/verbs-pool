# Verbs Pool

A bilingual reference for English and Norwegian verb forms, aimed at language
learners. Browse verbs by letter, search across every form, and compare tenses
side by side in English, Norwegian and Farsi.

Live at [verbs-pool.vercel.app](https://verbs-pool.vercel.app).

## Features

- **Norwegian verbs** — infinitiv, presens, preteritum and presens perfektum
  for ~384 verbs, with English meanings
- **English verbs** — base, past, participle and continuous forms for ~988 verbs
- **English grammar** — eight tenses with formulas and worked examples in
  English, Norwegian and Farsi
- **Useful sentences** — common phrases paired across both languages
- Instant search across every verb form, and a UI available in English and
  Norwegian

## Tech stack

| Concern | Choice |
| --- | --- |
| Build | Vite 5 |
| UI | React 18 + TypeScript |
| Styling | Tailwind CSS v4 |
| Components | Headless UI |
| Routing | React Router 6 |
| i18n | i18next + react-i18next |
| Tests | Vitest + Testing Library |
| Hosting | Vercel |

## Getting started

Requires Node 20 or newer.

```bash
npm install
npm start          # dev server on http://localhost:3000
```

This project uses npm and is committed to `package-lock.json`. CI installs with
`npm ci`, so please avoid mixing in another package manager — resolving through
a different lockfile can give you versions CI never sees.

## Scripts

| Script | Purpose |
| --- | --- |
| `npm start` / `npm run dev` | Start the dev server |
| `npm run build` | Production build into `dist/` |
| `npm run preview` | Serve the production build locally |
| `npm test` | Run tests in watch mode |
| `npm run test:ci` | Run tests once |
| `npm run lint` | Lint with ESLint |
| `npm run typecheck` | Type-check without emitting |
| `npm run format` | Format with Prettier |

## Project layout

```
src/
  components/      Shared UI, including UI/ primitives and common/ layout
  pages/           One component per route
  data/            Verb lists (en.ts, no.ts) and grammar content
  context/         Language context
  util/            Small helpers
  __tests__/       Page smoke tests
public/locales/    Translation files, loaded over HTTP at runtime
```

Verb and grammar content lives in `src/data` as typed data rather than markup,
so adding entries needs no component changes.

## Contributing

Contributions are welcome. Before opening a pull request, please make sure the
same checks CI runs pass locally:

```bash
npm run format:check && npm run lint && npm run typecheck && npm run test:ci && npm run build
```

Verb data is the most useful place to help — corrections and additions to
`src/data/en.ts` and `src/data/no.ts` are very welcome.

## License

MIT — see [LICENSE](LICENSE).
