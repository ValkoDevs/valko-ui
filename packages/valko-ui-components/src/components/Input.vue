<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import { FieldControl, FieldDescription, FieldLabel, FieldRoot, useForwardExpose } from 'reka-ui'
import type { InputProps } from '#valkoui/types/Input'
import styles from '#valkoui/styles/Input.styles.ts'
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

const s = computed(() => styles(props))

const { forwardRef, currentElement } = useForwardExpose()
const isFilled = ref(false)
const inputValue = ref(props.modelValue || '')
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
    currentElement.value?.focus()
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

watch(() => props.modelValue, (newValue) => {
  inputValue.value = newValue
  isFilled.value = newValue !== null && newValue !== undefined && newValue !== ''
}, { immediate: true })
</script>

<template>
  <FieldRoot
    :class="s.container({ class: styleSlots?.container })"
    :disabled="disabled"
  >
    <div :class="s.field({ class: styleSlots?.field })">
      <FieldControl
        :ref="forwardRef"
        as="input"
        :data-left-icon="!!$slots['left-icon']"
        :data-right-icon="!!$slots['right-icon']"
        :data-clear-icon="clearable"
        :class="s.input({ class: styleSlots?.input })"
        :readonly="readonly"
        :type="type"
        placeholder=" "
        :min="min"
        :max="max"
        :step="step"
        :value="inputValue"
        :data-filled="isFilled"
        :aria-label="ariaLabel"
        :aria-labelledby="ariaLabelledBy"
        :aria-describedby="ariaDescribedBy"
        :aria-invalid="ariaInvalid"
        :aria-required="ariaRequired"
        :role="role"
        :aria-expanded="ariaExpanded"
        :aria-controls="ariaControls"
        :aria-autocomplete="ariaAutocomplete"
        :aria-disabled="ariaDisabled"
        @focus="onFocus"
        @input="updateValue"
        @blur="onBlur"
      />
      <FieldLabel :class="s.label({ class: styleSlots?.label })">
        {{ label }}
      </FieldLabel>
      <span
        v-if="type === 'number'"
        :class="s.numberArrows({ class: styleSlots?.numberArrows })"
      >
        <vk-icon
          name="chevron-up"
          :class="s.chevrons({ class: styleSlots?.chevrons })"
          @mousedown="handleNumericArrowHold('increment')"
          @mouseup="handleNumericArrowRelease"
          @mouseleave="handleNumericArrowRelease"
          @touchstart="handleNumericArrowHold('increment')"
        />
        <vk-icon
          name="chevron-down"
          :class="s.chevrons({ class: styleSlots?.chevrons })"
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
        :class="s.clearIcon({ class: styleSlots?.clearIcon })"
        @click="clearInput"
        @touchend="clearInput"
      />
      <span
        v-if="$slots['left-icon']"
        :class="[s.icons({ class: styleSlots?.icons }), s.leftIcon({ class: styleSlots?.leftIcon })]"
        @click="handleIconClick('left')"
        @touchend="handleIconClick('left')"
      >
        <slot name="left-icon" />
      </span>
      <span
        v-if="$slots['right-icon']"
        :data-chevron-icons="type === 'number'"
        :class="[s.icons({ class: styleSlots?.icons }), s.rightIcon({ class: styleSlots?.rightIcon })]"
        @click="handleIconClick('right')"
        @touchend="handleIconClick('right')"
      >
        <slot name="right-icon" />
      </span>
    </div>
    <FieldDescription
      v-if="helpertext"
      as="span"
      :class="s.helper({ class: styleSlots?.helper })"
    >
      {{ helpertext }}
    </FieldDescription>
  </FieldRoot>
</template>
