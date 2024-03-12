<script setup lang="ts">
import { computed } from 'vue'
import { ProgressbarProps } from '#valkoui/components/Progressbar/interfaces'
import diagonalStripes from '#valkoui/img/diagonal-stripes.svg'
import useStyle from './Progressbar.styles'

const props = withDefaults(defineProps<ProgressbarProps>(), {
  color: 'primary',
  variant: 'filled',
  indeterminateLabel: 'Loading...',
  size: 'md',
  shape: 'soft',
  progress: 0,
  buffer: 0
})

defineOptions({ name: 'VkProgressbar' })
const classes = useStyle(props)

const inlineStyles = computed(() => {
  const sizeMap = {
    xs: '1rem',
    sm: '1.25rem',
    md: '1.50rem',
    lg: '1.75rem'
  }
  let styles = ''
  if (props.striped) styles += ` background-image: url("${diagonalStripes}"); background-size: ${sizeMap[props.size]};`
  if (!props.indeterminate) styles += ` left: ${props.progress - 100}%;`

  return styles.trimStart()
})

const bufferStyles = computed(() => !props.indeterminate ? `left: ${props.buffer - 100}%;` : '')
</script>

<template>
  <div :class="classes.container">
    <div
      :class="classes.progress"
      :style="inlineStyles"
    />
    <div :class="classes.content">
      <slot
        :pogress="props.progress"
        :buffer="props.buffer"
      />
    </div>
    <div
      v-if="!!props.buffer && !props.indeterminate"
      :class="classes.buffer"
      :style="bufferStyles"
    />
  </div>
</template>
