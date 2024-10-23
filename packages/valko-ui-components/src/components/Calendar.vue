<script setup lang="ts">
import { ref, watch } from 'vue'
import type { CalendarProps, DisplayView, SelectionType } from '#valkoui/types/Calendar'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Calendar.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'
import VkCalendarDayView from './CalendarDayView.vue'
import VkCalendarMonthView from './CalendayMonthView.vue'
import VkCalendarYearView from './CalendarYearView.vue'

defineOptions({ name: 'VkCalendar' })

const props = withDefaults(defineProps<CalendarProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  format: 'YYYY-MM-DD'
})

const emit = defineEmits(['update:modelValue'])

const classes = useStyle<CalendarProps, SlotStyles>(props, styles)

const formatPatternMap: Record<string, DisplayView> = {
  D: 'days',
  M: 'months',
  Y: 'years'
}

const getAvailableViews = (): DisplayView[] => {
  const availableViews = Object.keys(formatPatternMap)
    .filter(pattern => props.format.includes(pattern))
    .map(pattern => formatPatternMap[pattern])

  return availableViews.length > 0 ? availableViews : ['days']
}

const getSelectionType = (): SelectionType => {
  const hasDay = props.format.includes('D')
  const hasMonth = props.format.includes('M')
  const hasYear = props.format.includes('Y')

  if (hasDay && hasMonth && hasYear) return 'full'
  if (hasDay && hasMonth) return 'day-month'
  if (hasMonth && hasYear && !hasDay) return 'month-year'
  if (hasMonth && !hasYear && !hasDay) return 'month-only'
  if (hasYear && !hasMonth && !hasDay) return 'year-only'

  return 'full'
}

const availableViews = ref<DisplayView[]>(getAvailableViews())
const currentView = ref<DisplayView>(availableViews.value[0])
const selectionType = ref<SelectionType>(getSelectionType())

const onViewChange = (view: DisplayView) => {
  if (availableViews.value.includes(view)) currentView.value = view
}

const onSelectYear = (year: number) => {
  const result = props.adapter.onSelectYear(year)
  if (selectionType.value === 'year-only') emit('update:modelValue', result)
  else currentView.value = 'months'
}

const onSelectMonth = (month: number) => {
  const result = props.adapter.onSelectMonth(month)
  if (['month-only', 'month-year'].includes(selectionType.value)) emit('update:modelValue', result)
  else currentView.value = 'days'
}

const onSelectDay = (day: number) => {
  const result = props.adapter.onSelectDay(day)
  emit('update:modelValue', result)
}

const onChangeMonth = (month: number) => {
  switch (month) {
    case -1:
      onSelectYear(props.adapter.formattedDates.value.display.year - 1)
      onSelectMonth(11)
      break
    case 12:
      onSelectYear(props.adapter.formattedDates.value.display.year + 1)
      onSelectMonth(0)
      break
    default:
      onSelectMonth(month)
      break
  }
}

watch(() => props.format, () => {
  availableViews.value = getAvailableViews()
  selectionType.value = getSelectionType()
  currentView.value = availableViews.value[0]
})
</script>

<template>
  <div :class="classes.container">
    <vk-calendar-day-view
      v-if="currentView === 'days'"
      v-bind="props"
      :days-in-month="adapter.formattedDates.value.display.lastDayOfMonth"
      :starts-on="adapter.formattedDates.value.display.firstWeekDay"
      :week-days="adapter.getWeekdays()"
      :data-current-view="currentView"
      :selected="adapter.formattedDates.value.selected"
      :display="adapter.formattedDates.value.display"
      :month-names="adapter.getMonths()"
      :min="adapter.formattedDates.value.min"
      :max="adapter.formattedDates.value.max"
      :disabled-days="adapter.disabledDates.value"
      @view-change="onViewChange"
      @select-day="onSelectDay"
      @change-month="onChangeMonth"
    />

    <vk-calendar-month-view
      v-else-if="currentView === 'months'"
      v-bind="props"
      :month-names="adapter.getMonths()"
      :data-current-view="currentView"
      :selected="adapter.formattedDates.value.selected"
      :display="adapter.formattedDates.value.display"
      :min="adapter.formattedDates.value.min"
      :max="adapter.formattedDates.value.max"
      @view-change="onViewChange"
      @select-month="onSelectMonth"
      @change-year="onSelectYear"
    />

    <vk-calendar-year-view
      v-else-if="currentView === 'years'"
      v-bind="props"
      :starts-on="adapter.formattedDates.value.selected.year"
      :data-current-view="currentView"
      :selected="adapter.formattedDates.value.selected"
      :min-year="adapter.formattedDates.value.min?.year"
      :max-year="adapter.formattedDates.value.max?.year"
      @select-year="onSelectYear"
    />
  </div>
</template>
