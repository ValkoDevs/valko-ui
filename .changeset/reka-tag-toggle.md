---
'@valko-ui/components': minor
---

Pressable `VkTag` now renders as a real `<button>` through Reka UI's `Toggle` with `aria-pressed`, fixing keyboard activation. The close button is now a sibling of the toggle button instead of nested inside it (DOM change for consumers styling or querying the close action). Non-pressable tags are unchanged.
