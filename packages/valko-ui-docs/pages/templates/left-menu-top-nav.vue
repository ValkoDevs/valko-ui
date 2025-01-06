<!-- eslint-disable no-useless-escape -->
<script setup lang="ts">
import type { MenuItem } from '@valko-ui/components'

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
  <div class="m-4 flex flex-col">
    <vk-navbar
      shape="square"
      flat
      class="flex justify-between"
    >
      Brand Name

      <vk-icon
        name="brand-medium"
        class="text-xl"
      />
    </vk-navbar>

    <div class="flex">
      <aside class="bg-light-2 dark:bg-dark-3 border-r border-light-4 dark:border-dark-2 max-h-[70vh] h-screen w-52">
        <vk-menu
          :items="menuItems"
          :active="activeItem"
          size="md"
          shape="soft"
          floating
          @item-click="onItemClick"
        />
      </aside>

      <div class="flex flex-col grow justify-between items-center max-w-screen-xl w-full px-4 mx-auto">
        <main class="w-full grow">
          <h3>Your content goes here!!</h3>
        </main>
      </div>
    </div>
  </div>
</template>
`

const scriptCode = `
<script setup lang="ts">
import type { MenuItem } from '@valko-ui/components'

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
      <div class="m-4 flex flex-col">
        <vk-navbar
          shape="square"
          flat
          class="flex justify-between"
        >
          Brand Name

          <vk-icon
            name="brand-medium"
            class="text-xl"
          />
        </vk-navbar>

        <div class="flex">
          <aside class="bg-light-2 dark:bg-dark-3 border-r border-light-4 dark:border-dark-2 max-h-[70vh] h-screen w-52">
            <vk-menu
              :items="menuItems"
              :active="activeItem"
              size="md"
              shape="soft"
              floating
              @item-click="onItemClick"
            />
          </aside>

          <div class="flex flex-col grow justify-between items-center max-w-screen-xl w-full px-4 mx-auto">
            <main class="w-full grow">
              <h3>Your content goes here!!</h3>
            </main>
          </div>
        </div>
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
