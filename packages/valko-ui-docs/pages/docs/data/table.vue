<script setup lang="ts">
import type { TableItem, TableProps } from '#valkoui'

const form = ref<Partial<TableProps>>({
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  striped: false
})

const tableProps: TableItem[] = [
  {
    key: 'headersKey',
    prop: 'headers',
    required: true,
    description: 'An array of objects defining the headers of the table.',
    values: 'TableHeader[]',
    default: '[]'
  },
  {
    key: 'dataKey',
    prop: 'data',
    required: true,
    description: 'An array of objects representing the data rows of the table.',
    values: 'TableItem[]',
    default: '[]'
  },
  {
    key: 'stripedKey',
    prop: 'striped',
    required: false,
    description: 'Specifies whether the table rows are striped for better readability.',
    values: 'boolean',
    default: 'false'
  },
  {
    key: 'selectedItemKey',
    prop: 'selectedItem',
    required: false,
    description: 'Helper prop to determine if a row is being selected using the key of the item pass by, only for styles purposes.',
    values: 'TableItem, TableItem[], undefined',
    default: 'undefined'
  },
  {
    key: 'rowEventsKey',
    prop: 'rowEvents',
    required: false,
    description: 'Allows rows to emit event onRowClick.',
    values: 'false, true',
    default: 'false'
  },
  {
    key: 'styleSlotsProp',
    prop: 'styleSlots',
    required: false,
    description: 'Custom styles for different parts of the Table component.',
    values: 'TableSlots',
    default: ''
  }
]

const styleSlotsInterface: TableItem[] = [
  {
    key: 'table',
    prop: 'table',
    required: false,
    description: 'Styles for the main table element.',
    values: 'string'
  },
  {
    key: 'header',
    prop: 'header',
    required: false,
    description: 'Styles for the table header section.',
    values: 'string'
  },
  {
    key: 'headerCell',
    prop: 'headerCell',
    required: false,
    description: 'Styles for individual header cells.',
    values: 'string'
  },
  {
    key: 'body',
    prop: 'body',
    required: false,
    description: 'Styles for the table body section.',
    values: 'string'
  },
  {
    key: 'row',
    prop: 'row',
    required: false,
    description: 'Styles for individual data rows.',
    values: 'string'
  },
  {
    key: 'cell',
    prop: 'cell',
    required: false,
    description: 'Styles for individual data cells.',
    values: 'string'
  },
  {
    key: 'noDataMessage',
    prop: 'noDataMessage',
    required: false,
    description: 'Styles for the no data message row.',
    values: 'string'
  }
]

const tableItem: TableItem[] = [
  {
    key: 'itemKey',
    prop: 'key',
    required: true,
    description: 'The unique identifier for the data row.',
    values: 'string'
  },
  {
    key: 'anyProp',
    prop: 'Any other property',
    required: false,
    description: 'Any other property specific to your data row.',
    values: 'unknown'
  }
]

const tableHeader: TableItem[] = [
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
    values: 'false, true',
    default: 'false'
  },
  {
    key: 'headerFilter',
    prop: 'filterable',
    required: false,
    description: 'Specifies whether the column is filterable.',
    values: 'false, true',
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

const emitData: TableItem[] = [
  {
    key: 'onRowClickEmit',
    event: 'onRowClick',
    type: '(item: TableItem) => void',
    values: '',
    description: 'Emitted when a row is clicked, only if prop rowEvents is true.'
  }
]

const slotData: TableItem[] = [
  {
    key: 'headerCellSlot',
    name: 'header-cell-${header.key}',
    description: 'Slot that displays by default the header label value.',
    example: '<template #header-cell-propKey>\n  <p>Properties</p>\n</template>'
  },
  {
    key: 'cellSlot',
    name: 'cell-${field}',
    description: 'Slot that displays by default the item field value.',
    example: '<template #cell-prop-propKey>\n  <p>Data</p>\n</template>'
  },
  {
    key: 'noDataMessageSlot',
    name: 'no-data-message',
    description: 'Slot that display the message when no data is found.',
    example: '<template #no-data-message>\n  <p>No items found.</p>\n</template>'
  }
]

const scriptCode = `
<script setup lang="ts">
import type { TableItem, TableHeader } from '#valkoui'

const headers: TableHeader[] = [
  {
    key: 'prop',
    field: 'prop',
    label: 'Property'
  },
  {
    key: 'required',
    field: 'required',
    label: 'Required'
  },
  {
    key: 'description',
    field: 'description',
    label: 'Description'
  },
  {
    key: 'values',
    field: 'values',
    label: 'Values'
  },
  {
    key: 'default',
    field: 'default',
    label: 'Default'
  }
]

const data: TableItem[] = [
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
    values: 'false, true',
    default: 'false'
  },
  {
    key: 'headerFilter',
    prop: 'filterable',
    required: false,
    description: 'Specifies whether the column is filterable.',
    values: 'false, true',
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
<\u002Fscript>
`

const extraProps = ':headers="headers" :data="data"'

const generateSnippet = snippetGeneratorFactory('vk-table')
</script>

<template>
  <doc-section
    title="Table"
    description="A versatile and customizable table component designed to display data in a structured format."
  >
    <template #playground-view>
      <vk-table
        :variant="form.variant"
        :shape="form.shape"
        :size="form.size"
        :striped="form.striped"
        :data="tableHeader"
        :headers="propHeaders"
      />
    </template>
    <template #playground-options>
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
      <vk-checkbox
        v-model="form.striped"
        label="Striped"
      />
    </template>

    <template #examples>
      <example-section title="Variants">
        <div
          v-for="variant in variantOptions.general"
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

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('variant', { values: variantOptions.general.map(o => o.value), extraProps })}`" />
        </template>
      </example-section>

      <example-section title="Shapes">
        <div
          v-for="shape in shapeOptions.general"
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

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('shape', { values: shapeOptions.general.map(o => o.value), extraProps })}`" />
        </template>
      </example-section>

      <example-section title="Sizes">
        <div
          v-for="size in sizeOptions.general"
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

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('size', { values: sizeOptions.general.map(o => o.value), extraProps })}`" />
        </template>
      </example-section>
    </template>

    <template #api>
      <h3>Table Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="tableProps"
      />

      <h3>Style Slots Interface</h3>
      <vk-table
        :headers="propHeaders"
        :data="styleSlotsInterface"
      />

      <h3>Table Item Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="tableItem"
      />

      <h3>Table Header Props</h3>
      <vk-table
        :headers="propHeaders"
        :data="tableHeader"
      />

      <h3>Table Emits</h3>
      <vk-table
        :headers="emitHeaders"
        :data="emitData"
      />

      <h3>Table Slots</h3>
      <vk-table
        :headers="slotHeaders"
        :data="slotData"
      />
    </template>
  </doc-section>
</template>
