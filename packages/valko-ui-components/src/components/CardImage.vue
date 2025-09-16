<script setup lang="ts">
import { computed } from 'vue'
import type { CardImageProps } from '#valkoui/types/Card'
import styles from '#valkoui/styles/CardImage.styles.ts'

defineOptions({ name: 'VkCardImage' })

const props = withDefaults(defineProps<CardImageProps>(), {
  width: '100%',
  height: 'auto',
  alt: 'card-image',
  styleSlots: undefined
})

const s = computed(() => styles(props))
</script>

<template>
  <div
    :style="`width:${width}; height:${height};`"
    :class="s.container({ class: styleSlots?.container })"
  >
    <slot :classes="s.imageTag({ class: styleSlots?.imageTag })">
      <img
        :src="src"
        :alt="alt"
        :class="s.imageTag({ class: styleSlots?.imageTag })"
      >
    </slot>
    <div :class="s.gradient({ class: styleSlots?.gradient })" />
  </div>
</template>
