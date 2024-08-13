import { type Ref, ref, watch, toValue } from 'vue'
import type { TableItem } from '#valkoui/types/Table'
import type { Filter } from '#valkoui/types/common'

const useClientSideFilter = <T extends TableItem>(data: T[] | Ref<T[]>) => {
  const filters: Ref<Filter[]> = ref([])
  const result: Ref<TableItem[]> = ref(data)

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
