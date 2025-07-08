<script setup lang="ts">
import { useId, computed } from 'vue'
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

const inputId = useId()
const helpertextId = useId()

const describedBy = computed(() => {
  const ids = []
  if (props.helpertext) ids.push(helpertextId)
  if (props['aria-describedby']) ids.push(props['aria-describedby'])
  return ids.length > 0 ? ids.join(' ') : undefined
})

const onClick = () => {
  if (!props.disabled && !props.readonly) emit('update:modelValue', props.value)
}
</script>

<template>
  <div :class="classes.container">
    <div
      :class="classes.radioContainer"
      role="radio"
      :tabindex="disabled ? -1 : 0"
      :aria-checked="modelValue === value"
      :aria-disabled="disabled"
      :aria-label="props['aria-label']"
      :aria-labelledby="props['aria-labelledby']"
      :aria-describedby="describedBy"
      @click="onClick"
      @keydown.enter.prevent="onClick"
      @keydown.space.prevent="onClick"
    >
      <div :class="classes.stateLayer">
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
      </div>

      <input
        :id="inputId"
        type="radio"
        :name="name"
        :value="value"
        :checked="modelValue === value"
        :disabled="disabled"
        :class="classes.input"
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
      :id="helpertextId"
    >
      {{ helpertext }}
    </span>
  </div>
</template>
