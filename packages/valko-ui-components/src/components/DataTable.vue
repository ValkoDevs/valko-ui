<script setup lang="ts">
import { computed, ref, onMounted } from 'vue'
import type { DataTableProps, TableItem } from '#valkoui/types/Table'
import type { SlotStyles, Sort } from '#valkoui/types/common'
import useStyle from '#valkoui/composables/useStyle.ts'
import styles from '#valkoui/styles/DataTable.styles.ts'
import VkCheckbox from './Checkbox.vue'
import VkIcon from './Icon.vue'
import VkPagination from './Pagination.vue'
import VkRadio from './Radio.vue'
import VkSelect from './Select.vue'
import VkTable from './Table.vue'

defineOptions({ name: 'VkDataTable' })

const props = withDefaults(defineProps<DataTableProps>(), {
  color: 'primary',
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  selectionMode: 'none',
  striped: false,
  sort: undefined,
  selection: undefined,
  pagination: () => ({
    records: [],
    total: 0,
    limit: 10,
    offset: 0
  }),
  filters: () => [],
  data: () => []
})

const emit = defineEmits(['onSelect', 'onPageChange', 'onLimitChange', 'onSort', 'onFilter', 'onSelectAll'])

const classes = useStyle<DataTableProps, SlotStyles>(props, styles)

const sortIconMap = {
  asc: 'arrow-up',
  desc: 'arrow-down',
  none: 'arrows-sort'
}

const limitRef = ref(2)

const selectLimit = [
  { value: 2, label: '2' },
  { value: 25, label: '25' },
  { value: 50, label: '50' },
  { value: 100, label: '100' }
]

const selectedItems = computed(
  () => {
    return props.data.reduce((acc, item) => ({
      ...acc,
      [item.key]: Array.isArray(props.selection) ? props.selection.some((el) => el.key === item.key) : props.selection?.key === item.key
    }), {} as Record<string | number, boolean>)
  }
)

// Pagination
const totalPages = computed(() => Math.ceil(props.pagination.total / props.pagination.limit))
const currentPage = computed({
  get: () => props.pagination.offset / props.pagination.limit + 1,
  set: (page: number) => emit('onPageChange', page * props.pagination.limit - props.pagination.limit)
})

const handleSort = (field: keyof TableItem) => {
  const nextSortMap: Record<string, Sort['direction']> = {
    asc: 'desc',
    desc: undefined,
    none: 'asc'
  }

  const newSort: Sort = {
    field: field as string,
    direction: field === props.sort?.field ? nextSortMap[props.sort.direction || 'none'] : 'asc'
  }

  emit('onSort', newSort.direction ? newSort : null)
}

onMounted(() => {
  limitRef.value = 2
  emit('onLimitChange', 2)
})
</script>

<template>
  <div :class="classes.table">
    <vk-table
      :headers="headers"
      :data="data"
      :color="color"
      :variant="variant"
      :shape="shape"
      :size="size"
      :striped="striped"
    >
      <template
        v-for="header in headers"
        #[`header-cell-${header.key}`]
        :key="header.key"
      >
        <div :class="classes.headerContainer">
          <div :class="classes.headerLabel">
            <vk-checkbox
              v-if="selectionMode === 'multiple' && header.key === 'selection'"
              :color="color"
              :model-value="isAllSelected"
              @update:model-value="(val) => emit('onSelectAll', val)"
            />
            {{ header.key === 'selection' ? '' : header.label }}
          </div>
          <div
            v-if="header.filterable"
            :class="classes.headerUtilities"
          >
            <vk-icon
              name="search"
              class="cursor-pointer"
              @click="() => emit('onFilter', data, header.key)"
            />
          </div>
          <div
            v-if="header.sortable"
            :class="classes.headerUtilities"
          >
            <vk-icon
              :name="sortIconMap[sort?.field === header.key && sort.direction ? sort.direction : 'none']"
              class="cursor-pointer"
              @click="handleSort(header.field)"
            />
          </div>
        </div>
      </template>

      <template
        v-for="item in data"
        #[`cell-selection-${item.key}`]
        :key="item.key"
      >
        <vk-checkbox
          v-if="selectionMode === 'multiple'"
          :color="color"
          :model-value="selectedItems[item.key]"
          @update:model-value="() => emit('onSelect', item)"
        />
        <vk-radio
          v-else-if="selectionMode === 'single'"
          :color="color"
          :name="`radio-${item.key}`"
          :value="item.key"
          :model-value="selectedItems[item.key] ? item.key : undefined"
          @update:model-value="() => emit('onSelect', item)"
        />
      </template>
    </vk-table>

    <div :class="classes.footer">
      <div>
        <vk-pagination
          v-if="pagination && limitRef < pagination.total"
          :color="color"
          :variant="variant"
          :shape="shape"
          :size="size"
          :pages="totalPages"
          :class="classes.footerNav"
          v-model="currentPage"
        />
      </div>

      <div>
        <vk-select
          placeholder="Limit"
          :options="selectLimit"
          :color="color"
          :variant="variant"
          :shape="shape"
          :size="size"
          :class="classes.footerSelect"
          v-model="limitRef"
          @update:model-value="(newLimit: number) => emit('onLimitChange', newLimit)"
        />
      </div>
    </div>
  </div>
</template>
