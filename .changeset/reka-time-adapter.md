---
'@valko-ui/components': minor
---

Time: migrated `useTimeAdapter` internals to Reka UI's time model (`Time` from `@internationalized/date`, the model layer Reka's `TimeField` runs on) with immutable unit updates and `Time.compare` for `minTime`/`maxTime`/`disabledTimes` constraints. Public adapter API is unchanged; the hour/minute/second grid has no Reka equivalent and stays custom.
