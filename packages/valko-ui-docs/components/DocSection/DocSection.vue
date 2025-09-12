<script lang="ts" setup>
import type { DocSectionProps } from './interfaces'
import styles from './DocSection.styles'

defineOptions({ name: 'DocSection' })

const props = withDefaults(defineProps<DocSectionProps>(), {
  title: 'Title',
  description: 'Description'
})

const { container, title, section, subtitle, playground, playgroundView, playgroundForm, apiContainer } = styles(props)
</script>

<template>
  <div :class="container({ class: props.styleSlots?.container })">
    <h1 :class="title({ class: props.styleSlots?.title })">
      {{ props.title }}
    </h1>
    <vk-divider
      class="mb-4"
      size="sm"
      color="surface"
    />

    <section :class="section({ class: props.styleSlots?.section })">
      <slot name="description">
        {{ description }}
      </slot>
    </section>

    <section :class="section({ class: props.styleSlots?.section })">
      <h2 :class="subtitle({ class: props.styleSlots?.subtitle })">
        Playground
      </h2>
      <vk-divider
        class="mb-4"
        size="sm"
        color="surface"
      />
      <div :class="playground({ class: props.styleSlots?.playground })">
        <div :class="playgroundView({ class: props.styleSlots?.playgroundView })">
          <slot name="playground-view" />
        </div>
        <form
          action=""
          :class="playgroundForm({ class: props.styleSlots?.playgroundForm })"
        >
          <slot name="playground-options" />
        </form>
      </div>
    </section>

    <section :class="section({ class: props.styleSlots?.section })">
      <h2 :class="subtitle({ class: props.styleSlots?.subtitle })">
        Examples
      </h2>
      <vk-divider
        class="mb-4"
        size="sm"
        color="surface"
      />
      <slot name="examples" />
    </section>

    <section :class="section({ class: props.styleSlots?.section })">
      <h2 :class="subtitle({ class: props.styleSlots?.subtitle })">
        API
      </h2>
      <vk-divider
        class="mb-4"
        size="sm"
        color="surface"
      />
      <div :class="apiContainer({ class: props.styleSlots?.apiContainer })">
        <slot name="api" />
      </div>
    </section>
  </div>
</template>

<style lang="postcss" scoped>

</style>
