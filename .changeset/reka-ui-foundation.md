---
'@valko-ui/components': minor
---

Add `reka-ui` as a dependency and register `VkConfigProvider` (Reka `ConfigProvider`) in `createValkoUI`, with `useDirection`, `useLocale`, and `useId` re-exported for primitive migrations. Conventions for the migration are documented in `packages/valko-ui-components/REKA_MIGRATION.md`, and `reka-ui` is added to the Nuxt module transpile list.
