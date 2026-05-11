<script setup lang="ts">
import { computed } from 'vue'
import type { EventCalendarProps, CalendarEvent, ViewMode } from '#valkoui/types/EventCalendar'
import styles from '#valkoui/styles/EventCalendar.styles.ts'
import EventDayView from './EventDayView.vue'
import EventWeekView from './EventWeekView.vue'
import EventMonthView from './EventMonthView.vue'

defineOptions({ name: 'VkEventCalendar' })

const props = withDefaults(defineProps<EventCalendarProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  currentView: 'day'
})

const emit = defineEmits<{
  eventClick: [event: CalendarEvent]
  viewChange: [view: ViewMode]
}>()

const s = computed(() => styles(props))
</script>

<template>
  <div :class="s.container({ class: props.styleSlots?.container })">
    <event-day-view
      v-if="currentView === 'day'"
      :adapter="adapter"
      :events="events"
      :model-value="modelValue"
      :color="color"
      :variant="variant"
      :size="size"
      :shape="shape"
      :style-slots="styleSlots"
      @event-click="emit('eventClick', $event)"
    >
      <template v-if="$slots.event" #event="slotProps">
        <slot name="event" v-bind="slotProps" />
      </template>
    </event-day-view>

    <!-- Week and month views not yet implemented -->
    <event-week-view
      v-else-if="currentView === 'week'"
      :adapter="adapter"
      :events="events"
      :model-value="modelValue"
      :show-weekends="showWeekends"
      :color="color"
      :variant="variant"
      :size="size"
      :shape="shape"
      :style-slots="styleSlots"
      @event-click="emit('eventClick', $event)"
    >
      <template v-if="$slots.event" #event="slotProps">
        <slot name="event" v-bind="slotProps" />
      </template>
    </event-week-view>

    <event-month-view
      v-else-if="currentView === 'month'"
      :adapter="adapter"
      :events="events"
      :model-value="modelValue"
      :show-weekends="showWeekends"
      :color="color"
      :variant="variant"
      :size="size"
      :shape="shape"
      :style-slots="styleSlots"
      @event-click="emit('eventClick', $event)"
    >
      <template v-if="$slots.event" #event="slotProps">
        <slot name="event" v-bind="slotProps" />
      </template>
    </event-month-view>
  </div>
</template>
