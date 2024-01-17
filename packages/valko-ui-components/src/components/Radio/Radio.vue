<script setup lang="ts">
import { RadioProps } from '@/components/Radio/interfaces'
import useStyle from './Radio.styles'

defineOptions({ name: 'VkRadio' })

const props = withDefaults(defineProps<RadioProps>(), {
  color: 'primary',
  variant: 'filled',
  shape: 'rounded',
  size: 'md',
  label: 'Radio',
  readonly: false,
  position: false
})
const classes = useStyle(props)
const emit = defineEmits(['update:modelValue'])

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
        :data-checked="props.modelValue === props.value"
      >
        <vk-icon
          v-if="props.modelValue === props.value"
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
