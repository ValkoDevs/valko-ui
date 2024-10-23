<script setup lang="ts">
import type { CalendarMonthViewProps } from '#valkoui/types/Calendar'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Calendar.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'
import VkCalendarHeader from './CalendarHeader.vue'
import VkButton from './Button.vue'

defineOptions({ name: 'VkCalendarMonthView' })

const props = defineProps<CalendarMonthViewProps>()

const emit = defineEmits(['selectMonth', 'viewChange', 'changeYear'])

const classes = useStyle<CalendarMonthViewProps, SlotStyles>(props, styles)

const isSelected = (index: number) => props.selected.year === props.display.year && props.selected.month === index
const onSelectMonth = (month: number) => emit('selectMonth', month)
const onArrowClick = (operation: 1 | -1) => emit('changeYear', props.display.year + operation)
</script>

<template>
  <div :class="classes.viewContainer">
    <vk-calendar-header
      v-bind="props"
      :loaded-period="display.year"
      :disabled-left="min && min.year === display.year"
      :disabled-right="max && max.year === display.year"
      @view-change="emit('viewChange', 'years')"
      @next-click="onArrowClick(1)"
      @previous-click="onArrowClick(-1)"
    />
    <div :class="classes.panel">
      <vk-button
        v-for="(month, index) in monthNames"
        :key="`month-cell-${index}`"
        :disabled="(min && display.year === min.year && index < min.month) || (max && display.year === max.year && index > max.month)"
        :class="classes.gridButton"
        :size="size"
        :color="isSelected(index) ? color : 'neutral'"
        :variant="isSelected(index) ? variant : 'link'"
        :shape="shape"
        flat
        @click="onSelectMonth(index)"
      >
        {{ month }}
      </vk-button>
    </div>
  </div>
</template>
