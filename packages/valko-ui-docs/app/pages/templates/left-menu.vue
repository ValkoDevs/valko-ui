<script setup lang="ts">
import type { MenuItem } from '#valkoui'

const menuItems: MenuItem[] = [
  { key: 'example-1', group: 'General', text: 'Example Item 1' },
  { key: 'example-2', group: 'General', text: 'Example Item 2' },
  { key: 'example-3', group: 'General', text: 'Example Item 3' },
  { key: 'example-4', group: 'General', text: 'Example Item 4' }
]

const activeItem = ref('example-1')

const onItemClick = (item: MenuItem) => activeItem.value = `${item.key}`

const templateSnippet = `<script setup lang="ts">
import type { MenuItem } from '#valkoui'

const menuItems: MenuItem[] = [
  { key: 'example-1', group: 'General', text: 'Example Item 1' },
  { key: 'example-2', group: 'General', text: 'Example Item 2' },
  { key: 'example-3', group: 'General', text: 'Example Item 3' },
  { key: 'example-4', group: 'General', text: 'Example Item 4' }
]

const activeItem = ref('example-1')

const onItemClick = (item: MenuItem) => activeItem.value = \`\${item.key}\`
<\u002Fscript>

<template>
  <div class="m-4 bg-surface-container flex">
    <aside class="bg-surface-container-high border-r border-outlined max-h-[70vh] h-screen w-56">
      <vk-menu
        :items="menuItems"
        :active="activeItem"
        color="primary"
        size="md"
        variant="ghost"
        shape="soft"
        floating
        @item-click="onItemClick"
      />
    </aside>

    <main class="mx-auto">
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
      <div class="bg-surface-container flex">
        <aside class="bg-surface-container-high border-r border-outlined max-h-[70vh] h-screen w-56">
          <vk-menu
            :items="menuItems"
            :active="activeItem"
            color="primary"
            size="md"
            variant="ghost"
            shape="soft"
            floating
            @item-click="onItemClick"
          />
        </aside>

        <main class="mx-auto">
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
