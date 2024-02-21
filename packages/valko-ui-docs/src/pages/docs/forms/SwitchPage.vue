<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import colorOptions from '@/data/colorOptions'
import sizeOptions from '@/data/sizeOptions'
import propHeaders from '@/data/propHeaders'
import variantOptions from '@/data/variantOptions'
import shapeOptions from '@/data/shapeOptions'

const form = ref({
  variant: 'filled',
  color: 'primary',
  size: 'md',
  label: 'Switch',
  shape: 'soft',
  disabled: false,
  readonly: false,
  position: false,
  value: false,
  exampleValue: true
})

const position = [
  { value: true, label:'Right' },
  { value: false, label:'Left' }
]

const apiData = [
  {
    prop: 'color',
    required: false,
    description: 'The color theme of the Switch.',
    values: 'primary, secondary, error, warning, info, success, light, dark',
    default: 'primary'
  },
  {
    prop: 'variant',
    required: false,
    description: 'The variant of the Switch.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    prop: 'size',
    required: false,
    description: 'The color theme of the Switch.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'disabled',
    required: false,
    description: 'Wheter the Switch is disabled or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'readonly',
    required: false,
    description: 'Wheter the Switch is readonly or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'modelValue',
    required: false,
    description: 'The current value of the Switch.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'position',
    required: false,
    description: 'Wheter the label is displayed on the right or left side of the Switch.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'label',
    required: false,
    description: 'The string that\'s gonna be displayed on the label',
    values: 'string',
    default: 'Switch'
  },
  {
    prop: 'shape',
    required: false,
    description: 'The shape of the Switch.',
    values: 'rounded, square, soft',
    default: 'soft'
  }
]
</script>

<template>
  <doc-section
    title="Switch"
    description="The Switch component provides users the ability to choose between two distinct values. These are very similar to a toggle, or on/off switch, though aesthetically different than a checkbox."
  >
    <template #playground-view>
      <div class="flex justify-center items-center p-4">
        <vk-switch
          :color="form.color"
          :variant="form.variant"
          :shape="form.shape"
          :size="form.size"
          :label="form.label"
          :disabled="form.disabled"
          :readonly="form.readonly"
          :position="form.position"
          v-model="form.value"
        />
      </div>
    </template>

    <template #playground-options>
      <form action="">
        <vk-input
          label="Label"
          size="sm"
          v-model="form.label"
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
        <vk-select
          placeholder="Label Position"
          size="sm"
          :options="position"
          v-model="form.position"
        />
        <vk-checkbox
          label="Disabled"
          v-model="form.disabled"
        />
        <vk-checkbox
          label="Readonly"
          v-model="form.readonly"
        />
      </form>
    </template>

    <template #examples>
      <example-section
        title="Colors"
        gap
      >
        <div class="grid grid-cols-3 gap-4">
          <vk-switch
            v-for="color in colorOptions"
            :key="color.value"
            :color="color.value"
            :label="color.label"
            v-model="form.exampleValue"
          />
        </div>
      </example-section>

      <example-section
        title="Variants"
        gap
      >
        <div class="gap-4 grid grid-cols-3">
          <vk-switch
            v-for="variant in variantOptions"
            :key="variant.value"
            :variant="variant.value"
            :label="variant.label"
            v-model="form.exampleValue"
          />
        </div>
      </example-section>

      <example-section
        title="Shape"
        gap
      >
        <div class="gap-4 grid grid-cols-3">
          <vk-switch
            v-for="shape in shapeOptions"
            :key="shape.value"
            :shape="shape.value"
            :label="shape.label"
            v-model="form.exampleValue"
          />
        </div>
      </example-section>

      <example-section
        title="Size"
        gap
      >
        <div class="gap-4 grid grid-cols-2">
          <vk-switch
            v-for="size in sizeOptions"
            :key="size.value"
            :size="size.value"
            :label="size.label"
            v-model="form.exampleValue"
          />
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
