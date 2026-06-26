<script setup lang="ts">
import type { TableProps, TableItem } from '#valkoui'

const form = ref<Partial<TableProps>>({
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  striped: false
})

const tableProps: PropData[] = [
  {
    key: 'headersKey',
    prop: 'headers',
    required: true,
    description: 'An array of objects defining the headers of the table.',
    values: 'TableHeader[]',
    default: '[]',
    apiType: 'custom-type'
  },
  {
    key: 'dataKey',
    prop: 'data',
    required: true,
    description: 'An array of objects representing the data rows of the table.',
    values: 'TableItem[]',
    default: '[]',
    apiType: 'custom-type'
  },
  {
    key: 'stripedKey',
    prop: 'striped',
    required: false,
    description: 'Specifies whether the table rows are striped for better readability.',
    values: 'boolean',
    default: 'false',
    apiType: 'primitive'
  },
  {
    key: 'selectedItemKey',
    prop: 'selectedItem',
    required: false,
    description: 'Helper prop to determine if a row is being selected using the key of the item pass by, only for styles purposes.',
    values: 'TableItem, TableItem[], undefined',
    default: 'undefined',
    apiType: 'custom-type'
  },
  {
    key: 'rowEventsKey',
    prop: 'rowEvents',
    required: false,
    description: 'Allows rows to emit event onRowClick.',
    values: 'boolean',
    default: 'false',
    apiType: 'primitive'
  },
  {
    key: 'styleSlotsProp',
    prop: 'styleSlots',
    required: false,
    description: 'Custom styles for different parts of the Table component.',
    values: 'TableSlots',
    default: '',
    apiType: 'custom-type'
  }
]

const styleSlotsInterface: PropData[] = [
  {
    key: 'container',
    prop: 'container',
    required: false,
    description: 'Root container for the table component.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'table',
    prop: 'table',
    required: false,
    description: 'Styles for the <table> element.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'thead',
    prop: 'thead',
    required: false,
    description: 'Styles for the table header section.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'tr',
    prop: 'tr',
    required: false,
    description: 'Styles for table rows.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'th',
    prop: 'th',
    required: false,
    description: 'Styles for table header cells.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'body',
    prop: 'body',
    required: false,
    description: 'Styles for the table body section.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'td',
    prop: 'td',
    required: false,
    description: 'Styles for table data cells.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'noDataMessage',
    prop: 'noDataMessage',
    required: false,
    description: 'Styles for the no data message row.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'tableFooter',
    prop: 'tableFooter',
    required: false,
    description: 'Styles for the table footer section.',
    values: 'string[]',
    default: '',
    apiType: 'primitive'
  }
]

const tableItem: PropData[] = [
  {
    key: 'itemKey',
    prop: 'key',
    required: true,
    description: 'The unique identifier for the data row.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'anyProp',
    prop: '[\'string\']',
    required: false,
    description: 'Any other property specific to your data row.',
    values: 'string, number, boolean, null',
    default: '',
    apiType: 'primitive'
  }
]

const tableHeader: PropData[] = [
  {
    key: 'headerKey',
    prop: 'key',
    required: true,
    description: 'The unique identifier for the column.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'headerLabel',
    prop: 'label',
    required: true,
    description: 'The label to display for the column header.',
    values: 'string',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'headerField',
    prop: 'field',
    required: true,
    description: 'The property of TableItem that this column should display.',
    values: 'keyof TableItem',
    default: '',
    apiType: 'primitive'
  },
  {
    key: 'headerSort',
    prop: 'sortable',
    required: false,
    description: 'Specifies whether the column is sortable.',
    values: 'boolean',
    default: 'false',
    apiType: 'primitive'
  },
  {
    key: 'headerFilter',
    prop: 'filterable',
    required: false,
    description: 'Specifies whether the column is filterable.',
    values: 'boolean',
    default: 'false',
    apiType: 'primitive'
  }
]

const emitData: EmitData[] = [
  {
    key: 'onRowClickEmit',
    event: 'onRowClick',
    type: '(item: TableItem) => void',
    values: '',
    description: 'Emitted when a row is clicked, only if prop rowEvents is true.',
    apiType: 'function'
  }
]

const slotData: SlotData[] = [
  {
    key: 'headerCellSlot',
    name: 'header-cell-${header.key}',
    description: 'Slot that displays by default the header label value.',
    example: '<template #header-cell-propKey>\n  <p>Properties</p>\n</template>',
    apiType: 'slot'
  },
  {
    key: 'cellSlot',
    name: 'cell-${field}',
    description: 'Slot that displays by default the item field value.',
    example: '<template #cell-prop-propKey>\n  <p>Data</p>\n</template>',
    apiType: 'slot'
  },
  {
    key: 'noDataMessageSlot',
    name: 'no-data-message',
    description: 'Slot that display the message when no data is found.',
    example: '<template #no-data-message>\n  <p>No items found.</p>\n</template>',
    apiType: 'slot'
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
        :data="tableHeader as unknown as TableItem[]"
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
            :data="tableHeader as unknown as TableItem[]"
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
            :data="tableHeader as unknown as TableItem[]"
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
            :data="tableHeader as unknown as TableItem[]"
            class="mt-4"
          />
        </div>

        <template #code>
          <code-block :code="`${scriptCode}\n${generateSnippet<string>('size', { values: sizeOptions.general.map(o => o.value), extraProps })}`" />
        </template>
      </example-section>
    </template>

    <template #api>
      <api-table
        name="Table"
        :tables="[
          { title: 'Props', data: tableProps, headers: 'props' },
          { title: 'Emits', data: emitData, headers: 'emits' },
          { title: 'Slots', data: slotData, headers: 'slots' },
          { title: 'Style Slots', data: styleSlotsInterface, headers: 'interface' },
          { title: 'Table Item', data: tableItem, headers: 'interface' },
          { title: 'Table Header', data: tableHeader, headers: 'interface' }
        ]"
      />
    </template>
  </doc-section>
</template>
