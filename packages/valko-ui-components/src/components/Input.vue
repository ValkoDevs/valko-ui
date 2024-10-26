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

const emit = defineEmits(['update:modelValue', 'focus', 'leftIconClick', 'rightIconClick'])

const classes = useStyle<InputProps, SlotStyles>(props, styles)

const inputId = useId()
const isFilled = ref(false)
const inputValue = ref(props.modelValue || '')

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
  isFilled.value = false
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
        :data-leftIcon="!!$slots.leftIcon"
        :data-rightIcon="!!$slots.rightIcon"
        :class="classes.input"
        :readonly="readonly"
        :disabled="disabled"
        :type="type"
        placeholder=" "
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
      <vk-icon
        v-if="clearable && !!inputValue"
        name="circle-x"
        :data-rightIcon="!!$slots.rightIcon"
        :class="classes.iconClear"
        @click="clearInput"
      />
      <span
        v-if="$slots.leftIcon"
        :class="[classes.icon, classes.iconLeft]"
        @click="$emit('leftIconClick')"
      >
        <slot name="leftIcon" />
      </span>
      <span
        v-if="$slots.rightIcon"
        :class="[classes.icon, classes.iconRight]"
        @click="$emit('rightIconClick')"
      >
        <slot name="rightIcon" />
      </span>
    </div>
    <span
      :class="classes.helper"
      v-if="helpertext"
    >
      {{ helpertext }}
    </span>
  </div>
</template>
