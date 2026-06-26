<script setup lang="ts">
import type { SelectOption, LabelPosition, RadioProps } from '#valkoui'

const form = ref<RadioProps>({
  variant: 'filled',
  color: 'primary',
  size: 'md',
  name: 'Radio',
  value: 'Radio-1',
  helpertext: '',
  shape: 'rounded',
  labelPosition: 'right',
  disabled: false,
  readonly: false
})

const position: SelectOption<LabelPosition>[] = [
  { value: 'right', label:'Right' },
  { value: 'left', label:'Left' }
]

const radioStates = reactive(
  Object.fromEntries([
    ...colorOptions.general,
    ...variantOptions.general,
    ...shapeOptions.general,
    ...sizeOptions.general,
    { value: 'readonly' }
  ].map(opt => [opt.value, opt.value]))
)

const apiData: PropData[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Radio.',
    values: 'primary, secondary, negative, warning, accent, positive',
    default: 'primary',
    apiType: 'custom-string'
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The variant of the Radio.',
    values: 'filled, outlined, ghost',
    default: 'filled',
    apiType: 'custom-string'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Radio.',
    values: 'xs, sm, md, lg',
    default: 'md',
    apiType: 'custom-string'
  },
  {
    key: 'disabledProp',
    prop: 'disabled',
    required: false,
    description: 'Wheter the Radio is disabled or not.',
    values: 'boolean',
    default: 'false',
    apiType: 'primitive'
  },
  {
    key: 'readonlyProp',
    prop: 'readonly',
    required: false,
    description: 'Wheter the Radio is readonly or not.',
    values: 'boolean',
    default: 'false',
    apiType: 'primitive'
  },
  {
    key: 'helpertextProp',
    prop: 'helpertext',
    required: false,
    description: 'Displays a hint under the Radio.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'positionProp',
    prop: 'position',
    required: false,
    description: 'Wheter the label is displayed left or right.',
    values: 'boolean',
    default: 'false',
    apiType: 'primitive'
  },
  {
    key: 'nameProp',
    prop: 'name',
    required: true,
    description: 'The name of the Radio, used when submitting an HTML form.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'modelValueProp',
    prop: 'modelValue',
    required: true,
    description: 'The value used to identify wich Radio is selected.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'valueProp',
    prop: 'value',
    required: true,
    description: 'The current selected value. (controlled).',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'labelProp',
    prop: 'label',
    required: true,
    description: 'The label of the Radio.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Radio.',
    values: 'soft, rounded, square',
    default: 'rounded',
    apiType: 'custom-string'
  },
  {
    key: 'ariaLabelProp',
    prop: 'ariaLabel',
    required: false,
    description: 'Defines a string value that labels the radio for screen readers.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'ariaLabelledByProp',
    prop: 'ariaLabelledBy',
    required: false,
    description: 'References the ID of the element that labels the radio.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'ariaDescribedByProp',
    prop: 'ariaDescribedBy',
    required: false,
    description: 'References the ID of the element that provides a description for the radio.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'styleSlotsProps',
    prop: 'styleSlots',
    required: false,
    description: 'Custom styles for different parts of the Radio component.',
    values: 'RadioSlots',
    default: '',
    apiType: 'custom-type'
  }
]

const styleSlotsInterface: PropData[] = [
  {
    key: 'container',
    prop: 'container',
    required: false,
    description: 'Root container for the radio component.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'radioContainer',
    prop: 'radioContainer',
    required: false,
    description: 'Container for the radio input and label.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'stateLayer',
    prop: 'stateLayer',
    required: false,
    description: 'Layer for visual state effects (focus, hover, etc).',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'radio',
    prop: 'radio',
    required: false,
    description: 'The visual representation of the radio button.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'icon',
    prop: 'icon',
    required: false,
    description: 'Icon shown when the radio is checked.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'input',
    prop: 'input',
    required: false,
    description: 'Native radio input element (hidden since we use a custom radio).',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'label',
    prop: 'label',
    required: false,
    description: 'Label for the radio input.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'helpertext',
    prop: 'helpertext',
    required: false,
    description: 'Helper text displayed below the radio.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  }
]

const emitData: EmitData[] = [
  {
    key: 'updateModelValueEmit',
    event: 'update:modelValue',
    description: 'Emitted when this radio button is selected.',
    values: 'any',
    type: '(value: any) => void',
    apiType: 'primitive'
  }
]

const radios = [
  { label: 'Radio-1', value: 'radio-1' },
  { label: 'Radio-2', value: 'radio-2' },
  { label: 'Radio-3', value: 'radio-3' }
]

const generateSnippet = snippetGeneratorFactory('vk-radio')

const styles = {
  colors: {
    slotContainer: [
      'grid-cols-2',
      'md:grid-cols-3',
      'lg:grid-cols-6'
    ]
  },
  default: {
    slotContainer: [
      'grid-cols-2',
      'md:grid-cols-3'
    ]
  },
  sizes: {
    slotContainer: [
      'grid-cols-2',
      'md:grid-cols-3',
      'lg:grid-cols-4'
    ]
  }
}
</script>

<template>
  <doc-section
    title="Radio"
    description="Selection element that allows the user to choose an exclusive option among several. Radio buttons are used when users need to select only one option from a predefined list of choices."
  >
    <template #playground-view>
      <div class="flex flex-col gap-2">
        <vk-radio
          v-for="radio in radios"
          :key="radio.value"
          v-model="form.value"
          :variant="form.variant"
          :color="form.color"
          :size="form.size"
          :name="form.name"
          :disabled="form.disabled"
          :readonly="form.readonly"
          :label-position="form.labelPosition"
          :shape="form.shape"
          :helpertext="form.helpertext"
          :label="radio.label"
          :value="radio.value"
        />
      </div>
    </template>

    <template #playground-options>
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
    </template>

    <template #examples>
      <example-section
        title="Colors"
        :style-slots="styles.colors"
      >
        <vk-radio
          v-for="color in colorOptions.general"
          :key="color.value"
          v-model="radioStates[color.value]"
          :name="color.value"
          :color="color.value"
          :label="color.label"
          :value="color.value"
        />

        <template #code>
          <code-block :code="generateSnippet<string>('color', { values: colorOptions.general.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section
        title="Variants"
        :style-slots="styles.default"
      >
        <vk-radio
          v-for="variant in variantOptions.general"
          :key="variant.value"
          v-model="radioStates[variant.value]"
          :name="variant.value"
          :variant="variant.value"
          :label="variant.label"
          :value="variant.value"
        />

        <template #code>
          <code-block :code="generateSnippet<string>('variant', { values: variantOptions.general.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section
        title="Shapes"
        :style-slots="styles.default"
      >
        <vk-radio
          v-for="shape in shapeOptions.general"
          :key="shape.value"
          v-model="radioStates[shape.value]"
          :name="shape.value"
          :shape="shape.value"
          :label="shape.label"
          :value="shape.value"
        />

        <template #code>
          <code-block :code="generateSnippet<string>('shape', { values: shapeOptions.general.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section
        title="Sizes"
        :style-slots="styles.sizes"
      >
        <vk-radio
          v-for="size in sizeOptions.general"
          :key="size.value"
          v-model="radioStates[size.value]"
          :name="size.value"
          :size="size.value"
          :label="size.label"
          :value="size.value"
        />

        <template #code>
          <code-block :code="generateSnippet<string>('size', { values: sizeOptions.general.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section title="Disabled">
        <vk-radio
          disabled
          label="Disabled"
        />

        <template #code>
          <code-block :code="generateSnippet<boolean>('disabled', { values: [true] })" />
        </template>
      </example-section>

      <example-section title="Readonly">
        <vk-radio
          v-model="radioStates['readonly']"
          name="readonly"
          value="readonly"
          readonly
          label="Readonly"
        />

        <template #code>
          <code-block :code="generateSnippet<boolean>('readonly', { values: [true] })" />
        </template>
      </example-section>
    </template>

    <template #api>
      <api-table
        name="Radio"
        :tables="[
          { title: 'Props', data: apiData, headers: 'props' },
          { title: 'Emits', data: emitData, headers: 'emits' },
          { title: 'Style Slots', data: styleSlotsInterface, headers: 'interface' }
        ]"
      />
    </template>
  </doc-section>
</template>
