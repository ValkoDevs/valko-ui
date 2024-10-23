<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import type { CalendarYearViewProps } from '#valkoui/types/Calendar'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Calendar.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'
import VkCalendarHeader from './CalendarHeader.vue'
import VkButton from './Button.vue'

defineOptions({ name: 'VkCalendarYearView' })

const props = defineProps<CalendarYearViewProps>()
const emit = defineEmits(['selectYear'])

const classes = useStyle<CalendarYearViewProps, SlotStyles>(props, styles)

const jumps = ref(0)

const yearList = computed(() => {
  const start = 1970 + 20 * jumps.value

  return Array.from({ length: 20 }, (_, i) => start + i)
})

const onSelectYear = (year: number) => emit('selectYear', year)

onMounted(() => {
  jumps.value = Math.floor((props.startsOn - 1970) / 20)
})
</script>

<template>
  <div :class="classes.viewContainer">
    <vk-calendar-header
      v-bind="props"
      :loaded-period="`${yearList[0]} - ${yearList[19]}`"
      :disabled-left="!!(minYear && yearList.includes(minYear))"
      :disabled-right="!!(maxYear && yearList.includes(maxYear))"
      @next-click="jumps++"
      @previous-click="jumps--"
    />

    <div :class="classes.panel">
      <vk-button
        v-for="(year, index) in yearList"
        :key="`year-cell-${index}`"
        :disabled="!!(minYear && year < minYear) || !!(maxYear && year > maxYear)"
        :class="classes.gridButton"
        :size="size"
        :color="selected.year === year ? color : 'neutral'"
        :variant="selected.year === year ? variant : 'link'"
        :shape="shape"
        flat
        @click="onSelectYear(year)"
      >
        {{ year }}
      </vk-button>
    </div>
  </div>
</template>
