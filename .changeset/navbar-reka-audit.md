---
"@valko-ui/components": patch
---

Navbar: audited as a Reka-idiomatic custom component. Removed the redundant `role="navigation"` attribute (the `<nav>` element already has the implicit role) and the hardcoded `aria-label="Main navigation"` default — `aria-label` is now rendered only when the `ariaLabel` prop is provided, so multiple navbars no longer announce the same label. The docs API table's `ariaLabel` default row was corrected accordingly, and specs now cover the attribute passthrough, its absence by default, and the removal of the explicit `role`.
