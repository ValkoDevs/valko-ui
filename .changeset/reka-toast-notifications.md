{
  "@valko-ui/components": {
    "minor": true,
    "description": "Notifications: replaced `toastify-js` with Reka UI's Toast primitives behind the existing `useNotification()` API. `useNotification` now requires a mounted `<VkNotificationProvider />` (registered globally by `createValkoUI`) and returns `{ showToast, hideToast }`. Dropped toastify passthrough options that have no Reka equivalent: `stopOnFocus` (hover-pause is now always on), `selector`, `avatar`, `backgroundColor`, `className`, `style`, `oldestFirst`, `escapeMarkup`, `ariaLive`, `onShow`, `onHide`, `node` and the toastify `position: 'center'` value; `offset` is now applied as stack margins."
  }
}
