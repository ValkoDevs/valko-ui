<script setup lang="ts">
import { computed } from 'vue'
import type { ProgressbarProps } from '#valkoui/types/Progressbar'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Progressbar.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'
import diagonalStripes from '#valkoui/img/diagonal-stripes.svg'

defineOptions({ name: 'VkProgressbar' })

const props = withDefaults(defineProps<ProgressbarProps>(), {
  color: 'primary',
  variant: 'filled',
  indeterminateLabel: 'Loading...',
  size: 'md',
  shape: 'soft',
  progress: 0,
  buffer: 0
})

const classes = useStyle<ProgressbarProps, SlotStyles>(props, styles)

const inlineStyles = computed(() => {
  const sizeMap: Record<string, string> = {
    xs: '1rem',
    sm: '1.25rem',
    md: '1.50rem',
    lg: '1.75rem'
  }
  let styles = ''
  if (props.striped) styles += `background-image: url("${diagonalStripes}"); background-size: ${sizeMap[props.size]};`
  if (!props.indeterminate) styles += `left: ${props.progress - 100}%;`

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
