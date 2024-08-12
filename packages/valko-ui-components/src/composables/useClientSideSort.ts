import { type Ref, ref, toValue, watch } from 'vue'
import type { Sort } from '#valkoui/types/common'
import type { TableItem } from '#valkoui/types/Table'

const useClientSideSort = <T extends TableItem>(data: T[] | Ref<T[]>, initialSort?: Sort) => {
  const sort = ref(initialSort)

  const setSort = (newSort: Sort) => {
    console.log('Sort')
    sort.value = newSort
  }

  const result: Ref<T[]> = ref([])

  watch([() => sort, () => data], () => {
    const normalizeSort = toValue(sort)
    const normalizedData = toValue(data)
    if (!normalizeSort) return result.value = [...normalizedData]

    const { field, direction } = normalizeSort
    const sortedResult = normalizedData.sort((prev, next) => {
      let comparisonResult = 0
      switch (typeof prev[field]) {
        case 'string':
          comparisonResult = `${prev[field]}`.localeCompare(`${next[field]}`)
          break
        case 'number':
        case 'boolean':
          comparisonResult = +(prev[field] || 0) - +(next[field] || 0)
          break
        default:
          comparisonResult = 0
          break
      }

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
