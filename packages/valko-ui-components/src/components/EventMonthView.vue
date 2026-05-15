<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import type { ViewProps, CalendarEvent, MonthDay, EventDropPayload } from '#valkoui/types/EventCalendar'
import styles from '#valkoui/styles/EventCalendar.styles.ts'
import VkPopover from './Popover.vue'
import useEventCalendarDrag from '#valkoui/composables/useEventCalendarDrag'

defineOptions({ name: 'VkEventMonthView' })

const props = withDefaults(defineProps<ViewProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  showWeekends: true
})

const emit = defineEmits(['eventClick', 'eventDrop'])

const s = computed(() => styles(props))

const drag = useEventCalendarDrag(
  props.adapter,
  () => props.draggable === true,
  (payload: EventDropPayload) => { emit('eventDrop', payload) }
)

const now = ref(new Date())
let timerId: ReturnType<typeof setInterval> | null = null
const expandedDay = ref<string | null>(null)
const MAX_VISIBLE_EVENTS = 3

const onEventClick = (event: CalendarEvent) => {
  emit('eventClick', event)
}

const isDragTarget = (day: Date): boolean =>
  drag.isDragging.value && drag.targetDay.value !== null && props.adapter.isSameDay(day, drag.targetDay.value)

const toggleMorePopover = (day: Date) => {
  const key = day.toISOString()
  expandedDay.value = expandedDay.value === key ? null : key
}

const closeMorePopover = () => {
  expandedDay.value = null
}

const isMoreOpen = (day: Date): boolean =>
  expandedDay.value === day.toISOString()

const isWeekendDay = (dayIdx: number): boolean => dayIdx >= 5

const allDayCount = 7

const getDayCellClass = (day: MonthDay, dayIdx: number, weekIdx: number): string => {
  const isLastCol = dayIdx === allDayCount - 1
  const isLastRow = weekIdx === fullMonthGrid.value.length - 1

  let baseClass: string
  if (!day.isCurrentMonth) {
    baseClass = s.value.monthDayCellOutside({ class: props.styleSlots?.monthDayCellOutside })
  } else if (day.isToday) {
    baseClass = s.value.monthDayCellToday({ class: props.styleSlots?.monthDayCellToday })
  } else {
    baseClass = s.value.monthDayCell({ class: props.styleSlots?.monthDayCell })
  }

  const overrides: string[] = []
  if (isLastCol) overrides.push('!border-r-0')
  if (isLastRow) overrides.push('!border-b-0')

  return overrides.length ? `${baseClass} ${overrides.join(' ')}` : baseClass
}

const WEEKDAY_NAMES_FULL = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const currentDate = computed(() => props.modelValue ? new Date(props.modelValue) : new Date())

const weekdayHeaders = computed(() => WEEKDAY_NAMES_FULL)

const fullMonthGrid = computed(() =>
  props.adapter.getMonthGrid(currentDate.value, now.value, true)
)

const gridColumns = computed(() =>
  Array.from({ length: 7 }, (_, i) =>
    (!props.showWeekends && isWeekendDay(i)) ? '0fr' : '1fr'
  ).join(' ')
)

onMounted(() => {
  timerId = setInterval(() => { now.value = new Date() }, 60_000)
})

onUnmounted(() => {
  if (timerId !== null) clearInterval(timerId)
})
</script>

<template>
  <div
    :class="[s.monthViewContainer({ class: styleSlots?.monthViewContainer }), 'transition-[grid-template-columns] duration-300 ease-in-out']"
    :style="{
      gridTemplateColumns: gridColumns,
      gridTemplateRows: `auto repeat(${fullMonthGrid.length}, 1fr)`
    }"
    role="grid"
    aria-label="Month view calendar"
  >
    <span
      v-for="(name, idx) in weekdayHeaders"
      :key="'weekday-' + name"
      :class="[
        s.monthWeekdayHeader({ class: styleSlots?.monthWeekdayHeader }),
        idx < allDayCount - 1 ? 'border-r' : '',
        !showWeekends && isWeekendDay(idx) ? 'overflow-hidden opacity-0 min-w-0 !px-0 !border-0' : ''
      ]"
      :style="{ gridColumn: idx + 1, gridRow: 1 }"
    >
      {{ name }}
    </span>

    <template
      v-for="(week, weekIdx) in fullMonthGrid"
      :key="'week-' + weekIdx"
    >
      <div
        v-for="(day, dayIdx) in week"
        :key="'day-' + day.date.toISOString()"
        :class="[
          getDayCellClass(day, dayIdx, weekIdx),
          isDragTarget(day.date) ? 'ring-2 ring-inset ring-primary/30' : '',
          !showWeekends && isWeekendDay(dayIdx) ? 'overflow-hidden opacity-0 min-w-0 !p-0 !border-0 !min-h-0' : ''
        ]"
        :data-calendar-day="day.date.toISOString()"
        :style="{ gridColumn: dayIdx + 1, gridRow: weekIdx + 2 }"
        :aria-label="day.date.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })"
        :aria-current="day.isToday ? 'date' : undefined"
        @dragover.prevent="drag.handleMonthCellDragOver($event, day.date)"
        @drop="drag.handleMonthCellDrop($event, day.date)"
        @dragleave="drag.handleDragLeave()"
      >
        <span :class="s.monthDayNumber({ class: styleSlots?.monthDayNumber })">
          {{ day.date.getDate() }}
        </span>

        <template
          v-for="(event, eventIdx) in adapter.getEventsForDay(events, day.date)"
          :key="event.id"
        >
          <div
            v-if="eventIdx < MAX_VISIBLE_EVENTS"
            :class="[s.monthEvent({ class: styleSlots?.monthEvent }), draggable ? (drag.isDragging.value ? 'cursor-grabbing' : 'cursor-grab') : '']"
            :style="drag.draggedEventId.value === event.id ? { opacity: '0.3' } : undefined"
            :data-color="event.color || color"
            :aria-label="`${event.title || 'Event'}, ${event.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`"
            :draggable="draggable ? 'true' : undefined"
            role="button"
            tabindex="0"
            @dragstart="drag.handleDragStart(event, $event, day.date)"
            @dragend="drag.handleDragEnd()"
            @click.stop="onEventClick(event)"
            @keydown.enter="onEventClick(event)"
            @keydown.space.prevent="onEventClick(event)"
          >
            <slot
              name="event"
              :event="event"
            >
              {{ event.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }} {{ event.title }}
            </slot>
          </div>
        </template>

        <vk-popover
          v-if="adapter.getEventsForDay(events, day.date).length > MAX_VISIBLE_EVENTS"
          :is-open="isMoreOpen(day.date)"
          placement="bottom"
          :shape="shape"
          @close="closeMorePopover"
        >
          <span
            :class="s.moreIndicator({ class: styleSlots?.moreIndicator })"
            role="button"
            tabindex="0"
            @click.stop="toggleMorePopover(day.date)"
            @keydown.enter.stop="toggleMorePopover(day.date)"
            @keydown.space.prevent.stop="toggleMorePopover(day.date)"
          >
            +{{ adapter.getEventsForDay(events, day.date).length - MAX_VISIBLE_EVENTS }} more
          </span>

          <template #popover-content>
            <slot
              name="more-events"
              :day="day"
              :events="adapter.getEventsForDay(events, day.date)"
            >
              <div class="flex flex-col gap-1 p-2 min-w-48 max-h-64 overflow-y-auto">
                <div
                  v-for="event in adapter.getEventsForDay(events, day.date)"
                  :key="event.id"
                  :class="s.monthEvent({ class: styleSlots?.monthEvent })"
                  :data-color="event.color || color"
                  role="button"
                  tabindex="0"
                  @click.stop="onEventClick(event)"
                  @keydown.enter="onEventClick(event)"
                  @keydown.space.prevent="onEventClick(event)"
                >
                  {{ event.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }} {{ event.title }}
                </div>
              </div>
            </slot>
          </template>
        </vk-popover>
      </div>
    </template>
  </div>
</template>
