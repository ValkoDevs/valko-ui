<script setup lang="ts">
import type { CardImageProps } from '#valkoui/types/Card'
import type { SlotStyles } from '#valkoui/types/common'
import useStyle from '#valkoui/composables/useStyle.ts'
import styles from '#valkoui/styles/CardImage.styles.ts'

defineOptions({ name: 'VkCardImage' })

const props = withDefaults(defineProps<CardImageProps>(), {
  width: '100%',
  height: 'auto',
  alt: 'card-image'
})

const classes = useStyle<CardImageProps, SlotStyles>(props, styles)
</script>

<template>
  <div
    :style="`width:${width}; height:${height};`"
    :class="classes.container"
  >
    <slot :classes="classes.img">
      <img
        :src="src"
        :alt="alt"
        :class="classes.img"
      >
    </slot>
    <div :class="classes.gradient" />
  </div>
</template>
