<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import type { WeekViewProps, CalendarEvent, Timezone } from '#valkoui/types/EventCalendar'
import styles from '#valkoui/styles/EventCalendar.styles.ts'
import VkTooltip from './Tooltip.vue'

defineOptions({ name: 'VkEventWeekView' })

const props = withDefaults(defineProps<WeekViewProps>(), {
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

const hourRange = computed(() => props.adapter.hourRange)
const hours = computed(() => {
  const [start, end] = hourRange.value
  return Array.from({ length: end - start + 1 }, (_, i) => start + i)
})

const tzCount = computed(() => 1 + (props.adapter.timezones.extras?.length || 0))

const hoveredEventId = ref<string | null>(null)

// Current time marker
const now = ref(new Date())
let timerId: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  timerId = setInterval(() => { now.value = new Date() }, 60_000)
})

onUnmounted(() => {
  if (timerId !== null) clearInterval(timerId)
})

const currentTimePosition = computed(() => {
  const [start, end] = hourRange.value
  const totalHours = end - start + 1
  const currentHour = now.value.getHours() + now.value.getMinutes() / 60
  return ((currentHour - start) / totalHours) * 100
})

const isCurrentTimeVisible = computed(() => {
  const pos = currentTimePosition.value
  return pos >= 0 && pos <= 100
})

// Week day helpers
const getMonday = (date: Date): Date => {
  const d = new Date(date)
  const day = d.getDay()
  const diff = day === 0 ? -6 : 1 - day
  d.setDate(d.getDate() + diff)
  d.setHours(0, 0, 0, 0)
  return d
}

const isSameDay = (a: Date, b: Date): boolean =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate()

const weekDays = computed(() => {
  const reference = props.modelValue ? new Date(props.modelValue) : new Date()
  const monday = getMonday(reference)
  const dayCount = props.showWeekends === false ? 5 : 7
  return Array.from({ length: dayCount }, (_, i) => {
    const d = new Date(monday)
    d.setDate(monday.getDate() + i)
    return d
  })
})

const WEEKDAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

const formatDayHeader = (date: Date): string =>
  `${WEEKDAY_NAMES[date.getDay()]} ${date.getDate()}`

const isToday = (date: Date): boolean => isSameDay(date, now.value)

const getEventsForDay = (day: Date): CalendarEvent[] =>
  props.events.filter(event => isSameDay(event.start, day))

// Pre-compute event placements per day, keyed by day index then event id
const eventPlacementsPerDay = computed(() => {
  const [start, end] = hourRange.value
  const totalHours = end - start + 1

  return weekDays.value.map(day => {
    const dayEvents = getEventsForDay(day)
    const placements = new Map<string, {
      topPercent: number;
      heightPercent: number;
      leftPercent: number;
      widthPercent: number;
      zIndex: number;
      isOverlapping: boolean;
    }>()

    for (const event of dayEvents) {
      const eventStartHour = event.start.getHours() + event.start.getMinutes() / 60
      const eventEndHour = event.end.getHours() + event.end.getMinutes() / 60

      // Clamp to visible range
      const clampedStart = Math.max(eventStartHour, start)
      const clampedEnd = Math.min(eventEndHour, end + 1)

      if (clampedStart >= clampedEnd) continue

      const topPercent = ((clampedStart - start) / totalHours) * 100
      const heightPercent = ((clampedEnd - clampedStart) / totalHours) * 100

      // Calculate overlap column layout within this day's events
      const overlapping = dayEvents
        .filter(e => e.start < event.end && e.end > event.start)
        .sort((a, b) => a.start.getTime() - b.start.getTime())

      const offsetIdx = overlapping.findIndex(e => e.id === event.id)
      const isOverlapping = overlapping.length > 1

      placements.set(event.id, {
        topPercent,
        heightPercent,
        leftPercent: (offsetIdx / overlapping.length) * 100,
        widthPercent: (1 / overlapping.length) * 100,
        zIndex: 10 + offsetIdx,
        isOverlapping
      })
    }

    return placements
  })
})

const getEventStyle = (event: CalendarEvent, dayIdx: number): Record<string, string | number | undefined> => {
  const placement = eventPlacementsPerDay.value[dayIdx]?.get(event.id)
  if (!placement) return {}

  const isHovered = hoveredEventId.value === event.id

  return {
    top: `${placement.topPercent}%`,
    height: `${placement.heightPercent}%`,
    left: `${placement.leftPercent}%`,
    width: `${placement.widthPercent}%`,
    zIndex: isHovered ? 99 : placement.zIndex,
    transform: isHovered ? 'translateY(-6px)' : undefined,
    boxShadow: isHovered ? '0 8px 25px rgba(0,0,0,0.15)' : undefined
  }
}

const onEventClick = (event: CalendarEvent) => {
  emit('eventClick', event)
}

const getTimezoneLabel = (tz: Timezone): string => {
  if (tz.abbreviation) return tz.abbreviation
  const city = tz.id.split('/').pop()?.replace(/_/g, ' ') || tz.id
  return city.split(' ').map(w => w[0]?.toUpperCase()).join('')
}

const getTimezoneFullName = (tz: Timezone): string => {
  return tz.name || tz.id.split('/').pop()?.replace(/_/g, ' ') || tz.id
}
</script>

<template>
  <div
    :class="s.weekViewContainer({ class: styleSlots?.weekViewContainer })"
    :style="{
      gridTemplateColumns: `repeat(${tzCount}, minmax(4rem, auto)) repeat(${weekDays.length}, 1fr)`,
      gridTemplateRows: `auto repeat(${hours.length}, minmax(2.5rem, 1fr))`
    }"
    role="grid"
    :aria-label="placeholder || 'Week view calendar'"
  >
    <!-- Row 1: Extra timezone headers -->
    <span
      v-for="(tz, tzIdx) in adapter.timezones.extras"
      :key="'tz-header-' + tz.id"
      :class="s.timezoneHeader({ class: styleSlots?.timezoneHeader })"
      :style="{ gridColumn: tzIdx + 1, gridRow: 1 }"
    >
      <vk-tooltip :content="getTimezoneFullName(tz)" placement="top" size="sm">
        {{ getTimezoneLabel(tz) }}
      </vk-tooltip>
    </span>

    <!-- Row 1: Locale timezone header -->
    <span
      :class="s.timezoneHeader({ class: styleSlots?.timezoneHeader })"
      :style="{ gridColumn: tzCount, gridRow: 1 }"
    >
      <vk-tooltip :content="getTimezoneFullName(adapter.timezones.locale)" placement="top" size="sm">
        {{ getTimezoneLabel(adapter.timezones.locale) }}
      </vk-tooltip>
    </span>

    <!-- Row 1: Day column headers -->
    <span
      v-for="(day, dayIdx) in weekDays"
      :key="'day-header-' + day.toISOString()"
      :class="[
        isToday(day)
          ? s.weekDayHeaderToday({ class: styleSlots?.weekDayHeaderToday })
          : s.weekDayHeader({ class: styleSlots?.weekDayHeader }),
        dayIdx === weekDays.length - 1 ? '!border-r-0' : ''
      ]"
      :style="{ gridColumn: tzCount + dayIdx + 1, gridRow: 1 }"
      :aria-label="day.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })"
      :aria-current="isToday(day) ? 'date' : undefined"
    >
      {{ formatDayHeader(day) }}
    </span>

    <!-- Rows 2+: Extra timezone hour labels -->
    <template
      v-for="(tz, tzIdx) in adapter.timezones.extras"
      :key="'tz-hours-' + tz.id"
    >
      <span
        v-for="(displayHour, idx) in tz.display"
        :key="tz.id + '-' + idx"
        :class="s.timezoneHourLabel({ class: styleSlots?.timezoneHourLabel })"
        :style="{ gridColumn: tzIdx + 1, gridRow: idx + 2 }"
      >
        {{ displayHour }}:00
      </span>
    </template>

    <!-- Rows 2+: Locale timezone hour labels -->
    <span
      v-for="(displayHour, idx) in adapter.timezones.locale.display"
      :key="'locale-' + idx"
      :class="s.timezoneHourLabel({ class: styleSlots?.timezoneHourLabel })"
      :style="{ gridColumn: tzCount, gridRow: idx + 2 }"
    >
      {{ displayHour }}:00
    </span>

    <!-- Rows 2+: Hour cells and events area per day column -->
    <template
      v-for="(day, dayIdx) in weekDays"
      :key="'day-col-' + day.toISOString()"
    >
      <!-- Hour grid lines for this day column -->
      <div
        v-for="(hour, idx) in hours"
        :key="'hour-cell-' + dayIdx + '-' + hour"
        :class="[s.hourCell({ class: styleSlots?.hourCell }), dayIdx < weekDays.length - 1 ? 'border-r border-outlined' : '']"
        :style="{ gridColumn: tzCount + dayIdx + 1, gridRow: idx + 2 }"
      />

      <!-- Events overlay area spanning all hour rows for this day column -->
      <div
        :class="s.eventsArea({ class: styleSlots?.eventsArea })"
        :style="{ gridColumn: tzCount + dayIdx + 1, gridRow: `2 / ${hours.length + 2}` }"
        :aria-label="`Events for ${day.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}`"
      >
        <!-- Current time marker — only shown in today's column -->
        <div
          v-if="isToday(day) && isCurrentTimeVisible"
          :class="s.currentTimeMarker({ class: styleSlots?.currentTimeMarker })"
          :style="{ top: currentTimePosition + '%' }"
          :data-color="color"
          aria-hidden="true"
        >
          <span
            :class="s.currentTimeDot({ class: styleSlots?.currentTimeDot })"
            :data-color="color"
          />
        </div>

        <!-- Event items for this day -->
        <template
          v-for="event in getEventsForDay(day)"
          :key="event.id"
        >
          <slot
            name="event"
            :event="event"
            :style="getEventStyle(event, dayIdx)"
          >
            <div
              :class="s.event({ class: styleSlots?.event })"
              :data-color="event.color || color"
              :style="getEventStyle(event, dayIdx)"
              :aria-label="`${event.title || 'Event'}, ${event.start.toLocaleTimeString()} to ${event.end.toLocaleTimeString()}`"
              role="button"
              tabindex="0"
              @mouseenter="hoveredEventId = event.id"
              @mouseleave="hoveredEventId = null"
              @click="onEventClick(event)"
              @keydown.enter="onEventClick(event)"
              @keydown.space.prevent="onEventClick(event)"
            >
              {{ event.title }} - {{ event.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }} - {{ event.end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }}
            </div>
          </slot>
        </template>
      </div>
    </template>
  </div>
</template>
