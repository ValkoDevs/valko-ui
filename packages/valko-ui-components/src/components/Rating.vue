<script setup lang="ts">
import { reactive, computed, onBeforeUnmount } from 'vue'
import { RatingItem, RatingItemIndicator, RatingRoot } from 'reka-ui'
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

const maxLength = computed(() => Math.max(1, props.max))

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

const onValueChange = (value: number) => {
  if (props.readonly) return

  playAnimation(value)

  emit('update:modelValue', value)
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

const clearHover = () => state.hover = null

const stars = computed(() => {
  const max = Math.max(1, props.max)
  const value = Math.max(0, Math.min(displayValue.value, max))

  return Array.from({ length: max }, (_, i) => ({
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
  <RatingRoot
    :model-value="modelValue"
    :length="maxLength"
    :step="half ? 0.5 : 1"
    :disabled="disabled"
    clearable
    :class="s.container({ class: styleSlots?.container })"
    :aria-disabled="disabled"
    :aria-readonly="readonly"
    :aria-label="ariaLabel"
    :aria-labelledby="ariaLabelledBy"
    :aria-describedby="ariaDescribedBy"
    @update:model-value="onValueChange"
    @mouseleave="clearHover()"
  >
    <slot
      :value="modelValue"
      :display-value="displayValue"
      :items="stars"
      :set-value="setValue"
      :is-disabled="disabled"
      :is-readonly="readonly"
      :clear-hover="clearHover"
    >
      <RatingItem
        v-for="star in stars"
        :key="star.index"
        :item="star.index"
        as-child
      >
        <template #default="{ steps }">
          <div
            :class="s.iconContainer({ class: styleSlots?.iconContainer })"
            :data-hovering="star.hovering"
            @mousemove="(e) => onHover(e, star.index)"
          >
            <vk-icon
              :key="`base-${iconName}-${star.index}`"
              :name="iconName"
              :class="s.iconBase({ class: styleSlots?.iconBase })"
            />

            <vk-icon
              :key="`overlay-${iconName}-${star.index}`"
              :name="iconName"
              :class="s.iconOverlay({ class: styleSlots?.iconOverlay, animate: star.index <= state.animated })"
              :style="{ width: `${star.fill}%`, transitionDelay: `${star.delay}ms` }"
            />

            <RatingItemIndicator
              v-for="step in steps"
              :key="step"
              :step="step"
              as-child
            >
              <button
                type="button"
                :class="s.indicator({ class: styleSlots?.indicator })"
                :aria-label="`${step} of ${maxLength}`"
              />
            </RatingItemIndicator>
          </div>
        </template>
      </RatingItem>
    </slot>
  </RatingRoot>
</template>
