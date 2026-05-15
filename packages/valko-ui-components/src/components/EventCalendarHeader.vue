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

const emit = defineEmits(['previousClick', 'nextClick', 'todayClick', 'viewChange'])

const s = computed(() => styles(props))

const views: Item[] = [
  { title: 'Day', key: 'day' },
  { title: 'Week', key: 'week' },
  { title: 'Month', key: 'month' }
]

const dateLabel = computed(() =>
  props.adapter.getDateLabel(
    props.modelValue ?? new Date(),
    props.currentView ?? 'day',
    props.showWeekends !== false
  )
)
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

      <span
        :class="s.headerTitle({ class: styleSlots?.headerTitle })"
        aria-live="polite"
        aria-atomic="true"
      >
        {{ dateLabel }}
      </span>

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
