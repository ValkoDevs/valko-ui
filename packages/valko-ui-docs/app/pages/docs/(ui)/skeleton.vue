<script setup lang="ts">
import type { TableItem, SkeletonProps } from '#valkoui'

const form = ref<SkeletonProps>({
  width: 200,
  height: 200,
  shape: 'soft'
})

const skeletonProps: TableItem[] = [
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Skeleton.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    key: 'widthProp',
    prop: 'width',
    required: false,
    description: 'The width of the Skeleton.',
    values: 'number',
    default: '200'
  },
  {
    key: 'heightProp',
    prop: 'height',
    required: false,
    description: 'The height of the Skeleton.',
    values: 'number',
    default: '200'
  }
]

const styleSlotsInterface: TableItem[] = [
  {
    key: 'container',
    prop: 'container',
    required: false,
    description: 'Root container for the Skeleton. Controls the overall layout and background.',
    values: 'string[]'
  }
]

const generateSnippet = snippetGeneratorFactory('vk-skeleton')
</script>

<template>
  <doc-section
    title="Skeleton"
    description="Placeholder content that is displayed while the actual content is loading, use multiple skeletons for better effect."
  >
    <template #playground-view>
      <vk-skeleton
        :width="form.width"
        :height="form.height"
        :shape="form.shape"
      />
    </template>

    <template #playground-options>
      <vk-select
        v-model="form.shape"
        label="Shape"
        size="sm"
        :options="shapeOptions.general"
      />
      <vk-input
        v-model="form.width"
        label="Width"
        type="number"
        size="sm"
      />
      <vk-input
        v-model="form.height"
        label="Height"
        type="number"
        size="sm"
      />
    </template>

    <template #examples>
      <example-section
        title="Shapes"
        :style-slots="{ slotContainer: ['md:grid-cols-3', 'sm:grid-cols-2'] }"
      >
        <vk-skeleton
          v-for="shape in shapeOptions.general"
          :key="shape.value"
          :shape="shape.value"
        />

        <template #code>
          <code-block :code="generateSnippet<string>('shape', { values: shapeOptions.general.map(o => o.value) })" />
        </template>
      </example-section>
    </template>

    <template #api>
      <h3>Skeleton Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="skeletonProps"
      />

      <h3>Style Slots Interface</h3>
      <vk-table
        :headers="propHeaders"
        :data="styleSlotsInterface"
      />
    </template>
  </doc-section>
</template>
