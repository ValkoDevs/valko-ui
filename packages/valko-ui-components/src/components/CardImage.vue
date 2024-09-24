<script setup lang="ts">
import { watchEffect, ref, Ref } from 'vue'
import type { CardImageProps } from '#valkoui/types/Card'
import type { SlotStyles } from '#valkoui/types/common'
import useStyle from '#valkoui/composables/useStyle.ts'
import styles from '#valkoui/styles/CardImage.styles.ts'

defineOptions({ name: 'VkCardImage' })

const props = withDefaults(defineProps<CardImageProps>(), {
  width: '100%',
  height: 'auto'
})

const classes = useStyle<CardImageProps, SlotStyles>(props, styles)

const verifiedSrc: Ref<string | null> = ref(null)
const img: HTMLImageElement = new Image()

watchEffect(async () => {
  img.src = props.src ?? ''

  try {
    await img.decode()
    verifiedSrc.value = props.src
  } catch {
    verifiedSrc.value = null
  }
})
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
