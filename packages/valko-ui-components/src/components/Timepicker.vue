<script setup lang="ts">
import { ref, computed, useId } from 'vue'
import {
  TimeFieldRoot,
  TimeFieldInput,
  PopoverRoot,
  PopoverAnchor,
  PopoverPortal,
  PopoverContent
} from 'reka-ui'
import type { TimeValue, FocusOutsideEvent, PointerDownOutsideEvent } from 'reka-ui'
import { Time } from '@internationalized/date'
import type { TimepickerProps } from '#valkoui/types/Timepicker'
import styles from '#valkoui/styles/Timepicker.styles.ts'
import inputStyles from '#valkoui/styles/Input.styles.ts'
import { timeFromEpochSeconds } from '#valkoui/composables/useTimeAdapter.ts'
import VkTime from './Time.vue'
import VkIcon from './Icon.vue'

defineOptions({ name: 'VkTimepicker' })

const props = withDefaults(defineProps<TimepickerProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  format: 'HH:mm:ss',
  okButtonLabel: 'OK'
})

const emit = defineEmits(['update:modelValue', 'onSelect', 'open', 'close'])

const s = computed(() => styles(props))
const is = computed(() => inputStyles(props))

const rootRef = ref<HTMLElement | null>(null)

const labelId = useId()

// Clicks/focus inside the timepicker root (e.g. the field) must not close the panel.
const onInteractOutside = (event: PointerDownOutsideEvent | FocusOutsideEvent) => {
  const target = event.target
  if (target instanceof Element && target.closest('.vk-timepicker')) event.preventDefault()
}

// -- Reka TimeField bridge -------------------------------------------------
// The public API is preserved: modelValue stays an epoch timestamp and the
// clock keeps editing through the consumer-provided adapter. The field
// (segmented, keyboard-navigable input) is owned by Reka's TimeField.

const is12Hour = computed(() => /[h]/.test(props.format || '') || /[A|a]/.test(props.format || ''))

const hourCycle = computed(() => is12Hour.value ? 12 : 24)
const granularity = computed(() => /[s]/.test(props.format || '') ? 'second' : 'minute')

const fieldModel = computed<Time | null>(() => {
  if (props.modelValue == null) return null
  const date = new Date(props.modelValue)
  return new Time(date.getHours(), date.getMinutes(), date.getSeconds())
})

const hasValue = computed(() => props.modelValue != null)

const minValue = computed(() => props.minTime ? timeFromEpochSeconds(props.minTime) : undefined)
const maxValue = computed(() => props.maxTime ? timeFromEpochSeconds(props.maxTime) : undefined)

const onFieldInput = (value: TimeValue | undefined) => {
  if (!value) return

  const base = props.modelValue != null ? new Date(props.modelValue) : new Date()
  base.setHours(value.hour, value.minute, value.second, 0)
  emit('update:modelValue', +base)
}

const focusFirstSegment = () => {
  rootRef.value
    ?.querySelector<HTMLElement>('[data-reka-time-field-segment]:not([data-reka-time-field-segment="literal"])')
    ?.focus()
}
</script>

<template>
  <div
    ref="rootRef"
    :class="s.container({ class: styleSlots?.container })"
  >
    <PopoverRoot
      :open="isOpen"
      @update:open="(open: boolean) => !open && emit('close')"
    >
      <PopoverAnchor as-child>
        <TimeFieldRoot
          v-slot="{ segments }"
          class="contents group"
          :model-value="fieldModel"
          :hour-cycle="hourCycle"
          :granularity="granularity"
          :step="minuteStep ? { minute: minuteStep } : undefined"
          :locale="locale"
          :id="id"
          :name="name"
          :min-value="minValue"
          :max-value="maxValue"
          hide-time-zone
          @update:model-value="onFieldInput"
        >
          <div
            :class="[is.input({ class: styleSlots?.input }), s.input({ class: styleSlots?.input })]"
            data-clear-icon="false"
            :data-right-icon="true"
            :aria-label="ariaLabel"
            :aria-labelledby="ariaLabelledBy || labelId"
            :aria-describedby="ariaDescribedBy"
            :aria-invalid="ariaInvalid || undefined"
            :aria-required="ariaRequired || undefined"
            @focusin="emit('open')"
          >
            <template
              v-for="(segment, index) in segments"
              :key="index"
            >
              <TimeFieldInput
                v-if="segment.part !== 'literal'"
                as="span"
                :part="segment.part"
                class="peer cursor-pointer outline-none focus:outline-none"
                :data-filled="hasValue"
              >
                {{ segment.value }}
              </TimeFieldInput>
              <TimeFieldInput
                v-else
                as="span"
                part="literal"
              >
                {{ segment.value }}
              </TimeFieldInput>
            </template>

            <label
              :id="labelId"
              :class="is.label()"
              @click="focusFirstSegment"
            >
              {{ label }}
            </label>

            <span
              :class="[is.icons(), is.rightIcon()]"
              @click="emit('open')"
            >
              <vk-icon name="clock-2" />
            </span>
          </div>
        </TimeFieldRoot>
      </PopoverAnchor>

      <PopoverPortal>
        <PopoverContent
          :side-offset="4"
          :class="s.content({ class: styleSlots?.content })"
          @interact-outside="onInteractOutside"
        >
          <vk-time
            v-bind="props"
            :adapter="adapter"
            :locale="locale"
            :format="format"
            :min-time="minTime"
            :max-time="maxTime"
            :disabled-times="disabledTimes"
            :ok-button-label="okButtonLabel"
            @on-select="() => {
              emit('onSelect')
              emit('close')
            }"
          />
        </PopoverContent>
      </PopoverPortal>
    </PopoverRoot>
  </div>
</template>
