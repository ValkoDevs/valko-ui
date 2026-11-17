<script setup lang="ts">
import { computed } from 'vue'
import { CalendarCell, CalendarCellTrigger, CalendarGrid } from 'reka-ui'
import type { DateValue } from '@internationalized/date'
import type { CalendarDayViewProps } from '#valkoui/types/Calendar'
import styles from '#valkoui/styles/Calendar.styles.ts'
import VkCalendarHeader from './CalendarHeader.vue'
import VkButton from './Button.vue'

defineOptions({ name: 'VkCalendarDayView' })

const props = defineProps<CalendarDayViewProps>()

const emit = defineEmits(['viewChange', 'changeMonth'])

const s = computed(() => styles(props))

const isDaySelected = (date: DateValue) => props.modelValue.compare(date) === 0

const isDayDisabled = (date: DateValue) => props.adapter.isDateDisabled(date)

const isInsideView = (date: DateValue) => date.month === props.grid.value.month

const isArrowDisabled = computed(() => (direction: 'min' | 'max') => {
  const limit = props.adapter.formattedDates.value[direction]

  return !!limit
    && limit.year === props.adapter.formattedDates.value.display.year
    && limit.month === props.adapter.formattedDates.value.display.month
})

const onArrowClick = (operation: 1 | -1) => emit('changeMonth', operation)
</script>

<template>
  <div :class="s.viewContainer({ class: styleSlots?.viewContainer })">
    <vk-calendar-header
      v-bind="props"
      :loaded-period="`${props.adapter.getMonths()[props.grid.value.month - 1]} - ${props.grid.value.year}`"
      :disabled-left="isArrowDisabled('min')"
      :disabled-right="isArrowDisabled('max')"
      @next-click="onArrowClick(1)"
      @previous-click="onArrowClick(-1)"
      @view-change="emit('viewChange', 'months')"
    />

    <CalendarGrid
      as="div"
      :class="s.panel({ class: styleSlots?.panel })"
    >
      <span
        v-for="(weekday, index) in weekDays"
        :key="index"
        :class="s.weekdaySpan({ class: styleSlots?.weekdaySpan })"
      >
        {{ weekday }}
      </span>

      <CalendarCell
        v-for="date in props.grid.rows.flat()"
        :key="date.toString()"
        :date="date"
        as="div"
      >
        <CalendarCellTrigger
          v-if="isInsideView(date)"
          :day="date"
          :month="props.grid.value"
          as-child
        >
          <vk-button
            :class="s.gridButton({ class: styleSlots?.gridButton })"
            :size="size"
            :disabled="isDayDisabled(date)"
            :color="isDaySelected(date) ? color : 'surface'"
            :variant="isDaySelected(date) ? variant : 'link'"
            :shape="shape"
            condensed
          >
            {{ date.day }}
          </vk-button>
        </CalendarCellTrigger>
        <span
          v-else
          :class="s.hiddenGridButton({ class: styleSlots?.hiddenGridButton })"
        />
      </CalendarCell>
    </CalendarGrid>
  </div>
</template>
