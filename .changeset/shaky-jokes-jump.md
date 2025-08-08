---
"@valko-ui/components": patch
"@valko-ui/docs": patch
---

### Types:
**Common:**
  - Created `AriaAttributes` interface to support standardized `aria-*` props across all components.

### Components:

**Alert:**
  - Added computed `ariaRole` (`status` or `alert`) based on the `color` prop to reflect semantic meaning.
  - Added computed `ariaLive` (`polite` or `assertive`) depending on the `color` prop to inform assistive tech how to treat dynamic content.
  - Implemented `aria-label` logic:
    - If `title` is present, it's assigned an `id` and referenced via `aria-label`.
    - Otherwise, it uses the passed `aria-label` prop if provided.
  - Added support for `aria-labelledby` to link external label elements.
  - Ensured `title` has a stable ID for screen readers when present.

**Avatar:**
  - Added dynamic `role`: `img` if `src` or `name` is present, otherwise `presentation`.
  - Added `aria-label`:
    - Uses `aria-label` prop if passed.
    - Falls back to `name` prop if no `aria-label` is provided.
  - Added `aria-hidden` when avatar has no `src` or `name`.
  - Ensured proper labeling for `img` element via `alt`.

**Badge:**
  - Added `role="status"` to ensure assistive technologies announce the badge content appropriately.
  - Added support for `aria-label` and `aria-labelledby` props to improve context and labeling.

**Breadcrumbs:**
  - Added `aria-label` to `<nav>` element for screen reader context, defaulting to `"Breadcrumbs"` unless overridden by prop.
  - Each `<a>` crumb uses `role="link"`, is keyboard focusable (`tabindex="0"`) unless it's the current page.
  - Last crumb is marked with `aria-current="page"` to indicate active state.
  - Added `aria-disabled` for disabled crumbs.
  - Separators have `aria-hidden="true"` to prevent announcement by screen readers.

**Button:**
  - Added `aria-label` support via prop.
  - Added `aria-disabled` to reflect visual disabled state.
  - When in loading state, shows `<vk-spinner>` with:
    - `role="status"`
    - `aria-live="polite"`
    - `aria-label="Loading..."`

**Checkbox:**
  - Added `role="checkbox"` to the interactive element.
  - Implemented `aria-checked`, supporting mixed (indeterminate) states.
  - Added support for `aria-disabled`, `aria-label`, `aria-labelledby`, and `aria-describedby`.
  - Handled keyboard accessibility

**DataTable:**
  - Added `role="button"` and dynamic `aria-label` to sorting icons.
  - Selection controls (`checkbox` and `radio`) now include appropriate ARIA attributes like `aria-checked`, `aria-disabled`, and `tabindex`.
  - Fixed `event` not being typed in `dragover` and `drop` params.

**Divider:**
  - Added `role="separator"`.
  - Added support for `aria-orientation` based on the `direction` prop.
  - Supports optional `aria-label` and `aria-labelledby`.

**Dropdown:**
  - Trigger button includes `aria-haspopup="menu"`, `aria-expanded`, and `aria-controls` to reference the menu panel.
  - The menu uses `role="menu"` and links back via `aria-labelledby`.
  - Each item includes `role="menuitem"`, proper `tabindex`, and `aria-disabled` when applicable.

**Popover:**
  - Panel element uses `role="dialog"` with `aria-modal="false"`.
  - Added support for `aria-label`, `aria-labelledby`, and `aria-describedby`.

**Radio:**
  - Added `role="radio"` with `aria-checked`, `aria-disabled`, `aria-label`, `aria-labelledby`, and `aria-describedby`.
  - Supports keyboard interaction via `Enter` and `Space` keys to toggle selection.
  - Automatically links helper text via `aria-describedby` if present.
  - Internal `<input type="radio">` uses a unique `id` and is linked to the visible label via `for`.

**Range:**
  - Added ARIA attributes to each thumb: `role="slider"`, `aria-valuemin`, `aria-valuemax`, `aria-valuenow`, `aria-labelledby`, and `aria-describedby`.
  - Dual thumbs (`isDouble`) distinguish minimum and maximum with `aria-label`.
  - Keyboard interactions supported via `Arrow` keys, `Home`, and `End` to update values.
  - Step marks and clickable labels are included with accessibility semantics.

**Select:**
  - Added ARIA roles and attributes to the dropdown:
    - `role="listbox"` on the dropdown container.
    - `role="option"` and `aria-selected` on each item.
    - `aria-label`, `aria-labelledby`, `aria-describedby`, `aria-invalid`, and `aria-required` support passed through to the input field.
  - Implemented `aria-multiselectable` when in multiple mode.
  - Native `<select>` element is included (hidden) for semantic structure and fallback.

**Switch:**
  - Uses `role="switch"` with `aria-checked`, `aria-disabled`, `aria-label`, `aria-labelledby`, and `aria-describedby`.
  - Includes a hidden `<span>` thumb with `aria-hidden` to indicate visual state.

**Table:**
  - Added ARIA roles and attributes for improved accessibility:
    - `<table>` uses `role="table"`, with `role="rowgroup"` for `<thead>` and `<tbody>`, `role="row"` for `<tr>`, and `role="columnheader"` / `role="cell"` for `<th>` and `<td>`.
    - Rows support `aria-selected` and `tabindex` for keyboard focus when `rowEvents` is enabled.
    - `scope="col"` added to `<th>` elements for better semantics.

**Tabs:**
  - Built on top of `@headlessui/vue` for automatic ARIA handling (`role="tablist"`, `role="tab"`, `aria-selected`, etc.).
  - Added `aria-label` to `<tab-list>` for screen reader context, defaulting to "Tab navigation".

**Tag:**
  - Improved accessibility when `isPressable` is enabled:
    - Added `role="button"` and `tabindex="0"` so the tag is focusable and announced as a button by screen readers.

**Textarea:**
  - Improved accessibility:
    - Applied `aria-describedby` dynamically based on `helpertext` and custom ARIA descriptions.
    - Added `aria-label`, `aria-labelledby`, `aria-invalid`, and `aria-required` bindings to better support screen readers.

**Tooltip:**
  - Improved accessibility:
    - Added `role="tooltip"` and dynamic `aria-describedby` support via slot prop injection.
    - Tooltip content now has a unique `id` for proper ARIA binding with trigger elements.

### Docs:
 - Updated the documentation pages accordingly, adding the newly implemented accessibility-related props to each component’s API section.
