<script setup lang="ts">
import { useId, useSlots, ref, watch, computed } from 'vue'
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
  max: Infinity,
  disableIconClickFocus: false
})

const emit = defineEmits(['update:modelValue', 'focus', 'clear', 'blur', 'leftIconClick', 'rightIconClick', 'suffixIconClick'])

const s = computed(() => styles(props))

const slots = useSlots()
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
  if (props.disabled) return
  inputValue.value = ''
  emit('update:modelValue', '')
  emit('clear')
  isFilled.value = false
}

const handleIconClick = (icon: 'left' | 'right' | 'suffix') => {
  if (props.disabled) return

  emit(`${icon}IconClick`)
  if (!props.disableIconClickFocus) inputRef.value?.focus()
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
  if (props.ariaDescribedBy) ids.push(props.ariaDescribedBy)
  return ids.length > 0 ? ids.join(' ') : undefined
})

const rightIconCount = () => {
  let count = 0
  if (props.clearable) count++
  if (slots['right-icon']) count++
  if (slots['suffix-icon']) count++
  if (props.type === 'number') count++
  return count
}

watch(() => props.modelValue, (newValue) => {
  inputValue.value = newValue
  isFilled.value = newValue !== null && newValue !== undefined && newValue !== ''
}, { immediate: true })
</script>

<template>
  <div :class="s.container({ class: styleSlots?.container })">
    <div :class="s.field({ class: styleSlots?.field })">
      <input
        ref="inputRef"
        :data-left-icon="!!$slots['left-icon']"
        :data-right-icon-count="rightIconCount()"
        :class="s.input({ class: styleSlots?.input })"
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
        :aria-label="ariaLabel"
        :aria-labelledby="ariaLabelledBy"
        :aria-describedby="describedBy"
        :aria-invalid="ariaInvalid"
        :aria-required="ariaRequired"
        @focus="onFocus"
        @input="updateValue"
        @blur="onBlur"
      >
      <label
        :for="inputId"
        :class="s.label({ class: styleSlots?.label })"
      >
        {{ label }}
      </label>
      <span
        v-if="$slots['left-icon']"
        :class="[s.icons({ class: styleSlots?.icons }), s.leftIcon({ class: styleSlots?.leftIcon })]"
        @click="handleIconClick('left')"
        @touchend="handleIconClick('left')"
      >
        <slot name="left-icon" />
      </span>
      <div
        v-if="rightIconCount() > 0"
        :class="s.rightIconsContainer({ class: styleSlots?.rightIconsContainer })"
      >
        <vk-icon
          v-if="clearable && !!inputValue"
          name="x"
          :class="s.clearIcon({ class: styleSlots?.clearIcon })"
          @click="clearInput"
          @touchend="clearInput"
        />
        <span
          v-if="$slots['right-icon']"
          :class="[s.icons({ class: styleSlots?.icons }), s.rightIcon({ class: styleSlots?.rightIcon })]"
          @click="handleIconClick('right')"
          @touchend="handleIconClick('right')"
        >
          <slot name="right-icon" />
        </span>
        <span
          v-if="$slots['suffix-icon']"
          :class="[s.icons({ class: styleSlots?.icons }), s.suffixIcon({ class: styleSlots?.suffixIcon })]"
          @click="handleIconClick('suffix')"
          @touchend="handleIconClick('suffix')"
        >
          <slot name="suffix-icon" />
        </span>
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
      </div>
    </div>
    <span
      v-if="helpertext"
      :id="helpertextId"
      :class="s.helper({ class: styleSlots?.helper })"
    >
      {{ helpertext }}
    </span>
  </div>
</template>
