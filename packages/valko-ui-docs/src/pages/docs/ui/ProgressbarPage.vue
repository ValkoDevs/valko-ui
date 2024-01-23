<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import colorOptions from '@/data/colorOptions'
import sizeOptions from '@/data/sizeOptions'
import variantOptions from '@/data/variantOptions'
import propHeaders from '@/data/propHeaders'
import shapeOptions from '@/data/shapeOptions'

const shapes = [
  ...shapeOptions,
  { value: 'line', label: 'Line' }
]

const form = ref({
  variant: 'filled',
  size: 'md',
  color: 'primary',
  progress: 50,
  slot: 'Progress',
  shape: 'soft',
  buffer: 70,
  incrementProgress: 4.5,
  incrementBuffer: 5,
  indeterminate: false,
  striped: false,
  showBuffer: false
})


const apiData = [
  {
    prop: 'variant',
    required: false,
    description: 'The variant of the Progressbar.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the Progressbar.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'shape',
    required: false,
    description: 'The shape of the Progressbar.',
    values: 'line, rounded, square, soft',
    default: 'soft'
  },
  {
    prop: 'color',
    required: false,
    description: 'The color theme of the Progressbar.',
    values: 'primary, secondary, success, info, warning, error, light, dark',
    default: 'primary'
  },
  {
    prop: 'progress',
    required: false,
    description: 'The value of the Progressbar.',
    values: 'number',
    default: '0'
  },
  {
    prop: 'buffer',
    required: false,
    description: 'The buffer value of the Progressbar.',
    values: 'number',
    default: '0'
  },
  {
    prop: 'indeterminate',
    required: false,
    description: 'Wheter the Progressbar is indeterminate or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'striped',
    required: false,
    description: 'Wheter the Progressbar is striped or not.',
    values: 'true, false',
    default: 'false'
  }
]
</script>

<template>
  <doc-section
    title="Progressbar"
    description="The Progressbar component is used to convey data visually to users. It supports both indeterminate amounts, such as loading or processing, and finite amounts of progress (including separate buffer values)."
  >
    <template #playground-view>
      <div class="w-full flex justify-center p-4">
        <vk-progressbar
          :shape="form.shape"
          :variant="form.variant"
          :progress="form.progress"
          :color="form.color"
          :size="form.size"
          :striped="form.striped"
          :indeterminate="form.indeterminate"
          :buffer="`${form.showBuffer ? form.buffer : 0}`"
        >
          {{ form.slot }}
        </vk-progressbar>
      </div>
    </template>
    <template #playground-options>
      <div class="flex flex-col mb-1">
        <label for="rg-progress">Progress</label>
        <input
          name="rg-progress"
          type="range"
          min="0"
          max="100"
          step="1"
          v-model="form.progress"
        >
      </div>
      <div class="flex flex-col mb-1">
        <label for="rg-buffer">Buffer</label>
        <input
          name="rg-buffer"
          type="range"
          min="0"
          max="100"
          step="1"
          v-model="form.buffer"
        >
      </div>
      <vk-input
        label="Slot Text"
        size="sm"
        v-model="form.slot"
      />
      <vk-select
        placeholder="Variant"
        size="sm"
        :options="variantOptions"
        v-model="form.variant"
      />
      <vk-select
        placeholder="Color"
        size="sm"
        :options="colorOptions"
        v-model="form.color"
      />
      <vk-select
        placeholder="Shape"
        size="sm"
        :options="shapes"
        v-model="form.shape"
      />
      <vk-select
        size="sm"
        placeholder="Size"
        :options="sizeOptions"
        v-model="form.size"
      />
      <vk-checkbox
        label="Indeterminate"
        v-model="form.indeterminate"
      />
      <vk-checkbox
        label="Striped"
        v-model="form.striped"
      />
      <vk-checkbox
        label="Display Buffer"
        v-model="form.showBuffer"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        justify="evenly"
        gap
      >
        <div class="grow gap-4 grid grid-cols-3">
          <vk-progressbar
            v-for="color in colorOptions"
            :key="color.value"
            :color="color.value"
            progress="25"
          >
            {{ color.label }}
          </vk-progressbar>
        </div>
      </example-section>

      <example-section
        title="Variants"
        justify="evenly"
        gap
      >
        <div class="grow gap-4 grid grid-cols-3">
          <vk-progressbar
            v-for="variant in variantOptions"
            :key="variant.value"
            :variant="variant.value"
            progress="25"
          >
            {{ variant.label }}
          </vk-progressbar>
        </div>
      </example-section>

      <example-section
        title="Shapes"
        justify="evenly"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2">
          <vk-progressbar
            v-for="shape in shapes"
            :key="shape.value"
            :shape="shape.value"
            progress="25"
          >
            {{ shape.label }}
          </vk-progressbar>
        </div>
      </example-section>

      <example-section
        title="Sizes"
        justify="evenly"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2">
          <vk-progressbar
            v-for="size in sizeOptions"
            :key="size.value"
            :size="size.value"
            progress="25"
          >
            {{ size.label }}
          </vk-progressbar>
        </div>
      </example-section>

      <example-section
        title="Misc"
        justify="evenly"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2">
          <vk-progressbar indeterminate>
            Indeterminate
          </vk-progressbar>
          <vk-progressbar
            striped
            progress="25"
          >
            Striped
          </vk-progressbar>
          <vk-progressbar
            indeterminate
            striped
          >
            {{ `Indeterminate & Striped` }}
          </vk-progressbar>
          <vk-progressbar
            buffer="50"
            progress="25"
          >
            Buffer
          </vk-progressbar>
        </div>
      </example-section>
    </template>

    <template #api>
      <vk-data-table
        :headers="propHeaders"
        :data="apiData"
      />
    </template>
  </doc-section>
</template>
