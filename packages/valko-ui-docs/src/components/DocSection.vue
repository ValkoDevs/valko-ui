<script lang="ts" setup>
interface DocSectionProps {
  title: string
  description: string
}

withDefaults(defineProps<DocSectionProps>(), {
  title: 'Title',
  type: 'Here goes a description',
})
</script>
<template>
  <div class="content">
    <h1>{{ title }}</h1>
    <hr>

    <section class="w-full">
      {{ description }}
    </section>

    <section class="w-full">
      <h2>Playground</h2>
      <hr>
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

    <section class="w-full">
      <h2>Examples</h2>
      <hr>
      <slot name="examples" />
    </section>

    <section class="w-full">
      <h2>API</h2>
      <hr>
      <div class="flex justify-between items-center">
        <slot name="api" />
      </div>
    </section>
  </div>
</template>

<style lang="postcss" scoped>
  h1 {
    @apply text-4xl font-bold;
  }
  h2 {
    @apply text-2xl;
  }

  hr {
    @apply mb-4 mt-1 w-full border-light-4 dark:border-dark-1;
  }

  section {
    @apply mb-16;
  }
  .content {
    @apply
    flex
    w-full
    flex-col
    justify-start
    items-start
    px-10
    py-5;
  }
</style>