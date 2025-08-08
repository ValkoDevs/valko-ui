<script setup lang="ts">
import type { TableItem, IconProps } from '#valkoui'

const form = ref<IconProps>({
  name: 'home'
})

const iconProps: TableItem[] = [
  {
    key: 'nameProp',
    prop: 'name',
    required: true,
    description: 'The name of the icon to display. It must match a valid Tabler Icons name.',
    values: 'string',
    default: ''
  }
]

const names = ['home', 'search', 'settings', 'check', 'x', 'user', 'bell', 'star']

const generateSnippet = snippetGeneratorFactory('vk-icon')
</script>

<template>
  <doc-section title="Icon">
    <template #description>
      <div class="flex flex-col gap-2">
        <span>Icon component that renders any Tabler Icon by specifying its name. Useful for visually enhancing UI elements such as buttons, links, alerts, and more.</span>
        <span>
          See the
          <a
            href="https://tabler.io/icons"
            class="text-primary underline"
            target="_blank"
          >
            Tabler Icons
          </a>
          catalog for available icon names.
        </span>
      </div>
    </template>
    <template #playground-view>
      <vk-icon :name="form.name" />
    </template>

    <template #playground-options>
      <vk-input
        v-model="form.name"
        label="Name"
        size="sm"
      />
    </template>

    <template #examples>
      <example-section
        title="Names"
        classes="grid-cols-2 md:grid-cols-4"
      >
        <vk-icon
          v-for="name in names"
          :key="name"
          :name="name"
        />

        <template #code>
          <code-block :code="generateSnippet<string>('name', { values: names.map(o => o) })" />
        </template>
      </example-section>
    </template>

    <template #api>
      <h3>Icons Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="iconProps"
      />
    </template>
  </doc-section>
</template>
