<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from 'vue'
import type { CalendarYearViewProps } from '#valkoui/types/Calendar'
import styles from '#valkoui/styles/Calendar.styles.ts'
import useGridKeyboardNav from '#valkoui/composables/useGridKeyboardNav.ts'
import VkCalendarHeader from './CalendarHeader.vue'
import VkButton from './Button.vue'

defineOptions({ name: 'VkCalendarYearView' })

const props = defineProps<CalendarYearViewProps>()
const emit = defineEmits(['selectYear'])

const s = computed(() => styles(props))

const jumps = ref(0)
const panelRef = ref<HTMLElement | null>(null)

const yearList = computed(() => {
  const start = 1970 + 20 * jumps.value

  return Array.from({ length: 20 }, (_, i) => start + i)
})

const onSelectYear = (year: number) => emit('selectYear', year)

const isYearDisabled = (year: number) => !!(props.minYear && year < props.minYear) || !!(props.maxYear && year > props.maxYear)

const navigableYears = computed(() => {
  return yearList.value.reduce<Array<{ year: number, yearIndex: number }>>((acc, year, yearIndex) => {
    if (!isYearDisabled(year)) acc.push({ year, yearIndex })
    return acc
  }, [])
})

const keyboardIndexByYear = computed<Record<number, number>>(() => {
  return navigableYears.value.reduce<Record<number, number>>((acc, item, index) => {
    acc[item.year] = index
    return acc
  }, {})
})

const focusedIndex = ref(-1)

const focusYearByKeyboardIndex = (index: number) => {
  focusedIndex.value = index

  nextTick(() => {
    panelRef.value?.querySelector<HTMLElement>(`[data-kb-index="${index}"]`)?.focus()
  })
}

const syncFocusedYear = () => {
  const selectedIndex = navigableYears.value.findIndex(item => item.year === props.selected.year)
  focusedIndex.value = selectedIndex >= 0 ? selectedIndex : (navigableYears.value.length ? 0 : -1)
}

watch(
  () => [jumps.value, props.selected.year, props.minYear, props.maxYear],
  syncFocusedYear,
  { immediate: true }
)

const handleGridKeyDown = useGridKeyboardNav({
  currentIndex: focusedIndex,
  itemCount: () => navigableYears.value.length,
  columnCount: () => 4,
  onMove: focusYearByKeyboardIndex,
  onSelect: (index: number) => {
    const year = navigableYears.value[index]
    if (year) onSelectYear(year.year)
  }
})

const onYearFocus = (year: number) => {
  const keyboardIndex = keyboardIndexByYear.value[year]
  if (keyboardIndex !== undefined) focusedIndex.value = keyboardIndex
}

onMounted(() => {
  jumps.value = Math.floor((props.startsOn - 1970) / 20)
})
</script>

<template>
  <div :class="s.viewContainer({ class: styleSlots?.viewContainer })">
    <vk-calendar-header
      v-bind="props"
      :loaded-period="`${yearList[0]} - ${yearList[19]}`"
      :disabled-left="!!(minYear && yearList.includes(minYear))"
      :disabled-right="!!(maxYear && yearList.includes(maxYear))"
      @next-click="jumps++"
      @previous-click="jumps--"
    />

    <div
      ref="panelRef"
      :class="s.panel({ class: styleSlots?.panel })"
    >
      <vk-button
        v-for="(year, index) in yearList"
        :key="`year-cell-${index}`"
        :data-kb-index="keyboardIndexByYear[year]"
        :disabled="isYearDisabled(year)"
        :tabindex="keyboardIndexByYear[year] === focusedIndex ? 0 : -1"
        :class="s.gridButton({ class: styleSlots?.gridButton })"
        :size="size"
        :color="selected.year === year ? color : 'surface'"
        :variant="selected.year === year ? variant : 'link'"
        :shape="shape"
        condensed
        @focus="onYearFocus(year)"
        @keydown="handleGridKeyDown"
        @click="onSelectYear(year)"
      >
        {{ year }}
      </vk-button>
    </div>
  </div>
</template>
