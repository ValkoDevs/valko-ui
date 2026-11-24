---
'@valko-ui/components': minor
---

Card: pressable cards now render a real native `<button>` via Reka `Primitive` (with `type="button"` and the native `disabled` attribute when `disabled` is true, so the disabled state is exposed to assistive tech and native button semantics), and disabled pressable cards get the shared disabled visual treatment (`cursor-not-allowed`, reduced opacity). Behavior and API are otherwise unchanged.
