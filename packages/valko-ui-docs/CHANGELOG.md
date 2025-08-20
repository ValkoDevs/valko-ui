# @valko-ui/docs

## 0.6.1

### Patch Changes

- 5a386d4: ### Components

  **exports:**

  - Update compatibility field on `nuxt.module.js` to support v3 and v4.

  ### Docs

  - Update `get-started` page with the new configuration required for Nuxt v4.

- Updated dependencies [5a386d4]
  - @valko-ui/components@0.5.2

## 0.6.0

### Minor Changes

- b4b98e0: ## Docs
  - Added documentation page for the `Icon` component.

### Patch Changes

- 39ab852: ### Components

  - **Badge**
    - Updated `placement` prop to use `Placement` type instead of `Corner` type.
    - Added `alignment` prop for more flexible badge positioning.

  ### Docs

  - Introduced shared `alignment` and `placement` options in utils to reduce repetition across pages.
  - Refactored all doc pages to use the new shared options.

- f1c51c0: ## Components

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

- 00c6a9e: ### Types:
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

- Updated dependencies [39ab852]
- Updated dependencies [f1c51c0]
- Updated dependencies [00c6a9e]
  - @valko-ui/components@0.5.1

## 0.5.0

### Minor Changes

- 60f85f8: ## @valko-ui/components

  ### General

  - Upgraded to **TailwindCSS v4**. Since the `tailwind.config.ts` file is no longer used, all theme color variants have been moved to `valkoui.css`.
  - The `flat` prop has been removed across all components. Components now default to **elevation level 0**, which has no shadow. Some components (like `Button`) can now be visually elevated by setting an `elevated` prop (e.g., from 0 to 1).

  ### Components

  - **Alert**: Removed `flat` prop.
  - **Avatar**: Added `elevated` prop.
  - **Badge**: Removed `flat` prop.
  - **Breadcrumbs**: Removed `flat` prop.
  - **Button**:
    - Replaced `flat` with `elevated`.
    - Removed unnecessary bindings for `condensed` and `block`.
    - Added `stateLayer`.
    - Removed dynamic classes for the loader.
  - **Calendar**: Fixed a typo in import (was `CalendayMonthView`, now correctly `CalendarMonthView`).
  - **Card**: Replaced `flat` with `elevated`.
  - **Checkbox**: Added `stateLayer`.
  - **Drawer**: Removed `flat` prop.
  - **Dropdown**: Replaced `flat` with `elevated`.
  - **Modal**: Removed `flat` prop.
  - **Navbar**: Replaced `flat` with `elevated`. Now uses elevation level 1 when `elevated` and level 2 when `sticky`.
  - **Pagination**: Replaced `flat` with `elevated`.
  - **Popover**: Replaced `flat` with `elevated`.
  - **Radio**: Added `stateLayer`.
  - **Switch**: Simplified `thumb` span class by removing unnecessary template string.
  - **Tooltip**: Replaced `flat` with `elevated`.
  - **Notification**: Replaced `flat` with `elevated`.

  ### Styles

  - All style files were updated to use the new color variable names.
  - Removed all references to `flat` and replaced them with `elevated` where applicable.

  ### Types

  - Removed `flat` prop from: `Alert`, `Badge`, `Breadcrumbs`, `Checkbox`, `Datepicker`, `Drawer`, `Modal`, `Notification`, `Switch`, `Timepicker`.
  - Replaced `flat` with `elevated` in: `Avatar`, `Button`, `Card`, `Dropdown`, `Navbar`, `Pagination`, `Popover`, `Tooltip`.
  - Updated `common.ts` to rename color variables:
    - `neutral` → `secondary`
    - `info` → `accent`
    - `success` → `positive`
    - `error` → `negative`

  ***

  ## @valko-ui/docs

  ### General

  - Updated all documentation pages to reflect the changes introduced in TailwindCSS v4 and component updates.

  ### Assets

  - Updated `styles.css` to use new color variable names.

  ### Components

  - **CodeBlock**, **SiteLinks**, **ThemeSwitch**: Updated color variables.
  - **DocSection**, **ExampleSection**: Updated styles.

  ### Layouts

  - **Docs**: Moved `Dropdown` from the `Data` group to the `UI` group. Updated color variables.
  - **Templates**: Updated color variables.

  ### Templates

  - Removed all remaining instances of the `flat` prop.

  ### Utils

  - Renamed colors to match new variable naming conventions.

- 7990f68: ### Components

  - Updated TailwindCSS to V4.
  - Removed `tailwind.config.ts` since is no longer needed in v4.

  ## Styles

  - Updated all styles to match recent changes.

  ## Test

  - Updated all tests to match recent changes.

  ## Exports

  - Removed `tailwind.preset.js` since is no longer needed in v4.
  - Updated `valkoui.css` to match recent changes.

  ### Docs

  - Removed `tailwind.config.ts` since is no longer needed in v4.

  ## Assets

  - Updated `styles.css` to match recent changes.

  ## Templates

  - Updated templates to match recent changes.

  ## Layouts

  - Updated layouts to match recent changes.

  ## Components

  - Updated doc components to match recent changes.

  ## Pages

  - Updated `index` page to match recent changes.

### Patch Changes

- bfbd459: ## Doc:

  - Added consistent spacing between tables and section titles across all API documentation pages.
  - Ensure all switches in the documentation are turned on by default to better reflect typical usage.
  - In the example sections, decouple radio buttons so they are no longer grouped—this will allow each to be set as checked independently by default.
  - Make the top navigation menu items bold to distinguish them from general buttons (only the top menu, not all buttons).
  - Updated all templates to match the changes made with TailwindCSS v4.

  ## Components:

  - Added surface color option for Calendar.
  - Improve disabled button colors—they currently lack appropriate contrast or clarity.
  - Fixed issue where the Tabs panel prevents content from expanding beyond its container.
  - Fixed cursor position issues in Tabs when props change dynamically—cursor sometimes fails to update correctly.
  - Fixed issue where buttons in the Time component are styled and positioned correctly.
  - In Navbar component removed elevation (box-shadow) from the sticky navbar by default. Introduce an elevated option to allow setting it to elevation level 2 (el2) when needed.
  - Ensure notifications use the surface-inverse color to maintain legibility.
  - Fixed layout issues in CodeBlock component: the copy button is misaligned (on the wrong side) and padding appears incorrect.
  - Fixed Input surface colors.

  ## Test:

  - Updated all test suits where needed.

- Updated dependencies [60f85f8]
- Updated dependencies [bfbd459]
- Updated dependencies [7990f68]
  - @valko-ui/components@0.5.0

## 0.4.0

### Minor Changes

- 5e5e013: ### Components

  **components:**

  - Alert: Replaced the default primary and neutral icons with `alert-hexagon` for a more descriptive representation. Also, standardized class names (e.g., `classes.leftIcon` changed to `classes.mainIcon`) for improved consistency across the
    project.
  - Badge: Removed the `gradient` and `outlined` props and replaced them with the `variant` prop, aligning with other components. Additionally, class names were standardized.
  - Button: Resolved an issue where the loader was not displaying the correct color.
  - Card: Added default values for missing props (`isPressable`, `flat`). Introduced the `data-card-image` attribute to adjust styles when `vk-card-image` is present, ensuring proper layout adjustments.
  - Checkbox: Fixed an issue where the container lacked the appropriate classes, and standardized the component to align with other input components, keeping the helper text within the container.
  - Datatable: Fixed an issue where data was not loading correctly on initialization. Added a watcher to synchronize data loading with the pagination controls.
  - Datepicker: Updated the template `#` for the icon to match recent changes in the input component.
  - Drawer: Removed the default `title` prop, now set to an empty string (`''`). Added a wrapper around the default slot content with the necessary classes for improved visual clarity.
  - Input: Enhanced functionality for increment/decrement arrows in `type="number"`. Updated the arrow styling to be consistent with the overall UI. Standardized slot names (`#leftIcon` and `#rightIcon` changed to `#left-icon` and `#right-icon`).
    Introduced the `placeholder` prop, visible only on focus.
  - Radio: Standardized the container classes and ensured the helper text is positioned inside the container, consistent with the `Checkbox` component
  - Select: Added a `placeholder` prop to mirror the input component's behavior. Updated the template `#` to align with the changes made to the input component.
  - Spinner: Fixed the usage of the `className` prop, allowing it to override the default color and providing users with more control over customization.
  - Tabs: Introduced the `modelValue` prop and modified component behavior to support both controlled and uncontrolled states, offering users more flexibility in managing tab state.
  - Textarea: Added support for icons, aligning it with the `Input` and `Select` components. Also added the `placeholder` prop to allow for placeholder text.
  - Timepicker: Updated the template `#` for the icon to align with the changes made to the `Input` component (`#leftIcon` and `#rightIcon` changed to `#left-icon` and `#right-icon`).

  **composables:**

  - useDateAdapter: Updated the date handling logic by adding a `+` operator to force the use of numeric values, ensuring consistent behavior when parsing dates:
    - Before: `const min = minDate ? formatDate(new Date(minDate)) : undefined`
    - After: `const min = minDate ? formatDate(new Date(+minDate)) : undefined`

  **exports:**

  - valkoui.css: Added CSS rules to hide the default `number` input arrows, allowing the use of custom icons that better align with the UI design.

  **styles:**

  - Updated and standardized styles for the following components to match recent changes:
    - Alert, Badge, Breadcrumbs, Button, Card, CardBody, CardFooter, CardHeader, Checkbox, Drawer, Dropdown, Input, Pagination, Popover, Radio, Spinner, Textarea, Tooltip.

  **types:**

  - Updated types for the following components to match recent changes:
    - Badge, Input, Select, Tabs, Textarea.

  **tests:**

  - Updated tests for the following components to match recent changes:
    - Alert, Badge, Breadcrumbs, Card, Checkbox, Datatable, Drawer, Input, Radio.

  ### Docs

  **components:**

  - ExampleSection: Changed the background color to enhance the visibility of certain component colors.
  - SiteLinks: Adjusted the gap in the container for better layout consistency.

  **layouts:**

  - Docs: Modified the menu structure to hide `siteLinks` on mobile devices and included them in the hamburger menu for easier navigation.
  - Templates: Added a mobile menu to streamline navigation on mobile devices.

  **pages:**

  - Documentation Pages: Updated the following pages to match recent changes in components:
    - Datatable, Dropdown, Tabs, Button, Checkbox, Datepicker, Input, Radio, Select, Textarea, Drawer, Modal, Badge, Breadcrumbs, Card, Menu, Notification, Popover, Spinner, Tooltip.
  - Get-Started: Updated the page to match the changes requested in the PR.
  - Index: Added a mobile-friendly menu for improved navigation directly from the homepage on mobile devices.

- 63b16b9: Update version of all packages

### Patch Changes

- e824407: ### Components

  **Popover:**

  - Removed headlessUI as it was not being used.
  - Reintroduced `placement` prop to allow positioning customization.
  - Added `alignment` prop to control the alignment within the placement.
  - Added `condensed` prop to allow users to disable the default padding in the content panel.
  - `placement` defaults to `auto`, meaning the Popover will automatically adjust its position based on available space. If a different placement is set, it will be used instead.

  **Dropdown:**

  - Replaced headlessUI with the new `VkPopover`.
  - Now supports `placement` and `alignment` props for more flexible positioning.

  **Tooltip:**

  - Replaced headlessUI with the new `VkPopover`.
  - Now supports `placement` and `alignment` props for more precise positioning.

  ## Types

  **Common:**

  - Added `Alignment` and `PlacementWithAuto` types.
  - Added `Alignments`, `Placements` and `PlacementsWithAuto` interfaces.

  **Components:** - Updated `Popover`, `Dropdown`, and `Tooltip` to extend `Alignments` and `PlacementsWithAuto`. - Updated `Drawer` to extend `Placements` for consistent placement handling.

  ## Test

  - Updated test for `Tooltip` to match recent changes.

  ## Styles

  - Updated styles for `Tooltip`, `Popover` and `Dropdown` to match recent changes.

  ### Docs

  - Updated doc pages for `Tooltip`, `Popover` and `Dropdown` to match recent changes.

- Updated dependencies [040f3b9]
- Updated dependencies [5e5e013]
- Updated dependencies [63b16b9]
- Updated dependencies [e824407]
- Updated dependencies [f547a38]
  - @valko-ui/components@0.4.0
  - @valko-ui/eslint-config@0.2.0

## 0.3.0

### Minor Changes

- a3517e7: ### Components

  **components:**

  - Alert: Replaced the default primary and neutral icons with `alert-hexagon` for a more descriptive representation. Also, standardized class names (e.g., `classes.leftIcon` changed to `classes.mainIcon`) for improved consistency across the
    project.
  - Badge: Removed the `gradient` and `outlined` props and replaced them with the `variant` prop, aligning with other components. Additionally, class names were standardized.
  - Button: Resolved an issue where the loader was not displaying the correct color.
  - Card: Added default values for missing props (`isPressable`, `flat`). Introduced the `data-card-image` attribute to adjust styles when `vk-card-image` is present, ensuring proper layout adjustments.
  - Checkbox: Fixed an issue where the container lacked the appropriate classes, and standardized the component to align with other input components, keeping the helper text within the container.
  - Datatable: Fixed an issue where data was not loading correctly on initialization. Added a watcher to synchronize data loading with the pagination controls.
  - Datepicker: Updated the template `#` for the icon to match recent changes in the input component.
  - Drawer: Removed the default `title` prop, now set to an empty string (`''`). Added a wrapper around the default slot content with the necessary classes for improved visual clarity.
  - Input: Enhanced functionality for increment/decrement arrows in `type="number"`. Updated the arrow styling to be consistent with the overall UI. Standardized slot names (`#leftIcon` and `#rightIcon` changed to `#left-icon` and `#right-icon`).
    Introduced the `placeholder` prop, visible only on focus.
  - Radio: Standardized the container classes and ensured the helper text is positioned inside the container, consistent with the `Checkbox` component
  - Select: Added a `placeholder` prop to mirror the input component's behavior. Updated the template `#` to align with the changes made to the input component.
  - Spinner: Fixed the usage of the `className` prop, allowing it to override the default color and providing users with more control over customization.
  - Tabs: Introduced the `modelValue` prop and modified component behavior to support both controlled and uncontrolled states, offering users more flexibility in managing tab state.
  - Textarea: Added support for icons, aligning it with the `Input` and `Select` components. Also added the `placeholder` prop to allow for placeholder text.
  - Timepicker: Updated the template `#` for the icon to align with the changes made to the `Input` component (`#leftIcon` and `#rightIcon` changed to `#left-icon` and `#right-icon`).

  **composables:**

  - useDateAdapter: Updated the date handling logic by adding a `+` operator to force the use of numeric values, ensuring consistent behavior when parsing dates:
    - Before: `const min = minDate ? formatDate(new Date(minDate)) : undefined`
    - After: `const min = minDate ? formatDate(new Date(+minDate)) : undefined`

  **exports:**

  - valkoui.css: Added CSS rules to hide the default `number` input arrows, allowing the use of custom icons that better align with the UI design.

  **styles:**

  - Updated and standardized styles for the following components to match recent changes:
    - Alert, Badge, Breadcrumbs, Button, Card, CardBody, CardFooter, CardHeader, Checkbox, Drawer, Dropdown, Input, Pagination, Popover, Radio, Spinner, Textarea, Tooltip.

  **types:**

  - Updated types for the following components to match recent changes:
    - Badge, Input, Select, Tabs, Textarea.

  **tests:**

  - Updated tests for the following components to match recent changes:
    - Alert, Badge, Breadcrumbs, Card, Checkbox, Datatable, Drawer, Input, Radio.

  ### Docs

  **components:**

  - ExampleSection: Changed the background color to enhance the visibility of certain component colors.
  - SiteLinks: Adjusted the gap in the container for better layout consistency.

  **layouts:**

  - Docs: Modified the menu structure to hide `siteLinks` on mobile devices and included them in the hamburger menu for easier navigation.
  - Templates: Added a mobile menu to streamline navigation on mobile devices.

  **pages:**

  - Documentation Pages: Updated the following pages to match recent changes in components:
    - Datatable, Dropdown, Tabs, Button, Checkbox, Datepicker, Input, Radio, Select, Textarea, Drawer, Modal, Badge, Breadcrumbs, Card, Menu, Notification, Popover, Spinner, Tooltip.
  - Get-Started: Updated the page to match the changes requested in the PR.
  - Index: Added a mobile-friendly menu for improved navigation directly from the homepage on mobile devices.

- d0818cf: ### Components

  **components:**

  - Breadcrumb: Added an `active` state to visually indicate the active breadcrumb.
  - Button: Fixed an issue with the loader not displaying correctly.
  - Card: Corrected the rendering of the card component to properly render as a native `button` when `isPressable` is true.
  - Datatable: Updated to align with changes in the `Table` component. Custom slots now use `#cell-${header}` instead of combining with `item.key`.
  - Table: Refactored slot naming for better consistency. The `cell` slot now uses a simpler format (`#cell-${field}`), improving readability.
  - Navbar: Added a `vertical` prop to allow the navbar to be displayed vertically.
  - Tabs: Added an `emit` to handle `tabClick` with the index of the clicked tab.
  - Tag: Updated styles to ensure consistency with other components.
  - Spinner: Added the `className` prop to allow further customization. This prop enables the spinner's color to be customized when used as a loader within the `Button` component.

  **styles:**

  - Updated styles for the following components to improve consistency across the UI:
    - Badge, Breadcrumb, Button, Card, CardBody, CardFooter, CardHeader, CardImage, Divider, Input, Navbar, Pagination, Tabs, Tag.

  **interfaces:**

  - Updated the following interfaces to reflect recent changes:
    - Breadcrumb, Input, Navbar, Spinner.

  **tests:**

  - Updated the following tests to reflect recent changes:
    - Button, Calendar, CardBody, CardFooter, CardHeader, CardImage, Divider, Pagination, Tag, Time.

  ### Docs

  **components:**

  - Added two new components:
    - PageTemplate: A base component for creating example templates.
    - SiteLinks: A component containing the three main links for the documentation to avoid repetition.

  **layouts:**

  - Updated the documentation layout to use `site-links` in the navigation.
  - Added `NuxtLink` to make the library logo clickable and return to the homepage.
  - Introduced a new `templates` layout to display a grid of available templates.

  **templates:**

  - Added the following new templates:
    - Address, Dashboard, Datatable, Filters (horizontal/vertical), Left Menu with Top Navbar, Left Menu, Login, Payment, Pricing, Product Detail Page, Product List Page, Profile, Settings, Signup, Top Navbar, User Edit, User Management, Vertical Nav and Menu, Vertical Nav.

  **assets:**

  - Added preview images for each template under `public/assets/` to display in the documentation cards.

  **pages:**

  - GetStarted: Complete the `get-started` page with a installation and usage tutorial.
  - Home: The `homepage` now effectively guides users towards setting up and using the library.

### Patch Changes

- 9b29a7e: ci: changeset summary
- Updated dependencies [a3517e7]
- Updated dependencies [9b29a7e]
  - @valko-ui/components@0.3.0

## 0.2.0

### Minor Changes

- da8347c: Components:

  - Time: Added minutestep and okbuttonlabel props, refactored time selection logic to streamline state handling & improved ui with a unified grid structure and an ok button for confirming selections.
  - TimePicker: Introduced a popover-style timepicker with toggleable dropdown.
  - DatePicker: Fixed issue where closing the dropdown would not reset the state of the calendar.
  - Drawer: Fixed animations that were not working.
  - Dropdown: Changed classes name for the slot button to match its parent.
  - Select: Combine allowclear and clearable props into a single clearable prop.
  - Table: Added horizontal scroll for smaller screens.
  - Pagination: Fixed styles for variant outlined.

  Composables:

  - useTimeAdapter: Simplified time selection logic by introducing setDisplayUnit to dynamically update time units. Added isTimeDisabled to check for valid time ranges. Refactored onSelectTime to set the selected time.

  Docs:

  - ExampleSection: Removed several props for simplification.
  - General: Update all doc pages to reflect changes in exampleSection component.
  - Time: Added missing props and options for the playground.
  - Timepicker: Added missing props and options for the playground.

  Unit Tests:

  - Drawer: Updated test to match new classes.
  - Dropdown: Updated test to match new classes.
  - Pagination: Updated test to match new classes.
  - Select: Updated test to match removed props.
  - Time: Added test for time component.
  - Timepicker: Added test for timePicker component.
  - useTimeAdapter: Added test for useTimeAdapter composable.
  - useDateAdapter: Removed unncessary imports.

### Patch Changes

- 3cece47: Components Fixes:

  - datepicker: fixed calendar closing when changing views and changed the cursor style.
  - calendar: fixed styles for the views months, years and grid buttons not longer in bold.
  - modal: fixed transition class not working on enter and added a slot instead of a button for default.
  - range: fixed issue where it doesn't work on touch screens.
  - select: fixed issue where arrow button doesn't close the dropdown when clicked.
  - input: fixed issue where icons don't apply focus when clicked.
  - dropdown: fixed an issue where the active shadow changed when the was disabled and added a slot instead of a button for default.
  - button: fixed an issue where the active shadow changed when the component was disabled, switched neutral colors.
  - breadcrums: added a hover effect for the crumbs.
  - popover: fixed an issue where the popover doens't close when clicked outside its content.
  - tooltip: now flat is true by default.

  Docs Fixes:

  - datatable: added a label for the select size in the playground.
  - progressbar: fixed an issue where the ranges on the playground where overlapping with the select's dropdown.
  - docs: fixed the issue where the theme wasn't being applied correctly when realoding the page.
  - theme switch component: added theme switch component for the docs for changing between themes.

- Updated dependencies [da8347c]
- Updated dependencies [3cece47]
  - @valko-ui/components@0.2.0

## 0.1.2

### Patch Changes

- 9455993: Small bug fixes:

  - Card component documentation not reacting to playground changes
  - Avatar component documentation hide avatar checkbox not working as intended

## 0.1.1

### Minor Changes

- c737a29: We are deploying a big set of components for our first alpha release:

  - Alert
  - Avatar
  - Badge
  - Breadcrumbs
  - Button
  - Calendar
  - Card
  - CardBody
  - CardFooter
  - CardHeader
  - CardImage
  - Checkbox
  - Collapse
  - CollapseItem
  - DataTable
  - Datepicker
  - Divider
  - Drawer
  - Dropdown
  - Icon
  - Input
  - Menu
  - Modal
  - Navbar
  - Pagination
  - Popover
  - Progressbar
  - Radio
  - Range
  - Select
  - Spinner
  - Switch
  - Table
  - Tabs
  - Tag
  - Textarea
  - Tooltip

  The documentation page is still in a very raw state, with minimal docs for components but missing install instructions and other things, but has a very descriptive page for each component.

  The ESLint Config package contains a set of rules we like to use while creating the library
