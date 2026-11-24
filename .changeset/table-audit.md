---
"@valko-ui/components": patch
---

Table: audited as a Reka-idiomatic custom component. Removed redundant explicit ARIA roles from native table elements (`role="table"`, `role="rowgroup"`, `role="row"`, `role="columnheader"`, `role="cell"`), keeping `scope="col"` on headers and `aria-selected`/`data-selected` for row selection. Rows with `rowEvents` now activate on Enter/Space in addition to click, with guards against modifier keys (Ctrl/Meta/Alt), key auto-repeat, and keydown events from nested interactive elements.
