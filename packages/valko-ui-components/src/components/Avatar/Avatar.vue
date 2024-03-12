<script setup lang="ts">
import { ref, Ref, watchEffect } from 'vue'
import { VkIcon } from '../'
import { AvatarProps } from '#valkoui/components/Avatar/interfaces'
import useStyle from './Avatar.styles'

const props = withDefaults(defineProps<AvatarProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft'
})

defineOptions({ name: 'VkAvatar' })

const classes = useStyle(props)
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
  } catch (error) {
    verifiedSrc.value = null
  }
})
</script>

<template>
  <div
    :class="classes.container"
    :title="props.name"
  >
    <img
      v-if="verifiedSrc"
      :src="verifiedSrc"
      :alt="props.name"
      :class="classes.img"
    >
    <span v-else-if="props.name">
      {{ getInitials(props.name) }}
    </span>
    <vk-icon
      v-else
      name="user"
    />
  </div>
</template>
