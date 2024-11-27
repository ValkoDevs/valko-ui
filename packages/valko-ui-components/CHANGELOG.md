# @valko-ui/components

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
