<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { InputProps } from '#valkoui/types/Input'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Input.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'

defineOptions({ name: 'VkInput' })

const props = withDefaults(defineProps<InputProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  type: 'text',
  cursor: 'text'
})

const emit = defineEmits(['update:modelValue', 'focus', 'leftIconClick', 'rightIconClick'])

const classes = useStyle<InputProps, SlotStyles>(props, styles)

const inputId = `input-${Math.random().toString(36).substr(2, 7)}`
const inputRef = ref<HTMLInputElement | null>(null)

const updateValue = (e: Event) => {
  if (!props.disabled && !props.readonly) {
    emit('update:modelValue', (e.target as HTMLInputElement).value)
  }
}

onMounted(() => {
  if (inputRef.value) {
    inputRef.value.addEventListener('click', () => {
      if (!props.disabled && !props.readonly) {
        emit('update:modelValue', props.modelValue)
      }
    })
  }
})

const onFocus = (event: Event) => {
  if (!props.disabled) {
    emit('focus', event)
  }
}
</script>

<template>
  <div
    :class="classes.container"
  >
    <div :class="classes.field">
      <input
        ref="inputRef"
        :data-hasIcon="!!$slots.leftIcon"
        :class="classes.input"
        :readonly="readonly"
        :disabled="disabled"
        :type="type"
        placeholder=" "
        :value="modelValue"
        @focus="onFocus"
        @input="updateValue"
        :data-filled="!!modelValue"
        :id="inputId"
      >
      <label
        :for="inputId"
        :class="classes.label"
      >{{ props.label }}</label>
      <span
        v-if="$slots.leftIcon"
        :class="`${classes.icon} ${classes.iconLeft}`"
      >
        <slot name="leftIcon" />
      </span>
      <span
        v-if="$slots.rightIcon"
        :class="`${classes.icon} ${classes.iconRight}`"
      >
        <slot name="rightIcon" />
      </span>
    </div>
    <span
      :class="classes.helper"
      v-if="helpertext"
    >
      {{ props.helpertext }}
    </span>
  </div>
</template>
