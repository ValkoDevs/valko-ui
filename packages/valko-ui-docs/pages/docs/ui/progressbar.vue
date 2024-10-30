<script setup lang="ts">
import type { ProgressbarProps, TableItem } from '#valkoui'

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
    values: 'primary, neutral, success, info, warning, error',
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
</script>

<template>
  <doc-section
    title="Progressbar"
    description="Visual indicator that shows the progress or status of a task. Progress bars are used to convey information about the completion status of an operation, such as file uploads, form submissions, or loading processes."
  >
    <template #playground-view>
      <div class="w-full flex justify-center p-4">
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
        justify="evenly"
        gap
      >
        <div class="grow gap-4 grid grid-cols-3">
          <vk-progressbar
            v-for="color in colorOptions"
            :key="color.value"
            :color="color.value"
            :progress="25"
          >
            {{ color.label }}
          </vk-progressbar>
        </div>
      </example-section>

      <example-section
        title="Variants"
        justify="evenly"
        gap
      >
        <div class="grow gap-4 grid grid-cols-3">
          <vk-progressbar
            v-for="variant in variantOptions.withGradient"
            :key="variant.value"
            :variant="variant.value"
            :progress="25"
          >
            {{ variant.label }}
          </vk-progressbar>
        </div>
      </example-section>

      <example-section
        title="Shapes"
        justify="evenly"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2">
          <vk-progressbar
            v-for="shape in shapeOptions.withLine"
            :key="shape.value"
            :shape="shape.value"
            :progress="25"
          >
            {{ shape.label }}
          </vk-progressbar>
        </div>
      </example-section>

      <example-section
        title="Sizes"
        justify="evenly"
        gap
      >
        <div class="grow gap-4 grid grid-cols-2">
          <vk-progressbar
            v-for="size in sizeOptions.general"
            :key="size.value"
            :size="size.value"
            :progress="25"
          >
            {{ size.label }}
          </vk-progressbar>
        </div>
      </example-section>

      <example-section
        title="Indeterminate"
      >
        <vk-progressbar indeterminate>
          Indeterminate
        </vk-progressbar>
      </example-section>

      <example-section
        title="Stripped"
      >
        <vk-progressbar
          striped
          :progress="25"
        >
          Striped
        </vk-progressbar>
      </example-section>

      <example-section
        title="Striped & Indeterminate"
      >
        <vk-progressbar
          indeterminate
          striped
        >
          {{ `Indeterminate & Striped` }}
        </vk-progressbar>
      </example-section>

      <example-section
        title="Buffer"
      >
        <vk-progressbar
          :buffer="50"
          :progress="25"
        >
          Buffer
        </vk-progressbar>
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Progressbar Props"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="progressbarProps"
          />
        </example-section>

        <example-section
          title="Progressbar Slots"
          gap
        >
          <vk-table
            :headers="slotHeaders"
            :data="progressbarSlots"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
