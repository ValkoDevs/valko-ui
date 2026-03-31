<script setup lang="ts">
import { useNotification, type TextareaProps } from '#valkoui'

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

const iconsInForm = ref({
  left: false,
  right: false
})

const apiData: PropData[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Textarea.',
    values: 'primary, secondary, negative, warning, accent, positive',
    default: 'primary',
    apiType: 'custom-string'
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The variant of the Textarea.',
    values: 'filled, outlined, ghost',
    default: 'filled',
    apiType: 'custom-string'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Textarea.',
    values: 'xs, sm, md, lg',
    default: 'md',
    apiType: 'custom-string'
  },
  {
    key: 'disabledProp',
    prop: 'disabled',
    required: false,
    description: 'Whether the Textarea is disabled or not.',
    values: 'boolean',
    default: 'false',
    apiType: 'primitive'
  },
  {
    key: 'modelValueProp',
    prop: 'modelValue',
    required: false,
    description: 'The v-model for the Textarea',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'readonlyProp',
    prop: 'readonly',
    required: false,
    description: 'Whether the Textarea is readonly or not.',
    values: 'boolean',
    default: 'false',
    apiType: 'primitive'
  },
  {
    key: 'labelProp',
    prop: 'label',
    required: false,
    description: 'The label for the Textarea',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'helpertextProp',
    prop: 'helpertext',
    required: false,
    description: 'A hint for the Textarea',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Textarea',
    values: 'soft, rounded, square',
    default: 'soft',
    apiType: 'custom-string'
  },
  {
    key: 'ariaLabelProp',
    prop: 'ariaLabel',
    required: false,
    description: 'Accessible text label read by assistive technologies when no visible label is provided.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'ariaLabelledByProp',
    prop: 'ariaLabelledBy',
    required: false,
    description: 'ID reference to an element that labels the textarea (e.g. a visible <label>).',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'ariaDescribedByProp',
    prop: 'ariaDescribedBy',
    required: false,
    description: 'ID reference to an element that further describes the textarea, such as helper or error text.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'ariaRequiredProp',
    prop: 'ariaRequired',
    required: false,
    description: 'Marks the textarea as required for form submission.',
    values: 'boolean',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'ariaInvalidProp',
    prop: 'ariaInvalid',
    required: false,
    description: 'Indicates that the current value entered into the textarea is invalid.',
    values: 'boolean',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'styleSlotsProps',
    prop: 'styleSlots',
    required: false,
    description: 'Custom styles for different parts of the Textarea component.',
    values: 'TextareaSlots',
    default: '',
    apiType: 'custom-type'
  }
]

const styleSlotsInterface: PropData[] = [
  {
    key: 'container',
    prop: 'container',
    required: false,
    description: 'Root container for the textarea component.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'field',
    prop: 'field',
    required: false,
    description: 'Wrapper for the textarea and icons.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'textarea',
    prop: 'textarea',
    required: false,
    description: 'The textarea element itself.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'label',
    prop: 'label',
    required: false,
    description: 'Label for the textarea.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'helper',
    prop: 'helper',
    required: false,
    description: 'Helper text displayed below the textarea.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'counter',
    prop: 'counter',
    required: false,
    description: 'Character counter for the textarea.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'footer',
    prop: 'footer',
    required: false,
    description: 'Footer container for helper text and counter.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'icons',
    prop: 'icons',
    required: false,
    description: 'Base styles for icon containers.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'leftIcon',
    prop: 'leftIcon',
    required: false,
    description: 'Styles for the left icon slot.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'rightIcon',
    prop: 'rightIcon',
    required: false,
    description: 'Styles for the right icon slot.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  }
]

const emitData: EmitData[] = [
  {
    key: 'updateModelValueEmit',
    event: 'update:modelValue',
    description: 'Emitted when the value of the textarea changes.',
    values: 'value: string',
    type: '(value: string) => void',
    apiType: 'primitive'
  },
  {
    key: 'leftIconClickEmit',
    event: 'leftIconClick',
    description: 'Emitted when the left icon of the textarea is clicked.',
    values: '',
    type: '() => void',
    apiType: 'function'
  },
  {
    key: 'rightIconClickEmit',
    event: 'rightIconClick',
    description: 'Emitted when the right icon of the textarea is clicked.',
    values: '',
    type: '() => void',
    apiType: 'function'
  }
]

const slotData: SlotData[] = [
  {
    key: 'leftIconSlot',
    name: 'left-icon',
    description: 'Slot for placing an icon on the left side of the textarea field. This slot is typically used to include an icon for visual enhancement or to indicate textarea type.',
    example: '<template #left-icon>\n  <!-- Your icon component goes here -->\n</template>',
    apiType: 'slot'
  },
  {
    key: 'rightIconSlot',
    name: 'right-icon',
    description: 'Slot for placing an icon on the right side of the textarea field. This slot is typically used to include an icon for actions like clear the textarea.',
    example: '<template #right-icon>\n  <!-- Your icon component goes here -->\n</template>',
    apiType: 'slot'
  }
]

const generateSnippet = snippetGeneratorFactory('vk-textarea')

const iconSnippet = `<template>
  <vk-textarea>
    <template #left-icon>
      <vk-icon name="home" />
    </template>
  </vk-textarea>

  <vk-textarea>
    <template #right-icon>
      <vk-icon name="home" />
    </template>
  </vk-textarea>
</template>
`

const styles = {
  default: {
    slotContainer: [
      'sm:grid-cols-2',
      'md:grid-cols-3'
    ]
  },
  sizes: {
    slotContainer: [
      'sm:grid-cols-2',
      'md:grid-cols-3',
      'lg:grid-cols-4'
    ]
  },
  icons: {
    slotContainer: [
      'sm:grid-cols-2'
    ]
  }
}
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
        @left-icon-click="useNotification({ text: 'Left Icon!!', color: 'surface' })"
        @right-icon-click="useNotification({ text: 'Right Icon!!', color: 'surface' })"
      >
        <template
          v-if="iconsInForm.left"
          #left-icon
        >
          <vk-icon name="home" />
        </template>
        <template
          v-if="iconsInForm.right"
          #right-icon
        >
          <vk-icon name="home" />
        </template>
      </vk-textarea>
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
        :options="colorOptions.general"
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
      <vk-checkbox
        v-model="iconsInForm.left"
        label="Left Icon"
      />
      <vk-checkbox
        v-model="iconsInForm.right"
        label="Right Icon"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        :style-slots="styles.default"
      >
        <vk-textarea
          v-for="color in colorOptions.general"
          :key="color.value"
          :color="color.value"
          :label="color.label"
        />

        <template #code>
          <code-block :code="generateSnippet<string>('color', { values: colorOptions.general.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section
        title="Variants"
        :style-slots="styles.default"
      >
        <vk-textarea
          v-for="variant in variantOptions.general"
          :key="variant.value"
          :variant="variant.value"
          :label="variant.label"
        />

        <template #code>
          <code-block :code="generateSnippet<string>('variant', { values: variantOptions.general.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section
        title="Shapes"
        :style-slots="styles.default"
      >
        <vk-textarea
          v-for="shape in shapeOptions.general"
          :key="shape.value"
          :shape="shape.value"
          :label="shape.label"
        />

        <template #code>
          <code-block :code="generateSnippet<string>('shape', { values: shapeOptions.general.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section
        title="Sizes"
        :style-slots="styles.sizes"
      >
        <vk-textarea
          v-for="size in sizeOptions.general"
          :key="size.value"
          :size="size.value"
          :label="size.label"
        />

        <template #code>
          <code-block :code="generateSnippet<string>('size', { values: sizeOptions.general.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section title="Disabled">
        <vk-textarea
          disabled
          label="Disabled"
        />

        <template #code>
          <code-block :code="generateSnippet<boolean>('disabled', { values: [true] })" />
        </template>
      </example-section>

      <example-section title="Readonly">
        <vk-textarea
          readonly
          label="Readonly"
          model-value="Readonly Example"
        />

        <template #code>
          <code-block :code="generateSnippet<boolean>('readonly', { values: [true] })" />
        </template>
      </example-section>

      <example-section
        title="Icons"
        :style-slots="styles.icons"
      >
        <vk-textarea
          label="Left Icon"
        >
          <template #left-icon>
            <vk-icon name="home" />
          </template>
        </vk-textarea>

        <vk-textarea
          label="Right Icon"
        >
          <template #right-icon>
            <vk-icon name="home" />
          </template>
        </vk-textarea>

        <template #code>
          <code-block :code="iconSnippet" />
        </template>
      </example-section>
    </template>

    <template #api>
      <api-table
        name="Textarea"
        :tables="[
          { title: 'Props', data: apiData, headers: 'props' },
          { title: 'Emits', data: emitData, headers: 'emits' },
          { title: 'Slots', data: slotData, headers: 'slots' },
          { title: 'Style Slots', data: styleSlotsInterface, headers: 'interface' }
        ]"
      />
    </template>
  </doc-section>
</template>
