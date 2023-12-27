<script lang="ts" setup>
interface ExampleSectionProps {
  title: string
}

defineProps<ExampleSectionProps>()
</script>

<template>
  <section class="w-full mt-10">
    <h3 class="text-xl mb-4">
      {{ title }}
    </h3>
    <div class="w-full flex justify-start gap-4 items-center flex-wrap">
      <slot />
    </div>
  </section>
</template>
