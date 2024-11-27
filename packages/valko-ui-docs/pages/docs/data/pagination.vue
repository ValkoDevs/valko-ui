<script setup lang="ts">
import type { PaginationProps, TableItem } from '#valkoui'

const form = ref<PaginationProps>({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  modelValue: 1,
  pages: 20,
  flat: false,
  disabled: false
})

const paginationProps: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The Pagination color theme.',
    values: 'primary, neutral, error, warning, info, success',
    default: 'primary'
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The Pagination variant.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Pagination.',
    values: 'soft, rounded, square',
    default: 'soft'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The Pagination size.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    key: 'pagesProp',
    prop: 'pages',
    required: false,
    description: 'The total number of pages.',
    values: 'number',
    default: '1'
  },
  {
    key: 'modelValueProp',
    prop: 'modelValue',
    required: false,
    description: 'The current page.',
    values: 'number',
    default: '1'
  }
]

const paginationEmits: TableItem[] = [
  {
    key: 'updateModelValueEmit',
    event: 'update:modelValue',
    description: 'Emitted when the current page is changed.',
    values: 'number | string',
    type: '(page: number | string) => void'
  }
]
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
        :flat="form.flat"
        :shape="form.shape"
        :disabled="form.disabled"
      />
    </template>

    <template #playground-options>
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
      <vk-input
        v-model="form.pages"
        type="number"
        label="Total Pages"
        size="sm"
      />
      <vk-checkbox
        v-model="form.flat"
        label="Flat"
      />
      <vk-checkbox
        v-model="form.disabled"
        label="Disabled"
      />
    </template>

    <template #examples>
      <example-section title="Colors">
        <div class="gap-4 grid grid-cols-3">
          <div
            v-for="color in colorOptions"
            :key="color.value"
            class="flex flex-col items-start"
          >
            <span class="mb-3"> {{ color.label }}</span>
            <vk-pagination
              v-model="form.modelValue"
              :color="color.value"
              :pages="form.pages"
            />
          </div>
        </div>
      </example-section>

      <example-section title="Variants">
        <div class="gap-4 grid grid-cols-3">
          <div
            v-for="variant in variantOptions.general"
            :key="variant.value"
            class="flex flex-col items-start"
          >
            <span class="mb-3"> {{ variant.label }}</span>
            <vk-pagination
              v-model="form.modelValue"
              :variant="variant.value"
              :pages="form.pages"
            />
          </div>
        </div>
      </example-section>

      <example-section title="Shapes">
        <div class="gap-4 grid grid-cols-3">
          <div
            v-for="shape in shapeOptions.general"
            :key="shape.value"
            class="flex flex-col items-start"
          >
            <span class="mb-3"> {{ shape.label }}</span>
            <vk-pagination
              v-model="form.modelValue"
              :shape="shape.value"
              :pages="form.pages"
            />
          </div>
        </div>
      </example-section>

      <example-section title="Sizes">
        <div class="gap-4 grid grid-cols-2">
          <div
            v-for="size in sizeOptions.general"
            :key="size.value"
          >
            <span class="mb-3"> {{ size.label }}</span>
            <vk-pagination
              v-model="form.modelValue"
              :size="size.value"
              :pages="form.pages"
            />
          </div>
        </div>
      </example-section>

      <example-section title="Flat">
        <vk-pagination
          v-model="form.modelValue"
          flat
          :pages="form.pages"
        />
      </example-section>

      <example-section title="Disabled">
        <vk-pagination
          v-model="form.modelValue"
          disabled
          :pages="form.pages"
        />
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section title="Pagination Props">
          <vk-table
            :headers="propHeaders"
            :data="paginationProps"
          />
        </example-section>

        <example-section title="Pagination Emits">
          <vk-table
            :headers="emitHeaders"
            :data="paginationEmits"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
