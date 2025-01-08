---
"@valko-ui/docs": minor
---

### Components

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
    - Address, Dashboard, Datatable, Filters (horizontal/vertical), Left Menu with Top Navbar, Left Menu, Login, Payment, Pricing, Product Detail Page, Product List Page, Profile, Settings, Signup, Top Navbar, User Edit, User Management, Vertical        Nav and Menu, Vertical Nav.

**assets:**
  - Added preview images for each template under `public/assets/` to display in the documentation cards.

**pages:**
  - GetStarted: Complete the `get-started` page with a installation and usage tutorial.
  - Home: The `homepage` now effectively guides users towards setting up and using the library.
