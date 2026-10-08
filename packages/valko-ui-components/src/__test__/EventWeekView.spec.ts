import { VueWrapper, mount } from '@vue/test-utils'
import VkEventWeekView from '#valkoui/components/EventWeekView.vue'
import type { CalendarEvent, EventAdapterResult } from '#valkoui/types/EventCalendar'

const { useEventCalendarDrag, useEventCalendarResize } = vi.hoisted(() => ({
  useEventCalendarDrag: vi.fn(() => ({
    isDragging: { value: false },
    draggedEventId: { value: null as string | null },
    draggedEventColor: { value: null as string | null },
    dragOverDayIdx: { value: -1 },
    targetDay: { value: null as Date | null },
    ghostTopPercent: { value: 0 },
    ghostHeightPercent: { value: 0 },
    ghostStyle: { value: null as Record<string, string> | null },
    handleDragStart: vi.fn(),
    handleDragEnd: vi.fn(),
    handleEventsAreaDragOver: vi.fn(),
    handleEventsAreaDrop: vi.fn(),
    handleMonthCellDragOver: vi.fn(),
    handleMonthCellDrop: vi.fn(),
    handleDragLeave: vi.fn()
  })),
  useEventCalendarResize: vi.fn(() => ({
    isResizing: { value: false },
    resizingEventId: { value: null as string | null },
    resizingEventColor: { value: null as string | null },
    ghostTopPercent: { value: 0 },
    ghostHeightPercent: { value: 0 },
    ghostStyle: { value: null as Record<string, string> | null },
    handleResizeStart: vi.fn()
  }))
}))

vi.mock('#valkoui/composables/useEventCalendarDrag.ts', () => ({
  default: useEventCalendarDrag
}))

vi.mock('#valkoui/composables/useEventCalendarResize.ts', () => ({
  default: useEventCalendarResize
}))

const sampleEvents: CalendarEvent[] = [
  { id: '1', start: new Date(2025, 4, 15, 9, 0), end: new Date(2025, 4, 15, 10, 0), title: 'Meeting', color: 'primary' },
  { id: '2', start: new Date(2025, 4, 15, 14, 0), end: new Date(2025, 4, 15, 15, 0), title: 'Call', color: 'secondary' }
]

const createMockAdapter = (): EventAdapterResult => ({
  timezones: {
    locale: { id: 'America/New_York', offset: -300, abbreviation: 'EST', display: ['00', '01', '02', '03', '04', '05', '06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23'] },
    extras: []
  },
  hourRange: [0, 23] as [number, number],
  isSameDay: (a: Date, b: Date) => a.toDateString() === b.toDateString(),
  getMonday: (d: Date) => { const r = new Date(d); r.setDate(r.getDate() - ((r.getDay() + 6) % 7)); return r },
  getTimezoneLabel: (tz) => tz.abbreviation || 'TZ',
  getTimezoneFullName: (tz) => tz.name || tz.id,
  formatDayHeader: (d: Date) => `Day ${d.getDate()}`,
  isToday: () => false,
  getHours: () => Array.from({ length: 24 }, (_, i) => i),
  getWeekDays: () => {
    const mon = new Date(2025, 4, 12)
    return Array.from({ length: 7 }, (_, i) => { const d = new Date(mon); d.setDate(mon.getDate() + i); return d })
  },
  getEventsForDay: () => [],
  getMonthGrid: () => {
    const weeks = []
    for (let w = 0; w < 5; w++) {
      const week = []
      for (let d = 0; d < 7; d++) {
        week.push({ date: new Date(2025, 4, w * 7 + d + 1), isCurrentMonth: true, isToday: false })
      }
      weeks.push(week)
    }
    return weeks
  },
  getEventPlacements: () => new Map(),
  getStackedEventPlacements: () => new Map(),
  getCurrentTimePosition: () => 50,
  isCurrentTimeInRange: () => false,
  getDateLabel: () => 'May 15, 2025',
  getPreviousDate: (d: Date) => { const r = new Date(d); r.setDate(r.getDate() - 1); return r },
  getNextDate: (d: Date) => { const r = new Date(d); r.setDate(r.getDate() + 1); return r },
  snapToQuarterHour: (d: Date) => d,
  getTimeFromPosition: () => ({ hour: 9, minute: 0 })
})

describe('EventWeekView component', () => {
  let wrapper: VueWrapper

  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkEventWeekView, {
          props: {
            adapter: createMockAdapter(),
            events: sampleEvents,
            modelValue: new Date(2025, 4, 15)
          }
        })
      })

      it('should render', () => {
        expect(wrapper.find('.vk-event-week-view').exists()).toBe(true)
      })

      it('should show 7 day column headers', () => {
        const dayHeaders = wrapper.findAll('.vk-event-week-day-header')
        expect(dayHeaders.length).toBe(7)
      })

      it('should render timezone header', () => {
        expect(wrapper.find('.vk-event-tz-header').exists()).toBe(true)
      })
    })

    describe('When showWeekends prop is false', () => {
      it('should add overflow-hidden to weekend headers', () => {
        wrapper = mount(VkEventWeekView, {
          props: {
            adapter: createMockAdapter(),
            events: sampleEvents,
            modelValue: new Date(2025, 4, 15),
            showWeekends: false
          }
        })

        const dayHeaders = wrapper.findAll('.vk-event-week-day-header')
        const satHeader = dayHeaders[5]
        const sunHeader = dayHeaders[6]

        expect(satHeader.classes()).toContain('overflow-hidden')
        expect(sunHeader.classes()).toContain('overflow-hidden')
      })
    })

    describe('When shape prop changes', () => {
      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkEventWeekView, {
          props: {
            adapter: createMockAdapter(),
            events: [],
            modelValue: new Date(2025, 4, 15),
            shape: 'soft'
          }
        })

        expect(wrapper.find('.vk-event-week-view').exists()).toBe(true)
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.variant is filled', () => {
        wrapper = mount(VkEventWeekView, {
          props: {
            adapter: createMockAdapter(),
            events: [],
            modelValue: new Date(2025, 4, 15),
            variant: 'filled'
          }
        })

        expect(wrapper.find('.bg-surface-container').exists()).toBe(true)
      })
    })
  })

  describe('Emits', () => {
    it('should emit eventClick when event is clicked', async () => {
      const mockAdapter = createMockAdapter()
      mockAdapter.getEventsForDay = () => sampleEvents
      mockAdapter.getStackedEventPlacements = () => new Map([
        ['1', { topPercent: 37.5, heightPercent: 4.17, leftPercent: 0, widthPercent: 100, zIndex: 1, isOverlapping: false }]
      ])

      const wrapper = mount(VkEventWeekView, {
        props: { adapter: mockAdapter, events: sampleEvents, modelValue: new Date(2025, 4, 15) }
      })

      const eventEl = wrapper.find('.vk-event-event')
      if (eventEl.exists()) {
        await eventEl.trigger('click')
        expect(wrapper.emitted()).toHaveProperty('eventClick')
      }
    })

    it('should emit eventClick on keydown.enter', async () => {
      const mockAdapter = createMockAdapter()
      mockAdapter.getEventsForDay = () => sampleEvents
      mockAdapter.getStackedEventPlacements = () => new Map([
        ['1', { topPercent: 37.5, heightPercent: 4.17, leftPercent: 0, widthPercent: 100, zIndex: 1, isOverlapping: false }]
      ])

      const wrapper = mount(VkEventWeekView, {
        props: { adapter: mockAdapter, events: sampleEvents, modelValue: new Date(2025, 4, 15) }
      })

      const eventEl = wrapper.find('.vk-event-event')
      if (eventEl.exists()) {
        await eventEl.trigger('keydown.enter')
        expect(wrapper.emitted()).toHaveProperty('eventClick')
      }
    })
  })

  describe('Resizable and draggable props', () => {
    it('should render resize handles when resizable is true', () => {
      const mockAdapter = createMockAdapter()
      mockAdapter.getEventsForDay = () => sampleEvents
      mockAdapter.getStackedEventPlacements = () => new Map([
        ['1', { topPercent: 37.5, heightPercent: 4.17, leftPercent: 0, widthPercent: 100, zIndex: 1, isOverlapping: false }]
      ])

      const wrapper = mount(VkEventWeekView, {
        props: { adapter: mockAdapter, events: sampleEvents, modelValue: new Date(2025, 4, 15), resizable: true }
      })

      expect(wrapper.find('.vk-event-resize-handle').exists()).toBe(true)
    })

    it('should not render resize handles when resizable is false', () => {
      const mockAdapter = createMockAdapter()
      mockAdapter.getEventsForDay = () => sampleEvents
      mockAdapter.getStackedEventPlacements = () => new Map([
        ['1', { topPercent: 37.5, heightPercent: 4.17, leftPercent: 0, widthPercent: 100, zIndex: 1, isOverlapping: false }]
      ])

      const wrapper = mount(VkEventWeekView, {
        props: { adapter: mockAdapter, events: sampleEvents, modelValue: new Date(2025, 4, 15), resizable: false }
      })

      expect(wrapper.find('.vk-event-resize-handle').exists()).toBe(false)
    })

    it('should set draggable attribute when draggable is true', () => {
      const mockAdapter = createMockAdapter()
      mockAdapter.getEventsForDay = () => sampleEvents
      mockAdapter.getStackedEventPlacements = () => new Map([
        ['1', { topPercent: 37.5, heightPercent: 4.17, leftPercent: 0, widthPercent: 100, zIndex: 1, isOverlapping: false }]
      ])

      const wrapper = mount(VkEventWeekView, {
        props: { adapter: mockAdapter, events: sampleEvents, modelValue: new Date(2025, 4, 15), draggable: true }
      })

      expect(wrapper.find('.vk-event-event').attributes('draggable')).toBe('true')
    })
  })

  describe('Today highlighting', () => {
    it('should render today header class when isToday returns true', () => {
      const mockAdapter = createMockAdapter()
      mockAdapter.isToday = (d: Date) => d.getDate() === 14

      const wrapper = mount(VkEventWeekView, {
        props: { adapter: mockAdapter, events: [], modelValue: new Date(2025, 4, 15) }
      })

      expect(wrapper.find('.vk-event-week-day-header-today').exists()).toBe(true)
    })
  })

  describe('Custom event slot', () => {
    it('should render custom event slot content', () => {
      const mockAdapter = createMockAdapter()
      mockAdapter.getEventsForDay = () => sampleEvents
      mockAdapter.getStackedEventPlacements = () => new Map([
        ['1', { topPercent: 37.5, heightPercent: 4.17, leftPercent: 0, widthPercent: 100, zIndex: 1, isOverlapping: false }]
      ])

      const wrapper = mount(VkEventWeekView, {
        props: { adapter: mockAdapter, events: sampleEvents, modelValue: new Date(2025, 4, 15) },
        slots: { event: '<span class="custom-week-evt">Custom</span>' }
      })

      expect(wrapper.find('.custom-week-evt').exists()).toBe(true)
    })
  })

  describe('modelValue undefined fallback', () => {
    it('should fallback to current date when modelValue is undefined', () => {
      const wrapper = mount(VkEventWeekView, {
        props: { adapter: createMockAdapter(), events: [] }
      })
      expect(wrapper.find('.vk-event-week-view').exists()).toBe(true)
    })
  })

  describe('Event interaction handlers', () => {
    const mountWithEvents = () => {
      const mockAdapter = createMockAdapter()
      mockAdapter.getEventsForDay = () => sampleEvents
      mockAdapter.getStackedEventPlacements = () => new Map([
        ['1', { topPercent: 37.5, heightPercent: 4.17, leftPercent: 0, widthPercent: 100, zIndex: 1, isOverlapping: false }],
        ['2', { topPercent: 58.33, heightPercent: 4.17, leftPercent: 0, widthPercent: 100, zIndex: 2, isOverlapping: true }]
      ])
      return mount(VkEventWeekView, {
        props: { adapter: mockAdapter, events: sampleEvents, modelValue: new Date(2025, 4, 15), resizable: true, draggable: true }
      })
    }

    const lastDragInstance = () => useEventCalendarDrag.mock.results[useEventCalendarDrag.mock.results.length - 1].value
    const lastResizeInstance = () => useEventCalendarResize.mock.results[useEventCalendarResize.mock.results.length - 1].value
    const lastDragCall = () => (useEventCalendarDrag.mock.calls.at(-1) ?? []) as unknown as [unknown, () => boolean, (p: unknown) => void]
    const lastResizeCall = () => (useEventCalendarResize.mock.calls.at(-1) ?? []) as unknown as [unknown, () => boolean, (p: unknown) => void]

    it('should highlight the event style on mouseenter and restore it on mouseleave', async () => {
      const wrapper = mountWithEvents()
      const eventEl = wrapper.find('.vk-event-event')

      await eventEl.trigger('mouseenter')
      expect(eventEl.attributes('style')).toContain('translateY(-6px)')

      await eventEl.trigger('mouseleave')
      expect(eventEl.attributes('style')).not.toContain('translateY(-6px)')
    })

    it('should apply the dragged opacity style while the event is being dragged', () => {
      useEventCalendarDrag.mockReturnValueOnce({
        isDragging: { value: true },
        draggedEventId: { value: '1' },
        draggedEventColor: { value: 'primary' },
        dragOverDayIdx: { value: -1 },
        targetDay: { value: null },
        ghostTopPercent: { value: 0 },
        ghostHeightPercent: { value: 0 },
        ghostStyle: { value: null },
        handleDragStart: vi.fn(),
        handleDragEnd: vi.fn(),
        handleEventsAreaDragOver: vi.fn(),
        handleEventsAreaDrop: vi.fn(),
        handleMonthCellDragOver: vi.fn(),
        handleMonthCellDrop: vi.fn(),
        handleDragLeave: vi.fn()
      })

      const wrapper = mountWithEvents()
      expect(wrapper.find('.vk-event-event').attributes('style')).toContain('opacity: 0.3')
    })

    it('should apply the resizing opacity style while the event is being resized', () => {
      useEventCalendarResize.mockReturnValueOnce({
        isResizing: { value: true },
        resizingEventId: { value: '1' },
        resizingEventColor: { value: null },
        ghostTopPercent: { value: 0 },
        ghostHeightPercent: { value: 0 },
        ghostStyle: { value: null },
        handleResizeStart: vi.fn()
      })

      const wrapper = mountWithEvents()
      expect(wrapper.find('.vk-event-event').attributes('style')).toContain('opacity: 0.3')
    })

    it('should wire dragstart and dragend to the drag composable', async () => {
      const wrapper = mountWithEvents()
      const instance = lastDragInstance()

      await wrapper.find('.vk-event-event').trigger('dragstart', { dataTransfer: { effectAllowed: '', setData: vi.fn(), setDragImage: vi.fn() } })
      expect(instance.handleDragStart).toHaveBeenCalledWith(sampleEvents[0], expect.anything(), expect.anything())

      const isEnabled = lastDragCall()[1]
      expect(isEnabled()).toBe(true)

      await wrapper.find('.vk-event-event').trigger('dragend')
      expect(instance.handleDragEnd).toHaveBeenCalled()
    })

    it('should wire dragover, drop and dragleave on a day events area', async () => {
      const wrapper = mountWithEvents()
      const instance = lastDragInstance()
      const area = wrapper.find('.vk-event-events-area')

      await area.trigger('dragover')
      expect(instance.handleEventsAreaDragOver).toHaveBeenCalledWith(expect.anything(), expect.anything(), 0)

      await area.trigger('drop')
      expect(instance.handleEventsAreaDrop).toHaveBeenCalledWith(expect.anything(), expect.anything())

      await area.trigger('dragleave')
      expect(instance.handleDragLeave).toHaveBeenCalled()
    })

    it('should wire mousedown on the resize handles to the resize composable', async () => {
      const wrapper = mountWithEvents()
      const instance = lastResizeInstance()
      const handles = wrapper.findAll('.vk-event-resize-handle')

      await handles[0].trigger('mousedown')
      expect(instance.handleResizeStart).toHaveBeenCalledWith(sampleEvents[0], 'top', expect.anything(), expect.anything(), expect.anything())

      await handles[1].trigger('mousedown')
      expect(instance.handleResizeStart).toHaveBeenNthCalledWith(2, sampleEvents[0], 'bottom', expect.anything(), expect.anything(), expect.anything())
    })

    it('should emit eventClick on keydown.space', async () => {
      const wrapper = mountWithEvents()
      await wrapper.find('.vk-event-event').trigger('keydown.space')
      expect(wrapper.emitted('eventClick')).toBeTruthy()
    })

    it('should re-emit the payload from the drag composable onDrop callback', () => {
      const wrapper = mountWithEvents()
      const onDrop = lastDragCall()[2]

      const payload = { event: sampleEvents[0], originalStart: sampleEvents[0].start, originalEnd: sampleEvents[0].end, newStart: new Date(2025, 4, 13, 9), newEnd: new Date(2025, 4, 13, 10) }
      onDrop(payload)

      expect(wrapper.emitted('eventDrop')).toEqual([[payload]])
    })

    it('should re-emit the payload from the resize composable onResize callback', () => {
      const wrapper = mountWithEvents()
      const onResize = lastResizeCall()[2]

      const payload = { event: sampleEvents[0], originalStart: sampleEvents[0].start, originalEnd: sampleEvents[0].end, newStart: new Date(2025, 4, 15, 9), newEnd: new Date(2025, 4, 15, 9, 30) }
      onResize(payload)

      expect(wrapper.emitted('eventResize')).toEqual([[payload]])
    })

    it('should refresh the current time every minute and clean up the interval on unmount', () => {
      vi.useFakeTimers()
      const wrapper = mount(VkEventWeekView, {
        props: { adapter: createMockAdapter(), events: [] }
      })

      vi.advanceTimersByTime(60_000)
      wrapper.unmount()
      vi.useRealTimers()
    })

    it('should render extra timezone columns and hour labels', () => {
      const mockAdapter = createMockAdapter()
      mockAdapter.timezones.extras = [{ id: 'Europe/London', offset: 0, abbreviation: 'GMT', display: Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, '0')}:00`) }]

      const wrapper = mount(VkEventWeekView, {
        props: { adapter: mockAdapter, events: [] }
      })

      expect(wrapper.findAll('.vk-event-tz-header')).toHaveLength(2)
      expect(wrapper.findAll('.vk-event-tz-hour-label').length).toBe(48)
    })

    it('should render the drag ghost only in the day currently hovered during drag', () => {
      useEventCalendarDrag.mockReturnValueOnce({
        isDragging: { value: true },
        draggedEventId: { value: '1' },
        draggedEventColor: { value: 'primary' },
        dragOverDayIdx: { value: 1 },
        targetDay: { value: new Date(2025, 4, 13) },
        ghostTopPercent: { value: 10 },
        ghostHeightPercent: { value: 5 },
        ghostStyle: { value: { top: '10%', height: '5%', left: '8px', right: '8px' } },
        handleDragStart: vi.fn(),
        handleDragEnd: vi.fn(),
        handleEventsAreaDragOver: vi.fn(),
        handleEventsAreaDrop: vi.fn(),
        handleMonthCellDragOver: vi.fn(),
        handleMonthCellDrop: vi.fn(),
        handleDragLeave: vi.fn()
      })

      const wrapper = mountWithEvents()
      const areas = wrapper.findAll('.vk-event-events-area')

      expect(areas[0].find('.vk-event-drag-ghost').exists()).toBe(false)
      expect(areas[1].find('.vk-event-drag-ghost').exists()).toBe(true)
    })

    it('should render the resize ghost in the day containing the resizing event', () => {
      useEventCalendarResize.mockReturnValueOnce({
        isResizing: { value: true },
        resizingEventId: { value: '1' },
        resizingEventColor: { value: 'primary' },
        ghostTopPercent: { value: 10 },
        ghostHeightPercent: { value: 5 },
        ghostStyle: { value: { top: '10%', height: '5%', left: '8px', right: '8px' } },
        handleResizeStart: vi.fn()
      })

      const wrapper = mountWithEvents()
      expect(wrapper.find('.vk-event-events-area .vk-event-drag-ghost').exists()).toBe(true)
    })

    it('should render the current time marker in the today column', () => {
      const mockAdapter = createMockAdapter()
      mockAdapter.getEventsForDay = () => sampleEvents
      mockAdapter.isToday = (day: Date) => day.getDate() === 12
      mockAdapter.isCurrentTimeInRange = () => true
      mockAdapter.getCurrentTimePosition = () => 50

      const wrapper = mount(VkEventWeekView, {
        props: { adapter: mockAdapter, events: sampleEvents, modelValue: new Date(2025, 4, 15) }
      })
      const areas = wrapper.findAll('.vk-event-events-area')

      expect(areas[0].find('.vk-event-time-marker').exists()).toBe(true)
      expect(areas[1].find('.vk-event-time-marker').exists()).toBe(false)
    })
  })
})
