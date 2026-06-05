<script setup lang="ts">
import type { DatepickerProps } from '#valkoui/types/Datepicker'
import VkPopover from './Popover.vue'
import VkInput from './Input.vue'
import VkCalendar from './Calendar.vue'
import VkIcon from './Icon.vue'

defineOptions({ name: 'VkDatepicker' })

const props = withDefaults(defineProps<DatepickerProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  format: 'YYYY-MM-DD',
  isOpen: false
})

const emit = defineEmits(['update:modelValue', 'open', 'close'])
</script>

<template>
  <vk-popover
    class="vk-datepicker"
    :is-open="isOpen"
    :shape="shape"
    :style-slots="{ panel: ['p-2'] }"
    @close="emit('close')"
  >
    <vk-input
      v-bind="props"
      :model-value="displayValue"
      :label="label"
      readonly
      cursor="pointer"
      @focus="emit('open')"
      @right-icon-click="emit('open')"
    >
      <template #right-icon>
        <vk-icon name="calendar" />
      </template>
    </vk-input>

    <template #popover-content>
      <vk-calendar
        v-if="isOpen"
        v-bind="props"
        :adapter="adapter"
        :disabled-dates="disabledDates"
        :locale="locale"
        :format="format"
        :min-date="minDate"
        :max-date="maxDate"
        :disable-weekends="disableWeekends"
        @update:model-value="(value) => emit('update:modelValue', value)"
        @finalize-selection="emit('close')"
      />
    </template>
  </vk-popover>
</template>
