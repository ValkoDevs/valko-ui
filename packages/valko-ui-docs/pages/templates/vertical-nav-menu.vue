<!-- eslint-disable no-useless-escape -->
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

const templateCode = `
<template>
  <div class="m-4 bg-light-3 dark:bg-dark-3 h-[70vh] flex">
    <vk-navbar
      vertical
      flat
      shape="square"
      class="justify-between"
    >
      Brand-Name

      <vk-icon
        name="brand-medium"
        class="text-xl"
      />
    </vk-navbar>

    <aside class="bg-light-2 dark:bg-dark-3 border-r border-light-4 dark:border-dark-2 max-h-[70vh] h-screen w-56">
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

const scriptCode = `
<script setup lang="ts">
import type { MenuItem } from '#valkoui'

const menuItems: MenuItem[] = [
  { key: 'example-1', group: 'General', text: 'Example Item 1' },
  { key: 'example-2', group: 'General', text: 'Example Item 2' },
  { key: 'example-3', group: 'General', text: 'Example Item 3' },
  { key: 'example-4', group: 'General', text: 'Example Item 4' }
]

const activeItem = ref('example-1')

const onItemClick = (item: MenuItem) => activeItem.value = \`\${item.key}\`
<\/script>
`
</script>

<template>
  <page-template>
    <template #example>
      <div class="m-4 bg-light-3 dark:bg-dark-3 h-[70vh] flex">
        <vk-navbar
          vertical
          flat
          shape="square"
          class="justify-between"
        >
          Brand-Name

          <vk-icon
            name="brand-medium"
            class="text-xl"
          />
        </vk-navbar>

        <aside class="bg-light-2 dark:bg-dark-3 border-r border-light-4 dark:border-dark-2 max-h-[70vh] h-screen w-56">
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
      <div class="px-4">
        <code-block
          :code="scriptCode"
          :copy="`${scriptCode}${templateCode}`"
          language="js"
        />

        <code-block :code="templateCode" />
      </div>
    </template>
  </page-template>
</template>
