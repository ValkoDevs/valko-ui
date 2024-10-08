<script setup lang="ts">
import { ref, watchEffect } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import variantOptions from '@/data/variantOptions'
import sizeOptions from '@/data/sizeOptions'
import propHeaders from '@/data/propHeaders'
import colorOptions from '@/data/colorOptions'
import shapeOptions from '@/data/shapeOptions'
import emitHeaders from '@/data/emitHeaders'

const position = [
  { value: false, label:'Right' },
  { value: true, label:'Left' }
]

const form = ref({
  color: 'primary',
  variant: 'filled',
  size: 'md',
  position: false,
  disabled: false,
  flat: false,
  shape: 'soft',
  helpertext: '',
  label: 'Checkbox',
  exampleChecked: true,
  exampleIndeterminate: true,
  indeterminate: false,
  checked: false as boolean | null,
  readonly: false
})

const apiData = [
  {
    prop: 'color',
    required: false,
    description: 'The color theme of the Checkbox.',
    values: 'primary, neutral, error, warning, info, success',
    default: 'primary'
  },
  {
    prop: 'variant',
    required: false,
    description: 'The variant of the Checkbox.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the Checkbox.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'disabled',
    required: false,
    description: 'Whether the Checkbox is disabled or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'rounded',
    required: false,
    description: 'Whether the Checkbox is rounded or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'modelValue',
    required: false,
    description: 'The v-model for the Checkbox',
    values: 'boolean | null',
    default: 'false'
  },
  {
    prop: 'readonly',
    required: false,
    description: 'Wheter the Checkbox is readonly or not',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'label',
    required: false,
    description: 'The label for the Checkbox',
    values: 'string',
    default: 'Checkbox'
  },
  {
    prop: 'helpertext',
    required: false,
    description: 'Displays a hint under the Checkbox',
    values: 'string',
    default: ''
  },
  {
    prop: 'indeterminate',
    required: false,
    description: 'Checks all Checkbox children',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'labelPosition',
    required: false,
    description: 'Moves the label of the Checkbox to left or right',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'shape',
    required: false,
    description: 'The shape of the Checkbox',
    values: 'soft, rounded, square',
    default: 'soft'
  }
]

const emitData = [
  {
    event: 'update:modelValue',
    description: 'Emitted when the checkbox value is updated.',
    values: 'boolean',
    type: '(value: boolean) => void'
  }
]

/*
* This watch function controls the indeterminate checkbox
* in the documentation page so it is synchronized
* with the status of the checkbox in the sandbox
*/
watchEffect(() => {
  if (form.value.indeterminate) form.value.checked = null
  if (form.value.checked !== null) form.value.indeterminate = false
  if (!form.value.indeterminate && form.value.checked === null) form.value.checked = false
})
</script>

<template>
  <doc-section
    title="Checkbox"
    description="Selection element that allows the user to choose between two states, checked or unchecked. Checkboxes are commonly used in forms and settings to enable users to select multiple options."
  >
    <template #playground-view>
      <div class="w-full flex justify-center p-4">
        <vk-checkbox
          :color="form.color"
          :variant="form.variant"
          :size="form.size"
          :helpertext="form.helpertext"
          :disabled="form.disabled"
          :flat="form.flat"
          :shape="form.shape"
          :label-position="form.position"
          :readonly="form.readonly"
          :indeterminate="form.indeterminate"
          v-model="form.checked"
          :label="form.label"
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
        v-model="form.helpertext"
      />
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
        label="Flat"
        v-model="form.flat"
      />
      <vk-checkbox
        label="Readonly"
        v-model="form.readonly"
      />
      <vk-checkbox
        label="Indeterminate"
        v-model="form.indeterminate"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        justify="start"
        gap
      >
        <div class="gap-x-12 gap-y-4 grid grid-cols-3">
          <vk-checkbox
            v-for="color in colorOptions"
            :key="color.value"
            :color="color.value"
            :label="color.label"
            :model-value="form.exampleChecked"
          />
        </div>
      </example-section>

      <example-section
        title="Variants"
        justify="start"
        gap
      >
        <div class="gap-x-12 gap-y-4 grid grid-cols-3">
          <vk-checkbox
            v-for="variant in variantOptions"
            :key="variant.value"
            :variant="variant.value"
            :label="variant.label"
            :model-value="form.exampleChecked"
          />
        </div>
      </example-section>

      <example-section
        title="Shapes"
        justify="start"
        gap
      >
        <div class="gap-x-12 gap-y-4 grid grid-cols-3">
          <vk-checkbox
            v-for="shape in shapeOptions"
            :key="shape.value"
            :shape="shape.value"
            :label="shape.label"
            :model-value="form.exampleChecked"
          />
        </div>
      </example-section>

      <example-section
        title="Sizes"
        justify="start"
        gap
      >
        <div class="gap-x-12 gap-y-4 grid grid-cols-2">
          <vk-checkbox
            v-for="size in sizeOptions"
            :key="size.value"
            :size="size.value"
            :label="size.label"
            :model-value="form.exampleChecked"
          />
        </div>
      </example-section>

      <example-section
        title="Disabled"
      >
        <vk-checkbox
          label="Disabled"
          disabled
          :model-value="form.exampleChecked"
        />
      </example-section>

      <example-section
        title="Flat"
      >
        <vk-checkbox
          label="Flat"
          flat
          :model-value="form.exampleChecked"
        />
      </example-section>

      <example-section
        title="Readonly"
      >
        <vk-checkbox
          label="Readonly"
          read-only
          :model-value="form.exampleChecked"
        />
      </example-section>

      <example-section
        title="Indeterminate"
      >
        <vk-checkbox
          label="Inderterminate"
          indeterminate
          v-model="form.exampleIndeterminate"
        />
      </example-section>

      <example-section
        title="Label Position"
        gap
      >
        <vk-checkbox
          label="Left"
          :model-value="form.exampleChecked"
        />
        <vk-checkbox
          label="Right"
          :label-position="true"
          :model-value="form.exampleChecked"
        />
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Checkbox Props"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="apiData"
          />
        </example-section>

        <example-section
          title="Checkbox Emits"
          gap
        >
          <vk-table
            :headers="emitHeaders"
            :data="emitData"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
