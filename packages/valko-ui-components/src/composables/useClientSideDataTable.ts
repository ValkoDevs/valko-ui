import { type Ref, ref, watchEffect, toValue } from 'vue'
import type { TableItem } from '#valkoui/types/Table'
import type { ClientSideDataTable, DataTableInput } from '#valkoui/types/DataTable'
import useClientSideFilter from '#valkoui/composables/useClientSideFilter.ts'
import useClientSideSort from '#valkoui/composables/useClientSideSort.ts'
import useClientSidePagination from '#valkoui/composables/useClientSidePagination.ts'
import useClientSideDragAndDrop from '#valkoui/composables/useClientSideDragAndDrop.ts'
import useDataTable from '#valkoui/composables/useDataTable.ts'

const useClientSideDataTable = <T extends TableItem>({ data, headers, selectionMode, pageSizeOptions, draggable }: ClientSideDataTable<T>): Ref<DataTableInput> => {
  const result: Ref<DataTableInput> = ref({ data, headers })
  const { result: filteredResult, filters, setFilters } = useClientSideFilter(data)
  const { result: sortedResult, sort, setSort } = useClientSideSort(filteredResult)
  const { result: reOrderedData, handleDragStart, handleDragOver, handleDrop } = useClientSideDragAndDrop(sortedResult)
  const { result: paginatedResult, setOffset, setLimit } = useClientSidePagination(reOrderedData)

  const dataTable = useDataTable({
    headers,
    paginatedResult,
    selectionMode,
    selectAllStatus: undefined,
    draggable
  })

  watchEffect(() => {
    result.value = {
      ...toValue(dataTable),
      sort: toValue(sort),
      filters: toValue(filters),
      pageSizeOptions,
      draggable,
      onPageChange: setOffset,
      onLimitChange: setLimit,
      onSort: setSort,
      onFilter: setFilters,
      onDragStart: handleDragStart,
      onDragOver: handleDragOver,
      onDrop: handleDrop
    } as DataTableInput
  })

  return result
}

export default useClientSideDataTable
