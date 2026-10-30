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

const gridCells = computed(() =>
  Array.from({ length: 42 }, (_, index) => {
    const day = index - props.startsOn + 1
    return day > 0 && day <= props.daysInMonth ? day : null
  })
)

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
  return props.disabledDays?.includes(day) || !!(props.disableWeekends && isWeekend(index))
}

const focusedIndex = ref(-1)

const focusCellByGridIndex = (index: number) => {
  focusedIndex.value = index

  nextTick(() => {
    panelRef.value?.querySelector<HTMLElement>(`[data-kb-index="${index}"]`)?.focus()
  })
}

const isIndexDisabled = (index: number) => {
  const cell = gridCells.value[index]
  return cell === null || isCellDisabled(cell, index)
}

const firstEnabledIndex = () => gridCells.value.findIndex((_, index) => !isIndexDisabled(index))

const syncFocusedCell = () => {
  const selectedIndex = gridCells.value.findIndex((cell, index) =>
    cell === props.selected.day && !isIndexDisabled(index))

  focusedIndex.value = selectedIndex >= 0 ? selectedIndex : firstEnabledIndex()
}

watch([gridCells, () => props.disabledDays, () => props.disableWeekends, () => props.selected.day],
  syncFocusedCell,
  { immediate: true }
)

const handleGridKeyDown = useGridKeyboardNav({
  currentIndex: focusedIndex,
  itemCount: () => gridCells.value.length,
  columnCount: () => 7,
  isItemDisabled: isIndexDisabled,
  onMove: focusCellByGridIndex,
  onSelect: (index: number) => {
    const cell = gridCells.value[index]
    if (cell !== null && cell !== undefined && !isIndexDisabled(index)) onSelectDate(cell)
  }
})

const onCellFocus = (gridIndex: number) => {
  if (!isIndexDisabled(gridIndex)) focusedIndex.value = gridIndex
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
          :data-kb-index="index"
          :class="s.gridButton({ class: styleSlots?.gridButton })"
          :size="size"
          :disabled="isCellDisabled(cell, index)"
          :tabindex="index === focusedIndex ? 0 : -1"
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
