---
"@valko-ui/components": patch
"@valko-ui/docs": patch
---

### Components

**Avatar:**
- Added a slot to let users replace the Avatar’s content.

**Button:**
- Introduced a ripple effect on click for clearer interaction feedback.
- Added `type` prop for better form compatibility. (`button`, `reset`, `submit`.)
- Fixed `condensed` prop not working correctly.
- Exposed native click event when the button is clicked.

**Card:**
- Removed default minimum height and width to allow more flexible sizing.

**Checkbox:**
- Restored label click behavior, so users can check/uncheck via the label.

**Dropdown:**
- Added an `isOpen` prop to support both controlled and uncontrolled open state management.
- Exposed a `toggle` method for manual control of the open state when using a custom trigger slot.
  (Previously handled internally by Headless UI, now exposed for users after removing that dependency.)
- Exposed a native click event emit when the dropdown trigger is clicked.
- Added missing `surface` color option.

**Input:**
- Standardized padding and spacing across all sizes and variants.
- Fixed icon misalignment when `type="number"`.
- Added `blur` event emit.
- Fixed input to emit a number value (instead of a string) when `type="number"`.

**Navbar:**
- Fixed border-radius not being applied correctly when using different `shape` values (`rounded`, `square`, `soft`) with `floating`.

**Notification:**
- Restored the `text` prop in the TypeScript interface (previously removed by mistake).

**Popover:**
- Replaced `w-fit/h-fit` with `w-auto/h-auto` to allow popover sizing based on content.

**Select:**
- Added full keyboard navigation support, allowing users to open, close, and select options using arrow keys, Enter, and SpaceBar.

**Tabs:**
- Added slots for tab customization. Slot names are now `item['key']-tab` and `item['key']-content`.
- Fixed `grow` prop not working correctly.

**Textarea:**
- Standardized padding and spacing across all sizes and variants.

### Tests

- Updated test suites for `Input`, `Select`, and `Card` to reflect recent changes.

### Docs

**CodeBlock:**
- Added `css` language support.

**Pages:**
- Updated Dropdown docs with an example using the new `toggle` method and custom trigger content.
- Updated Icon API docs to include ARIA props.
- Renamed `Icon` page to `Icons` and moved it to the **General** section.
- Added a new `Theme` page under **General**.
- Updated the following component API docs to reflect recent changes:
    - Avatar, Button, Card, Input, Select, Tabs.
