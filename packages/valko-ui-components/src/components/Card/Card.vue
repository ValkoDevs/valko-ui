<script setup lang="ts">
import { computed } from 'vue'
import { CardProps } from '#valkoui/types'
import { useStyle } from './Card.styles'

defineOptions({ name: 'VkCard' })

const props = withDefaults(defineProps<CardProps>(), {
  variant: 'filled',
  shape: 'soft',
  size: 'md'
})

const emit = defineEmits(['click'])

const classes = useStyle(props)

const onClick = () => {
  if (!props.disabled && props.isPressable) {
    emit('click')
  }
}

const element = computed(() => props.isPressable ? 'button' : 'div')
</script>

<template>
  <component
    :is="element"
    :class="classes"
    :data-size="size"
    :data-variant="variant"
    :data-shape="shape"
    :data-direction="direction"
    @click="onClick"
  >
    <slot />
  </component>
</template>
