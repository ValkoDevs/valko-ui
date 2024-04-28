<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import colorOptions from '@/data/colorOptions'
import variantOptionsExtended from '@/data/variantOptionsExtended'
import shapeOptions from '@/data/shapeOptions'
import sizeOptions from '@/data/sizeOptions'
import propHeaders from '@/data/propHeaders'
import emitHeaders from '@/data/emitHeaders'

const form = ref({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
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

const dropdownProps = [
  {
    prop: 'color',
    required: false,
    description: 'The Dropdown color theme.',
    values: 'primary, secondary, error, warning, info, success, light, dark',
    default: 'primary'
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
    prop: 'size',
    required: false,
    description: 'The Dropdown size.',
    values: 'xs, sm, md, lg',
    default: 'md'
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

const itemInterface = [
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

const dropdownEmits = [
  {
    event: 'itemClick',
    description: 'Emitted when an item in the dropdown menu is clicked.',
    values: 'Item',
    type: '(item: Item) => void'
  }
]
</script>

<template>
  <doc-section
    title="Dropdown"
    description="List of options that expands when the user interacts with a trigger element. Dropdowns provide a compact way to display a list of choices and are commonly used in forms and navigation menus."
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
        placeholder="Color"
        size="sm"
        :options="colorOptions"
        v-model="form.color"
      />
      <vk-select
        placeholder="Variant"
        size="sm"
        :options="variantOptionsExtended"
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
        <vk-dropdown
          v-for="color in colorOptions"
          :key="color.value"
          :color="color.value"
          :title="color.label"
          :items="items"
        />
      </example-section>

      <example-section
        title="Variants"
        gap
      >
        <vk-dropdown
          v-for="variant in variantOptionsExtended"
          :key="variant.value"
          :variant="variant.value"
          :title="variant.label"
          :items="items"
        />
      </example-section>

      <example-section
        title="Shapes"
        gap
      >
        <vk-dropdown
          v-for="shape in shapeOptions"
          :key="shape.value"
          :shape="shape.value"
          :title="shape.label"
          :items="items"
        />
      </example-section>

      <example-section
        title="Sizes"
        gap
      >
        <vk-dropdown
          v-for="size in sizeOptions"
          :key="size.value"
          :size="size.value"
          :title="size.label"
          :items="items"
        />
      </example-section>

      <example-section
        title="Flat"
        gap
      >
        <vk-dropdown
          title="Flat"
          :items="items"
        />
      </example-section>

      <example-section
        title="Disabled"
        gap
      >
        <vk-dropdown
          title="Disabled"
          disabled
          :items="items"
        />
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
            :data="dropdownProps"
          />
        </example-section>

        <example-section
          title="Item interface"
          gap
        >
          <vk-data-table
            :headers="propHeaders"
            :data="itemInterface"
          />
        </example-section>

        <example-section
          title="Dropdown Emits"
          gap
        >
          <vk-data-table
            :headers="emitHeaders"
            :data="dropdownEmits"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
