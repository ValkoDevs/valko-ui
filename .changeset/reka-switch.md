---
'@valko-ui/components': minor
---

Migrate `VkSwitch` to Reka UI's `SwitchRoot`/`SwitchThumb` with the label wired through Reka's `Label` (`for` + derived `aria-label`), so clicking the label now toggles the switch. The switch root and thumb now expose Reka's `data-state` (`checked`/`unchecked`) and `data-disabled` attributes instead of the previous custom `data-active`/`data-selected`; `styleSlots` classes using those hooks were updated to the `data-[state=…]` equivalents. Public props, events, and slots are unchanged, and the custom `readonly` behavior is preserved.
