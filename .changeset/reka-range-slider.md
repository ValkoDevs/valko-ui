---
'@valko-ui/components': minor
---

Migrate the Range component to Reka UI's Slider primitives (`SliderRoot`/`SliderTrack`/`SliderRange`/`SliderThumb`). Dragging, track clicks, value clamping and keyboard navigation are now owned by reka-ui, so keyboard interaction gains PageUp/PageDown and Shift+arrow large steps, and thumbs are centered and kept within the track bounds. The public props, events, and style slots are unchanged.
