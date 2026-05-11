<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import type { MonthViewProps, CalendarEvent } from '#valkoui/types/EventCalendar'
import styles from '#valkoui/styles/EventCalendar.styles.ts'

defineOptions({ name: 'VkEventMonthView' })

const props = withDefaults(defineProps<MonthViewProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  showWeekends: true
})

const emit = defineEmits<{
  eventClick: [event: CalendarEvent]
}>()

const s = computed(() => styles(props))

const now = ref(new Date())
let timerId: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  timerId = setInterval(() => { now.value = new Date() }, 60_000)
})

onUnmounted(() => {
  if (timerId !== null) clearInterval(timerId)
})

const isSameDay = (a: Date, b: Date): boolean =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate()

const currentDate = computed(() => props.modelValue ? new Date(props.modelValue) : new Date())

const WEEKDAY_NAMES_FULL = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const weekdayHeaders = computed(() => {
  if (props.showWeekends === false) return WEEKDAY_NAMES_FULL.slice(0, 5)
  return WEEKDAY_NAMES_FULL
})

// Build a grid of weeks. Each week is an array of Date objects (Mon-Sun or Mon-Fri).
// Includes days from previous/next months to fill the grid.
interface MonthDay {
  date: Date;
  isCurrentMonth: boolean;
  isToday: boolean;
}

const monthGrid = computed((): MonthDay[][] => {
  const ref = currentDate.value
  const year = ref.getFullYear()
  const month = ref.getMonth()

  // First day of the month
  const firstOfMonth = new Date(year, month, 1)
  // Day of week: 0=Sun, 1=Mon, ..., 6=Sat
  // Convert to Mon=0 based: (day + 6) % 7
  const firstDayOfWeek = (firstOfMonth.getDay() + 6) % 7

  // Start from the Monday of the week containing the 1st
  const gridStart = new Date(firstOfMonth)
  gridStart.setDate(gridStart.getDate() - firstDayOfWeek)

  // Last day of the month
  const lastOfMonth = new Date(year, month + 1, 0)
  const lastDayOfWeek = (lastOfMonth.getDay() + 6) % 7

  // End at the Sunday of the week containing the last day
  const gridEnd = new Date(lastOfMonth)
  gridEnd.setDate(gridEnd.getDate() + (6 - lastDayOfWeek))

  // Build weeks
  const weeks: MonthDay[][] = []
  const cursor = new Date(gridStart)

  while (cursor <= gridEnd) {
    const week: MonthDay[] = []
    for (let i = 0; i < 7; i++) {
      const date = new Date(cursor)
      const isCurrentMonth = date.getMonth() === month && date.getFullYear() === year
      const isToday = isSameDay(date, now.value)

      // If showWeekends is false, skip Sat (i=5) and Sun (i=6)
      if (props.showWeekends !== false || i < 5) {
        week.push({ date, isCurrentMonth, isToday })
      }

      cursor.setDate(cursor.getDate() + 1)
    }
    weeks.push(week)
  }

  return weeks
})

const dayCount = computed(() => props.showWeekends === false ? 5 : 7)

const getEventsForDay = (day: Date): CalendarEvent[] =>
  props.events
    .filter(event => isSameDay(event.start, day))
    .sort((a, b) => a.start.getTime() - b.start.getTime())

const MAX_VISIBLE_EVENTS = 3

const getDayCellClass = (day: MonthDay, dayIdx: number, weekIdx: number): string => {
  const isLastCol = dayIdx === dayCount.value - 1
  const isLastRow = weekIdx === monthGrid.value.length - 1

  let baseClass: string
  if (!day.isCurrentMonth) {
    baseClass = s.value.monthDayCellOutside({ class: props.styleSlots?.monthDayCellOutside })
  } else if (day.isToday) {
    baseClass = s.value.monthDayCellToday({ class: props.styleSlots?.monthDayCellToday })
  } else {
    baseClass = s.value.monthDayCell({ class: props.styleSlots?.monthDayCell })
  }

  // Remove right border on last column, bottom border on last row
  const overrides: string[] = []
  if (isLastCol) overrides.push('!border-r-0')
  if (isLastRow) overrides.push('!border-b-0')

  return overrides.length ? `${baseClass} ${overrides.join(' ')}` : baseClass
}

const onEventClick = (event: CalendarEvent) => {
  emit('eventClick', event)
}
</script>

<template>
  <div
    :class="s.monthViewContainer({ class: styleSlots?.monthViewContainer })"
    :style="{
      gridTemplateColumns: `repeat(${dayCount}, 1fr)`,
      gridTemplateRows: `auto repeat(${monthGrid.length}, 1fr)`
    }"
    role="grid"
    :aria-label="placeholder || 'Month view calendar'"
  >
    <!-- Row 1: Weekday headers -->
    <span
      v-for="(name, idx) in weekdayHeaders"
      :key="'weekday-' + name"
      :class="[s.monthWeekdayHeader({ class: styleSlots?.monthWeekdayHeader }), idx < dayCount - 1 ? 'border-r' : '']"
      :style="{ gridColumn: idx + 1, gridRow: 1 }"
    >
      {{ name }}
    </span>

    <!-- Rows 2+: Day cells -->
    <template
      v-for="(week, weekIdx) in monthGrid"
      :key="'week-' + weekIdx"
    >
      <div
        v-for="(day, dayIdx) in week"
        :key="'day-' + day.date.toISOString()"
        :class="getDayCellClass(day, dayIdx, weekIdx)"
        :style="{ gridColumn: dayIdx + 1, gridRow: weekIdx + 2 }"
        :aria-label="day.date.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })"
        :aria-current="day.isToday ? 'date' : undefined"
      >
        <!-- Day number -->
        <span :class="s.monthDayNumber({ class: styleSlots?.monthDayNumber })">
          {{ day.date.getDate() }}
        </span>

        <!-- Events for this day (max 3 visible) -->
        <template
          v-for="(event, eventIdx) in getEventsForDay(day.date)"
          :key="event.id"
        >
          <div
            v-if="eventIdx < MAX_VISIBLE_EVENTS"
            :class="s.monthEvent({ class: styleSlots?.monthEvent })"
            :data-color="event.color || color"
            :aria-label="`${event.title || 'Event'}, ${event.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`"
            role="button"
            tabindex="0"
            @click.stop="onEventClick(event)"
            @keydown.enter="onEventClick(event)"
            @keydown.space.prevent="onEventClick(event)"
          >
            {{ event.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }} {{ event.title }}
          </div>
        </template>

        <!-- "+N more" indicator -->
        <span
          v-if="getEventsForDay(day.date).length > MAX_VISIBLE_EVENTS"
          class="text-xs text-on-surface/60 cursor-default"
        >
          +{{ getEventsForDay(day.date).length - MAX_VISIBLE_EVENTS }} more
        </span>
      </div>
    </template>
  </div>
</template>
