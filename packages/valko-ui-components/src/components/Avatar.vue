<script setup lang="ts">
import type { AvatarProps } from '#valkoui/types/Avatar'
import type { SlotStyles } from '#valkoui/types/common'
import useStyle from '#valkoui/composables/useStyle.ts'
import styles from '#valkoui/styles/Avatar.styles.ts'
import VkIcon from './Icon.vue'

defineOptions({ name: 'VkAvatar' })

const props = withDefaults(defineProps<AvatarProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  elevated: false
})

const classes = useStyle<AvatarProps, SlotStyles>(props, styles)

const getInitials = (name: string): string => {
  return name
    .split(' ')
    .filter(Boolean)
    .map(word => word[0].toUpperCase())
    .slice(0, 2)
    .join('')
}
</script>

<template>
  <div
    :class="classes.container"
    :title="name"
  >
    <img
      v-if="src"
      :src="src"
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
