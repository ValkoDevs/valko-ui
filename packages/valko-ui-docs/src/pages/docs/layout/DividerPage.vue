<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import colorOptions from '@/data/colorOptions'
import variantOptions from '@/data/variantOptions'
import shapeOptions from '@/data/shapeOptions'
import sizeOptions from '@/data/sizeOptions'
import propHeaders from '@/data/propHeaders'

const form = ref({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  direction: 'horizontal'
})

const directionOptions = [
  { value: 'vertical', label: 'Vertical' },
  { value: 'horizontal', label: 'Horizontal' }
]

const dividerProps = [
  {
    prop: 'color',
    required: false,
    description: 'The color theme of the Divider.',
    values: 'primary, neutral, error, warning, info, success',
    default: 'primary'
  },
  {
    prop: 'variant',
    required: false,
    description: 'The variant of the Divider.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    prop: 'shape',
    required: false,
    description: 'The shape of the Divider.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the Divider.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'direction',
    required: false,
    description: 'The direction of the Divider.',
    values: 'vertical, horizontal',
    default: 'horizontal'
  }
]
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
        placeholder="Color"
        size="sm"
        :options="colorOptions"
        v-model="form.color"
      />
      <vk-select
        placeholder="Variant"
        size="sm"
        :options="variantOptions"
        v-model="form.variant"
      />
      <vk-select
        placeholder="Shape"
        size="sm"
        :options="shapeOptions"
        v-model="form.shape"
      />
      <vk-select
        placeholder="Size"
        size="sm"
        :options="sizeOptions"
        v-model="form.size"
      />
      <vk-select
        placeholder="Direction"
        size="sm"
        :options="directionOptions"
        v-model="form.direction"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        justify="start"
        gap
      >
        <div class="w-full grid grid-cols-3 gap-4">
          <div
            v-for="color in colorOptions"
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
        </div>
      </example-section>

      <example-section
        title="Variants"
        justify="start"
        gap
      >
        <div class="w-full grid grid-cols-3 gap-4">
          <div
            v-for="variant in variantOptions"
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
        </div>
      </example-section>

      <example-section
        title="Shapes"
        justify="start"
        gap
      >
        <div class="w-full grid grid-cols-3 gap-4">
          <div
            v-for="shape in shapeOptions"
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
        </div>
      </example-section>

      <example-section
        title="Sizes"
        justify="start"
        gap
      >
        <div class="w-full grid grid-cols-2 gap-4">
          <div
            v-for="size in sizeOptions"
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
        </div>
      </example-section>

      <example-section
        title="Direction"
        justify="start"
        gap
      >
        <div class="w-full">
          <span class="font-semibold">Horizontal</span>
          <div class="mt-4">
            Artist
            <vk-divider />
            Album
            <vk-divider />
            Song
          </div>
        </div>
        <div class="w-full">
          <span class="font-semibold">Vertical</span>
          <div class="mt-4 flex flex-row h-20 items-center">
            Artist
            <vk-divider direction="vertical" />
            Album
            <vk-divider direction="vertical" />
            Song
          </div>
        </div>
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Divider Props"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="dividerProps"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
