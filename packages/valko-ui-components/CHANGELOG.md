# @valko-ui/components

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

### Patch Changes

- 040f3b9: **Menu:**

  - Updated reduce function to ensure items without a `group` are assigned to the `default` group.

- f547a38: ### Components

  **DataTable:**

  - Removed the watch that caused recursion issues.
  - Implemented a computed property to handle data updates efficiently.

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

### Patch Changes

- 9b29a7e: ci: changeset summary

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
