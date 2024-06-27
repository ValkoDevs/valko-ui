<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import colorOptions from '@/data/colorOptions'
import variantOptions from '@/data/variantOptions'
import shapeOptions from '@/data/shapeOptions'
import sizeOptions from '@/data/sizeOptions'
import propHeaders from '@/data/propHeaders'
import slotHeaders from '@/data/slotHeaders'

const shapes = [
  ...shapeOptions,
  { value: 'line', label: 'Line' }
]

const form = ref({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  slot: 'Progress',
  progress: 50,
  buffer: 70,
  incrementProgress: 4.5,
  incrementBuffer: 5,
  indeterminate: false,
  striped: false,
  showBuffer: false
})


const progressbarProps = [
  {
    prop: 'color',
    required: false,
    description: 'The color theme of the Progressbar.',
    values: 'primary, neutral, success, info, warning, error',
    default: 'primary'
  },
  {
    prop: 'variant',
    required: false,
    description: 'The variant of the Progressbar.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    prop: 'shape',
    required: false,
    description: 'The shape of the Progressbar.',
    values: 'line, rounded, square, soft',
    default: 'soft'
  },
  {
    prop: 'size',
    required: false,
    description: 'The size of the Progressbar.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    prop: 'progress',
    required: false,
    description: 'The value of the Progressbar.',
    values: 'number',
    default: '0'
  },
  {
    prop: 'buffer',
    required: false,
    description: 'The buffer value of the Progressbar.',
    values: 'number',
    default: '0'
  },
  {
    prop: 'indeterminate',
    required: false,
    description: 'Wheter the Progressbar is indeterminate or not.',
    values: 'true, false',
    default: 'false'
  },
  {
    prop: 'striped',
    required: false,
    description: 'Wheter the Progressbar is striped or not.',
    values: 'true, false',
    default: 'false'
  }
]

const progressbarSlots = [
  {
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
          :buffer="`${form.showBuffer ? form.buffer : 0}`"
        >
          {{ form.slot }}
        </vk-progressbar>
      </div>
    </template>
    <template #playground-options>
      <vk-select
        placeholder="Color"
        size="sm"
        :options="colorOptions"
        v-model="form.color"
      />
      <vk-select
        placeholder="Variant"
        size="sm"
        :options="variantOptions"
        v-model="form.variant"
      />
      <vk-select
        placeholder="Shape"
        size="sm"
        :options="shapes"
        v-model="form.shape"
      />
      <vk-select
        size="sm"
        placeholder="Size"
        :options="sizeOptions"
        v-model="form.size"
      />
      <vk-input
        label="Slot Text"
        size="sm"
        v-model="form.slot"
      />
      <div class="flex flex-col mb-1">
        <label for="rg-progress">Progress</label>
        <input
          name="rg-progress"
          type="range"
          min="0"
          max="100"
          step="1"
          v-model="form.progress"
        >
      </div>
      <div class="flex flex-col mb-1">
        <label for="rg-buffer">Buffer</label>
        <input
          name="rg-buffer"
          type="range"
          min="0"
          max="100"
          step="1"
          v-model="form.buffer"
        >
      </div>
      <vk-checkbox
        label="Indeterminate"
        v-model="form.indeterminate"
      />
      <vk-checkbox
        label="Striped"
        v-model="form.striped"
      />
      <vk-checkbox
        label="Display Buffer"
        v-model="form.showBuffer"
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
            progress="25"
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
            v-for="variant in variantOptions"
            :key="variant.value"
            :variant="variant.value"
            progress="25"
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
            v-for="shape in shapes"
            :key="shape.value"
            :shape="shape.value"
            progress="25"
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
            v-for="size in sizeOptions"
            :key="size.value"
            :size="size.value"
            progress="25"
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
          progress="25"
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
          buffer="50"
          progress="25"
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
          <vk-data-table
            :headers="propHeaders"
            :data="progressbarProps"
          />
        </example-section>

        <example-section
          title="Progressbar Slots"
          gap
        >
          <vk-data-table
            :headers="slotHeaders"
            :data="progressbarSlots"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
