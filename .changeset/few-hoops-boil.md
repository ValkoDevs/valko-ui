---
"@valko-ui/docs": minor
---

## Valko-UI Docs

#### Components
- Introduced the `ApiTable` component, which builds on `VkTable` to provide a visually enhanced and more readable API documentation table. This component uses color-coded and code-block-styled values to help users quickly distinguish between prop names, types, and default values, making the documentation easier to scan and understand.

- Enhanced the `Code-block` component with an option to hide the copy button.

#### Pages
- Refactored all documentation pages to utilize the new `ApiTable` component for API tables.

#### Utils
- Added a new `formatHeaders` array, similar to other header utilities, for use in tables that display available formats (e.g., in calendar/time components).
