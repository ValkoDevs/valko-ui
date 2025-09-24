<script setup lang="ts">
import type { SpinnerProps, TableItem } from '#valkoui'

const names = [
  { value: 'loader', label: 'Loader' },
  { value: 'loader-2', label: 'Loader-2' }
]

const form = ref<SpinnerProps>({
  color: 'primary',
  size: 'md',
  name: 'loader-2',
  condensed: false
})

const spinnerProps: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Spinner.',
    values: 'primary, secondary, negative, warning, accent, positive, surface',
    default: 'primary'
  },
  {
    key: 'nameProp',
    prop: 'name',
    required: false,
    description: 'The icon of the Spinner.',
    values: 'string',
    default: 'loader-2'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Spinner.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    key: 'condensedProp',
    prop: 'condensed',
    required: false,
    description: 'Reduces the Spinner\'s size.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'classesProp',
    prop: 'classes',
    required: false,
    description: 'Overrides the spinner\'s default colors, allowing you to fully customize its appearance.',
    values: 'string',
    default: ''
  }
]

const generateSnippet = snippetGeneratorFactory('vk-spinner')
</script>

<template>
  <doc-section
    title="Spinner"
    description="Visual animation that indicates a task is being processed. Spinners are used to provide feedback to users while they wait for an operation to complete, such as loading content or submitting a request."
  >
    <template #playground-view>
      <vk-spinner
        :color="form.color"
        :size="form.size"
        :name="form.name"
        :condensed="form.condensed"
      />
    </template>

    <template #playground-options>
      <vk-select
        v-model="form.color"
        label="Color"
        size="sm"
        :options="colorOptions.withSurface"
      />
      <vk-select
        v-model="form.name"
        label="Name"
        size="sm"
        :options="names"
      />
      <vk-select
        v-model="form.size"
        label="Size"
        size="sm"
        :options="sizeOptions.general"
      />
      <vk-checkbox
        v-model="form.condensed"
        label="Condensed"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        classes="grid-cols-2 md:grid-cols-3 lg:grid-cols-7"
      >
        <div
          v-for="color in colorOptions.withSurface"
          :key="color.value"
          class="flex flex-col gap-2 items-center justify-center md:items-start md:justify-start"
        >
          <span>{{ color.label }}</span>
          <vk-spinner
            :color="color.value"
          />
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('color', {values: colorOptions.withSurface.map(o => o.value)})" />
        </template>
      </example-section>

      <example-section
        title="Names"
        classes="grid-cols-2"
      >
        <div
          v-for="name in names"
          :key="name.value"
          class="flex flex-col gap-2 items-center justify-center md:items-start md:justify-start"
        >
          <span>{{ name.label }}</span>
          <vk-spinner
            :name="name.value"
          />
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('name', {values: names.map(o => o.value)})" />
        </template>
      </example-section>

      <example-section
        title="Sizes"
        classes="grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div
          v-for="size in sizeOptions.general"
          :key="size.value"
          class="flex flex-col gap-2 items-center justify-center md:items-start md:justify-start"
        >
          <span>{{ size.label }}</span>
          <vk-spinner
            :size="size.value"
          />
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('size', {values: sizeOptions.general.map(o => o.value)})" />
        </template>
      </example-section>
    </template>

    <template #api>
      <h3>Spinner Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="spinnerProps"
      />
    </template>
  </doc-section>
</template>
