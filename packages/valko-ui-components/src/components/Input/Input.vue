<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { InputProps } from '@/components/Input/interfaces'
import useStyle from './Input.styles'
defineOptions({ name: 'VkInput' })

const props = withDefaults(defineProps<InputProps>(), {
  variant: 'primary',
  kind: 'filled',
  size: 'md',
  type: 'text',
})

const emit = defineEmits(['update:modelValue', 'focus'])

const updateValue = (e: Event) => {
  if (!props.disabled && !props.readonly) {
    emit('update:modelValue', (e.target as HTMLInputElement).value)
  }
}

const inputId = `input-${Math.random().toString(36).substr(2, 7)}`
const inputRef = ref<HTMLInputElement | null>(null)

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

const classes = useStyle(props)
</script>

<template>
  <div
    :class="classes.container"
  >
    <div :class="classes.field">
      <input
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
    </div>
    <span 
      :class="classes.helper"
      v-if="helpertext !== ''"
    >{{ props.helpertext }}</span>
  </div>
</template>
