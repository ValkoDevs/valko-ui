<script lang="ts" setup>
import { useStyle, type SlotStyles } from '@valko-ui/components'
import type { DocSectionProps } from './interfaces'
import styles from './DocSection.styles'

defineOptions({ name: 'DocSection' })

const props = withDefaults(defineProps<DocSectionProps>(), {
  title: 'Title',
  description: 'Description'
})

const classes = useStyle<DocSectionProps, SlotStyles>(props, styles)

</script>
<template>
  <div :class="classes.container">
    <h1 :class="classes.title">
      {{ props.title }}
    </h1>
    <hr :class="classes.divider">

    <section :class="classes.section">
      {{ props.description }}
    </section>

    <section :class="classes.section">
      <h2 :class="classes.subtitle">
        Playground
      </h2>
      <hr :class="classes.divider">
      <div :class="classes.playground">
        <div :class="classes.playgroundView">
          <slot name="playground-view" />
        </div>
        <form
          action=""
          :class="classes.playgroundForm"
        >
          <slot name="playground-options" />
        </form>
      </div>
    </section>

    <section :class="classes.section">
      <h2 :class="classes.subtitle">
        Examples
      </h2>
      <hr :class="classes.divider">
      <slot name="examples" />
    </section>

    <section :class="classes.section">
      <h2 :class="classes.subtitle">
        API
      </h2>
      <hr :class="classes.divider">
      <div class="flex flex-col justify-around items-start gap-2 text-xl">
        <slot name="api" />
      </div>
    </section>
  </div>
</template>

<style lang="postcss" scoped>

</style>
