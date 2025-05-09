<script setup lang="ts">
import type { DividerProps, SelectOption, TableItem } from '#valkoui'

const form = ref<DividerProps>({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  direction: 'horizontal'
})

const directionOptions: SelectOption[] = [
  { value: 'vertical', label: 'Vertical' },
  { value: 'horizontal', label: 'Horizontal' }
]

const dividerProps: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Divider.',
    values: 'primary, secondary, negative, warning, accent, positive',
    default: 'primary'
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The variant of the Divider.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Divider.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Divider.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    key: 'directionProp',
    prop: 'direction',
    required: false,
    description: 'The direction of the Divider.',
    values: 'vertical, horizontal',
    default: 'horizontal'
  }
]

const generateSnippet = snippetGeneratorFactory('vk-divider')
</script>

<template>
  <doc-section
    title="Divider"
    description="Visual element used to separate or divide content within a user interface. Its primary purpose is to provide a clear and organized visual structure to the content, facilitating readability and comprehension. Dividers are especially useful in designs that contain distinct sections or blocks of information, helping to delineate them clearly and concisely."
  >
    <template #playground-view>
      <div :class="`w-full h-full flex ${form.direction === 'vertical' ? 'flex-row' : 'flex-col'} justify-center items-center p-4`">
        Artist
        <vk-divider
          :color="form.color"
          :variant="form.variant"
          :shape="form.shape"
          :size="form.size"
          :direction="form.direction"
        />
        Album
        <vk-divider
          :color="form.color"
          :variant="form.variant"
          :shape="form.shape"
          :size="form.size"
          :direction="form.direction"
        />
        Song
      </div>
    </template>
    <template #playground-options>
      <vk-select
        v-model="form.color"
        label="Color"
        size="sm"
        :options="colorOptions.general"
      />
      <vk-select
        v-model="form.variant"
        label="Variant"
        size="sm"
        :options="variantOptions.general"
      />
      <vk-select
        v-model="form.shape"
        label="Shape"
        size="sm"
        :options="shapeOptions.general"
      />
      <vk-select
        v-model="form.size"
        label="Size"
        size="sm"
        :options="sizeOptions.general"
      />
      <vk-select
        v-model="form.direction"
        label="Direction"
        size="sm"
        :options="directionOptions"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        classes="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
      >
        <div
          v-for="color in colorOptions.general"
          :key="color.value"
        >
          <span class="font-semibold">{{ color.label }}</span>
          <div class="mt-4 flex flex-col items-center">
            Artist
            <vk-divider :color="color.value" />
            Album
            <vk-divider :color="color.value" />
            Song
          </div>
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('color', { values: colorOptions.general.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section
        title="Variants"
        classes="sm:grid-cols-2 md:grid-cols-3"
      >
        <div
          v-for="variant in variantOptions.general"
          :key="variant.value"
        >
          <span class="font-semibold">{{ variant.label }}</span>
          <div class="mt-4 flex flex-col items-center">
            Artist
            <vk-divider :variant="variant.value" />
            Album
            <vk-divider :variant="variant.value" />
            Song
          </div>
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('variant', { values: variantOptions.general.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section
        title="Shapes"
        classes="sm:grid-cols-2 md:grid-cols-3"
      >
        <div
          v-for="shape in shapeOptions.general"
          :key="shape.value"
        >
          <span class="font-semibold">{{ shape.label }}</span>
          <div class="mt-4 flex flex-col items-center">
            Artist
            <vk-divider :shape="shape.value" />
            Album
            <vk-divider :shape="shape.value" />
            Song
          </div>
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('shape', { values: shapeOptions.general.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section
        title="Sizes"
        classes="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <div
          v-for="size in sizeOptions.general"
          :key="size.value"
        >
          <span class="font-semibold">{{ size.label }}</span>
          <div class="mt-4 flex flex-col items-center">
            Artist
            <vk-divider :size="size.value" />
            Album
            <vk-divider :size="size.value" />
            Song
          </div>
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('size', { values: sizeOptions.general.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section
        title="Direction"
        classes="sm:grid-cols-2"
      >
        <div>
          <span class="font-semibold">Horizontal</span>
          <div class="mt-4">
            Artist
            <vk-divider />
            Album
            <vk-divider />
            Song
          </div>
        </div>

        <div>
          <span class="font-semibold">Vertical</span>
          <div class="mt-4 flex flex-row h-20 items-center">
            Artist
            <vk-divider direction="vertical" />
            Album
            <vk-divider direction="vertical" />
            Song
          </div>
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('direction', { values: directionOptions.map(o => o.value as string) })" />
        </template>
      </example-section>
    </template>

    <template #api>
      <h3>Divider</h3>
      <vk-table
        :headers="propHeaders"
        :data="dividerProps"
      />
    </template>
  </doc-section>
</template>
