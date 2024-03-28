<script setup lang="ts">
import { ref } from 'vue'
import { useStyle } from './CardImage.styles'
import { CardImageProps } from '#valkoui/types'

defineOptions({ name: 'VkCardImage' })

const props = defineProps<CardImageProps>()

const classes = useStyle()

const imageUrl = ref(props.src)
</script>

<template>
  <div
    :class="classes.container"
  >
    <div
      :class="classes.img"
      :style="{ backgroundImage: 'url(' + imageUrl + ')' }"
    />
    <div :class="classes.gradient" />
    <div :class="classes.slot">
      <slot />
    </div>
  </div>
</template>
