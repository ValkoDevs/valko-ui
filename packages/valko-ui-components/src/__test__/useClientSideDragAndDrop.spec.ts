import { ref, nextTick } from 'vue'
import useClientSideDragAndDrop from '#valkoui/composables/useClientSideDragAndDrop'

describe('useClientSideDragAndDrop composable', () => {
  const data = ref([
    { key: 'item1', name: 'John', age: 30 },
    { key: 'item2', name: 'Alice', age: 25 },
    { key: 'item3', name: 'Bob', age: 28 }
  ])

  const createMockDragEvent = () => {
    return {
      dataTransfer: {
        setData: vi.fn(),
        getData: vi.fn()
      },
      preventDefault: vi.fn(),
      stopPropagation: vi.fn()
    } as unknown as DragEvent
  }

  const { result, handleDragStart, handleDrop } = useClientSideDragAndDrop(data)
  const mockDragEvent = createMockDragEvent()

  // it('should initialize with the provided sorted data', () => {
  //   expect(result.value).toEqual(data)
  // })

  it('should handle drop and reorder items', async () => {
    handleDragStart(0)
    handleDrop(mockDragEvent, 2)
    await nextTick()

    const expectedData = [
      { key: 'item2', name: 'Alice', age: 25 },
      { key: 'item3', name: 'Bob', age: 28 },
      { key: 'item1', name: 'John', age: 30 }
    ]

    expect(result.value).toEqual(expectedData)
  })

  // it('should not reorder items if drag is not started', async () => {
  //   handleDrop(mockDragEvent, 2)
  //   await nextTick()

  //   expect(result.value).toEqual(data)
  // })

  // it('should reset drag start index and dragged item after drop', async () => {
  //   handleDragStart(1)
  //   handleDrop(mockDragEvent, 2)
  //   await nextTick()

  //   expect(result.value).toEqual([
  //     { key: 'item2', name: 'Alice', age: 25 },
  //     { key: 'item3', name: 'Bob', age: 28 },
  //     { key: 'item1', name: 'John', age: 30 }
  //   ])
  // })
})
