<script setup lang="ts">
import { ref, Ref, watchEffect } from 'vue'
import type { AvatarProps } from '#valkoui/types/Avatar'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Avatar.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'
import VkIcon from './Icon.vue'

defineOptions({ name: 'VkAvatar' })

const props = withDefaults(defineProps<AvatarProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft'
})

const classes = useStyle<AvatarProps, SlotStyles>(props, styles)

const verifiedSrc: Ref<string | null> = ref(null)
const img: HTMLImageElement = new Image()

const getInitials = (name: string) => {
  const words = name.split(' ')
  let initials = ''

  if (words.length > 0) {
    initials += words[0][0].toUpperCase()

    if (words.length > 1) {
      const lastWordIndex = words.length - 1
      initials += words[lastWordIndex][0].toUpperCase()
    }
  }

  return initials
}

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
    :class="classes.container"
    :title="name"
  >
    <img
      v-if="verifiedSrc"
      :src="verifiedSrc"
      :alt="name"
      :class="classes.img"
    >
    <span v-else-if="name">
      {{ getInitials(name) }}
    </span>
    <vk-icon
      v-else
      name="user"
    />
  </div>
</template>
