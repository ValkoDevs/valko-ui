---
"@valko-ui/components": minor
"@valko-ui/docs": minor
---

### Components

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
