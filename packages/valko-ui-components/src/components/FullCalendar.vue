<script setup lang="ts">
import { ref } from 'vue'
import { FullCalendarProps } from '#valkoui/types/FullCalendar'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/FullCalendar.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'
import VkTabs from './Tabs.vue'

defineOptions({ name: 'VkFullCalendar' })

const props = withDefaults(defineProps<FullCalendarProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  events: () => []
})

//const emit = defineEmits(['update:modelValue'])

const classes = useStyle<FullCalendarProps, SlotStyles>(props, styles)

const currentView = ref(0)

const viewsOpts = [
  { key: 'day', title: 'Day' },
  { key: 'week', title: 'Weekdays' },
  { key: 'full-week', title: 'Full Week' },
  { key: 'month', title: 'Month' }
]
</script>

<template>
  <div :class="classes.container">
    <div :class="classes.header">
      <div class="flex gap-2 items-center">
        <vk-button
          :size="size"
          variant="filled"
          flat
          color="neutral"
          condensed
          :shape="shape"
          class="size-8 px-2"
        >
          <vk-icon
            name="chevron-left"
            class="text-xl"
          />
        </vk-button>

        Month

        <vk-button
          :size="size"
          variant="filled"
          flat
          color="neutral"
          condensed
          :shape="shape"
          class="size-8 px-2"
        >
          <vk-icon
            name="chevron-right"
            class="text-xl"
          />
        </vk-button>
      </div>

      <div class="flex gap-2 items-center">
        <vk-tooltip content="Add event">
          <vk-button
            size="xs"
            variant="filled"
            flat
            condensed
            color="neutral"
            class="size-8 px-2"
          >
            <vk-icon
              name="calendar-plus"
              class="text-xl"
            />
          </vk-button>
        </vk-tooltip>

        <vk-tooltip content="Add timezone">
          <vk-button
            size="xs"
            variant="filled"
            flat
            condensed
            color="neutral"
            class="size-8 px-2"
          >
            <vk-icon
              name="world-plus"
              class="text-xl"
            />
          </vk-button>
        </vk-tooltip>

        <vk-tabs
          v-model="currentView"
          :tabs="viewsOpts"
          color="neutral"
          variant="ghost"
          size="xs"
          flat
        />
      </div>
    </div>

    <div :class="classes.content">
      <vk-full-calendar-day-view
        v-if="currentView === 0"
        :events="events"
        :timezones="timezones"
      />
      <vk-full-calendar-week-view
        v-else-if="[1, 2].includes(currentView)"
        :events="events"
        :timezones="timezones"
        :no-weekends="currentView === 1"
      />
      <vk-full-calendar-month-view
        v-else-if="currentView === 3"
        :events="events"
        :timezones="timezones"
      />
    </div>
  </div>
</template>
