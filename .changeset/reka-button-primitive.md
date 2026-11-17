---
'@valko-ui/components': minor
---

Render `VkButton` through Reka UI's `Primitive` and add an `asChild` prop: with `asChild`, the button attrs merge onto the consumer's first child element instead of an internal `<button>`, with the state layer, ripple and spinner injected as that element's children. Ripple and loading behavior are unchanged; existing props, events, and slots are unchanged (`asChild` is additive).
