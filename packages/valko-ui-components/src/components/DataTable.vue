<script setup lang="ts">
import { computed, ref, onMounted, onBeforeUnmount } from 'vue'
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
import VkPopover from './Popover.vue'
import VkInput from './Input.vue'

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
  data: () => [],
  pageSizeOptions: () => [10, 20, 50, 100]
})

const emit = defineEmits(['onSelect', 'onPageChange', 'onLimitChange', 'onSort', 'onFilter', 'onSelectAll'])

const classes = useStyle<DataTableProps, SlotStyles>(props, styles)

const sortIconMap = {
  asc: 'arrow-up',
  desc: 'arrow-down',
  none: 'arrows-sort'
}

const pageSizeRef = ref(2)
const searchValue = ref('')

const selectSize = computed(() => props.pageSizeOptions.map((i) => ({ value: i, label: `${i}` })))

const selectedItems = computed(
  () => {
    return props.data.reduce((acc, item) => ({
      ...acc,
      [item.key]: Array.isArray(props.selection) ? props.selection.some((el) => el.key === item.key) : props.selection?.key === item.key
    }), {} as Record<string | number, boolean>)
  }
)

// Popovers
const activePopover = ref<string | null>(null)

const togglePopover = (headerKey: string) => {
  activePopover.value = activePopover.value === headerKey ? null : headerKey
}

const closePopover = () => {
  activePopover.value = null
}

const handleClickOutside = (event: MouseEvent) => {
  const popoverElements = document.querySelectorAll('.vk-popover')
  let isClickInside = false

  popoverElements.forEach((element) => {
    if (element.contains(event.target as Node)) isClickInside = true
  })

  if (!isClickInside) closePopover()
}

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
  currentPage.value = 1
}

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  pageSizeRef.value = 2
  emit('onLimitChange', 2)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
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
              :size="size"
              :model-value="isAllSelected"
              @update:model-value="(val) => emit('onSelectAll', val)"
            />
            {{ header.key === 'selection' ? '' : header.label }}
          </div>
          <div
            v-if="header.filterable"
          >
            <vk-popover
              :shape="shape"
              :placement="popoverPlacement"
              :is-open="activePopover === header.key"
            >
              <template #default>
                <vk-icon
                  :size="size"
                  name="search"
                  :class="classes.headerUtilities"
                  @click="togglePopover(header.key)"
                />
              </template>

              <template #popover-content>
                <slot
                  :name="`filter-content-${header.key}`"
                  :data="data"
                  :headers="headers"
                  :emit="emit"
                >
                  <div class="w-40">
                    <vk-input
                      :variant="variant"
                      type="text"
                      size="xs"
                      label="Search..."
                      v-model="searchValue"
                      @update:model-value="() => emit('onFilter', { key: header.key, searchValue })"
                    />
                  </div>
                </slot>
              </template>
            </vk-popover>
          </div>
          <div
            v-if="header.sortable"
            :class="classes.headerUtilities"
          >
            <vk-icon
              :size="size"
              :name="sortIconMap[sort?.field === header.key && sort.direction ? sort.direction : 'none']"
              :class="classes.headerUtilities"
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
          :size="size"
          :model-value="selectedItems[item.key]"
          @update:model-value="() => emit('onSelect', item)"
        />
        <vk-radio
          v-else-if="selectionMode === 'single'"
          :color="color"
          :size="size"
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
          v-if="pagination && pageSizeRef < pagination.total"
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
          placeholder="Page Size"
          :options="selectSize"
          :color="color"
          :variant="variant"
          :shape="shape"
          :size="size"
          :class="classes.footerSelect"
          v-model="pageSizeRef"
          @update:model-value="(newLimit: number) => emit('onLimitChange', newLimit)"
        />
      </div>
    </div>
  </div>
</template>
