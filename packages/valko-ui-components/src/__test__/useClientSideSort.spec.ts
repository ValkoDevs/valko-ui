import { ref, nextTick } from 'vue'
import useClientSideSort from '#valkoui/composables/useClientSideSort'
import type { TableItem } from '#valkoui/types/Table'

describe('useClientSideSort composable', () => {
  const data = ref<TableItem[]>([
    { key: 'item1', name: 'John', age: 30, active: true },
    { key: 'item2', name: 'Alice', age: 25, active: false },
    { key: 'item3', name: 'Bob', age: 28, active: true }
  ])

  const { result, setSort } = useClientSideSort(data)

  it('should sort data by string field in ascending order', async () => {
    setSort({ field: 'name', direction: 'asc' })
    await nextTick()

    expect(result.value).toEqual([
      { key: 'item2', name: 'Alice', age: 25, active: false },
      { key: 'item3', name: 'Bob', age: 28, active: true },
      { key: 'item1', name: 'John', age: 30, active: true }
    ])
  })

  it('should sort data by number field in descending order', async () => {
    setSort({ field: 'age', direction: 'desc' })
    await nextTick()

    expect(result.value).toEqual([
      { key: 'item1', name: 'John', age: 30, active: true },
      { key: 'item3', name: 'Bob', age: 28, active: true },
      { key: 'item2', name: 'Alice', age: 25, active: false }
    ])
  })

  it('should handle sorting with boolean fields', async () => {
    setSort({ field: 'active', direction: 'asc' })
    await nextTick()

    expect(result.value).toEqual([
      { key: 'item2', name: 'Alice', age: 25, active: false },
      { key: 'item1', name: 'John', age: 30, active: true },
      { key: 'item3', name: 'Bob', age: 28, active: true }
    ])
  })

  it('should sort by string fields with uppercase and lowercase letters', async () => {
    const newData = ref<TableItem[]>([
      { key: 'item1', name: 'John', age: 30, active: true },
      { key: 'item2', name: 'alice', age: 25, active: false },
      { key: 'item3', name: 'Bob', age: 28, active: true }
    ])
    const { result, setSort } = useClientSideSort(newData)

    setSort({ field: 'name', direction: 'asc' })
    await nextTick()

    expect(result.value).toEqual([
      { key: 'item2', name: 'alice', age: 25, active: false },
      { key: 'item3', name: 'Bob', age: 28, active: true },
      { key: 'item1', name: 'John', age: 30, active: true }
    ])
  })

  it('should sort by boolean fields and verify correct order', async () => {
    const newData = ref<TableItem[]>([
      { key: 'item1', name: 'John', age: 30, active: false },
      { key: 'item2', name: 'Alice', age: 25, active: true },
      { key: 'item3', name: 'Bob', age: 28, active: false }
    ])
    const { result, setSort } = useClientSideSort(newData)

    setSort({ field: 'active', direction: 'asc' })
    await nextTick()

    expect(result.value).toEqual([
      { key: 'item1', name: 'John', age: 30, active: false },
      { key: 'item3', name: 'Bob', age: 28, active: false },
      { key: 'item2', name: 'Alice', age: 25, active: true }
    ])
  })

  it('should sort correctly when the sort is updated', async () => {
    setSort({ field: 'name', direction: 'asc' })
    await nextTick()

    expect(result.value).toEqual([
      { key: 'item2', name: 'Alice', age: 25, active: false },
      { key: 'item3', name: 'Bob', age: 28, active: true },
      { key: 'item1', name: 'John', age: 30, active: true }
    ])

    setSort({ field: 'age', direction: 'desc' })
    await nextTick()

    expect(result.value).toEqual([
      { key: 'item1', name: 'John', age: 30, active: true },
      { key: 'item3', name: 'Bob', age: 28, active: true },
      { key: 'item2', name: 'Alice', age: 25, active: false }
    ])
  })
})
