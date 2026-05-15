import { nextTick } from 'vue'
import { vi } from 'vitest'
import useEventCalendarResize from '#valkoui/composables/useEventCalendarResize'
import type { EventAdapterResult, CalendarEvent } from '#valkoui/types/EventCalendar'

vi.mock('vue', async () => {
  const actual = await vi.importActual('vue')
  return { ...actual, onUnmounted: vi.fn() }
})

const createMockAdapter = (hourRange: [number, number] = [0, 23]): EventAdapterResult => ({
  timezones: { locale: { id: 'UTC', offset: 0, display: [] }, extras: [] },
  hourRange,
  isSameDay: vi.fn(),
  getMonday: vi.fn(),
  getTimezoneLabel: vi.fn(),
  getTimezoneFullName: vi.fn(),
  formatDayHeader: vi.fn(),
  isToday: vi.fn(),
  getHours: () => Array.from({ length: hourRange[1] - hourRange[0] + 1 }, (_, i) => hourRange[0] + i),
  getWeekDays: vi.fn(),
  getEventsForDay: vi.fn(),
  getMonthGrid: vi.fn(),
  getEventPlacements: vi.fn(),
  getStackedEventPlacements: vi.fn(),
  getCurrentTimePosition: vi.fn(),
  isCurrentTimeInRange: vi.fn(),
  getDateLabel: vi.fn(),
  getPreviousDate: vi.fn(),
  getNextDate: vi.fn(),
  snapToQuarterHour: (d: Date) => d,
  getTimeFromPosition: (percent: number) => {
    const [s, e] = hourRange
    const hourCount = e - s + 1
    const rawHour = (percent / 100 * hourCount) + s - 0.5
    const clamped = Math.max(s, Math.min(rawHour, e + 1))
    const totalMin = Math.round(clamped * 60 / 15) * 15
    return { hour: Math.floor(totalMin / 60), minute: totalMin % 60 }
  }
})

const dayDate = new Date(2025, 4, 15)

const sampleEvent: CalendarEvent = {
  id: 'evt-1',
  start: new Date(2025, 4, 15, 9, 0),
  end: new Date(2025, 4, 15, 10, 0),
  title: 'Meeting',
  color: 'secondary'
}

const createMockMouseEvent = (overrides: Partial<MouseEvent> = {}): MouseEvent => ({
  preventDefault: vi.fn(),
  stopPropagation: vi.fn(),
  clientY: 100,
  ...overrides
} as unknown as MouseEvent)

const createMockElement = (): HTMLElement => ({
  getBoundingClientRect: () => ({ top: 0, height: 960, left: 0, width: 200, bottom: 960, right: 200, x: 0, y: 0, toJSON: () => {} })
} as unknown as HTMLElement)

describe('useEventCalendarResize', () => {
  describe('Returns correct shape', () => {
    it('exposes all expected keys', () => {
      const adapter = createMockAdapter()
      const result = useEventCalendarResize(adapter, () => true, vi.fn())

      expect(result).toHaveProperty('isResizing')
      expect(result).toHaveProperty('resizingEventId')
      expect(result).toHaveProperty('resizingEventColor')
      expect(result).toHaveProperty('ghostTopPercent')
      expect(result).toHaveProperty('ghostHeightPercent')
      expect(result).toHaveProperty('ghostStyle')
      expect(result).toHaveProperty('handleResizeStart')
    })
  })

  describe('Initial state', () => {
    it('isResizing is false', () => {
      const { isResizing } = useEventCalendarResize(createMockAdapter(), () => true, vi.fn())
      expect(isResizing.value).toBe(false)
    })

    it('resizingEventId is null', () => {
      const { resizingEventId } = useEventCalendarResize(createMockAdapter(), () => true, vi.fn())
      expect(resizingEventId.value).toBeNull()
    })

    it('resizingEventColor is null', () => {
      const { resizingEventColor } = useEventCalendarResize(createMockAdapter(), () => true, vi.fn())
      expect(resizingEventColor.value).toBeNull()
    })

    it('ghostStyle is null', () => {
      const { ghostStyle } = useEventCalendarResize(createMockAdapter(), () => true, vi.fn())
      expect(ghostStyle.value).toBeNull()
    })
  })

  describe('handleResizeStart', () => {
    it('sets isResizing to true', () => {
      const { isResizing, handleResizeStart } = useEventCalendarResize(createMockAdapter(), () => true, vi.fn())
      handleResizeStart(sampleEvent, 'bottom', createMockMouseEvent(), createMockElement(), dayDate)
      expect(isResizing.value).toBe(true)
    })

    it('sets resizingEventId', () => {
      const { resizingEventId, handleResizeStart } = useEventCalendarResize(createMockAdapter(), () => true, vi.fn())
      handleResizeStart(sampleEvent, 'bottom', createMockMouseEvent(), createMockElement(), dayDate)
      expect(resizingEventId.value).toBe('evt-1')
    })

    it('sets resizingEventColor', () => {
      const { resizingEventColor, handleResizeStart } = useEventCalendarResize(createMockAdapter(), () => true, vi.fn())
      handleResizeStart(sampleEvent, 'bottom', createMockMouseEvent(), createMockElement(), dayDate)
      expect(resizingEventColor.value).toBe('secondary')
    })

    it('sets ghost values greater than 0', () => {
      const { ghostTopPercent, ghostHeightPercent, handleResizeStart } = useEventCalendarResize(createMockAdapter(), () => true, vi.fn())
      handleResizeStart(sampleEvent, 'bottom', createMockMouseEvent(), createMockElement(), dayDate)
      expect(ghostTopPercent.value).toBeGreaterThan(0)
      expect(ghostHeightPercent.value).toBeGreaterThan(0)
    })

    it('adds mousemove and mouseup listeners to document', () => {
      const addSpy = vi.spyOn(document, 'addEventListener')
      const { handleResizeStart } = useEventCalendarResize(createMockAdapter(), () => true, vi.fn())
      handleResizeStart(sampleEvent, 'bottom', createMockMouseEvent(), createMockElement(), dayDate)
      expect(addSpy).toHaveBeenCalledWith('mousemove', expect.any(Function))
      expect(addSpy).toHaveBeenCalledWith('mouseup', expect.any(Function))
      addSpy.mockRestore()
    })

    it('calls preventDefault and stopPropagation on mouseEvent', () => {
      const { handleResizeStart } = useEventCalendarResize(createMockAdapter(), () => true, vi.fn())
      const mouseEvent = createMockMouseEvent()
      handleResizeStart(sampleEvent, 'bottom', mouseEvent, createMockElement(), dayDate)
      expect(mouseEvent.preventDefault).toHaveBeenCalled()
      expect(mouseEvent.stopPropagation).toHaveBeenCalled()
    })
  })

  describe('handleResizeStart with enabled=false', () => {
    it('does not set isResizing when disabled', () => {
      const { isResizing, handleResizeStart } = useEventCalendarResize(createMockAdapter(), () => false, vi.fn())
      handleResizeStart(sampleEvent, 'bottom', createMockMouseEvent(), createMockElement(), dayDate)
      expect(isResizing.value).toBe(false)
    })

    it('does not set resizingEventId when disabled', () => {
      const { resizingEventId, handleResizeStart } = useEventCalendarResize(createMockAdapter(), () => false, vi.fn())
      handleResizeStart(sampleEvent, 'bottom', createMockMouseEvent(), createMockElement(), dayDate)
      expect(resizingEventId.value).toBeNull()
    })
  })

  describe('Mouse move updates ghost', () => {
    it('updates ghostTopPercent and ghostHeightPercent on mousemove', async () => {
      const { ghostTopPercent, ghostHeightPercent, handleResizeStart } = useEventCalendarResize(createMockAdapter(), () => true, vi.fn())
      handleResizeStart(sampleEvent, 'bottom', createMockMouseEvent({ clientY: 100 }), createMockElement(), dayDate)

      const initialTop = ghostTopPercent.value
      const initialHeight = ghostHeightPercent.value

      document.dispatchEvent(new MouseEvent('mousemove', { clientY: 500 }))
      await nextTick()

      expect(ghostHeightPercent.value).not.toBe(initialHeight)
      expect(ghostTopPercent.value).toBe(initialTop)
    })

    it('updates ghostTopPercent on mousemove when resizing top edge', async () => {
      const { ghostTopPercent, handleResizeStart } = useEventCalendarResize(createMockAdapter(), () => true, vi.fn())
      handleResizeStart(sampleEvent, 'top', createMockMouseEvent({ clientY: 100 }), createMockElement(), dayDate)

      const initialTop = ghostTopPercent.value

      document.dispatchEvent(new MouseEvent('mousemove', { clientY: 200 }))
      await nextTick()

      expect(ghostTopPercent.value).not.toBe(initialTop)
    })
  })

  describe('Mouse up calls onResize and resets', () => {
    it('calls onResize with correct payload when time changes', async () => {
      const onResize = vi.fn()
      const { handleResizeStart } = useEventCalendarResize(createMockAdapter(), () => true, onResize)
      handleResizeStart(sampleEvent, 'bottom', createMockMouseEvent({ clientY: 100 }), createMockElement(), dayDate)

      document.dispatchEvent(new MouseEvent('mouseup', { clientY: 500 }))
      await nextTick()

      expect(onResize).toHaveBeenCalledOnce()
      const payload = onResize.mock.calls[0][0]
      expect(payload.event).toBe(sampleEvent)
      expect(payload.originalStart).toEqual(sampleEvent.start)
      expect(payload.originalEnd).toEqual(sampleEvent.end)
      expect(payload.newEnd).not.toEqual(sampleEvent.end)
    })

    it('resets isResizing to false after mouseup', async () => {
      const { isResizing, handleResizeStart } = useEventCalendarResize(createMockAdapter(), () => true, vi.fn())
      handleResizeStart(sampleEvent, 'bottom', createMockMouseEvent({ clientY: 100 }), createMockElement(), dayDate)

      document.dispatchEvent(new MouseEvent('mouseup', { clientY: 500 }))
      await nextTick()

      expect(isResizing.value).toBe(false)
    })

    it('resets resizingEventId to null after mouseup', async () => {
      const { resizingEventId, handleResizeStart } = useEventCalendarResize(createMockAdapter(), () => true, vi.fn())
      handleResizeStart(sampleEvent, 'bottom', createMockMouseEvent({ clientY: 100 }), createMockElement(), dayDate)

      document.dispatchEvent(new MouseEvent('mouseup', { clientY: 500 }))
      await nextTick()

      expect(resizingEventId.value).toBeNull()
    })

    it('resets resizingEventColor to null after mouseup', async () => {
      const { resizingEventColor, handleResizeStart } = useEventCalendarResize(createMockAdapter(), () => true, vi.fn())
      handleResizeStart(sampleEvent, 'bottom', createMockMouseEvent({ clientY: 100 }), createMockElement(), dayDate)

      document.dispatchEvent(new MouseEvent('mouseup', { clientY: 500 }))
      await nextTick()

      expect(resizingEventColor.value).toBeNull()
    })

    it('removes document event listeners after mouseup', async () => {
      const removeSpy = vi.spyOn(document, 'removeEventListener')
      const { handleResizeStart } = useEventCalendarResize(createMockAdapter(), () => true, vi.fn())
      handleResizeStart(sampleEvent, 'bottom', createMockMouseEvent({ clientY: 100 }), createMockElement(), dayDate)

      document.dispatchEvent(new MouseEvent('mouseup', { clientY: 500 }))
      await nextTick()

      expect(removeSpy).toHaveBeenCalledWith('mousemove', expect.any(Function))
      expect(removeSpy).toHaveBeenCalledWith('mouseup', expect.any(Function))
      removeSpy.mockRestore()
    })
  })

  describe('Mouse up with no change', () => {
    it('does not call onResize when time is unchanged', async () => {
      const onResize = vi.fn()
      const { handleResizeStart } = useEventCalendarResize(createMockAdapter(), () => true, onResize)

      const el = createMockElement()
      handleResizeStart(sampleEvent, 'bottom', createMockMouseEvent({ clientY: 100 }), el, dayDate)

      const rect = el.getBoundingClientRect()
      const totalHours = 24
      const endHour = sampleEvent.end.getHours() + sampleEvent.end.getMinutes() / 60
      const clientYForEnd = rect.top + ((endHour + 0.5) / totalHours) * rect.height

      document.dispatchEvent(new MouseEvent('mouseup', { clientY: Math.round(clientYForEnd) }))
      await nextTick()

      expect(onResize).not.toHaveBeenCalled()
    })
  })

  describe('ghostStyle', () => {
    it('is null when not resizing', () => {
      const { ghostStyle } = useEventCalendarResize(createMockAdapter(), () => true, vi.fn())
      expect(ghostStyle.value).toBeNull()
    })

    it('is an object with top, height, left, right when resizing', () => {
      const { ghostStyle, handleResizeStart } = useEventCalendarResize(createMockAdapter(), () => true, vi.fn())
      handleResizeStart(sampleEvent, 'bottom', createMockMouseEvent(), createMockElement(), dayDate)
      expect(ghostStyle.value).toMatchObject({
        top: expect.stringMatching(/%$/),
        height: expect.stringMatching(/%$/),
        left: '8px',
        right: '8px'
      })
    })

    it('returns null again after mouseup resets state', async () => {
      const { ghostStyle, handleResizeStart } = useEventCalendarResize(createMockAdapter(), () => true, vi.fn())
      handleResizeStart(sampleEvent, 'bottom', createMockMouseEvent({ clientY: 100 }), createMockElement(), dayDate)
      expect(ghostStyle.value).not.toBeNull()

      document.dispatchEvent(new MouseEvent('mouseup', { clientY: 500 }))
      await nextTick()

      expect(ghostStyle.value).toBeNull()
    })
  })

  describe('Guard clauses', () => {
    it('should not crash when mousemove fires without active resize', () => {
      useEventCalendarResize(createMockAdapter(), () => true, vi.fn())
      expect(() => {
        document.dispatchEvent(new MouseEvent('mousemove', { clientY: 100 }))
      }).not.toThrow()
    })

    it('should not crash when mouseup fires without active resize', () => {
      const onResize = vi.fn()
      useEventCalendarResize(createMockAdapter(), () => true, onResize)
      document.dispatchEvent(new MouseEvent('mouseup', { clientY: 100 }))
      expect(onResize).not.toHaveBeenCalled()
    })
  })

  describe('Mouse up with top edge', () => {
    it('should change newStart but keep newEnd as originalEnd when resizing top edge', async () => {
      const onResize = vi.fn()
      const { handleResizeStart } = useEventCalendarResize(createMockAdapter(), () => true, onResize)
      handleResizeStart(sampleEvent, 'top', createMockMouseEvent({ clientY: 100 }), createMockElement(), dayDate)

      document.dispatchEvent(new MouseEvent('mouseup', { clientY: 200 }))
      await nextTick()

      expect(onResize).toHaveBeenCalledOnce()
      const payload = onResize.mock.calls[0][0]
      expect(payload.newEnd).toEqual(sampleEvent.end)
      expect(payload.newStart).not.toEqual(sampleEvent.start)
    })
  })

  describe('Min-duration constraints', () => {
    it('should clamp when dragging top edge past bottom edge', async () => {
      const onResize = vi.fn()
      const { handleResizeStart } = useEventCalendarResize(createMockAdapter(), () => true, onResize)
      handleResizeStart(sampleEvent, 'top', createMockMouseEvent({ clientY: 100 }), createMockElement(), dayDate)

      document.dispatchEvent(new MouseEvent('mouseup', { clientY: 900 }))
      await nextTick()

      if (onResize.mock.calls.length > 0) {
        const payload = onResize.mock.calls[0][0]
        const durationMs = payload.newEnd.getTime() - payload.newStart.getTime()
        expect(durationMs).toBeGreaterThanOrEqual(15 * 60 * 1000)
      }
    })

    it('should clamp when dragging bottom edge past top edge', async () => {
      const onResize = vi.fn()
      const { handleResizeStart } = useEventCalendarResize(createMockAdapter(), () => true, onResize)
      handleResizeStart(sampleEvent, 'bottom', createMockMouseEvent({ clientY: 500 }), createMockElement(), dayDate)

      document.dispatchEvent(new MouseEvent('mouseup', { clientY: 10 }))
      await nextTick()

      if (onResize.mock.calls.length > 0) {
        const payload = onResize.mock.calls[0][0]
        const durationMs = payload.newEnd.getTime() - payload.newStart.getTime()
        expect(durationMs).toBeGreaterThanOrEqual(15 * 60 * 1000)
      }
    })
  })

  describe('handleResizeStart with no color event', () => {
    it('should set resizingEventColor to null when event has no color', () => {
      const eventNoColor: CalendarEvent = { id: 'nc-1', start: new Date(2025, 4, 15, 9, 0), end: new Date(2025, 4, 15, 10, 0), title: 'No Color' }
      const { resizingEventColor, handleResizeStart } = useEventCalendarResize(createMockAdapter(), () => true, vi.fn())
      handleResizeStart(eventNoColor, 'bottom', createMockMouseEvent(), createMockElement(), dayDate)
      expect(resizingEventColor.value).toBeNull()
    })
  })
})
