<script setup lang="ts">
import { ref, useId, watch, computed } from 'vue'
import type { TextareaProps } from '#valkoui/types/Textarea'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Textarea.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'

defineOptions({ name: 'VkTextarea' })

const props = withDefaults(defineProps<TextareaProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  modelValue: '',
  maxlenght: 0
})

const emit = defineEmits(['update:modelValue', 'leftIconClick', 'rightIconClick'])

const classes = useStyle<TextareaProps, SlotStyles>(props, styles)

const isFilled = ref(false)
const inputValue = ref(props.modelValue || '')
const inputRef = ref<HTMLInputElement | null>(null)
const helpertextId = useId()
const inputId = useId()

const describedBy = computed(() => {
  const ids: string[] = []
  if (props.helpertext) ids.push(helpertextId)
  if (props['aria-describedby']) ids.push(props['aria-describedby'])
  return ids.length > 0 ? ids.join(' ') : undefined
})

const updateValue = (e: Event) => {
  const value = (e.target as HTMLInputElement).value

  if (!props.disabled && !props.readonly) {
    inputValue.value = value
    emit('update:modelValue', value)
    isFilled.value = value !== ''
  }
}

const handleIconClick = (icon: 'left' | 'right') => {
  if (!props.disabled && !props.readonly) {
    emit(`${icon}IconClick`)
    inputRef.value?.focus()
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
      <textarea
        ref="inputRef"
        :id="inputId"
        :class="classes.textarea"
        :disabled="disabled"
        :readonly="readonly"
        :value="inputValue"
        :data-filled="isFilled"
        :maxlength="maxlength"
        :aria-label="props['aria-label']"
        :aria-labelledby="props['aria-labelledby']"
        :aria-describedby="describedBy"
        :aria-invalid="props['aria-invalid']"
        :aria-required="props['aria-required']"
        :data-left-icon="!!$slots['left-icon']"
        :data-right-icon="!!$slots['right-icon']"
        @input="updateValue"
      />
      <span
        v-if="!!$slots['left-icon']"
        :class="[classes.icons, classes.leftIcon]"
        @click="handleIconClick('left')"
      >
        <slot name="left-icon" />
      </span>

      <span
        v-if="!!$slots['right-icon']"
        :class="[classes.icons, classes.rightIcon]"
        @click="handleIconClick('right')"
      >
        <slot name="right-icon" />
      </span>
      <label
        :for="inputId"
        :class="classes.label"
      >
        {{ label }}
      </label>
    </div>
    <div :class="classes.footer">
      <span
        v-if="helpertext"
        :id="helpertextId"
        :class="classes.helper"
      > {{ helpertext }}</span>
      <span
        v-if="maxlength && maxlength > 0"
        :class="classes.counter"
      >{{ `${inputValue.length} / ${maxlength}` }}</span>
    </div>
  </div>
</template>
