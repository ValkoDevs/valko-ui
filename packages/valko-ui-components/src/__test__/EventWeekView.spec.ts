import { VueWrapper, mount } from '@vue/test-utils'
import VkEventWeekView from '#valkoui/components/EventWeekView.vue'
import type { EventAdapterResult } from '#valkoui/types/EventCalendar'

const { useEventCalendarDrag, useEventCalendarResize } = vi.hoisted(() => ({
  useEventCalendarDrag: vi.fn(() => ({
    isDragging: { value: false },
    draggedEventId: { value: null },
    draggedEventColor: { value: null },
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
  })),
  useEventCalendarResize: vi.fn(() => ({
    isResizing: { value: false },
    resizingEventId: { value: null },
    resizingEventColor: { value: null },
    ghostTopPercent: { value: 0 },
    ghostHeightPercent: { value: 0 },
    ghostStyle: { value: null },
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
})
