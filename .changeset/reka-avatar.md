---
'@valko-ui/components': minor
---

Migrate `VkAvatar` to Reka UI's `Avatar` (`AvatarRoot`/`AvatarImage`/`AvatarFallback`): the initials/icon fallback now also shows while the image loads or if it fails, instead of only when no `src` is provided. Public props, events, and slots are unchanged.
