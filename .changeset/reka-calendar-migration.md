---
'@valko-ui/components': major
---

Calendar: migrated the Calendar family (Calendar, header and day/month/year views) onto Reka UI's Calendar primitives. Breaking change: the public date model is now `DateValue` from `@internationalized/date` instead of `EpochTimeStamp`. `Calendar` and `Datepicker` accept `DateValue` for `modelValue`, `minDate`, `maxDate` and `disabledDates`; `useDateAdapter` returns a `DateValue` model and its adapter now exposes `isDateDisabled(date)` (replacing the `disabledDates` computed) and `onPlaceholderChange(date)`; day selection, min/max clamping, disabled-date rules and the accessible day grid are owned by Reka `CalendarRoot`.
