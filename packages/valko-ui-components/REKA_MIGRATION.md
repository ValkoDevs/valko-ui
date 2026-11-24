# ValkoUI → Reka UI migration conventions

This document defines the conventions every component ticket of the Reka UI
migration must follow, so behavior, accessibility, and keyboard navigation are
owned by [Reka UI](https://www.reka-ui.com) (`reka-ui` v2.x) while ValkoUI keeps
owning styling and its public component API.

One-line policy: **Reka owns behavior; ValkoUI owns looks.**

- Reka primitive where one exists.
- Reka utility (`Primitive`/`asChild`, `Field`, `Separator`, `useId`,
  `VisuallyHidden`) where the component needs structure but has no primitive.
- Custom-with-documented-gap only where Reka has no equivalent at all
  (see the [gap table](#gap-table), maintained by the custom-components audit
  ticket).

## Styling

- Keep `tailwind-variants` + `styleSlots` exactly as they are. Do not move
  styling into Reka.
- Style Reka-rendered parts through the `class` passthrough and Tailwind
  `data-[state=…]:` variants. Reka exposes `data-state`, `data-orientation`,
  `data-disabled`, and friends; **verify the exact attribute per primitive in
  the Reka docs during that primitive's ticket** — they differ (for example
  Tabs uses `data-active`/`data-inactive` on triggers).
- Never reference `data-headlessui-state` in styles or JS after a component
  migrates.

## Transitions (decided)

Enter/leave animations use **CSS keyframes driven by Reka's `data-state`
attributes**. Reka primitives suspend unmount while a CSS `animation` is
playing (`data-state="closed"` → animation runs → element is removed on
`animationend`), so no extra wrapper is needed for primitives:

```css
/* tailwind-variants / stylesheet */
.vk-modal-overlay[data-state="open"]  { animation: fadeIn 300ms ease-out; }
.vk-modal-overlay[data-state="closed"] { animation: fadeOut 300ms ease-in; }
```

Rules of thumb:

- **Do not** add Vue `<Transition>` around a Reka primitive part that already
  supports `data-state` animations — Reka handles the unmount timing.
- **Vue `<Transition>`** is allowed only around content of a part used with
  `forceMount`, where the consumer/implementation delegates unmounting:
  `<Transition name="fade"><DialogContent /></Transition>` inside the portal.
- **`Presence`** is for custom (non-primitive) content that must stay mounted
  across an exit animation: `<Presence :present="isOpen">…</Presence>`.
  Do not use it where a primitive already does the job.
- Tailwind v4 `@keyframes` are defined in the library stylesheet; expose
  animation naming with the `vk-` prefix to avoid collisions.

Proof of concept (verified in this repo's vitest/jsdom environment):

- `Presence` renders its slot while `present` is true and unmounts it when
  `present` turns false **with no pending animation**. Note: its watcher
  awaits a tick before dispatching `UNMOUNT`, so tests must flush **two**
  `nextTick`s after the state change before asserting removal.
- Vue `<Transition>` enter/leave works in jsdom only with an explicit
  `duration` prop (jsdom runs no real CSS transitions/animations).

## Portals

- Overlay/floating content (Modal, Drawer, Popover, Tooltip, Menu, Dropdown,
  Select listbox, date pickers) renders inside the matching Reka `*Portal`
  component → teleported to `body`.
- This is a **breaking DOM-location change** for consumers and tests:
  - Specs must mount with `attachTo: document.body`.
  - `DataTable`'s filter popover lookup via
    `document.querySelectorAll('.vk-popover')` must be refactored to a scoped
    mechanism (ref/context, not a global class search) — owned by the
    floating-components ticket.

## Controlled / uncontrolled

- Map Valko's public props to Reka's `v-model` convention:
  `modelValue`/`isOpen` → Reka's `v-model:open` (or the primitive's model).
- When forwarding props/emits to a Reka root, use `useForwardPropsEmits`:

  ```ts
  const forwarded = useForwardPropsEmits(reactiveOmit(props, 'isOpen'), emit)
  ```

- Valko components keep their public props/events/slots stable unless a ticket
  says otherwise; Reka roots are wrapped inside `Vk*` components, never
  exposed directly.
- Prefer `Primitive`/`asChild` when a Valko subcomponent must render as the
  consumer's element.

## Keyboard / accessibility policy

- When Reka owns a primitive, **delete** Valko's hand-rolled keydown handlers,
  roving-focus logic, and outside-click handling for that component. Never
  keep both implementations.
- Components without a Reka primitive stay custom, but adopt Reka conventions
  (`useId` for label wiring, `VisuallyHidden` where needed) and have their gap
  documented in the [gap table](#gap-table).

## ConfigProvider

`createValkoUI` registers Reka's `ConfigProvider` globally as
`<VkConfigProvider>` (and it is exported by name from the package). Consumers
wrap their application with it to set the direction and locale that flow to
all Reka-backed primitives:

```vue
<script setup lang="ts">
import { VkConfigProvider } from '@valko-ui/components'
</script>

<template>
  <VkConfigProvider dir="rtl" locale="ar">
    <RouterView />
  </VkConfigProvider>
</template>
```

- `ConfigProvider` props: `dir` (`ltr`/`rtl`, default `ltr`), `locale`
  (BCP 47, default `en`), `scrollBody`, `nonce`, `teleportTo`, `useId`.
- `useDirection`, `useLocale`, and `useId` are re-exported from the package
  for component-internal use during migrations.
- Without a wrapping `VkConfigProvider`, primitives fall back to Reka defaults
  (`ltr`, `en`) — wrapping is opt-in, nothing breaks.

## Nuxt / SSR

- `reka-ui` is added to `nuxt.options.build.transpile` in `nuxt.module.js`
  (alongside the existing `@popperjs/core` and `@headlessui/vue` entries,
  which are removed only in the final cleanup ticket).
- Reka UI is SSR-compatible (it renders placeholders for teleported parts and
  provides SSR-safe `useId`). Actual SSR behavior is re-validated when the
  first portal-rendering component migrates (Modal/Drawer ticket) by building
  and exercising the docs app (Nuxt 4).

## Test implications

- Portal-rendered content: mount with `attachTo: document.body`.
- CSS animations do not run in jsdom: `Presence` unmounts immediately
  (no animation pending), and `Vue <Transition>` needs an explicit `duration`.
  Exit-animation assertions must either flush ticks (Presence) or use
  `duration` + real timers (Transition); jsdom never fires
  `animationend`/`transitionend` on its own.
- Replace every `data-headlessui-state` assertion with the primitive's Reka
  state attribute.

## Gap table

Components with no Reka equivalent, kept custom (populated/audited by the
custom-components audit ticket):

| Component | Reason | Aria conventions adopted |
| --- | --- | --- |
| Alert, Breadcrumbs, Card family, DataTable, Table, Navbar, Icon, Skeleton, Spinner | No Reka primitive exists (verified against the v2 catalog) | pending audit ticket |
