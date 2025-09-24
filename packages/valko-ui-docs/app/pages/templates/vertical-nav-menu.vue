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
  <div class="m-4 bg-surface-container h-[70vh] flex">
    <vk-navbar
      vertical
      shape="square"
      class="justify-between"
    >
      Brand-Name

      <vk-icon
        name="brand-medium"
        class="text-xl"
      />
    </vk-navbar>

    <aside class="bg-surface-container border-r border-outlined max-h-[70vh] h-screen w-56">
      <vk-menu
        :items="menuItems"
        :active="activeItem"
        shape="square"
        floating
        @item-click="onItemClick"
      />
    </aside>

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
      <div class="m-4 bg-surface-container h-[70vh] flex">
        <vk-navbar
          vertical
          shape="square"
          class="justify-between"
        >
          Brand-Name

          <vk-icon
            name="brand-medium"
            class="text-xl"
          />
        </vk-navbar>

        <aside class="bg-surface-container border-r border-outlined max-h-[70vh] h-screen w-56">
          <vk-menu
            :items="menuItems"
            :active="activeItem"
            shape="square"
            floating
            @item-click="onItemClick"
          />
        </aside>

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
