<script setup lang="ts">
import { reactive, ref, Ref, watch } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import colorOptions from '@/data/colorOptions'
import variantOptions from '@/data/variantOptions'
import sizeOptions from '@/data/sizeOptions'
import shapeOptions from '@/data/shapeOptions'
import propHeaders from '@/data/propHeaders'
import emitHeaders from '@/data/emitHeaders'
import slotHeaders from '@/data/slotHeaders'
import { type SelectionMode, useDataTable, useClientSidePagination, useClientSideSort, TableItem, Pagination } from '@valko-ui/components'

const form = reactive({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  striped: false,
  popoverPlacement: 'bottom'
})

const selectionMode = [
  { value: 'single', label: 'Single' },
  { value: 'multiple', label: 'Multiple' },
  { value: 'row', label: 'Row' },
  { value: 'none', label: 'None' }
]

const popoverPlacement = [
  { value: 'top', label: 'Top' },
  { value: 'bottom', label: 'Bottom' },
  { value: 'left', label: 'Left' },
  { value: 'right', label: 'Right' }
]

// API
const tableProps = [
  {
    key: 'prop',
    prop: 'headers',
    required: true,
    description: 'An array of objects defining the headers of the table.',
    values: 'TableHeader[]',
    default: '[]'
  },
  {
    key: 'prop',
    prop: 'data',
    required: true,
    description: 'An array of objects representing the data rows of the table.',
    values: 'TableItem[]',
    default: '[]'
  },
  {
    key: 'prop',
    prop: 'color',
    required: false,
    description: 'The color theme of the table.',
    values: 'primary, neutral, success, info, warning, error',
    default: 'primary'
  },
  {
    key: 'prop',
    prop: 'variant',
    required: false,
    description: 'The variant of the table.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    key: 'prop',
    prop: 'shape',
    required: false,
    description: 'The shape of the table.',
    values: 'soft, rounded, square',
    default: 'soft'
  },
  {
    key: 'prop',
    prop: 'size',
    required: false,
    description: 'The size of the table.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    key: 'prop',
    prop: 'striped',
    required: false,
    description: 'Specifies whether the table rows are striped for better readability.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'prop',
    prop: 'selectionMode',
    required: false,
    description: 'Controls the selection behavior of the table.',
    values: 'single, multiple, row, none',
    default: 'none'
  },
  {
    key: 'prop',
    prop: 'sort',
    required: false,
    description: 'The sorting configuration of the table.',
    values: 'Sort',
    default: ''
  },
  {
    key: 'prop',
    prop: 'pagination',
    required: false,
    description: 'The pagination configuration of the table.',
    values: 'Pagination<TableItem>',
    default: '() => ({ records: [], total: 0, limit: 10, offset: 0 })'
  },
  {
    key: 'prop',
    prop: 'filters',
    required: false,
    description: 'The filters applied to the table.',
    values: 'Filter[]',
    default: '() => []'
  },
  {
    key: 'prop',
    prop: 'pageSizeOptions',
    required: false,
    description: 'Options for page size selection.',
    values: 'number[]',
    default: '() => [10, 20, 50, 100]'
  },
  {
    key: 'prop',
    prop: 'selection',
    required: false,
    description: 'The selected items in the table.',
    values: 'TableItem[] | TableItem',
    default: 'undefined'
  },
  {
    key: 'prop',
    prop: 'isAllSelected',
    required: false,
    description: 'Specifies if all items are selected.',
    values: 'true, false | null',
    default: 'null'
  },
  {
    key: 'prop',
    prop: 'loading',
    required: false,
    description: 'Specifies whether the table is in a loading state.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'prop',
    prop: 'popoverPlacement',
    required: true,
    description: 'The placement of the filter popover.',
    values: 'top, bottom, left, right',
    default: 'bottom'
  }
]

const tableItemInterface = [
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

const tableEmits = [
  {
    key: 'emit',
    event: 'onSelect',
    type: '(item: TableItem) => void',
    values: '',
    description: 'Emitted when an item is selected.'
  },
  {
    key: 'emit',
    event: 'onSelectAll',
    type: '(allSelected: boolean) => void',
    values: '',
    description: 'Emitted when all items are selected or deselected.'
  },
  {
    key: 'emit',
    event: 'onPageChange',
    type: '(page: number) => void',
    values: '',
    description: 'Emitted when the current page is changed.'
  },
  {
    key: 'emit',
    event: 'onLimitChange',
    type: '(limit: number) => void',
    values: '',
    description: 'Emitted when the page size limit is changed.'
  },
  {
    key: 'emit',
    event: 'onSort',
    type: '(sort: Sort | null) => void',
    values: '',
    description: 'Emitted when the sort configuration is changed.'
  },
  {
    key: 'emit',
    event: 'onFilter',
    type: '(data: TableItem[], key: string) => void',
    values: '',
    description: 'Emitted when a filter is applied.'
  }
]

const tableSlots = [
  {
    name: 'filter-content-${header.key}',
    description: 'Slot for customizing the popover displayed when clicking the filter icon.',
    example: '<template #filter-content-${header-key}><div class="custom-header-filter">Filter here!</div></template>'
  }
]

const sortInterface = [
  {
    prop: 'field',
    required: true,
    description: 'The key of the field to be sorted.',
    values: 'string',
    default: 'undefined'
  },
  {
    prop: 'direction',
    required: false,
    description: 'The direction of the sort. Can be ascending ("asc") or descending ("desc").',
    values: 'asc | desc | undefined',
    default: 'undefined'
  }
]

const filterInterface = [
  {
    prop: 'field',
    required: true,
    description: 'The key of the field to be filtered.',
    values: 'string',
    default: 'undefined'
  },
  {
    prop: 'value',
    required: true,
    description: 'The value to filter by. This can be of any type depending on the field being filtered.',
    values: 'unknown',
    default: 'undefined'
  }
]

const paginationInterface = [
  {
    prop: 'records',
    required: true,
    description: 'The records for the current page.',
    values: 'T[]',
    default: '[]'
  },
  {
    prop: 'total',
    required: true,
    description: 'The total number of records.',
    values: 'number',
    default: '0'
  },
  {
    prop: 'limit',
    required: true,
    description: 'The number of records per page.',
    values: 'number',
    default: '10'
  },
  {
    prop: 'offset',
    required: true,
    description: 'The offset for the current page. Indicates the starting point for the records on the current page.',
    values: 'number',
    default: '0'
  }
]

const tableHeaderInterface = [
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
    prop: 'field',
    required: true,
    description: 'The property of TableItem that this column should display.',
    values: 'keyof TableItem'
  },
  {
    key: 'example-04',
    prop: 'sortable',
    required: false,
    description: 'Specifies whether the column is sortable.',
    values: 'boolean',
    default: 'false'
  },
  {
    key: 'example-05',
    prop: 'filterable',
    required: false,
    description: 'Specifies whether the column is filterable.',
    values: 'boolean',
    default: 'false'
  },
  {
    key: 'example-06',
    prop: 'class',
    required: false,
    description: 'Additional classes for the column.',
    values: 'string'
  }
]
// API END
const { result: sortedResult, sort, setSort } = useClientSideSort(tableProps, { field: 'required', direction: 'desc' })
const { result: paginatedResult, setOffset, setLimit } = useClientSidePagination(sortedResult)

const selectionModeRef = ref<SelectionMode>('none')
const filteredData = ref<TableItem[]>(paginatedResult.value.records)

const newData: Ref<Pagination<TableItem>> = ref({
  records: filteredData,
  total: paginatedResult.value.total,
  limit: paginatedResult.value.limit,
  offset: paginatedResult.value.offset
})

type DataRecord = {
  [key: string]: unknown
}

const handleFilter = ({ key, searchValue }: { key: string; searchValue: string; }) => {
  const header = dataTable.value.headers.find((el) => el.key === key)

  if (!header) return

  filteredData.value = paginatedResult.value.records.filter(item => {
    const itemValue = (item as DataRecord)[header.field as string]
    return itemValue && itemValue.toString().toLowerCase().includes(searchValue.toLowerCase())
  })

  if (filteredData.value.length === 0) {
    filteredData.value = [{
      key: 'noResults',
      prop: 'Property not found',
      required: '',
      description: 'The item was not found.',
      values: ''
    }]
  }

  newData.value = {
    records: filteredData.value,
    total: paginatedResult.value.total,
    limit: paginatedResult.value.limit,
    offset: paginatedResult.value.offset
  }
}

watch(paginatedResult, (newValue) => {
  filteredData.value = newValue.records

  newData.value = {
    records: filteredData.value,
    total: newValue.total,
    limit: newValue.limit,
    offset: newValue.offset
  }
})

const dataTable = useDataTable({
  headers: propHeaders,
  paginatedResult: newData,
  selectionMode: selectionModeRef,
  selectAllStatus: undefined
})
</script>

<template>
  <doc-section
    title="Data Table"
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
          :popover-placement="form.popoverPlacement"
          @on-select="dataTable.handleSelect"
          @on-select-all="dataTable.handleSelectAll"
          @on-page-change="setOffset"
          @on-limit-change="setLimit"
          @on-sort="setSort"
          @on-filter="handleFilter"
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
        placeholder="Popover Placement"
        size="sm"
        :options="popoverPlacement"
        v-model="form.popoverPlacement"
      />
      <vk-select
        placeholder="Selection Mode"
        size="sm"
        :options="selectionMode"
        v-model="selectionModeRef"
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
            :data="tableHeaderInterface"
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
            :data="tableHeaderInterface"
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
            :data="tableHeaderInterface"
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
            :data="tableHeaderInterface"
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
          title="Table Slots"
          gap
        >
          <vk-table
            :headers="slotHeaders"
            :data="tableSlots"
          />
        </example-section>

        <example-section
          title="Table Emits"
          gap
        >
          <vk-table
            :headers="emitHeaders"
            :data="tableEmits"
          />
        </example-section>

        <example-section
          title="Table Item Interface"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="tableItemInterface"
          />
        </example-section>

        <example-section
          title="Table Header Interface"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="tableHeaderInterface"
          />
        </example-section>

        <example-section
          title="Table Sort Interface"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="sortInterface"
          />
        </example-section>

        <example-section
          title="Table Pagination Interface"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="paginationInterface"
          />
        </example-section>

        <example-section
          title="Table Filter Interface"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="filterInterface"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
