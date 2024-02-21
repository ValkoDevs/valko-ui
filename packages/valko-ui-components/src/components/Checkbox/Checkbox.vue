<script setup lang="ts">
import { CheckboxProps } from '@/components/Checkbox/interfaces'
import { VkIcon } from '@/components/Icon'
import useStyle from './Checkbox.styles'

defineOptions({ name: 'VkCheckbox' })

const props = withDefaults(defineProps<CheckboxProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  label: 'Checkbox',
  modelValue: false,
  indeterminate: false,
  readonly: false,
  labelPosition: false,
  disabled: false
})

const emit = defineEmits(['update:modelValue'])

const onClick = () => {
  if (!props.disabled && !props.readonly) emit('update:modelValue', !props.modelValue)
}

const classes = useStyle(props)
</script>

<template>
  <div>
    <div
      :class="classes.container"
      @click="onClick"
    >
      <div
        :class="classes.checkbox"
        :data-checked="!!modelValue"
        :data-indeterminate="modelValue === null"
      >
        <vk-icon
          v-if="modelValue || props.indeterminate"
          :name="`${props.indeterminate ? 'minus' : 'check'}`"
          :class="classes.icon"
        />
      </div>
      <input
        @click.prevent=""
        type="checkbox"
        :checked="!!modelValue"
        :class="classes.input"
        :indeterminate="modelValue === null"
        :helpertext="props.helpertext"
      >
      <label :class="classes.label">
        {{ label }}
      </label>
    </div>
    <span
      v-if="props.helpertext"
      :class="classes.helpertext"
    >
      {{ props.helpertext }}
    </span>
  </div>
</template>
