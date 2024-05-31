<script setup lang="ts">
import { ref, watch, computed } from 'vue'
import type { DataTableProps, TableItem, TableHeader } from '#valkoui/types/Table'
import type { SlotStyles } from '#valkoui/types/common'
import useStyle from '#valkoui/composables/useStyle.ts'
import styles from '#valkoui/styles/DataTable.styles.ts'
import VkCheckbox from './Checkbox.vue'
import VkRadio from './Radio.vue'
import VkTable from './Table.vue'
import VkPagination from './Pagination.vue'
import { v4 as uuid } from 'uuid'

defineOptions({ name: 'VkDataTable' })

const props = withDefaults(defineProps<DataTableProps>(), {
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  selectable: 'none',
  selectionType: 'none',
  striped: false,
  records: 10,
  page: 1
})

const emit = defineEmits(['selectedItems', 'update:page'])

const classes = useStyle<DataTableProps, SlotStyles>(props, styles)

// declaration of vars

const selectedItems = ref<TableItem[]>([])
const allItemsSelected = ref(false)
const currentPage = ref(props.page)
const itemsPerPage = computed(() => props.records)
const totalPages = computed(() => Math.ceil(props.data.length / itemsPerPage.value))

// maping props

const mapedHeaders = computed(() => {
  const headers: TableHeader[] = [...props.headers]

  if (props.selectionType === 'check') {
    headers.unshift({
      key: 'selection',
      field: 'selection',
      label: 'Selection',
      sortable: false,
      filterable: true
    })
  }

  return headers
})

const mapedData = computed(() => {
  return props.data.map((item) => ({
    ...item,
    key: item.key || uuid(),
    selected: !!item.selected
  }))
})

// pagination
const changePage = (newPage: number) => {
  currentPage.value = newPage
  emit('update:page', newPage)
}

const paginatedData = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage.value
  const end = start + itemsPerPage.value
  return mapedData.value.slice(start, end)
})

// emit func

const emitSelectedItems = () => {
  emit('selectedItems', selectedItems.value)
}

// Selection items funcs

const toggleSelection = (item: TableItem) => {
  if (props.selectable === 'multiple') {
    if (item.selected) {
      selectedItems.value.push(item)
    } else {
      const index = selectedItems.value.findIndex(selected => selected.key === item.key)
      if (index !== -1) {
        selectedItems.value.splice(index, 1)
      }
    }
  }

  if (props.selectable === 'single') {
    selectedItems.value.forEach(selectedItem => {
      selectedItem.selected = false
    })
    item.selected = true
    selectedItems.value = [item]
  }

  emitSelectedItems()
}

const toggleAllSelection = () => {
  allItemsSelected.value = !allItemsSelected.value
  selectedItems.value = []

  paginatedData.value.forEach((item) => {
    item.selected = allItemsSelected.value
    if (allItemsSelected.value) {
      selectedItems.value.push(item)
    }
  })

  emitSelectedItems()
}

const isIndeterminate = computed(() => {
  const totalSelected = selectedItems.value.length
  return totalSelected > 0 && totalSelected < paginatedData.value.length
})

// watchers

watch(
  () => props.page,
  (newPage) => {
    currentPage.value = newPage
  }
)

watch(
  () => props.data,
  () => {
    selectedItems.value = []
    allItemsSelected.value = false
  },
  { deep: true }
)
</script>

<template>
  <div>
    <VkTable
      :headers="mapedHeaders"
      :data="paginatedData"
      :color="color"
      :variant="variant"
      :shape="shape"
      :size="size"
      :striped="striped"
    >
      <template #header-cell-selection>
        <div
          v-if="selectable !== 'none' && selectionType === 'check'"
          :class="classes.th"
        >
          <VkCheckbox
            v-if="selectable === 'multiple'"
            label="Select All"
            :color="color"
            :model-value="allItemsSelected"
            :indeterminate="isIndeterminate"
            @update:model-value="toggleAllSelection"
          />
        </div>
      </template>

      <template
        v-for="item in paginatedData"
        #[`cell-selection-${item.key}`]
        :key="item.key"
      >
        <div
          v-if="selectable !== 'none' && selectionType === 'check'"
        >
          <VkCheckbox
            v-if="selectable === 'multiple'"
            label=""
            :color="color"
            :model-value="item.selected"
            @update:model-value="() => toggleSelection(item)"
          />
          <VkRadio
            v-else-if="selectable === 'single'"
            :color="color"
            :name="`radio-${item.key}`"
            :value="item.key"
            :model-value="item.selected ? item.key : undefined"
            @update:model-value="() => toggleSelection(item)"
          />
        </div>
      </template>
    </VkTable>

    <VkPagination
      v-if="totalPages > 1"
      :variant="variant"
      :color="color"
      :shape="shape"
      :size="size"
      :pages="totalPages"
      :model-value="currentPage"
      @update:model-value="changePage"
    />
  </div>
</template>
