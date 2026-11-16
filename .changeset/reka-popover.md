---
'@valko-ui/components': minor
---

Migrate `VkPopover` to Reka UI's `Popover`: content now renders through a Reka portal teleported to `body` (breaking DOM-location change — consumers and tests must look up panel content in `document.body`), with outside-click, escape, and collision/flip positioning owned by Reka. `placement`/`alignment` map to Reka `side`/`align`, and `placement: 'auto'` delegates to Reka collision avoidance. Panel positioning classes changed from CSS `data-[placement=…]` variants to Reka popper positioning (`data-side`/`data-align`). Adds an `update:isOpen` event so consumers can drive the open state from the trigger; the existing `isOpen`/`@close` API is unchanged. Includes the `DataTable` header-filter consumers, now reading panel content from the portal, and the new `vk-popover-in`/`vk-popover-out` animation keyframes.
