import { type Ref, shallowRef, toValue, watch } from 'vue'
import type { Sort } from '#valkoui/types/common'
import type { TableItem } from '#valkoui/types/Table'

const useClientSideSort = <T extends TableItem>(data: T[] | Ref<T[]>, initialSort?: Sort) => {
  const sort = shallowRef(initialSort)

  const setSort = (newSort: Sort) => {
    sort.value = newSort
  }

  const result: Ref<T[]> = shallowRef([])

  watch([() => sort, () => data], () => {
    const normalizeSort = toValue(sort)
    const normalizedData = toValue(data)
    if (!normalizeSort) return result.value = [...normalizedData]

    const { field, direction } = normalizeSort
    const sortedResult = normalizedData.sort((prev, next) => {
      const comparisons = {
        string: `${prev[field]}`.localeCompare(`${next[field]}`),
        number: +(prev[field] || 0) - +(next[field] || 0),
        boolean: +(prev[field] || 0) - +(next[field] || 0),
        bigint: +(prev[field] || 0) - +(next[field] || 0),
        symbol: 0,
        undefined: 0,
        object: 0,
        function: 0
      }

      const comparisonResult = comparisons[typeof prev[field]]

      const multiplier = direction === 'asc' ? 1 : -1

      return comparisonResult * multiplier
    })

    result.value = [...sortedResult]
  }, { deep: true, immediate: true })

  return  {
    result,
    sort,
    setSort
  }
}

export default useClientSideSort
