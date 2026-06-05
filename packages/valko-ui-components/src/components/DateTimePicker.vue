<script setup lang="ts">
import { ref, watch, onMounted, onBeforeUnmount, nextTick, computed } from 'vue'
import type { DateTimePickerProps } from '#valkoui/types/DateTimePicker'
import styles from '#valkoui/styles/DateTimePicker.styles.ts'
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

const rootRef = ref<HTMLElement | null>(null)
const step = ref<'date' | 'time'>('date')

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement

  if (rootRef.value && !rootRef.value.contains(target) && !target.closest('.vk-datetimepicker__content')) emit('close')
}

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

onMounted(() => nextTick(() => document.addEventListener('mousedown', handleClickOutside, true)))
onBeforeUnmount(() => document.removeEventListener('mousedown', handleClickOutside, true))
</script>

<template>
  <div
    ref="rootRef"
    :class="s.container({ class: styleSlots?.container })"
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
        <vk-icon name="calendar-clock" />
      </template>
    </vk-input>

    <transition
      enter-active-class="transition-opacity duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-show="isOpen"
        :class="s.content({ class: styleSlots?.content })"
      >
        <div v-if="isOpen">
          <div
            v-if="step === 'date'"
            :class="s.dateSection({ class: styleSlots?.dateSection })"
          >
            <vk-calendar
              v-bind="props"
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
      </div>
    </transition>
  </div>
</template>
