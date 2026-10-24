# Changes

- Added `artifacts/api-server/src/bot/brand.ts` and `welcome-message.ts`; wired brand settings into start, version, statistics, catalog, alerts, and backup/storage filenames.
- Updated `render.yaml`, `.replit`, `replit.md`, `.gitignore`, the bot's database/channel defaults, and API-server TypeScript settings for a clean xFilms deployment.
- Updated Express to 5.3.0 so the dependency install uses the allowed newer `proxy-addr` release.
- Updated parser/search/catalog fixtures and added brand, database-path, and legacy-brand regression tests.
- Excluded the source repository's agent memory, preconfigured admin identity, and private-channel references; no secrets or database files are included.

Changed code and tests:

- Source: `artifacts/api-server/src/bot/{admin-tools,alerts,brand,catalog-content,config,database,post-parser,telegram-admin-commands,telegram-admin-ops,telegram-delivery,telegram-structure,telegram,version-info,welcome-message}.ts`; `artifacts/api-server/tsconfig.json`
- Dependencies: `artifacts/api-server/package.json`; `pnpm-lock.yaml`
- Tests: `artifacts/api-server/tests/{admin-tools,brand,broadcast,catalog-content,config,content-views,database-backup,database-path,discover,episode-title-edit,favorites-db,favorites,keyboards,movie-poster,no-legacy-brand,post-parser,search-store,series-card,series-notify,series-poster-progress,series-subscriptions,smart-search,version-info}.test.ts`
