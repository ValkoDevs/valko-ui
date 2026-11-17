<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount, nextTick, computed } from 'vue'
import { TimeFieldRoot, TimeFieldInput } from 'reka-ui'
import type { TimeValue } from 'reka-ui'
import { Time } from '@internationalized/date'
import type { TimepickerProps } from '#valkoui/types/Timepicker'
import styles from '#valkoui/styles/Timepicker.styles.ts'
import inputStyles from '#valkoui/styles/Input.styles.ts'
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

const handleClickOutside = (event: MouseEvent) => {
  const target = event.target as HTMLElement

  if (rootRef.value && !rootRef.value.contains(target) && !target.closest('.vk-timepicker__content')) emit('close')
}

onMounted(() => nextTick(() => document.addEventListener('mousedown', handleClickOutside, true)))
onBeforeUnmount(() => document.removeEventListener('mousedown', handleClickOutside, true))

// -- Reka TimeField bridge -------------------------------------------------
// The public API is preserved: modelValue stays an epoch timestamp and the
// clock keeps editing through the consumer-provided adapter. The field
// (segmented, keyboard-navigable input) is owned by Reka's TimeField.

const timeFromDate = (date: Date) => new Time(date.getHours(), date.getMinutes(), date.getSeconds())

const is12Hour = computed(() => /[h]/.test(props.format || '') || /[A|a]/.test(props.format || ''))

const hourCycle = computed(() => is12Hour.value ? 12 : 24)
const granularity = computed(() => /[s]/.test(props.format || '') ? 'second' : 'minute')

const fieldModel = computed<Time | null>(() => {
  if (props.modelValue == null) return null
  return timeFromDate(new Date(props.modelValue))
})

const hasValue = computed(() => props.modelValue != null)

const minValue = computed(() => props.minTime ? timeFromDate(new Date(+props.minTime * 1000)) : undefined)
const maxValue = computed(() => props.maxTime ? timeFromDate(new Date(+props.maxTime * 1000)) : undefined)

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
    <TimeFieldRoot
      v-slot="{ segments }"
      class="contents"
      :model-value="fieldModel"
      :hour-cycle="hourCycle"
      :granularity="granularity"
      :step="minuteStep ? { minute: minuteStep } : undefined"
      :locale="locale"
      :min-value="minValue"
      :max-value="maxValue"
      hide-time-zone
      @update:model-value="onFieldInput"
    >
      <div
        :class="[is.input({ class: styleSlots?.input }), s.input({ class: styleSlots?.input })]"
        data-clear-icon="false"
        :data-right-icon="true"
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

    <transition
      enter-active-class="transition-opacity duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition-opacity duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="isOpen"
        :class="s.content({ class: styleSlots?.content })"
      >
        <vk-time
          v-if="isOpen"
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
      </div>
    </transition>
  </div>
</template>
