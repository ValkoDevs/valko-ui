---
'@valko-ui/components': minor
---

Datepicker: migrated the field/panel wiring to Reka UI's `DatePicker` primitives (`DatePickerRoot`, `DatePickerAnchor`, `DatePickerContent`). The open panel is now portaled to `<body>` and positioned by a popper instead of an absolutely-positioned div inside the component, and pressing `Escape` now closes the panel. The public API (`isOpen`, `update:modelValue`, `open`/`close` events, `styleSlots`) is unchanged and now follows the Calendar's `DateValue` date model; the disabled-dates/min/max rules owned by the calendar are unchanged.
