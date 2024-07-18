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
  progress: 0,
  min: 0,
  max: 100,
  step: 10,
  minThumbValue: 50,
  maxThumbValue: 100,
  striped: false,
  isRange: false,
  showSteps: false,
  hideThumbs: false
})

const emit = defineEmits(['update:minThumbValue', 'update:maxThumbValue'])

const classes = useStyle<RangeProps, SlotStyles>(props, styles)

const isDragging = ref(false)
const sliderRef = ref<HTMLElement | null>(null)
const draggingThumb = ref<'first' | 'second'>('first')
const minThumbProgress = ref(props.minThumbValue)
const maxThumbProgress = ref(props.isRange ? props.maxThumbValue : props.minThumbValue)

const getNewProgress = (event: MouseEvent): number => {
  if (!sliderRef.value) return 0
  const sliderRect = sliderRef.value.getBoundingClientRect()
  let newProgress = ((event.clientX - sliderRect.left) / sliderRect.width) * (props.max - props.min) + props.min
  newProgress = Math.round(newProgress / props.step) * props.step
  return Math.min(props.max, Math.max(props.min, newProgress))
}

const updateProgress = (newProgress: number, thumb: 'first' | 'second') => {
  if (thumb === 'first') {
    minThumbProgress.value = newProgress
    if (props.isRange && minThumbProgress.value > maxThumbProgress.value) {
      minThumbProgress.value = maxThumbProgress.value
    }
    emit('update:minThumbValue', minThumbProgress.value)
  } else {
    maxThumbProgress.value = newProgress
    if (props.isRange && maxThumbProgress.value < minThumbProgress.value) {
      maxThumbProgress.value = minThumbProgress.value
    }
    emit('update:maxThumbValue', maxThumbProgress.value)
  }
}

const onMouseDown = (event: MouseEvent, thumb: 'first' | 'second') => {
  isDragging.value = true
  draggingThumb.value = thumb
  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseup', onMouseUp)
  updateProgress(getNewProgress(event), thumb)
}

const onSliderClick = (event: MouseEvent) => {
  const newProgress = getNewProgress(event)
  if (!props.isRange) {
    updateProgress(newProgress, 'first')
    isDragging.value = true
    draggingThumb.value = 'first'
  } else {
    const firstDistance = Math.abs(newProgress - minThumbProgress.value)
    const secondDistance = Math.abs(newProgress - maxThumbProgress.value)

    if (firstDistance < secondDistance) {
      updateProgress(newProgress, 'first')
      draggingThumb.value = 'first'
    } else {
      updateProgress(newProgress, 'second')
      draggingThumb.value = 'second'
    }
    isDragging.value = true
  }
  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseup', onMouseUp)
}

const onMouseMove = (event: MouseEvent) => {
  if (!isDragging.value) return
  requestAnimationFrame(() => {
    updateProgress(getNewProgress(event), draggingThumb.value)
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
  const start = ((minThumbProgress.value - props.min) / range) * 100
  const end = props.isRange ? ((maxThumbProgress.value - props.min) / range) * 100 : start

  let styles = `left: ${props.isRange ? start : 0}%; width: ${props.isRange ? end - start : start}%;`

  if (props.striped) {
    styles += `background-image: url("${diagonalStripes}"); background-size: ${sizeMap[props.size]};`
  }

  return styles.trimStart()
})

const thumbStyles = (thumb: 'first' | 'second') => {
  const range = props.max - props.min
  const position = thumb === 'first' ? ((minThumbProgress.value - props.min) / range) * 100
    : ((maxThumbProgress.value - props.min) / range) * 100

  const clampedPosition = Math.min(100, Math.max(0, position))

  return { left: `${clampedPosition}%` }
}

const stepMarks = computed(() => {
  return Array.from({ length: (props.max - props.min) / props.step - 1 }, (_, i) => {
    return ((i + 1) * props.step / (props.max - props.min)) * 100
  })
})

watch([() => props.minThumbValue, () => props.maxThumbValue, () => props.isRange], ([newMinThumbValue, newMaxThumbValue, newisRange]) => {
  minThumbProgress.value = newMinThumbValue
  if (newisRange) {
    maxThumbProgress.value = newMaxThumbValue
  } else {
    maxThumbProgress.value = newMinThumbValue
  }
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
          v-for="(mark, index) in stepMarks"
          :key="index"
          :style="`left:${mark}%`"
          :class="classes.stepMark"
        />
      </div>
    </div>
    <div :class="classes.thumbContainer">
      <div
        :class="classes.thumb"
        :style="thumbStyles('first')"
        @mousedown="(event) => onMouseDown(event, 'first')"
      />
      <div
        v-if="isRange"
        :class="classes.thumb"
        :style="thumbStyles('second')"
        @mousedown="(event) => onMouseDown(event, 'second')"
      />
    </div>
  </div>
</template>
