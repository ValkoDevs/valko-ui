import { createToastManager } from 'reka-ui'
import type { GlobalToastManager } from 'reka-ui'
import type { NotificationProps, VerticalAlign, HorizontalAlign } from '#valkoui/types/Notification.ts'

export type NotificationPlacement = `${VerticalAlign}-${HorizontalAlign}`
export type ToastManager = GlobalToastManager

// One manager per viewport corner: Reka's ToastViewport owns the fixed
// positioning, and each toast's gravity/position pair maps to one of them.
export const notificationPlacements: NotificationPlacement[] = [
  'top-left',
  'top-right',
  'bottom-left',
  'bottom-right'
]

// Managers and provider state live on globalThis because the composable and
// the provider component can end up in different module instances (bundled
// package entry vs. per-file dist modules) and must share the same state.
interface NotificationRegistry {
  managers: Map<NotificationPlacement, ToastManager>;
  isProviderMounted: boolean;
  hasWarnedNoProvider: boolean;
}

const registryKey = '__valkoUiNotificationRegistry__'

const getRegistry = (): NotificationRegistry => {
  const host = globalThis as typeof globalThis & { [registryKey]?: NotificationRegistry }
  return host[registryKey] ??= {
    managers: new Map(),
    isProviderMounted: false,
    hasWarnedNoProvider: false
  }
}

export const getToastManager = (placement: NotificationPlacement): ToastManager => {
  const { managers } = getRegistry()
  let manager = managers.get(placement)
  if (!manager) {
    manager = createToastManager()
    managers.set(placement, manager)
  }
  return manager
}

export const setNotificationProviderMounted = (value: boolean) => {
  const registry = getRegistry()
  registry.isProviderMounted = value
  if (value) registry.hasWarnedNoProvider = false
}

const defaultDuration = 3000

export interface NotificationHandle {
  showToast: () => void;
  hideToast: () => void;
}

const useNotification = (props: NotificationProps): NotificationHandle => {
  if (!props.text) throw new Error('Property "text" is required')

  const gravity: VerticalAlign = props.gravity ?? 'top'
  const position: HorizontalAlign = props.position ?? 'right'
  const manager = getToastManager(`${gravity}-${position}`)

  if (!getRegistry().isProviderMounted && !getRegistry().hasWarnedNoProvider) {
    console.warn('[valko-ui] useNotification was called without a mounted <VkNotificationProvider>. Toasts are queued and shown once the provider is mounted.')
    getRegistry().hasWarnedNoProvider = true
  }

  const options = {
    duration: props.duration || defaultDuration,
    data: {
      color: props.color ?? 'primary',
      variant: props.variant ?? 'filled',
      shape: props.shape ?? 'soft',
      size: props.size ?? 'md',
      text: props.text,
      close: props.close ?? false,
      offset: props.offset,
      styleSlots: props.styleSlots,
      click: () => {}
    }
  }

  let id = manager.add(options)

  options.data.click = props.onClick
    ?? (props.destination
      ? () => window.open(props.destination, props.newWindow ? '_blank' : '_self')
      : () => manager.close(id))

  return {
    // Reka toasts render as soon as they are added; adding the same id
    // again reopens and restarts it.
    showToast: () => { id = manager.add(options) },
    hideToast: () => manager.close(id)
  }
}

export default useNotification
