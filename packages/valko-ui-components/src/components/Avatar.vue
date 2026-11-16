<script setup lang="ts">
import { computed } from 'vue'
import { AvatarFallback, AvatarImage, AvatarRoot } from 'reka-ui'
import type { AvatarProps } from '#valkoui/types/Avatar'
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

const s = computed(() => styles(props))

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
  <AvatarRoot
    as="div"
    :class="s.container({ class: styleSlots?.container })"
    :title="name"
    :role="src || name ? 'img' : 'presentation'"
    :aria-label="ariaLabel ? ariaLabel : name"
    :aria-hidden="!(src || name) || undefined"
  >
    <slot>
      <AvatarImage
        v-if="src"
        :src="src"
        :alt="name"
        :class="s.imageTag({ class: styleSlots?.imageTag })"
      />
      <AvatarFallback as-child>
        <span v-if="name">{{ getInitials(name) }}</span>
        <vk-icon
          v-else
          name="user"
        />
      </AvatarFallback>
    </slot>
  </AvatarRoot>
</template>
