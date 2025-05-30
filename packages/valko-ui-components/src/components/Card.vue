<script setup lang="ts">
import { computed } from 'vue'
import type { CardProps } from '#valkoui/types/Card'
import useStyle from '#valkoui/composables/useStyle.ts'
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

const classes = useStyle<CardProps>(props, styles)

const hasImageSlot = computed(() => slots.default?.().some((node) => node.type === VkCardImage))

const element = computed(() => props.isPressable ? 'html:button' : 'div')

const onClick = () => {
  if (!props.disabled && props.isPressable) emit('click')
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
