<script setup lang="ts">
import { ref, computed } from 'vue'

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
  half: false,
  disabled: false,
  readonly: false
})

const emit = defineEmits(['update:modelValue'])

const s = computed(() => styles(props))

const hoverValue = ref<number | null>(null)
const isHovering = computed(() => hoverValue.value !== null)

const getValueFromEvent = (event: MouseEvent, index: number) => {
  if (!props.half) return index

  const target = event.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()

  return event.clientX - rect.left <= rect.width / 2 ? index - 0.5 : index
}

const setValue = (event: MouseEvent, index: number) => {
  if (props.disabled || props.readonly) return

  const value = getValueFromEvent(event, index)

  emit('update:modelValue', props.modelValue === value ? 0 : value)
}

const displayValue = computed(() => hoverValue.value ?? props.modelValue)

const onHover = (event: MouseEvent, index: number) => {
  if (props.disabled || props.readonly) return
  if (!props.half) {
    hoverValue.value = index
    return
  }

  hoverValue.value = getValueFromEvent(event, index)
}

const stars = computed(() => {
  const value = Math.max(0, Math.min(displayValue.value, props.max))

  return Array.from({ length: props.max }, (_, i) => ({
    index: i + 1,
    fill: Math.max(0, Math.min(100, (value - i) * 100)),
    hovering: isHovering.value
  }))
})
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
      :display-value="displayValue"
      :items="stars"
      :set-value="setValue"
      :hover="onHover"
      :clear-hover="() => (hoverValue = null)"
      :is-disabled="disabled"
      :is-readonly="readonly"
    >
      <div
        v-for="star in stars"
        :key="star.index"
        :class="s.iconContainer({ class: styleSlots?.iconContainer })"
        role="radio"
        :aria-checked="star.fill > 0"
        :aria-label="`${star.index} of ${max}`"
        :data-hovering="star.hovering"
        @mousemove="(e) => onHover(e, star.index)"
        @mouseleave="hoverValue = null"
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
