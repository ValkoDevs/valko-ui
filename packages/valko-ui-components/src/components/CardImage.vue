<script setup lang="ts">
import type { CardImageProps } from '#valkoui/types/Card'
import type { SlotStyles } from '#valkoui/types/common'
import useImage from '#valkoui/composables/useImage.ts'
import useStyle from '#valkoui/composables/useStyle.ts'
import styles from '#valkoui/styles/CardImage.styles.ts'

defineOptions({ name: 'VkCardImage' })

const props = withDefaults(defineProps<CardImageProps>(), {
  width: '100%',
  height: 'auto',
  alt: 'card-image'
})

const classes = useStyle<CardImageProps, SlotStyles>(props, styles)

const { verifiedSrc } = useImage(props.src)
</script>

<template>
  <div
    :style="`width:${width}; height:${height};`"
    :class="classes.container"
  >
    <img
      v-if="verifiedSrc"
      :src="verifiedSrc"
      :alt="alt"
      :class="classes.img"
    >
    <div :class="classes.gradient" />
  </div>
</template>
