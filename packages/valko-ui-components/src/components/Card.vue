<script setup lang="ts">
import { computed } from 'vue'
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
  elevated: false,
  slotStyles: undefined
})

const emit = defineEmits(['click'])

const slots = defineSlots<{ default(): Record<string, unknown>[] }>()

const classes = styles({ ...props, class: props.styleSlots })

const hasImageSlot = computed(() => slots.default?.().some((node) => node.type === VkCardImage))

const element = computed(() => props.isPressable ? 'html:button' : 'div')

const onClick = (e: MouseEvent) => {
  if (!props.disabled && props.isPressable) emit('click', e)
}
</script>

<template>
  <component
    :is="element"
    :class="classes"
    :data-layout="layout"
    :data-card-image="hasImageSlot"
    @click="onClick"
  >
    <slot />
  </component>
</template>
