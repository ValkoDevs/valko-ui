<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import type { DateTimePickerProps } from '#valkoui/types/DateTimePicker'
import styles from '#valkoui/styles/DateTimePicker.styles.ts'
import VkPopover from './Popover.vue'
import VkInput from './Input.vue'
import VkCalendar from './Calendar.vue'
import VkTime from './Time.vue'
import VkButton from './Button.vue'
import VkIcon from './Icon.vue'

defineOptions({ name: 'VkDateTimePicker' })

const props = withDefaults(defineProps<DateTimePickerProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  format: 'YYYY-MM-DD HH:mm',
  okButtonLabel: 'OK',
  backButtonLabel: 'Back',
  isOpen: false
})

const emit = defineEmits(['update:modelValue', 'open', 'close'])

const s = computed(() => styles(props))

const step = ref<'date' | 'time'>('date')

const onDateFinalized = () => {
  step.value = 'time'
}

const onBackToDate = () => {
  step.value = 'date'
}

const onConfirm = () => {
  const value = props.controls.commitSelection()
  emit('update:modelValue', value)
  emit('close')
}

watch(() => props.isOpen, (isOpen) => {
  if (isOpen) {
    step.value = 'date'
    props.controls.resetSelection()
  }
})
</script>

<template>
  <vk-popover
    class="vk-datetimepicker"
    :is-open="isOpen"
    :shape="shape"
    :style-slots="{ panel: ['p-2'] }"
    @close="emit('close')"
  >
    <vk-input
      v-bind="props"
      :style-slots="undefined"
      :model-value="displayValue"
      :label="label"
      readonly
      cursor="pointer"
      @focus="emit('open')"
      @right-icon-click="emit('open')"
    >
      <template #right-icon>
        <vk-icon name="calendar-clock" />
      </template>
    </vk-input>

    <template #popover-content>
      <div v-if="isOpen">
        <div
          v-if="step === 'date'"
          :class="s.dateSection({ class: styleSlots?.dateSection })"
        >
          <vk-calendar
            v-bind="props"
            :style-slots="undefined"
            :adapter="adapter.date"
            :disabled-dates="disabledDates"
            :locale="locale"
            :format="format"
            :min-date="minDate"
            :max-date="maxDate"
            :disable-weekends="disableWeekends"
            @finalize-selection="onDateFinalized"
          />
        </div>

        <div
          v-if="step === 'time'"
          :class="s.timeSection({ class: styleSlots?.timeSection })"
        >
          <div :class="s.backAction({ class: styleSlots?.backAction })">
            <vk-button
              :size="size"
              :shape="shape"
              :variant="variant"
              color="surface"
              :class="s.backButton({ class: styleSlots?.backButton })"
              @click="onBackToDate"
            >
              <vk-icon name="arrow-left" />
              {{ backButtonLabel }}
            </vk-button>
          </div>

          <vk-time
            :adapter="adapter.time"
            :color="color === 'surface' ? 'primary' : color"
            :variant="variant"
            :size="size"
            :shape="shape"
            :locale="locale"
            :format="format"
            :min-time="minTime"
            :max-time="maxTime"
            :disabled-times="disabledTimes"
            :minute-step="minuteStep"
            :ok-button-label="okButtonLabel"
            @on-select="onConfirm"
          />
        </div>
      </div>
    </template>
  </vk-popover>
</template>
