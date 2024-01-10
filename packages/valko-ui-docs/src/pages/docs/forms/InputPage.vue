<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import variantOptions from '@/data/variantOptions'
import colorOptions from '@/data/colorOptions'
import sizeOptions from '@/data/sizeOptions'
import propHeaders from '@/data/propHeaders'

const types = [
  { value:'text', label:'Text' },
  { value:'email', label:'Email' },
  { value:'password', label:'Password' },
  { value:'date', label:'Date' }
]

const form = ref({
  color: 'primary',
  variant: 'filled',
  size: 'md',
  type: 'text',
  disabled: ref(false),
  flat: ref(false),
  rounded: ref(false),
  readonly: ref(false),
  value: ref(''),
  labelValue: ref('Label'),
  helperValue: ref('Helpertext'),
  exampleReadonly: ref('Example readonly text')
})

const apiData = [
  {
    prop: 'color',
    required: false,
    description: 'The color theme of the Input.',
    values: 'primary, secondary, error, warning, info, success',
    default: 'primary'
  },
  {
    prop: 'variant',
    required: false,
    description: 'The variant of the Input.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    prop: 'type',
    required: false,
    description: 'The type of the Input.',
    values: 'text, email, password, date',
    default: 'text'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the Input.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'disabled',
    required: false,
    description: 'Whether the Input is disabled or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'rounded',
    required: false,
    description: 'Whether the Input is rounded or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'modelValue',
    required: false,
    description: 'The v-model for the Input',
    values: 'string',
    default: 'false'
  },
  {
    prop: 'readonly',
    required: false,
    description: 'Wheter the Input is readonly or not',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'label',
    required: false,
    description: 'The label for the Input',
    values: 'string',
    default: 'false'
  },
  {
    prop: 'helpertext',
    required: false,
    description: 'A hint for the Input',
    values: 'string',
    default: 'false'
  },
  {
    prop: 'iconLeft',
    required: false,
    description: 'A icon on the left side for the Input',
    values: 'string',
    default: ''
  },
  {
    prop: 'iconRight',
    required: false,
    description: 'A icon on the right side for the Input',
    values: 'string',
    default: ''
  }
]
</script>

<template>
  <doc-section
    title="Input Component"
    description="The input component allows our users to build complex forms quickly, it has different variations of styles and a range of versatile colors with a subtle animation."
  >
    <template #playground-view>
      <div class="w-full flex px-2">
        <vk-input
          :variant="form.variant"
          :color="form.color"
          :size="form.size"
          :disabled="form.disabled"
          :readonly="form.readonly"
          :flat="form.flat"
          :rounded="form.rounded"
          :type="form.type"
          v-model="form.value"
          :label="form.labelValue"
          :helpertext="form.helperValue"
        />
      </div>
    </template>

    <template #playground-options>
      <div class="flex">
        <div class="w-1/2 px-4">
          <form action="">
            <div class="flex mb-1">
              <vk-input
                label="Label"
                size="sm"
                v-model="form.value"
              />
            </div>
            <div class="flex mb-1">
              <vk-input
                label="Helpertext"
                size="sm"
                v-model="form.helperValue"
              />
            </div>
            <div class="flex mb-1">
              <vk-select
                placeholder="Variant"
                size="sm"
                :options="variantOptions"
                v-model="form.variant"
              />
            </div>
            <div class="flex mb-1">
              <vk-select
                placeholder="Color"
                size="sm"
                :options="colorOptions"
                v-model="form.color"
              />
            </div>
            <div class="flex mb-1">
              <vk-select
                placeholder="Size"
                size="sm"
                :options="sizeOptions"
                v-model="form.size"
              />
            </div>
            <div class="flex mb-1">
              <vk-select
                placeholder="Type"
                size="sm"
                :options="types"
                v-model="form.type"
              />
            </div>
            <div class="flex">
              <vk-checkbox
                label="Disabled"
                v-model="form.disabled"
              />
            </div>
            <div class="flex">
              <vk-checkbox
                label="Rounded"
                v-model="form.rounded"
              />
            </div>
            <div class="flex">
              <vk-checkbox
                label="Readonly"
                v-model="form.readonly"
              />
            </div>
          </form>
        </div>
      </div>
    </template>

    <template #examples>
      <example-section
        title="Colors"
        justify="around"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2">
          <vk-input
            v-for="color in colorOptions"
            :key="color.value"
            :color="color.value"
            :label="color.label"
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
          <vk-input
            v-for="variant in variantOptions"
            :key="variant.value"
            :variant="variant.value"
            :label="variant.label"
          />
          <vk-input
            disabled
            label="Disabled"
          />
          <vk-input
            rounded
            kind="outlined"
            label="Rounded"
          />
          <vk-input
            readonly
            label="Readonly"
            v-model="form.exampleReadonly"
          />
        </div>
      </example-section>

      <example-section
        title="Types"
        justify="start"
        align="start"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2">
          <vk-input
            v-for="type in types"
            :key="type.value"
            :type="type.value"
            :label="type.label"
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
          <vk-input
            v-for="size in sizeOptions"
            :key="size.value"
            :size="size.value"
            :label="size.label"
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
