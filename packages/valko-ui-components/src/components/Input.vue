<script setup lang="ts">
import { useId, ref, watch } from 'vue'
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
  clearable: false
})

const emit = defineEmits(['update:modelValue', 'focus', 'clear', 'leftIconClick', 'rightIconClick'])

const classes = useStyle<InputProps, SlotStyles>(props, styles)

const inputId = useId()
const isFilled = ref(false)
const inputValue = ref(props.modelValue || '')
const inputRef = ref<HTMLInputElement | null>(null)
let intervalId: ReturnType<typeof setInterval> | null = null

const updateValue = (e: Event) => {
  const value = (e.target as HTMLInputElement).value

  if (!props.disabled && !props.readonly) {
    inputValue.value = value
    emit('update:modelValue', value)
    isFilled.value = value !== ''
  }
}

const onFocus = (event: Event) => {
  if (!props.disabled) emit('focus', event)
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

const changeValue = (action: 'increment' | 'decrement') => {
  if (!props.disabled && !props.readonly) {
    let newValue = parseFloat(inputValue.value.toString() || '0')

    if (action === 'increment') newValue += 1
    else newValue -= 1

    if (isNaN(newValue)) newValue = 0

    inputValue.value = newValue.toString()
    emit('update:modelValue', newValue.toString())
  }
}

const startHolding = (action: 'increment' | 'decrement') => intervalId = setInterval(() => changeValue(action), 75)

const stopHolding = () => {
  if (intervalId) {
    clearInterval(intervalId)
    intervalId = null
  }
}

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
        :class="classes.input"
        :readonly="readonly"
        :disabled="disabled"
        :type="type"
        :placeholder="placeholder"
        :value="inputValue"
        :data-filled="isFilled"
        :id="inputId"
        @focus="onFocus"
        @input="updateValue"
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
          @mousedown="startHolding('increment')"
          @mouseup="stopHolding"
          @mouseleave="stopHolding"
        />
        <vk-icon
          name="chevron-down"
          :class="classes.chevrons"
          @mousedown="startHolding('decrement')"
          @mouseup="stopHolding"
          @mouseleave="stopHolding"
        />
      </span>
      <vk-icon
        v-if="clearable && !!inputValue"
        name="circle-x"
        :data-right-icon="!!$slots['right-icon']"
        :class="classes.clearIcon"
        @click="clearInput"
      />
      <span
        v-if="$slots['left-icon']"
        :class="[classes.icons, classes.leftIcon]"
        @click="handleIconClick('left')"
      >
        <slot name="left-icon" />
      </span>
      <span
        v-if="$slots['right-icon']"
        :class="[classes.icons, classes.rightIcon]"
        @click="handleIconClick('right')"
      >
        <slot name="right-icon" />
      </span>
    </div>
    <span
      v-if="helpertext"
      :class="classes.helper"
    >
      {{ helpertext }}
    </span>
  </div>
</template>
