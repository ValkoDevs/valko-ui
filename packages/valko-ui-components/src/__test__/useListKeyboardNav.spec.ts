import { ref } from 'vue'
import useListKeyboardNav from '#valkoui/composables/useListKeyboardNav.ts'

const createKeyboardEvent = (key: string): KeyboardEvent => {
  const event = new KeyboardEvent('keydown', { key, bubbles: true })
  vi.spyOn(event, 'preventDefault')
  return event
}

describe('useListKeyboardNav', () => {
  describe('handler behavior', () => {
    it('should return a function', () => {
      const handler = useListKeyboardNav({
        currentIndex: 0,
        itemCount: 5,
        onMove: vi.fn()
      })

      expect(typeof handler).toBe('function')
    })

    it('should call preventDefault on recognized keys', () => {
      const handler = useListKeyboardNav({
        currentIndex: 0,
        itemCount: 5,
        onMove: vi.fn()
      })

      const event = createKeyboardEvent('ArrowDown')
      handler(event)

      expect(event.preventDefault).toHaveBeenCalled()
    })

    it('should not call preventDefault on unrecognized keys', () => {
      const handler = useListKeyboardNav({
        currentIndex: 0,
        itemCount: 5,
        onMove: vi.fn()
      })

      const event = createKeyboardEvent('Tab')
      handler(event)

      expect(event.preventDefault).not.toHaveBeenCalled()
    })

    it('should not call any callback when enabled is false', () => {
      const onMove = vi.fn()
      const handler = useListKeyboardNav({
        currentIndex: 0,
        itemCount: 5,
        enabled: false,
        onMove
      })

      handler(createKeyboardEvent('ArrowDown'))

      expect(onMove).not.toHaveBeenCalled()
    })

    it('should respect reactive enabled ref', () => {
      const onMove = vi.fn()
      const enabled = ref(false)
      const handler = useListKeyboardNav({
        currentIndex: 0,
        itemCount: 5,
        enabled,
        onMove
      })

      handler(createKeyboardEvent('ArrowDown'))
      expect(onMove).not.toHaveBeenCalled()

      enabled.value = true
      handler(createKeyboardEvent('ArrowDown'))
      expect(onMove).toHaveBeenCalled()
    })

    it('should respect enabled as getter function', () => {
      const onMove = vi.fn()
      let isEnabled = false
      const handler = useListKeyboardNav({
        currentIndex: 0,
        itemCount: 5,
        enabled: () => isEnabled,
        onMove
      })

      handler(createKeyboardEvent('ArrowDown'))
      expect(onMove).not.toHaveBeenCalled()

      isEnabled = true
      handler(createKeyboardEvent('ArrowDown'))
      expect(onMove).toHaveBeenCalled()
    })
  })

  describe('movement', () => {
    it('should call onMove with next index on ArrowDown', () => {
      const onMove = vi.fn()
      const handler = useListKeyboardNav({
        currentIndex: 0,
        itemCount: 5,
        onMove
      })

      handler(createKeyboardEvent('ArrowDown'))

      expect(onMove).toHaveBeenCalledWith(1)
    })

    it('should call onMove with previous index on ArrowUp', () => {
      const onMove = vi.fn()
      const handler = useListKeyboardNav({
        currentIndex: 2,
        itemCount: 5,
        onMove
      })

      handler(createKeyboardEvent('ArrowUp'))

      expect(onMove).toHaveBeenCalledWith(1)
    })

    it('should call onMove with next index on ArrowRight', () => {
      const onMove = vi.fn()
      const handler = useListKeyboardNav({
        currentIndex: 0,
        itemCount: 5,
        onMove
      })

      handler(createKeyboardEvent('ArrowRight'))

      expect(onMove).toHaveBeenCalledWith(1)
    })

    it('should call onMove with previous index on ArrowLeft', () => {
      const onMove = vi.fn()
      const handler = useListKeyboardNav({
        currentIndex: 2,
        itemCount: 5,
        onMove
      })

      handler(createKeyboardEvent('ArrowLeft'))

      expect(onMove).toHaveBeenCalledWith(1)
    })

    it('should call onMove with 0 on Home', () => {
      const onMove = vi.fn()
      const handler = useListKeyboardNav({
        currentIndex: 3,
        itemCount: 5,
        onMove
      })

      handler(createKeyboardEvent('Home'))

      expect(onMove).toHaveBeenCalledWith(0)
    })

    it('should call onMove with last index on End', () => {
      const onMove = vi.fn()
      const handler = useListKeyboardNav({
        currentIndex: 0,
        itemCount: 5,
        onMove
      })

      handler(createKeyboardEvent('End'))

      expect(onMove).toHaveBeenCalledWith(4)
    })

    it('should read reactive currentIndex', () => {
      const onMove = vi.fn()
      const currentIndex = ref(2)
      const handler = useListKeyboardNav({
        currentIndex,
        itemCount: 5,
        onMove
      })

      handler(createKeyboardEvent('ArrowDown'))
      expect(onMove).toHaveBeenCalledWith(3)

      currentIndex.value = 4
      handler(createKeyboardEvent('ArrowDown'))
      expect(onMove).toHaveBeenCalledWith(0)
    })

    it('should read reactive itemCount', () => {
      const onMove = vi.fn()
      const itemCount = ref(3)
      const handler = useListKeyboardNav({
        currentIndex: 0,
        itemCount,
        onMove
      })

      handler(createKeyboardEvent('End'))
      expect(onMove).toHaveBeenCalledWith(2)

      itemCount.value = 10
      handler(createKeyboardEvent('End'))
      expect(onMove).toHaveBeenCalledWith(9)
    })
  })

  describe('looping', () => {
    it('should loop from last to first on ArrowDown by default', () => {
      const onMove = vi.fn()
      const handler = useListKeyboardNav({
        currentIndex: 4,
        itemCount: 5,
        onMove
      })

      handler(createKeyboardEvent('ArrowDown'))

      expect(onMove).toHaveBeenCalledWith(0)
    })

    it('should loop from first to last on ArrowUp by default', () => {
      const onMove = vi.fn()
      const handler = useListKeyboardNav({
        currentIndex: 0,
        itemCount: 5,
        onMove
      })

      handler(createKeyboardEvent('ArrowUp'))

      expect(onMove).toHaveBeenCalledWith(4)
    })

    it('should not loop when loop is false', () => {
      const onMove = vi.fn()
      const handler = useListKeyboardNav({
        currentIndex: 4,
        itemCount: 5,
        loop: false,
        onMove
      })

      handler(createKeyboardEvent('ArrowDown'))

      expect(onMove).toHaveBeenCalledWith(4)
    })

    it('should clamp at 0 when loop is false and at start', () => {
      const onMove = vi.fn()
      const handler = useListKeyboardNav({
        currentIndex: 0,
        itemCount: 5,
        loop: false,
        onMove
      })

      handler(createKeyboardEvent('ArrowUp'))

      expect(onMove).toHaveBeenCalledWith(0)
    })
  })

  describe('selection', () => {
    it('should call onSelect with current index on Enter', () => {
      const onSelect = vi.fn()
      const handler = useListKeyboardNav({
        currentIndex: 2,
        itemCount: 5,
        onMove: vi.fn(),
        onSelect
      })

      handler(createKeyboardEvent('Enter'))

      expect(onSelect).toHaveBeenCalledWith(2)
    })

    it('should call onSelect on Space', () => {
      const onSelect = vi.fn()
      const handler = useListKeyboardNav({
        currentIndex: 1,
        itemCount: 5,
        onMove: vi.fn(),
        onSelect
      })

      handler(createKeyboardEvent(' '))

      expect(onSelect).toHaveBeenCalledWith(1)
    })

    it('should call onSelect on SpaceBar', () => {
      const onSelect = vi.fn()
      const handler = useListKeyboardNav({
        currentIndex: 1,
        itemCount: 5,
        onMove: vi.fn(),
        onSelect
      })

      handler(createKeyboardEvent('SpaceBar'))

      expect(onSelect).toHaveBeenCalledWith(1)
    })

    it('should not call onSelect if currentIndex is -1', () => {
      const onSelect = vi.fn()
      const handler = useListKeyboardNav({
        currentIndex: -1,
        itemCount: 5,
        onMove: vi.fn(),
        onSelect
      })

      handler(createKeyboardEvent('Enter'))

      expect(onSelect).not.toHaveBeenCalled()
    })

    it('should not throw if onSelect is not provided', () => {
      const handler = useListKeyboardNav({
        currentIndex: 0,
        itemCount: 5,
        onMove: vi.fn()
      })

      expect(() => handler(createKeyboardEvent('Enter'))).not.toThrow()
    })
  })

  describe('edge cases', () => {
    it('should not call onMove when itemCount is 0', () => {
      const onMove = vi.fn()
      const handler = useListKeyboardNav({
        currentIndex: 0,
        itemCount: 0,
        onMove
      })

      handler(createKeyboardEvent('ArrowDown'))

      expect(onMove).not.toHaveBeenCalled()
    })
  })
})
