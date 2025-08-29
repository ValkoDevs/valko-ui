<script setup lang="ts">
import type { CardImageProps } from '#valkoui/types/Card'
import styles from '#valkoui/styles/CardImage.styles.ts'

defineOptions({ name: 'VkCardImage' })

const props = withDefaults(defineProps<CardImageProps>(), {
  width: '100%',
  height: 'auto',
  alt: 'card-image',
  styleSlots: undefined
})

const { container, imageTag, gradient } = styles(props)
</script>

<template>
  <div
    :style="`width:${width}; height:${height};`"
    :class="container({ class: styleSlots?.container })"
  >
    <slot :classes="imageTag({ class: styleSlots?.imageTag })">
      <img
        :src="src"
        :alt="alt"
        :class="imageTag({ class: styleSlots?.imageTag })"
      >
    </slot>
    <div :class="gradient({ class: styleSlots?.gradient })" />
  </div>
</template>
