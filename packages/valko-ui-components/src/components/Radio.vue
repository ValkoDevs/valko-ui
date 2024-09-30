<script setup lang="ts">
import type { RadioProps } from '#valkoui/types/Radio'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Radio.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'
import VkIcon from './Icon.vue'

defineOptions({ name: 'VkRadio' })

const props = withDefaults(defineProps<RadioProps>(), {
  color: 'primary',
  variant: 'filled',
  shape: 'rounded',
  size: 'md',
  labelPosition: 'right',
  readonly: false
})

const emit = defineEmits(['update:modelValue'])

const classes = useStyle<RadioProps, SlotStyles>(props, styles)

const onClick = () => {
  if (!props.disabled && !props.readonly) emit('update:modelValue', props.value)
}
</script>

<template>
  <div>
    <div
      :class="classes.container"
      @click="onClick"
    >
      <div
        :class="classes.radio"
        :data-checked="value && modelValue === value"
      >
        <vk-icon
          v-if="value && modelValue === value"
          name="point-filled"
          :class="classes.icon"
        />
      </div>
      <input
        :class="classes.input"
        type="radio"
        :value="value"
        :name="name"
        :checked="modelValue === value"
      >
      <label
        :for="name"
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
