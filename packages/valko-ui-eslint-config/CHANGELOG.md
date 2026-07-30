# @valko-ui/eslint-config

## 0.3.0

### Minor Changes

- 6f57de5: ## Valko-UI Components

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

  ***

  ## Valko-UI Docs

  ### Dependencies

  - Updated all dependencies to their latest versions.
  - Removed `vue-router` explicit dependency, relying on Nuxt's transitive dependency instead.
  - Added `vite.optimizeDeps.include` to `nuxt.config.ts` to pre-bundle CJS and transitive dependencies, preventing page reloads during development.

  ### Pages

  - Updated the Get Started guide to reflect Nuxt 4 as the only supported version, removing all Nuxt 3 references.

  ***

  ## Valko-UI ESLint Config

  ### Dependencies

  - Updated all dependencies to their latest versions.

  ***

  ## CI/CD

  - Updated GitHub Actions workflows (`pr-check.yml`, `release.yml`) to use Node.js 22, required by newer `eslint-flat-config-utils`.
  - Updated `actions/checkout` and `actions/setup-node` from v2 to v4.
  - Enabled npm caching in CI for faster dependency installation.

### Patch Changes

- e046952: - Update development dependencies across the components library, documentation site, and ESLint configuration.

## 0.2.0

### Minor Changes

- 63b16b9: Update version of all packages

## 0.1.1

### Minor Changes

- c737a29: We are deploying a big set of components for our first alpha release:

  - Alert
  - Avatar
  - Badge
  - Breadcrumbs
  - Button
  - Calendar
  - Card
  - CardBody
  - CardFooter
  - CardHeader
  - CardImage
  - Checkbox
  - Collapse
  - CollapseItem
  - DataTable
  - Datepicker
  - Divider
  - Drawer
  - Dropdown
  - Icon
  - Input
  - Menu
  - Modal
  - Navbar
  - Pagination
  - Popover
  - Progressbar
  - Radio
  - Range
  - Select
  - Spinner
  - Switch
  - Table
  - Tabs
  - Tag
  - Textarea
  - Tooltip

  The documentation page is still in a very raw state, with minimal docs for components but missing install instructions and other things, but has a very descriptive page for each component.

  The ESLint Config package contains a set of rules we like to use while creating the library
