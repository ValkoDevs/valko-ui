<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import colorOptions from '@/data/colorOptions'
import sizeOptions from '@/data/sizeOptions'
import propHeaders from '@/data/propHeaders'

const variants = [
  { value: 'loader', label: 'Flower' },
  { value: 'loader-2', label: 'Circle' }
]

const form = ref({
  color: 'primary',
  size: 'md',
  variant: 'loader-2'
})


const apiData = [
  {
    prop: 'color',
    required: false,
    description: 'The color theme of the Spinner.',
    values: 'primary, secondary, error, warning, info, success, light, dark',
    default: 'primary'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the Spinner.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'variant',
    required: false,
    description: 'The variant of Spinner.',
    values: 'loader, loader-2',
    default: 'loader-2'
  }
]
</script>

<template>
  <doc-section
    title="Spinner"
    description="Spinner desc"
  >
    <template #playground-view>
      <div class="w-full flex justify-center items-center">
        <vk-spinner
          :color="form.color"
          :size="form.size"
          :name="form.variant"
        />
      </div>
    </template>

    <template #playground-options>
      <vk-select
        placeholder="Variant"
        size="sm"
        :options="variants"
        v-model="form.variant"
      />
      <vk-select
        placeholder="Color"
        size="sm"
        :options="colorOptions"
        v-model="form.color"
      />
      <vk-select
        placeholder="Size"
        size="sm"
        :options="sizeOptions"
        v-model="form.size"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        justify="start"
        gap
      >
        <div class="gap-x-12 gap-y-4 grid grid-cols-3">
          <div
            v-for="color in colorOptions"
            :key="color.value"
            class="flex gap-2 items-center"
          >
            <vk-spinner
              :color="color.value"
            /> {{ color.label }}
          </div>
        </div>
      </example-section>

      <example-section
        title="Variants"
        justify="start"
        gap
      >
        <div class="gap-x-12 gap-y-4 grid grid-cols-3">
          <div
            v-for="variant in variants"
            :key="variant.value"
            class="flex gap-2 items-center"
          >
            <vk-spinner
              :variant="variant.value"
            /> {{ variant.label }}
          </div>
        </div>
      </example-section>

      <example-section
        title="Sizes"
        justify="start"
        align="start"
        gap
      >
        <div class="gap-x-12 gap-y-4 grid grid-cols-2">
          <div
            v-for="size in sizeOptions"
            :key="size.value"
            class="flex gap-2 items-center"
          >
            <vk-spinner
              :size="size.value"
            /> {{ size.label }}
          </div>
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
