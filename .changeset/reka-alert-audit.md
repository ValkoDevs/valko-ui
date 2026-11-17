---
'@valko-ui/components': minor
---

Alert: audited as a Reka-idiomatic custom component. The container is now labelled through `aria-labelledby` (the title heading, or the `ariaLabelledBy` prop) instead of an `aria-label` pointing at an element id, and the icon-only close button exposes a visually hidden `Close` label via Reka's `VisuallyHidden`. Props, slots and style slots are unchanged.
