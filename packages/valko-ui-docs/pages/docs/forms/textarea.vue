<script setup lang="ts">
import type { TextareaProps, TableItem } from '#valkoui'

const form = ref<TextareaProps>({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  modelValue: '',
  label: 'Label',
  helpertext: 'Helpertext',
  disabled: false,
  readonly: false,
  maxlength: undefined
})

const apiData: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Textarea.',
    values: 'primary, neutral, error, warning, info, success',
    default: 'primary'
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The variant of the Textarea.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Textarea.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    key: 'disabledProp',
    prop: 'disabled',
    required: false,
    description: 'Whether the Textarea is disabled or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'modelValueProp',
    prop: 'modelValue',
    required: false,
    description: 'The v-model for the Textarea',
    values: 'string',
    default: 'false'
  },
  {
    key: 'readonlyProp',
    prop: 'readonly',
    required: false,
    description: 'Wheter the Textarea is readonly or not',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'labelProp',
    prop: 'label',
    required: false,
    description: 'The label for the Textarea',
    values: 'string',
    default: 'false'
  },
  {
    key: 'helpertextProp',
    prop: 'helpertext',
    required: false,
    description: 'A hint for the Textarea',
    values: 'string',
    default: 'false'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Textarea',
    values: 'soft, rounded, square',
    default: 'soft'
  }
]

const emitData: TableItem [] = [
  {
    key: 'updateModelValueEmit',
    event: 'update:modelValue',
    description: 'Emitted when the value of the textarea changes.',
    values: 'value: string',
    type: '(value: string) => void'
  }
]

const { generalCode } = useCodeBlock('vk-textarea')
</script>

<template>
  <doc-section
    title="Textarea"
    description="Input field that allows the user to enter and edit extensive text. Textareas are used for capturing longer-form textual input from users, such as comments, messages, or descriptions."
  >
    <template #playground-view>
      <vk-textarea
        v-model="form.modelValue"
        :variant="form.variant"
        :size="form.size"
        :disabled="form.disabled"
        :readonly="form.readonly"
        :color="form.color"
        :shape="form.shape"
        :label="form.label"
        :maxlength="form.maxlength"
        :helpertext="form.helpertext"
      />
    </template>

    <template #playground-options>
      <vk-input
        v-model="form.label"
        label="Label"
        size="sm"
      />
      <vk-input
        v-model="form.helpertext"
        label="Helpertext"
        size="sm"
      />
      <vk-input
        v-model="form.maxlength"
        label="Max lenght"
        type="number"
        size="sm"
      />
      <vk-select
        v-model="form.variant"
        label="Variant"
        size="sm"
        :options="variantOptions.general"
      />
      <vk-select
        v-model="form.color"
        label="Color"
        size="sm"
        :options="colorOptions"
      />
      <vk-select
        v-model="form.shape"
        label="Shape"
        size="sm"
        :options="shapeOptions.general"
      />
      <vk-select
        v-model="form.size"
        label="Size"
        size="sm"
        :options="sizeOptions.general"
      />
      <vk-checkbox
        v-model="form.disabled"
        label="Disabled"
      />
      <vk-checkbox
        v-model="form.readonly"
        label="Readonly"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        classes="sm:grid-cols-2 md:grid-cols-3"
      >
        <vk-textarea
          v-for="color in colorOptions"
          :key="color.value"
          :color="color.value"
          :label="color.label"
        />

        <template #code>
          <code-block :code="generalCode('color', colorOptions)" />
        </template>
      </example-section>

      <example-section
        title="Variants"
        classes="sm:grid-cols-2 md:grid-cols-3"
      >
        <vk-textarea
          v-for="variant in variantOptions.general"
          :key="variant.value"
          :variant="variant.value"
          :label="variant.label"
        />

        <template #code>
          <code-block :code="generalCode('variant', variantOptions.general)" />
        </template>
      </example-section>

      <example-section
        title="Shapes"
        classes="sm:grid-cols-2 md:grid-cols-3"
      >
        <vk-textarea
          v-for="shape in shapeOptions.general"
          :key="shape.value"
          :shape="shape.value"
          :label="shape.label"
        />

        <template #code>
          <code-block :code="generalCode('shape', shapeOptions.general)" />
        </template>
      </example-section>

      <example-section
        title="Sizes"
        classes="sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <vk-textarea
          v-for="size in sizeOptions.general"
          :key="size.value"
          :size="size.value"
          :label="size.label"
        />

        <template #code>
          <code-block :code="generalCode('size', sizeOptions.general)" />
        </template>
      </example-section>

      <example-section title="Disabled">
        <vk-textarea
          disabled
          label="Disabled"
        />

        <template #code>
          <code-block code="<vk-textarea disabled></vk-textarea>" />
        </template>
      </example-section>

      <example-section title="Readonly">
        <vk-textarea
          readonly
          label="Readonly"
          model-value="Readonly Example"
        />

        <template #code>
          <code-block code="<vk-textarea readonly></vk-textarea>" />
        </template>
      </example-section>
    </template>

    <template #api>
      <h3>Textarea Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="apiData"
      />

      <h3>Textarea Emits</h3>
      <vk-table
        :headers="emitHeaders"
        :data="emitData"
      />
    </template>
  </doc-section>
</template>
