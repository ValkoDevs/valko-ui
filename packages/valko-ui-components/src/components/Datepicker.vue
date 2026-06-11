<script setup lang="ts">
import { ref, computed } from 'vue'
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
  isOpen: undefined
})

const emit = defineEmits(['update:modelValue', 'open', 'close'])

const internalOpen = ref(false)

const open = computed({
  get: () => props.isOpen ?? internalOpen.value,
  set: (val: boolean) => {
    if (props.isOpen === undefined) internalOpen.value = val
  }
})

const handleOpen = () => {
  open.value = true
  emit('open')
}

const handleClose = () => {
  open.value = false
  emit('close')
}
</script>

<template>
  <vk-popover
    class="vk-datepicker"
    :is-open="open"
    :shape="shape"
    :style-slots="{ panel: ['p-2'] }"
    @close="handleClose"
  >
    <vk-input
      v-bind="props"
      :model-value="displayValue"
      :label="label"
      readonly
      cursor="pointer"
      @focus="handleOpen"
      @right-icon-click="handleOpen"
    >
      <template #right-icon>
        <vk-icon name="calendar" />
      </template>
    </vk-input>

    <template #popover-content>
      <vk-calendar
        v-if="open"
        v-bind="props"
        :adapter="adapter"
        :disabled-dates="disabledDates"
        :locale="locale"
        :format="format"
        :min-date="minDate"
        :max-date="maxDate"
        :disable-weekends="disableWeekends"
        @update:model-value="(value) => emit('update:modelValue', value)"
        @finalize-selection="handleClose"
      />
    </template>
  </vk-popover>
</template>
