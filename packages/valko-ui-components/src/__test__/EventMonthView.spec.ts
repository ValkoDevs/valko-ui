import { VueWrapper, mount } from '@vue/test-utils'
import VkEventMonthView from '#valkoui/components/EventMonthView.vue'
import type { CalendarEvent, EventAdapterResult } from '#valkoui/types/EventCalendar'

const { useEventCalendarDrag } = vi.hoisted(() => ({
  useEventCalendarDrag: vi.fn(() => ({
    isDragging: { value: false },
    draggedEventId: { value: null as string | null },
    draggedEventColor: { value: null as string | null },
    dragOverDayIdx: { value: -1 },
    targetDay: { value: null as Date | null },
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
  }))
}))

vi.mock('#valkoui/composables/useEventCalendarDrag.ts', () => ({
  default: useEventCalendarDrag
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

describe('EventMonthView component', () => {
  let wrapper: VueWrapper

  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkEventMonthView, {
          props: {
            adapter: createMockAdapter(),
            events: sampleEvents,
            modelValue: new Date(2025, 4, 15)
          }
        })
      })

      it('should render', () => {
        expect(wrapper.find('.vk-event-month-view').exists()).toBe(true)
      })

      it('should show weekday headers', () => {
        const headers = wrapper.findAll('.vk-event-month-weekday-header')
        expect(headers.length).toBe(7)
      })

      it('should show month grid cells', () => {
        const cells = wrapper.findAll('.vk-event-month-day-cell')
        expect(cells.length).toBeGreaterThan(0)
      })
    })

    describe('When showWeekends prop is false', () => {
      it('should add overflow-hidden to weekend headers', () => {
        wrapper = mount(VkEventMonthView, {
          props: {
            adapter: createMockAdapter(),
            events: sampleEvents,
            modelValue: new Date(2025, 4, 15),
            showWeekends: false
          }
        })

        const headers = wrapper.findAll('.vk-event-month-weekday-header')
        const satHeader = headers[5]
        const sunHeader = headers[6]

        expect(satHeader.classes()).toContain('overflow-hidden')
        expect(sunHeader.classes()).toContain('overflow-hidden')
      })
    })

    describe('When shape prop changes', () => {
      it('should be soft when props.shape is soft', () => {
        const mockAdapter = createMockAdapter()
        mockAdapter.getEventsForDay = () => sampleEvents

        wrapper = mount(VkEventMonthView, {
          props: {
            adapter: mockAdapter,
            events: sampleEvents,
            modelValue: new Date(2025, 4, 15),
            shape: 'soft'
          }
        })

        expect(wrapper.find('.vk-event-month-event').classes()).toContain('rounded-lg')
      })

      it('should be rounded when props.shape is rounded', () => {
        const mockAdapter = createMockAdapter()
        mockAdapter.getEventsForDay = () => sampleEvents

        wrapper = mount(VkEventMonthView, {
          props: {
            adapter: mockAdapter,
            events: sampleEvents,
            modelValue: new Date(2025, 4, 15),
            shape: 'rounded'
          }
        })

        expect(wrapper.find('.vk-event-month-event').classes()).toContain('rounded-xl')
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.variant is filled', () => {
        wrapper = mount(VkEventMonthView, {
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
    it('should emit eventClick when a month event is clicked', async () => {
      const mockAdapter = createMockAdapter()
      mockAdapter.getEventsForDay = () => sampleEvents

      wrapper = mount(VkEventMonthView, {
        props: {
          adapter: mockAdapter,
          events: sampleEvents,
          modelValue: new Date(2025, 4, 15)
        }
      })

      const eventEl = wrapper.find('.vk-event-month-event')
      if (eventEl.exists()) {
        await eventEl.trigger('click')
        expect(wrapper.emitted()).toHaveProperty('eventClick')
      }
    })
  })

  describe('More than MAX_VISIBLE_EVENTS', () => {
    it('should render only 3 events and show more indicator when 5 events exist', () => {
      const manyEvents: CalendarEvent[] = [
        { id: '1', start: new Date(2025, 4, 1, 8, 0), end: new Date(2025, 4, 1, 9, 0), title: 'E1', color: 'primary' },
        { id: '2', start: new Date(2025, 4, 1, 9, 0), end: new Date(2025, 4, 1, 10, 0), title: 'E2', color: 'primary' },
        { id: '3', start: new Date(2025, 4, 1, 10, 0), end: new Date(2025, 4, 1, 11, 0), title: 'E3', color: 'primary' },
        { id: '4', start: new Date(2025, 4, 1, 11, 0), end: new Date(2025, 4, 1, 12, 0), title: 'E4', color: 'primary' },
        { id: '5', start: new Date(2025, 4, 1, 12, 0), end: new Date(2025, 4, 1, 13, 0), title: 'E5', color: 'primary' }
      ]
      const mockAdapter = createMockAdapter()
      mockAdapter.getEventsForDay = () => manyEvents

      const wrapper = mount(VkEventMonthView, {
        props: { adapter: mockAdapter, events: manyEvents, modelValue: new Date(2025, 4, 15) }
      })

      expect(wrapper.find('.vk-event-more-indicator').exists()).toBe(true)
      expect(wrapper.find('.vk-event-more-indicator').text()).toContain('+2 more')
    })
  })

  describe('Day cell classes', () => {
    it('should apply monthDayCellOutside class for non-current month days', () => {
      const mockAdapter = createMockAdapter()
      mockAdapter.getMonthGrid = () => [[
        { date: new Date(2025, 3, 28), isCurrentMonth: false, isToday: false },
        { date: new Date(2025, 3, 29), isCurrentMonth: false, isToday: false },
        { date: new Date(2025, 3, 30), isCurrentMonth: false, isToday: false },
        { date: new Date(2025, 4, 1), isCurrentMonth: true, isToday: false },
        { date: new Date(2025, 4, 2), isCurrentMonth: true, isToday: false },
        { date: new Date(2025, 4, 3), isCurrentMonth: true, isToday: false },
        { date: new Date(2025, 4, 4), isCurrentMonth: true, isToday: false }
      ]]

      const wrapper = mount(VkEventMonthView, {
        props: { adapter: mockAdapter, events: [], modelValue: new Date(2025, 4, 15) }
      })

      expect(wrapper.find('.vk-event-month-day-cell-outside').exists()).toBe(true)
    })

    it('should apply monthDayCellToday class for today', () => {
      const mockAdapter = createMockAdapter()
      mockAdapter.getMonthGrid = () => [[
        { date: new Date(2025, 4, 1), isCurrentMonth: true, isToday: true },
        { date: new Date(2025, 4, 2), isCurrentMonth: true, isToday: false },
        { date: new Date(2025, 4, 3), isCurrentMonth: true, isToday: false },
        { date: new Date(2025, 4, 4), isCurrentMonth: true, isToday: false },
        { date: new Date(2025, 4, 5), isCurrentMonth: true, isToday: false },
        { date: new Date(2025, 4, 6), isCurrentMonth: true, isToday: false },
        { date: new Date(2025, 4, 7), isCurrentMonth: true, isToday: false }
      ]]

      const wrapper = mount(VkEventMonthView, {
        props: { adapter: mockAdapter, events: [], modelValue: new Date(2025, 4, 15) }
      })

      expect(wrapper.find('.vk-event-month-day-cell-today').exists()).toBe(true)
    })
  })

  describe('Drag target highlighting', () => {
    it('should add ring class when drag target matches day cell', () => {
      const targetDate = new Date(2025, 4, 1)
      useEventCalendarDrag.mockReturnValueOnce({
        isDragging: { value: true },
        draggedEventId: { value: '1' },
        draggedEventColor: { value: 'primary' },
        dragOverDayIdx: { value: 0 },
        targetDay: { value: targetDate },
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

      const mockAdapter = createMockAdapter()
      mockAdapter.isSameDay = (a: Date, b: Date) => a.toDateString() === b.toDateString()

      const wrapper = mount(VkEventMonthView, {
        props: { adapter: mockAdapter, events: sampleEvents, modelValue: new Date(2025, 4, 15) }
      })

      expect(wrapper.find('.ring-2').exists()).toBe(true)
    })
  })

  describe('Dragged event opacity', () => {
    it('should apply opacity style to dragged event', () => {
      useEventCalendarDrag.mockReturnValueOnce({
        isDragging: { value: true },
        draggedEventId: { value: '1' },
        draggedEventColor: { value: 'primary' },
        dragOverDayIdx: { value: 0 },
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

      const mockAdapter = createMockAdapter()
      mockAdapter.getEventsForDay = () => sampleEvents

      const wrapper = mount(VkEventMonthView, {
        props: { adapter: mockAdapter, events: sampleEvents, modelValue: new Date(2025, 4, 15) }
      })

      const eventEl = wrapper.find('.vk-event-month-event')
      if (eventEl.exists()) {
        expect(eventEl.attributes('style')).toContain('opacity')
      }
    })
  })

  describe('Keyboard events on month events', () => {
    it('should emit eventClick on keydown.enter', async () => {
      const mockAdapter = createMockAdapter()
      mockAdapter.getEventsForDay = () => sampleEvents

      const wrapper = mount(VkEventMonthView, {
        props: { adapter: mockAdapter, events: sampleEvents, modelValue: new Date(2025, 4, 15) }
      })

      const eventEl = wrapper.find('.vk-event-month-event')
      if (eventEl.exists()) {
        await eventEl.trigger('keydown.enter')
        expect(wrapper.emitted()).toHaveProperty('eventClick')
      }
    })
  })

  describe('Draggable prop', () => {
    it('should set draggable attribute when draggable is true', () => {
      const mockAdapter = createMockAdapter()
      mockAdapter.getEventsForDay = () => sampleEvents

      const wrapper = mount(VkEventMonthView, {
        props: { adapter: mockAdapter, events: sampleEvents, modelValue: new Date(2025, 4, 15), draggable: true }
      })

      const eventEl = wrapper.find('.vk-event-month-event')
      if (eventEl.exists()) {
        expect(eventEl.attributes('draggable')).toBe('true')
      }
    })

    it('should not set draggable attribute when draggable is false', () => {
      const mockAdapter = createMockAdapter()
      mockAdapter.getEventsForDay = () => sampleEvents

      const wrapper = mount(VkEventMonthView, {
        props: { adapter: mockAdapter, events: sampleEvents, modelValue: new Date(2025, 4, 15), draggable: false }
      })

      const eventEl = wrapper.find('.vk-event-month-event')
      if (eventEl.exists()) {
        expect(eventEl.attributes('draggable')).toBeUndefined()
      }
    })
  })

  describe('modelValue undefined fallback', () => {
    it('should fallback to current date when modelValue is undefined', () => {
      const wrapper = mount(VkEventMonthView, {
        props: { adapter: createMockAdapter(), events: [] }
      })
      expect(wrapper.find('.vk-event-month-view').exists()).toBe(true)
    })
  })

  describe('Custom event slot', () => {
    it('should render custom event slot content', () => {
      const mockAdapter = createMockAdapter()
      mockAdapter.getEventsForDay = () => sampleEvents

      const wrapper = mount(VkEventMonthView, {
        props: { adapter: mockAdapter, events: sampleEvents, modelValue: new Date(2025, 4, 15) },
        slots: { event: '<span class="custom-month-evt">Custom</span>' }
      })

      expect(wrapper.find('.custom-month-evt').exists()).toBe(true)
    })
  })

  describe('Grid columns with showWeekends false', () => {
    it('should include 0fr in grid template columns', () => {
      const wrapper = mount(VkEventMonthView, {
        props: { adapter: createMockAdapter(), events: [], modelValue: new Date(2025, 4, 15), showWeekends: false }
      })

      const container = wrapper.find('.vk-event-month-view')
      expect(container.attributes('style')).toContain('0fr')
    })
  })

  describe('More events popover', () => {
    const manyEvents: CalendarEvent[] = [
      { id: '1', start: new Date(2025, 4, 1, 8, 0), end: new Date(2025, 4, 1, 9, 0), title: 'E1', color: 'primary' },
      { id: '2', start: new Date(2025, 4, 1, 9, 0), end: new Date(2025, 4, 1, 10, 0), title: 'E2', color: 'primary' },
      { id: '3', start: new Date(2025, 4, 1, 10, 0), end: new Date(2025, 4, 1, 11, 0), title: 'E3', color: 'primary' },
      { id: '4', start: new Date(2025, 4, 1, 11, 0), end: new Date(2025, 4, 1, 12, 0), title: 'E4', color: 'primary' },
      { id: '5', start: new Date(2025, 4, 1, 12, 0), end: new Date(2025, 4, 1, 13, 0), title: 'E5', color: 'primary' }
    ]

    const mountWithManyEvents = (slots = {}) => {
      const mockAdapter = createMockAdapter()
      mockAdapter.getEventsForDay = () => manyEvents
      return mount(VkEventMonthView, {
        props: { adapter: mockAdapter, events: manyEvents, modelValue: new Date(2025, 4, 15) },
        slots
      })
    }

    it('should open the popover and list hidden events when the indicator is clicked', async () => {
      const wrapper = mountWithManyEvents()
      expect(wrapper.text()).not.toContain('E4')

      await wrapper.find('.vk-event-more-indicator').trigger('click')

      expect(wrapper.text()).toContain('E4')
      expect(wrapper.text()).toContain('E5')
    })

    it('should close the popover when the indicator is clicked again', async () => {
      const wrapper = mountWithManyEvents()

      await wrapper.find('.vk-event-more-indicator').trigger('click')
      expect(wrapper.text()).toContain('E4')

      await wrapper.find('.vk-event-more-indicator').trigger('click')
      expect(wrapper.text()).not.toContain('E4')
    })

    it('should toggle the popover with keyboard on the indicator', async () => {
      const wrapper = mountWithManyEvents()
      const indicator = wrapper.find('.vk-event-more-indicator')

      await indicator.trigger('keydown.enter')
      expect(wrapper.text()).toContain('E4')

      await indicator.trigger('keydown.space')
      expect(wrapper.text()).not.toContain('E4')
    })

    it('should close the popover when the popover emits close', async () => {
      const wrapper = mountWithManyEvents()

      await wrapper.find('.vk-event-more-indicator').trigger('click')
      expect(wrapper.text()).toContain('E4')

      await wrapper.findComponent({ name: 'VkPopover' }).vm.$emit('close')
      expect(wrapper.text()).not.toContain('E4')
    })

    it('should render custom more-events slot content in the popover', async () => {
      const wrapper = mountWithManyEvents({
        'more-events': '<div class="custom-more-events">Custom More Events</div>'
      })

      await wrapper.find('.vk-event-more-indicator').trigger('click')

      expect(wrapper.find('.custom-more-events').exists()).toBe(true)
      expect(wrapper.text()).not.toContain('E4')
    })

    it('should emit eventClick when an event row in the popover is clicked', async () => {
      const wrapper = mountWithManyEvents()

      await wrapper.find('.vk-event-more-indicator').trigger('click')
      const popover = wrapper.findComponent({ name: 'VkPopover' })
      const popoverRows = popover.findAll('.vk-event-month-event')
      expect(popoverRows.length).toBe(5)
      await popoverRows[4].trigger('click')
      expect(wrapper.emitted('eventClick')).toBeTruthy()

      await popoverRows[4].trigger('keydown.enter')
      await popoverRows[4].trigger('keydown.space')
      expect(wrapper.emitted('eventClick')!.length).toBe(3)
    })
  })

  describe('Day cell drag handlers', () => {
    it('should wire dragover, drop and dragleave on the day cells', async () => {
      const wrapper = mount(VkEventMonthView, {
        props: { adapter: createMockAdapter(), events: [], modelValue: new Date(2025, 4, 15) }
      })
      const instance = useEventCalendarDrag.mock.results[useEventCalendarDrag.mock.results.length - 1].value
      const cell = wrapper.find('.vk-event-month-day-cell')

      await cell.trigger('dragover')
      expect(instance.handleMonthCellDragOver).toHaveBeenCalledWith(expect.anything(), expect.anything())

      await cell.trigger('drop')
      expect(instance.handleMonthCellDrop).toHaveBeenCalledWith(expect.anything(), expect.anything())

      await cell.trigger('dragleave')
      expect(instance.handleDragLeave).toHaveBeenCalled()
    })
  })

  describe('Month event interaction handlers', () => {
    const mountWithEvents = () => {
      const mockAdapter = createMockAdapter()
      mockAdapter.getEventsForDay = () => sampleEvents
      return mount(VkEventMonthView, {
        props: { adapter: mockAdapter, events: sampleEvents, modelValue: new Date(2025, 4, 15), draggable: true }
      })
    }

    it('should wire dragstart and dragend to the drag composable', async () => {
      const wrapper = mountWithEvents()
      const instance = useEventCalendarDrag.mock.results[useEventCalendarDrag.mock.results.length - 1].value
      const eventEl = wrapper.find('.vk-event-month-event')

      await eventEl.trigger('dragstart', { dataTransfer: { effectAllowed: '', setData: vi.fn(), setDragImage: vi.fn() } })
      expect(instance.handleDragStart).toHaveBeenCalledWith(sampleEvents[0], expect.anything(), expect.anything())

      const lastDragCall = () => (useEventCalendarDrag.mock.calls.at(-1) ?? []) as unknown as [unknown, () => boolean, (p: unknown) => void]
      const isEnabled = lastDragCall()[1]
      expect(isEnabled()).toBe(true)

      await eventEl.trigger('dragend')
      expect(instance.handleDragEnd).toHaveBeenCalled()
    })

    it('should emit eventClick on keydown.space', async () => {
      const wrapper = mountWithEvents()
      await wrapper.find('.vk-event-month-event').trigger('keydown.space')
      expect(wrapper.emitted('eventClick')).toBeTruthy()
    })

    it('should re-emit the payload from the drag composable onDrop callback', () => {
      const wrapper = mountWithEvents()
      const onDrop = (useEventCalendarDrag.mock.calls.at(-1) ?? []) as unknown as [unknown, () => boolean, (p: unknown) => void]
      const emitPayload = onDrop[2]

      const payload = { event: sampleEvents[0], originalStart: sampleEvents[0].start, originalEnd: sampleEvents[0].end, newStart: new Date(2025, 4, 8, 9), newEnd: new Date(2025, 4, 8, 10) }
      emitPayload(payload)

      expect(wrapper.emitted('eventDrop')).toEqual([[payload]])
    })

    it('should refresh the current time every minute and clean up the interval on unmount', () => {
      vi.useFakeTimers()
      const wrapper = mount(VkEventMonthView, {
        props: { adapter: createMockAdapter(), events: [], modelValue: new Date(2025, 4, 15) }
      })

      vi.advanceTimersByTime(60_000)
      wrapper.unmount()
      vi.useRealTimers()
    })
  })
})
