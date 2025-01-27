<script setup lang="ts">
import { type Ref, computed, ref, onMounted, onBeforeUnmount, watch } from 'vue'
import type { DataTableProps } from '#valkoui/types/DataTable'
import type { TableItem } from '#valkoui/types/Table'
import type { SlotStyles, Sort } from '#valkoui/types/common'
import useStyle from '#valkoui/composables/useStyle.ts'
import useDebounce from '#valkoui/composables/useDebounce.ts'
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
  total: 0,
  limit: 10,
  offset: 0,
  filters: () => [],
  data: () => [],
  pageSizeOptions: () => [10, 20, 50, 100]
})

const emit = defineEmits(['onSelect', 'onPageChange', 'onLimitChange', 'onSort', 'onFilter', 'onSelectAll', 'onDragStart', 'onDragOver', 'onDrop'])

const classes = useStyle<DataTableProps, SlotStyles>(props, styles)

const sortIconMap = {
  asc: 'arrow-up',
  desc: 'arrow-down',
  none: 'arrows-sort'
}

const localFilters: Ref<Record<keyof TableItem, string>> = ref({})
const activePopover = ref<string | null>(null)
const activeFilters = ref<Record<string, boolean>>({})
const isDataReady = ref(false)
const isPageChangeTrigger = ref(false)

const selectSize = computed(() => props.pageSizeOptions.map((i) => ({ value: i, label: `${i}` })))

const selectedItems = computed(
  () => {
    return props.data.reduce((acc, item) => ({
      ...acc,
      [item.key]: Array.isArray(props.selection) ? props.selection.some((el) => el.key === item.key) : props.selection?.key === item.key
    }), {} as Record<string | number, boolean>)
  }
)

const togglePopover = (headerKey: string) => {
  activePopover.value = activePopover.value === headerKey ? null : headerKey
}

const setActiveFilter = (headerKey: string, isActive: boolean) => {
  if (localFilters.value[headerKey] && localFilters.value[headerKey].trim() !== '') activeFilters.value[headerKey] = isActive
  else activeFilters.value[headerKey] = false
}

const isSortActive = (field: string) => {
  return props.sort?.field === field && !!props.sort.direction
}

const handleClickOutside = (event: MouseEvent) => {
  const popoverElements = document.querySelectorAll('.vk-popover')
  let isClickInside = false

  popoverElements.forEach((element) => {
    if (element.contains(event.target as Node)) isClickInside = true
  })

  if (!isClickInside) activePopover.value = null
}

const totalPages = computed(() => Math.ceil(props.total / props.limit))
const currentPage = computed({
  get: () => props.offset / props.limit + 1,
  set: (page: number) => emit('onPageChange', page * props.limit - props.limit)
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

const debouncedFilters = useDebounce(() => {
  const mappedFilters = Object.entries(localFilters.value)
    .map(([key, value]) => ({ field: key, value }))
    .filter(({ value }) => !!value)

  emit('onFilter', mappedFilters)
}, 500)

watch(localFilters, debouncedFilters, { deep: true })

watch(localFilters, (newFilters) => {
  for (const key in newFilters) {
    setActiveFilter(key, !!newFilters[key].trim())
  }
}, { deep: true })

watch(
  () => props.data,
  (newData) => {
    const isArray = Array.isArray(newData)
    isDataReady.value = isArray

    if (isArray && !isPageChangeTrigger.value) currentPage.value = 1

    isPageChangeTrigger.value = false
  },
  { immediate: true }
)

watch(
  () => currentPage.value,
  (newPage) => isPageChangeTrigger.value = newPage !== 1
)

onMounted(() => {
  document.addEventListener('click', handleClickOutside)
  emit('onLimitChange', props.limit)

  if (currentPage.value !== 1) currentPage.value = 1

  localFilters.value = props.headers.reduce((acc, { field }) => {
    acc[field] = ''
    return acc
  }, {} as Record<keyof TableItem, string>)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClickOutside)
})
</script>

<template>
  <div
    :class="classes.table"
    v-if="isDataReady"
  >
    <vk-table
      :headers="headers"
      :data="data"
      :color="color"
      :variant="variant"
      :shape="shape"
      :size="size"
      :striped="striped"
      :selection="selection"
      :row-events="selectionMode === 'rowSingle' || selectionMode === 'rowMultiple'"
      @on-row-click="(item) => emit('onSelect', item)"
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
              :is-open="activePopover === header.key"
            >
              <template #default>
                <vk-icon
                  :size="size"
                  name="search"
                  :class="classes.headerUtilities"
                  :data-active="activeFilters[header.key]"
                  @click="togglePopover(header.key)"
                />
              </template>

              <template #popover-content>
                <slot
                  :name="`filter-content-${header.key}`"
                  :data="data"
                  :headers="headers"
                  :set-active="(isActive: boolean) => setActiveFilter(header.key, isActive)"
                  :emit="emit"
                >
                  <div class="w-40">
                    <vk-input
                      :variant="variant"
                      :color="color"
                      type="text"
                      size="xs"
                      label="Search..."
                      clearable
                      v-model="localFilters[header.key]"
                      @input="() => setActiveFilter(header.key, !!localFilters[header.key].trim())"
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
              :data-active="isSortActive(header.key)"
              @click="handleSort(header.field)"
            />
          </div>
        </div>
      </template>

      <template #cell-draggable="{ rowIndex }">
        <vk-icon
          name="grip-vertical"
          draggable="true"
          :class="classes.dragIcon"
          @dragstart="() => emit('onDragStart', rowIndex)"
          @dragover="(event) => emit('onDragOver', event)"
          @drop="(event) => emit('onDrop', event, rowIndex)"
        />
      </template>

      <template #cell-selection="{ item }">
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
          :color="color"
          :variant="variant"
          :shape="shape"
          :size="size"
          :pages="totalPages"
          flat
          :class="classes.footerNav"
          v-model="currentPage"
        />
      </div>

      <div>
        <vk-select
          :label="label"
          :options="selectSize"
          :color="color"
          :variant="variant"
          :shape="shape"
          :size="size"
          :class="classes.footerSelect"
          :model-value="limit"
          @update:model-value="(newLimit: number) => emit('onLimitChange', newLimit)"
        />
      </div>
    </div>
  </div>
</template>
