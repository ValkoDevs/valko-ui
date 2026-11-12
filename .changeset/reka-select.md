---
'@valko-ui/components': minor
---

Migrate `VkSelect` to Reka UI's `SelectRoot`/`SelectTrigger`/`SelectContent`/`SelectItem` for both single and multiple modes, replacing the hand-rolled dropdown, keyboard navigation and outside-click handling. Reka owns positioning, outside-click dismissal, keyboard navigation (arrow keys + typeahead instead of arrow/Home/End) and focus management.

Deltas to be aware of:

* The dropdown now renders in a Reka portal (teleported to `body`) instead of inline next to the input — DOM-location change for consumers styling or querying it in place.
* The obsolete `styleSlots.select` slot was removed (the component no longer renders its own hidden `<select>`; a hidden native select is provided by Reka when the new optional `name` prop is passed inside a form, restoring genuine form submission).
* The dropdown no longer closes on input blur (Reka owns open state; Esc and outside click still close it).
* The select content animates with the new `vk-select-in`/`vk-select-out` keyframes.
* Re-selecting behavior is preserved: `clearable` deselect on re-select, multiple toggle, and the no-empty guard without `clearable`.
