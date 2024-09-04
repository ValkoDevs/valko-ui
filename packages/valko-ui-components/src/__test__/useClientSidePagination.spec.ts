import { nextTick } from 'vue'
import useClientSidePagination from '#valkoui/composables/useClientSidePagination'

describe('useClientSidePagination composable', () => {
  const data = [
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Eve' }
  ]

  it('should initialize with the correct default pagination', () => {
    const { result } = useClientSidePagination(data, 2)
    expect(result.value).toEqual({
      records: [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }],
      total: 5,
      limit: 2,
      offset: 0
    })
  })

  it('should update the limit and reflect in the result', async () => {
    const { result, setLimit } = useClientSidePagination(data, 2)
    setLimit(3)
    await nextTick()

    expect(result.value).toEqual({
      records: [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }],
      total: 5,
      limit: 3,
      offset: 0
    })
  })

  it('should update the offset and reflect in the result', async () => {
    const { result, setOffset } = useClientSidePagination(data, 2)
    setOffset(2)
    await nextTick()

    expect(result.value).toEqual({
      records: [{ id: 3, name: 'Charlie' }, { id: 4, name: 'David' }],
      total: 5,
      limit: 2,
      offset: 2
    })
  })

  it('should handle changes in limit and offset together', async () => {
    const { result, setLimit, setOffset } = useClientSidePagination(data, 2)
    setOffset(1)
    setLimit(2)
    await nextTick()

    expect(result.value).toEqual({
      records: [{ id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }],
      total: 5,
      limit: 2,
      offset: 1
    })
  })

  it('should handle empty data', async () => {
    const emptyData: { id: number, name: string }[] = []
    const { result } = useClientSidePagination(emptyData, 3)

    await nextTick()

    expect(result.value).toEqual({
      records: [],
      total: 0,
      limit: 3,
      offset: 0
    })
  })
})
