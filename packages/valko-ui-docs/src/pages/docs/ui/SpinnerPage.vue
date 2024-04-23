<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import colorOptions from '@/data/colorOptions'
import sizeOptions from '@/data/sizeOptions'
import propHeaders from '@/data/propHeaders'

const names = [
  { value: 'loader', label: 'Loader' },
  { value: 'loader-2', label: 'Loader-2' }
]

const form = ref({
  color: 'primary',
  size: 'md',
  name: 'loader-2',
  condensed: false
})


const spinnerProps = [
  {
    prop: 'color',
    required: false,
    description: 'The color theme of the Spinner.',
    values: 'primary, secondary, error, warning, info, success, light, dark',
    default: 'primary'
  },
  {
    prop: 'name',
    required: false,
    description: 'The icon of the Spinner.',
    values: 'string',
    default: 'loader-2'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the Spinner.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'condensed',
    required: false,
    description: 'Reduces the Spinner\'s size.',
    values: 'true, false',
    default: 'false'
  }
]
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
        placeholder="Color"
        size="sm"
        :options="colorOptions"
        v-model="form.color"
      />
      <vk-select
        placeholder="Variant"
        size="sm"
        :options="variants"
        v-model="form.variant"
      />
      <vk-select
        placeholder="Size"
        size="sm"
        :options="sizeOptions"
        v-model="form.size"
      />
      <vk-select
        placeholder="Name"
        size="sm"
        :options="names"
        v-model="form.name"
      />
      <vk-checkbox
        label="Condensed"
        v-model="form.condensed"
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
            class="flex items-center gap-2"
          >
            <vk-spinner
              :color="color.value"
            />
            <span>{{ color.label }}</span>
          </div>
        </div>
      </example-section>

      <example-section
        title="Name"
        justify="start"
        gap
      >
        <div class="gap-x-12 gap-y-4 grid grid-cols-3">
          <div
            v-for="name in names"
            :key="name.value"
            class="flex gap-2 items-center"
          >
            <vk-spinner
              :name="name.value"
            /> {{ name.label }}
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
      <div class="w-full flex flex-col">
        <example-section
          title="Spinner Props"
          gap
        >
          <vk-data-table
            :headers="propHeaders"
            :data="spinnerProps"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
