<script setup lang="ts">
import { computed } from 'vue'
import type { CardProps } from '#valkoui/types/Card'
import useStyle from '#valkoui/composables/useStyle.ts'
import styles from '#valkoui/styles/Card.styles.ts'

defineOptions({ name: 'VkCard' })

const props = withDefaults(defineProps<CardProps>(), {
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  layout: 'vertical'
})

const emit = defineEmits(['click'])

const classes = useStyle<CardProps>(props, styles)

const element = computed(() => props.isPressable ? 'button' : 'div')

const onClick = () => {
  if (!props.disabled && props.isPressable) emit('click')
}
</script>

<template>
  <component
    :is="element"
    :class="classes"
    :data-layout="layout"
    @click="onClick"
  >
    <slot />
  </component>
</template>
