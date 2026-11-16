---
'@valko-ui/components': minor
---

Migrate `VkProgressbar` to Reka UI's `Progress`: `ProgressRoot` now provides `role="progressbar"` with `aria-valuenow`/`aria-valuemin`/`aria-valuemax` on the container, replacing the hand-rolled wiring (`indeterminate` maps to a null value). Buffer display and the diagonal-stripes texture are unchanged; public props, events, and slots are unchanged.
