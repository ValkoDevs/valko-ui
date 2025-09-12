<script lang="ts" setup>
import type { Tab } from '#valkoui'
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

const { section, slotContainer, title, codeContainer } = styles(props)
</script>

<template>
  <section :class="section({ class: props.styleSlots?.section })">
    <h3 :class="title({ class: props.styleSlots?.title })">
      {{ props.title }}
    </h3>
    <vk-tabs
      :tabs="tabs"
      shape="line"
      grow
    >
      <template #examples-content>
        <div :class="slotContainer({ class: props.styleSlots?.slotContainer })">
          <slot />
        </div>
      </template>

      <template #code-content>
        <div :class="codeContainer({ class: props.styleSlots?.codeContainer })">
          <slot name="code" />
        </div>
      </template>
    </vk-tabs>
  </section>
</template>
