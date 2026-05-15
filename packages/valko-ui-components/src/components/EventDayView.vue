<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'

import type { ViewProps, CalendarEvent, EventDropPayload, EventResizePayload } from '#valkoui/types/EventCalendar'
import useEventCalendarDrag from '#valkoui/composables/useEventCalendarDrag'
import useEventCalendarResize from '#valkoui/composables/useEventCalendarResize'
import styles from '#valkoui/styles/EventCalendar.styles.ts'
import VkTooltip from './Tooltip.vue'

defineOptions({ name: 'VkEventDayView' })

const props = withDefaults(defineProps<ViewProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft'
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

const eventsAreaRef = ref<HTMLElement | null>(null)

const onEventClick = (event: CalendarEvent) => {
  emit('eventClick', event)
}

const getEventStyle = (event: CalendarEvent): Record<string, string | number | undefined> => {
  const placement = eventPlacements.value.get(event.id)
  if (!placement) return {}

  const isHovered = hoveredEventId.value === event.id

  const totalCols = Math.round(100 / placement.widthPercent) || 1
  const colIdx = totalCols > 1 ? Math.round(placement.leftPercent / placement.widthPercent) : 0

  const edgePx = 8
  const gapPx = 4

  const leftInset = colIdx === 0 ? edgePx : gapPx / 2
  const rightInset = colIdx === totalCols - 1 ? edgePx : gapPx / 2

  const result: Record<string, string | number | undefined> = {
    top: `${placement.topPercent}%`,
    height: `${placement.heightPercent}%`,
    left: `calc(${placement.leftPercent}% + ${leftInset}px)`,
    width: `calc(${placement.widthPercent}% - ${leftInset + rightInset}px)`,
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

const currentDate = computed(() => props.modelValue ? new Date(props.modelValue) : new Date())

const hours = computed(() => props.adapter.getHours())

const tzCount = computed(() => 1 + (props.adapter.timezones.extras?.length || 0))

const filteredEvents = computed(() =>
  props.adapter.getEventsForDay(props.events, currentDate.value)
)

const eventPlacements = computed(() =>
  props.adapter.getEventPlacements(filteredEvents.value)
)

const currentTimePosition = computed(() =>
  props.adapter.getCurrentTimePosition(now.value)
)

const isCurrentTimeVisible = computed(() =>
  props.adapter.isCurrentTimeInRange(now.value) &&
  props.adapter.isSameDay(currentDate.value, now.value)
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
    :class="s.dayViewContainer({ class: styleSlots?.dayViewContainer })"
    :style="{
      gridTemplateColumns: `repeat(${tzCount}, minmax(4rem, auto)) 1fr`,
      gridTemplateRows: `auto repeat(${hours.length}, minmax(2.5rem, 1fr))`
    }"
    role="grid"
    aria-label="Day view calendar"
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
      :class="s.eventColumnHeader({ class: styleSlots?.eventColumnHeader })"
      :style="{ gridColumn: tzCount + 1, gridRow: 1 }"
    >
      Events
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

    <div
      v-for="(hour, idx) in hours"
      :key="'hour-cell-' + hour"
      :class="s.hourCell({ class: styleSlots?.hourCell })"
      :style="{ gridColumn: tzCount + 1, gridRow: idx + 2 }"
    />

    <div
      ref="eventsAreaRef"
      :class="s.eventsArea({ class: styleSlots?.eventsArea })"
      :style="{ gridColumn: tzCount + 1, gridRow: `2 / ${hours.length + 2}` }"
      aria-label="Events"
      @dragover.prevent="drag.handleEventsAreaDragOver($event, currentDate)"
      @drop="drag.handleEventsAreaDrop($event, currentDate)"
      @dragleave="drag.handleDragLeave()"
    >
      <div
        v-if="isCurrentTimeVisible"
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
          v-for="event in filteredEvents"
          :key="event.id"
          :class="[s.event({ class: styleSlots?.event }), draggable ? (drag.isDragging.value ? 'cursor-grabbing' : 'cursor-grab') : '']"
          :data-color="event.color || color"
          :style="getEventStyle(event)"
          :aria-label="`${event.title || 'Event'}, ${event.start.toLocaleTimeString()} to ${event.end.toLocaleTimeString()}`"
          :draggable="draggable ? 'true' : undefined"
          role="button"
          tabindex="0"
          @mouseenter="hoveredEventId = event.id"
          @mouseleave="hoveredEventId = null"
          @click="onEventClick(event)"
          @keydown.enter="onEventClick(event)"
          @keydown.space.prevent="onEventClick(event)"
          @dragstart="drag.handleDragStart(event, $event, currentDate)"
          @dragend="drag.handleDragEnd()"
        >
          <div
            v-if="resizable"
            :class="s.resizeHandle({ class: styleSlots?.resizeHandle })"
            :data-color="event.color || color"
            style="top: 0"
            @mousedown.stop="resize.handleResizeStart(event, 'top', $event, eventsAreaRef!, currentDate)"
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
            @mousedown.stop="resize.handleResizeStart(event, 'bottom', $event, eventsAreaRef!, currentDate)"
          />
        </div>
      </TransitionGroup>

      <div
        v-if="drag.isDragging.value && drag.ghostStyle.value"
        :class="s.dragGhost({ class: styleSlots?.dragGhost })"
        :data-color="drag.draggedEventColor.value || color"
        :style="drag.ghostStyle.value"
        aria-hidden="true"
      />

      <div
        v-if="resize.isResizing.value && resize.ghostStyle.value"
        :class="s.dragGhost({ class: styleSlots?.dragGhost })"
        :data-color="resize.resizingEventColor.value || color"
        :style="resize.ghostStyle.value"
        aria-hidden="true"
      />
    </div>
  </div>
</template>
