<script setup lang="ts">
import { computed, ref, watch, onMounted } from 'vue'
import type { RangeProps } from '#valkoui/types/Range'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Range.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'
import diagonalStripes from '#valkoui/img/diagonal-stripes.svg'

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

const classes = useStyle<RangeProps, SlotStyles>(props, styles)

const isDragging = ref(false)
const sliderRef = ref<HTMLElement | null>(null)
const draggingThumb = ref<'min' | 'max'>('min')
const thumbRefMap = {
  min: ref(Array.isArray(props.modelValue) ? props.modelValue[0] : 0),
  max: ref(Array.isArray(props.modelValue) ? props.modelValue[1] : props.modelValue)
}

const getNewThumbPosition = (event: MouseEvent): number => {
  if (!sliderRef.value) return 0
  const sliderRect = sliderRef.value.getBoundingClientRect()
  let newPosition = ((event.clientX - sliderRect.left) / sliderRect.width) * (props.max - props.min) + props.min
  newPosition = Math.round(newPosition / props.step) * props.step
  return Math.min(props.max, Math.max(props.min, newPosition))
}

const updateThumbPosition = (newPosition: number, thumb: 'min' | 'max') => {
  const primaryThumb = thumb === 'min' ? 'min' : 'max'
  const secondaryThumb = thumb === 'max' ? 'min' : 'max'
  thumbRefMap[primaryThumb].value = newPosition

  if (props.isDouble) {
    const isOverlapping = primaryThumb === 'min'
      ? thumbRefMap[primaryThumb].value > thumbRefMap[secondaryThumb].value
      : thumbRefMap[primaryThumb].value < thumbRefMap[secondaryThumb].value

    thumbRefMap[primaryThumb].value = isOverlapping ? thumbRefMap[secondaryThumb].value : newPosition

    emit('update:modelValue', [thumbRefMap.min.value, thumbRefMap.max.value])
  } else {
    emit('update:modelValue', thumbRefMap.max.value)
  }
}

const onMouseDown = (event: MouseEvent, thumb: 'min' | 'max') => {
  isDragging.value = true
  draggingThumb.value = thumb
  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseup', onMouseUp)
  updateThumbPosition(getNewThumbPosition(event), thumb)
}

const handleSingleThumb = (newPosition: number) => {
  updateThumbPosition(newPosition, 'max')
  isDragging.value = true
  draggingThumb.value = 'max'
}

const handleMultipleThumbs = (newPosition: number) => {
  const minThumb = Math.abs(newPosition - thumbRefMap.min.value)
  const maxThumb = Math.abs(newPosition - thumbRefMap.max.value)
  const selectedThumb = minThumb < maxThumb ? 'min' : 'max'

  updateThumbPosition(newPosition, selectedThumb)
  draggingThumb.value = selectedThumb

  isDragging.value = true
}

const onSliderClick = (event: MouseEvent) => {
  const newPosition = getNewThumbPosition(event)

  if (!props.isDouble) handleSingleThumb(newPosition)
  else handleMultipleThumbs(newPosition)

  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseup', onMouseUp)
}

const onMouseMove = (event: MouseEvent) => {
  if (!isDragging.value) return

  requestAnimationFrame(() => {
    updateThumbPosition(getNewThumbPosition(event), draggingThumb.value)
  })
}

const onMouseUp = () => {
  isDragging.value = false
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseup', onMouseUp)
}

const inlineStyles = computed(() => {
  const sizeMap: Record<string, string> = {
    xs: '1rem',
    sm: '1.25rem',
    md: '1.50rem',
    lg: '1.75rem'
  }

  const range = props.max - props.min
  const center = ((0 - props.min) / range) * 100
  const start = props.isDouble ? ((thumbRefMap.min.value - props.min) / range) * 100 : center
  const end = props.isDouble ? ((thumbRefMap.max.value - props.min) / range) * 100 : ((thumbRefMap.max.value - props.min) / range) * 100

  const left = Math.min(start, end)
  const width = Math.abs(end - start)

  let styles = `left: ${left}%; width: ${width}%;`

  if (props.striped) {
    styles += `background-image: url("${diagonalStripes}"); background-size: ${sizeMap[props.size]};`
  }

  return styles.trimStart()
})

const thumbStyles = computed(() => {
  const calculateStyles = (thumb: 'min' | 'max') => {
    const range = props.max - props.min
    const position = ((thumbRefMap[thumb].value - props.min) / range) * 100
    const clampedPosition = Math.min(100, Math.max(0, position))

    return { left: `${clampedPosition}%` }
  }

  return {
    start: calculateStyles('min'),
    end: calculateStyles('max')
  }
})

const stepMarks = computed(() => {
  return Array.from({ length: Math.round((props.max - props.min) / props.step - 1) }, (_, i) => {
    return ((i + 1) * props.step / (props.max - props.min)) * 100
  })
})

const onLabelClick = (newPosition: number) => {
  if (!props.isDouble) handleSingleThumb(newPosition)
  else handleMultipleThumbs(newPosition)
}

watch([() => props.min, () => props.max, () => props.isDouble, () => props.step], ([min, max, isDouble]) => {
  thumbRefMap.min.value = min
  thumbRefMap.max.value = max
  emit('update:modelValue', isDouble ? [min, max] : max)
})

onMounted(() => {
  sliderRef.value = document.querySelector('.vk-range')
})
</script>

<template>
  <div
    :class="classes.container"
    ref="sliderRef"
    @mousedown="onSliderClick"
  >
    <div :class="classes.progressContainer">
      <div
        :class="classes.progress"
        :style="inlineStyles"
      />
      <div v-if="showSteps">
        <div
          v-for="(position, index) in stepMarks"
          :key="index"
          :style="`left:${position}%`"
          :class="classes.stepMark"
        />
      </div>
    </div>
    <div :class="classes.thumbContainer">
      <div
        v-if="isDouble"
        :class="classes.thumb"
        :style="thumbStyles.start"
        @mousedown="(event) => onMouseDown(event, 'min')"
      />
      <div
        :class="classes.thumb"
        :style="thumbStyles.end"
        @mousedown="(event) => onMouseDown(event, 'max')"
      />
    </div>
    <div
      v-if="labels.length > 0"
      :class="classes.labelContainer"
    >
      <span
        v-for="(el, index) in labels"
        :key="index"
        :style="`left:${el.value}%`"
        :class="classes.label"
        @click="() => onLabelClick(el.value)"
      >
        {{ el.label }}
      </span>
    </div>
  </div>
</template>
