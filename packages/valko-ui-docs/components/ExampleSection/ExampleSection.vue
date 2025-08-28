<script lang="ts" setup>
import { type Tab, useStyle } from '#valkoui'
import type { ExampleSectionProps } from './interfaces'
import styles from './ExampleSection.styles'

defineOptions({ name: 'ExampleSection' })

const props = withDefaults(defineProps<ExampleSectionProps>(), {
  title: 'Title',
  classes: ''
})

const tabs: Tab[] = [
  { key: 'examples', title: 'Examples' },
  { key: 'code', title: 'Code' }
]

const parsedStyles = useStyle<ExampleSectionProps>(props, styles)
</script>

<template>
  <section class="w-full mt-10 overflow-visible relative">
    <h3 class="text-xl pl-3 pt-3 bg-surface-container-lowest rounded-t-lg">
      {{ props.title }}
    </h3>
    <vk-tabs
      :tabs="tabs"
      shape="line"
      grow
    >
      <template #examples>
        <div :class="`${parsedStyles} ${classes}`">
          <slot />
        </div>
      </template>

      <template #code>
        <div class="p-4 bg-surface-container-lowest rounded-b-lg w-full">
          <slot name="code" />
        </div>
      </template>
    </vk-tabs>
  </section>
</template>
