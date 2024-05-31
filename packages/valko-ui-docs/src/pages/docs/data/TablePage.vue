<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import variantOptions from '@/data/variantOptions'
import sizeOptions from '@/data/sizeOptions'
import propHeaders from '@/data/propHeaders'
import shapeOptions from '@/data/shapeOptions'
import emitHeaders from '@/data/emitHeaders'
import slotHeaders from '@/data/slotHeaders'

const form = ref({
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  striped: false
})

const tableProps = [
  {
    prop: 'headers',
    required: true,
    description: 'An array of objects defining the headers of the table.',
    values: 'TableHeader[]',
    default: '[]'
  },
  {
    prop: 'data',
    required: true,
    description: 'An array of objects representing the data rows of the table.',
    values: 'TableItem[]',
    default: '[]'
  },
  {
    prop: 'striped',
    required: false,
    description: 'Specifies whether the table rows are striped for better readability.',
    values: 'boolean',
    default: 'false'
  }
]

const tableItem = [
  {
    prop: 'key',
    required: true,
    description: 'The unique identifier for the data row.',
    values: 'string'
  },
  {
    prop: 'Any other property',
    required: false,
    description: 'Any other property specific to your data row.',
    values: 'unknown'
  }
]

const tableHeader = [
  {
    prop: 'key',
    required: true,
    description: 'The unique identifier for the column.',
    values: 'string'
  },
  {
    prop: 'label',
    required: true,
    description: 'The label to display for the column header.',
    values: 'string'
  },
  {
    prop: 'sortable',
    required: true,
    description: 'Specifies whether the column is sortable.',
    values: 'boolean'
  }
]


const emitData = [
  {
    event: 'close',
    type: '() => void',
    values: '',
    description: 'Emitted when the alert is closed by the user.'
  }
]

const slotData = [
  {
    name: 'default',
    description: 'Slot for the main content of the alert.',
    example: '<template #default>\n  <p>This is the main content of the alert.</p>\n</template>'
  }
]

const tableItems = ref([
  {
    prop: 'key',
    required: true,
    description: 'The unique identifier for the column.',
    values: 'string'
  },
  {
    prop: 'label',
    required: true,
    description: 'The label to display for the column header.',
    values: 'string'
  },
  {
    prop: 'sortable',
    required: true,
    description: 'Specifies whether the column is sortable.',
    values: 'boolean'
  }
])
</script>

<template>
  <doc-section
    title="Table"
    description=""
  >
    <template #playground-view>
      <div class="w-full flex justify-center p-4">
        <vk-table
          :variant="form.variant"
          :shape="form.shape"
          :size="form.size"
          :striped="form.striped"
          :data="tableItems"
          :headers="propHeaders"
        />
      </div>
    </template>
    <template #playground-options>
      <vk-select
        placeholder="Variant"
        size="sm"
        :options="variantOptions"
        v-model="form.variant"
      />
      <vk-select
        placeholder="Shape"
        size="sm"
        :options="shapeOptions"
        v-model="form.shape"
      />
      <vk-select
        placeholder="Size"
        size="sm"
        :options="sizeOptions"
        v-model="form.size"
      />
      <vk-checkbox
        label="Striped"
        v-model="form.striped"
      />
    </template>

    <template #examples>
      <example-section
        title="Variants"
        justify="start"
        gap
        wrap
      >
        <div class="grid grid-cols-2 gap-4">
          <div
            v-for="variant in variantOptions"
            :key="variant.value"
          >
            <span>
              {{ variant.label }}
            </span>
            <vk-table
              :variant="variant.value"
              :headers="propHeaders"
              :data="tableHeader"
              class="mt-4"
            />
          </div>
        </div>
      </example-section>

      <example-section
        title="Shapes"
        justify="start"
        gap
        wrap
      >
        <div class="grid grid-cols-2 gap-4">
          <div
            v-for="shape in shapeOptions"
            :key="shape.value"
          >
            <span>
              {{ shape.label }}
            </span>
            <vk-table
              :shape="shape.value"
              :headers="propHeaders"
              :data="tableHeader"
              class="mt-4"
            />
          </div>
        </div>
      </example-section>

      <example-section
        title="Sizes"
        justify="start"
        gap
        wrap
      >
        <div class="grid grid-cols-2 gap-4">
          <div
            v-for="size in sizeOptions"
            :key="size.value"
          >
            <span>
              {{ size.label }}
            </span>
            <vk-table
              :size="size.value"
              :headers="propHeaders"
              :data="tableHeader"
              class="mt-4"
            />
          </div>
        </div>
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Table Props"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="tableProps"
          />
        </example-section>

        <example-section
          title="Table Item Props"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="tableItem"
          />
        </example-section>

        <example-section
          title="Table Header Props"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="tableHeader"
          />
        </example-section>

        <example-section
          title="Table Emits"
          gap
        >
          <vk-table
            :headers="emitHeaders"
            :data="emitData"
          />
        </example-section>

        <example-section
          title="Table Slots"
          gap
        >
          <vk-table
            :headers="slotHeaders"
            :data="slotData"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
