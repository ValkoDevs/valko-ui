<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import sizeOptions from '@/data/sizeOptions'
import colorOptions from '@/data/colorOptions'
import propHeaders from '@/data/propHeaders'
import shapeOptions from '@/data/shapeOptions'
import variantOptions from '@/data/variantOptions'
import emitHeaders from '@/data/emitHeaders'

const form = ref({
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  currentPage: 1,
  totalPages: 20,
  flat: false,
  disabled: false
})

const apiData = [
  {
    prop: 'color',
    required: false,
    description: 'The Pagination color theme.',
    values: 'primary, secondary, error, warning, info, success, light, dark',
    default: 'primary'
  },
  {
    prop: 'size',
    required: false,
    description: 'The Pagination size.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'pages',
    required: false,
    description: 'The total number of pages.',
    values: 'number',
    default: '1'
  },
  {
    prop: 'modelValue',
    required: false,
    description: 'The current page.',
    values: 'number',
    default: '1'
  }
]

const emitData = [
  {
    event: 'update:modelValue',
    description: 'Emitted when the current page is changed.',
    values: 'number | string',
    type: '(page: number | string) => void'
  }
]
</script>

<template>
  <doc-section
    title="Pagination"
    description="Navigation that divides content into pages for easier viewing. Pagination is used to break up large amounts of content into manageable sections and provides users with controls to navigate between pages."
  >
    <template #playground-view>
      <div class="w-full flex px-2 justify-center">
        <vk-pagination
          :color="form.color"
          :size="form.size"
          :current-page="form.currentPage"
          :variant="form.variant"
          :pages="form.totalPages"
          :flat="form.flat"
          :shape="form.shape"
          :disabled="form.disabled"
          v-model="form.currentPage"
        />
      </div>
    </template>

    <template #playground-options>
      <vk-input
        type="number"
        label="Total Pages"
        size="sm"
        v-model="form.totalPages"
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
        :options="shapeOptions"
        v-model="form.shape"
      />
      <vk-select
        placeholder="Size"
        size="sm"
        :options="sizeOptions"
        v-model="form.size"
      />
      <vk-checkbox
        v-model="form.flat"
        label="Flat"
      />
      <vk-checkbox
        v-model="form.disabled"
        label="Disabled"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        gap
      >
        <div class="gap-4 grid grid-cols-3">
          <div
            v-for="color in colorOptions"
            :key="color.value"
            class="flex flex-col items-start"
          >
            <span class="mb-3"> {{ color.label }}</span>
            <vk-pagination
              :color="color.value"
              :pages="form.totalPages"
              v-model="form.currentPage"
            />
          </div>
        </div>
      </example-section>

      <example-section
        title="Variants"
        gap
      >
        <div class="gap-4 grid grid-cols-3">
          <div
            v-for="variant in variantOptions"
            :key="variant.value"
            class="flex flex-col items-start"
          >
            <span class="mb-3"> {{ variant.label }}</span>
            <vk-pagination
              :variant="variant.value"
              :pages="form.totalPages"
              v-model="form.currentPage"
            />
          </div>
        </div>
      </example-section>

      <example-section
        title="Shapes"
        gap
      >
        <div class="gap-4 grid grid-cols-3">
          <div
            v-for="shape in shapeOptions"
            :key="shape.value"
            class="flex flex-col items-start"
          >
            <span class="mb-3"> {{ shape.label }}</span>
            <vk-pagination
              :shape="shape.value"
              :pages="form.totalPages"
              v-model="form.currentPage"
            />
          </div>
        </div>
      </example-section>

      <example-section
        title="Sizes"
        gap
      >
        <div class="gap-4 grid grid-cols-2">
          <div
            v-for="size in sizeOptions"
            :key="size.value"
          >
            <span class="mb-3"> {{ size.label }}</span>
            <vk-pagination
              :size="size.value"
              :pages="form.totalPages"
              v-model="form.currentPage"
            />
          </div>
        </div>
      </example-section>

      <example-section
        title="Flat"
      >
        <vk-pagination
          flat
          :pages="form.totalPages"
          v-model="form.currentPage"
        />
      </example-section>

      <example-section
        title="Disabled"
      >
        <vk-pagination
          disabled
          :pages="form.totalPages"
          v-model="form.currentPage"
        />
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Pagination Props"
          gap
        >
          <vk-data-table
            :headers="propHeaders"
            :data="apiData"
          />
        </example-section>

        <example-section
          title="Pagination Emits"
          gap
        >
          <vk-data-table
            :headers="emitHeaders"
            :data="emitData"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
