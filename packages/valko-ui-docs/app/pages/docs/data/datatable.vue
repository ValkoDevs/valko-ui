<script setup lang="ts">
import type { DataTableProps, SelectionMode, SelectOption, TableItem } from '#valkoui'
import { useClientSideDataTable } from '#valkoui'

const form = ref<Partial<DataTableProps>>({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  label: 'Page Size',
  striped: false
})

const selectionOptions: SelectOption<SelectionMode>[] = [
  { value: 'single', label: 'Single' },
  { value: 'multiple', label: 'Multiple' },
  { value: 'rowSingle', label: 'Row Single' },
  { value: 'rowMultiple', label: 'Row Multiple' },
  { value: 'none', label: 'None' }
]

// API
const tableProps: TableItem[] = [
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
    values: 'primary, secondary, positive, accent, warning, negative',
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
    key: 'labelProp',
    prop: 'labelProp',
    required: false,
    description: 'The label for the select size.',
    values: 'string',
    default: ''
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

const tableItemInterface: TableItem[] = [
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

const tableEmits: TableItem[] = [
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

const tableSlots: TableItem[] = [
  {
    key: 'filterContentSlot',
    name: 'filter-content-${header.key}',
    description: 'Slot for customizing the popover displayed when clicking the filter icon.',
    example: '<template #filter-content-${header-key}><div class="custom-header-filter">Filter here!</div></template>'
  }
]

const sortInterface: TableItem[] = [
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

const filterInterface: TableItem[] = [
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

const paginationInterface: TableItem[] = [
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

const tableHeaderInterface: TableItem[] = [
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

const clientSideDataTableProps: TableItem[] = [
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
const draggableRef = ref<boolean>(false)

const dataTable = useClientSideDataTable({
  headers: propHeaders,
  data: tableProps,
  selectionMode: selectionModeRef,
  pageSizeOptions: [2, 5, 10, 20],
  draggable: draggableRef
})

const exampleTables = useClientSideDataTable({
  headers: propHeaders,
  data: tableHeaderInterface,
  selectionMode: 'none',
  pageSizeOptions: [10],
  draggable: false
})

watch(() => draggableRef, (newValue) => {
  draggableRef.value = newValue.value
})

const scriptCode = `
<script setup lang="ts">
import type { TableItem, TableHeader } from '#valkoui'
import { useClientSideDataTable } from '#valkoui'

const propHeaders: TableHeader[] = [
  {
    key: 'prop',
    field: 'prop',
    label: 'Property',
    sortable: true,
    filterable: true
  },
  {
    key: 'required',
    field: 'required',
    label: 'Required',
    sortable: true,
    filterable: true
  },
  {
    key: 'description',
    field: 'description',
    label: 'Description',
    sortable: true,
    filterable: true
  },
  {
    key: 'values',
    field: 'values',
    label: 'Values',
    sortable: true,
    filterable: true
  },
  {
    key: 'default',
    field: 'default',
    label: 'Default',
    sortable: true,
    filterable: true
  }
]

const propData: TableItem[] = [
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
    values: 'primary, secondary, positive, accent, warning, negative',
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
  }
]

const dataTable = useClientSideDataTable({
  headers: propHeaders,
  data: propData,
  selectionMode: none,
  pageSizeOptions: [2, 5, 10, 20],
  draggable: false
})
<\u002Fscript>
`

const extraProps = `v-bind="dataTable"
@on-sort="dataTable.onSort"
@on-filter="dataTable.onFilter"
@on-page-change="dataTable.onPageChange"
@on-limit-change="dataTable.onLimitChange"
@on-select="dataTable.onSelect"
@on-select-all="dataTable.onSelectAll"
@on-drag-start="dataTable.onDragStart"
@on-drag-over="dataTable.onDragOver"
@on-drop="dataTable.onDrop"
`

const generateSnippet = snippetGeneratorFactory('vk-data-table')
</script>

<template>
  <doc-section
    title="Data Table"
    description="A more complex Table component that allows to sort, filter & edit the data that contains."
  >
    <template #playground-view>
      <vk-data-table
        v-bind="dataTable"
        :color="form.color"
        :variant="form.variant"
        :shape="form.shape"
        :size="form.size"
        :striped="form.striped"
        :label="form.label"
        @on-sort="dataTable.onSort"
        @on-filter="dataTable.onFilter"
        @on-page-change="dataTable.onPageChange"
        @on-limit-change="dataTable.onLimitChange"
        @on-select="dataTable.onSelect"
        @on-select-all="dataTable.onSelectAll"
        @on-drag-start="dataTable.onDragStart"
        @on-drag-over="dataTable.onDragOver"
        @on-drop="dataTable.onDrop"
      />
    </template>

    <template #playground-options>
      <vk-input
        v-model="form.label"
        label="Label"
        size="sm"
      />
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
        :options="variantOptions.general"
      />
      <vk-select
        v-model="form.shape"
        label="Shape"
        size="sm"
        :options="shapeOptions.general"
      />
      <vk-select
        v-model="form.size"
        label="Size"
        size="sm"
        :options="sizeOptions.general"
      />
      <vk-select
        v-model="selectionModeRef"
        label="Selection Mode"
        size="sm"
        :options="selectionOptions"
      />
      <vk-checkbox
        v-model="draggableRef"
        label="Draggable"
      />
      <vk-checkbox
        v-model="form.striped"
        label="Striped"
      />
    </template>

    <template #examples>
      <example-section title="Colors">
        <div
          v-for="color in colorOptions.general"
          :key="color.value"
        >
          <span>{{ color.label }}</span>
          <vk-data-table
            :color="color.value"
            v-bind="exampleTables"
            label="Page Size"
            class="mt-4"
            @on-sort="exampleTables.onSort"
            @on-filter="exampleTables.onFilter"
            @on-page-change="exampleTables.onPageChange"
            @on-limit-change="exampleTables.onLimitChange"
          />
        </div>

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('color', { values: colorOptions.general.map(o => o.value), extraProps })}`" />
        </template>
      </example-section>

      <example-section title="Variants">
        <div
          v-for="variant in variantOptions.general"
          :key="variant.value"
          class="flex flex-col"
        >
          <span>
            {{ variant.label }}
          </span>
          <vk-data-table
            :variant="variant.value"
            v-bind="exampleTables"
            label="Page Size"
            class="mt-4"
            @on-sort="exampleTables.onSort"
            @on-filter="exampleTables.onFilter"
            @on-page-change="exampleTables.onPageChange"
            @on-limit-change="exampleTables.onLimitChange"
          />
        </div>

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('variant', { values: variantOptions.general.map(o => o.value), extraProps })}`" />
        </template>
      </example-section>

      <example-section title="Shapes">
        <div
          v-for="shape in shapeOptions.general"
          :key="shape.value"
          class="flex flex-col"
        >
          <span>
            {{ shape.label }}
          </span>
          <vk-data-table
            :shape="shape.value"
            v-bind="exampleTables"
            label="Page Size"
            class="mt-4"
            @on-sort="exampleTables.onSort"
            @on-filter="exampleTables.onFilter"
            @on-page-change="exampleTables.onPageChange"
            @on-limit-change="exampleTables.onLimitChange"
          />
        </div>

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('shape', { values: shapeOptions.general.map(o => o.value), extraProps })}`" />
        </template>
      </example-section>

      <example-section title="Sizes">
        <div
          v-for="size in sizeOptions.general"
          :key="size.value"
          class="flex flex-col"
        >
          <span>
            {{ size.label }}
          </span>
          <vk-data-table
            :size="size.value"
            v-bind="exampleTables"
            label="Page Size"
            class="mt-4"
            @on-sort="exampleTables.onSort"
            @on-filter="exampleTables.onFilter"
            @on-page-change="exampleTables.onPageChange"
            @on-limit-change="exampleTables.onLimitChange"
          />
        </div>

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('size', { values: sizeOptions.general.map(o => o.value), extraProps })}`" />
        </template>
      </example-section>

      <example-section title="Striped">
        <vk-data-table
          striped
          v-bind="exampleTables"
          label="Page Size"
          class="mt-4"
          @on-sort="exampleTables.onSort"
          @on-filter="exampleTables.onFilter"
          @on-page-change="exampleTables.onPageChange"
          @on-limit-change="exampleTables.onLimitChange"
        />

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<boolean>('striped', { values: [true], extraProps })}`" />
        </template>
      </example-section>
    </template>

    <template #api>
      <h3>Table Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="tableProps"
      />

      <h3>Table Slots</h3>
      <vk-table
        :headers="slotHeaders"
        :data="tableSlots"
      />

      <h3>Table Emits</h3>
      <vk-table
        :headers="emitHeaders"
        :data="tableEmits"
      />

      <h3>Table Item Interface</h3>
      <vk-table
        :headers="propHeaders"
        :data="tableItemInterface"
      />

      <h3>Table Header Interface</h3>
      <vk-table
        :headers="propHeaders"
        :data="tableHeaderInterface"
      />

      <h3>Table Sort Interface</h3>
      <vk-table
        :headers="propHeaders"
        :data="sortInterface"
      />

      <h3>Table Pagination Interface</h3>
      <vk-table
        :headers="propHeaders"
        :data="paginationInterface"
      />

      <h3>Table Filter Interface</h3>
      <vk-table
        :headers="propHeaders"
        :data="filterInterface"
      />

      <h3>Composable Client Side Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="clientSideDataTableProps"
      />
    </template>
  </doc-section>
</template>
