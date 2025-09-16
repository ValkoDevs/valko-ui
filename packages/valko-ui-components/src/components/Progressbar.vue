<script setup lang="ts">
import { computed } from 'vue'
import type { ProgressbarProps } from '#valkoui/types/Progressbar'
import styles from '#valkoui/styles/Progressbar.styles.ts'
import diagonalStripes from '#valkoui/img/diagonal-stripes.svg'

defineOptions({ name: 'VkProgressbar' })

const props = withDefaults(defineProps<ProgressbarProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  progress: 0,
  buffer: 0,
  striped: false,
  indeterminate: false
})

const s = computed(() => styles(props))

const progressStyles = computed(() => {
  return {
    clipPath: `inset(0 ${100 - props.progress}% 0 0)`
  }
})

const stripeStyles = computed(() => {
  const sizeMap: Record<string, string> = {
    xs: '1rem',
    sm: '1.25rem',
    md: '1.50rem',
    lg: '1.75rem'
  }

  return {
    backgroundImage: props.striped ? `url("${diagonalStripes}")` : undefined,
    backgroundSize: props.striped ? sizeMap[props.size] : undefined
  }
})

const bufferStyles = computed(() => !props.indeterminate ? `left: ${props.buffer - 100}%;` : '')

const showContent = computed(() => props.shape !== 'line')
</script>

<template>
  <div
    :class="s.container({ class: styleSlots?.container })"
  >
    <div :class="s.background({ class: styleSlots?.background })">
      <div
        v-if="!!props.buffer && !indeterminate"
        :class="s.buffer()"
        :style="bufferStyles"
      />
      <div :class="s.content({ class: styleSlots?.content})">
        <slot
          v-if="showContent"
          :progress="props.progress"
          :buffer="props.buffer"
        />
      </div>
    </div>
    <div
      :class="s.progress({ class: styleSlots?.progress })"
      :style="progressStyles"
    >
      <div
        v-if="striped"
        :class="s.stripes({ class: styleSlots?.stripes })"
        :style="stripeStyles"
      />
      <slot
        v-if="showContent"
        :progress="props.progress"
        :buffer="props.buffer"
      />
    </div>
  </div>
</template>
