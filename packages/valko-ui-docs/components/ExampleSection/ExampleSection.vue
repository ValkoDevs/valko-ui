<script lang="ts" setup>
import { useStyle } from '@valko-ui/components'
import type { ExampleSectionProps } from './interfaces'
import styles from './ExampleSection.styles'

defineOptions({ name: 'ExampleSection' })

const props = withDefaults(defineProps<ExampleSectionProps>(), {
  title: 'Title',
  direction: 'row',
  justify: 'normal',
  align: 'center',
  gap: false,
  wrap: false
})

const classes = useStyle<ExampleSectionProps>(props, styles)
</script>

<template>
  <section class="w-full mt-10">
    <h3 class="text-xl mb-4">
      {{ props.title }}
    </h3>
    <div :class="classes">
      <slot />
    </div>
  </section>
</template>
