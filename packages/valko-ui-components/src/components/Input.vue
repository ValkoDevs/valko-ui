<script setup lang="ts">
import { useId, ref, watch, computed } from 'vue'
import type { InputProps } from '#valkoui/types/Input'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Input.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'
import VkIcon from './Icon.vue'

defineOptions({ name: 'VkInput' })

const props = withDefaults(defineProps<InputProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  type: 'text',
  cursor: 'text',
  modelValue: '',
  clearable: false,
  step: 1,
  min: -Infinity,
  max: Infinity
})

const emit = defineEmits(['update:modelValue', 'focus', 'clear', 'blur', 'leftIconClick', 'rightIconClick'])

const classes = useStyle<InputProps, SlotStyles>(props, styles)

const inputId = useId()
const helpertextId = useId()
const isFilled = ref(false)
const inputValue = ref(props.modelValue || '')
const inputRef = ref<HTMLInputElement | null>(null)
let intervalId: ReturnType<typeof setInterval> | null = null

const updateValue = (e: Event) => {
  let value: string | number = (e.target as HTMLInputElement).value

  if (props.disabled || props.readonly) return

  if (props.type === 'number') value = value === '' ? '' : Number(value)

  inputValue.value = value
  emit('update:modelValue', value)
  isFilled.value = value !== ''
}

const onFocus = (event: Event) => {
  if (!props.disabled) emit('focus', event)
}

const onBlur = (event: Event) => {
  if (!props.disabled) emit('blur', event)
}

const clearInput = () => {
  inputValue.value = ''
  emit('update:modelValue', '')
  emit('clear')
  isFilled.value = false
}

const handleIconClick = (icon: 'left' | 'right') => {
  if (!props.disabled && !props.readonly) {
    emit(`${icon}IconClick`)
    inputRef.value?.focus()
  }
}

const changeNumericValue = (action: 'increment' | 'decrement') => {
  if (props.type !== 'number' || props.disabled || props.readonly) return

  const newValue = props.step * (action === 'increment' ? 1 : -1) + (+inputValue.value || 0)

  if (newValue > props.max || newValue < props.min) return

  inputValue.value = newValue
  emit('update:modelValue', newValue)
}

const handleNumericArrowHold = (action: 'increment' | 'decrement') => {
  intervalId = setInterval(() => changeNumericValue(action), 75)
  window.addEventListener('touchend', handleNumericArrowRelease)
  window.addEventListener('touchcancel', handleNumericArrowRelease)
}

const handleNumericArrowRelease = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }

  window.removeEventListener('touchend', handleNumericArrowRelease)
  window.removeEventListener('touchcancel', handleNumericArrowRelease)
}

const describedBy = computed(() => {
  const ids = []
  if (props.helpertext) ids.push(helpertextId)
  if (props['aria-describedby']) ids.push(props['aria-describedby'])
  return ids.length > 0 ? ids.join(' ') : undefined
})

watch(() => props.modelValue, (newValue) => {
  inputValue.value = newValue
  isFilled.value = newValue !== null && newValue !== undefined && newValue !== ''
}, { immediate: true })
</script>

<template>
  <div :class="classes.container">
    <div :class="classes.field">
      <input
        ref="inputRef"
        :data-left-icon="!!$slots['left-icon']"
        :data-right-icon="!!$slots['right-icon']"
        :data-clear-icon="clearable"
        :class="classes.input"
        :readonly="readonly"
        :disabled="disabled"
        :type="type"
        placeholder=" "
        :min="min"
        :max="max"
        :step="step"
        :value="inputValue"
        :data-filled="isFilled"
        :id="inputId"
        :aria-label="props['aria-label']"
        :aria-labelledby="props['aria-labelledby']"
        :aria-describedby="describedBy"
        :aria-invalid="props['aria-invalid']"
        :aria-required="props['aria-required']"
        @focus="onFocus"
        @input="updateValue"
        @blur="onBlur"
      >
      <label
        :for="inputId"
        :class="classes.label"
      >
        {{ label }}
      </label>
      <span
        v-if="type === 'number'"
        :class="classes.numberArrows"
      >
        <vk-icon
          name="chevron-up"
          :class="classes.chevrons"
          @mousedown="handleNumericArrowHold('increment')"
          @mouseup="handleNumericArrowRelease"
          @mouseleave="handleNumericArrowRelease"
          @touchstart="handleNumericArrowHold('increment')"
        />
        <vk-icon
          name="chevron-down"
          :class="classes.chevrons"
          @mousedown="handleNumericArrowHold('decrement')"
          @mouseup="handleNumericArrowRelease"
          @mouseleave="handleNumericArrowRelease"
          @touchstart="handleNumericArrowHold('decrement')"
        />
      </span>
      <vk-icon
        v-if="clearable && !!inputValue"
        name="x"
        :data-right-icon="!!$slots['right-icon']"
        :data-chevron-icons="type === 'number'"
        :class="classes.clearIcon"
        @click="clearInput"
        @touchend="clearInput"
      />
      <span
        v-if="$slots['left-icon']"
        :class="[classes.icons, classes.leftIcon]"
        @click="handleIconClick('left')"
        @touchend="handleIconClick('left')"
      >
        <slot name="left-icon" />
      </span>
      <span
        v-if="$slots['right-icon']"
        :data-chevron-icons="type === 'number'"
        :class="[classes.icons, classes.rightIcon]"
        @click="handleIconClick('right')"
        @touchend="handleIconClick('right')"
      >
        <slot name="right-icon" />
      </span>
    </div>
    <span
      v-if="helpertext"
      :id="helpertextId"
      :class="classes.helper"
    >
      {{ helpertext }}
    </span>
  </div>
</template>
