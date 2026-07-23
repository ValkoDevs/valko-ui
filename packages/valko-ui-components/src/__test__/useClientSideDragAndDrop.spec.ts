import { ref, nextTick } from 'vue'
import useClientSideDragAndDrop from '#valkoui/composables/useClientSideDragAndDrop'

describe('useClientSideDragAndDrop composable', () => {
  const createData = () =>
    ref([
      { key: 'item1', name: 'John', age: 30 },
      { key: 'item2', name: 'Alice', age: 25 },
      { key: 'item3', name: 'Bob', age: 28 }
    ])

  const createMockDragEvent = () => ({
    dataTransfer: {
      setData: vi.fn(),
      getData: vi.fn()
    },
    preventDefault: vi.fn(),
    stopPropagation: vi.fn()
  } as unknown as DragEvent)

  describe('when drag and drop is disabled', () => {
    it('should not reorder items', async () => {
      const data = createData()

      const {
        result,
        handleDragStart,
        handleDrop
      } = useClientSideDragAndDrop(data)

      const event = createMockDragEvent()

      handleDragStart(0)
      handleDrop(event, 2)

      await nextTick()

      expect(result.value).toEqual(data.value)
    })

    it('should not prevent default on drag over', () => {
      const data = createData()

      const {
        handleDragOver
      } = useClientSideDragAndDrop(data)

      const event = createMockDragEvent()

      handleDragOver(event)

      expect(event.preventDefault).not.toHaveBeenCalled()
    })
  })

  describe('when drag and drop is enabled', () => {
    it('should reorder items after dropping', async () => {
      const data = createData()

      const {
        result,
        handleDragStart,
        handleDrop
      } = useClientSideDragAndDrop(data, true)

      const event = createMockDragEvent()

      handleDragStart(0)

      handleDrop(event, 2)

      await nextTick()

      expect(result.value).toEqual([
        { key: 'item2', name: 'Alice', age: 25 },
        { key: 'item3', name: 'Bob', age: 28 },
        { key: 'item1', name: 'John', age: 30 }
      ])
    })

    it('should prevent default on drag over', () => {
      const data = createData()

      const {
        handleDragOver
      } = useClientSideDragAndDrop(data, true)

      const event = createMockDragEvent()

      handleDragOver(event)

      expect(event.preventDefault).toHaveBeenCalled()
    })

    it('should do nothing when dropping without starting a drag', async () => {
      const data = createData()

      const {
        result,
        handleDrop
      } = useClientSideDragAndDrop(data, true)

      const event = createMockDragEvent()

      handleDrop(event, 1)

      await nextTick()

      expect(result.value).toEqual(data.value)
    })
  })
})
