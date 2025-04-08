<script setup lang="ts">
import type { TableItem, FullCalendarProps, Event } from '#valkoui'

const form = ref<FullCalendarProps>({
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  events: []
})

const fullCalendarProps: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Calendar.',
    values: 'primary, neutral, error, warning, info, success',
    default: 'primary'
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The variant of the Calendar.',
    values: 'filled, outlined, ghost, gradient',
    default: 'filled'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Calendar.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Calendar.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    key: 'eventsProp',
    prop: 'events',
    required: false,
    description: 'The events that will the Calendar display.',
    values: 'Event[]',
    default: '[]'
  }
]

const fullCalendarEmits: TableItem[] = [
  {
    key: 'updateModelValueEmit',
    event: 'update:modelValue',
    type: '() => void',
    values: '',
    description: 'Emitted when idk yet.'
  }
]

const fullCalendarSlots: TableItem[] = [
  {
    key: 'eventSlot',
    name: 'event',
    description: 'Slot to custimize the event content.',
    example: '<template #event>\n  <p>Your event!!.</p>\n</template>'
  }
]

const eventProps: TableItem[] = [
  {
    key: 'idProp',
    prop: 'id',
    required: true,
    description: 'id',
    values: 'String',
    default: ''
  },
  {
    key: 'startProp',
    prop: 'start',
    required: true,
    description: 'start',
    values: 'Epoch',
    default: ''
  },
  {
    key: 'endProp',
    prop: 'end',
    required: true,
    description: 'end',
    values: 'Epoch',
    default: ''
  },
  {
    key: 'titleProp',
    prop: 'title',
    required: true,
    description: 'title',
    values: 'String',
    default: ''
  },
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'color',
    values: 'primary, neutral, info, warning, error, success',
    default: ''
  },
  {
    key: 'locationProp',
    prop: 'location',
    required: false,
    description: 'location',
    values: 'TZ?',
    default: ''
  },
  {
    key: 'customProp',
    prop: 'custom',
    required: false,
    description: 'custom',
    values: 'Record<string, string>',
    default: ''
  }
]

// Testing Bulk
const timezones = [
  'America/New_York',
  'Asia/Tokyo',
  'Europe/Madrid'
]

const events: Event[] = [
  {
    id: '1',
    start: new Date('2025-04-08T09:00:00Z'), // UTC
    end: new Date('2025-04-08T10:00:00Z'),
    title: 'Morning Sync NY',
    color: '#FF5733',
    location: 'Zoom',
    custom: { speaker: 'Alice' }
  },
  {
    id: '2',
    start: new Date('2025-04-08T14:00:00Z'),
    end: new Date('2025-04-08T15:30:00Z'),
    title: 'Product Review Tokyo',
    color: '#33C3FF',
    location: 'Meet',
    custom: { reviewer: 'Kenji' }
  },
  {
    id: '3',
    start: new Date('2025-04-08T08:00:00Z'),
    end: new Date('2025-04-08T08:45:00Z'),
    title: 'Daily Europe Team',
    color: '#28B463',
    location: 'Office',
    custom: { team: 'EU' }
  }
]
</script>

<template>
  <doc-section
    title="Full Calendar"
    description="The Full Calendar component."
  >
    <template #playground-view>
      <vk-full-calendar
        :events
        :timezones
      />
    </template>

    <template #playground-options>
      <vk-select
        v-model="form.color"
        label="Color"
        size="sm"
        :options="colorOptions"
      />
      <vk-select
        v-model="form.variant"
        label="Variant"
        size="sm"
        :options="variantOptions.withGradient"
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
    </template>

    <template #examples />

    <template #api>
      <h3>Full Calendar Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="fullCalendarProps"
      />

      <h3>Full Calendar Emits</h3>
      <vk-table
        :headers="emitHeaders"
        :data="fullCalendarEmits"
      />

      <h3>Full Calendar Slots</h3>
      <vk-table
        :headers="slotHeaders"
        :data="fullCalendarSlots"
      />

      <h3>Event Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="eventProps"
      />
    </template>
  </doc-section>
</template>
