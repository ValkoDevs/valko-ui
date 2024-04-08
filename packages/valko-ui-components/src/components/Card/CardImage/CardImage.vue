<script setup lang="ts">
import { watchEffect, ref, Ref } from 'vue'
import { useStyle } from './CardImage.styles'
import { CardImageProps } from '#valkoui/types'

defineOptions({ name: 'VkCardImage' })

const props = withDefaults(defineProps<CardImageProps>(), {
  width: '100%',
  height: 'auto'
})
const classes = useStyle()
const verifiedSrc: Ref<string | null> = ref(null)
const img: HTMLImageElement = new Image()

watchEffect(async () => {
  img.src = props.src ?? ''

  try {
    await img.decode()
    verifiedSrc.value = props.src
  } catch (error) {
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
    <div
      v-if="$slots.default"
      :class="classes.gradient"
    >
      <slot />
    </div>
  </div>
</template>
