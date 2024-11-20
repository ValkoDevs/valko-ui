---
"@valko-ui/components": patch
"@valko-ui/docs": patch
---

Components Fixes:

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
