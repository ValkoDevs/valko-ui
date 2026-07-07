import { ref } from 'vue'
import useGridKeyboardNav from '#valkoui/composables/useGridKeyboardNav.ts'

const createKeyboardEvent = (key: string): KeyboardEvent => {
  const event = new KeyboardEvent('keydown', { key, bubbles: true })
  vi.spyOn(event, 'preventDefault')
  return event
}

describe('useGridKeyboardNav', () => {
  describe('handler behavior', () => {
    it('should return a function', () => {
      const handler = useGridKeyboardNav({
        currentIndex: 0,
        itemCount: 12,
        columnCount: 4,
        onMove: vi.fn()
      })

      expect(typeof handler).toBe('function')
    })

    it('should call preventDefault on recognized keys', () => {
      const handler = useGridKeyboardNav({
        currentIndex: 0,
        itemCount: 12,
        columnCount: 4,
        onMove: vi.fn()
      })

      const event = createKeyboardEvent('ArrowDown')
      handler(event)

      expect(event.preventDefault).toHaveBeenCalled()
    })

    it('should not call preventDefault on unrecognized keys', () => {
      const handler = useGridKeyboardNav({
        currentIndex: 0,
        itemCount: 12,
        columnCount: 4,
        onMove: vi.fn()
      })

      const event = createKeyboardEvent('Tab')
      handler(event)

      expect(event.preventDefault).not.toHaveBeenCalled()
    })

    it('should not call any callback when enabled is false', () => {
      const onMove = vi.fn()
      const handler = useGridKeyboardNav({
        currentIndex: 0,
        itemCount: 12,
        columnCount: 4,
        enabled: false,
        onMove
      })

      handler(createKeyboardEvent('ArrowDown'))

      expect(onMove).not.toHaveBeenCalled()
    })

    it('should respect reactive enabled ref', () => {
      const onMove = vi.fn()
      const enabled = ref(false)
      const handler = useGridKeyboardNav({
        currentIndex: 0,
        itemCount: 12,
        columnCount: 4,
        enabled,
        onMove
      })

      handler(createKeyboardEvent('ArrowDown'))
      expect(onMove).not.toHaveBeenCalled()

      enabled.value = true
      handler(createKeyboardEvent('ArrowDown'))
      expect(onMove).toHaveBeenCalled()
    })
  })

  describe('horizontal movement', () => {
    it('should move left on ArrowLeft', () => {
      const onMove = vi.fn()
      const handler = useGridKeyboardNav({
        currentIndex: 5,
        itemCount: 12,
        columnCount: 4,
        onMove
      })

      handler(createKeyboardEvent('ArrowLeft'))

      expect(onMove).toHaveBeenCalledWith(4)
    })

    it('should move right on ArrowRight', () => {
      const onMove = vi.fn()
      const handler = useGridKeyboardNav({
        currentIndex: 5,
        itemCount: 12,
        columnCount: 4,
        onMove
      })

      handler(createKeyboardEvent('ArrowRight'))

      expect(onMove).toHaveBeenCalledWith(6)
    })
  })

  describe('vertical movement', () => {
    it('should move up by column count on ArrowUp', () => {
      const onMove = vi.fn()
      const handler = useGridKeyboardNav({
        currentIndex: 5,
        itemCount: 12,
        columnCount: 4,
        onMove
      })

      handler(createKeyboardEvent('ArrowUp'))

      expect(onMove).toHaveBeenCalledWith(1)
    })

    it('should move down by column count on ArrowDown', () => {
      const onMove = vi.fn()
      const handler = useGridKeyboardNav({
        currentIndex: 5,
        itemCount: 12,
        columnCount: 4,
        onMove
      })

      handler(createKeyboardEvent('ArrowDown'))

      expect(onMove).toHaveBeenCalledWith(9)
    })
  })

  describe('row edges', () => {
    it('should move to row start on Home', () => {
      const onMove = vi.fn()
      const handler = useGridKeyboardNav({
        currentIndex: 6,
        itemCount: 12,
        columnCount: 4,
        onMove
      })

      handler(createKeyboardEvent('Home'))

      expect(onMove).toHaveBeenCalledWith(4)
    })

    it('should move to row end on End', () => {
      const onMove = vi.fn()
      const handler = useGridKeyboardNav({
        currentIndex: 4,
        itemCount: 12,
        columnCount: 4,
        onMove
      })

      handler(createKeyboardEvent('End'))

      expect(onMove).toHaveBeenCalledWith(7)
    })

    it('should clamp row end to last item when row is incomplete', () => {
      const onMove = vi.fn()
      const handler = useGridKeyboardNav({
        currentIndex: 8,
        itemCount: 10,
        columnCount: 4,
        onMove
      })

      handler(createKeyboardEvent('End'))

      expect(onMove).toHaveBeenCalledWith(9)
    })
  })

  describe('selection', () => {
    it('should call onSelect on Enter', () => {
      const onSelect = vi.fn()
      const handler = useGridKeyboardNav({
        currentIndex: 3,
        itemCount: 12,
        columnCount: 4,
        onMove: vi.fn(),
        onSelect
      })

      handler(createKeyboardEvent('Enter'))

      expect(onSelect).toHaveBeenCalledWith(3)
    })

    it('should call onSelect on Space', () => {
      const onSelect = vi.fn()
      const handler = useGridKeyboardNav({
        currentIndex: 3,
        itemCount: 12,
        columnCount: 4,
        onMove: vi.fn(),
        onSelect
      })

      handler(createKeyboardEvent(' '))

      expect(onSelect).toHaveBeenCalledWith(3)
    })

    it('should not call onSelect on disabled item', () => {
      const onSelect = vi.fn()
      const handler = useGridKeyboardNav({
        currentIndex: 3,
        itemCount: 12,
        columnCount: 4,
        onMove: vi.fn(),
        onSelect,
        isItemDisabled: (i) => i === 3
      })

      handler(createKeyboardEvent('Enter'))

      expect(onSelect).not.toHaveBeenCalled()
    })
  })

  describe('disabled cell skipping', () => {
    it('should skip disabled cells when moving right', () => {
      const onMove = vi.fn()
      const handler = useGridKeyboardNav({
        currentIndex: 2,
        itemCount: 12,
        columnCount: 4,
        onMove,
        isItemDisabled: (i) => i === 3
      })

      handler(createKeyboardEvent('ArrowRight'))

      expect(onMove).toHaveBeenCalledWith(4)
    })

    it('should skip disabled cells when moving left', () => {
      const onMove = vi.fn()
      const handler = useGridKeyboardNav({
        currentIndex: 4,
        itemCount: 12,
        columnCount: 4,
        onMove,
        isItemDisabled: (i) => i === 3
      })

      handler(createKeyboardEvent('ArrowLeft'))

      expect(onMove).toHaveBeenCalledWith(2)
    })

    it('should skip disabled cells when moving down', () => {
      const onMove = vi.fn()
      const handler = useGridKeyboardNav({
        currentIndex: 1,
        itemCount: 12,
        columnCount: 4,
        onMove,
        isItemDisabled: (i) => i === 5
      })

      handler(createKeyboardEvent('ArrowDown'))

      expect(onMove).toHaveBeenCalledWith(6)
    })

    it('should not move if all targets are disabled', () => {
      const onMove = vi.fn()
      const handler = useGridKeyboardNav({
        currentIndex: 0,
        itemCount: 4,
        columnCount: 4,
        onMove,
        isItemDisabled: (i) => i > 0
      })

      handler(createKeyboardEvent('ArrowRight'))

      expect(onMove).not.toHaveBeenCalled()
    })

    it('should skip disabled cells at row start on Home', () => {
      const onMove = vi.fn()
      const handler = useGridKeyboardNav({
        currentIndex: 6,
        itemCount: 12,
        columnCount: 4,
        onMove,
        isItemDisabled: (i) => i === 4
      })

      handler(createKeyboardEvent('Home'))

      expect(onMove).toHaveBeenCalledWith(5)
    })

    it('should skip disabled cells at row end on End', () => {
      const onMove = vi.fn()
      const handler = useGridKeyboardNav({
        currentIndex: 4,
        itemCount: 12,
        columnCount: 4,
        onMove,
        isItemDisabled: (i) => i === 7
      })

      handler(createKeyboardEvent('End'))

      expect(onMove).toHaveBeenCalledWith(6)
    })
  })

  describe('edge cases', () => {
    it('should not move up when at first row', () => {
      const onMove = vi.fn()
      const handler = useGridKeyboardNav({
        currentIndex: 1,
        itemCount: 12,
        columnCount: 4,
        onMove
      })

      handler(createKeyboardEvent('ArrowUp'))

      expect(onMove).not.toHaveBeenCalled()
    })

    it('should not move down when at last row', () => {
      const onMove = vi.fn()
      const handler = useGridKeyboardNav({
        currentIndex: 9,
        itemCount: 12,
        columnCount: 4,
        onMove
      })

      handler(createKeyboardEvent('ArrowDown'))

      expect(onMove).not.toHaveBeenCalled()
    })

    it('should fallback to first enabled cell when currentIndex is out of bounds', () => {
      const onMove = vi.fn()
      const handler = useGridKeyboardNav({
        currentIndex: -1,
        itemCount: 12,
        columnCount: 4,
        onMove
      })

      handler(createKeyboardEvent('ArrowRight'))

      expect(onMove).toHaveBeenCalledWith(1)
    })

    it('should not call onMove on moveBy when all items are disabled', () => {
      const onMove = vi.fn()
      const handler = useGridKeyboardNav({
        currentIndex: -1,
        itemCount: 4,
        columnCount: 4,
        onMove,
        isItemDisabled: () => true
      })

      handler(createKeyboardEvent('ArrowRight'))

      expect(onMove).not.toHaveBeenCalled()
    })

    it('should not call onMove on Home when all items are disabled', () => {
      const onMove = vi.fn()
      const handler = useGridKeyboardNav({
        currentIndex: -1,
        itemCount: 4,
        columnCount: 4,
        onMove,
        isItemDisabled: () => true
      })

      handler(createKeyboardEvent('Home'))

      expect(onMove).not.toHaveBeenCalled()
    })

    it('should not call onMove on End when all items in row are disabled', () => {
      const onMove = vi.fn()
      const handler = useGridKeyboardNav({
        currentIndex: 0,
        itemCount: 4,
        columnCount: 4,
        onMove,
        isItemDisabled: () => true
      })

      handler(createKeyboardEvent('End'))

      expect(onMove).not.toHaveBeenCalled()
    })
  })
})
