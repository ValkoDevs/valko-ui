<script setup lang="ts">
import { ref, shallowRef, watch, computed } from 'vue'
import { CalendarRoot } from 'reka-ui'
import type { DateValue } from '@internationalized/date'
import type { CalendarProps, DisplayView, SelectionType } from '#valkoui/types/Calendar'
import styles from '#valkoui/styles/Calendar.styles.ts'
import VkCalendarDayView from './CalendarDayView.vue'
import VkCalendarMonthView from './CalendarMonthView.vue'
import VkCalendarYearView from './CalendarYearView.vue'

defineOptions({ name: 'VkCalendar' })

const props = withDefaults(defineProps<CalendarProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  format: 'YYYY-MM-DD'
})

const emit = defineEmits(['update:modelValue', 'finalizeSelection'])

const s = computed(() => styles(props))

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

const placeholder = shallowRef<DateValue>(props.modelValue)

const onViewChange = (view: DisplayView) => currentView.value = view

const onPlaceholderChange = (date: DateValue | undefined) => {
  if (!date) return
  placeholder.value = date
  props.adapter.onPlaceholderChange(date)
}

const isDateDisabled = (date: DateValue) => props.adapter.isDateDisabled(date)

const onSelectDay = (date: DateValue | undefined) => {
  if (!date) return
  placeholder.value = date
  emit('update:modelValue', date)
  emit('finalizeSelection')
}

const onSelectYear = (year: number) => {
  const result = props.adapter.onSelectYear(year)
  onPlaceholderChange(result)
  if (selectionType.value === 'year-only') {
    emit('update:modelValue', result)
    emit('finalizeSelection')
  }
  else currentView.value = 'months'
}

const onSelectMonth = (month: number) => {
  const result = props.adapter.onSelectMonth(month)
  onPlaceholderChange(result)
  if (['month-only', 'month-year'].includes(selectionType.value)) {
    emit('update:modelValue', result)
    emit('finalizeSelection')
  }
  else currentView.value = 'days'
}

const onChangeMonth = (operation: 1 | -1) => {
  onPlaceholderChange(placeholder.value.add({ months: operation }))
}

watch(() => props.format, () => {
  availableViews.value = getAvailableViews()
  selectionType.value = getSelectionType()
  currentView.value = availableViews.value[0]
})

watch(() => props.modelValue, (value) => {
  placeholder.value = value
  props.adapter.onPlaceholderChange(value)
})
</script>

<template>
  <CalendarRoot
    v-slot="{ grid, weekDays }"
    :model-value="modelValue"
    :placeholder="placeholder"
    :locale="locale"
    :min-value="minDate"
    :max-value="maxDate"
    :is-date-disabled="isDateDisabled"
    :calendar-label="calendarLabel ?? 'Calendar'"
    prevent-deselect
    @update:model-value="onSelectDay"
    @update:placeholder="onPlaceholderChange"
  >
    <div
      :class="s.container({ class: styleSlots?.container })"
      :data-selection-type="selectionType"
    >
      <vk-calendar-day-view
        v-if="currentView === 'days'"
        v-bind="props"
        :grid="grid[0]"
        :week-days="weekDays"
        :data-current-view="currentView"
        @view-change="onViewChange"
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
  </CalendarRoot>
</template>
