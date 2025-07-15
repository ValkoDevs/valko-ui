<script setup lang="ts">
import type { RatingProps, TableItem } from '#valkoui'

const form = ref<RatingProps>({
  color: 'primary',
  size: 'md',
  name: 'star',
  max: 5,
  modelValue: 0,
  readonly: false,
  allowHalf: false
})

const ratingProps: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Rating.',
    values: 'primary, secondary, negative, warning, accent, positive, surface',
    default: 'primary'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Rating.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    key: 'nameProp',
    prop: 'name',
    required: false,
    description: 'The icon of the Rating.',
    values: 'string',
    default: 'loader-2'
  },
  {
    key: 'maxProp',
    prop: 'max',
    required: false,
    description: 'The max value of the Rating.',
    values: 'number',
    default: '5'
  },
  {
    key: 'modelValueProp',
    prop: 'modelValue',
    required: false,
    description: 'The v-model for the Rating.',
    values: 'number',
    default: '0'
  },
  {
    key: 'readonlyProp',
    prop: 'readonly',
    required: false,
    description: 'Whether the Rating is readonly or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'allowHalfProp',
    prop: 'allowHalf',
    required: false,
    description: 'Wheter the Rating allows to enter half of a rating.',
    values: 'true, false',
    default: 'false'
  }
]

const generateSnippet = snippetGeneratorFactory('vk-rating')
</script>

<template>
  <doc-section
    title="Rating"
    description="The Rating component lets users provide feedback or scores by selecting icons (such as stars). It supports full and half ratings, customizable icons, colors, sizes, and can be set to readonly for display purposes."
  >
    <template #playground-view>
      <vk-rating
        v-model="form.modelValue"
        :color="form.color"
        :size="form.size"
        :name="form.name"
        :max="form.max"
        :allow-half="form.allowHalf"
        :readonly="form.readonly"
      />
      <span>{{ form.modelValue }}</span>
    </template>

    <template #playground-options>
      <vk-input
        v-model="form.name"
        label="Name"
        size="sm"
      />
      <vk-select
        v-model="form.color"
        label="Color"
        size="sm"
        :options="colorOptions.general"
      />
      <vk-select
        v-model="form.size"
        label="Size"
        size="sm"
        :options="sizeOptions.general"
      />
      <vk-input
        v-model="form.max"
        label="Max"
        size="sm"
        type="number"
      />
      <vk-checkbox
        v-model="form.allowHalf"
        label="Allow Half"
        size="sm"
      />
      <vk-checkbox
        v-model="form.readonly"
        label="Readonly"
        size="sm"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        classes="grid-cols-2 md:grid-cols-3 lg:grid-cols-7"
      >
        <div
          v-for="color in colorOptions.general"
          :key="color.value"
          class="flex flex-col gap-2 items-center justify-center md:items-start md:justify-start"
        >
          <span>{{ color.label }}</span>
          <vk-rating
            :color="color.value"
          />
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('color', {values: colorOptions.general.map(o => o.value)})" />
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
          <vk-rating
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
        :data="ratingProps"
      />
    </template>
  </doc-section>
</template>
