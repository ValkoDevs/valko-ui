<script setup lang="ts">
import { computed, nextTick, ref } from 'vue'
import { DatePickerRoot, DatePickerAnchor, DatePickerContent } from 'reka-ui'
import type { DateValue } from '@internationalized/date'
import type { FocusOutsideEvent, PointerDownOutsideEvent } from 'reka-ui'
import type { DatepickerProps } from '#valkoui/types/Datepicker'
import styles from '#valkoui/styles/Datepicker.styles.ts'
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

const s = computed(() => styles(props))

const containerRef = ref<HTMLElement | null>(null)

// Clicks/focus inside the datepicker root (e.g. the input) must not close the panel.
const onInteractOutside = (event: PointerDownOutsideEvent | FocusOutsideEvent) => {
  const target = event.target
  if (target instanceof Element && containerRef.value?.contains(target)) event.preventDefault()
}

const onCloseAutoFocus = (event: Event) => {
  // Keep focus on the input instead of falling back to document.body.
  event.preventDefault()
  nextTick(() => containerRef.value?.querySelector('input')?.focus())
}
</script>

<template>
  <div
    ref="containerRef"
    :class="s.container({ class: styleSlots?.container })"
  >
    <DatePickerRoot
      :open="isOpen"
      @update:open="(open: boolean) => !open && emit('close')"
    >
      <DatePickerAnchor as-child>
        <vk-input
          v-bind="props"
          :model-value="parsedModel"
          :label="label"
          readonly
          cursor="pointer"
          @focus="emit('open')"
        >
          <template #right-icon>
            <vk-icon name="calendar" />
          </template>
        </vk-input>
      </DatePickerAnchor>

      <DatePickerContent
        align="start"
        :side-offset="4"
        :class="s.content({ class: styleSlots?.content })"
        @interact-outside="onInteractOutside"
        @close-auto-focus="onCloseAutoFocus"
      >
        <vk-calendar
          v-bind="props"
          :adapter="adapter"
          :disabled-dates="disabledDates"
          :locale="locale"
          :format="format"
          :min-date="minDate"
          :max-date="maxDate"
          :disable-weekends="disableWeekends"
          @update:model-value="(value: DateValue) => emit('update:modelValue', value)"
          @finalize-selection="emit('close')"
        />
      </DatePickerContent>
    </DatePickerRoot>
  </div>
</template>
