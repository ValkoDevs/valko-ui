<script setup lang="ts">
import { computed } from 'vue'
import type { EventCalendarHeaderProps, ViewMode } from '#valkoui/types/EventCalendar'
import type { Item } from '#valkoui/types/Dropdown'
import styles from '#valkoui/styles/EventCalendar.styles.ts'
import VkButton from './Button.vue'
import VkDropdown from './Dropdown.vue'
import VkIcon from './Icon.vue'

defineOptions({ name: 'VkEventCalendarHeader' })

const props = withDefaults(defineProps<EventCalendarHeaderProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  currentView: 'day'
})

const emit = defineEmits<{
  previousClick: []
  nextClick: []
  todayClick: []
  viewChange: [view: ViewMode]
}>()

const s = computed(() => styles(props))

const views: Item[] = [
  { title: 'Day', key: 'day' },
  { title: 'Week', key: 'week' },
  { title: 'Month', key: 'month' }
]

const getMonday = (date: Date): Date => {
  const d = new Date(date)
  const day = d.getDay()
  const diff = day === 0 ? -6 : 1 - day
  d.setDate(d.getDate() + diff)
  return d
}

const dateLabel = computed(() => {
  const date = props.modelValue ?? new Date()

  if (props.currentView === 'day') {
    return date.toLocaleDateString('en-US', {
      weekday: 'long',
      month: 'long',
      day: 'numeric',
      year: 'numeric'
    })
  }

  if (props.currentView === 'week') {
    const monday = getMonday(date)
    const lastDay = new Date(monday)
    lastDay.setDate(monday.getDate() + (props.showWeekends === false ? 4 : 6))

    const sameMonth = monday.getMonth() === lastDay.getMonth()
    const sameYear = monday.getFullYear() === lastDay.getFullYear()

    if (sameMonth && sameYear) {
      const month = monday.toLocaleDateString('en-US', { month: 'long' })
      return `${month} ${monday.getDate()} – ${lastDay.getDate()}, ${lastDay.getFullYear()}`
    }

    if (sameYear) {
      const start = monday.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
      const end = lastDay.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
      return `${start} – ${end}, ${lastDay.getFullYear()}`
    }

    const start = monday.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    const end = lastDay.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
    return `${start} – ${end}`
  }

  // month view
  return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
})
</script>

<template>
  <div
    role="toolbar"
    aria-label="Calendar navigation"
    :class="s.headerContainer({ class: styleSlots?.headerContainer })"
  >
    <slot
      name="header"
      :date-label="dateLabel"
      :current-view="currentView"
    >
      <!-- Navigation: prev, today, next -->
      <div :class="s.headerNavGroup({ class: styleSlots?.headerNavGroup })">
        <vk-button
          :color="color"
          :size="size"
          :shape="shape"
          variant="link"
          aria-label="Previous"
          @click="emit('previousClick')"
        >
          <vk-icon name="chevron-left" />
        </vk-button>

        <vk-button
          :color="color"
          :size="size"
          :shape="shape"
          :variant="variant"
          aria-label="Go to today"
          @click="emit('todayClick')"
        >
          Today
        </vk-button>

        <vk-button
          :color="color"
          :size="size"
          :shape="shape"
          variant="link"
          aria-label="Next"
          @click="emit('nextClick')"
        >
          <vk-icon name="chevron-right" />
        </vk-button>
      </div>

      <!-- Current date / range label -->
      <span
        :class="s.headerTitle({ class: styleSlots?.headerTitle })"
        aria-live="polite"
        aria-atomic="true"
      >
        {{ dateLabel }}
      </span>

      <!-- View switcher -->
      <vk-dropdown
        :color="color"
        :size="size"
        :shape="shape"
        :variant="variant"
        :label="views.find(v => v.key === currentView)?.title || 'View'"
        :items="views"
        @item-click="emit('viewChange', ($event as Item).key as ViewMode)"
      />
    </slot>
  </div>
</template>
