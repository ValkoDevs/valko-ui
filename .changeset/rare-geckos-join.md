---
"@valko-ui/components": minor
"@valko-ui/docs": minor
---

Components:

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
