<script setup lang="ts">
import type { RatingProps } from '#valkoui'

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

const ratingProps: PropData[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Rating.',
    values: 'primary, secondary, negative, warning, accent, positive, surface',
    default: 'primary',
    apiType: 'custom-string'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Rating.',
    values: 'xs, sm, md, lg',
    default: 'md',
    apiType: 'custom-string'
  },
  {
    key: 'iconNameProp',
    prop: 'iconName',
    required: false,
    description: 'The name of the icon used for rating items. Should correspond to an icon available in the ValkoUI icon set.',
    values: 'string',
    default: 'star',
    apiType: 'primitive'
  },
  {
    key: 'maxProp',
    prop: 'max',
    required: false,
    description: 'The maximum rating value, which determines the number of rating items displayed.',
    values: 'number',
    default: '5',
    apiType: 'primitive'
  },
  {
    key: 'modelValueProp',
    prop: 'modelValue',
    required: false,
    description: 'The current rating value. Supports half values when the half prop is enabled.',
    values: 'number',
    default: '0',
    apiType: 'primitive'
  },
  {
    key: 'halfProp',
    prop: 'half',
    required: false,
    description: 'Whether half rating values are allowed.',
    values: 'boolean',
    default: false,
    apiType: 'primitive'
  },
  {
    key: 'disabledProp',
    prop: 'disabled',
    required: false,
    description: 'Whether the Rating is disabled. Disabled ratings cannot be interacted with.',
    values: 'boolean',
    default: false,
    apiType: 'primitive'
  },
  {
    key: 'readonlyProp',
    prop: 'readonly',
    required: false,
    description: 'Whether the Rating is read-only. Read-only ratings display the current value without allowing changes.',
    values: 'boolean',
    default: false,
    apiType: 'primitive'
  },
  {
    key: 'ariaLabelProp',
    prop: 'ariaLabel',
    required: false,
    description: 'Accessible label for the rating group.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'ariaLabelledByProp',
    prop: 'ariaLabelledBy',
    required: false,
    description: 'ID of the element that labels the rating group.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'ariaDescribedByProp',
    prop: 'ariaDescribedBy',
    required: false,
    description: 'ID of the element that describes the rating group.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'styleSlotsProps',
    prop: 'styleSlots',
    required: false,
    description: 'Custom styles for different parts of the Rating component.',
    values: 'RatingSlots',
    default: '',
    apiType: 'custom-type'
  }
]

const ratingEmits: EmitData[] = [
  {
    key: 'update:modelValue',
    event: 'update:modelValue',
    type: '(value: number) => void',
    values: '',
    description: 'Emitted when the rating value changes.',
    apiType: 'event'
  }
]

const ratingSlots: SlotData[] = [
  {
    key: 'defaultSlot',
    name: 'default',
    description: 'Scoped slot for customizing the rating content.',
    example: '<template #default="{ items, setValue, displayValue, isDisabled, isReadonly }">\n  <!-- Custom rating content -->\n</template>',
    apiType: 'slot'
  }
]

const ratingSlotPropsInterface: PropData[] = [
  {
    key: 'items',
    prop: 'items',
    required: false,
    description: 'Array of rating items used to render custom rating content.',
    values: 'RatingItem[]',
    default: '',
    apiType: 'custom-type'
  },
  {
    key: 'value',
    prop: 'value',
    required: false,
    description: 'The currently selected rating value.',
    values: 'number',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'displayValue',
    prop: 'displayValue',
    required: false,
    description: 'The value currently displayed by the component.',
    values: 'number',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'setValue',
    prop: 'setValue',
    required: false,
    description: 'Function used to update the rating value. Receives the mouse event and item index.',
    values: '(event: MouseEvent, index: number) => void',
    default: '',
    apiType: 'function'
  },
  {
    key: 'isDisabled',
    prop: 'isDisabled',
    required: false,
    description: 'Whether the Rating component is disabled.',
    values: 'boolean',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'isReadonly',
    prop: 'isReadonly',
    required: false,
    description: 'Whether the Rating component is read-only.',
    values: 'boolean',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'clearHover',
    prop: 'clearHover',
    required: false,
    description: 'Function to clear the hover state of the rating items.',
    values: '() => void',
    default: '',
    apiType: 'function'
  }
]

const ratingItemInterface: PropData[] = [
  {
    key: 'index',
    prop: 'index',
    required: false,
    description: 'The 1-based index of the rating item.',
    values: 'number',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'fill',
    prop: 'fill',
    required: false,
    description: 'The fill percentage of the rating item, from 0 to 100. Used to determine whether the item is empty, partially filled, or fully filled.',
    values: 'number',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'active',
    prop: 'active',
    required: false,
    description: 'Whether the rating item is included in the current selected rating value.',
    values: 'boolean',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'hovering',
    prop: 'hovering',
    required: false,
    description: 'Whether the rating item is part of the current hover preview state.',
    values: 'boolean',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'delay',
    prop: 'delay',
    required: false,
    description: 'The animation delay in milliseconds applied to this rating item.',
    values: 'number',
    default: '',
    apiType: 'primitive'
  }
]

const styleSlotsInterface: PropData[] = [
  {
    key: 'container',
    prop: 'container',
    required: false,
    description: 'Custom classes applied to the root Rating container.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'iconContainer',
    prop: 'iconContainer',
    required: false,
    description: 'Custom classes applied to the wrapper element of each rating item.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'iconBase',
    prop: 'iconBase',
    required: false,
    description: 'Custom classes applied to the base icon layer of each rating item.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'iconOverlay',
    prop: 'iconOverlay',
    required: false,
    description: 'Custom classes applied to the overlay icon layer used to display partial fills.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  }
]

const generateSnippet = snippetGeneratorFactory('vk-rating')

const exampleValues = reactive({
  colors: {
    primary: 3,
    secondary: 3,
    accent: 3,
    positive: 3,
    negative: 3,
    surface: 3,
    warning: 3
  },
  sizes: {
    xs: 3,
    sm: 3,
    md: 3,
    lg: 3
  },
  half: 3,
  readonly: 3,
  disabled: 3,
  slot: 3
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

const exampleSnippets = {
  customSlot: `<vk-rating v-model="exampleValues['slot']">
  <template #default="{ items, setValue }">
    <div class="flex gap-2">
      <vk-button
        v-for="item in items"
        :key="item.index"
        :variant="item.fill > 0 ? 'filled' : 'link'"
        color="primary"
        @click="(e: MouseEvent) => setValue(e, item.index)"
      >
        {{ item.index }}
      </vk-button>
    </div>
  </template>
</vk-rating>`
}
</script>

<template>
  <doc-section title="Rating">
    <template #description>
      <div class="flex flex-col gap-2">
        <span>
          Visual component that allows users to provide feedback by selecting a rating value.
          Ratings are commonly used to evaluate products, services, or content.
        </span>

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
          :key="color.value"
          class="flex flex-col gap-2"
        >
          <span>{{ color.label }}</span>

          <vk-rating
            v-model="exampleValues.colors[color.value]"
            :color="color.value"
          />
        </div>

        <template #code>
          <code-block
            :code="generateSnippet<string>('color', {
              values: colorOptions.general.map(o => o.value)
            })"
          />
        </template>
      </example-section>

      <example-section
        title="Sizes"
        :style-slots="styles.default"
      >
        <div
          v-for="size in sizeOptions.general"
          :key="size.value"
          class="flex flex-col gap-2"
        >
          <span>{{ size.label }}</span>

          <vk-rating
            v-model="exampleValues.sizes[size.value]"
            :size="size.value"
          />
        </div>

        <template #code>
          <code-block
            :code="generateSnippet<string>('size', {
              values: sizeOptions.general.map(o => o.value)
            })"
          />
        </template>
      </example-section>

      <example-section
        title="Half"
        :style-slots="styles.default"
      >
        <vk-rating
          v-model="exampleValues.half"
          half
        />

        <template #code>
          <code-block
            :code="generateSnippet<boolean>('half', {
              values: [true]
            })"
          />
        </template>
      </example-section>

      <example-section
        title="Readonly"
        :style-slots="styles.default"
      >
        <vk-rating
          v-model="exampleValues.readonly"
          readonly
        />

        <template #code>
          <code-block
            :code="generateSnippet<boolean>('readonly', {
              values: [true]
            })"
          />
        </template>
      </example-section>

      <example-section
        title="Disabled"
        :style-slots="styles.default"
      >
        <vk-rating
          v-model="exampleValues.disabled"
          disabled
        />

        <template #code>
          <code-block
            :code="generateSnippet<boolean>('disabled', {
              values: [true]
            })"
          />
        </template>
      </example-section>

      <example-section
        title="Custom Slot"
        :style-slots="{ slotContainer: ['flex', 'justify-center'] }"
      >
        <vk-rating v-model="exampleValues.slot">
          <template #default="{ items, setValue }">
            <div class="flex gap-2">
              <vk-button
                v-for="item in items"
                :key="item.index"
                :variant="item.fill > 0 ? 'filled' : 'link'"
                color="primary"
                @click="(e: MouseEvent) => setValue(e, item.index)"
              >
                {{ item.index }}
              </vk-button>
            </div>
          </template>
        </vk-rating>

        <template #code>
          <code-block
            language="vue"
            :code="exampleSnippets.customSlot"
          />
        </template>
      </example-section>
    </template>

    <template #api>
      <api-table
        name="Rating"
        :tables="[
          { title: 'Props', headers: 'props', data: ratingProps },
          { title: 'Emits', headers: 'emits', data: ratingEmits },
          { title: 'Slots', headers: 'slots', data: ratingSlots },
          { title: 'Default Slot Props', headers: 'props', data: ratingSlotPropsInterface },
          { title: 'Rating Item', headers: 'interface', data: ratingItemInterface },
          { title: 'Style Slots', headers: 'interface', data: styleSlotsInterface }
        ]"
      />
    </template>
  </doc-section>
</template>
