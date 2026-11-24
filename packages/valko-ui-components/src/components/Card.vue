<script setup lang="ts">
import { computed } from 'vue'
import { Primitive } from 'reka-ui'
import type { CardProps } from '#valkoui/types/Card'
import styles from '#valkoui/styles/Card.styles.ts'
import VkCardImage from './CardImage.vue'

defineOptions({ name: 'VkCard' })

const props = withDefaults(defineProps<CardProps>(), {
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  layout: 'vertical',
  isPressable: false,
  elevated: false
})

const emit = defineEmits(['click'])

const slots = defineSlots<{ default(): Record<string, unknown>[] }>()

const s = computed(() => styles({ ...props, class: props.styleSlots }))

const hasImageSlot = computed(() => slots.default?.().some((node) => node.type === VkCardImage))

const onClick = (e: MouseEvent) => {
  if (!props.disabled && props.isPressable) emit('click', e)
}
</script>

<template>
  <Primitive
    :as="props.isPressable ? 'button' : 'div'"
    :type="props.isPressable ? 'button' : undefined"
    :class="s"
    :data-layout="layout"
    :data-card-image="hasImageSlot"
    :disabled="props.isPressable ? (props.disabled || undefined) : undefined"
    @click="onClick"
  >
    <slot />
  </Primitive>
</template>
