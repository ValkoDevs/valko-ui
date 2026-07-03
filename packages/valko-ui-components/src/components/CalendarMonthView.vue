<script setup lang="ts">
import { computed, nextTick, ref, watch } from 'vue'
import type { CalendarMonthViewProps } from '#valkoui/types/Calendar'
import styles from '#valkoui/styles/Calendar.styles.ts'
import handleKeyboardNavigation from '#valkoui/keyboard-navigation/handleKeyboardNavigation.ts'
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
  return !!((props.min && props.display.year === props.min.year && monthIndex < props.min.month)
    || (props.max && props.display.year === props.max.year && monthIndex > props.max.month))
}

const navigableMonths = computed(() => {
  return props.monthNames.reduce<Array<{ monthIndex: number }>>((acc, _, monthIndex) => {
    if (!isMonthDisabled(monthIndex)) acc.push({ monthIndex })
    return acc
  }, [])
})

const keyboardIndexByMonth = computed<Record<number, number>>(() => {
  return navigableMonths.value.reduce<Record<number, number>>((acc, month, index) => {
    acc[month.monthIndex] = index
    return acc
  }, {})
})

const focusedIndex = ref(-1)

const focusMonthByKeyboardIndex = (index: number) => {
  focusedIndex.value = index

  nextTick(() => {
    panelRef.value?.querySelector<HTMLElement>(`[data-kb-index="${index}"]`)?.focus()
  })
}

const syncFocusedMonth = () => {
  const selectedIndex = navigableMonths.value.findIndex(month => month.monthIndex === props.selected.month)
  focusedIndex.value = selectedIndex >= 0 ? selectedIndex : (navigableMonths.value.length ? 0 : -1)
}

watch(
  () => [props.display.year, props.selected.month, props.min, props.max],
  syncFocusedMonth,
  { immediate: true }
)

const handleGridKeyDown = handleKeyboardNavigation({
  strategy: 'grid',
  currentIndex: focusedIndex,
  itemCount: () => navigableMonths.value.length,
  columnCount: () => 3,
  onMove: focusMonthByKeyboardIndex,
  onSelect: (index: number) => {
    const month = navigableMonths.value[index]
    if (month) onSelectMonth(month.monthIndex)
  }
})

const onMonthFocus = (monthIndex: number) => {
  const keyboardIndex = keyboardIndexByMonth.value[monthIndex]
  if (keyboardIndex !== undefined) focusedIndex.value = keyboardIndex
}
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
        :data-kb-index="keyboardIndexByMonth[index]"
        :disabled="isMonthDisabled(index)"
        :tabindex="keyboardIndexByMonth[index] === focusedIndex ? 0 : -1"
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
