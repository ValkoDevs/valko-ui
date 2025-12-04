<script setup lang="ts">
import type { ProgressbarProps, TableItem } from '#valkoui'

definePageMeta({
  alias: ['/docs/progressbar']
})

const form = ref<ProgressbarProps>({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  progress: 50,
  buffer: 0,
  indeterminate: false,
  striped: false
})

const slotText = ref('Progress')

const progressbarProps: TableItem[] = [
  {
    key: 'colorProp',
    prop: 'color',
    required: false,
    description: 'The color theme of the Progressbar.',
    values: 'primary, secondary, positive, accent, warning, negative',
    default: 'primary'
  },
  {
    key: 'variantProp',
    prop: 'variant',
    required: false,
    description: 'The variant of the Progressbar.',
    values: 'filled, outlined, ghost, gradient',
    default: 'filled'
  },
  {
    key: 'shapeProp',
    prop: 'shape',
    required: false,
    description: 'The shape of the Progressbar.',
    values: 'line, rounded, square, soft',
    default: 'soft'
  },
  {
    key: 'sizeProp',
    prop: 'size',
    required: false,
    description: 'The size of the Progressbar.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    key: 'progressProp',
    prop: 'progress',
    required: false,
    description: 'The value of the Progressbar.',
    values: 'number',
    default: '0'
  },
  {
    key: 'bufferProp',
    prop: 'buffer',
    required: false,
    description: 'The buffer value of the Progressbar.',
    values: 'number',
    default: '0'
  },
  {
    key: 'indeterminateProp',
    prop: 'indeterminate',
    required: false,
    description: 'Wheter the Progressbar is indeterminate or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'stripedProp',
    prop: 'striped',
    required: false,
    description: 'Wheter the Progressbar is striped or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'styleSlotsProp',
    prop: 'styleSlots',
    required: false,
    description: 'Customizes style slots for Progressbar.',
    values: 'progressbarSlots',
    default: ''
  }
]

const styleSlotsInterface: TableItem[] = [
  {
    key: 'container',
    prop: 'container',
    description: 'Root container for the Progressbar.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'background',
    prop: 'background',
    description: 'Background bar element.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'buffer',
    prop: 'buffer',
    description: 'Buffer bar element (shows buffered progress).',
    values: 'string[]',
    default: ''
  },
  {
    key: 'content',
    prop: 'content',
    description: 'Content area for slot content inside the bar.',
    values: 'string[]',
    default: ''
  },
  {
    key: 'progress',
    prop: 'progress',
    description: 'Progress bar element (shows current progress).',
    values: 'string[]',
    default: ''
  },
  {
    key: 'stripes',
    prop: 'stripes',
    description: 'Stripes overlay for striped progress bars.',
    values: 'string[]',
    default: ''
  }
]

const progressbarSlots: TableItem[] = [
  {
    key: 'defaultSlot',
    name: 'default',
    description: 'Slot for custom content to be placed inside the progress bar. This slot is typically used to include additional elements or text inside the progress bar.',
    example: '<template #default>\n  <!-- Your custom content goes here -->\n</template>'
  }
]

const generateSnippet = snippetGeneratorFactory('vk-progressbar')

const styles = generateStyles({
  default: [
    'sm:grid-cols-2',
    'md:grid-cols-3'
  ],
  defaultAlt: [
    'sm:grid-cols-2',
    'md:grid-cols-3',
    'lg:grid-cols-4'
  ]
})
</script>

<template>
  <doc-section
    title="Progressbar"
    description="Visual indicator that shows the progress or status of a task. Progress bars are used to convey accent about the completion status of an operation, such as file uploads, form submissions, or loading processes."
  >
    <template #playground-view>
      <vk-progressbar
        :shape="form.shape"
        :variant="form.variant"
        :progress="form.progress"
        :color="form.color"
        :size="form.size"
        :striped="form.striped"
        :indeterminate="form.indeterminate"
        :buffer="form.buffer"
      >
        {{ slotText }}
      </vk-progressbar>
    </template>

    <template #playground-options>
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
        :options="variantOptions.withGradient"
      />
      <vk-select
        v-model="form.shape"
        label="Shape"
        size="sm"
        :options="shapeOptions.withLine"
      />
      <vk-select
        v-model="form.size"
        size="sm"
        label="Size"
        :options="sizeOptions.general"
      />
      <vk-input
        v-model="slotText"
        label="Slot Text"
        size="sm"
      />
      <div class="flex flex-col mb-1">
        <label for="rg-progress">Progress</label>
        <vk-range v-model="form.progress" />
      </div>
      <div class="flex flex-col mb-1">
        <label for="rg-buffer">Buffer</label>
        <vk-range v-model="form.buffer" />
      </div>
      <vk-checkbox
        v-model="form.indeterminate"
        label="Indeterminate"
      />
      <vk-checkbox
        v-model="form.striped"
        label="Striped"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        :style-slots="styles.default"
      >
        <vk-progressbar
          v-for="color in colorOptions.general"
          :key="color.value"
          :color="color.value"
          :progress="25"
        >
          {{ color.label }}
        </vk-progressbar>

        <template #code>
          <code-block :code="generateSnippet<string>('color', {values: colorOptions.general.map(o => o.value), hasSlot: true})" />
        </template>
      </example-section>

      <example-section
        title="Variants"
        :style-slots="styles.defaultAlt"
      >
        <vk-progressbar
          v-for="variant in variantOptions.withGradient"
          :key="variant.value"
          :variant="variant.value"
          :progress="25"
        >
          {{ variant.label }}
        </vk-progressbar>

        <template #code>
          <code-block :code="generateSnippet<string>('variant', {values: variantOptions.withGradient.map(o => o.value), hasSlot: true})" />
        </template>
      </example-section>

      <example-section
        title="Shapes"
        :style-slots="styles.defaultAlt"
      >
        <vk-progressbar
          v-for="shape in shapeOptions.withLine"
          :key="shape.value"
          :shape="shape.value"
          :progress="25"
        >
          {{ shape.label }}
        </vk-progressbar>

        <template #code>
          <code-block :code="generateSnippet<string>('shape', {values: shapeOptions.withLine.map(o => o.value), hasSlot: true})" />
        </template>
      </example-section>

      <example-section
        title="Sizes"
        :style-slots="styles.defaultAlt"
      >
        <vk-progressbar
          v-for="size in sizeOptions.general"
          :key="size.value"
          :size="size.value"
          :progress="25"
        >
          {{ size.label }}
        </vk-progressbar>

        <template #code>
          <code-block :code="generateSnippet<string>('size', {values: sizeOptions.general.map(o => o.value), hasSlot: true})" />
        </template>
      </example-section>

      <example-section title="Indeterminate">
        <vk-progressbar indeterminate>
          Indeterminate
        </vk-progressbar>

        <template #code>
          <code-block :code="generateSnippet<boolean>('indeterminate', {values: [true], hasSlot: true})" />
        </template>
      </example-section>

      <example-section
        title="Stripped"
        :style-slots="styles.default"
      >
        <vk-progressbar
          v-for="color in colorOptions.general"
          :key="color.value"
          :color="color.value"
          :progress="25"
          striped
        >
          Striped {{ color.label }}
        </vk-progressbar>

        <template #code>
          <code-block :code="generateSnippet<string>('color', {values: colorOptions.general.map(o => o.value), hasSlot: true, extraProps: 'striped'})" />
        </template>
      </example-section>

      <example-section title="Striped & Indeterminate">
        <vk-progressbar
          indeterminate
          striped
        >
          {{ `Indeterminate & Striped` }}
        </vk-progressbar>

        <template #code>
          <code-block :code="generateSnippet<boolean>('indeterminate', {values: [true], hasSlot: true, extraProps: 'striped'})" />
        </template>
      </example-section>

      <example-section title="Buffer">
        <vk-progressbar
          :buffer="50"
          :progress="25"
        >
          Buffer
        </vk-progressbar>

        <template #code>
          <code-block :code="generateSnippet<number>(':buffer', {values: [50], hasSlot: true, extraProps: ':progress=&quot;25&quot;'})" />
        </template>
      </example-section>
    </template>

    <template #api>
      <h3>Progressbar Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="progressbarProps"
      />

      <h3>Progressbar Slots</h3>
      <vk-table
        :headers="slotHeaders"
        :data="progressbarSlots"
      />

      <h3>Style Slots Interface</h3>
      <vk-table
        :headers="propHeaders"
        :data="styleSlotsInterface"
      />
    </template>
  </doc-section>
</template>
