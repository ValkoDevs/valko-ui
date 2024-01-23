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
  name: 'Radio',
  value: 'Radio-1',
  helpertext: '',
  shape: 'rounded',
  disabled: false,
  readonly: false,
  position: false
})

const position = [
  { value: false, label:'Right' },
  { value: true, label:'Left' }
]

const apiData = [
  {
    prop: 'color',
    required: false,
    description: 'The color theme of the Radio.',
    values: 'primary, secondary, error, warning, info, success, light, dark',
    default: 'primary'
  },
  {
    prop: 'variant',
    required: false,
    description: 'The variant of the Radio.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the Radio.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'disabled',
    required: false,
    description: 'Wheter the Radio is disabled or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'readonly',
    required: false,
    description: 'Wheter the Radio is readonly or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'helpertext',
    required: false,
    description: 'Displays a hint under the Radio.',
    values: 'string',
    default: ''
  },
  {
    prop: 'position',
    required: false,
    description: 'Wheter the label is displayed left or right.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'name',
    required: true,
    description: 'The name of the Radio, used when submitting an HTML form.',
    values: 'string',
    default: ''
  },
  {
    prop: 'modelValue',
    required: true,
    description: 'The value used to identify wich Radio is selected.',
    values: 'string',
    default: ''
  },
  {
    prop: 'value',
    required: true,
    description: 'The current selected value. (controlled).',
    values: 'string',
    default: ''
  },
  {
    prop: 'label',
    required: true,
    description: 'The label of the Radio.',
    values: 'string',
    default: ''
  },
  {
    prop: 'shape',
    required: false,
    description: 'The shape of the Radio.',
    values: 'soft, rounded, square',
    default: 'rounded'
  }
]
</script>

<template>
  <doc-section
    title="Radio"
    description="Radio desc"
  >
    <template #playground-view>
      <div class="w-full flex flex-col justify-center items-center p-4">
        <vk-radio
          :variant="form.variant"
          :color="form.color"
          :size="form.size"
          :name="form.name"
          :disabled="form.disabled"
          :readonly="form.readonly"
          :position="form.position"
          :shape="form.shape"
          :helpertext="form.helpertext"
          label="Radio-1"
          value="Radio-1"
          v-model="form.value"
        />
        <vk-radio
          :variant="form.variant"
          :color="form.color"
          :size="form.size"
          :name="form.name"
          :disabled="form.disabled"
          :readonly="form.readonly"
          :position="form.position"
          :shape="form.shape"
          label="Radio-2"
          value="Radio-2"
          v-model="form.value"
        />
        <vk-radio
          :variant="form.variant"
          :color="form.color"
          :size="form.size"
          :name="form.name"
          :disabled="form.disabled"
          :readonly="form.readonly"
          :position="form.position"
          :shape="form.shape"
          label="Radio-3"
          value="Radio-3"
          v-model="form.value"
        />
      </div>
    </template>

    <template #playground-options>
      <vk-input
        label="Helpertext"
        size="sm"
        v-model="form.helpertext"
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
    </template>

    <template #examples>
      <example-section
        title="Colors"
        justify="start"
        gap
      >
        <div class="gap-x-12 gap-y-4 grid grid-cols-3">
          <vk-radio
            v-for="color in colorOptions"
            :key="color.value"
            :name="color.value"
            :color="color.value"
            :label="color.label"
            :value="color.value"
            v-model="color.value"
          />
        </div>
      </example-section>

      <example-section
        title="Variants"
        justify="start"
        gap
      >
        <div class="gap-x-12 gap-y-4 grid grid-cols-3">
          <vk-radio
            v-for="variant in variantOptions"
            :key="variant.value"
            :name="variant.value"
            :variant="variant.value"
            :label="variant.label"
            :value="variant.value"
            v-model="variant.value"
          />
        </div>
      </example-section>

      <example-section
        title="Shapes"
        justify="start"
        gap
      >
        <div class="gap-x-12 gap-y-4 grid grid-cols-3">
          <vk-radio
            v-for="shape in shapeOptions"
            :key="shape.value"
            :name="shape.value"
            :shape="shape.value"
            :label="shape.label"
            :value="shape.value"
            v-model="shape.value"
          />
        </div>
      </example-section>

      <example-section
        title="Sizes"
        justify="start"
        align="start"
        gap
      >
        <div class="gap-x-12 gap-y-4 grid grid-cols-2">
          <vk-radio
            v-for="size in sizeOptions"
            :key="size.value"
            :name="size.value"
            :size="size.value"
            :label="size.label"
            :value="size.value"
            v-model="size.value"
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
