---
'@valko-ui/components': minor
---

Spinner: the container now exposes `role="status"` (polite live region) with a visually hidden `Loading` label, so assistive tech announces the loading state when the spinner is inserted; the icon is decorative (`aria-hidden="true"`). No props or style slots changed.
