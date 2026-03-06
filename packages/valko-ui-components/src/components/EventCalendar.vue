<script setup lang="ts">
import { computed } from 'vue'
import type { EventCalendarProps } from '#valkoui/types/EventCalendar'
import styles from '#valkoui/styles/EventCalendar.styles.ts'
import EventDayView from './EventDayView.vue'

defineOptions({ name: 'VkEventCalendar' })

const props = withDefaults(defineProps<EventCalendarProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  currentView: 'day'
})

const emit = defineEmits(['eventClick'])

const s = computed(() => styles(props))
</script>

<template>
  <div :class="s.container({ class: styleSlots?.container })">
    <!-- <header-component/>-->

    <event-day-view
      v-if="currentView === 'day'"
      v-bind="props"
      @event-click="emit('eventClick', $event)"
    />
  </div>
</template>
