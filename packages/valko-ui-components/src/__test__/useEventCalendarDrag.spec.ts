import useEventCalendarDrag from '#valkoui/composables/useEventCalendarDrag'
import type { EventAdapterResult, CalendarEvent } from '#valkoui/types/EventCalendar'

const createMockAdapter = (hourRange: [number, number] = [0, 23]): EventAdapterResult => ({
  timezones: { locale: { id: 'UTC', offset: 0, display: [] }, extras: [] },
  hourRange,
  isSameDay: (a: Date, b: Date) => a.toDateString() === b.toDateString(),
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
  color: 'primary'
}

const createMockDragEvent = (overrides: Partial<DragEvent> = {}): DragEvent => ({
  preventDefault: vi.fn(),
  dataTransfer: { effectAllowed: '', setData: vi.fn(), setDragImage: vi.fn() },
  target: document.createElement('div'),
  currentTarget: Object.assign(document.createElement('div'), {
    getBoundingClientRect: () => ({ top: 0, height: 960, left: 0, width: 200, bottom: 960, right: 200, x: 0, y: 0, toJSON: () => {} })
  }),
  clientY: 100,
  ...overrides
} as unknown as DragEvent)

describe('useEventCalendarDrag composable', () => {
  describe('Returns correct shape', () => {
    it('should return all expected keys', () => {
      const result = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())

      expect(result).toHaveProperty('isDragging')
      expect(result).toHaveProperty('draggedEventId')
      expect(result).toHaveProperty('draggedEventColor')
      expect(result).toHaveProperty('dragOverDayIdx')
      expect(result).toHaveProperty('targetDay')
      expect(result).toHaveProperty('ghostTopPercent')
      expect(result).toHaveProperty('ghostHeightPercent')
      expect(result).toHaveProperty('ghostStyle')
      expect(result).toHaveProperty('handleDragStart')
      expect(result).toHaveProperty('handleDragEnd')
      expect(result).toHaveProperty('handleEventsAreaDragOver')
      expect(result).toHaveProperty('handleEventsAreaDrop')
      expect(result).toHaveProperty('handleMonthCellDragOver')
      expect(result).toHaveProperty('handleMonthCellDrop')
      expect(result).toHaveProperty('handleDragLeave')
    })
  })

  describe('Initial state', () => {
    it('should have isDragging as false', () => {
      const { isDragging } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      expect(isDragging.value).toBe(false)
    })

    it('should have draggedEventId as null', () => {
      const { draggedEventId } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      expect(draggedEventId.value).toBeNull()
    })

    it('should have draggedEventColor as null', () => {
      const { draggedEventColor } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      expect(draggedEventColor.value).toBeNull()
    })

    it('should have dragOverDayIdx as -1', () => {
      const { dragOverDayIdx } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      expect(dragOverDayIdx.value).toBe(-1)
    })

    it('should have targetDay as null', () => {
      const { targetDay } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      expect(targetDay.value).toBeNull()
    })

    it('should have ghostStyle as null', () => {
      const { ghostStyle } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      expect(ghostStyle.value).toBeNull()
    })
  })

  describe('handleDragStart', () => {
    it('should set isDragging to true', () => {
      const { isDragging, handleDragStart } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      handleDragStart(sampleEvent, createMockDragEvent(), dayDate)
      expect(isDragging.value).toBe(true)
    })

    it('should set draggedEventId', () => {
      const { draggedEventId, handleDragStart } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      handleDragStart(sampleEvent, createMockDragEvent(), dayDate)
      expect(draggedEventId.value).toBe('evt-1')
    })

    it('should set draggedEventColor', () => {
      const { draggedEventColor, handleDragStart } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      handleDragStart(sampleEvent, createMockDragEvent(), dayDate)
      expect(draggedEventColor.value).toBe('primary')
    })

    it('should set targetDay', () => {
      const { targetDay, handleDragStart } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      handleDragStart(sampleEvent, createMockDragEvent(), dayDate)
      expect(targetDay.value).toBe(dayDate)
    })

    it('should set ghostTopPercent to a value greater than 0', () => {
      const { ghostTopPercent, handleDragStart } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      handleDragStart(sampleEvent, createMockDragEvent(), dayDate)
      expect(ghostTopPercent.value).toBeGreaterThan(0)
    })

    it('should set ghostHeightPercent to a value greater than 0', () => {
      const { ghostHeightPercent, handleDragStart } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      handleDragStart(sampleEvent, createMockDragEvent(), dayDate)
      expect(ghostHeightPercent.value).toBeGreaterThan(0)
    })
  })

  describe('handleDragStart with enabled=false', () => {
    it('should call preventDefault', () => {
      const { handleDragStart } = useEventCalendarDrag(createMockAdapter(), () => false, vi.fn())
      const dragEvent = createMockDragEvent()
      handleDragStart(sampleEvent, dragEvent, dayDate)
      expect(dragEvent.preventDefault).toHaveBeenCalled()
    })

    it('should keep isDragging as false', () => {
      const { isDragging, handleDragStart } = useEventCalendarDrag(createMockAdapter(), () => false, vi.fn())
      handleDragStart(sampleEvent, createMockDragEvent(), dayDate)
      expect(isDragging.value).toBe(false)
    })
  })

  describe('handleDragEnd', () => {
    it('should reset isDragging to false', () => {
      const { isDragging, handleDragStart, handleDragEnd } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      handleDragStart(sampleEvent, createMockDragEvent(), dayDate)
      handleDragEnd()
      expect(isDragging.value).toBe(false)
    })

    it('should reset draggedEventId to null', () => {
      const { draggedEventId, handleDragStart, handleDragEnd } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      handleDragStart(sampleEvent, createMockDragEvent(), dayDate)
      handleDragEnd()
      expect(draggedEventId.value).toBeNull()
    })

    it('should reset draggedEventColor to null', () => {
      const { draggedEventColor, handleDragStart, handleDragEnd } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      handleDragStart(sampleEvent, createMockDragEvent(), dayDate)
      handleDragEnd()
      expect(draggedEventColor.value).toBeNull()
    })

    it('should reset dragOverDayIdx to -1', () => {
      const { dragOverDayIdx, handleDragStart, handleDragEnd } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      handleDragStart(sampleEvent, createMockDragEvent(), dayDate)
      handleDragEnd()
      expect(dragOverDayIdx.value).toBe(-1)
    })

    it('should reset targetDay to null', () => {
      const { targetDay, handleDragStart, handleDragEnd } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      handleDragStart(sampleEvent, createMockDragEvent(), dayDate)
      handleDragEnd()
      expect(targetDay.value).toBeNull()
    })

    it('should reset ghostTopPercent to 0', () => {
      const { ghostTopPercent, handleDragStart, handleDragEnd } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      handleDragStart(sampleEvent, createMockDragEvent(), dayDate)
      handleDragEnd()
      expect(ghostTopPercent.value).toBe(0)
    })

    it('should reset ghostHeightPercent to 0', () => {
      const { ghostHeightPercent, handleDragStart, handleDragEnd } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      handleDragStart(sampleEvent, createMockDragEvent(), dayDate)
      handleDragEnd()
      expect(ghostHeightPercent.value).toBe(0)
    })
  })

  describe('handleEventsAreaDragOver', () => {
    it('should update targetDay', () => {
      const { targetDay, handleDragStart, handleEventsAreaDragOver } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      handleDragStart(sampleEvent, createMockDragEvent(), dayDate)
      const newDay = new Date(2025, 4, 16)
      handleEventsAreaDragOver(createMockDragEvent(), newDay)
      expect(targetDay.value).toBe(newDay)
    })

    it('should update dragOverDayIdx when provided', () => {
      const { dragOverDayIdx, handleDragStart, handleEventsAreaDragOver } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      handleDragStart(sampleEvent, createMockDragEvent(), dayDate)
      handleEventsAreaDragOver(createMockDragEvent(), dayDate, 3)
      expect(dragOverDayIdx.value).toBe(3)
    })

    it('should call computeGhostFromY and change ghost values', () => {
      const { ghostTopPercent, ghostHeightPercent, handleDragStart, handleEventsAreaDragOver } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      handleDragStart(sampleEvent, createMockDragEvent(), dayDate)
      const topBefore = ghostTopPercent.value
      const heightBefore = ghostHeightPercent.value
      handleEventsAreaDragOver(createMockDragEvent({ clientY: 500 }), dayDate)
      expect(ghostTopPercent.value).not.toBe(topBefore)
      expect(ghostHeightPercent.value).toBeCloseTo(heightBefore, 5)
    })

    it('should call preventDefault on the drag event', () => {
      const { handleDragStart, handleEventsAreaDragOver } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      handleDragStart(sampleEvent, createMockDragEvent(), dayDate)
      const dragEvent = createMockDragEvent()
      handleEventsAreaDragOver(dragEvent, dayDate)
      expect(dragEvent.preventDefault).toHaveBeenCalled()
    })
  })

  describe('handleEventsAreaDrop', () => {
    it('should call onDrop with the correct payload shape', () => {
      const onDrop = vi.fn()
      const { handleDragStart, handleEventsAreaDrop } = useEventCalendarDrag(createMockAdapter(), () => true, onDrop)
      handleDragStart(sampleEvent, createMockDragEvent(), dayDate)
      handleEventsAreaDrop(createMockDragEvent(), dayDate)
      expect(onDrop).toHaveBeenCalledOnce()
      const payload = onDrop.mock.calls[0][0]
      expect(payload).toHaveProperty('event', sampleEvent)
      expect(payload).toHaveProperty('originalStart', sampleEvent.start)
      expect(payload).toHaveProperty('originalEnd', sampleEvent.end)
      expect(payload).toHaveProperty('newStart')
      expect(payload).toHaveProperty('newEnd')
      expect(payload.newStart).toBeInstanceOf(Date)
      expect(payload.newEnd).toBeInstanceOf(Date)
    })

    it('should reset state after drop', () => {
      const { isDragging, draggedEventId, handleDragStart, handleEventsAreaDrop } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      handleDragStart(sampleEvent, createMockDragEvent(), dayDate)
      handleEventsAreaDrop(createMockDragEvent(), dayDate)
      expect(isDragging.value).toBe(false)
      expect(draggedEventId.value).toBeNull()
    })
  })

  describe('handleMonthCellDragOver', () => {
    it('should set targetDay', () => {
      const { targetDay, handleDragStart, handleMonthCellDragOver } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      handleDragStart(sampleEvent, createMockDragEvent(), dayDate)
      const newDay = new Date(2025, 4, 20)
      handleMonthCellDragOver(createMockDragEvent(), newDay)
      expect(targetDay.value).toBe(newDay)
    })

    it('should call preventDefault on the drag event', () => {
      const { handleDragStart, handleMonthCellDragOver } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      handleDragStart(sampleEvent, createMockDragEvent(), dayDate)
      const dragEvent = createMockDragEvent()
      handleMonthCellDragOver(dragEvent, dayDate)
      expect(dragEvent.preventDefault).toHaveBeenCalled()
    })
  })

  describe('handleMonthCellDrop different day', () => {
    it('should call onDrop with shifted dates', () => {
      const onDrop = vi.fn()
      const { handleDragStart, handleMonthCellDrop } = useEventCalendarDrag(createMockAdapter(), () => true, onDrop)
      handleDragStart(sampleEvent, createMockDragEvent(), dayDate)
      const targetDate = new Date(2025, 4, 17)
      handleMonthCellDrop(createMockDragEvent(), targetDate)
      expect(onDrop).toHaveBeenCalledOnce()
      const payload = onDrop.mock.calls[0][0]
      expect(payload.newStart).toEqual(new Date(2025, 4, 17, 9, 0))
      expect(payload.newEnd).toEqual(new Date(2025, 4, 17, 10, 0))
      expect(payload.originalStart).toEqual(sampleEvent.start)
      expect(payload.originalEnd).toEqual(sampleEvent.end)
    })

    it('should reset state after drop', () => {
      const onDrop = vi.fn()
      const { isDragging, handleDragStart, handleMonthCellDrop } = useEventCalendarDrag(createMockAdapter(), () => true, onDrop)
      handleDragStart(sampleEvent, createMockDragEvent(), dayDate)
      handleMonthCellDrop(createMockDragEvent(), new Date(2025, 4, 17))
      expect(isDragging.value).toBe(false)
    })
  })

  describe('handleMonthCellDrop same day', () => {
    it('should not call onDrop', () => {
      const onDrop = vi.fn()
      const { handleDragStart, handleMonthCellDrop } = useEventCalendarDrag(createMockAdapter(), () => true, onDrop)
      handleDragStart(sampleEvent, createMockDragEvent(), dayDate)
      handleMonthCellDrop(createMockDragEvent(), new Date(2025, 4, 15))
      expect(onDrop).not.toHaveBeenCalled()
    })

    it('should reset state', () => {
      const { isDragging, draggedEventId, handleDragStart, handleMonthCellDrop } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      handleDragStart(sampleEvent, createMockDragEvent(), dayDate)
      handleMonthCellDrop(createMockDragEvent(), new Date(2025, 4, 15))
      expect(isDragging.value).toBe(false)
      expect(draggedEventId.value).toBeNull()
    })
  })

  describe('handleDragLeave', () => {
    it('should reset dragOverDayIdx to -1', () => {
      const { dragOverDayIdx, handleDragStart, handleEventsAreaDragOver, handleDragLeave } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      handleDragStart(sampleEvent, createMockDragEvent(), dayDate)
      handleEventsAreaDragOver(createMockDragEvent(), dayDate, 2)
      expect(dragOverDayIdx.value).toBe(2)
      handleDragLeave()
      expect(dragOverDayIdx.value).toBe(-1)
    })

    it('should reset targetDay to null', () => {
      const { targetDay, handleDragStart, handleMonthCellDragOver, handleDragLeave } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      handleDragStart(sampleEvent, createMockDragEvent(), dayDate)
      handleMonthCellDragOver(createMockDragEvent(), new Date(2025, 4, 20))
      expect(targetDay.value).not.toBeNull()
      handleDragLeave()
      expect(targetDay.value).toBeNull()
    })
  })

  describe('ghostStyle', () => {
    it('should be null when not dragging', () => {
      const { ghostStyle } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      expect(ghostStyle.value).toBeNull()
    })

    it('should return an object with top, height, left and right when dragging', () => {
      const { ghostStyle, handleDragStart } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      handleDragStart(sampleEvent, createMockDragEvent(), dayDate)
      expect(ghostStyle.value).not.toBeNull()
      expect(ghostStyle.value).toHaveProperty('top')
      expect(ghostStyle.value).toHaveProperty('height')
      expect(ghostStyle.value).toHaveProperty('left', '8px')
      expect(ghostStyle.value).toHaveProperty('right', '8px')
    })

    it('should encode ghostTopPercent in the top property', () => {
      const { ghostStyle, ghostTopPercent, handleDragStart } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      handleDragStart(sampleEvent, createMockDragEvent(), dayDate)
      expect(ghostStyle.value!.top).toBe(`${ghostTopPercent.value}%`)
    })

    it('should encode ghostHeightPercent in the height property', () => {
      const { ghostStyle, ghostHeightPercent, handleDragStart } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      handleDragStart(sampleEvent, createMockDragEvent(), dayDate)
      expect(ghostStyle.value!.height).toBe(`${ghostHeightPercent.value}%`)
    })
  })

  describe('Guard clauses', () => {
    it('handleEventsAreaDragOver should return early without prior drag start', () => {
      const { targetDay, handleEventsAreaDragOver } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      const dragEvent = createMockDragEvent()
      handleEventsAreaDragOver(dragEvent, dayDate)
      expect(targetDay.value).toBeNull()
      expect(dragEvent.preventDefault).not.toHaveBeenCalled()
    })

    it('handleEventsAreaDrop should return early without prior drag start', () => {
      const onDrop = vi.fn()
      const { handleEventsAreaDrop } = useEventCalendarDrag(createMockAdapter(), () => true, onDrop)
      handleEventsAreaDrop(createMockDragEvent(), dayDate)
      expect(onDrop).not.toHaveBeenCalled()
    })

    it('handleMonthCellDragOver should return early without drag in progress', () => {
      const { targetDay, handleMonthCellDragOver } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      const dragEvent = createMockDragEvent()
      handleMonthCellDragOver(dragEvent, dayDate)
      expect(targetDay.value).toBeNull()
      expect(dragEvent.preventDefault).not.toHaveBeenCalled()
    })

    it('handleMonthCellDrop should return early without drag in progress', () => {
      const onDrop = vi.fn()
      const { handleMonthCellDrop } = useEventCalendarDrag(createMockAdapter(), () => true, onDrop)
      handleMonthCellDrop(createMockDragEvent(), dayDate)
      expect(onDrop).not.toHaveBeenCalled()
    })
  })

  describe('handleDragStart edge cases', () => {
    it('should set draggedEventColor to null when event has no color', () => {
      const eventNoColor: CalendarEvent = { id: 'nc-1', start: new Date(2025, 4, 15, 9, 0), end: new Date(2025, 4, 15, 10, 0), title: 'No Color' }
      const { draggedEventColor, handleDragStart } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      handleDragStart(eventNoColor, createMockDragEvent(), dayDate)
      expect(draggedEventColor.value).toBeNull()
    })

    it('should still set drag state when dataTransfer is null', () => {
      const { isDragging, draggedEventId, handleDragStart } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      const dragEvent = createMockDragEvent({ dataTransfer: null } as unknown as Partial<DragEvent>)
      handleDragStart(sampleEvent, dragEvent, dayDate)
      expect(isDragging.value).toBe(true)
      expect(draggedEventId.value).toBe('evt-1')
    })
  })

  describe('handleEventsAreaDragOver without dayIdx', () => {
    it('should not change dragOverDayIdx when dayIdx is not provided', () => {
      const { dragOverDayIdx, handleDragStart, handleEventsAreaDragOver } = useEventCalendarDrag(createMockAdapter(), () => true, vi.fn())
      handleDragStart(sampleEvent, createMockDragEvent(), dayDate)
      handleEventsAreaDragOver(createMockDragEvent(), dayDate, 5)
      expect(dragOverDayIdx.value).toBe(5)
      handleEventsAreaDragOver(createMockDragEvent(), dayDate)
      expect(dragOverDayIdx.value).toBe(5)
    })
  })
})
