<script setup lang="ts">
import type { TableItem, EventCalendarProps } from '#valkoui'

const form = ref<Partial<EventCalendarProps>>({
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  currentView: 'day'
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
  }
]

//const generateSnippet = snippetGeneratorFactory('vk-event-calendar')

const adapter = useEventCalendarAdapter({
  timezones: {
    locale: {
      id: 'America/Buenos_Aires',
      name: 'Buenos Aires'
    },
    extras: [
      {
        id: 'America/New_York',
        name: 'New York'
      },
      {
        id: 'Europe/London',
        name: 'London'
      }
    ]
  },
  hourRange: [9, 18]
})

const events = [
  {
    id: 'event1',
    title: 'Meeting with Team',
    start: new Date(2024, 5, 10, 9, 0),
    end: new Date(2024, 5, 10, 10, 0),
    color: 'primary'
  },
  {
    id: 'event2',
    title: 'Lunch with Sarah',
    start: new Date(2024, 5, 10, 12, 0),
    end: new Date(2024, 5, 10, 13, 0),
    color: 'secondary'
  },
  {
    id: 'event3',
    title: 'Project Deadline',
    start: new Date(2024, 5, 11, 17, 0),
    end: new Date(2024, 5, 11, 18, 0),
    color: 'negative'
  }
]
</script>

<template>
  <doc-section
    title="Event Calendar"
    description="The Event Calendar component is a versatile and customizable calendar component that allows you to display events in a calendar format. It provides various props to customize its appearance and behavior, making it suitable for a wide range of use cases."
  >
    <template #playground-view>
      <vk-event-calendar
        :events
        :adapter
        :current-view="form.currentView"
      />
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
