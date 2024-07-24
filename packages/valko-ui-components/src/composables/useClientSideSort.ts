import { ref, Ref, toValue, watch } from 'vue'
import type { Sort } from '#valkoui/types/common'

const useClientSideSort = <T extends Record<string, string | number | boolean>>(data: T[], initialSort?: Sort) => {
  const sort = ref(initialSort)

  const setSort = (newSort: Sort) => sort.value = newSort

  const result: Ref<T[]> = ref([])

  watch(() => sort, () => {
    console.log(sort)
    const normalizeSort = toValue(sort)
    if (!normalizeSort) return result.value = [...data]

    const { field, direction } = normalizeSort
    const sortedResult = data.sort((prev, next) => {
      let comparisonResult = 0
      switch (typeof prev[field]) {
        case 'string':
          comparisonResult = `${prev[field]}`.localeCompare(`${next[field]}`)
          break
        case 'number':
        case 'boolean':
          comparisonResult = +prev[field] - +next[field]
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
