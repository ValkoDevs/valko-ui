<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import type { CalendarDayViewProps } from '#valkoui/types/Calendar'
import styles from '#valkoui/styles/Calendar.styles.ts'
import useGridKeyboardNav from '#valkoui/composables/useGridKeyboardNav.ts'
import VkCalendarHeader from './CalendarHeader.vue'
import VkButton from './Button.vue'

defineOptions({ name: 'VkCalendarDayView' })

const props = defineProps<CalendarDayViewProps>()

const emit = defineEmits(['selectDay', 'viewChange', 'changeMonth'])

const s = computed(() => styles(props))
const panelRef = ref<HTMLElement | null>(null)

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

const isCellDisabled = (day: number, index: number) => {
  return !!props.disabledDays?.includes(day) || !!(props.disableWeekends && isWeekend(index))
}

const navigableCells = computed(() => {
  return gridCells.value.reduce<Array<{ gridIndex: number, day: number }>>((acc, cell, index) => {
    if (cell === null) return acc
    if (isCellDisabled(cell, index)) return acc

    acc.push({ gridIndex: index, day: cell })
    return acc
  }, [])
})

const keyboardIndexByGridIndex = computed<Record<number, number>>(() => {
  return navigableCells.value.reduce<Record<number, number>>((acc, cell, index) => {
    acc[cell.gridIndex] = index
    return acc
  }, {})
})

const focusedIndex = ref(-1)

const focusCellByKeyboardIndex = (index: number) => {
  focusedIndex.value = index

  nextTick(() => {
    panelRef.value?.querySelector<HTMLElement>(`[data-kb-index="${index}"]`)?.focus()
  })
}

const syncFocusedCell = () => {
  const selectedIndex = navigableCells.value.findIndex(cell => cell.day === props.selected.day)
  focusedIndex.value = selectedIndex >= 0 ? selectedIndex : (navigableCells.value.length ? 0 : -1)
}

watch(
  () => [props.display.year, props.display.month, props.selected.day, props.disabledDays, props.disableWeekends],
  syncFocusedCell,
  { immediate: true }
)

const handleGridKeyDown = useGridKeyboardNav({
  currentIndex: focusedIndex,
  itemCount: () => navigableCells.value.length,
  columnCount: () => 7,
  onMove: focusCellByKeyboardIndex,
  onSelect: (index: number) => {
    const cell = navigableCells.value[index]
    if (cell) onSelectDate(cell.day)
  }
})

const onCellFocus = (gridIndex: number) => {
  const keyboardIndex = keyboardIndexByGridIndex.value[gridIndex]
  if (keyboardIndex !== undefined) focusedIndex.value = keyboardIndex
}
</script>

<template>
  <div :class="s.viewContainer({ class: styleSlots?.viewContainer })">
    <vk-calendar-header
      v-bind="props"
      :loaded-period="`${monthNames[display.month]} - ${display.year}`"
      :disabled-left="isArrowDisabled('min')"
      :disabled-right="isArrowDisabled('max')"
      @next-click="onArrowClick(1)"
      @previous-click="onArrowClick(-1)"
      @view-change="emit('viewChange', 'months')"
    />

    <div
      ref="panelRef"
      :class="s.panel({ class: styleSlots?.panel })"
    >
      <span
        v-for="(weekday, index) in weekDays"
        :key="index"
        :class="s.weekdaySpan({ class: styleSlots?.weekdaySpan })"
      >
        {{ weekday }}
      </span>

      <template v-for="(cell, index) in gridCells">
        <span
          v-if="cell === null"
          :key="`empty-cell-${index}`"
          :class="s.hiddenGridButton({ class: styleSlots?.hiddenGridButton })"
        />

        <vk-button
          v-else
          :key="`day-cell-${index}`"
          :data-kb-index="keyboardIndexByGridIndex[index]"
          :class="s.gridButton({ class: styleSlots?.gridButton })"
          :size="size"
          :disabled="isCellDisabled(cell, index)"
          :tabindex="keyboardIndexByGridIndex[index] === focusedIndex ? 0 : -1"
          :color="isSelected(cell) ? color : 'surface'"
          :variant="isSelected(cell) ? variant : 'link'"
          :shape="shape"
          condensed
          @focus="onCellFocus(index)"
          @keydown="handleGridKeyDown"
          @click="onSelectDate(cell)"
        >
          {{ cell }}
        </vk-button>
      </template>
    </div>
  </div>
</template>
