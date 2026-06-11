<script setup lang="ts">
import { computed } from 'vue'

import type { RatingProps } from '#valkoui/types/Rating.ts'
import styles from '#valkoui/styles/Rating.styles.ts'

defineOptions({ name: 'VkRating' })

const props = withDefaults(defineProps<RatingProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  iconName: 'star',
  max: 5,
  modelValue: 0,
  half: false,
  disabled: false,
  readonly: false
})

const emit = defineEmits(['update:modelValue'])

const s = computed(() => styles(props))

const stars = computed(() => {
  const value = Math.max( 0, Math.min(props.modelValue, props.max))

  return Array.from({ length: props.max }, (_, i) => ({
    index: i + 1,
    fill: Math.max(0, Math.min(100, (value - i) * 100))
  }))
})

const setValue = (event: MouseEvent, index: number) => {
  if (props.disabled || props.readonly) return

  if (!props.half) {
    emit('update:modelValue', index)
    return
  }

  const target = event.currentTarget as HTMLElement

  const rect = target.getBoundingClientRect()

  const isLeftHalf = event.clientX - rect.left < rect.width / 2

  emit('update:modelValue', isLeftHalf ? index - 0.5 : index)
}
</script>

<template>
  <div
    :class="s.container({ class: styleSlots?.container })"
    role="radiogroup"
    :aria-disabled="disabled"
    :aria-readonly="readonly"
    :aria-label="ariaLabel"
    :aria-labelledby="ariaLabelledBy"
    :aria-describedby="ariaDescribedBy"
  >
    <slot
      :value="modelValue"
      :items="stars"
      :set-value="setValue"
      :is-disabled="disabled"
      :is-readonly="readonly"
    >
      <div
        v-for="star in stars"
        :key="star.index"
        :class="s.iconContainer({ class: styleSlots?.iconContainer })"
        role="radio"
        :aria-checked="modelValue >= star.index"
        :aria-label="`${star.index} of ${max}`"
        @click="(e) => setValue(e, star.index)"
      >
        <vk-icon
          :name="iconName"
          :class="s.iconBase({ class: styleSlots?.iconBase })"
        />

        <vk-icon
          :name="iconName"
          :class="s.iconOverlay({ class: styleSlots?.iconOverlay })"
          :style="{ width: `${star.fill}%` }"
        />
      </div>
    </slot>
  </div>
</template>
