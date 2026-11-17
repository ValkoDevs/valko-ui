---
'@valko-ui/components': minor
---

Migrate the Rating component to Reka UI's Rating primitives (`RatingRoot`/`RatingItem`/`RatingItemIndicator`). Value selection, half-step fills, clearing and hover state are now owned by reka-ui, so the rating gains full keyboard interaction it lacked before. The scoped default-slot contract (`value`/`displayValue`/`items`/`setValue`/`clearHover`), public props, and style slots are unchanged.
