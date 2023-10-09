<script setup lang="ts">
import { CheckboxProps } from '@/components/Checkbox/interfaces'
import useStyle from './Checkbox.styles'

defineOptions({ name: 'VkCheckbox' })

const props = withDefaults(defineProps<CheckboxProps>(), {
  variant: 'primary',
  modelValue: false,
  indeterminate: false,
  type: 'filled',
  size: 'md',
  label: 'Checkbox',
  readOnly: false
})

const emit = defineEmits(['update:modelValue'])

const onClick = () => {
  if (!props.disabled && !props.loading) {
    emit('update:modelValue', !props.modelValue)
  }
}

const classes = useStyle(props)
</script>

<template>
  <div @click="onClick">
    <div :class="classes.label">
      <div 
        :class="classes.checkbox"
        :data-checked="modelValue === true"
        :data-indeterminate="modelValue === null"
      >
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          viewBox="0 0 24 24" 
          fill="none" 
          stroke="currentColor" 
          stroke-width="4" 
          stroke-linecap="round" 
          stroke-linejoin="round"
          v-if="modelValue !== false"
        >
          <path
            :class="classes.svg"
            d="M5 13l4 4L19 7"
            v-if="modelValue"
          />
          <line
            :class="classes.svg"
            v-else
            x1="5" 
            y1="12" 
            x2="19" 
            y2="12" 
          />
        </svg>
      </div>
      <input
        @click.prevent=""
        type="checkbox"
        :checked="modelValue === true"
        :class="classes.input"
        :indeterminate="modelValue === null"
        :errorText="errorText"
      >
      <label
        class="align-middle"
        :class="classes.label"
      >
        {{ label }}
      </label>
    </div>
    <span
      v-if="errorText"
      :class="classes.message"
    >
      {{ errorText }}
    </span>
  </div>
</template>
