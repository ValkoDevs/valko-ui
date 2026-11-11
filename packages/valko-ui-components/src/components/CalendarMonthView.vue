<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import type { CalendarMonthViewProps } from '#valkoui/types/Calendar'
import styles from '#valkoui/styles/Calendar.styles.ts'
import useGridKeyboardNav from '#valkoui/composables/useGridKeyboardNav.ts'
import VkCalendarHeader from './CalendarHeader.vue'
import VkButton from './Button.vue'

defineOptions({ name: 'VkCalendarMonthView' })

const props = defineProps<CalendarMonthViewProps>()

const emit = defineEmits(['selectMonth', 'viewChange', 'changeYear'])

const s = computed(() => styles(props))
const panelRef = ref<HTMLElement | null>(null)

const isSelected = (index: number) => props.selected.year === props.display.year && props.selected.month === index
const onSelectMonth = (month: number) => emit('selectMonth', month)
const onArrowClick = (operation: 1 | -1) => emit('changeYear', props.display.year + operation)

const isMonthDisabled = (monthIndex: number) => {
  if (props.min && props.display.year === props.min.year && monthIndex < props.min.month) return true
  if (props.max && props.display.year === props.max.year && monthIndex > props.max.month) return true

  return false
}

const focusedIndex = ref(-1)

const focusMonthByIndex = (index: number) => {
  focusedIndex.value = index

  nextTick(() => {
    panelRef.value?.querySelector<HTMLElement>(`[data-kb-index="${index}"]`)?.focus()
  })
}

const syncFocusedMonth = () => {
  focusedIndex.value = isMonthDisabled(props.selected.month)
    ? props.monthNames.findIndex((_, index) => !isMonthDisabled(index))
    : props.selected.month
}

const handleGridKeyDown = useGridKeyboardNav({
  currentIndex: focusedIndex,
  itemCount: () => props.monthNames.length,
  columnCount: () => 3,
  isItemDisabled: isMonthDisabled,
  onMove: focusMonthByIndex,
  onSelect: (index: number) => {
    const isWithinMonth = index >= 0 && index < props.monthNames.length
    if (isWithinMonth && !isMonthDisabled(index)) onSelectMonth(index)
  }
})

const onMonthFocus = (monthIndex: number) => {
  if (!isMonthDisabled(monthIndex)) focusedIndex.value = monthIndex
}

watch([() => props.min, () => props.max, () => props.display, () => props.selected.month],
  syncFocusedMonth,
  { immediate: true }
)
</script>

<template>
  <div :class="s.viewContainer({ class: styleSlots?.viewContainer })">
    <vk-calendar-header
      v-bind="props"
      :loaded-period="display.year"
      :disabled-left="min && min.year === display.year"
      :disabled-right="max && max.year === display.year"
      @view-change="emit('viewChange', 'years')"
      @next-click="onArrowClick(1)"
      @previous-click="onArrowClick(-1)"
    />
    <div
      ref="panelRef"
      :class="s.panel({ class: styleSlots?.panel })"
    >
      <vk-button
        v-for="(month, index) in monthNames"
        :key="`month-cell-${index}`"
        :data-kb-index="index"
        :disabled="isMonthDisabled(index)"
        :tabindex="index === focusedIndex ? 0 : -1"
        :class="s.gridButton({ class: styleSlots?.gridButton })"
        :size="size"
        :color="isSelected(index) ? color : 'surface'"
        :variant="isSelected(index) ? variant : 'link'"
        :shape="shape"
        condensed
        @focus="onMonthFocus(index)"
        @keydown="handleGridKeyDown"
        @click="onSelectMonth(index)"
      >
        {{ month }}
      </vk-button>
    </div>
  </div>
</template>
