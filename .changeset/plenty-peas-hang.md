---
"@valko-ui/components": patch
"@valko-ui/docs": patch
---

### Components

**Dropdown:**
- Exposed a `toggle` method to manually control the dropdown’s open state when using a custom trigger via slot.
  (Previously, this was handled internally by Headless UI, but since we removed that dependency, users now need this method to replicate the same behavior.)

**Navbar:**
- Fixed an issue where the navbar did not apply the correct border-radius to corners when using different `shape` values (`rounded`, `square`, `soft`) while `floating` was enabled.

**Notification:**
- Restored the `text` prop in the TypeScript interface, which was accidentally removed.

### Docs
- Updated the Dropdown documentation to show how to use the new `toggle` method with custom trigger content.
