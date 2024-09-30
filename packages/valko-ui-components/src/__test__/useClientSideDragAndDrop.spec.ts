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

  it('should handle drop and reorder items', async () => {
    const { result, handleDragStart, handleDrop, handleDragOver } = useClientSideDragAndDrop(data)
    const mockDragEvent = createMockDragEvent()

    handleDragStart(0)
    await nextTick()
    handleDragOver(mockDragEvent)
    await nextTick()
    handleDrop(mockDragEvent, 2)
    await nextTick()

    expect(result.value).toEqual([
      { key: 'item2', name: 'Alice', age: 25 },
      { key: 'item3', name: 'Bob', age: 28 },
      { key: 'item1', name: 'John', age: 30 }
    ])
  })
})
