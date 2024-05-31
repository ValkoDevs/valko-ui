<script setup lang="ts">
import { ref } from 'vue'
import DocSection from '@/components/DocSection'
import ExampleSection from '@/components/ExampleSection'
import variantOptions from '@/data/variantOptions'
import colorOptions from '@/data/colorOptions'
import sizeOptions from '@/data/sizeOptions'
import propHeaders from '@/data/propHeaders'
import shapeOptions from '@/data/shapeOptions'
import emitHeaders from '@/data/emitHeaders'
import slotHeaders from '@/data/slotHeaders'
import type { TableItem } from '@valko-ui/components'

const form = ref({
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  sortBy: null,
  sortDir: 'asc',
  selectable: 'single',
  selectionType: 'row',
  striped: false,
  loading: false,
  flat: false,
  layout: 'auto',
  bulkDelete: false,
  actions: false,
  records: 5,
  page: 1
})

const layout = [
  { value: 'auto', label: 'Auto' },
  { value: 'fixed', label: 'Fixed' }
]

const colors = [
  ...colorOptions,
  { value: 'neutral', label: 'Neutral' }
]

const selectable = [
  { value: 'single', label: 'Single' },
  { value: 'multiple', label: 'Multiple' },
  { value: 'none', label: 'None' }
]

const selectionType = [
  { value: 'check', label: 'Check' },
  { value: 'row', label: 'Row' },
  { value: 'none', label: 'None' }
]

const sortDir = [
  { value: 'asc', label: 'Ascendant' },
  { value: 'desc', label: 'Descendant' }
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
  },
  {
    prop: 'example-03',
    required: true,
    description: 'Example prop for test pourpuses, example-03.',
    values: 'string'
  },
  {
    prop: 'example-04',
    required: true,
    description: 'Example prop for test pourpuses, example-04.',
    values: 'string'
  },
  {
    prop: 'example-05',
    required: true,
    description: 'Example prop for test pourpuses, example-05.',
    values: 'boolean'
  }
])

const selectedItems = ref<TableItem[]>([])

const handleSelectedItems = (items: TableItem[]) => {
  // Limpiar la lista de elementos seleccionados y añadir los nuevos elementos seleccionados
  selectedItems.value = items
}

//const deleteSelectedItems = (itemsToDelete?: TableItem[]) => {
//  const items = itemsToDelete || selectedItems.value
//  items.forEach(selectedItem => {
//    const selectedIndex = tableItems.value.findIndex(item => item.key === selectedItem.key)
//    if (selectedIndex !== -1) {
//      tableItems.value.splice(selectedIndex, 1)
//    }
//  })
//}
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
          :sort-by="form.sortBy"
          :sort-dir="form.sortDir"
          :selectable="form.selectable"
          :selection-type="form.selectionType"
          :striped="form.striped"
          :loading="form.loading"
          :flat="form.flat"
          :layout="form.layout"
          :headers="propHeaders"
          :data="tableItems"
          :records="form.records"
          :page="form.page"
          @selected-items="handleSelectedItems"
          @update:page="form.page"
        >
          <template
            #header-actions
            v-if="form.bulkDelete"
          >
            <vk-button
              size="xs"
              color="error"
            >
              Bulk Delete
            </vk-button>
          </template>
          <template
            #row-actions="{}"
            v-if="form.actions"
          >
            <vk-button
              size="xs"
              color="info"
            >
              Edit Item
            </vk-button>
          </template>
        </vk-data-table>
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
      <vk-select
        placeholder="Layout"
        size="sm"
        :options="layout"
        v-model="form.layout"
      />
      <vk-select
        placeholder="Selectable"
        size="sm"
        :options="selectable"
        v-model="form.selectable"
      />
      <vk-select
        placeholder="Selection Type"
        size="sm"
        :options="selectionType"
        v-model="form.selectionType"
      />
      <vk-select
        placeholder="Sort Direction"
        size="sm"
        :options="sortDir"
        v-model="form.sortDir"
      />
      <vk-input
        label="Records"
        size="sm"
        v-model="form.records"
        type="number"
      />
      <vk-input
        label="Page"
        size="sm"
        v-model="form.page"
        type="number"
      />
      <vk-checkbox
        label="Flat"
        v-model="form.flat"
      />
      <vk-checkbox
        label="Striped"
        v-model="form.striped"
      />
      <vk-checkbox
        label="Loading"
        v-model="form.loading"
      />
      <vk-checkbox
        label="Header Actions"
        v-model="form.bulkDelete"
      />
      <vk-checkbox
        label="Item Actions"
        v-model="form.actions"
      />
    </template>

    <template #examples>
      <example-section
        title="Colors"
        justify="start"
        gap
        wrap
      >
        <div class="grid grid-cols-2 gap-4">
          <div
            v-for="color in colors"
            :key="color.value"
          >
            <span>
              {{ color.label }}
            </span>
            <vk-data-table
              :color="color.value"
              :headers="propHeaders"
              :data="tableHeader"
              class="mt-4"
            />
          </div>
        </div>
      </example-section>

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
            <vk-data-table
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
            <vk-data-table
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
            <vk-data-table
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
          <vk-data-table
            :headers="propHeaders"
            :data="tableProps"
          />
        </example-section>

        <example-section
          title="Table Item Props"
          gap
        >
          <vk-data-table
            :headers="propHeaders"
            :data="tableItem"
          />
        </example-section>

        <example-section
          title="Table Header Props"
          gap
        >
          <vk-data-table
            :headers="propHeaders"
            :data="tableHeader"
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
