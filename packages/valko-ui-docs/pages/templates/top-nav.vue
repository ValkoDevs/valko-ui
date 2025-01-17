<script setup lang="ts">
const templateSnippet = `<template>
  <div class="m-4 bg-light-3 dark:bg-dark-3">
    <vk-navbar class="flex justify-between">
      Brand-Name

      <vk-icon
        name="brand-medium"
        class="text-xl"
      />
    </vk-navbar>

    <main class="w-full max-w-screen-xl mx-auto grow h-[70vh]">
      <h3 class="text-xl my-5">
        Here goes your content!
      </h3>
    </main>
  </div>
</template>
`
</script>

<template>
  <page-template>
    <template #example>
      <div class="m-4 bg-light-3 dark:bg-dark-3">
        <vk-navbar class="flex justify-between">
          Brand-Name

          <vk-icon
            name="brand-medium"
            class="text-xl"
          />
        </vk-navbar>

        <main class="w-full max-w-screen-xl mx-auto grow h-[70vh]">
          <h3 class="text-xl my-5">
            Here goes your content!
          </h3>
        </main>
      </div>
    </template>

    <template #code>
      <code-block :code="templateSnippet" />
    </template>
  </page-template>
</template>
