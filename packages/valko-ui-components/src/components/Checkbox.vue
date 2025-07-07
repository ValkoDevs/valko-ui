<script setup lang="ts">
import { useId } from 'vue'
import type { CheckboxProps } from '#valkoui/types/Checkbox'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Checkbox.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'
import VkIcon from './Icon.vue'

defineOptions({ name: 'VkCheckbox' })

const props = withDefaults(defineProps<CheckboxProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  label: '',
  modelValue: false,
  readonly: false,
  labelPosition: 'right',
  disabled: false
})

const emit = defineEmits(['update:modelValue'])

const classes = useStyle<CheckboxProps, SlotStyles>(props, styles)

const inputId = useId()

const onClick = () => {
  if (!props.disabled && !props.readonly) emit('update:modelValue', !props.modelValue)
}
</script>

<template>
  <div :class="classes.container">
    <div
      :class="classes.checkboxContainer"
      @click="onClick"
    >
      <div :class="classes.stateLayer">
        <div
          :class="classes.checkbox"
          :data-checked="!!modelValue"
          :data-indeterminate="modelValue === null"
        >
          <vk-icon
            v-if="modelValue !== false"
            :name="`${modelValue === null ? 'minus' : 'check'}`"
            :class="classes.icon"
          />
        </div>
      </div>

      <input
        :id="inputId"
        type="checkbox"
        :checked="!!modelValue"
        :indeterminate="modelValue === null"
        :class="classes.input"
        :name="name"
        :aria-label="props['aria-label']"
        :aria-labelledby="props['aria-labelledby']"
        :aria-describedby="props['aria-describedby']"
        :aria-disabled="disabled"
        :aria-checked="modelValue === null ? 'mixed' : !!modelValue"
        :disabled="disabled"
        @click.prevent=""
      >
      <label
        :for="inputId"
        :class="classes.label"
      >
        {{ label }}
      </label>
    </div>

    <span
      v-if="helpertext"
      :class="classes.helpertext"
    >
      {{ helpertext }}
    </span>
  </div>
</template>
