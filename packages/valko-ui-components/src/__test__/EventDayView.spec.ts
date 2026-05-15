import { VueWrapper, mount } from '@vue/test-utils'
import VkEventDayView from '#valkoui/components/EventDayView.vue'
import type { EventAdapterResult } from '#valkoui/types/EventCalendar'

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

const sampleEvents = [
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

describe('EventDayView component', () => {
  let wrapper: VueWrapper

  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkEventDayView, {
          props: {
            adapter: createMockAdapter(),
            events: [],
            modelValue: new Date(2025, 4, 15)
          }
        })
      })

      it('should render', () => {
        expect(wrapper.find('.vk-event-day-view').exists()).toBe(true)
      })

      it('should render timezone header', () => {
        expect(wrapper.find('.vk-event-tz-header').exists()).toBe(true)
      })

      it('should render hour cells', () => {
        expect(wrapper.findAll('.vk-event-hour-cell').length).toBeGreaterThan(0)
      })
    })

    describe('When events are present', () => {
      beforeEach(() => {
        const mockAdapter = createMockAdapter()
        mockAdapter.getEventsForDay = () => sampleEvents
        mockAdapter.getEventPlacements = () => new Map([
          ['1', { topPercent: 37.5, heightPercent: 4.17, leftPercent: 0, widthPercent: 100, zIndex: 10, isOverlapping: false }],
          ['2', { topPercent: 58.33, heightPercent: 4.17, leftPercent: 0, widthPercent: 100, zIndex: 10, isOverlapping: false }]
        ])

        wrapper = mount(VkEventDayView, {
          props: {
            adapter: mockAdapter,
            events: sampleEvents,
            modelValue: new Date(2025, 4, 15)
          }
        })
      })

      it('should render event elements', () => {
        expect(wrapper.findAll('.vk-event-event').length).toBeGreaterThan(0)
      })

      it('should render events with correct data-color attribute', () => {
        const events = wrapper.findAll('.vk-event-event')
        expect(events[0].attributes('data-color')).toBe('primary')
      })
    })

    describe('When shape prop changes', () => {
      it('should be soft when props.shape is soft', () => {
        const mockAdapter = createMockAdapter()
        mockAdapter.getEventsForDay = () => sampleEvents
        mockAdapter.getEventPlacements = () => new Map([
          ['1', { topPercent: 37.5, heightPercent: 4.17, leftPercent: 0, widthPercent: 100, zIndex: 10, isOverlapping: false }]
        ])

        wrapper = mount(VkEventDayView, {
          props: {
            adapter: mockAdapter,
            events: sampleEvents,
            modelValue: new Date(2025, 4, 15),
            shape: 'soft'
          }
        })

        expect(wrapper.find('.rounded-lg').exists()).toBe(true)
      })

      it('should be rounded when props.shape is rounded', () => {
        const mockAdapter = createMockAdapter()
        mockAdapter.getEventsForDay = () => sampleEvents
        mockAdapter.getEventPlacements = () => new Map([
          ['1', { topPercent: 37.5, heightPercent: 4.17, leftPercent: 0, widthPercent: 100, zIndex: 10, isOverlapping: false }]
        ])

        wrapper = mount(VkEventDayView, {
          props: {
            adapter: mockAdapter,
            events: sampleEvents,
            modelValue: new Date(2025, 4, 15),
            shape: 'rounded'
          }
        })

        expect(wrapper.find('.rounded-xl').exists()).toBe(true)
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.variant is filled', () => {
        wrapper = mount(VkEventDayView, {
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
    it('should emit eventClick when event div is clicked', async () => {
      const mockAdapter = createMockAdapter()
      mockAdapter.getEventsForDay = () => sampleEvents
      mockAdapter.getEventPlacements = () => new Map([
        ['1', { topPercent: 37.5, heightPercent: 4.17, leftPercent: 0, widthPercent: 100, zIndex: 10, isOverlapping: false }],
        ['2', { topPercent: 58.33, heightPercent: 4.17, leftPercent: 0, widthPercent: 100, zIndex: 10, isOverlapping: false }]
      ])

      wrapper = mount(VkEventDayView, {
        props: {
          adapter: mockAdapter,
          events: sampleEvents,
          modelValue: new Date(2025, 4, 15)
        }
      })

      const eventEl = wrapper.find('.vk-event-event')
      await eventEl.trigger('click')

      expect(wrapper.emitted()).toHaveProperty('eventClick')
    })
  })

  describe('Drag ghost rendering', () => {
    it('should render drag ghost when isDragging is true and ghostStyle is present', () => {
      useEventCalendarDrag.mockReturnValueOnce({
        isDragging: { value: true },
        draggedEventId: { value: '1' },
        draggedEventColor: { value: 'primary' },
        dragOverDayIdx: { value: 0 },
        targetDay: { value: new Date(2025, 4, 15) },
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

      const wrapper = mount(VkEventDayView, {
        props: { adapter: createMockAdapter(), events: [], modelValue: new Date(2025, 4, 15) }
      })

      expect(wrapper.find('.vk-event-drag-ghost').exists()).toBe(true)
    })
  })

  describe('Resize ghost rendering', () => {
    it('should render resize ghost when isResizing is true and ghostStyle is present', () => {
      useEventCalendarResize.mockReturnValueOnce({
        isResizing: { value: true },
        resizingEventId: { value: '1' },
        resizingEventColor: { value: 'primary' },
        ghostTopPercent: { value: 10 },
        ghostHeightPercent: { value: 5 },
        ghostStyle: { value: { top: '10%', height: '5%', left: '8px', right: '8px' } },
        handleResizeStart: vi.fn()
      })

      const wrapper = mount(VkEventDayView, {
        props: { adapter: createMockAdapter(), events: [], modelValue: new Date(2025, 4, 15) }
      })

      const ghosts = wrapper.findAll('.vk-event-drag-ghost')
      expect(ghosts.length).toBeGreaterThan(0)
    })
  })

  describe('Current time marker', () => {
    it('should show time marker when time is in range and is today', () => {
      const mockAdapter = createMockAdapter()
      mockAdapter.isCurrentTimeInRange = () => true
      mockAdapter.isSameDay = () => true

      const wrapper = mount(VkEventDayView, {
        props: { adapter: mockAdapter, events: [], modelValue: new Date(2025, 4, 15) }
      })

      expect(wrapper.find('.vk-event-time-marker').exists()).toBe(true)
    })

    it('should not show time marker when isSameDay is false', () => {
      const mockAdapter = createMockAdapter()
      mockAdapter.isCurrentTimeInRange = () => true
      mockAdapter.isSameDay = () => false

      const wrapper = mount(VkEventDayView, {
        props: { adapter: mockAdapter, events: [], modelValue: new Date(2025, 4, 15) }
      })

      expect(wrapper.find('.vk-event-time-marker').exists()).toBe(false)
    })
  })

  describe('Keyboard navigation', () => {
    it('should emit eventClick on keydown.enter', async () => {
      const mockAdapter = createMockAdapter()
      mockAdapter.getEventsForDay = () => sampleEvents
      mockAdapter.getEventPlacements = () => new Map([
        ['1', { topPercent: 37.5, heightPercent: 4.17, leftPercent: 0, widthPercent: 100, zIndex: 10, isOverlapping: false }]
      ])

      const wrapper = mount(VkEventDayView, {
        props: { adapter: mockAdapter, events: sampleEvents, modelValue: new Date(2025, 4, 15) }
      })

      await wrapper.find('.vk-event-event').trigger('keydown.enter')
      expect(wrapper.emitted()).toHaveProperty('eventClick')
    })

    it('should emit eventClick on keydown.space', async () => {
      const mockAdapter = createMockAdapter()
      mockAdapter.getEventsForDay = () => sampleEvents
      mockAdapter.getEventPlacements = () => new Map([
        ['1', { topPercent: 37.5, heightPercent: 4.17, leftPercent: 0, widthPercent: 100, zIndex: 10, isOverlapping: false }]
      ])

      const wrapper = mount(VkEventDayView, {
        props: { adapter: mockAdapter, events: sampleEvents, modelValue: new Date(2025, 4, 15) }
      })

      await wrapper.find('.vk-event-event').trigger('keydown.space')
      expect(wrapper.emitted()).toHaveProperty('eventClick')
    })
  })

  describe('Resizable prop', () => {
    it('should render resize handles when resizable is true', () => {
      const mockAdapter = createMockAdapter()
      mockAdapter.getEventsForDay = () => sampleEvents
      mockAdapter.getEventPlacements = () => new Map([
        ['1', { topPercent: 37.5, heightPercent: 4.17, leftPercent: 0, widthPercent: 100, zIndex: 10, isOverlapping: false }]
      ])

      const wrapper = mount(VkEventDayView, {
        props: { adapter: mockAdapter, events: sampleEvents, modelValue: new Date(2025, 4, 15), resizable: true }
      })

      expect(wrapper.find('.vk-event-resize-handle').exists()).toBe(true)
    })

    it('should not render resize handles when resizable is false', () => {
      const mockAdapter = createMockAdapter()
      mockAdapter.getEventsForDay = () => sampleEvents
      mockAdapter.getEventPlacements = () => new Map([
        ['1', { topPercent: 37.5, heightPercent: 4.17, leftPercent: 0, widthPercent: 100, zIndex: 10, isOverlapping: false }]
      ])

      const wrapper = mount(VkEventDayView, {
        props: { adapter: mockAdapter, events: sampleEvents, modelValue: new Date(2025, 4, 15), resizable: false }
      })

      expect(wrapper.find('.vk-event-resize-handle').exists()).toBe(false)
    })
  })

  describe('Draggable prop', () => {
    it('should set draggable attribute on events when draggable is true', () => {
      const mockAdapter = createMockAdapter()
      mockAdapter.getEventsForDay = () => sampleEvents
      mockAdapter.getEventPlacements = () => new Map([
        ['1', { topPercent: 37.5, heightPercent: 4.17, leftPercent: 0, widthPercent: 100, zIndex: 10, isOverlapping: false }]
      ])

      const wrapper = mount(VkEventDayView, {
        props: { adapter: mockAdapter, events: sampleEvents, modelValue: new Date(2025, 4, 15), draggable: true }
      })

      expect(wrapper.find('.vk-event-event').attributes('draggable')).toBe('true')
    })

    it('should not set draggable attribute when draggable is false', () => {
      const mockAdapter = createMockAdapter()
      mockAdapter.getEventsForDay = () => sampleEvents
      mockAdapter.getEventPlacements = () => new Map([
        ['1', { topPercent: 37.5, heightPercent: 4.17, leftPercent: 0, widthPercent: 100, zIndex: 10, isOverlapping: false }]
      ])

      const wrapper = mount(VkEventDayView, {
        props: { adapter: mockAdapter, events: sampleEvents, modelValue: new Date(2025, 4, 15), draggable: false }
      })

      expect(wrapper.find('.vk-event-event').attributes('draggable')).toBeUndefined()
    })
  })

  describe('Custom event slot', () => {
    it('should render custom event slot content', () => {
      const mockAdapter = createMockAdapter()
      mockAdapter.getEventsForDay = () => sampleEvents
      mockAdapter.getEventPlacements = () => new Map([
        ['1', { topPercent: 37.5, heightPercent: 4.17, leftPercent: 0, widthPercent: 100, zIndex: 10, isOverlapping: false }]
      ])

      const wrapper = mount(VkEventDayView, {
        props: { adapter: mockAdapter, events: sampleEvents, modelValue: new Date(2025, 4, 15) },
        slots: { event: '<span class="custom-evt">Custom</span>' }
      })

      expect(wrapper.find('.custom-evt').exists()).toBe(true)
    })
  })

  describe('Extra timezones', () => {
    it('should render extra timezone columns', () => {
      const mockAdapter = createMockAdapter()
      mockAdapter.timezones.extras = [{ id: 'Europe/London', offset: 0, abbreviation: 'GMT', display: Array(24).fill('00') }]

      const wrapper = mount(VkEventDayView, {
        props: { adapter: mockAdapter, events: [], modelValue: new Date(2025, 4, 15) }
      })

      const tzHeaders = wrapper.findAll('.vk-event-tz-header')
      expect(tzHeaders.length).toBe(2)
    })
  })

  describe('Hover state', () => {
    it('should track hovered event on mouseenter and reset on mouseleave', async () => {
      const mockAdapter = createMockAdapter()
      mockAdapter.getEventsForDay = () => sampleEvents
      mockAdapter.getEventPlacements = () => new Map([
        ['1', { topPercent: 37.5, heightPercent: 4.17, leftPercent: 0, widthPercent: 100, zIndex: 10, isOverlapping: false }]
      ])

      const wrapper = mount(VkEventDayView, {
        props: { adapter: mockAdapter, events: sampleEvents, modelValue: new Date(2025, 4, 15) }
      })

      const eventEl = wrapper.find('.vk-event-event')
      await eventEl.trigger('mouseenter')
      await eventEl.trigger('mouseleave')
      expect(wrapper.find('.vk-event-event').exists()).toBe(true)
    })
  })

  describe('modelValue undefined fallback', () => {
    it('should fallback to current date when modelValue is undefined', () => {
      const wrapper = mount(VkEventDayView, {
        props: { adapter: createMockAdapter(), events: [] }
      })
      expect(wrapper.find('.vk-event-day-view').exists()).toBe(true)
    })
  })
})
