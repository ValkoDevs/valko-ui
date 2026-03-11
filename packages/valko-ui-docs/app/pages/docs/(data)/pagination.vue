<script setup lang="ts">
import type { PaginationProps } from '#valkoui'

const form = ref<PaginationProps>({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  modelValue: 1,
  pages: 20,
  elevated: false,
  disabled: false
})

const paginationProps: PropData[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The Pagination color theme.',
    values: 'primary, secondary, negative, warning, accent, positive, surface',
    default: 'primary',
    apiType: 'custom-string'
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The Pagination variant.',
    values: 'filled, outlined, ghost',
    default: 'filled',
    apiType: 'custom-string'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Pagination.',
    values: 'soft, rounded, square',
    default: 'soft',
    apiType: 'custom-string'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The Pagination size.',
    values: 'xs, sm, md, lg',
    default: 'md',
    apiType: 'custom-string'
  },
  {
    key: 'pagesProp',
    prop: 'pages',
    required: false,
    description: 'The total number of pages.',
    values: 'number',
    default: '1',
    apiType: 'primitive'
  },
  {
    key: 'modelValueProp',
    prop: 'modelValue',
    required: false,
    description: 'The current page.',
    values: 'number',
    default: '1',
    apiType: 'primitive'
  },
  {
    key: 'elevatedProp',
    prop: 'elevated',
    required: false,
    description: 'Wheter the Pagination is elevated or not.',
    values: 'boolean',
    default: 'false',
    apiType: 'primitive'
  },
  {
    key: 'disabledProp',
    prop: 'disabled',
    required: false,
    description: 'Wheter the Pagination is disabled or not.',
    values: 'boolean',
    default: 'false',
    apiType: 'primitive'
  },
  {
    key: 'ariaLabelProp',
    prop: 'ariaLabel',
    required: false,
    description: 'Accessible label for the pagination.',
    values: 'string',
    default: 'Pagination',
    apiType: 'primitive'
  },
  {
    key: 'styleSlotsProps',
    prop: 'styleSlots',
    required: false,
    description: 'Custom styles for different parts of the Pagination component.',
    values: 'PaginationSlots',
    default: '',
    apiType: 'custom-type'
  }
]

const styleSlotsInterface: PropData[] = [
  {
    key: 'nav',
    prop: 'nav',
    required: false,
    description: 'Styles for the navigation container (<nav> element).',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'button',
    prop: 'button',
    required: false,
    description: 'Styles for each page button.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'arrows',
    prop: 'arrows',
    required: false,
    description: 'Styles for the previous/next arrow icons.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  }
]

const paginationEmits: EmitData[] = [
  {
    key: 'updateModelValueEmit',
    event: 'update:modelValue',
    description: 'Emitted when the current page is changed.',
    values: 'number | string',
    type: '(page: number | string) => void',
    apiType: 'primitive'
  }
]

const generateSnippet = snippetGeneratorFactory('vk-pagination')

const styles = {
  grid: {
    slotContainer: [
      'md:grid-cols-2',
      'xl:grid-cols-3',
      'overflow-x-auto'
    ]
  },
  gridAlt: {
    slotContainer: [
      'overflow-x-auto'
    ]
  }
}
</script>

<template>
  <doc-section
    title="Pagination"
    description="Navigation that divides content into pages for easier viewing. Pagination is used to break up large amounts of content into manageable sections and provides users with controls to navigate between pages."
  >
    <template #playground-view>
      <vk-pagination
        v-model="form.modelValue"
        :color="form.color"
        :size="form.size"
        :variant="form.variant"
        :pages="form.pages"
        :elevated="form.elevated"
        :shape="form.shape"
        :disabled="form.disabled"
      />
    </template>

    <template #playground-options>
      <vk-select
        v-model="form.color"
        label="Color"
        size="sm"
        :options="colorOptions.withSurface"
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
      <vk-input
        v-model="form.pages"
        type="number"
        label="Total Pages"
        size="sm"
      />
      <vk-checkbox
        v-model="form.elevated"
        label="Elevated"
      />
      <vk-checkbox
        v-model="form.disabled"
        label="Disabled"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        :style-slots="styles.grid"
      >
        <div
          v-for="color in colorOptions.withSurface"
          :key="color.value"
          class="flex flex-col gap-2"
        >
          <span>{{ color.label }}</span>
          <vk-pagination
            v-model="form.modelValue"
            :color="color.value"
            :pages="form.pages"
          />
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('color', { values: colorOptions.withSurface.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section
        title="Variants"
        :style-slots="styles.grid"
      >
        <div
          v-for="variant in variantOptions.general"
          :key="variant.value"
          class="flex flex-col gap-2"
        >
          <span>{{ variant.label }}</span>
          <vk-pagination
            v-model="form.modelValue"
            :variant="variant.value"
            :pages="form.pages"
          />
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('variant', { values: variantOptions.general.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section
        title="Shapes"
        :style-slots="styles.grid"
      >
        <div
          v-for="shape in shapeOptions.general"
          :key="shape.value"
          class="flex flex-col gap-2"
        >
          <span>{{ shape.label }}</span>
          <vk-pagination
            v-model="form.modelValue"
            :shape="shape.value"
            :pages="form.pages"
          />
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('shape', { values: shapeOptions.general.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section
        title="Sizes"
        :style-slots="styles.grid"
      >
        <div
          v-for="size in sizeOptions.general"
          :key="size.value"
        >
          <span>{{ size.label }}</span>
          <vk-pagination
            v-model="form.modelValue"
            :size="size.value"
            :pages="form.pages"
          />
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('size', { values: sizeOptions.general.map(o => o.value) })" />
        </template>
      </example-section>

      <example-section
        title="Elevated"
        :style-slots="styles.gridAlt"
      >
        <vk-pagination
          v-model="form.modelValue"
          elevated
          :pages="form.pages"
        />

        <template #code>
          <code-block :code="generateSnippet<boolean>('elevated', { values: [true] })" />
        </template>
      </example-section>

      <example-section
        title="Disabled"
        :style-slots="styles.gridAlt"
      >
        <vk-pagination
          v-model="form.modelValue"
          disabled
          :pages="form.pages"
        />

        <template #code>
          <code-block :code="generateSnippet<boolean>('disabled', { values: [true] })" />
        </template>
      </example-section>
    </template>

    <template #api>
      <api-table
        name="Pagination"
        :tables="[
          { title: 'Props', data: paginationProps, headers: 'props' },
          { title: 'Emits', data: paginationEmits, headers: 'emits' },
          { title: 'Style Slots', data: styleSlotsInterface, headers: 'interface' }
        ]"
      />
    </template>
  </doc-section>
</template>
