---
"@valko-ui/eslint-config": minor
"@valko-ui/components": minor
"@valko-ui/docs": minor
---

## Valko-UI Components

### Breaking Changes
- Dropped Nuxt 3 support. The library now requires Nuxt 4 (`^4.0.0`).

### Dependencies
- Updated all dependencies to their latest versions.
- Added `@vue/language-core` as dev dependency, required by `unplugin-dts` (used via `vite-plugin-dts`).

### Type Fixes
- Fixed Vue template callback parameters with implicit `any` types in `DataTable`, `Datepicker`, `Menu`, `Range`, `Select`, and `Table`.
- Adjusted callback parameter typings to satisfy stricter checks introduced by the TypeScript/tooling upgrade.

### Tests
- Fixed `useDebounce` test not clearing callback mock between test cases.
- Fixed `useDarkMode` test using non-constructable `MutationObserver` mock, replaced `vi.spyOn` with `vi.stubGlobal`.
- Fixed `useDarkMode` test not restoring global stubs after the suite.

---

## Valko-UI Docs

### Dependencies
- Updated all dependencies to their latest versions.
- Removed `vue-router` explicit dependency, relying on Nuxt's transitive dependency instead.
- Added `vite.optimizeDeps.include` to `nuxt.config.ts` to pre-bundle CJS and transitive dependencies, preventing page reloads during development.

### Pages
- Updated the Get Started guide to reflect Nuxt 4 as the only supported version, removing all Nuxt 3 references.

---

## Valko-UI ESLint Config

### Dependencies
- Updated all dependencies to their latest versions.

---

## CI/CD
- Updated GitHub Actions workflows (`pr-check.yml`, `release.yml`) to use Node.js 22, required by newer `eslint-flat-config-utils`.
- Updated `actions/checkout` and `actions/setup-node` from v2 to v4.
- Enabled npm caching in CI for faster dependency installation.
