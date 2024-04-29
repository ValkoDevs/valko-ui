<script setup lang="ts">
import { VkIcon, type RadioProps, type SlotStyles, useStyle } from '#valkoui'
import styles from './Radio.styles.ts'

defineOptions({ name: 'VkRadio' })

const props = withDefaults(defineProps<RadioProps>(), {
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  readonly: false,
  position: false
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
        :data-checked="props.value && props.modelValue === props.value"
      >
        <vk-icon
          v-if="props.value && props.modelValue === props.value"
          name="point-filled"
          :class="classes.icon"
        />
      </div>
      <input
        :class="classes.input"
        type="radio"
        :value="props.value"
        :name="props.name"
        :checked="props.modelValue === props.value"
      >
      <label
        :for="props.name"
        :class="classes.label"
      >
        {{ props.label }}
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
