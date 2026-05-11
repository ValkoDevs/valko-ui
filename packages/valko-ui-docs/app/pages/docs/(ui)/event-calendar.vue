<script setup lang="ts">
import type { TableItem, EventCalendarProps, CalendarEvent } from '#valkoui'

const form = ref<Partial<EventCalendarProps>>({
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  currentView: 'day',
  showWeekends: true
})

const eventCalendarProps: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Event Calendar.',
    values: 'primary, secondary, negative, warning, accent, positive, surface',
    default: 'primary'
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The variant of the Event Calendar.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Event Calendar.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Event Calendar.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    key: 'adapterProp',
    prop: 'adapter',
    required: true,
    description: 'The adapter result from useEventCalendarAdapter composable. Provides timezone and hour range configuration.',
    values: 'EventAdapterResult',
    default: '-'
  },
  {
    key: 'eventsProp',
    prop: 'events',
    required: true,
    description: 'Array of calendar events to display.',
    values: 'CalendarEvent[]',
    default: '[]'
  },
  {
    key: 'currentViewProp',
    prop: 'currentView',
    required: false,
    description: 'The current view mode of the calendar.',
    values: 'day, week, month',
    default: 'day'
  },
  {
    key: 'showWeekendsProp',
    prop: 'showWeekends',
    required: false,
    description: 'Whether to show weekend columns in the week and month views.',
    values: 'true, false',
    default: 'true'
  }
]

const adapter = useEventCalendarAdapter({
  timezones: {
    locale: {
      id: 'America/Buenos_Aires',
      name: 'Buenos Aires'
    },
    extras: [
      {
        id: 'America/New_York',
        name: 'New York',
        offset: -300
      },
      {
        id: 'Europe/London',
        name: 'London',
        offset: 0
      }
    ]
  },
  hourRange: [9, 18]
})

const [selectedDate, parsedModel, calendarAdapter] = useDateAdapter({})

const selectedDateObject = computed(() => new Date(selectedDate.value))

const today = new Date()
const year = today.getFullYear()
const month = today.getMonth()
const day = today.getDate()
const isDateOpen = ref(false)

const events: CalendarEvent[] = [
  {
    id: 'event1',
    title: 'Meeting with Team',
    start: new Date(year, month, day, 9, 0),
    end: new Date(year, month, day, 10, 0),
    color: 'primary'
  },
  {
    id: 'event2',
    title: 'Lunch with Sarah',
    start: new Date(year, month, day, 11, 0),
    end: new Date(year, month, day, 14, 0),
    color: 'secondary'
  },
  {
    id: 'event3',
    title: 'Overlapping Meeting',
    start: new Date(year, month, day, 11, 30),
    end: new Date(year, month, day, 13, 0),
    color: 'warning'
  },
  {
    id: 'event4',
    title: 'Project Deadline',
    start: new Date(year, month, day, 17, 0),
    end: new Date(year, month, day, 18, 0),
    color: 'negative'
  },
  {
    id: 'event5',
    title: 'Code Review',
    start: new Date(year, month, day, 17, 0),
    end: new Date(year, month, day, 18, 0),
    color: 'accent'
  },
  {
    id: 'event6',
    title: 'Quick Sync',
    start: new Date(year, month, day, 17, 0),
    end: new Date(year, month, day, 18, 0),
    color: 'positive'
  },
  {
    id: 'event6b',
    title: 'Quick Sync',
    start: new Date(year, month, day, 15, 0),
    end: new Date(year, month, day, 16, 0),
    color: 'positive'
  },
  {
    id: 'event7',
    title: 'Sprint Planning',
    start: new Date(year, month, day + 1, 9, 30),
    end: new Date(year, month, day + 1, 11, 0),
    color: 'primary'
  },
  {
    id: 'event8',
    title: 'Design Review',
    start: new Date(year, month, day + 1, 14, 0),
    end: new Date(year, month, day + 1, 15, 30),
    color: 'accent'
  },
  {
    id: 'event9',
    title: 'Standup',
    start: new Date(year, month, day + 2, 10, 0),
    end: new Date(year, month, day + 2, 10, 30),
    color: 'secondary'
  },
  {
    id: 'event10',
    title: 'Client Call',
    start: new Date(year, month, day + 2, 13, 0),
    end: new Date(year, month, day + 2, 14, 0),
    color: 'warning'
  },
  {
    id: 'event11',
    title: 'QA Testing',
    start: new Date(year, month, day + 3, 11, 0),
    end: new Date(year, month, day + 3, 13, 0),
    color: 'negative'
  },
  {
    id: 'event12',
    title: 'Team Retrospective',
    start: new Date(year, month, day + 3, 16, 0),
    end: new Date(year, month, day + 3, 17, 0),
    color: 'positive'
  },
  {
    id: 'event13',
    title: 'Release Planning',
    start: new Date(year, month, day + 4, 9, 0),
    end: new Date(year, month, day + 4, 10, 30),
    color: 'primary'
  }
]

const isModalOpen = ref(false)
const clickedEvent = ref<CalendarEvent | null>(null)

const onEventClick = (event: CalendarEvent) => {
  clickedEvent.value = event
  isModalOpen.value = true
}
</script>

<template>
  <doc-section
    title="Event Calendar"
    description="The Event Calendar component is a versatile and customizable calendar component that allows you to display events in a calendar format. It provides various props to customize its appearance and behavior, making it suitable for a wide range of use cases."
    :style-slots="{
      playgroundView: ['block']
    }"
  >
    <template #playground-view>
      <vk-event-calendar
        :events
        :adapter
        :color="form.color"
        :variant="form.variant"
        :size="form.size"
        :shape="form.shape"
        :current-view="form.currentView"
        :show-weekends="form.showWeekends"
        :model-value="selectedDateObject"
        @event-click="onEventClick"
      />
      <vk-modal
        :is-open="isModalOpen"
        title="Event Details"
        shape="soft"
        size="sm"
        @close="isModalOpen = false"
      >
        <template #default>
          <div v-if="clickedEvent" class="flex flex-col gap-2 text-on-surface">
            <h3 class="text-lg font-semibold">{{ clickedEvent.title || 'Untitled Event' }}</h3>
            <div class="flex flex-col gap-1 text-sm">
              <span><strong>Date:</strong> {{ clickedEvent.start.toLocaleDateString(undefined, { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) }}</span>
              <span><strong>Start:</strong> {{ clickedEvent.start.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }}</span>
              <span><strong>End:</strong> {{ clickedEvent.end.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }}</span>
              <span v-if="clickedEvent.location"><strong>Location:</strong> {{ clickedEvent.location }}</span>
              <span><strong>Color:</strong> {{ clickedEvent.color || 'default' }}</span>
              <span><strong>ID:</strong> {{ clickedEvent.id }}</span>
            </div>
            <vk-button
              color="primary"
              size="sm"
              class="self-end mt-2"
              @click="isModalOpen = false"
            >
              Close
            </vk-button>
          </div>
        </template>
      </vk-modal>
    </template>

    <template #playground-options>
      <vk-select
        v-model="form.color"
        label="Color"
        size="sm"
        :options="colorOptions.withSurface"
      />
      <vk-select
        v-model="form.variant"
        label="Variant"
        size="sm"
        :options="variantOptions.general"
      />
      <vk-select
        v-model="form.shape"
        label="Shape"
        size="sm"
        :options="shapeOptions.general"
      />
      <vk-select
        v-model="form.size"
        label="Size"
        size="sm"
        :options="sizeOptions.general"
      />
      <vk-select
        v-model="form.currentView"
        label="Current View"
        size="sm"
        :options="[
          { label: 'Day', value: 'day' },
          { label: 'Week', value: 'week' },
          { label: 'Month', value: 'month' }
        ]"
      />
      <vk-datepicker
        v-model="selectedDate"
        :is-open="isDateOpen"
        :parsed-model="parsedModel"
        :adapter="calendarAdapter"
        label="Selected Date"
        size="sm"
        @open="isDateOpen = true"
        @close="isDateOpen = false"
      />
      <vk-checkbox
        v-if="form.currentView !== 'day'"
        v-model="form.showWeekends"
        label="Show Weekends"
        size="sm"
      />
    </template>

    <template #examples />

    <template #api>
      <h3>Event Calendar Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="eventCalendarProps"
      />
    </template>
  </doc-section>
</template>
