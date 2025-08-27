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

const classes = styles(props)
</script>

<template>
  <div
    :style="`width:${width}; height:${height};`"
    :class="classes.container({ class: props.styleSlots?.container })"
  >
    <slot :classes="classes.img({ class: props.styleSlots?.img })">
      <img
        :src="src"
        :alt="alt"
        :class="classes.img({ class: props.styleSlots?.img })"
      >
    </slot>
    <div :class="classes.gradient({ class: props.styleSlots?.gradient })" />
  </div>
</template>
