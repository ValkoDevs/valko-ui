<script setup lang="ts">
import { computed } from 'vue'
import type { CalendarDayViewProps } from '#valkoui/types/Calendar'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Calendar.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'
import VkCalendarHeader from './CalendarHeader.vue'
import VkButton from './Button.vue'

defineOptions({ name: 'VkCalendarDayView' })

const props = defineProps<CalendarDayViewProps>()

const emit = defineEmits(['selectDay', 'viewChange', 'changeMonth'])

const classes = useStyle<CalendarDayViewProps, SlotStyles>(props, styles)

const gridCells = computed(() => {
  const daysInMonth = [...new Array(props.daysInMonth).keys()].map((day) => day + 1)
  const result = new Array(42).fill(null).map((_, index) => index < props.startsOn ? null : daysInMonth[index - props.startsOn] || null)

  return result
})

const isSelected = (day: number) =>
  props.selected.year === props.display.year
  && props.selected.month === props.display.month
  && props.selected.day === day

const isArrowDisabled = computed(() => (direction: 'min' | 'max') =>
  props[direction]
  && props[direction].year === props.display.year
  && props[direction].month === props.display.month
)

const isWeekend = (index: number) => [0, 6].includes(index - Math.floor(index / 7) * 7)
const onSelectDate = (day: number) => emit('selectDay', day)
const onArrowClick = (operation: 1 | -1) => emit('changeMonth', props.display.month + operation)
</script>

<template>
  <div :class="classes.viewContainer">
    <vk-calendar-header
      v-bind="props"
      :loaded-period="`${monthNames[display.month]} - ${display.year}`"
      :disabled-left="isArrowDisabled('min')"
      :disabled-right="isArrowDisabled('max')"
      @next-click="onArrowClick(1)"
      @previous-click="onArrowClick(-1)"
      @view-change="emit('viewChange', 'months')"
    />

    <div :class="classes.panel">
      <span
        v-for="(weekday, index) in weekDays"
        :key="index"
        :class="classes.weekdaySpan"
      >
        {{ weekday }}
      </span>

      <template v-for="(cell, index) in gridCells">
        <span
          v-if="cell === null"
          :key="`empty-cell-${index}`"
          :class="classes.hiddenGridButton"
        />

        <vk-button
          v-else
          :key="`day-cell-${index}`"
          :class="classes.gridButton"
          :size="size"
          :disabled="disabledDays?.includes(cell) || (disableWeekends && isWeekend(index))"
          :color="isSelected(cell) ? color : 'neutral'"
          :variant="isSelected(cell) ? variant : 'link'"
          :shape="shape"
          condensed
          flat
          @click="onSelectDate(cell)"
        >
          {{ cell }}
        </vk-button>
      </template>
    </div>
  </div>
</template>
