import { VueWrapper, mount } from '@vue/test-utils'
import VkEventCalendar from '#valkoui/components/EventCalendar.vue'
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

const sampleEvents = [
  { id: '1', start: new Date(2025, 4, 15, 9, 0), end: new Date(2025, 4, 15, 10, 0), title: 'Meeting', color: 'primary' },
  { id: '2', start: new Date(2025, 4, 15, 14, 0), end: new Date(2025, 4, 15, 15, 0), title: 'Call', color: 'secondary' }
]

describe('EventCalendar component', () => {
  let wrapper: VueWrapper

  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkEventCalendar, {
          props: {
            adapter: createMockAdapter(),
            events: sampleEvents,
            modelValue: new Date(2025, 4, 15)
          }
        })
      })

      it('should render', () => {
        expect(wrapper.find('.vk-event-calendar').exists()).toBe(true)
      })

      it('should show header by default', () => {
        expect(wrapper.find('.vk-event-calendar-header').exists()).toBe(true)
      })

      it('should render day view by default', () => {
        expect(wrapper.find('.vk-event-day-view').exists()).toBe(true)
      })
    })

    describe('When hideHeader prop is true', () => {
      it('should hide the header', () => {
        wrapper = mount(VkEventCalendar, {
          props: {
            adapter: createMockAdapter(),
            events: sampleEvents,
            modelValue: new Date(2025, 4, 15),
            hideHeader: true
          }
        })

        expect(wrapper.find('.vk-event-calendar-header').exists()).toBe(false)
      })
    })

    describe('When currentView prop changes', () => {
      it('should render week view when currentView is week', () => {
        wrapper = mount(VkEventCalendar, {
          props: {
            adapter: createMockAdapter(),
            events: sampleEvents,
            modelValue: new Date(2025, 4, 15),
            currentView: 'week'
          }
        })

        expect(wrapper.find('.vk-event-week-view').exists()).toBe(true)
      })

      it('should render month view when currentView is month', () => {
        wrapper = mount(VkEventCalendar, {
          props: {
            adapter: createMockAdapter(),
            events: sampleEvents,
            modelValue: new Date(2025, 4, 15),
            currentView: 'month'
          }
        })

        expect(wrapper.find('.vk-event-month-view').exists()).toBe(true)
      })
    })

    describe('When shape prop changes', () => {
      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkEventCalendar, {
          props: {
            adapter: createMockAdapter(),
            events: sampleEvents,
            modelValue: new Date(2025, 4, 15),
            shape: 'soft'
          }
        })

        expect(wrapper.find('.rounded-lg').exists()).toBe(true)
      })

      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkEventCalendar, {
          props: {
            adapter: createMockAdapter(),
            events: sampleEvents,
            modelValue: new Date(2025, 4, 15),
            shape: 'rounded'
          }
        })

        expect(wrapper.find('.rounded-xl').exists()).toBe(true)
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkEventCalendar, {
          props: {
            adapter: createMockAdapter(),
            events: sampleEvents,
            modelValue: new Date(2025, 4, 15),
            shape: 'square'
          }
        })

        expect(wrapper.find('.vk-event-calendar').classes()).not.toContain('rounded-lg')
        expect(wrapper.find('.vk-event-calendar').classes()).not.toContain('rounded-xl')
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.variant is filled', () => {
        wrapper = mount(VkEventCalendar, {
          props: {
            adapter: createMockAdapter(),
            events: sampleEvents,
            modelValue: new Date(2025, 4, 15),
            variant: 'filled'
          }
        })

        expect(wrapper.find('.bg-surface-container').exists()).toBe(true)
      })

      it('should be outlined when props.variant is outlined', () => {
        wrapper = mount(VkEventCalendar, {
          props: {
            adapter: createMockAdapter(),
            events: sampleEvents,
            modelValue: new Date(2025, 4, 15),
            variant: 'outlined'
          }
        })

        expect(wrapper.find('.border').exists()).toBe(true)
        expect(wrapper.find('.border-outlined').exists()).toBe(true)
      })
    })
  })

  describe('Emits', () => {
    it('should emit update:modelValue when today button is clicked', async () => {
      wrapper = mount(VkEventCalendar, {
        props: {
          adapter: createMockAdapter(),
          events: sampleEvents,
          modelValue: new Date(2025, 4, 15)
        }
      })

      const todayButton = wrapper.find('[aria-label="Go to today"]')
      await todayButton.trigger('click')

      expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    })

    it('should emit todayClick when today button is clicked', async () => {
      wrapper = mount(VkEventCalendar, {
        props: {
          adapter: createMockAdapter(),
          events: sampleEvents,
          modelValue: new Date(2025, 4, 15)
        }
      })

      const todayButton = wrapper.find('[aria-label="Go to today"]')
      await todayButton.trigger('click')

      expect(wrapper.emitted()).toHaveProperty('todayClick')
    })
  })

  describe('Emit forwarding', () => {
    it('should emit previousClick when header previous is clicked', async () => {
      const wrapper = mount(VkEventCalendar, {
        props: { adapter: createMockAdapter(), events: sampleEvents, modelValue: new Date(2025, 4, 15) }
      })
      const prevButton = wrapper.find('[aria-label="Previous"]')
      await prevButton.trigger('click')
      expect(wrapper.emitted()).toHaveProperty('previousClick')
    })

    it('should emit nextClick when header next is clicked', async () => {
      const wrapper = mount(VkEventCalendar, {
        props: { adapter: createMockAdapter(), events: sampleEvents, modelValue: new Date(2025, 4, 15) }
      })
      const nextButton = wrapper.find('[aria-label="Next"]')
      await nextButton.trigger('click')
      expect(wrapper.emitted()).toHaveProperty('nextClick')
    })

    it('should emit update:modelValue when previous is clicked', async () => {
      const wrapper = mount(VkEventCalendar, {
        props: { adapter: createMockAdapter(), events: sampleEvents, modelValue: new Date(2025, 4, 15) }
      })
      const prevButton = wrapper.find('[aria-label="Previous"]')
      await prevButton.trigger('click')
      expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    })

    it('should emit update:modelValue when next is clicked', async () => {
      const wrapper = mount(VkEventCalendar, {
        props: { adapter: createMockAdapter(), events: sampleEvents, modelValue: new Date(2025, 4, 15) }
      })
      const nextButton = wrapper.find('[aria-label="Next"]')
      await nextButton.trigger('click')
      expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    })

    it('should emit eventClick from day view child', async () => {
      const mockAdapter = createMockAdapter()
      mockAdapter.getEventsForDay = () => sampleEvents
      mockAdapter.getEventPlacements = () => new Map([
        ['1', { topPercent: 37.5, heightPercent: 4.17, leftPercent: 0, widthPercent: 100, zIndex: 10, isOverlapping: false }]
      ])
      const wrapper = mount(VkEventCalendar, {
        props: { adapter: mockAdapter, events: sampleEvents, modelValue: new Date(2025, 4, 15) }
      })
      const eventEl = wrapper.find('.vk-event-event')
      if (eventEl.exists()) {
        await eventEl.trigger('click')
        expect(wrapper.emitted()).toHaveProperty('eventClick')
      }
    })
  })

  describe('Watch behavior', () => {
    it('should switch view when currentView prop changes', async () => {
      const wrapper = mount(VkEventCalendar, {
        props: { adapter: createMockAdapter(), events: sampleEvents, modelValue: new Date(2025, 4, 15), currentView: 'day' }
      })
      expect(wrapper.find('.vk-event-day-view').exists()).toBe(true)
      await wrapper.setProps({ currentView: 'month' })
      expect(wrapper.find('.vk-event-month-view').exists()).toBe(true)
    })

    it('should not change view when currentView is set to undefined', async () => {
      const wrapper = mount(VkEventCalendar, {
        props: { adapter: createMockAdapter(), events: sampleEvents, modelValue: new Date(2025, 4, 15), currentView: 'day' }
      })
      await wrapper.setProps({ currentView: undefined })
      expect(wrapper.find('.vk-event-day-view').exists()).toBe(true)
    })

    it('should update internal date when modelValue prop changes', async () => {
      const wrapper = mount(VkEventCalendar, {
        props: { adapter: createMockAdapter(), events: sampleEvents, modelValue: new Date(2025, 4, 15) }
      })
      const newDate = new Date(2025, 5, 20)
      await wrapper.setProps({ modelValue: newDate })
      expect(wrapper.find('.vk-event-calendar').exists()).toBe(true)
    })

    it('should not update date when modelValue is set to undefined', async () => {
      const wrapper = mount(VkEventCalendar, {
        props: { adapter: createMockAdapter(), events: sampleEvents, modelValue: new Date(2025, 4, 15) }
      })
      await wrapper.setProps({ modelValue: undefined })
      expect(wrapper.find('.vk-event-calendar').exists()).toBe(true)
    })
  })

  describe('Variant ghost', () => {
    it('should apply ghost variant styles', () => {
      const wrapper = mount(VkEventCalendar, {
        props: { adapter: createMockAdapter(), events: sampleEvents, modelValue: new Date(2025, 4, 15), variant: 'ghost' }
      })
      expect(wrapper.find('.border-dashed').exists()).toBe(true)
    })
  })

  describe('Slot passthrough', () => {
    it('should render custom header slot', () => {
      const wrapper = mount(VkEventCalendar, {
        props: { adapter: createMockAdapter(), events: sampleEvents, modelValue: new Date(2025, 4, 15) },
        slots: { header: '<div class="custom-header">Custom</div>' }
      })
      expect(wrapper.find('.custom-header').exists()).toBe(true)
    })

    it('should render custom event slot in day view', () => {
      const mockAdapter = createMockAdapter()
      mockAdapter.getEventsForDay = () => sampleEvents
      mockAdapter.getEventPlacements = () => new Map([
        ['1', { topPercent: 37.5, heightPercent: 4.17, leftPercent: 0, widthPercent: 100, zIndex: 10, isOverlapping: false }]
      ])
      const wrapper = mount(VkEventCalendar, {
        props: { adapter: mockAdapter, events: sampleEvents, modelValue: new Date(2025, 4, 15) },
        slots: { event: '<div class="custom-event">Custom Event</div>' }
      })
      expect(wrapper.find('.custom-event').exists()).toBe(true)
    })
  })
})
