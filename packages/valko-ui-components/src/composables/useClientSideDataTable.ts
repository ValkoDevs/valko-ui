import { type Ref, ref, watchEffect, toValue } from 'vue'
import type { TableItem } from '#valkoui/types/Table'
import type { ClientSideDataTable, DataTableInput } from '#valkoui/types/DataTable'
import useClientSideFilter from '#valkoui/composables/useClientSideFilter.ts'
import useClientSideSort from '#valkoui/composables/useClientSideSort.ts'
import useClientSidePagination from '#valkoui/composables/useClientSidePagination.ts'
import useDataTable from '#valkoui/composables/useDataTable.ts'

const useClientSideDataTable = <T extends TableItem>({ data, headers, selectionMode, pageSizeOptions }: ClientSideDataTable<T>): Ref<DataTableInput> => {
  const result: Ref<DataTableInput> = ref({ data, headers })
  const { result: filteredResult, filters, setFilters } = useClientSideFilter(data)
  const { result: sortedResult, sort, setSort } = useClientSideSort(filteredResult, { field: 'required', direction: 'desc' })
  const { result: paginatedResult, setOffset, setLimit } = useClientSidePagination(sortedResult)

  const dataTable = useDataTable({
    headers,
    paginatedResult,
    selectionMode,
    selectAllStatus: undefined
  })

  watchEffect(() => {
    result.value = {
      ...toValue(dataTable),
      sort,
      filters,
      pageSizeOptions,
      onPageChange: setOffset,
      onLimitChange: setLimit,
      onSort: setSort,
      onFilter: setFilters
    } as DataTableInput
  })

  return result
}

export default useClientSideDataTable
