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
  isOpen: undefined
})

const emit = defineEmits(['update:modelValue', 'update:isOpen'])
</script>

<template>
  <vk-popover
    class="vk-datepicker"
    :is-open="isOpen"
    :shape="shape"
    :style-slots="{ panel: ['p-2'] }"
    @update:is-open="emit('update:isOpen', $event)"
  >
    <template #trigger="{ setOpen }">
      <vk-input
        v-bind="props"
        :model-value="parsedModel"
        :label="label"
        readonly
        cursor="pointer"
        @focus="setOpen(true)"
        @right-icon-click="setOpen(true)"
      >
        <template #right-icon>
          <vk-icon name="calendar" />
        </template>
      </vk-input>
    </template>

    <template #panel="{ setOpen, isOpen }">
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
        @finalize-selection="setOpen(false)"
      />
    </template>
  </vk-popover>
</template>
