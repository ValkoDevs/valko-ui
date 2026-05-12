<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { EventCalendarProps, CalendarEvent, ViewMode } from '#valkoui/types/EventCalendar'
import styles from '#valkoui/styles/EventCalendar.styles.ts'
import EventCalendarHeader from './EventCalendarHeader.vue'
import EventDayView from './EventDayView.vue'
import EventWeekView from './EventWeekView.vue'
import EventMonthView from './EventMonthView.vue'

defineOptions({ name: 'VkEventCalendar' })

const props = withDefaults(defineProps<EventCalendarProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  currentView: 'day',
  hideHeader: false
})

const emit = defineEmits<{
  eventClick: [event: CalendarEvent]
  'update:currentView': [view: ViewMode]
  'update:modelValue': [date: Date]
  previousClick: []
  nextClick: []
  todayClick: []
}>()

const s = computed(() => styles(props))

// Internal state synced with props via v-model pattern
const internalView = ref<ViewMode>(props.currentView ?? 'day')
const internalDate = ref<Date>(props.modelValue ? new Date(props.modelValue) : new Date())

watch(() => props.currentView, (v) => { if (v) internalView.value = v })
watch(() => props.modelValue, (v) => { if (v) internalDate.value = new Date(v) })

const setView = (view: ViewMode) => {
  internalView.value = view
  emit('update:currentView', view)
}

const setDate = (date: Date) => {
  internalDate.value = date
  emit('update:modelValue', date)
}

const goToToday = () => {
  setDate(new Date())
  emit('todayClick')
}

const goToPrevious = () => {
  const d = new Date(internalDate.value)
  if (internalView.value === 'day') {
    d.setDate(d.getDate() - 1)
  } else if (internalView.value === 'week') {
    d.setDate(d.getDate() - 7)
  } else {
    d.setMonth(d.getMonth() - 1)
  }
  setDate(d)
  emit('previousClick')
}

const goToNext = () => {
  const d = new Date(internalDate.value)
  if (internalView.value === 'day') {
    d.setDate(d.getDate() + 1)
  } else if (internalView.value === 'week') {
    d.setDate(d.getDate() + 7)
  } else {
    d.setMonth(d.getMonth() + 1)
  }
  setDate(d)
  emit('nextClick')
}
</script>

<template>
  <div :class="s.container({ class: props.styleSlots?.container })">
    <event-calendar-header
      v-if="!hideHeader"
      :model-value="internalDate"
      :current-view="internalView"
      :show-weekends="showWeekends"
      :color="color"
      :variant="variant"
      :size="size"
      :shape="shape"
      :style-slots="styleSlots"
      @previous-click="goToPrevious()"
      @next-click="goToNext()"
      @today-click="goToToday()"
      @view-change="setView($event)"
    >
      <template
        v-if="$slots.header"
        #header="slotProps"
      >
        <slot
          name="header"
          v-bind="slotProps"
        />
      </template>
    </event-calendar-header>

    <event-day-view
      v-if="internalView === 'day'"
      :adapter="adapter"
      :events="events"
      :model-value="internalDate"
      :color="color"
      :variant="variant"
      :size="size"
      :shape="shape"
      :style-slots="styleSlots"
      @event-click="emit('eventClick', $event)"
    >
      <template
        v-if="$slots.event"
        #event="slotProps"
      >
        <slot
          name="event"
          v-bind="slotProps"
        />
      </template>
    </event-day-view>

    <event-week-view
      v-else-if="internalView === 'week'"
      :adapter="adapter"
      :events="events"
      :model-value="internalDate"
      :show-weekends="showWeekends"
      :color="color"
      :variant="variant"
      :size="size"
      :shape="shape"
      :style-slots="styleSlots"
      @event-click="emit('eventClick', $event)"
    >
      <template
        v-if="$slots.event"
        #event="slotProps"
      >
        <slot
          name="event"
          v-bind="slotProps"
        />
      </template>
    </event-week-view>

    <event-month-view
      v-else-if="internalView === 'month'"
      :adapter="adapter"
      :events="events"
      :model-value="internalDate"
      :show-weekends="showWeekends"
      :color="color"
      :variant="variant"
      :size="size"
      :shape="shape"
      :style-slots="styleSlots"
      @event-click="emit('eventClick', $event)"
    >
      <template
        v-if="$slots.event"
        #event="slotProps"
      >
        <slot
          name="event"
          v-bind="slotProps"
        />
      </template>
    </event-month-view>
  </div>
</template>
