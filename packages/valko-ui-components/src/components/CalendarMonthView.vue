<script setup lang="ts">
import type { CalendarMonthViewProps } from '#valkoui/types/Calendar'
import styles from '#valkoui/styles/Calendar.styles.ts'
import VkCalendarHeader from './CalendarHeader.vue'
import VkButton from './Button.vue'

defineOptions({ name: 'VkCalendarMonthView' })

const props = defineProps<CalendarMonthViewProps>()

const emit = defineEmits(['selectMonth', 'viewChange', 'changeYear'])

const { viewContainer, panel, gridButton } = styles(props)

const isSelected = (index: number) => props.selected.year === props.display.year && props.selected.month === index
const onSelectMonth = (month: number) => emit('selectMonth', month)
const onArrowClick = (operation: 1 | -1) => emit('changeYear', props.display.year + operation)
</script>

<template>
  <div :class="viewContainer({ class: styleSlots?.viewContainer })">
    <vk-calendar-header
      v-bind="props"
      :loaded-period="display.year"
      :disabled-left="min && min.year === display.year"
      :disabled-right="max && max.year === display.year"
      @view-change="emit('viewChange', 'years')"
      @next-click="onArrowClick(1)"
      @previous-click="onArrowClick(-1)"
    />
    <div :class="panel({ class: styleSlots?.panel })">
      <vk-button
        v-for="(month, index) in monthNames"
        :key="`month-cell-${index}`"
        :disabled="(min && display.year === min.year && index < min.month) || (max && display.year === max.year && index > max.month)"
        :class="gridButton({ class: styleSlots?.gridButton })"
        :size="size"
        :color="isSelected(index) ? color : 'surface'"
        :variant="isSelected(index) ? variant : 'link'"
        :shape="shape"
        condensed
        @click="onSelectMonth(index)"
      >
        {{ month }}
      </vk-button>
    </div>
  </div>
</template>
