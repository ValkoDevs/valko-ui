<script setup lang="ts">
import { computed } from 'vue'
import {
  CalendarCell,
  CalendarCellTrigger,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHead,
  CalendarGridRow,
  CalendarHeadCell
} from 'reka-ui'
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
      as="table"
      :class="s.panel({ class: styleSlots?.panel })"
    >
      <CalendarGridHead>
        <CalendarGridRow>
          <CalendarHeadCell
            v-for="(weekday, index) in weekDays"
            :key="index"
            :class="s.weekdaySpan({ class: styleSlots?.weekdaySpan })"
          >
            {{ weekday }}
          </CalendarHeadCell>
        </CalendarGridRow>
      </CalendarGridHead>

      <CalendarGridBody>
        <CalendarGridRow
          v-for="(week, index) in props.grid.rows"
          :key="index"
        >
          <CalendarCell
            v-for="date in week"
            :key="date.toString()"
            :date="date"
            as="td"
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
        </CalendarGridRow>
      </CalendarGridBody>
    </CalendarGrid>
  </div>
</template>
