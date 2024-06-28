<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import variantOptions from '@/data/variantOptions'
import sizeOptions from '@/data/sizeOptions'
import propHeaders from '@/data/propHeaders'
import colorOptions from '@/data/colorOptions'
import shapeOptions from '@/data/shapeOptions'
import emitHeaders from '@/data/emitHeaders'

const form = ref({
  color: 'primary',
  variant: 'filled',
  size: 'md',
  value: '',
  label: 'Label',
  helper: 'Helpertext',
  exampleReadonly: 'Example readonly text',
  shape: 'soft',
  disabled: false,
  readonly: false,
  counter: null
})

const apiData = [
  {
    prop: 'color',
    required: false,
    description: 'The color theme of the Textarea.',
    values: 'primary, neutral, error, warning, info, success',
    default: 'primary'
  },
  {
    prop: 'variant',
    required: false,
    description: 'The variant of the Textarea.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the Textarea.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'disabled',
    required: false,
    description: 'Whether the Textarea is disabled or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'modelValue',
    required: false,
    description: 'The v-model for the Textarea',
    values: 'string',
    default: 'false'
  },
  {
    prop: 'readonly',
    required: false,
    description: 'Wheter the Textarea is readonly or not',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'label',
    required: false,
    description: 'The label for the Textarea',
    values: 'string',
    default: 'false'
  },
  {
    prop: 'helpertext',
    required: false,
    description: 'A hint for the Textarea',
    values: 'string',
    default: 'false'
  },
  {
    prop: 'shape',
    required: false,
    description: 'The shape of the Textarea',
    values: 'soft, rounded, square',
    default: 'soft'
  }
]

const emitData = [
  {
    event: 'update:modelValue',
    description: 'Emitted when the value of the textarea changes.',
    values: 'value: string',
    type: '(value: string) => void'
  }
]
</script>

<template>
  <doc-section
    title="Textarea"
    description="Input field that allows the user to enter and edit extensive text. Textareas are used for capturing longer-form textual input from users, such as comments, messages, or descriptions."
  >
    <template #playground-view>
      <div class="w-full p-4">
        <vk-textarea
          :variant="form.variant"
          :size="form.size"
          :disabled="form.disabled"
          :readonly="form.readonly"
          :color="form.color"
          :shape="form.shape"
          v-model="form.value"
          :label="form.label"
          :maxlength="form.counter"
          :helpertext="form.helper"
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
      <vk-input
        label="Counter"
        type="number"
        size="sm"
        v-model="form.counter"
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
          <vk-textarea
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
          <vk-textarea
            v-for="variant in variantOptions"
            :key="variant.value"
            :variant="variant.value"
            :label="variant.label"
          />
        </div>
      </example-section>

      <example-section
        title="Shapes"
        justify="start"
        align="start"
        gap
      >
        <div class="w-full grid grid-cols-2 gap-4 items-start">
          <vk-textarea
            v-for="shape in shapeOptions"
            :key="shape.value"
            :shape="shape.value"
            :label="shape.label"
          />
        </div>
      </example-section>

      <example-section
        title="Sizes"
        justify="start"
        align="start"
        gap
      >
        <div class="w-full grid grid-cols-2 gap-4 items-start">
          <vk-textarea
            v-for="size in sizeOptions"
            :key="size.value"
            :size="size.value"
            :label="size.label"
          />
        </div>
      </example-section>

      <example-section
        title="Disabled"
      >
        <vk-textarea
          disabled
          label="Disabled"
        />
      </example-section>

      <example-section
        title="Readonly"
      >
        <vk-textarea
          readonly
          label="Readonly"
          v-model="form.exampleReadonly"
        />
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Textarea Props"
          gap
        >
          <vk-data-table
            :headers="propHeaders"
            :data="apiData"
          />
        </example-section>

        <example-section
          title="Textarea Emits"
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
