import { ref, nextTick } from 'vue'
import useClientSidePagination from '#valkoui/composables/useClientSidePagination'

describe('useClientSidePagination composable', () => {
  const data = ref<Array<{ id: number, name: string }>>([
    { id: 1, name: 'Alice' },
    { id: 2, name: 'Bob' },
    { id: 3, name: 'Charlie' },
    { id: 4, name: 'David' },
    { id: 5, name: 'Eve' }
  ])

  const { result, setLimit, setOffset } = useClientSidePagination(data, 2)

  it('should initialize with the correct default pagination', () => {
    expect(result.value).toEqual({
      records: [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }],
      total: 5,
      limit: 2,
      offset: 0
    })
  })

  it('should update the limit and reflect in the result', async () => {
    setLimit(3)
    await nextTick()

    expect(result.value).toEqual({
      records: [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }, { id: 3, name: 'Charlie' }],
      total: 5,
      limit: 3,
      offset: 0
    })
  })

  // it('should update the offset and reflect in the result', async () => {
  //   setOffset(2)
  //   await nextTick()

  //   expect(result.value).toEqual({
  //     records: [{ id: 3, name: 'Charlie' }, { id: 4, name: 'David' }],
  //     total: 5,
  //     limit: 2,
  //     offset: 2
  //   })
  // })

  it('should handle changes in limit and offset together', async () => {
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
    const emptyData = ref<Array<{ id: number, name: string }>>([])
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
