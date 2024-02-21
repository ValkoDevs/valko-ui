<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import sizeOptions from '@/data/sizeOptions'
import colorOptions from '@/data/colorOptions'
import propHeaders from '@/data/propHeaders'
import shapeOptions from '@/data/shapeOptions'
import variantOptions from '@/data/variantOptions'

const form = ref({
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  flat: false,
  disabled: false
})

const items = [
  { key: 'image', title: 'Upload Image', icon: 'photo', onClick: () => alert('Image') },
  { key: 'edit', title: 'Edit', icon: 'edit', onClick: () => alert('Edit') },
  { key: 'disabled', title: 'Disabled', icon: 'error-404', disabled: true },
  { key: 'video', title: 'Upload Video', icon: 'video', onClick: () => alert('Video') },
  { key: 'delete', title: 'Delete', icon: 'trash', onClick: () => alert('Delete') }
]

const dropdownPropsData = [
  {
    prop: 'color',
    required: false,
    description: 'The Dropdown color theme.',
    values: 'primary, secondary, error, warning, info, success, light, dark',
    default: 'primary'
  },
  {
    prop: 'size',
    required: false,
    description: 'The Dropdown size.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'variant',
    required: false,
    description: 'The Dropdown variant.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    prop: 'shape',
    required: false,
    description: 'The Dropdown shape.',
    values: 'rounded, soft, square',
    default: 'soft'
  },
  {
    prop: 'flat',
    required: false,
    description: 'Wheter the Dropdown is flat or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'disabled',
    required: false,
    description: 'Wheter the Dropdown is disabled or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'title',
    required: false,
    description: 'The Dropdown title.',
    values: 'string',
    default: 'Dropdown'
  },
  {
    prop: 'icon',
    required: false,
    description: 'The dropdown icon.',
    values: 'string',
    default: 'chevron-down'
  },
  {
    prop: 'items',
    required: false,
    description: 'The Dropdown items displayed on the menu.',
    values: 'item[]',
    default: '[]'
  }
]

const itemInterfaceData = [
  {
    prop: 'key',
    required: true,
    description: 'The key of the Item',
    values: 'string | number',
    default: ''
  },
  {
    prop: 'title',
    required: true,
    description: 'The title for the Item',
    values: 'string',
    default: ''
  },
  {
    prop: 'icon',
    required: false,
    description: 'The name of the icon to display on the left side of the title',
    values: 'string',
    default: ''
  },
  {
    prop: 'disabled',
    required: false,
    description: 'Wheter the Item is disabled or not',
    values: 'true, false',
    default: ''
  },
  {
    prop: 'onClick',
    required: false,
    description: 'Emit for the Item',
    values: '() => void',
    default: ''
  }
]
</script>

<template>
  <doc-section
    title="Dropdown Component"
    description="A simple but elegant dropdown component"
  >
    <template #playground-view>
      <div class="w-full flex px-2 justify-center">
        <vk-dropdown
          :color="form.color"
          :size="form.size"
          :variant="form.variant"
          :shape="form.shape"
          :disabled="form.disabled"
          :flat="form.flat"
          :items="items"
        />
      </div>
    </template>

    <template #playground-options>
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
        <div class="gap-4 grid grid-cols-4">
          <vk-dropdown
            v-for="color in colorOptions"
            :key="color.value"
            :color="color.value"
            :title="color.label"
            :items="items"
          />
        </div>
      </example-section>

      <example-section
        title="Variants"
        gap
      >
        <div class="gap-4 grid grid-cols-4">
          <vk-dropdown
            v-for="variant in variantOptions"
            :key="variant.value"
            :variant="variant.value"
            :title="variant.label"
            :items="items"
          />
        </div>
      </example-section>

      <example-section
        title="Shapes"
        gap
      >
        <div class="gap-4 grid grid-cols-4">
          <vk-dropdown
            v-for="shape in shapeOptions"
            :key="shape.value"
            :shape="shape.value"
            :title="shape.label"
            :items="items"
          />
        </div>
      </example-section>

      <example-section
        title="Sizes"
        gap
      >
        <div class="gap-4 grid grid-cols-2">
          <vk-dropdown
            v-for="size in sizeOptions"
            :key="size.value"
            :size="size.value"
            :title="size.label"
            :items="items"
          />
        </div>
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Dropdown Props"
          gap
        >
          <vk-data-table
            :headers="propHeaders"
            :data="dropdownPropsData"
          />
        </example-section>

        <example-section
          title="Item interface"
          gap
        >
          <vk-data-table
            :headers="propHeaders"
            :data="itemInterfaceData"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
