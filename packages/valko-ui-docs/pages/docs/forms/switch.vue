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
  modelValue: false,
  flat: false
})

const position: SelectOption<LabelPosition>[] = [
  { value: 'right', label: 'Right' },
  { value: 'left', label: 'Left' }
]

const exampleSectionForm = reactive({
  colors: Array(colorOptions.length).fill(false),
  variants: Array(variantOptions.general.length).fill(false),
  shapes: Array(shapeOptions.general.length).fill(false),
  sizes: Array(sizeOptions.general.length).fill(false),
  position: [false, false],
  readonly: false
})

const apiData: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Switch.',
    values: 'primary, neutral, error, warning, info, success',
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
        :flat="form.flat"
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
        v-model="form.readonly"
        label="Readonly"
      />
      <vk-checkbox
        v-model="form.flat"
        label="Flat"
      />
    </template>

    <template #examples>
      <example-section title="Colors">
        <vk-switch
          v-for="(color, index) in colorOptions"
          :key="color.value"
          v-model="exampleSectionForm['colors'][index]"
          :color="color.value"
          :label="color.label"
        />
      </example-section>

      <example-section title="Variants">
        <vk-switch
          v-for="(variant, index) in variantOptions.general"
          :key="variant.value"
          v-model="exampleSectionForm['variants'][index]"
          :variant="variant.value"
          :label="variant.label"
        />
      </example-section>

      <example-section title="Shape">
        <vk-switch
          v-for="(shape, index) in shapeOptions.general"
          :key="shape.value"
          v-model="exampleSectionForm['shapes'][index]"
          :shape="shape.value"
          :label="shape.label"
        />
      </example-section>

      <example-section title="Size">
        <vk-switch
          v-for="(size, index) in sizeOptions.general"
          :key="size.value"
          v-model="exampleSectionForm['sizes'][index]"
          :size="size.value"
          :label="size.label"
        />
      </example-section>

      <example-section title="Disabled">
        <vk-switch disabled />
      </example-section>

      <example-section title="Readonly">
        <vk-switch
          v-model="exampleSectionForm['readonly']"
          readonly
        />
      </example-section>

      <example-section title="Position">
        <vk-switch
          v-for="(pos, index) in position"
          :key="pos.value"
          v-model="exampleSectionForm['position'][index]"
          :label-position="pos.value"
          :label="pos.label"
        />
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section title="Switch Props">
          <vk-table
            :headers="propHeaders"
            :data="apiData"
          />
        </example-section>

        <example-section title="Switch Emits">
          <vk-table
            :headers="emitHeaders"
            :data="emitData"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
