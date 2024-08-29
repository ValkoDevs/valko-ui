<script setup lang="ts">
import { reactive, ref, watch } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import colorOptions from '@/data/colorOptions'
import variantOptions from '@/data/variantOptions'
import sizeOptions from '@/data/sizeOptions'
import shapeOptions from '@/data/shapeOptions'
import propHeaders from '@/data/propHeaders'
import emitHeaders from '@/data/emitHeaders'
import slotHeaders from '@/data/slotHeaders'
import { type SelectionMode, useClientSideDataTable } from '@valko-ui/components'

const form = reactive({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  striped: false,
  draggable: false
})

const selectionOptions = [
  { value: 'single', label: 'Single' },
  { value: 'multiple', label: 'Multiple' },
  { value: 'rowSingle', label: 'Row Single' },
  { value: 'rowMultiple', label: 'Row Multiple' },
  { value: 'none', label: 'None' }
]

// API
const tableProps = [
  {
    key: 'header',
    prop: 'headers',
    required: true,
    description: 'An array of objects defining the headers of the table.',
    values: 'TableHeader[]',
    default: '[]'
  },
  {
    key: 'data',
    prop: 'data',
    required: true,
    description: 'An array of objects representing the data rows of the table.',
    values: 'TableItem[]',
    default: '[]'
  },
  {
    key: 'color',
    prop: 'color',
    required: false,
    description: 'The color theme of the table.',
    values: 'primary, neutral, success, info, warning, error',
    default: 'primary'
  },
  {
    key: 'variant',
    prop: 'variant',
    required: false,
    description: 'The variant of the table.',
    values: 'filled, outlined, ghost',
    default: 'filled'
  },
  {
    key: 'shape',
    prop: 'shape',
    required: false,
    description: 'The shape of the table.',
    values: 'soft, rounded, square',
    default: 'soft'
  },
  {
    key: 'size',
    prop: 'size',
    required: false,
    description: 'The size of the table.',
    values: 'xs, sm, md, lg',
    default: 'md'
  },
  {
    key: 'striped',
    prop: 'striped',
    required: false,
    description: 'Specifies whether the table rows are striped for better readability.',
    values: 'true, false',
    default: 'false'
  },
  {
    key: 'selectionMode',
    prop: 'selectionMode',
    required: false,
    description: 'Controls the selection behavior of the table.',
    values: 'single, multiple, row, none',
    default: 'none'
  },
  {
    key: 'sort',
    prop: 'sort',
    required: false,
    description: 'The sorting configuration of the table.',
    values: 'Sort',
    default: ''
  },
  {
    key: 'pagination',
    prop: 'pagination',
    required: false,
    description: 'The pagination configuration of the table.',
    values: 'Pagination<TableItem>',
    default: '() => ({ records: [], total: 0, limit: 10, offset: 0 })'
  },
  {
    key: 'filters',
    prop: 'filters',
    required: false,
    description: 'The filters applied to the table.',
    values: 'Filter[]',
    default: '() => []'
  },
  {
    key: 'pageSizeOptions',
    prop: 'pageSizeOptions',
    required: false,
    description: 'Options for page size selection.',
    values: 'number[]',
    default: '() => [10, 20, 50, 100]'
  },
  {
    key: 'selection',
    prop: 'selection',
    required: false,
    description: 'The selected items in the table.',
    values: 'TableItem[] | TableItem',
    default: 'undefined'
  },
  {
    key: 'isAllSelected',
    prop: 'isAllSelected',
    required: false,
    description: 'Specifies if all items are selected.',
    values: 'true, false | null',
    default: 'null'
  },
  {
    key: 'loading',
    prop: 'loading',
    required: false,
    description: 'Specifies whether the table is in a loading state.',
    values: 'true, false',
    default: 'false'
  }
]

const tableItemInterface = [
  {
    key: 'key',
    prop: 'key',
    required: true,
    description: 'The unique identifier for the data row.',
    values: 'string'
  },
  {
    key: 'customProp',
    prop: 'Any other property',
    required: false,
    description: 'Any other property specific to your data row.',
    values: 'unknown'
  }
]

const tableEmits = [
  {
    key: 'emitSelect',
    event: 'onSelect',
    type: '(item: TableItem) => void',
    values: '',
    description: 'Emitted when an item is selected.'
  },
  {
    key: 'emitSelectAll',
    event: 'onSelectAll',
    type: '(allSelected: boolean) => void',
    values: '',
    description: 'Emitted when all items are selected or deselected.'
  },
  {
    key: 'emitPageChange',
    event: 'onPageChange',
    type: '(page: number) => void',
    values: '',
    description: 'Emitted when the current page is changed.'
  },
  {
    key: 'emitLimitChange',
    event: 'onLimitChange',
    type: '(limit: number) => void',
    values: '',
    description: 'Emitted when the page size limit is changed.'
  },
  {
    key: 'emitSort',
    event: 'onSort',
    type: '(sort: Sort | null) => void',
    values: '',
    description: 'Emitted when the sort configuration is changed.'
  },
  {
    key: 'emitFilter',
    event: 'onFilter',
    type: '(data: TableItem[], key: string) => void',
    values: '',
    description: 'Emitted when a filter is applied.'
  },
  {
    key: 'dragStart',
    event: 'dragStart',
    type: '(index: number) => void',
    values: '',
    description: 'Emitted when dragging starts on an item.'
  },
  {
    key: 'dragOver',
    event: 'dragOver',
    type: '(event: DragEvent) => void',
    values: '',
    description: 'Emitted when dragging over an area.'
  },
  {
    key: 'dragDrop',
    event: 'dragDrop',
    type: '(event: DragEvent, index: number) => void',
    values: '',
    description: 'Emitted when an item is dropped.'
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
    key: 'sortField',
    prop: 'field',
    required: true,
    description: 'The key of the field to be sorted.',
    values: 'string',
    default: 'undefined'
  },
  {
    key: 'sortDirection',
    prop: 'direction',
    required: false,
    description: 'The direction of the sort. Can be ascending ("asc") or descending ("desc").',
    values: 'asc | desc | undefined',
    default: 'undefined'
  }
]

const filterInterface = [
  {
    key: 'filterField',
    prop: 'field',
    required: true,
    description: 'The key of the field to be filtered.',
    values: 'string',
    default: 'undefined'
  },
  {
    key: 'filterValue',
    prop: 'value',
    required: true,
    description: 'The value to filter by. This can be of any type depending on the field being filtered.',
    values: 'unknown',
    default: 'undefined'
  }
]

const paginationInterface = [
  {
    key: 'pagRecords',
    prop: 'records',
    required: true,
    description: 'The records for the current page.',
    values: 'T[]',
    default: '[]'
  },
  {
    key: 'pagTotal',
    prop: 'total',
    required: true,
    description: 'The total number of records.',
    values: 'number',
    default: '0'
  },
  {
    key: 'pagLimit',
    prop: 'limit',
    required: true,
    description: 'The number of records per page.',
    values: 'number',
    default: '10'
  },
  {
    key: 'pagOffset',
    prop: 'offset',
    required: true,
    description: 'The offset for the current page. Indicates the starting point for the records on the current page.',
    values: 'number',
    default: '0'
  }
]

const tableHeaderInterface = [
  {
    key: 'headerKey',
    prop: 'key',
    required: true,
    description: 'The unique identifier for the column.',
    values: 'string'
  },
  {
    key: 'headerLabel',
    prop: 'label',
    required: true,
    description: 'The label to display for the column header.',
    values: 'string'
  },
  {
    key: 'headerField',
    prop: 'field',
    required: true,
    description: 'The property of TableItem that this column should display.',
    values: 'keyof TableItem'
  },
  {
    key: 'headerSort',
    prop: 'sortable',
    required: false,
    description: 'Specifies whether the column is sortable.',
    values: 'boolean',
    default: 'false'
  },
  {
    key: 'headerFilter',
    prop: 'filterable',
    required: false,
    description: 'Specifies whether the column is filterable.',
    values: 'boolean',
    default: 'false'
  },
  {
    key: 'headerClass',
    prop: 'class',
    required: false,
    description: 'Additional classes for the column.',
    values: 'string'
  }
]

const clientSideDataTableProps = [
  {
    key: 'data',
    prop: 'data',
    required: true,
    description: 'An array of objects representing the data rows of the table.',
    values: 'T[] | Ref<T[]>',
    default: '[]'
  },
  {
    key: 'headers',
    prop: 'headers',
    required: true,
    description: 'An array of objects defining the headers of the table.',
    values: 'TableHeader[]',
    default: '[]'
  },
  {
    key: 'selectionMode',
    prop: 'selectionMode',
    required: false,
    description: 'The mode of selection (single, multiple, or none).',
    values: 'SelectionMode | Ref<SelectionMode>',
    default: 'none'
  },
  {
    key: 'pageSizeOptions',
    prop: 'pageSizeOptions',
    required: false,
    description: 'An array of page size options for pagination.',
    values: 'number[]',
    default: '[10, 20, 50, 100]'
  },
  {
    key: 'draggable',
    prop: 'draggable',
    required: false,
    description: 'Determines if table rows are draggable.',
    values: 'boolean | Ref<boolean>',
    default: 'false'
  }
]
// API END
const selectionModeRef = ref<SelectionMode>('none')
const draggableRef = ref<boolean>(form.draggable)

const dataTable = useClientSideDataTable({
  headers: propHeaders,
  data: tableProps,
  selectionMode: selectionModeRef,
  pageSizeOptions: [2, 5, 10, 20],
  draggable: draggableRef
})

watch(() => form.draggable, (newValue: boolean) => {
  draggableRef.value = newValue
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
          v-bind="dataTable"
          :color="form.color"
          :variant="form.variant"
          :shape="form.shape"
          :size="form.size"
          :striped="form.striped"
          @on-sort="dataTable.onSort"
          @on-filter="dataTable.onFilter"
          @on-page-change="dataTable.onPageChange"
          @on-limit-change="dataTable.onLimitChange"
          @on-select="dataTable.onSelect"
          @on-select-all="dataTable.onSelectAll"
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
        :options="selectionOptions"
        v-model="selectionModeRef"
      />
      <vk-checkbox
        label="Draggable"
        v-model="form.draggable"
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

      <example-section
        title="Striped"
        justify="start"
        wrap
      >
        <vk-data-table
          striped
          :headers="propHeaders"
          :data="tableHeaderInterface"
          class="mt-4"
        />
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

        <example-section
          title="Composable Client Side Props"
          gap
        >
          <vk-table
            :headers="propHeaders"
            :data="clientSideDataTableProps"
          />
        </example-section>
      </div>
    </template>
  </doc-section>
</template>
