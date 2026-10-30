---
"@valko-ui/components": minor
"@valko-ui/docs": minor
---

## Valko-UI Components

### Components

**Datatable:**
  - Added forwarding for missing table slots in `DataTable`:
    - `header-cell-${header.key}`
    - `cell-${field}`
    - `no-data-message`
    - `table-footer`
  - `totalPages` now falls back to the record count when no positive `total` is provided, so client-side data sets still render pagination.

### Tests

**Datatable:**
  - Added unit tests for `DataTable` slot forwarding to cover:
    - `header-cell-${header.key}`
    - `cell-${field}`
    - `no-data-message`
    - `table-footer`
  - Added unit tests for the `totalPages` record-count fallback.

---

## Valko-UI Docs

- Updated the DataTable API documentation to reflect the newly forwarded slots.

