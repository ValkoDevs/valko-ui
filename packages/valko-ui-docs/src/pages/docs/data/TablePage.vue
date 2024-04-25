<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '../../../components/DocSection'
import ExampleSection from '../../../components/ExampleSection'
import variantOptions from '@/data/variantOptions'
import colorOptions from '@/data/colorOptions'
import sizeOptions from '@/data/sizeOptions'
import propHeaders from '@/data/propHeaders'
import shapeOptions from '@/data/shapeOptions'
import emitHeaders from '@/data/emitHeaders'
import slotHeaders from '@/data/slotHeaders'


const form = ref({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md'
})

const colors = [
  ...colorOptions,
  { value: 'neutral', label: 'Neutral' }
]

const dataTableProps = [
  {
    prop: 'headers',
    required: true,
    description: 'An array of objects defining the headers of the table.',
    values: 'DataTableHeader[]',
    default: '[]'
  },
  {
    prop: 'data',
    required: true,
    description: 'An array of objects representing the data rows of the table.',
    values: 'DataTableItem[]',
    default: '[]'
  },
  {
    prop: 'sortBy',
    required: false,
    description: 'The key of the column used for sorting.',
    values: 'string | null',
    default: 'null'
  },
  {
    prop: 'sortDir',
    required: false,
    description: 'The sorting direction.',
    values: 'asc, desc',
    default: 'asc'
  },
  {
    prop: 'records',
    required: false,
    description: 'The total number of records in the table.',
    values: 'number',
    default: 'undefined'
  },
  {
    prop: 'page',
    required: false,
    description: 'The current page number.',
    values: 'number',
    default: 'undefined'
  },
  {
    prop: 'selectable',
    required: false,
    description: 'Controls the selection behavior of the table.',
    values: 'single, multiple, none',
    default: 'none'
  },
  {
    prop: 'selectionType',
    required: false,
    description: 'The type of selection interface.',
    values: 'check, row',
    default: 'check'
  },
  {
    prop: 'rounded',
    required: false,
    description: 'Specifies whether the table has rounded corners.',
    values: 'boolean',
    default: 'false'
  },
  {
    prop: 'striped',
    required: false,
    description: 'Specifies whether the table rows are striped for better readability.',
    values: 'boolean',
    default: 'false'
  },
  {
    prop: 'loading',
    required: false,
    description: 'Specifies whether the table is in a loading state.',
    values: 'boolean',
    default: 'false'
  },
  {
    prop: 'shadow',
    required: false,
    description: 'Specifies whether the table has a shadow effect.',
    values: 'boolean',
    default: 'false'
  }
]

const dataTableItem = [
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

const dataTableHeader = [
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
</script>

<template>
  <doc-section
    title="Table"
    description=""
  >
    <template #playground-view>
      <div class="w-full flex justify-center p-4">
        <vk-data-table
          :color="form.color"
          :variant="form.variant"
          :shape="form.shape"
          :size="form.size"
          :headers="propHeaders"
          :data="dataTableHeader"
        />
      </div>
    </template>
    <template #playground-options>
      <vk-select
        placeholder="Color"
        size="sm"
        :options="colors"
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
        :options="shapeOptions"
        v-model="form.shape"
      />
      <vk-select
        placeholder="Size"
        size="sm"
        :options="sizeOptions"
        v-model="form.size"
      />
    </template>

    <template #examples>
      <example-section
        title="Variants"
        justify="start"
        gap
        wrap
      >
        <vk-data-table
          v-for="variant in variantOptions"
          :key="variant.value"
          :variant="variant.value"
          :headers="propHeaders"
          :data="dataTableHeader"
        />
      </example-section>
    </template>

    <template #api>
      <div class="w-full flex flex-col">
        <example-section
          title="Table Props"
          gap
        >
          <vk-data-table
            :headers="propHeaders"
            :data="dataTableProps"
          />
        </example-section>

        <example-section
          title="Table Item Props"
          gap
        >
          <vk-data-table
            :headers="propHeaders"
            :data="dataTableItem"
          />
        </example-section>

        <example-section
          title="Table Header Props"
          gap
        >
          <vk-data-table
            :headers="propHeaders"
            :data="dataTableHeader"
          />
        </example-section>

        <example-section
          title="Table Emits"
          gap
        >
          <vk-data-table
            :headers="emitHeaders"
            :data="emitData"
          />
        </example-section>

        <example-section
          title="Table Slots"
          gap
        >
          <vk-data-table
            :headers="slotHeaders"
            :data="slotData"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
