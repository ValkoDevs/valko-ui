<script setup lang="ts">
import type { CheckboxProps, SelectOption, TableItem, LabelPosition } from '#valkoui'

const position: SelectOption<LabelPosition>[] = [
  { value: 'right', label:'Right' },
  { value: 'left', label:'Left' }
]

const form = ref<CheckboxProps>({
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  label: 'Checkbox',
  labelPosition: 'right',
  flat: false,
  disabled: false,
  readonly: false
})

const extendedForm = ref({
  helpertext: '',
  exampleChecked: true,
  exampleIndeterminate: true,
  indeterminate: false,
  checked: false as boolean | null
})

const apiData: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Checkbox.',
    values: 'primary, neutral, error, warning, info, success',
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

const { defaultSnippet, booleanSnippet } = useCodeSnippet('vk-checkbox')

/*
* This watch function controls the indeterminate checkbox
* in the documentation page so it is synchronized
* with the status of the checkbox in the sandbox
*/
watchEffect(() => {
  if (extendedForm.value.indeterminate) extendedForm.value.checked = null
  if (extendedForm.value.checked !== null) extendedForm.value.indeterminate = false
  if (!extendedForm.value.indeterminate && extendedForm.value.checked === null) extendedForm.value.checked = false
})
</script>

<template>
  <doc-section
    title="Checkbox"
    description="Selection element that allows the user to choose between two states, checked or unchecked. Checkboxes are commonly used in forms and settings to enable users to select multiple options."
  >
    <template #playground-view>
      <vk-checkbox
        v-model="extendedForm.checked"
        :color="form.color"
        :variant="form.variant"
        :size="form.size"
        :helpertext="form.helpertext"
        :disabled="form.disabled"
        :flat="form.flat"
        :shape="form.shape"
        :label-position="form.labelPosition"
        :readonly="form.readonly"
        :indeterminate="extendedForm.indeterminate"
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
        :options="colorOptions"
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
        v-model="form.flat"
        label="Flat"
      />
      <vk-checkbox
        v-model="form.readonly"
        label="Readonly"
      />
      <vk-checkbox
        v-model="extendedForm.indeterminate"
        label="Indeterminate"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        classes="grid-cols-2 md:grid-cols-3 lg:grid-cols-6"
      >
        <vk-checkbox
          v-for="color in colorOptions"
          :key="color.value"
          :color="color.value"
          :label="color.label"
          :model-value="extendedForm.exampleChecked"
        />

        <template #code>
          <code-block
            :code="defaultSnippet('color', colorOptions)"
            :copy="defaultSnippet('color', colorOptions)"
          />
        </template>
      </example-section>

      <example-section
        title="Variants"
        classes="grid-cols-2 md:grid-cols-3"
      >
        <vk-checkbox
          v-for="variant in variantOptions.general"
          :key="variant.value"
          :variant="variant.value"
          :label="variant.label"
          :model-value="extendedForm.exampleChecked"
        />

        <template #code>
          <code-block
            :code="defaultSnippet('variant', variantOptions.general)"
            :copy="defaultSnippet('variant', variantOptions.general)"
          />
        </template>
      </example-section>

      <example-section
        title="Shapes"
        classes="grid-cols-2 md:grid-cols-3"
      >
        <vk-checkbox
          v-for="shape in shapeOptions.general"
          :key="shape.value"
          :shape="shape.value"
          :label="shape.label"
          :model-value="extendedForm.exampleChecked"
        />

        <template #code>
          <code-block
            :code="defaultSnippet('shape', shapeOptions.general)"
            :copy="defaultSnippet('shape', shapeOptions.general)"
          />
        </template>
      </example-section>

      <example-section
        title="Sizes"
        classes="grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
      >
        <vk-checkbox
          v-for="size in sizeOptions.general"
          :key="size.value"
          :size="size.value"
          :label="size.label"
          :model-value="extendedForm.exampleChecked"
        />

        <template #code>
          <code-block
            :code="defaultSnippet('size', sizeOptions.general)"
            :copy="defaultSnippet('size', sizeOptions.general)"
          />
        </template>
      </example-section>

      <example-section title="Disabled">
        <vk-checkbox
          label="Disabled"
          disabled
          :model-value="extendedForm.exampleChecked"
        />

        <template #code>
          <code-block
            :code="booleanSnippet('disabled')"
            :copy="booleanSnippet('disabled')"
          />
        </template>
      </example-section>

      <example-section title="Flat">
        <vk-checkbox
          label="Flat"
          flat
          :model-value="extendedForm.exampleChecked"
        />

        <template #code>
          <code-block
            :code="booleanSnippet('flat')"
            :copy="booleanSnippet('flat')"
          />
        </template>
      </example-section>

      <example-section title="Readonly">
        <vk-checkbox
          label="Readonly"
          read-only
          :model-value="extendedForm.exampleChecked"
        />

        <template #code>
          <code-block
            :code="booleanSnippet('readonly')"
            :copy="booleanSnippet('readonly')"
          />
        </template>
      </example-section>

      <example-section title="Indeterminate">
        <vk-checkbox
          v-model="extendedForm.exampleIndeterminate"
          label="Inderterminate"
          indeterminate
        />

        <template #code>
          <code-block
            :code="booleanSnippet('indeterminate')"
            :copy="booleanSnippet('indeterminate')"
          />
        </template>
      </example-section>

      <example-section
        title="Label Position"
        classes="sm:grid-cols-2"
      >
        <vk-checkbox
          v-for="pos in position"
          :key="pos.value"
          :label="pos.label"
          :label-position="pos.value"
          :model-value="extendedForm.exampleChecked"
        />

        <template #code>
          <code-block
            :code="defaultSnippet('label-position', position)"
            :copy="defaultSnippet('label-position', position)"
          />
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
