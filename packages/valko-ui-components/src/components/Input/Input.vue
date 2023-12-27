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

const emit = defineEmits(['update:modelValue', 'label-click'])

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

const labelClick = () => {
  emit('label-click', true)
}

const containerClick = () => {
  emit('label-click', false)
}

const classes = useStyle(props)
</script>

<template>
  <div
    :class="classes.container"
    @click="containerClick"
  >
    <div :class="classes.field">
      <input
        :class="classes.input"
        :readonly="readonly"
        :disabled="disabled"
        :type="type"
        placeholder=" "
        :value="modelValue"
        @input="updateValue"
        :data-filled="!!modelValue"
        :id="inputId"
      >
      <label
        :for="inputId"
        :class="classes.label"
        @click="labelClick"
      >{{ props.label }}</label>
    </div>
    <span 
      :class="classes.helper"
      v-if="helpertext !== ''"
    >{{ props.helpertext }}</span>
  </div>
</template>
