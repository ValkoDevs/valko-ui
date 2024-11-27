<script setup lang="ts">
import type { SpinnerProps, TableItem } from '#valkoui'

const names = [
  { value: 'loader', label: 'Loader' },
  { value: 'loader-2', label: 'Loader-2' }
]

const form = ref<SpinnerProps>({
  color: 'primary',
  size: 'md',
  name: 'loader-2',
  condensed: false
})

const spinnerProps: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Spinner.',
    values: 'primary, neutral, error, warning, info, success',
    default: 'primary'
  },
  {
    key: 'nameProp',
    prop: 'name',
    required: false,
    description: 'The icon of the Spinner.',
    values: 'string',
    default: 'loader-2'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Spinner.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    key: 'condensedProp',
    prop: 'condensed',
    required: false,
    description: 'Reduces the Spinner\'s size.',
    values: 'true, false',
    default: 'false'
  }
]
</script>

<template>
  <doc-section
    title="Spinner"
    description="Visual animation that indicates a task is being processed. Spinners are used to provide feedback to users while they wait for an operation to complete, such as loading content or submitting a request."
  >
    <template #playground-view>
      <vk-spinner
        :color="form.color"
        :size="form.size"
        :name="form.name"
        :condensed="form.condensed"
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
        v-model="form.name"
        label="Name"
        size="sm"
        :options="names"
      />
      <vk-select
        v-model="form.size"
        label="Size"
        size="sm"
        :options="sizeOptions.general"
      />
      <vk-checkbox
        v-model="form.condensed"
        label="Condensed"
      />
    </template>

    <template #examples>
      <example-section title="Colors">
        <div class="gap-x-12 gap-y-4 grid grid-cols-3">
          <div
            v-for="color in colorOptions"
            :key="color.value"
            class="flex items-center gap-2"
          >
            <vk-spinner
              :color="color.value"
            />
            <span>{{ color.label }}</span>
          </div>
        </div>
      </example-section>

      <example-section title="Names">
        <div class="gap-x-12 gap-y-4 grid grid-cols-3">
          <div
            v-for="name in names"
            :key="name.value"
            class="flex gap-2 items-center"
          >
            <vk-spinner
              :name="name.value"
            />
            {{ name.label }}
          </div>
        </div>
      </example-section>

      <example-section title="Sizes">
        <div class="gap-x-12 gap-y-4 grid grid-cols-2">
          <div
            v-for="size in sizeOptions.general"
            :key="size.value"
            class="flex gap-2 items-center"
          >
            <vk-spinner
              :size="size.value"
            />
            {{ size.label }}
          </div>
        </div>
      </example-section>
    </template>

    <template #api>
      <example-section title="Spinner Props">
        <vk-table
          :headers="propHeaders"
          :data="spinnerProps"
        />
      </example-section>
    </template>
  </doc-section>
</template>
