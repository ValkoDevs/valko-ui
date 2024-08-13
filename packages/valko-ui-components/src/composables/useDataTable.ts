import { computed, ref, toValue } from 'vue'
import type { TableItem, TableHeader } from '#valkoui/types/Table'
import type { DataTableConfig, DataTableInput } from '#valkoui/types/DataTable'

const useDataTable = <T extends TableItem>({ headers, paginatedResult, selectAllStatus, selectionMode = 'none' }: DataTableConfig<T>) => {
  const rawSelection = ref<TableItem | Set<TableItem> | undefined>(undefined)

  return computed(() => {
    const selection = rawSelection.value instanceof Set ? Array.from(rawSelection.value) : rawSelection.value
    const normalizedPagination = toValue(paginatedResult)
    const data = normalizedPagination.records
    const normalizedSelectionMode = toValue(selectionMode)

    const mappedHeaders: TableHeader[] = [...headers]
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

      switch(selection.length) {
        case 0: return false
        case data.length: return true
        default: return null
      }
    }

    const onSelect = (item: TableItem) => {
      if (normalizedSelectionMode === 'multiple') {
        if (!(rawSelection.value instanceof Set)) {
          rawSelection.value = new Set()
        }

        rawSelection.value.has(item) ? rawSelection.value.delete(item) : rawSelection.value.add(item)
      }

      if (normalizedSelectionMode === 'single') {
        rawSelection.value = item
      }
    }

    const onSelectAll = (allSelected: boolean) => {
      rawSelection.value = new Set(allSelected ? data : undefined)
    }

    return {
      headers: mappedHeaders,
      data,
      limit: normalizedPagination.limit,
      offset: normalizedPagination.offset,
      total: normalizedPagination.total,
      isAllSelected: calculateAllSelected(),
      selection: selection,
      selectionMode: normalizedSelectionMode,
      onSelect,
      onSelectAll
    } as DataTableInput
  })
}

export default useDataTable
