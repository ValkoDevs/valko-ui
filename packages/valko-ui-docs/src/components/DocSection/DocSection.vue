<script lang="ts" setup>
import { DocSectionProps } from './interfaces'
import  useStyle  from './DocSection.styles'

defineOptions({ name: 'DocSection' })

const props = withDefaults(defineProps<DocSectionProps>(), {
  title: 'Title',
  description: 'Description'

})

const classes = useStyle()

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
      <div class="flex">
        <div class="w-1/2 flex justify-center items-center border border-light-4 dark:border-dark-1 rounded">
          <slot name="playground-view" />
        </div>
        <div class="w-1/2 px-4">
          <form action="">
            <slot name="playground-options" />
          </form>
        </div>
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
      <div class="flex justify-between items-center">
        <slot name="api" />
      </div>
    </section>
  </div>
</template>

<style lang="postcss" scoped>

</style>
