<script setup lang="ts">
import type { CheckboxProps, SelectOption, TableItem, LabelPosition } from '#valkoui'

const position: SelectOption<LabelPosition>[] = [
  { value: 'right', label:'Right' },
  { value: 'left', label:'Left' }
]

const form = reactive<CheckboxProps>({
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  label: 'Checkbox',
  labelPosition: 'right',
  disabled: false,
  readonly: false,
  modelValue: false
})

const indeterminateRef = ref(false)

const checkboxStates = reactive(
  Object.fromEntries([
    ...colorOptions.general,
    ...variantOptions.general,
    ...shapeOptions.general,
    ...sizeOptions.general,
    ...position,
    { value: 'readonly' },
    { value: 'indeterminate' }
  ].map(opt => [opt.value, true]))
)

const apiData: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Checkbox.',
    values: 'primary, secondary, negative, warning, accent, positive',
    default: 'primary'
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The variant of the Checkbox.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Checkbox.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    key: 'disabledProp',
    prop: 'disabled',
    required: false,
    description: 'Whether the Checkbox is disabled or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'roundedProp',
    prop: 'rounded',
    required: false,
    description: 'Whether the Checkbox is rounded or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'modelValueProp',
    prop: 'modelValue',
    required: false,
    description: 'The v-model for the Checkbox',
    values: 'boolean | null',
    default: 'false'
  },
  {
    key: 'readonlyProp',
    prop: 'readonly',
    required: false,
    description: 'Wheter the Checkbox is readonly or not',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'labelProp',
    prop: 'label',
    required: false,
    description: 'The label for the Checkbox',
    values: 'string',
    default: 'Checkbox'
  },
  {
    key: 'helpertextProp',
    prop: 'helpertext',
    required: false,
    description: 'Displays a hint under the Checkbox',
    values: 'string',
    default: ''
  },
  {
    key: 'indeterminateProp',
    prop: 'indeterminate',
    required: false,
    description: 'Checks all Checkbox children',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'labelPositionProp',
    prop: 'labelPosition',
    required: false,
    description: 'Moves the label of the Checkbox to left or right',
    values: 'left, right',
    default: 'right'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Checkbox',
    values: 'soft, rounded, square',
    default: 'soft'
  }
]

const emitData: TableItem[] = [
  {
    key: 'updateModelValueEmit',
    event: 'update:modelValue',
    description: 'Emitted when the checkbox value is updated.',
    values: 'boolean',
    type: '(value: boolean) => void'
  }
]

const generateSnippet = snippetGeneratorFactory('vk-checkbox')

watchEffect(() => {
  if (indeterminateRef.value) form.modelValue = null
  if (form.modelValue !== null) indeterminateRef.value = false
  if (!indeterminateRef.value && form.modelValue === null) form.modelValue = false
})
</script>

<template>
  <doc-section
    title="Checkbox"
    description="Selection element that allows the user to choose between two states, checked or unchecked. Checkboxes are commonly used in forms and settings to enable users to select multiple options."
  >
    <template #playground-view>
      <vk-checkbox
        v-model="form.modelValue"
        :color="form.color"
        :variant="form.variant"
        :size="form.size"
        :helpertext="form.helpertext"
        :disabled="form.disabled"
        :shape="form.shape"
        :label-position="form.labelPosition"
        :readonly="form.readonly"
        :label="form.label"
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
      <vk-select
        v-model="form.color"
        label="Color"
        size="sm"
        :options="colorOptions.general"
      />
      <vk-select
        v-model="form.variant"
        label="Variant"
        size="sm"
        :options="variantOptions.general"
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
      <vk-select
        v-model="form.labelPosition"
        label="Label Position"
        size="sm"
        :options="position"
      />
      <vk-checkbox
        v-model="form.disabled"
        label="Disabled"
      />
      <vk-checkbox
        v-model="form.readonly"
        label="Readonly"
      />
      <vk-checkbox
        v-model="indeterminateRef"
        label="Indeterminate"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        classes="grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
      >
        <vk-checkbox
          v-for="color in colorOptions.general"
          :key="color.value"
          v-model="checkboxStates[color.value]"
          :color="color.value"
          :label="color.label"
        />

        <template #code>
          <code-block :code="generateSnippet<string>('color', { values: colorOptions.general.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section
        title="Variants"
        classes="grid-cols-2 md:grid-cols-3"
      >
        <vk-checkbox
          v-for="variant in variantOptions.general"
          :key="variant.value"
          v-model="checkboxStates[variant.value]"
          :variant="variant.value"
          :label="variant.label"
        />

        <template #code>
          <code-block :code="generateSnippet<string>('variant', { values: variantOptions.general.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section
        title="Shapes"
        classes="grid-cols-2 md:grid-cols-3"
      >
        <vk-checkbox
          v-for="shape in shapeOptions.general"
          :key="shape.value"
          v-model="checkboxStates[shape.value]"
          :shape="shape.value"
          :label="shape.label"
        />

        <template #code>
          <code-block :code="generateSnippet<string>('shape', { values: shapeOptions.general.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section
        title="Sizes"
        classes="grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <vk-checkbox
          v-for="size in sizeOptions.general"
          :key="size.value"
          v-model="checkboxStates[size.value]"
          :size="size.value"
          :label="size.label"
        />

        <template #code>
          <code-block :code="generateSnippet<string>('size', { values: sizeOptions.general.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section title="Disabled">
        <vk-checkbox
          v-model="checkboxStates['disabled']"
          label="Disabled"
          disabled
        />

        <template #code>
          <code-block :code="generateSnippet<boolean>('disabled', { values: [true] })" />
        </template>
      </example-section>

      <example-section title="Readonly">
        <vk-checkbox
          v-model="checkboxStates['readonly']"
          label="Readonly"
          readonly
        />

        <template #code>
          <code-block :code="generateSnippet<boolean>('readonly', { values: [true] })" />
        </template>
      </example-section>

      <example-section title="Indeterminate">
        <vk-checkbox
          v-model="checkboxStates['indeterminate']"
          label="Inderterminate"
          indeterminate
        />

        <template #code>
          <code-block :code="generateSnippet<boolean>('indeterminate', { values: [true] })" />
        </template>
      </example-section>

      <example-section
        title="Label Position"
        classes="sm:grid-cols-2"
      >
        <vk-checkbox
          v-for="pos in position"
          :key="pos.value"
          v-model="checkboxStates[pos.value]"
          :label="pos.label"
          :label-position="pos.value"
        />

        <template #code>
          <code-block :code="generateSnippet<string>('label-position', { values: position.map(o => o.value) })" />
        </template>
      </example-section>
    </template>

    <template #api>
      <h3>Checkbox Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="apiData"
      />

      <h3>Checkbox Emits</h3>
      <vk-table
        :headers="emitHeaders"
        :data="emitData"
      />
    </template>
  </doc-section>
</template>
