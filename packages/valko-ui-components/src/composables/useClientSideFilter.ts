import { type Ref, shallowRef, watch, toValue } from 'vue'
import type { TableItem } from '#valkoui/types/Table'
import type { Filter } from '#valkoui/types/common'

const useClientSideFilter = <T extends TableItem>(data: T[] | Ref<T[]>) => {
  const filters: Ref<Filter[]> = shallowRef([])
  const result: Ref<TableItem[]> = shallowRef(data)

  const setFilters = (newFilters: Filter[]) => {
    filters.value = newFilters
  }

  watch([() => filters, () => data], () => {
    const normalizedData = toValue(data)
    result.value = normalizedData.filter(
      item => filters.value
        .map((filter) => item[filter.field] && `${item[filter.field]}`.includes(filter.value))
        .every((condition) => condition)
    )
  }, { deep: true })

  return {
    result,
    filters,
    setFilters
  }
}

export default useClientSideFilter
