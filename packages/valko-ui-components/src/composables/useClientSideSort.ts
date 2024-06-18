import { ref, watchEffect, Ref, toValue } from 'vue'
import type { Sort } from '#valkoui/types/common'

const useClientSideSort = <T extends Record<string, string | number | boolean>>(data: T[], initialSort?: Sort) => {
  const sort = ref(initialSort)

  const setSort = (newSort: Sort) => sort.value = newSort

  const result: Ref<T[]> = ref([])

  watchEffect(() => {
    const normalizeSort = toValue(sort)
    if (normalizeSort) {
      const { field, direction } = normalizeSort
      result.value = data.sort((prev, next) => {
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
    } else {
      result.value = data
    }
  })

  return  {
    result,
    sort,
    setSort
  }
}

export default useClientSideSort
