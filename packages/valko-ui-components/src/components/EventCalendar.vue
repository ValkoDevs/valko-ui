<script setup lang="ts">
import { computed, ref, watch } from 'vue'
import type { EventCalendarProps, ViewMode } from '#valkoui/types/EventCalendar'
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
  hideHeader: false,
  showWeekends: true,
  draggable: true,
  resizable: true
})

const emit = defineEmits(['eventClick', 'eventDrop', 'eventResize', 'update:currentView', 'update:modelValue', 'previousClick', 'nextClick', 'todayClick'])

const s = computed(() => styles(props))

const internalView = ref<ViewMode>(props.currentView ?? 'day')
const internalDate = ref<Date>(props.modelValue ? new Date(props.modelValue) : new Date())

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
  setDate(props.adapter.getPreviousDate(internalDate.value, internalView.value))
  emit('previousClick')
}

const goToNext = () => {
  setDate(props.adapter.getNextDate(internalDate.value, internalView.value))
  emit('nextClick')
}

watch(() => props.currentView, (v) => { if (v) internalView.value = v })
watch(() => props.modelValue, (v) => { if (v) internalDate.value = new Date(v) })
</script>

<template>
  <div :class="s.container({ class: props.styleSlots?.container })">
    <Transition
      enter-active-class="transition-all duration-300 ease-out overflow-hidden"
      enter-from-class="max-h-0 opacity-0"
      enter-to-class="max-h-16 opacity-100"
      leave-active-class="transition-all duration-200 ease-in overflow-hidden"
      leave-from-class="max-h-16 opacity-100"
      leave-to-class="max-h-0 opacity-0"
    >
      <event-calendar-header
        v-if="!hideHeader"
        :model-value="internalDate"
        :current-view="internalView"
        :show-weekends="showWeekends"
        :adapter="adapter"
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
    </Transition>

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
      :draggable="draggable"
      :resizable="resizable"
      @event-click="emit('eventClick', $event)"
      @event-drop="emit('eventDrop', $event)"
      @event-resize="emit('eventResize', $event)"
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
      :draggable="draggable"
      :resizable="resizable"
      @event-click="emit('eventClick', $event)"
      @event-drop="emit('eventDrop', $event)"
      @event-resize="emit('eventResize', $event)"
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
      :draggable="draggable"
      @event-click="emit('eventClick', $event)"
      @event-drop="emit('eventDrop', $event)"
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
      <template
        v-if="$slots['more-events']"
        #more-events="slotProps"
      >
        <slot
          name="more-events"
          v-bind="slotProps"
        />
      </template>
    </event-month-view>
  </div>
</template>
