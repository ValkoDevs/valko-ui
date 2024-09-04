import { nextTick } from 'vue'
import useClientSideSort from '#valkoui/composables/useClientSideSort'
import type { TableItem } from '#valkoui/types/Table'

describe('useClientSideSort composable', () => {
  const data: TableItem[] = [
    { key: 'item1', name: 'John', age: 30, active: true },
    { key: 'item2', name: 'Alice', age: 25, active: false },
    { key: 'item3', name: 'Bob', age: 28, active: true }
  ]

  it('should sort data by string field in ascending order', async () => {
    const { result } = useClientSideSort(data, { field: 'name', direction: 'asc' })
    await nextTick()

    expect(result.value).toEqual([
      { key: 'item2', name: 'Alice', age: 25, active: false },
      { key: 'item3', name: 'Bob', age: 28, active: true },
      { key: 'item1', name: 'John', age: 30, active: true }
    ])
  })

  it('should sort data by string field in descending order', async () => {
    const { result } = useClientSideSort(data, { field: 'name', direction: 'desc' })
    await nextTick()

    expect(result.value).toEqual([
      { key: 'item1', name: 'John', age: 30, active: true },
      { key: 'item3', name: 'Bob', age: 28, active: true },
      { key: 'item2', name: 'Alice', age: 25, active: false }
    ])
  })

  it('should sort data by number field in ascending order', async () => {
    const { result } = useClientSideSort(data, { field: 'age', direction: 'asc' })
    await nextTick()

    expect(result.value).toEqual([
      { key: 'item2', name: 'Alice', age: 25, active: false },
      { key: 'item3', name: 'Bob', age: 28, active: true },
      { key: 'item1', name: 'John', age: 30, active: true }
    ])
  })

  it('should sort data by number field in descending order', async () => {
    const { result } = useClientSideSort(data, { field: 'age', direction: 'desc' })
    await nextTick()

    expect(result.value).toEqual([
      { key: 'item1', name: 'John', age: 30, active: true },
      { key: 'item3', name: 'Bob', age: 28, active: true },
      { key: 'item2', name: 'Alice', age: 25, active: false }
    ])
  })

  it('should handle sorting with boolean fields in ascending order', async () => {
    const { result } = useClientSideSort(data, { field: 'active', direction: 'asc' })
    await nextTick()

    expect(result.value).toEqual([
      { key: 'item2', name: 'Alice', age: 25, active: false },
      { key: 'item1', name: 'John', age: 30, active: true },
      { key: 'item3', name: 'Bob', age: 28, active: true }
    ])
  })

  it('should handle sorting with boolean fields in descening order', async () => {
    const { result } = useClientSideSort(data, { field: 'active', direction: 'desc' })
    await nextTick()

    expect(result.value).toEqual([
      { key: 'item1', name: 'John', age: 30, active: true },
      { key: 'item3', name: 'Bob', age: 28, active: true },
      { key: 'item2', name: 'Alice', age: 25, active: false }
    ])
  })

  it('should sort correctly when the sort is updated', async () => {
    const { result, setSort } = useClientSideSort(data, { field: 'name', direction: 'asc' })
    setSort({ field: 'age', direction: 'desc' })
    await nextTick()

    expect(result.value).toEqual([
      { key: 'item1', name: 'John', age: 30, active: true },
      { key: 'item3', name: 'Bob', age: 28, active: true },
      { key: 'item2', name: 'Alice', age: 25, active: false }
    ])
  })

  it('should return data without changing the order when sort is not provided', async () => {
    const { result } = useClientSideSort(data)
    await nextTick()

    expect(result.value).toEqual(data)
  })
})
