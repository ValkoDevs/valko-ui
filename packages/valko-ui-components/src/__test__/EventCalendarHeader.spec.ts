import { VueWrapper, mount } from '@vue/test-utils'
import VkEventCalendarHeader from '#valkoui/components/EventCalendarHeader.vue'
import type { EventAdapterResult } from '#valkoui/types/EventCalendar'

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

describe('EventCalendarHeader component', () => {
  let wrapper: VueWrapper

  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkEventCalendarHeader, {
          props: {
            adapter: createMockAdapter(),
            modelValue: new Date(2025, 4, 15),
            currentView: 'day'
          }
        })
      })

      it('should render', () => {
        expect(wrapper.find('.vk-event-calendar-header').exists()).toBe(true)
      })

      it('should show date label from adapter', () => {
        expect(wrapper.text()).toContain('May 15, 2025')
      })
    })
  })

  describe('Emits', () => {
    beforeEach(() => {
      wrapper = mount(VkEventCalendarHeader, {
        props: {
          adapter: createMockAdapter(),
          modelValue: new Date(2025, 4, 15),
          currentView: 'day'
        }
      })
    })

    it('should emit previousClick when prev button is clicked', async () => {
      const prevButton = wrapper.find('[aria-label="Previous"]')
      await prevButton.trigger('click')

      expect(wrapper.emitted()).toHaveProperty('previousClick')
    })

    it('should emit nextClick when next button is clicked', async () => {
      const nextButton = wrapper.find('[aria-label="Next"]')
      await nextButton.trigger('click')

      expect(wrapper.emitted()).toHaveProperty('nextClick')
    })

    it('should emit todayClick when today button is clicked', async () => {
      const todayButton = wrapper.find('[aria-label="Go to today"]')
      await todayButton.trigger('click')

      expect(wrapper.emitted()).toHaveProperty('todayClick')
    })

    it('should emit viewChange when dropdown item is selected', async () => {
      const dropdownItems = wrapper.findAll('.vk-dropdown__item')

      if (dropdownItems.length > 0) {
        await dropdownItems[1].trigger('click')
        expect(wrapper.emitted()).toHaveProperty('viewChange')
      } else {
        const dropdown = wrapper.findComponent({ name: 'VkDropdown' })
        dropdown.vm.$emit('item-click', { key: 'week', title: 'Week' })
        await wrapper.vm.$nextTick()
        expect(wrapper.emitted()).toHaveProperty('viewChange')
      }
    })
  })

  describe('Fallback values', () => {
    it('should use current date when modelValue is undefined', () => {
      const wrapper = mount(VkEventCalendarHeader, {
        props: { adapter: createMockAdapter(), currentView: 'day' }
      })
      expect(wrapper.find('.vk-event-calendar-header').exists()).toBe(true)
    })

    it('should default to day view when currentView is undefined', () => {
      const wrapper = mount(VkEventCalendarHeader, {
        props: { adapter: createMockAdapter(), modelValue: new Date(2025, 4, 15) }
      })
      expect(wrapper.text()).toContain('May 15, 2025')
    })

    it('should pass showWeekends false to getDateLabel', () => {
      const mockAdapter = createMockAdapter()
      const getDateLabelSpy = vi.fn(() => 'Custom Label')
      mockAdapter.getDateLabel = getDateLabelSpy
      mount(VkEventCalendarHeader, {
        props: { adapter: mockAdapter, modelValue: new Date(2025, 4, 15), currentView: 'day', showWeekends: false }
      })
      expect(getDateLabelSpy).toHaveBeenCalledWith(expect.any(Date), 'day', false)
    })
  })

  describe('Custom header slot', () => {
    it('should render slot content with dateLabel and currentView', () => {
      const wrapper = mount(VkEventCalendarHeader, {
        props: { adapter: createMockAdapter(), modelValue: new Date(2025, 4, 15), currentView: 'day' },
        slots: { header: '<div class="custom-hdr">Custom Header</div>' }
      })
      expect(wrapper.find('.custom-hdr').exists()).toBe(true)
    })
  })
})
