<script setup lang="ts">
import type { SwitchProps, TableItem, LabelPosition, SelectOption } from '#valkoui'

const form = ref<SwitchProps>({
  variant: 'filled',
  color: 'primary',
  shape: 'soft',
  size: 'md',
  label: 'Switch',
  labelPosition: 'right',
  disabled: false,
  readonly: false,
  modelValue: false
})

const position: SelectOption<LabelPosition>[] = [
  { value: 'right', label: 'Right' },
  { value: 'left', label: 'Left' }
]

const switchStates = reactive(
  Object.fromEntries([
    ...colorOptions.general,
    ...variantOptions.general,
    ...shapeOptions.general,
    ...sizeOptions.general,
    ...position,
    { value: 'readonly' }
  ].map(opt => [opt.value, true]))
)

const apiData: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Switch.',
    values: 'primary, secondary, negative, warning, accent, positive',
    default: 'primary'
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The variant of the Switch.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The color theme of the Switch.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    key: 'disabledProp',
    prop: 'disabled',
    required: false,
    description: 'Wheter the Switch is disabled or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'readonlyProp',
    prop: 'readonly',
    required: false,
    description: 'Wheter the Switch is readonly or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'modelValueProp',
    prop: 'modelValue',
    required: false,
    description: 'The current value of the Switch.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'positionProp',
    prop: 'position',
    required: false,
    description: 'Wheter the label is displayed on the right or left side of the Switch.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'labelProp',
    prop: 'label',
    required: false,
    description: 'The string that\'s gonna be displayed on the label',
    values: 'string',
    default: 'Switch'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Switch.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    key: 'ariaLabelProp',
    prop: 'aria-label',
    required: false,
    description: 'Defines a string value that labels the switch element.',
    values: 'string',
    default: ''
  },
  {
    key: 'ariaLabelledByProp',
    prop: 'aria-labelledby',
    required: false,
    description: 'ID reference to a label element that labels the switch.',
    values: 'string',
    default: ''
  },
  {
    key: 'ariaDescribedByProp',
    prop: 'aria-describedby',
    required: false,
    description: 'ID reference to an element that describes the switch (e.g., helper text).',
    values: 'string',
    default: ''
  },
  {
    key: 'styleSlotsProps',
    prop: 'styleSlots',
    required: false,
    description: 'Custom styles for different parts of the Switch component.',
    values: 'SwitchSlots',
    default: ''
  }
]

const styleSlotsInterface: TableItem[] = [
  {
    key: 'container',
    prop: 'container',
    description: 'Root container for the switch component.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'content',
    prop: 'content',
    description: 'Wrapper for the label and switch.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'labelSlot',
    prop: 'labelSlot',
    description: 'Styles for the label element.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'switchSlot',
    prop: 'switchSlot',
    description: 'Styles for the switch track.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'thumb',
    prop: 'thumb',
    description: 'Styles for the switch thumb (the moving part).',
    values: 'string[]',
    default: ''
  }
]

const emitData: TableItem[] = [
  {
    key: 'updateModelValueEmit',
    event: 'update:modelValue',
    description: 'Emitted when the value of the switch changes.',
    values: 'boolean',
    type: '(value: boolean) => void'
  }
]

const generateSnippet = snippetGeneratorFactory('vk-switch')

const styles = {
  default: [
    'grid-cols-2',
    'md:grid-cols-3'
  ],
  colors: [
    'grid-cols-2',
    'md:grid-cols-3',
    'lg:grid-cols-6'
  ],
  sizes: [
    'grid-cols-2',
    'md:grid-cols-3',
    'lg:grid-cols-4'
  ],
  label: [
    'grid-cols-2'
  ]
}
</script>

<template>
  <doc-section
    title="Switch"
    description="Toggle control that allows the user to switch between two states. Switches are used to enable or disable a particular setting or feature and provide a visual indication of the current state."
  >
    <template #playground-view>
      <vk-switch
        v-model="form.modelValue"
        :color="form.color"
        :variant="form.variant"
        :shape="form.shape"
        :size="form.size"
        :label="form.label"
        :disabled="form.disabled"
        :readonly="form.readonly"
        :label-position="form.labelPosition"
      />
    </template>

    <template #playground-options>
      <vk-input
        v-model="form.label"
        label="Label"
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
        :style-slots="{ slotContainer: styles.colors }"
      >
        <vk-switch
          v-for="color in colorOptions.general"
          :key="color.value"
          v-model="switchStates[color.value]"
          :color="color.value"
          :label="color.label"
        />

        <template #code>
          <code-block :code="generateSnippet<string>('color', { values: colorOptions.general.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section
        title="Variants"
        :style-slots="{ slotContainer: styles.default }"
      >
        <vk-switch
          v-for="variant in variantOptions.general"
          :key="variant.value"
          v-model="switchStates[variant.value]"
          :variant="variant.value"
          :label="variant.label"
        />

        <template #code>
          <code-block :code="generateSnippet<string>('variant', { values: variantOptions.general.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section
        title="Shape"
        :style-slots="{ slotContainer: styles.default }"
      >
        <vk-switch
          v-for="shape in shapeOptions.general"
          :key="shape.value"
          v-model="switchStates[shape.value]"
          :shape="shape.value"
          :label="shape.label"
        />

        <template #code>
          <code-block :code="generateSnippet<string>('shape', { values: shapeOptions.general.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section
        title="Size"
        :style-slots="{ slotContainer: styles.sizes }"
      >
        <vk-switch
          v-for="size in sizeOptions.general"
          :key="size.value"
          v-model="switchStates[size.value]"
          :size="size.value"
          :label="size.label"
        />

        <template #code>
          <code-block :code="generateSnippet<string>('size', { values: sizeOptions.general.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section title="Disabled">
        <vk-switch disabled />

        <template #code>
          <code-block :code="generateSnippet<boolean>('disabled', { values: [true] })" />
        </template>
      </example-section>

      <example-section title="Readonly">
        <vk-switch
          v-model="switchStates['readonly']"
          readonly
        />

        <template #code>
          <code-block :code="generateSnippet<boolean>('readonly', { values: [true] })" />
        </template>
      </example-section>

      <example-section
        title="Label Position"
        :style-slots="{ slotContainer: styles.label }"
      >
        <vk-switch
          v-for="pos in position"
          :key="pos.value"
          v-model="switchStates[pos.value]"
          :label-position="pos.value"
          :label="pos.label"
        />

        <template #code>
          <code-block :code="generateSnippet<string>('label-position', { values: position.map(o => o.value) })" />
        </template>
      </example-section>
    </template>

    <template #api>
      <h3>Switch Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="apiData"
      />

      <h3>Style Slots Interface</h3>
      <vk-table
        :headers="propHeaders"
        :data="styleSlotsInterface"
      />

      <h3>Switch Emits</h3>
      <vk-table
        :headers="emitHeaders"
        :data="emitData"
      />
    </template>
  </doc-section>
</template>
