---
"@valko-ui/components": patch
"@valko-ui/docs": minor
---

## Valko-UI Components:

### Components:
- **Table:** Removed deprecated `class` property from `TableHeader` interface. This property is no longer needed with the new tailwind-variants slot-based styling architecture.

## Valko-UI Docs:

#### Components:
- Introduced the `ApiTable` component, which builds on `VkTable` to provide a visually enhanced and more readable API documentation table. This component features:
  - **Type-safe data structures**: Implements discriminated union types for better type safety and IntelliSense support.
  - **Intelligent color-coding**: Uses an `apiType` system to automatically color-code values based on their type (primitives, custom types, objects, functions, etc.).
  - **Enhanced formatting**: Renders complex types as code blocks while displaying simple types with appropriate syntax highlighting.
  - **Header-data correlation**: Ensures data types match their corresponding table headers through TypeScript constraints.

- Enhanced the `Code-block` component with an option to hide the copy button.

#### Pages:
- Refactored all documentation pages to utilize the new `ApiTable` component, providing consistent and improved API documentation across all components.
- Updated table data structures to use the new type-safe interfaces.

#### Utils:
- Added `formatHeaders` array containing table header definitions for format reference tables (e.g., showing HH, mm, ss format options in date/time components).
