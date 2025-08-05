---
"@valko-ui/components": patch
"@valko-ui/docs": patch
---

## Components
  - Button: Removed legacy `dark` prefix.

## Exports
  - valkoui.css: Renamed color token `on-inverse-surface` to `inverse-on-surface`.

## Styles
  - Card: Removed legacy `dark` prefix.
  - CardImage: Updated image overlay to use ValkoUI design tokens (`surface-dim` and `surface-bright`) instead of hardcoded `transparent → black`.
  - Notification: Updated to use `inverse-on-surface` instead of `on-inverse-surface`.
  - Radio: Removed legacy `dark` prefix.
  - Tag: Removed legacy `dark` prefix.

## Docs
  - Fixed documentation pages breaking at various breakpoints.
