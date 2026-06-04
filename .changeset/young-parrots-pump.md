---
"@valko-ui/eslint-config": minor
"@valko-ui/components": minor
"@valko-ui/docs": minor
---

## Valko-UI Components

### Breaking Changes
- Dropped Nuxt 3 support. The library now requires Nuxt 4 (`^4.0.0`) or higher.

### Dependencies
- Updated all dependencies to their latest versions.
- Added `@vue/language-core` as explicit dev dependency to satisfy `unplugin-dts` peer requirement.
- Pinned `vue-tsc` to `^3.1.8` for compatibility with `unplugin-dts`.

### Tests
- Fixed `useDebounce` test not clearing callback mock between test cases.
- Fixed `useDarkMode` test using non-constructable `MutationObserver` mock, replaced `vi.spyOn` with `vi.stubGlobal`.
- Fixed `useDarkMode` test not restoring global stubs after the suite.

---

## Valko-UI Docs

### Dependencies
- Updated all dependencies to their latest versions.

### Configuration
- Added `vite.optimizeDeps.include` to `nuxt.config.ts` to pre-bundle CJS and transitive dependencies, preventing page reloads during development.

### Pages
- Updated the Get Started guide to reflect Nuxt 4 as the only supported version, removing all Nuxt 3 references.

---

## Valko-UI ESLint Config

### Dependencies
- Updated all dependencies to their latest versions.
