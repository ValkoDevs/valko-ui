<script setup lang="ts">
import { computed, ref, watch, toValue, useId } from 'vue'
import type { RangeProps, Thumb, ThumbHandlers } from '#valkoui/types/Range'
import styles from '#valkoui/styles/Range.styles.ts'
import diagonalStripes from '#valkoui/img/diagonal-stripes.svg'
import useRangeKeyboardNav from '#valkoui/composables/useRangeKeyboardNav.ts'

defineOptions({ name: 'VkRange' })

const props = withDefaults(defineProps<RangeProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  min: 0,
  max: 100,
  step: 10,
  modelValue: 50,
  striped: false,
  isDouble: false,
  showSteps: false,
  labels: () => []
})

const emit = defineEmits(['update:modelValue'])

const s = computed(() => styles(props))

const rangeId = useId()

const isDragging = ref(false)
const sliderRef = ref<HTMLElement | null>(null)
const draggingThumb = ref<Thumb>('min')

const getThumbValue = (thumb: Thumb) => {
  if (Array.isArray(props.modelValue)) {
    return thumb === 'min'
      ? props.modelValue[0]
      : props.modelValue[1]
  }

  return thumb === 'min'
    ? props.min
    : props.modelValue
}

const thumbRefMap = {
  min: ref(getThumbValue('min')),
  max: ref(getThumbValue('max'))
}

const getNewThumbPosition = (clientX: number): number => {
  if (!sliderRef.value) return 0

  const sliderRect = sliderRef.value.getBoundingClientRect()

  let newPosition =
    ((clientX - sliderRect.left) / sliderRect.width) *
      (props.max - props.min) +
    props.min

  newPosition = Math.round(newPosition / props.step) * props.step

  return Math.min(props.max, Math.max(props.min, newPosition))
}

const updateThumbPosition = (newPosition: number, thumb: Thumb) => {
  thumbRefMap[thumb].value = newPosition

  if (props.isDouble) {
    const otherThumb = thumb === 'min' ? 'max' : 'min'

    const overlaps =
      thumb === 'min'
        ? newPosition > thumbRefMap[otherThumb].value
        : newPosition < thumbRefMap[otherThumb].value

    if (overlaps)
      thumbRefMap[thumb].value = thumbRefMap[otherThumb].value

    emit('update:modelValue', [
      thumbRefMap.min.value,
      thumbRefMap.max.value
    ])

    return
  }

  emit('update:modelValue', thumbRefMap.max.value)
}

const registerListeners = () => {
  listeners.forEach(([event, handler]) => {
    document.addEventListener(event, handler)
  })
}

const removeListeners = () => {
  listeners.forEach(([event, handler]) => {
    document.removeEventListener(event, handler)
  })
}

const onStart = (event: MouseEvent | TouchEvent, thumb: Thumb) => {
  isDragging.value = true
  draggingThumb.value = thumb

  const clientX =
    event instanceof MouseEvent
      ? event.clientX
      : event.touches[0].clientX

  updateThumbPosition(
    getNewThumbPosition(clientX),
    thumb
  )

  registerListeners()
}

const selectThumb = (newPosition: number) => {
  const thumb: Thumb = props.isDouble
    ? newPosition <=
      (thumbRefMap.min.value + thumbRefMap.max.value) / 2
      ? 'min'
      : 'max'
    : 'max'

  updateThumbPosition(newPosition, thumb)

  draggingThumb.value = thumb
  isDragging.value = true
}

const onSliderClick = (event: MouseEvent | TouchEvent) => {
  const clientX =
    event instanceof MouseEvent
      ? event.clientX
      : event.touches[0].clientX

  selectThumb(getNewThumbPosition(clientX))

  registerListeners()
}

let animationFrame = 0

const onMove = (event: MouseEvent | TouchEvent) => {
  if (!isDragging.value) return

  cancelAnimationFrame(animationFrame)

  const clientX =
    event instanceof MouseEvent
      ? event.clientX
      : event.touches[0].clientX

  animationFrame = requestAnimationFrame(() => {
    updateThumbPosition(
      getNewThumbPosition(clientX),
      draggingThumb.value
    )
  })
}

const onEnd = () => {
  isDragging.value = false

  removeListeners()
}

const listeners = [
  ['mousemove', onMove],
  ['touchmove', onMove],
  ['mouseup', onEnd],
  ['touchend', onEnd]
] as const

const inlineStyles = computed(() => {
  const sizeMap = {
    xs: '1rem',
    sm: '1.25rem',
    md: '1.5rem',
    lg: '1.75rem'
  } as const

  const range = props.max - props.min
  const center = ((0 - props.min) / range) * 100
  const start = props.isDouble
    ? ((thumbRefMap.min.value - props.min) / range) * 100
    : center

  const end =
    ((thumbRefMap.max.value - props.min) / range) * 100

  const left = Math.min(start, end)
  const width = Math.abs(end - start)

  let styles = `left: ${left}%; width: ${width}%;`

  if (props.striped) {
    styles +=
      `background-image: url("${diagonalStripes}");` +
      `background-size: ${sizeMap[props.size]};`
  }

  return styles.trim()
})

const thumbStyles = computed(() => {
  const calculateStyles = (thumb: Thumb) => {
    const range = props.max - props.min

    const position =
      ((thumbRefMap[thumb].value - props.min) / range) * 100

    const clampedPosition =
      Math.min(100, Math.max(0, position))

    return {
      left: `${clampedPosition}%`
    }
  }

  return {
    start: calculateStyles('min'),
    end: calculateStyles('max')
  }
})

const stepMarks = computed(() => {
  const steps = Math.round(
    (props.max - props.min) / props.step
  )

  return Array.from(
    { length: steps - 1 },
    (_, index) =>
      ((index + 1) * props.step /
        (props.max - props.min)) *
      100
  )
})

const onLabelClick = (newPosition: number) => {
  selectThumb(newPosition)
}

const buildThumbHandlers = (thumb: Thumb): ThumbHandlers => ({
  onMouseDown: (event: MouseEvent) =>
    onStart(event, thumb),

  onTouchStart: (event: TouchEvent) =>
    onStart(event, thumb),

  onKeyDown: useRangeKeyboardNav({
    currentValue: thumbRefMap[thumb],
    min: () => props.min,
    max: () => props.max,
    step: () => props.step,
    onUpdate: (value: number) =>
      updateThumbPosition(value, thumb)
  })
})

const thumbHandlers: Record<Thumb, ThumbHandlers> = {
  min: buildThumbHandlers('min'),
  max: buildThumbHandlers('max')
}

watch(
  [() => props.min, () => props.max, () => props.isDouble],
  ([min, max, isDouble]) => {
    thumbRefMap.min.value = min
    thumbRefMap.max.value = max

    emit(
      'update:modelValue',
      isDouble
        ? [min, max]
        : max
    )
  }
)
</script>

<template>
  <div
    :class="s.container({ class: styleSlots?.container })"
    ref="sliderRef"
    :id="rangeId"
    @mousedown="onSliderClick"
  >
    <div :class="s.progressContainer({ class: styleSlots?.progressContainer })">
      <div
        :class="s.progress({ class: styleSlots?.progress })"
        :style="inlineStyles"
      />
      <div v-if="showSteps">
        <div
          v-for="(position, index) in stepMarks"
          :key="index"
          :style="`left:${position}%`"
          :class="s.stepMark({ class: styleSlots?.stepMark })"
        />
      </div>
    </div>
    <div :class="s.thumbContainer({ class: styleSlots?.thumbContainer })">
      <div
        v-if="isDouble"
        :class="s.thumb({ class: styleSlots?.thumb })"
        :style="thumbStyles.start"
        role="slider"
        tabindex="0"
        :aria-valuemin="min"
        :aria-valuemax="max"
        :aria-valuenow="toValue(thumbRefMap.min)"
        :aria-labelledby="rangeId"
        :aria-describedby="props.ariaDescribedBy"
        aria-label="Minimum value"
        @mousedown="thumbHandlers.min.onMouseDown"
        @keydown="thumbHandlers.min.onKeyDown"
        @touchstart="thumbHandlers.min.onTouchStart"
      />
      <div
        :class="s.thumb({ class: styleSlots?.thumb })"
        :style="thumbStyles.end"
        role="slider"
        tabindex="0"
        :aria-valuemin="min"
        :aria-valuemax="max"
        :aria-valuenow="toValue(thumbRefMap.max)"
        :aria-labelledby="rangeId"
        :aria-describedby="props.ariaDescribedBy"
        :aria-label="isDouble ? 'Maximum value' : 'Value'"
        @mousedown="thumbHandlers.max.onMouseDown"
        @keydown="thumbHandlers.max.onKeyDown"
        @touchstart="thumbHandlers.max.onTouchStart"
      />
    </div>
    <div
      v-if="labels.length > 0"
      :class="s.labelContainer({ class: styleSlots?.labelContainer })"
    >
      <span
        v-for="(el, index) in labels"
        :key="index"
        :style="`left:${el.value}%`"
        :class="s.label({ class: styleSlots?.label })"
        @click="() => onLabelClick(el.value)"
      >
        {{ el.label }}
      </span>
    </div>
  </div>
</template>
