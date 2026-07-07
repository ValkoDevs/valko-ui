import { ref } from 'vue'
import useRangeKeyboardNav from '#valkoui/composables/useRangeKeyboardNav.ts'

const createKeyboardEvent = (key: string): KeyboardEvent => {
  const event = new KeyboardEvent('keydown', { key, bubbles: true })
  vi.spyOn(event, 'preventDefault')
  return event
}

describe('useRangeKeyboardNav', () => {
  describe('handler behavior', () => {
    it('should return a function', () => {
      const handler = useRangeKeyboardNav({
        currentValue: 50,
        min: 0,
        max: 100,
        step: 10,
        onUpdate: vi.fn()
      })

      expect(typeof handler).toBe('function')
    })

    it('should call preventDefault on recognized keys', () => {
      const handler = useRangeKeyboardNav({
        currentValue: 50,
        min: 0,
        max: 100,
        step: 10,
        onUpdate: vi.fn()
      })

      const event = createKeyboardEvent('ArrowRight')
      handler(event)

      expect(event.preventDefault).toHaveBeenCalled()
    })

    it('should not call preventDefault on unrecognized keys', () => {
      const handler = useRangeKeyboardNav({
        currentValue: 50,
        min: 0,
        max: 100,
        step: 10,
        onUpdate: vi.fn()
      })

      const event = createKeyboardEvent('Tab')
      handler(event)

      expect(event.preventDefault).not.toHaveBeenCalled()
    })

    it('should not call onUpdate when enabled is false', () => {
      const onUpdate = vi.fn()
      const handler = useRangeKeyboardNav({
        currentValue: 50,
        min: 0,
        max: 100,
        step: 10,
        enabled: false,
        onUpdate
      })

      handler(createKeyboardEvent('ArrowRight'))

      expect(onUpdate).not.toHaveBeenCalled()
    })

    it('should respect reactive enabled ref', () => {
      const onUpdate = vi.fn()
      const enabled = ref(false)
      const handler = useRangeKeyboardNav({
        currentValue: 50,
        min: 0,
        max: 100,
        step: 10,
        enabled,
        onUpdate
      })

      handler(createKeyboardEvent('ArrowRight'))
      expect(onUpdate).not.toHaveBeenCalled()

      enabled.value = true
      handler(createKeyboardEvent('ArrowRight'))
      expect(onUpdate).toHaveBeenCalled()
    })
  })

  describe('increment', () => {
    it('should increment on ArrowRight', () => {
      const onUpdate = vi.fn()
      const handler = useRangeKeyboardNav({
        currentValue: 50,
        min: 0,
        max: 100,
        step: 10,
        onUpdate
      })

      handler(createKeyboardEvent('ArrowRight'))

      expect(onUpdate).toHaveBeenCalledWith(60)
    })

    it('should increment on ArrowUp', () => {
      const onUpdate = vi.fn()
      const handler = useRangeKeyboardNav({
        currentValue: 50,
        min: 0,
        max: 100,
        step: 10,
        onUpdate
      })

      handler(createKeyboardEvent('ArrowUp'))

      expect(onUpdate).toHaveBeenCalledWith(60)
    })
  })

  describe('decrement', () => {
    it('should decrement on ArrowLeft', () => {
      const onUpdate = vi.fn()
      const handler = useRangeKeyboardNav({
        currentValue: 50,
        min: 0,
        max: 100,
        step: 10,
        onUpdate
      })

      handler(createKeyboardEvent('ArrowLeft'))

      expect(onUpdate).toHaveBeenCalledWith(40)
    })

    it('should decrement on ArrowDown', () => {
      const onUpdate = vi.fn()
      const handler = useRangeKeyboardNav({
        currentValue: 50,
        min: 0,
        max: 100,
        step: 10,
        onUpdate
      })

      handler(createKeyboardEvent('ArrowDown'))

      expect(onUpdate).toHaveBeenCalledWith(40)
    })
  })

  describe('boundaries', () => {
    it('should clamp to max on increment past max', () => {
      const onUpdate = vi.fn()
      const handler = useRangeKeyboardNav({
        currentValue: 95,
        min: 0,
        max: 100,
        step: 10,
        onUpdate
      })

      handler(createKeyboardEvent('ArrowRight'))

      expect(onUpdate).toHaveBeenCalledWith(100)
    })

    it('should clamp to min on decrement past min', () => {
      const onUpdate = vi.fn()
      const handler = useRangeKeyboardNav({
        currentValue: 5,
        min: 0,
        max: 100,
        step: 10,
        onUpdate
      })

      handler(createKeyboardEvent('ArrowLeft'))

      expect(onUpdate).toHaveBeenCalledWith(0)
    })

    it('should set to min on Home', () => {
      const onUpdate = vi.fn()
      const handler = useRangeKeyboardNav({
        currentValue: 50,
        min: 0,
        max: 100,
        step: 10,
        onUpdate
      })

      handler(createKeyboardEvent('Home'))

      expect(onUpdate).toHaveBeenCalledWith(0)
    })

    it('should set to max on End', () => {
      const onUpdate = vi.fn()
      const handler = useRangeKeyboardNav({
        currentValue: 50,
        min: 0,
        max: 100,
        step: 10,
        onUpdate
      })

      handler(createKeyboardEvent('End'))

      expect(onUpdate).toHaveBeenCalledWith(100)
    })
  })

  describe('reactive values', () => {
    it('should read reactive currentValue', () => {
      const onUpdate = vi.fn()
      const currentValue = ref(50)
      const handler = useRangeKeyboardNav({
        currentValue,
        min: 0,
        max: 100,
        step: 10,
        onUpdate
      })

      handler(createKeyboardEvent('ArrowRight'))
      expect(onUpdate).toHaveBeenCalledWith(60)

      currentValue.value = 90
      handler(createKeyboardEvent('ArrowRight'))
      expect(onUpdate).toHaveBeenCalledWith(100)
    })
  })

  describe('unrecognized keys', () => {
    it('should not call onUpdate for unrecognized keys', () => {
      const onUpdate = vi.fn()
      const handler = useRangeKeyboardNav({
        currentValue: 50,
        min: 0,
        max: 100,
        step: 10,
        onUpdate
      })

      handler(createKeyboardEvent('A'))

      expect(onUpdate).not.toHaveBeenCalled()
    })
  })
})
