import { type Ref, shallowRef, watch, toValue } from 'vue'
import type { TableItem } from '#valkoui/types/Table'
import type { Filter } from '#valkoui/types/common'

const useClientSideFilter = <T extends TableItem>(data: T[] | Ref<T[]>) => {
  const filters = shallowRef<Filter[]>([])
  const result = shallowRef<T[]>(toValue(data))

  const setFilters = (newFilters: Filter[]) => {
    filters.value = newFilters
  }

  watch([filters, data], () => {
    const normalizedData = toValue(data)

    result.value = normalizedData.filter((item) =>
      filters.value.every((filter) =>
        `${item[filter.field] ?? ''}`.includes(filter.value)
      )
    )
  }, { immediate: true })

  return {
    result,
    filters,
    setFilters
  }
}

export default useClientSideFilter
