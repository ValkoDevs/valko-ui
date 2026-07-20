<script setup lang="ts">
import { reactive, computed, onBeforeUnmount } from 'vue'
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

const state = reactive<{ hover: number | null; animated: number }>({
  hover: null,
  animated: 0
})
let animationTimeout: ReturnType<typeof setTimeout> | undefined

const isHovering = computed(() => state.hover !== null)

const getValueFromEvent = (event: MouseEvent, index: number) => {
  if (!props.half) return index

  const target = event.currentTarget as HTMLElement
  const rect = target.getBoundingClientRect()

  return event.clientX - rect.left <= rect.width / 2 ? index - 0.5 : index
}

const playAnimation = (value: number) => {
  state.animated = value

  clearTimeout(animationTimeout)

  animationTimeout = setTimeout(() => state.animated = 0, 300)
}

const setValue = (event: MouseEvent, index: number) => {
  if (props.disabled || props.readonly) return

  const value = getValueFromEvent(event, index)

  playAnimation(value)

  emit('update:modelValue', props.modelValue === value ? 0 : value)
}

const displayValue = computed(() => state.hover ?? props.modelValue)

const onHover = (event: MouseEvent, index: number) => {
  if (props.disabled || props.readonly) return
  if (!props.half) {
    state.hover = index
    return
  }

  state.hover = getValueFromEvent(event, index)
}

const stars = computed(() => {
  const value = Math.max(0, Math.min(displayValue.value, props.max))

  return Array.from({ length: props.max }, (_, i) => ({
    index: i + 1,
    fill: Math.max(0, Math.min(100, (value - i) * 100)),
    hovering: isHovering.value,
    active: value >= i + 1,
    delay: isHovering.value ? 0 : i * 40
  }))
})

onBeforeUnmount(() => clearTimeout(animationTimeout))
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
      :clear-hover="() => (state.hover = 0)"
      :is-disabled="disabled"
      :is-readonly="readonly"
    >
      <div
        v-for="star in stars"
        :key="star.index"
        :class="s.iconContainer({ class: styleSlots?.iconContainer })"
        role="radio"
        :aria-checked="star.active"
        :aria-label="`${star.index} of ${max}`"
        :data-hovering="star.hovering"
        @mousemove="(e) => onHover(e, star.index)"
        @mouseleave="state.hover = 0"
        @click="(e) => setValue(e, star.index)"
      >
        <vk-icon
          :name="iconName"
          :class="s.iconBase({ class: styleSlots?.iconBase })"
        />

        <vk-icon
          :name="iconName"
          :class="s.iconOverlay({ class: styleSlots?.iconOverlay, animate: star.index <= state.animated })"
          :style="{ width: `${star.fill}%`, transitionDelay: `${star.delay}ms` }"
        />
      </div>
    </slot>
  </div>
</template>
