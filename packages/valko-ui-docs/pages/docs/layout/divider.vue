<script setup lang="ts">
import type { DividerProps, SelectOption, TableItem } from '#valkoui'

const form = ref<DividerProps>({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  direction: 'horizontal'
})

const directionOptions: SelectOption[] = [
  { value: 'vertical', label: 'Vertical' },
  { value: 'horizontal', label: 'Horizontal' }
]

const dividerProps: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Divider.',
    values: 'primary, neutral, error, warning, info, success',
    default: 'primary'
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The variant of the Divider.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Divider.',
    values: 'rounded, square, soft',
    default: 'soft'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Divider.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    key: 'directionProp',
    prop: 'direction',
    required: false,
    description: 'The direction of the Divider.',
    values: 'vertical, horizontal',
    default: 'horizontal'
  }
]
</script>

<template>
  <doc-section
    title="Divider"
    description="Visual element used to separate or divide content within a user interface. Its primary purpose is to provide a clear and organized visual structure to the content, facilitating readability and comprehension. Dividers are especially useful in designs that contain distinct sections or blocks of information, helping to delineate them clearly and concisely."
  >
    <template #playground-view>
      <div :class="`w-full h-full flex ${form.direction === 'vertical' ? 'flex-row' : 'flex-col'} justify-center items-center p-4`">
        Artist
        <vk-divider
          :color="form.color"
          :variant="form.variant"
          :shape="form.shape"
          :size="form.size"
          :direction="form.direction"
        />
        Album
        <vk-divider
          :color="form.color"
          :variant="form.variant"
          :shape="form.shape"
          :size="form.size"
          :direction="form.direction"
        />
        Song
      </div>
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
        v-model="form.direction"
        label="Direction"
        size="sm"
        :options="directionOptions"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        justify="start"
        gap
      >
        <div class="w-full grid grid-cols-3 gap-4">
          <div
            v-for="color in colorOptions"
            :key="color.value"
          >
            <span class="font-semibold">{{ color.label }}</span>
            <div class="mt-4 flex flex-col items-center">
              Artist
              <vk-divider :color="color.value" />
              Album
              <vk-divider :color="color.value" />
              Song
            </div>
          </div>
        </div>
      </example-section>

      <example-section
        title="Variants"
        justify="start"
        gap
      >
        <div class="w-full grid grid-cols-3 gap-4">
          <div
            v-for="variant in variantOptions.general"
            :key="variant.value"
          >
            <span class="font-semibold">{{ variant.label }}</span>
            <div class="mt-4 flex flex-col items-center">
              Artist
              <vk-divider :variant="variant.value" />
              Album
              <vk-divider :variant="variant.value" />
              Song
            </div>
          </div>
        </div>
      </example-section>

      <example-section
        title="Shapes"
        justify="start"
        gap
      >
        <div class="w-full grid grid-cols-3 gap-4">
          <div
            v-for="shape in shapeOptions.general"
            :key="shape.value"
          >
            <span class="font-semibold">{{ shape.label }}</span>
            <div class="mt-4 flex flex-col items-center">
              Artist
              <vk-divider :shape="shape.value" />
              Album
              <vk-divider :shape="shape.value" />
              Song
            </div>
          </div>
        </div>
      </example-section>

      <example-section
        title="Sizes"
        justify="start"
        gap
      >
        <div class="w-full grid grid-cols-2 gap-4">
          <div
            v-for="size in sizeOptions.general"
            :key="size.value"
          >
            <span class="font-semibold">{{ size.label }}</span>
            <div class="mt-4 flex flex-col items-center">
              Artist
              <vk-divider :size="size.value" />
              Album
              <vk-divider :size="size.value" />
              Song
            </div>
          </div>
        </div>
      </example-section>

      <example-section
        title="Direction"
        justify="start"
        gap
      >
        <div class="w-full">
          <span class="font-semibold">Horizontal</span>
          <div class="mt-4">
            Artist
            <vk-divider />
            Album
            <vk-divider />
            Song
          </div>
        </div>
        <div class="w-full">
          <span class="font-semibold">Vertical</span>
          <div class="mt-4 flex flex-row h-20 items-center">
            Artist
            <vk-divider direction="vertical" />
            Album
            <vk-divider direction="vertical" />
            Song
          </div>
        </div>
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Divider Props"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="dividerProps"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
