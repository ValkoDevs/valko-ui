<script setup lang="ts">
import type { AvatarProps } from '#valkoui/types/Avatar'
import type { SlotStyles } from '#valkoui/types/common'
import useImage from '#valkoui/composables/useImage.ts'
import useStyle from '#valkoui/composables/useStyle.ts'
import styles from '#valkoui/styles/Avatar.styles.ts'
import VkIcon from './Icon.vue'

defineOptions({ name: 'VkAvatar' })

const props = withDefaults(defineProps<AvatarProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft'
})

const classes = useStyle<AvatarProps, SlotStyles>(props, styles)

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

const { verifiedSrc } = useImage(props.src)
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
