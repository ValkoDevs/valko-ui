<script setup lang="ts">
import { computed } from 'vue'
import { ToastClose, ToastRoot, ToastViewport, useToastManager } from 'reka-ui'
import type { ToastObject } from 'reka-ui'
import styles from '#valkoui/styles/Notification.styles.ts'
import type { NotificationPlacement } from '#valkoui/composables/useNotification.ts'
import type { NotificationToastData } from '#valkoui/types/Notification.ts'

defineOptions({ name: 'VkNotificationGroup' })

const props = defineProps<{ placement: NotificationPlacement }>()

const { toasts } = useToastManager()

const gravity = computed(() => props.placement.split('-')[0] as 'top' | 'bottom')
const position = computed(() => props.placement.split('-')[1] as 'left' | 'right')

const toastClasses = (data?: NotificationToastData) => styles({
  color: data?.color,
  variant: data?.variant,
  shape: data?.shape,
  size: data?.size,
  gravity: gravity.value,
  position: position.value
})

const notificationClass = (toast: ToastObject<NotificationToastData>) =>
  toastClasses(toast.data).notification({ class: toast.data?.styleSlots?.notification })

const containerClass = (toast: ToastObject<NotificationToastData>) =>
  toastClasses(toast.data).container({ class: toast.data?.styleSlots?.container })

const contentClass = (toast: ToastObject<NotificationToastData>) =>
  toastClasses(toast.data).content({ class: toast.data?.styleSlots?.content })

const progressbarClass = (toast: ToastObject<NotificationToastData>) =>
  toastClasses(toast.data).progressbar({ class: toast.data?.styleSlots?.progressbar })

const iconClass = (toast: ToastObject<NotificationToastData>) =>
  toastClasses(toast.data).icon({ class: toast.data?.styleSlots?.icon })

// Approximates toastify's per-toast offset: y shifts away from the viewport
// edge (gravity side), x shifts away from the horizontal edge (position side).
const offsetStyle = (data: NotificationToastData) => {
  if (!data.offset) return undefined

  if (typeof data.offset === 'string') {
    return gravity.value === 'top' ? { marginTop: data.offset } : { marginBottom: data.offset }
  }

  const style: Record<string, string> = {}
  const { x, y } = data.offset

  if (y !== undefined) {
    if (gravity.value === 'top') style.marginTop = `${y}px`
    else style.marginBottom = `${y}px`
  }

  if (x !== undefined) {
    if (position.value === 'right') style.marginRight = `${x}px`
    else style.marginLeft = `${x}px`
  }

  return style
}

const progressWidth = (remaining: number, duration: number) => {
  // Non-positive durations (e.g. -1) never dismiss: show a full bar.
  if (!duration || duration <= 0 || !Number.isFinite(duration)) return '100%'
  return `${Math.max(0, (remaining / duration) * 100)}%`
}
</script>

<template>
  <ToastViewport
    :class="toastClasses().viewport({})"
    :data-placement="placement"
  >
    <ToastRoot
      v-for="toast in toasts"
      :key="toast.id"
      :toast="toast"
      :duration="toast.duration"
      :class="notificationClass(toast)"
      :style="offsetStyle(toast.data)"
      @click="toast.data?.click?.($event)"
    >
      <template #default="{ remaining, duration: toastDuration }">
        <div :class="containerClass(toast)">
          <div :class="contentClass(toast)">
            {{ toast.data?.text }}
          </div>
        </div>

        <div
          :class="progressbarClass(toast)"
          :style="{ width: progressWidth(remaining, toastDuration) }"
        />

        <ToastClose
          v-if="toast.data?.close"
          class="cursor-pointer bg-transparent border-0 p-0"
        >
          <i :class="iconClass(toast)" />
        </ToastClose>
      </template>
    </ToastRoot>
  </ToastViewport>
</template>
