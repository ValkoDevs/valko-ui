<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'
import type { ViewProps, CalendarEvent, EventDropPayload, EventResizePayload } from '#valkoui/types/EventCalendar'
import styles from '#valkoui/styles/EventCalendar.styles.ts'
import VkTooltip from './Tooltip.vue'
import useEventCalendarDrag from '#valkoui/composables/useEventCalendarDrag'
import useEventCalendarResize from '#valkoui/composables/useEventCalendarResize'

defineOptions({ name: 'VkEventWeekView' })

const props = withDefaults(defineProps<ViewProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  showWeekends: true
})

const emit = defineEmits(['eventClick', 'eventDrop', 'eventResize'])

const s = computed(() => styles(props))

const hoveredEventId = ref<string | null>(null)
const now = ref(new Date())
let timerId: ReturnType<typeof setInterval> | null = null

const drag = useEventCalendarDrag(
  props.adapter,
  () => props.draggable === true,
  (payload: EventDropPayload) => { emit('eventDrop', payload) }
)

const resize = useEventCalendarResize(
  props.adapter,
  () => props.resizable === true,
  (payload: EventResizePayload) => { emit('eventResize', payload) }
)

const eventsAreaRefs = ref<Map<number, HTMLElement>>(new Map())
const setEventsAreaRef = (dayIdx: number, el: HTMLElement | null) => {
  if (el) eventsAreaRefs.value.set(dayIdx, el)
  else eventsAreaRefs.value.delete(dayIdx)
}

const onEventClick = (event: CalendarEvent) => {
  emit('eventClick', event)
}

const getEventStyle = (event: CalendarEvent, dayIdx: number): Record<string, string | number | undefined> => {
  const placement = eventPlacementsPerDay.value[dayIdx]?.get(event.id)
  if (!placement) return {}

  const isHovered = hoveredEventId.value === event.id

  const edgePx = 8
  const indentPx = 6
  const overlapIndex = placement.zIndex - 1
  const leftPx = edgePx + overlapIndex * indentPx

  const result: Record<string, string | number | undefined> = {
    top: `${placement.topPercent}%`,
    height: `${placement.heightPercent}%`,
    left: `${leftPx}px`,
    right: `${edgePx}px`,
    zIndex: isHovered ? 99 : placement.zIndex,
    transform: isHovered ? 'translateY(-6px)' : undefined,
    boxShadow: isHovered ? '0 8px 25px rgba(0,0,0,0.15)' : undefined
  }

  if (drag.draggedEventId.value === event.id) {
    return { ...result, opacity: '0.3', transition: 'none' }
  }

  if (resize.resizingEventId.value === event.id) {
    return { ...result, opacity: '0.3', transition: 'none' }
  }

  return result
}

const hours = computed(() => props.adapter.getHours())

const tzCount = computed(() => 1 + (props.adapter.timezones.extras?.length || 0))

const allWeekDays = computed(() =>
  props.adapter.getWeekDays(
    props.modelValue ? new Date(props.modelValue) : new Date(),
    true
  )
)

const isWeekendDay = (dayIdx: number): boolean => dayIdx >= 5

const gridColumns = computed(() => {
  const tzCols = `repeat(${tzCount.value}, minmax(4rem, auto))`
  const dayCols = allWeekDays.value.map((_, i) =>
    (!props.showWeekends && isWeekendDay(i)) ? '0fr' : '1fr'
  ).join(' ')
  return `${tzCols} ${dayCols}`
})

const eventPlacementsPerDay = computed(() =>
  allWeekDays.value.map(day => {
    const dayEvents = props.adapter.getEventsForDay(props.events, day)
    return props.adapter.getStackedEventPlacements(dayEvents)
  })
)

const currentTimePosition = computed(() =>
  props.adapter.getCurrentTimePosition(now.value)
)

const isCurrentTimeVisible = computed(() =>
  props.adapter.isCurrentTimeInRange(now.value)
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
    :class="[s.weekViewContainer({ class: styleSlots?.weekViewContainer }), 'transition-[grid-template-columns] duration-300 ease-in-out']"
    :style="{
      gridTemplateColumns: gridColumns,
      gridTemplateRows: `auto repeat(${hours.length}, minmax(2.5rem, 1fr))`
    }"
    role="grid"
    aria-label="Week view calendar"
  >
    <span
      v-for="(tz, tzIdx) in adapter.timezones.extras"
      :key="'tz-header-' + tz.id"
      :class="s.timezoneHeader({ class: styleSlots?.timezoneHeader })"
      :style="{ gridColumn: tzIdx + 1, gridRow: 1 }"
    >
      <vk-tooltip
        :content="adapter.getTimezoneFullName(tz)"
        :size
      >
        {{ adapter.getTimezoneLabel(tz) }}
      </vk-tooltip>
    </span>

    <span
      :class="s.timezoneHeader({ class: styleSlots?.timezoneHeader })"
      :style="{ gridColumn: tzCount, gridRow: 1 }"
    >
      <vk-tooltip
        :content="adapter.getTimezoneFullName(adapter.timezones.locale)"
        :size
      >
        {{ adapter.getTimezoneLabel(adapter.timezones.locale) }}
      </vk-tooltip>
    </span>

    <span
      v-for="(day, dayIdx) in allWeekDays"
      :key="'day-header-' + day.toISOString()"
      :class="[
        adapter.isToday(day, now)
          ? s.weekDayHeaderToday({ class: styleSlots?.weekDayHeaderToday })
          : s.weekDayHeader({ class: styleSlots?.weekDayHeader }),
        dayIdx === allWeekDays.length - 1 ? 'border-r-0' : '',
        !showWeekends && isWeekendDay(dayIdx) ? 'overflow-hidden opacity-0 min-w-0 !px-0 !border-0' : ''
      ]"
      :style="{ gridColumn: tzCount + dayIdx + 1, gridRow: 1 }"
      :aria-label="day.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })"
      :aria-current="adapter.isToday(day, now) ? 'date' : undefined"
    >
      {{ adapter.formatDayHeader(day) }}
    </span>

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

    <span
      v-for="(displayHour, idx) in adapter.timezones.locale.display"
      :key="'locale-' + idx"
      :class="s.timezoneHourLabel({ class: styleSlots?.timezoneHourLabel })"
      :style="{ gridColumn: tzCount, gridRow: idx + 2 }"
    >
      {{ displayHour }}:00
    </span>

    <template
      v-for="(day, dayIdx) in allWeekDays"
      :key="'day-col-' + day.toISOString()"
    >
      <div
        v-for="(hour, idx) in hours"
        :key="'hour-cell-' + dayIdx + '-' + hour"
        :class="[
          s.hourCell({ class: styleSlots?.hourCell }),
          dayIdx < allWeekDays.length - 1 ? 'border-r border-outlined' : '',
          !showWeekends && isWeekendDay(dayIdx) ? 'overflow-hidden opacity-0' : ''
        ]"
        :style="{ gridColumn: tzCount + dayIdx + 1, gridRow: idx + 2 }"
      />

      <div
        :ref="(el) => setEventsAreaRef(dayIdx, el as HTMLElement)"
        :class="[s.eventsArea({ class: styleSlots?.eventsArea }), !showWeekends && isWeekendDay(dayIdx) ? 'overflow-hidden opacity-0' : '']"
        :style="{ gridColumn: tzCount + dayIdx + 1, gridRow: `2 / ${hours.length + 2}` }"
        :aria-label="`Events for ${day.toLocaleDateString(undefined, { weekday: 'long', month: 'long', day: 'numeric' })}`"
        @dragover.prevent="drag.handleEventsAreaDragOver($event, day, dayIdx)"
        @drop="drag.handleEventsAreaDrop($event, day)"
        @dragleave="drag.handleDragLeave()"
      >
        <div
          v-if="adapter.isToday(day, now) && isCurrentTimeVisible"
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

        <TransitionGroup
          enter-active-class="transition-all duration-200 ease-out"
          enter-from-class="opacity-0 scale-95"
          leave-active-class="transition-all duration-150 ease-in absolute"
          leave-to-class="opacity-0 scale-95"
        >
          <div
            v-for="event in adapter.getEventsForDay(events, day)"
            :key="event.id"
            :class="[s.event({ class: styleSlots?.event }), draggable ? (drag.isDragging.value ? 'cursor-grabbing' : 'cursor-grab') : '']"
            :data-color="event.color || color"
            :style="getEventStyle(event, dayIdx)"
            :aria-label="`${event.title || 'Event'}, ${event.start.toLocaleTimeString()} to ${event.end.toLocaleTimeString()}`"
            :draggable="draggable ? 'true' : undefined"
            role="button"
            tabindex="0"
            @mouseenter="hoveredEventId = event.id"
            @mouseleave="hoveredEventId = null"
            @click="onEventClick(event)"
            @keydown.enter="onEventClick(event)"
            @keydown.space.prevent="onEventClick(event)"
            @dragstart="drag.handleDragStart(event, $event, day)"
            @dragend="drag.handleDragEnd()"
          >
            <div
              v-if="resizable"
              :class="s.resizeHandle({ class: styleSlots?.resizeHandle })"
              :data-color="event.color || color"
              style="top: 0"
              @mousedown.stop="resize.handleResizeStart(event, 'top', $event, eventsAreaRefs.get(dayIdx)!, day)"
            />
            <slot
              name="event"
              :event="event"
            >
              {{ event.title }} - {{ event.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }} - {{ event.end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }}
            </slot>
            <div
              v-if="resizable"
              :class="s.resizeHandle({ class: styleSlots?.resizeHandle })"
              :data-color="event.color || color"
              style="bottom: 0"
              @mousedown.stop="resize.handleResizeStart(event, 'bottom', $event, eventsAreaRefs.get(dayIdx)!, day)"
            />
          </div>
        </TransitionGroup>

        <div
          v-if="drag.isDragging.value && drag.ghostStyle.value && drag.dragOverDayIdx.value === dayIdx"
          :class="s.dragGhost({ class: styleSlots?.dragGhost })"
          :data-color="drag.draggedEventColor.value || color"
          :style="drag.ghostStyle.value"
          aria-hidden="true"
        />

        <div
          v-if="resize.isResizing.value && resize.ghostStyle.value && adapter.getEventsForDay(events, day).some(e => e.id === resize.resizingEventId.value)"
          :class="s.dragGhost({ class: styleSlots?.dragGhost })"
          :data-color="resize.resizingEventColor.value || color"
          :style="resize.ghostStyle.value"
          aria-hidden="true"
        />
      </div>
    </template>
  </div>
</template>
