---
'@valko-ui/components': minor
---

Collapse: migrated `VkCollapseItem` from Headless UI `Disclosure` to Reka UI `Collapsible` primitives. The `VkCollapse` public API is unchanged (props, slots, styleSlots). State orchestration (including the `multiple` mode exclusivity and the standalone `VkCollapseItem` fallback) stays in `VkCollapse`'s provided context, now driving Reka's controlled `CollapsibleRoot`; trigger semantics, `data-state` attributes, `aria-expanded`/`aria-controls`, and panel mounting are owned by Reka. Panel enter/leave animations moved from the Vue `<Transition>` (`max-h` utilities) to CSS keyframes driven by Reka's `data-state` and `--reka-collapsible-content-height`. `Collapsible` was chosen over `Accordion` because Accordion fixes its `type` ("single"/"multiple") per root instance and requires its own root wrapper, which would break both the runtime `multiple` prop switch and standalone `VkCollapseItem` usage.
