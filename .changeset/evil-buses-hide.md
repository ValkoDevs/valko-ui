---
"@valko-ui/components": patch
"@valko-ui/docs": patch
---

## Doc:
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
  - In Navbar component removed elevation (box-shadow) from the sticky navbar by default. Introduce an elevated option to allow  setting it to elevation level 2 (el2) when needed.
  - Ensure notifications use the surface-inverse color to maintain legibility.
  - Fixed layout issues in CodeBlock component: the copy button is misaligned (on the wrong side) and padding appears incorrect.
  - Fixed Input surface colors.

## Test:
  - Updated all test suits where needed.
