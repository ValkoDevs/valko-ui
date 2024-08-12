import { type Ref, ref, watchEffect, toValue } from 'vue'
import type { Pagination } from '#valkoui/types/common'

const useClientSidePagination = <T>(data: T[] | Ref<T[]>, initialLimit = 10) => {
  const limit = ref(initialLimit)
  const offset = ref(0)

  const setLimit = (newLimit: number) => limit.value = newLimit
  const setOffset = (newOffset: number) => offset.value = newOffset

  const result: Ref<Pagination<T>> = ref({
    records: [],
    total: 0,
    limit: limit.value,
    offset: offset.value
  })

  watchEffect(() => {
    const normalizedData = toValue(data)
    result.value = {
      records: normalizedData.slice(offset.value, offset.value + limit.value) as T[],
      total: normalizedData.length,
      limit: limit.value,
      offset: offset.value
    }
  })

  return  {
    result,
    setOffset,
    setLimit
  }
}

export default useClientSidePagination
