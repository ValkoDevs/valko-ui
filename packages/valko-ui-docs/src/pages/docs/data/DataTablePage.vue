<script setup lang="ts">
import { reactive, ref } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import variantOptions from '@/data/variantOptions'
import colorOptions from '@/data/colorOptions'
import sizeOptions from '@/data/sizeOptions'
import propHeaders from '@/data/propHeaders'
import shapeOptions from '@/data/shapeOptions'
import emitHeaders from '@/data/emitHeaders'
import slotHeaders from '@/data/slotHeaders'
import { type SelectionMode, useDataTable, useClientSidePagination, useClientSideSort } from '@valko-ui/components'

const form = reactive({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  striped: false,
  sortable: false,
  filterable: false
})

const selectionMode = [
  { value: 'single', label: 'Single' },
  { value: 'multiple', label: 'Multiple' },
  { value: 'row', label: 'Row' },
  { value: 'none', label: 'None' }
]

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

const tableItems = [
  {
    key: 'example-01',
    prop: 'key',
    required: true,
    description: 'The unique identifier for the column.',
    values: 'string'
  },
  {
    key: 'example-02',
    prop: 'label',
    required: true,
    description: 'The label to display for the column header.',
    values: 'string'
  },
  {
    key: 'example-03',
    prop: 'sortable',
    required: true,
    description: 'Specifies whether the column is sortable.',
    values: 'boolean'
  },
  {
    key: 'example-04',
    prop: 'example-03',
    required: false,
    description: 'Example prop for test pourpuses, example-03.',
    values: 'string'
  },
  {
    key: 'example-05',
    prop: 'example-04',
    required: true,
    description: 'Example prop for test pourpuses, example-04.',
    values: 'string'
  },
  {
    key: 'example-06',
    prop: 'example-05',
    required: false,
    description: 'Example prop for test pourpuses, example-05.',
    values: 'boolean'
  }
]

const { result: sortedResult, sort, setSort } = useClientSideSort(tableItems, { field: 'required', direction: 'desc' })
const { result: paginatedResult, setOffset, setLimit } = useClientSidePagination(sortedResult)

const selectionModeRef = ref<SelectionMode>('none')

const dataTable = useDataTable({
  headers: propHeaders,
  paginatedResult,
  selectionMode: selectionModeRef,
  selectAllStatus: undefined
})
</script>

<template>
  <doc-section
    title="Table"
    description="A more complex Table component that allows to sort, filter & edit the data that contains."
  >
    <template #playground-view>
      <div class="w-full flex justify-center p-4">
        <vk-data-table
          :color="form.color"
          :variant="form.variant"
          :shape="form.shape"
          :size="form.size"
          :selection-mode="selectionModeRef"
          :striped="form.striped"
          :headers="dataTable.headers"
          :data="dataTable.data"
          :selection="dataTable.selection"
          :is-all-selected="dataTable.isAllSelected"
          :pagination="paginatedResult"
          :sort="sort"
          :page-size-options="[2, 5, 10, 20]"
          @on-select="dataTable.handleSelect"
          @on-select-all="dataTable.handleSelectAll"
          @on-page-change="setOffset"
          @on-limit-change="setLimit"
          @on-sort="setSort"
        />
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
        :options="shapeOptions"
        v-model="form.shape"
      />
      <vk-select
        placeholder="Size"
        size="sm"
        :options="sizeOptions"
        v-model="form.size"
      />
      <vk-select
        placeholder="Selection Mode"
        size="sm"
        :options="selectionMode"
        v-model="selectionModeRef"
      />
      <vk-checkbox
        label="Sortable"
        v-model="form.sortable"
      />
      <vk-checkbox
        label="Filterable"
        v-model="form.filterable"
      />
      <vk-checkbox
        label="Striped"
        v-model="form.striped"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        justify="start"
        wrap
      >
        <div
          v-for="color in colorOptions"
          :key="color.value"
          class="w-full"
        >
          <span>
            {{ color.label }}
          </span>
          <vk-data-table
            :color="color.value"
            :headers="propHeaders"
            :data="tableItems"
            class="mt-4"
          />
        </div>
      </example-section>

      <example-section
        title="Variants"
        justify="start"
        wrap
      >
        <div
          v-for="variant in variantOptions"
          :key="variant.value"
          class="w-full"
        >
          <span>
            {{ variant.label }}
          </span>
          <vk-data-table
            :variant="variant.value"
            :headers="propHeaders"
            :data="tableItems"
            class="mt-4"
          />
        </div>
      </example-section>

      <example-section
        title="Shapes"
        justify="start"
        wrap
      >
        <div
          v-for="shape in shapeOptions"
          :key="shape.value"
          class="w-full"
        >
          <span>
            {{ shape.label }}
          </span>
          <vk-data-table
            :shape="shape.value"
            :headers="propHeaders"
            :data="tableItems"
            class="mt-4"
          />
        </div>
      </example-section>

      <example-section
        title="Sizes"
        justify="start"
        wrap
      >
        <div
          v-for="size in sizeOptions"
          :key="size.value"
          class="w-full"
        >
          <span>
            {{ size.label }}
          </span>
          <vk-data-table
            :size="size.value"
            :headers="propHeaders"
            :data="tableItems"
            class="mt-4"
          />
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
            :data="tableItems"
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
