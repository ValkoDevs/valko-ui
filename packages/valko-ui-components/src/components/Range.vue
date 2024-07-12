<script setup lang="ts">
import { computed, ref, watch } from 'vue'
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
  step: 1,
  firstValue: 0,
  secondValue: 100,
  condensed: false,
  striped: false
})

const emit = defineEmits(['update:firstValue', 'update:secondValue'])

const classes = useStyle<RangeProps, SlotStyles>(props, styles)

const isDragging = ref(false)
const sliderRef = ref<HTMLElement | null>(null)
const draggingThumb = ref<'first' | 'second'>('first')

const firstProgress = ref(props.firstValue)
const secondProgress = ref(props.double ? props.secondValue : props.firstValue)

const onMouseDown = (event: MouseEvent, thumb: 'first' | 'second') => {
  sliderRef.value = (event.target as HTMLElement).closest('.vk-range')
  isDragging.value = true
  draggingThumb.value = thumb
  document.addEventListener('mousemove', onMouseMove)
  document.addEventListener('mouseup', onMouseUp)
}

const onMouseMove = (event: MouseEvent) => {
  if (!isDragging.value || !sliderRef.value) return
  const sliderRect = sliderRef.value.getBoundingClientRect()
  let newProgress = ((event.clientX - sliderRect.left) / sliderRect.width) * 100
  newProgress = Math.min(100, Math.max(0, newProgress))

  if (draggingThumb.value === 'first') {
    firstProgress.value = newProgress
    if (props.double && firstProgress.value > secondProgress.value) {
      firstProgress.value = secondProgress.value
    }
    emit('update:firstValue', firstProgress.value)
  } else {
    secondProgress.value = newProgress
    if (props.double && secondProgress.value < firstProgress.value) {
      secondProgress.value = firstProgress.value
    }
    emit('update:secondValue', secondProgress.value)
  }
}

const onMouseUp = () => {
  isDragging.value = false
  document.removeEventListener('mousemove', onMouseMove)
  document.removeEventListener('mouseup', onMouseUp)
}

watch(() => props.firstValue, (newProgress) => {
  firstProgress.value = newProgress
})

watch(() => props.secondValue, (newProgress) => {
  if (props.double) {
    secondProgress.value = newProgress
  }
})

watch(() => props.double, (newDouble) => {
  if (newDouble) {
    secondProgress.value = props.secondValue
  } else {
    secondProgress.value = props.firstValue
  }
})

const inlineStyles = computed(() => {
  const sizeMap: Record<string, string> = {
    xs: '1rem',
    sm: '1.25rem',
    md: '1.50rem',
    lg: '1.75rem'
  }
  const start = Math.min(firstProgress.value, secondProgress.value)
  const end = Math.max(firstProgress.value, secondProgress.value)
  let styles = `left: ${start}%; width: ${end - start}%;`
  if (props.striped) styles += `background-image: url("${diagonalStripes}"); background-size: ${sizeMap[props.size]};`
  return styles.trimStart()
})

const thumbStyles = (thumb: 'first' | 'second') => {
  const position = thumb === 'first' ? firstProgress.value : secondProgress.value
  return { left: `${position}%` }
}
</script>

<template>
  <div :class="classes.container">
    <div :class="classes.progressContainer">
      <div
        :class="classes.progress"
        :style="inlineStyles"
      />
    </div>
    <div :class="classes.thumbContainer">
      <div
        :class="classes.thumb"
        :style="thumbStyles('first')"
        @mousedown="(event) => onMouseDown(event, 'first')"
      />
      <div
        v-if="double"
        :class="classes.thumb"
        :style="thumbStyles('second')"
        @mousedown="(event) => onMouseDown(event, 'second')"
      />
    </div>
  </div>
</template>
