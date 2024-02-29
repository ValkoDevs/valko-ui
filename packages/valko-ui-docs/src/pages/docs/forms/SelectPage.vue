<script setup lang="ts">
import { Ref, ref } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import variantOptions from '@/data/variantOptions'
import colorOptions from '@/data/colorOptions'
import sizeOptions from '@/data/sizeOptions'
import propHeaders from '@/data/propHeaders'
import shapeOptions from '@/data/shapeOptions'

const people = [
  { value: 1, label: 'Wade Cooper' },
  { value: 2, label: 'Arlene Mccoy' },
  { value: 3, label: 'Devon Webb' },
  { value: 4, label: 'Tom Cook' }
]

const form: Ref<Record<string, string | boolean | number>> = ref({
  playground: '',
  primary: '',
  secondary: '',
  error: '',
  success: '',
  warning: '',
  info: '',
  filled: '',
  outlined: '',
  ghost: '',
  shape: '',
  xs: '',
  sm: '',
  md: '',
  lg: '',
  color: 'primary',
  variant: 'filled',
  size: 'md',
  selectShape: 'soft',
  helper: 'Helpertext',
  label: 'Label',
  exampleReadonly: 1,
  disabled: false,
  flat: false,
  readonly: false,
  multiple: false
})

const apiData = [
  {
    prop: 'color',
    required: false,
    description: 'The color theme of the Select.',
    values: 'primary, secondary, error, warning, info, success, light, dark',
    default: 'primary'
  },
  {
    prop: 'variant',
    required: false,
    description: 'The variant of the Select.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the Select.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'disabled',
    required: false,
    description: 'Whether the Select is disabled or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'rounded',
    required: false,
    description: 'Whether the Select is rounded or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'multiple',
    required: false,
    description: 'Wheter the Select is enabled to choose multiple options',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'options',
    required: false,
    description: 'An array of options for the Select',
    values: 'array',
    default: 'false'
  },
  {
    prop: 'modelValue',
    required: false,
    description: 'The v-model for the Select',
    values: 'string, number, Array<string | number>',
    default: 'false'
  },
  {
    prop: 'readonly',
    required: false,
    description: 'Wheter the Select is readonly or not',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'placeholder',
    required: false,
    description: 'The placeholder for the Select',
    values: 'string',
    default: 'false'
  },
  {
    prop: 'helpertext',
    required: false,
    description: 'A hint for the Select',
    values: 'string',
    default: 'false'
  },
  {
    prop: 'iconLeft',
    required: false,
    description: 'A icon on the left side for the Select',
    values: 'string',
    default: ''
  },
  {
    prop: 'iconRight',
    required: false,
    description: 'A icon on the right side for the Select',
    values: 'string',
    default: 'chevron-down'
  },
  {
    prop: 'shape',
    required: false,
    description: 'The shape of the Button.',
    values: 'rounded, square, soft',
    default: 'soft'
  }
]
</script>

<template>
  <doc-section
    title="Select"
    description="Selects are used to choose between many options either one or several enabling a more dynamic form"
  >
    <template #playground-view>
      <div class="w-full flex px-2">
        <vk-select
          :placeholder="form.label"
          :helpertext="form.helper"
          v-model="form.playground"
          :options="people"
          :color="form.color"
          :variant="form.variant"
          :readonly="form.readonly"
          :shape="form.selectShape"
          :disabled="form.disabled"
          :flat="form.flat"
          :size="form.size"
          :multiple="form.multiple"
        />
      </div>
    </template>

    <template #playground-options>
      <vk-input
        label="Label"
        size="sm"
        v-model="form.label"
      />
      <vk-input
        label="Helpertext"
        size="sm"
        v-model="form.helper"
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
        v-model="form.selectShape"
      />
      <vk-select
        placeholder="Size"
        size="sm"
        :options="sizeOptions"
        v-model="form.size"
      />
      <vk-checkbox
        label="Multiple"
        v-model="form.multiple"
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
        justify="around"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2">
          <vk-select
            v-for="color in colorOptions"
            :key="color.value"
            :color="color.value"
            :placeholder="color.label"
            :options="people"
            v-model="form[color.value]"
          />
        </div>
      </example-section>

      <example-section
        title="Variants"
        justify="start"
        align="start"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2">
          <vk-select
            v-for="variant in variantOptions"
            :key="variant.value"
            :variant="variant.value"
            :placeholder="variant.label"
            :options="people"
            v-model="form[variant.value]"
          />
          <vk-select
            disabled
            placeholder="Disabled"
          />
          <vk-select
            :options="people"
            variant="outlined"
            rounded
            v-model="form.rounded"
            placeholder="Rounded"
          />
          <vk-select
            readonly
            :options="people"
            placeholder="Readonly"
            v-model="form.exampleReadonly"
          />
        </div>
      </example-section>

      <example-section
        title="Shapes"
        justify="start"
        align="start"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2 items-end">
          <vk-select
            v-for="shape in shapeOptions"
            :key="shape.value"
            :shape="shape.value"
            :placeholder="shape.label"
            :options="people"
            v-model="form[shape.value]"
          />
        </div>
      </example-section>

      <example-section
        title="Sizes"
        justify="start"
        align="start"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2 items-end">
          <vk-select
            v-for="size in sizeOptions"
            :key="size.value"
            :size="size.value"
            :placeholder="size.label"
            :options="people"
            v-model="form[size.value]"
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
