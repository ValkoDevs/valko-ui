<script lang="ts" setup>
import { ExampleSectionProps } from './interfaces'
import  useStyle  from './ExampleSection.styles'

defineOptions({ name: 'ExampleSection' })

const props = withDefaults(defineProps<ExampleSectionProps>(), {
  title: 'Title',
  direction: 'row',
  justify: 'normal',
  align: 'center',
  gap: false,
  wrap: false
})

const classes = useStyle(props)
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
