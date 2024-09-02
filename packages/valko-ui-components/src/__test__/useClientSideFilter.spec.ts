import { nextTick } from 'vue'
import useClientSideFilter from '#valkoui/composables/useClientSideFilter'
import type { TableItem } from '#valkoui/types/Table'
import type { Filter } from '#valkoui/types/common'

describe('useClientSideFilter composable', () => {
  const data: TableItem[] = [
    { key: 'item1', name: 'Alice', age: 30 },
    { key: 'item2', name: 'Bob', age: 25 },
    { key: 'item3', name: 'Charlie', age: 35 }
  ]

  it('should return all items when no filters are applied', () => {
    const { result } = useClientSideFilter(data)

    expect(result.value).toEqual(data)
  })

  it('should filter items based on the filters applied', async () => {
    const { result, setFilters } = useClientSideFilter(data)

    const filters: Filter[] = [
      { field: 'name', value: 'Alice' }
    ]

    setFilters(filters)

    await nextTick()

    expect(result.value).toEqual([{ key: 'item1', name: 'Alice', age: 30 }])
  })

  it('should handle multiple filters correctly', async () => {
    const { result, setFilters } = useClientSideFilter(data)

    const filters: Filter[] = [
      { field: 'name', value: 'A' },
      { field: 'age', value: '30' }
    ]
    setFilters(filters)

    await nextTick()

    expect(result.value).toEqual([{ key: 'item1', name: 'Alice', age: 30 }])
  })

  it('should handle invalid filters gracefully', async () => {
    const { result, setFilters } = useClientSideFilter(data)

    const filters: Filter[] = [
      { field: 'invalidField', value: 'Bob' }
    ]
    setFilters(filters)
    await nextTick()

    expect(result.value).toEqual([])
  })
})
