<script setup lang="ts">
import type { SpinnerProps } from '#valkoui'

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

const spinnerProps: PropData[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Spinner.',
    values: 'primary, secondary, negative, warning, accent, positive, surface',
    default: 'primary',
    apiType: 'custom-string'
  },
  {
    key: 'nameProp',
    prop: 'name',
    required: false,
    description: 'The icon of the Spinner.',
    values: 'string',
    default: 'loader-2',
    apiType: 'primitive'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Spinner.',
    values: 'xs, sm, md, lg',
    default: 'md',
    apiType: 'custom-string'
  },
  {
    key: 'condensedProp',
    prop: 'condensed',
    required: false,
    description: 'Reduces the Spinner\'s size.',
    values: 'boolean',
    default: 'false',
    apiType: 'primitive'
  },
  {
    key: 'classesProp',
    prop: 'classes',
    required: false,
    description: 'Overrides the spinner\'s default colors, allowing you to fully customize its appearance.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'styleSlotsProp',
    prop: 'styleSlots',
    required: false,
    description: 'Customizes style slots for Spinner.',
    values: 'SpinnerSlots',
    default: '',
    apiType: 'custom-type'
  }
]

const styleSlotsInterface: PropData[] = [
  {
    key: 'container',
    prop: 'container',
    required: false,
    description: 'Root container of the Spinner.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'icon',
    prop: 'icon',
    required: false,
    description: 'Icon element of the Spinner.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  }
]

const generateSnippet = snippetGeneratorFactory('vk-spinner')

const styles = {
  colors: {
    slotContainer: [
      'grid-cols-2',
      'md:grid-cols-3',
      'lg:grid-cols-7'
    ]
  },
  names: {
    slotContainer: [
      'grid-cols-2'
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
        :options="colorOptions.withSurface"
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
      <example-section
        title="Colors"
        :style-slots="styles.colors"
      >
        <div
          v-for="color in colorOptions.withSurface"
          :key="color.value"
          class="flex flex-col gap-2 items-center justify-center md:items-start md:justify-start"
        >
          <span>{{ color.label }}</span>
          <vk-spinner
            :color="color.value"
          />
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('color', {values: colorOptions.withSurface.map(o => o.value)})" />
        </template>
      </example-section>

      <example-section
        title="Names"
        :style-slots="styles.names"
      >
        <div
          v-for="name in names"
          :key="name.value"
          class="flex flex-col gap-2 items-center justify-center md:items-start md:justify-start"
        >
          <span>{{ name.label }}</span>
          <vk-spinner
            :name="name.value"
          />
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('name', {values: names.map(o => o.value)})" />
        </template>
      </example-section>

      <example-section
        title="Sizes"
        :style-slots="styles.sizes"
      >
        <div
          v-for="size in sizeOptions.general"
          :key="size.value"
          class="flex flex-col gap-2 items-center justify-center md:items-start md:justify-start"
        >
          <span>{{ size.label }}</span>
          <vk-spinner
            :size="size.value"
          />
        </div>

        <template #code>
          <code-block :code="generateSnippet<string>('size', {values: sizeOptions.general.map(o => o.value)})" />
        </template>
      </example-section>
    </template>

    <template #api>
      <api-table
        name="Spinner"
        :tables="[
          { title: 'Props', data: spinnerProps, headers: 'props' },
          { title: 'Style Slots', data: styleSlotsInterface, headers: 'interface' }
        ]"
      />
    </template>
  </doc-section>
</template>
