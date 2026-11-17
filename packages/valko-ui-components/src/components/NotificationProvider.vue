<script setup lang="ts">
import { onMounted, onUnmounted } from 'vue'
import { ToastProvider } from 'reka-ui'
import {
  getToastManager,
  notificationPlacements,
  setNotificationProviderMounted
} from '#valkoui/composables/useNotification.ts'
import VkNotificationGroup from './NotificationGroup.vue'

defineOptions({ name: 'VkNotificationProvider' })

onMounted(() => setNotificationProviderMounted(true))
onUnmounted(() => setNotificationProviderMounted(false))
</script>

<template>
  <ToastProvider
    v-for="placement in notificationPlacements"
    :key="placement"
    :toast-manager="getToastManager(placement)"
  >
    <VkNotificationGroup :placement="placement" />
  </ToastProvider>
  <slot />
</template>
