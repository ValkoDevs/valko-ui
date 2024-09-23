import { computed, toValue, ref } from 'vue'
import type { TableItem, TableHeader } from '#valkoui/types/Table'
import type { DataTableConfig, DataTableInput } from '#valkoui/types/DataTable'

const useDataTable = <T extends TableItem>({ headers, paginatedResult, selectAllStatus, selectionMode = 'none', draggable = false }: DataTableConfig<T>) => {
  const rawSelection = ref<TableItem | TableItem[] | undefined>(undefined)

  return computed(() => {
    const selection = toValue(rawSelection.value)
    const normalizedPagination = toValue(paginatedResult)
    const data = normalizedPagination.records
    const normalizedSelectionMode = toValue(selectionMode)
    const normalizedDraggable = toValue(draggable)
    const mappedHeaders: TableHeader[] = [...headers]

    if (normalizedDraggable) {
      mappedHeaders.unshift({
        key: 'draggable',
        field: 'draggable',
        label: ''
      })
    }

    if (normalizedSelectionMode === 'multiple' || normalizedSelectionMode === 'single') {
      mappedHeaders.unshift({
        key: 'selection',
        field: 'selection',
        label: 'Selection'
      })
    }

    const calculateAllSelected = () => {
      if (selectAllStatus !== undefined) return selectAllStatus
      if (!Array.isArray(selection)) return false

      switch (selection.length) {
        case 0: return false
        case data.length: return true
        default: return null
      }
    }

    const onSelect = (item: TableItem) => {
      switch (normalizedSelectionMode) {
        case 'multiple':
        case 'rowMultiple': {
          if (!Array.isArray(rawSelection.value)) {
            rawSelection.value = []
          }
          const existingItem = rawSelection.value.findIndex(({ key }) => key === item.key)

          if (existingItem > -1) rawSelection.value.splice(existingItem, 1)
          else rawSelection.value.push(item)
          break
        }

        case 'single':
        case 'rowSingle':
          rawSelection.value = item
          break

        default:
          break
      }
    }

    const onSelectAll = (allSelected: boolean) => {
      rawSelection.value = allSelected ? data : undefined
    }

    return {
      headers: mappedHeaders,
      data,
      limit: normalizedPagination.limit,
      offset: normalizedPagination.offset,
      total: normalizedPagination.total,
      isAllSelected: calculateAllSelected(),
      selection,
      selectionMode: normalizedSelectionMode,
      onSelect,
      onSelectAll
    } as DataTableInput
  })
}

export default useDataTable
