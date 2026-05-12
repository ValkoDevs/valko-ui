<script setup lang="ts">
import type { TableItem, EventCalendarProps, CalendarEvent, CSSProperties } from '#valkoui'

const form = ref<Partial<EventCalendarProps>>({
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  currentView: 'day',
  showWeekends: true,
  hideHeader: false
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
    description: 'The variant of the Event Calendar. Controls the visual style of events, headers, and containers.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of event chips in the Event Calendar.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of all text elements in the Event Calendar (headers, labels, events, etc.).',
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
    key: 'modelValueProp',
    prop: 'modelValue',
    required: false,
    description: 'The currently displayed date. Supports v-model.',
    values: 'Date | undefined',
    default: '-'
  },
  {
    key: 'currentViewProp',
    prop: 'currentView',
    required: false,
    description: 'The current view mode of the calendar. Supports v-model:currentView.',
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
  },
  {
    key: 'hideHeaderProp',
    prop: 'hideHeader',
    required: false,
    description: 'Hides the built-in header toolbar of the Event Calendar.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'styleSlotsProp',
    prop: 'styleSlots',
    required: false,
    description: 'Customizes style slots for the Event Calendar.',
    values: 'object',
    default: '{}'
  }
]

const eventCalendarEmits: TableItem[] = [
  {
    key: 'eventClickEmit',
    event: 'eventClick',
    description: 'Emitted when a calendar event is clicked.',
    values: 'CalendarEvent',
    type: '(event: CalendarEvent) => void'
  },
  {
    key: 'updateCurrentViewEmit',
    event: 'update:currentView',
    description: 'Emitted when the view mode changes. Used for v-model:currentView.',
    values: 'day, week, month',
    type: '(view: ViewMode) => void'
  },
  {
    key: 'updateModelValueEmit',
    event: 'update:modelValue',
    description: 'Emitted when the displayed date changes. Used for v-model.',
    values: 'Date',
    type: '(date: Date) => void'
  },
  {
    key: 'previousClickEmit',
    event: 'previousClick',
    description: 'Emitted when the previous navigation button is clicked.',
    values: '-',
    type: '() => void'
  },
  {
    key: 'nextClickEmit',
    event: 'nextClick',
    description: 'Emitted when the next navigation button is clicked.',
    values: '-',
    type: '() => void'
  },
  {
    key: 'todayClickEmit',
    event: 'todayClick',
    description: 'Emitted when the Today button is clicked.',
    values: '-',
    type: '() => void'
  }
]

const eventCalendarSlots: TableItem[] = [
  {
    key: 'headerSlot',
    name: 'header',
    description: 'Custom header content that replaces the default header toolbar. Scoped slot providing dateLabel and currentView.',
    example: '<template #header="{ dateLabel }"><h2>{{ dateLabel }}</h2></template>'
  },
  {
    key: 'eventSlot',
    name: 'event',
    description: 'Custom rendering for each event item. Scoped slot providing the event object and its computed CSS style.',
    example: '<template #event="{ event, style }"><div :style="style">{{ event.title }}</div></template>'
  }
]

const styleSlotsInterface: TableItem[] = [
  { key: 'containerSlot', prop: 'container', description: 'Root wrapper of the calendar.', values: 'string[]', default: '' },
  { key: 'headerContainerSlot', prop: 'headerContainer', description: 'Header toolbar container.', values: 'string[]', default: '' },
  { key: 'headerNavGroupSlot', prop: 'headerNavGroup', description: 'Navigation buttons group (prev / today / next).', values: 'string[]', default: '' },
  { key: 'headerTitleSlot', prop: 'headerTitle', description: 'Date label displayed in the header.', values: 'string[]', default: '' },
  { key: 'headerViewSwitcherSlot', prop: 'headerViewSwitcher', description: 'View switcher area in the header.', values: 'string[]', default: '' },
  { key: 'dayViewContainerSlot', prop: 'dayViewContainer', description: 'Day view grid container.', values: 'string[]', default: '' },
  { key: 'weekViewContainerSlot', prop: 'weekViewContainer', description: 'Week view grid container.', values: 'string[]', default: '' },
  { key: 'weekDayHeaderSlot', prop: 'weekDayHeader', description: 'Week day column header (non-today).', values: 'string[]', default: '' },
  { key: 'weekDayHeaderTodaySlot', prop: 'weekDayHeaderToday', description: 'Week day column header for today (highlighted).', values: 'string[]', default: '' },
  { key: 'weekDayColumnSlot', prop: 'weekDayColumn', description: 'Week day column layout helper.', values: 'string[]', default: '' },
  { key: 'monthViewContainerSlot', prop: 'monthViewContainer', description: 'Month view grid container.', values: 'string[]', default: '' },
  { key: 'monthWeekdayHeaderSlot', prop: 'monthWeekdayHeader', description: 'Month weekday name header.', values: 'string[]', default: '' },
  { key: 'monthDayCellSlot', prop: 'monthDayCell', description: 'Standard month day cell.', values: 'string[]', default: '' },
  { key: 'monthDayCellTodaySlot', prop: 'monthDayCellToday', description: "Today's month day cell (highlighted).", values: 'string[]', default: '' },
  { key: 'monthDayCellOutsideSlot', prop: 'monthDayCellOutside', description: 'Out-of-month day cell (dimmed).', values: 'string[]', default: '' },
  { key: 'monthDayNumberSlot', prop: 'monthDayNumber', description: 'Day number inside a month cell.', values: 'string[]', default: '' },
  { key: 'monthEventSlot', prop: 'monthEvent', description: 'Event chip in month view.', values: 'string[]', default: '' },
  { key: 'timezoneHeaderSlot', prop: 'timezoneHeader', description: 'Timezone column header.', values: 'string[]', default: '' },
  { key: 'timezoneHourLabelSlot', prop: 'timezoneHourLabel', description: 'Per-hour label in the timezone column.', values: 'string[]', default: '' },
  { key: 'eventColumnHeaderSlot', prop: 'eventColumnHeader', description: 'Events column header (day view).', values: 'string[]', default: '' },
  { key: 'hourCellSlot', prop: 'hourCell', description: 'Per-hour grid cell.', values: 'string[]', default: '' },
  { key: 'eventsAreaSlot', prop: 'eventsArea', description: 'Absolute-positioned event overlay area.', values: 'string[]', default: '' },
  { key: 'currentTimeMarkerSlot', prop: 'currentTimeMarker', description: 'Current time horizontal line.', values: 'string[]', default: '' },
  { key: 'currentTimeDotSlot', prop: 'currentTimeDot', description: 'Dot on the current time marker.', values: 'string[]', default: '' },
  { key: 'eventSlotStyle', prop: 'event', description: 'Event chip in day/week views.', values: 'string[]', default: '' }
]

const calendarEventInterface: TableItem[] = [
  { key: 'idProp', prop: 'id', required: true, description: 'Unique event identifier.', values: 'string', default: '-' },
  { key: 'startProp', prop: 'start', required: true, description: 'Event start time.', values: 'Date', default: '-' },
  { key: 'endProp', prop: 'end', required: true, description: 'Event end time.', values: 'Date', default: '-' },
  { key: 'titleProp', prop: 'title', required: false, description: 'Event title.', values: 'string', default: '-' },
  { key: 'colorPropEvent', prop: 'color', required: false, description: 'Event color override (e.g. primary, secondary, etc.).', values: 'string', default: '-' },
  { key: 'locationProp', prop: 'location', required: false, description: 'Event location.', values: 'string', default: '-' },
  { key: 'customProp', prop: 'custom', required: false, description: 'Custom data payload for the event.', values: 'Record<string, unknown>', default: '-' }
]

const eventAdapterResultInterface: TableItem[] = [
  { key: 'timezonesProp', prop: 'timezones', required: true, description: 'Timezone configuration containing the locale timezone and any extra timezones to display.', values: '{ locale: Timezone; extras: Timezone[] }', default: '-' },
  { key: 'hourRangeProp', prop: 'hourRange', required: true, description: 'Visible hour range for day and week views, expressed as a tuple of [startHour, endHour].', values: '[number, number]', default: '-' }
]

const timezoneInterface: TableItem[] = [
  { key: 'timezoneIdProp', prop: 'id', required: true, description: 'IANA timezone identifier (e.g. "America/New_York").', values: 'string', default: '-' },
  { key: 'timezoneNameProp', prop: 'name', required: false, description: 'Human-readable display name for the timezone.', values: 'string', default: '-' },
  { key: 'timezoneAbbreviationProp', prop: 'abbreviation', required: false, description: 'Timezone abbreviation (e.g. "EST").', values: 'string', default: '-' },
  { key: 'timezoneOffsetProp', prop: 'offset', required: false, description: 'Offset in minutes from UTC.', values: 'number', default: '-' },
  { key: 'timezoneDisplayProp', prop: 'display', required: false, description: 'Pre-computed display hours, populated by the adapter.', values: 'string[]', default: '-' }
]

const viewModeType: TableItem[] = [
  { key: 'viewModeProp', prop: 'ViewMode', required: true, description: 'Represents the active view of the Event Calendar.', values: "'day' | 'week' | 'month'", default: '-' }
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
  { id: 'event1', title: 'Meeting with Team', start: new Date(year, month, day, 9, 0), end: new Date(year, month, day, 10, 0), color: 'primary' },
  { id: 'event2', title: 'Lunch with Sarah', start: new Date(year, month, day, 11, 0), end: new Date(year, month, day, 14, 0), color: 'secondary' },
  { id: 'event3', title: 'Overlapping Meeting', start: new Date(year, month, day, 11, 30), end: new Date(year, month, day, 13, 0), color: 'warning' },
  { id: 'event4', title: 'Project Deadline', start: new Date(year, month, day, 17, 0), end: new Date(year, month, day, 18, 0), color: 'negative' },
  { id: 'event5', title: 'Code Review', start: new Date(year, month, day, 17, 0), end: new Date(year, month, day, 18, 0), color: 'accent' },
  { id: 'event6', title: 'Quick Sync', start: new Date(year, month, day, 17, 0), end: new Date(year, month, day, 18, 0), color: 'positive' },
  { id: 'event6b', title: 'Quick Sync', start: new Date(year, month, day, 15, 0), end: new Date(year, month, day, 16, 0), color: 'positive' },
  { id: 'event7', title: 'Sprint Planning', start: new Date(year, month, day + 1, 9, 30), end: new Date(year, month, day + 1, 11, 0), color: 'primary' },
  { id: 'event8', title: 'Design Review', start: new Date(year, month, day + 1, 14, 0), end: new Date(year, month, day + 1, 15, 30), color: 'accent' },
  { id: 'event9', title: 'Standup', start: new Date(year, month, day + 2, 10, 0), end: new Date(year, month, day + 2, 10, 30), color: 'secondary' },
  { id: 'event10', title: 'Client Call', start: new Date(year, month, day + 2, 13, 0), end: new Date(year, month, day + 2, 14, 0), color: 'warning' },
  { id: 'event11', title: 'QA Testing', start: new Date(year, month, day + 3, 11, 0), end: new Date(year, month, day + 3, 13, 0), color: 'negative' },
  { id: 'event12', title: 'Team Retrospective', start: new Date(year, month, day + 3, 16, 0), end: new Date(year, month, day + 3, 17, 0), color: 'positive' },
  { id: 'event13', title: 'Release Planning', start: new Date(year, month, day + 4, 9, 0), end: new Date(year, month, day + 4, 10, 30), color: 'primary' }
]

const isModalOpen = ref(false)
const clickedEvent = ref<CalendarEvent | null>(null)

const onEventClick = (event: CalendarEvent) => {
  clickedEvent.value = event
  isModalOpen.value = true
}

const generateSnippet = snippetGeneratorFactory('vk-event-calendar')

const scriptCode = `<script setup lang="ts">
import { useEventCalendarAdapter } from '#valkoui'
import type { CalendarEvent } from '#valkoui'

const adapter = useEventCalendarAdapter({
  timezones: {
    locale: { id: 'America/Buenos_Aires', name: 'Buenos Aires' },
    extras: [
      { id: 'America/New_York', name: 'New York', offset: -300 },
      { id: 'Europe/London', name: 'London', offset: 0 }
    ]
  },
  hourRange: [9, 18]
})

const today = new Date()
const y = today.getFullYear()
const m = today.getMonth()
const d = today.getDate()

const events: CalendarEvent[] = [
  { id: '1', title: 'Meeting with Team', start: new Date(y, m, d, 9, 0), end: new Date(y, m, d, 10, 0), color: 'primary' },
  { id: '2', title: 'Lunch with Sarah', start: new Date(y, m, d, 11, 0), end: new Date(y, m, d, 14, 0), color: 'secondary' },
  { id: '3', title: 'Overlapping Meeting', start: new Date(y, m, d, 11, 30), end: new Date(y, m, d, 13, 0), color: 'warning' },
  { id: '4', title: 'Project Deadline', start: new Date(y, m, d, 17, 0), end: new Date(y, m, d, 18, 0), color: 'negative' },
  { id: '5', title: 'Sprint Planning', start: new Date(y, m, d + 1, 9, 30), end: new Date(y, m, d + 1, 11, 0), color: 'primary' },
  { id: '6', title: 'Design Review', start: new Date(y, m, d + 1, 14, 0), end: new Date(y, m, d + 1, 15, 30), color: 'accent' }
]
<\/script>
`

const extraProps = ':adapter="adapter" :events="events"'

const exampleStyles = {
  single: {
    slotContainer: [
      'grid-cols-1',
      'gap-8'
    ]
  }
}

const customSlotCode = [
  scriptCode,
  '<template>',
  '  <vk-event-calendar ' + extraProps + '>',
  '    <template #event="{ event, style }">',
  '      <div :style="style" class="rounded px-1 py-0.5 text-xs font-semibold truncate border-l-4 border-current">',
  '        🗓 ' + '{{ event.title }}',
  '      </div>',
  '    </template>',
  '  </vk-event-calendar>',
  '</template>'
].join('\n')
</script>

<template>
  <doc-section
    title="Event Calendar"
    description="The Event Calendar component is a versatile and customizable calendar component that allows you to display events in a calendar format. It supports day, week, and month views with timezone support, custom event rendering, and full control over appearance through color, variant, shape, and size props. Events can be clicked to trigger callbacks, and the built-in header can be replaced with a custom slot."
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
        :hide-header="form.hideHeader"
        :model-value="selectedDateObject"
        @event-click="onEventClick"
        @update:current-view="(v) => form.currentView = v"
      />
      <vk-modal
        :is-open="isModalOpen"
        title="Event Details"
        shape="soft"
        size="sm"
        @close="isModalOpen = false"
      >
        <template #default>
          <div
            v-if="clickedEvent"
            class="flex flex-col gap-2 text-on-surface"
          >
            <h3 class="text-lg font-semibold">
              {{ clickedEvent.title || 'Untitled Event' }}
            </h3>
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
      <vk-checkbox
        v-model="form.hideHeader"
        label="Hide Header"
        size="sm"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        :style-slots="exampleStyles.single"
      >
        <div
          v-for="color in colorOptions.withSurface"
          :key="color.value"
          class="flex flex-col gap-4"
        >
          <span class="text-lg font-semibold">
            {{ color.label }}
          </span>
          <vk-event-calendar
            :events
            :adapter
            :color="color.value"
          />
        </div>

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('color', { values: colorOptions.withSurface.map(o => o.value), extraProps })}`" />
        </template>
      </example-section>

      <example-section
        title="Variants"
        :style-slots="exampleStyles.single"
      >
        <div
          v-for="variant in variantOptions.general"
          :key="variant.value"
          class="flex flex-col gap-4"
        >
          <span class="text-lg font-semibold">
            {{ variant.label }}
          </span>
          <vk-event-calendar
            :events
            :adapter
            :variant="variant.value"
          />
        </div>

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('variant', { values: variantOptions.general.map(o => o.value), extraProps })}`" />
        </template>
      </example-section>

      <example-section
        title="Shapes"
        :style-slots="exampleStyles.single"
      >
        <div
          v-for="shape in shapeOptions.general"
          :key="shape.value"
          class="flex flex-col gap-4"
        >
          <span class="text-lg font-semibold">
            {{ shape.label }}
          </span>
          <vk-event-calendar
            :events
            :adapter
            :shape="shape.value"
          />
        </div>

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('shape', { values: shapeOptions.general.map(o => o.value), extraProps })}`" />
        </template>
      </example-section>

      <example-section
        title="Sizes"
        :style-slots="exampleStyles.single"
      >
        <div
          v-for="size in sizeOptions.general"
          :key="size.value"
          class="flex flex-col gap-4"
        >
          <span class="text-lg font-semibold">
            {{ size.label }}
          </span>
          <vk-event-calendar
            :events
            :adapter
            :size="size.value"
          />
        </div>

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('size', { values: sizeOptions.general.map(o => o.value), extraProps })}`" />
        </template>
      </example-section>

      <example-section
        title="Views"
        :style-slots="exampleStyles.single"
      >
        <div class="flex flex-col gap-4">
          <span class="text-lg font-semibold">
            Day
          </span>
          <vk-event-calendar
            :events
            :adapter
            current-view="day"
          />
        </div>
        <div class="flex flex-col gap-4">
          <span class="text-lg font-semibold">
            Week
          </span>
          <vk-event-calendar
            :events
            :adapter
            current-view="week"
          />
        </div>
        <div class="flex flex-col gap-4">
          <span class="text-lg font-semibold">
            Month
          </span>
          <vk-event-calendar
            :events
            :adapter
            current-view="month"
          />
        </div>

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('current-view', { values: ['day', 'week', 'month'], extraProps })}`" />
        </template>
      </example-section>

      <example-section
        title="Hide Header"
        :style-slots="exampleStyles.single"
      >
        <div class="flex flex-col gap-4">
          <span class="text-lg font-semibold">
            hide-header: false (default)
          </span>
          <vk-event-calendar
            :events
            :adapter
          />
        </div>
        <div class="flex flex-col gap-4">
          <span class="text-lg font-semibold">
            hide-header: true
          </span>
          <vk-event-calendar
            :events
            :adapter
            hide-header
          />
        </div>

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<boolean>('hide-header', { values: [true], extraProps })}`" />
        </template>
      </example-section>

      <example-section
        title="Show Weekends"
        :style-slots="exampleStyles.single"
      >
        <div class="flex flex-col gap-4">
          <span class="text-lg font-semibold">
            show-weekends: true (default)
          </span>
          <vk-event-calendar
            :events
            :adapter
            current-view="week"
            :show-weekends="true"
          />
        </div>
        <div class="flex flex-col gap-4">
          <span class="text-lg font-semibold">
            show-weekends: false
          </span>
          <vk-event-calendar
            :events
            :adapter
            current-view="week"
            :show-weekends="false"
          />
        </div>

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<boolean>(':show-weekends', { values: [false], extraProps })}`" />
        </template>
      </example-section>

      <example-section
        title="Custom Event Slot"
        :style-slots="exampleStyles.single"
      >
        <vk-event-calendar
          :events
          :adapter
        >
          <template #event="{ event, style }">
            <div
              :style="(style as CSSProperties)"
              class="rounded px-1 py-0.5 text-xs font-semibold truncate border-l-4 border-current bg-surface-container text-on-surface"
            >
              🗓 {{ event.title }}
            </div>
          </template>
        </vk-event-calendar>

        <template #code>
          <code-block :code="customSlotCode" />
        </template>
      </example-section>
    </template>

    <template #api>
      <h3>Event Calendar Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="eventCalendarProps"
      />

      <h3>Style Slots Interface</h3>
      <vk-table
        :headers="propHeaders"
        :data="styleSlotsInterface"
      />

      <h3>Event Calendar Emits</h3>
      <vk-table
        :headers="emitHeaders"
        :data="eventCalendarEmits"
      />

      <h3>Event Calendar Slots</h3>
      <vk-table
        :headers="slotHeaders"
        :data="eventCalendarSlots"
      />

      <h3>CalendarEvent Interface</h3>
      <vk-table
        :headers="propHeaders"
        :data="calendarEventInterface"
      />

      <h3>EventAdapterResult Interface</h3>
      <vk-table
        :headers="propHeaders"
        :data="eventAdapterResultInterface"
      />

      <h3>Timezone Interface</h3>
      <vk-table
        :headers="propHeaders"
        :data="timezoneInterface"
      />

      <h3>ViewMode Type</h3>
      <vk-table
        :headers="propHeaders"
        :data="viewModeType"
      />
    </template>
  </doc-section>
</template>
