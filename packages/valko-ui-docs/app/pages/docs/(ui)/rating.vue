<script setup lang="ts">
import type { TableItem, RatingProps } from '#valkoui'

const form = ref<RatingProps>({
  color: 'primary',
  size: 'md',
  iconName: 'star',
  max: 5,
  modelValue: 0,
  half: false,
  disabled: false,
  readonly: false
})

const ratingProps: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Rating.',
    values: 'primary, secondary, negative, warning, accent, positive, surface',
    default: 'primary'
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The variant of the Rating.',
    values: 'filled, outlined, ghost, gradient',
    default: 'filled'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Rating.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Rating.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    key: 'iconNameProp',
    prop: 'iconName',
    required: false,
    description: 'The name of the icon to use for the rating items. Should correspond to an icon in the ValkoUI icon set.',
    values: 'string (icon name) or null',
    default: 'star'
  },
  {
    key: 'maxProp',
    prop: 'max',
    required: false,
    description: 'The maximum rating value, which determines how many rating items are displayed.',
    values: 'number',
    default: 5
  },
  {
    key: 'modelValueProp',
    prop: 'modelValue',
    required: false,
    description: 'The current rating value. Can be a whole number or a half value if the "half" prop is true.',
    values: 'number',
    default: 0
  },
  {
    key: 'halfProp',
    prop: 'half',
    required: false,
    description: 'Whether to allow half ratings. If true, users can select half values (e.g., 2.5).',
    values: 'boolean',
    default: false
  },
  {
    key: 'disabledProp',
    prop: 'disabled',
    required: false,
    description: 'Whether the Rating is disabled. Disabled ratings cannot be interacted with and are typically styled differently to indicate their state.',
    values: 'boolean',
    default: false
  },
  {
    key: 'readonlyProp',
    prop: 'readonly',
    required: false,
    description: 'Whether the Rating is read-only. Read-only ratings display the current value but do not allow user interaction.',
    values: 'boolean',
    default: false
  },
  {
    key: 'styleSlotsProps',
    prop: 'styleSlots',
    required: false,
    description: 'Custom styles for different parts of the Rating component.',
    values: 'RatingSlots',
    default: ''
  }
]

const ratingEmits: TableItem[] = [
  {
    key: 'update:modelValue',
    event: 'update:modelValue',
    type: '(value: number) => void',
    values: '',
    description: 'Emitted when the rating value changes.'
  }
]

const ratingSlots: TableItem[] = [
  {
    key: 'defaultSlot',
    name: 'default',
    description: 'Slot for the main content of the rating.',
    example: '<template #default>\n  <p>This is the main content of the rating.</p>\n</template>'
  }
]

const styleSlotsInterface: TableItem[] = [
  {
    key: 'container',
    prop: 'container',
    required: false,
    description: 'Root container for the rating. Controls the overall layout and background.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'icon',
    prop: 'icon',
    required: false,
    description: 'Styles for the icons in the rating.',
    values: 'string[]',
    default: ''
  }
]

const generateSnippet = snippetGeneratorFactory('vk-rating')

const exampleValues = reactive<Record<string, number>>({
  primary: 3,
  secondary: 3,
  accent: 3,
  positive: 3,
  negative: 3,
  surface: 3,
  warning: 3,
  half: 3,
  readonly: 3,
  disabled: 3
})

const styles = {
  default: {
    slotContainer: [
      'sm:grid-cols-2',
      'md:grid-cols-3'
    ]
  },
  defaultAlt: {
    slotContainer: [
      'sm:grid-cols-2',
      'md:grid-cols-3',
      'lg:grid-cols-4'
    ]
  }
}
</script>

<template>
  <doc-section title="Rating">
    <template #description>
      <div class="flex flex-col gap-2">
        <span>Visual component that allows users to provide feedback by selecting a rating value. Ratings are commonly used to evaluate products, services, or content.</span>
        <span>
          See the
          <a
            href="https://tabler.io/icons"
            class="text-primary underline"
            target="_blank"
          >
            Tabler Icons
          </a>
          catalog for available icon names.
        </span>
      </div>
    </template>

    <template #playground-view>
      <vk-rating
        v-model="form.modelValue"
        :color="form.color"
        :size="form.size"
        :icon-name="form.iconName"
        :max="form.max"
        :half="form.half"
        :disabled="form.disabled"
        :readonly="form.readonly"
      />
    </template>

    <template #playground-options>
      <vk-select
        v-model="form.color"
        label="Color"
        size="sm"
        :options="colorOptions.general"
      />
      <vk-select
        v-model="form.size"
        label="Size"
        size="sm"
        :options="sizeOptions.general"
      />
      <vk-input
        v-model="form.iconName"
        label="Icon Name"
        size="sm"
      />
      <vk-checkbox
        v-model="form.half"
        label="Half"
      />
      <vk-checkbox
        v-model="form.readonly"
        label="Readonly"
      />
      <vk-checkbox
        v-model="form.disabled"
        label="Disabled"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        :style-slots="styles.default"
      >
        <div
          v-for="color in colorOptions.general"
          :key="color"
          class="flex flex-col gap-2"
        >
          <span>{{ color.label }}</span>
          <vk-rating
            v-model="exampleValues[`${color.value}`]"
            :color="color.value"
          />
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('color', { values: colorOptions.general.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section
        title="Half"
        :style-slots="styles.default"
      >
        <div class="flex flex-col gap-2">
          <span>Half</span>
          <vk-rating
            v-model="exampleValues['half']"
            half
          />
        </div>

        <template #code>
          <code-block :code="generateSnippet<boolean>('half', { values: [true] })" />
        </template>
      </example-section>

      <example-section
        title="Readonly"
        :style-slots="styles.default"
      >
        <div class="flex flex-col gap-2">
          <span>Readonly</span>
          <vk-rating
            v-model="exampleValues['readonly']"
            readonly
          />
        </div>

        <template #code>
          <code-block :code="generateSnippet<boolean>('readonly', { values: [true] })" />
        </template>
      </example-section>

      <example-section
        title="Disabled"
        :style-slots="styles.default"
      >
        <div class="flex flex-col gap-2">
          <span>Disabled</span>
          <vk-rating
            v-model="exampleValues['disabled']"
            disabled
          />
        </div>

        <template #code>
          <code-block :code="generateSnippet<boolean>('disabled', { values: [true] })" />
        </template>
      </example-section>
    </template>

    <template #api>
      <h3>Rating Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="ratingProps"
      />

      <h3>Style Slots Interface</h3>
      <vk-table
        :headers="propHeaders"
        :data="styleSlotsInterface"
      />

      <h3>Rating Emits</h3>
      <vk-table
        :headers="emitHeaders"
        :data="ratingEmits"
      />

      <h3>Rating Slots</h3>
      <vk-table
        :headers="slotHeaders"
        :data="ratingSlots"
      />
    </template>
  </doc-section>
</template>
