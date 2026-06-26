import VkCalendarDayView from '#valkoui/components/CalendarDayView.vue'
import { ref, computed, toValue } from 'vue'
import { VueWrapper, mount } from '@vue/test-utils'
import type { AdapterResult } from '#valkoui/types/Calendar'

const { useDateAdapter } = vi.hoisted(() => ({
  useDateAdapter: vi.fn(() => ([
    ref(1729017518),
    computed(() => '2024-10-15'),
    {
      formattedDates: computed(() => ({
        selected: {
          day: 15,
          month: 9,
          year: 2024,
          lastDayOfMonth: 31,
          firstWeekDay: 2,
          obj: new Date(2024, 10, 15)
        },
        display: {
          day: 15,
          month: 9,
          year: 2024,
          lastDayOfMonth: 31,
          firstWeekDay: 2,
          obj: new Date(2024, 10, 15)
        }
      })),
      disabledDates: computed(() => [
        1705320000000,
        1710936000000,
        1717545600000,
        1723420800000,
        1736953200000,
        1900249200000,
        2215004400000
      ]),
      onSelectDay: vi.fn(() => 1728961200000),
      onSelectMonth: vi.fn(() => 1727751600000),
      onSelectYear: vi.fn(() => 1704078000000),
      getWeekdays: () => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      getMonths: () => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    }
  ] as AdapterResult))
}))

vi.mock('#valkoui/composables/useDateAdapter.ts', () => ({
  default: useDateAdapter
}))

const [ model, , adapter ] = useDateAdapter()
const modelValue = toValue(model)

const baseProps = {
  modelValue,
  adapter,
  selectionType: 'day',
  format: 'DD-MM-YYYY',
  daysInMonth: adapter.formattedDates.value.display.lastDayOfMonth,
  startsOn: adapter.formattedDates.value.display.firstWeekDay,
  selected: adapter.formattedDates.value.selected,
  display: adapter.formattedDates.value.display,
  weekDays: adapter.getWeekdays(),
  monthNames: adapter.getMonths()
}

describe('CalendarDayView Component', () => {
  describe('Rendering', () => {
    let wrapper: VueWrapper

    beforeEach(() => {
      wrapper = mount(VkCalendarDayView, {
        props: {
          ...baseProps
        }
      })
    })

    it('should render the component', () => {
      expect(wrapper.exists()).toBe(true)
    })
  })

  describe('Methods and computeds', () => {
    let wrapper: VueWrapper

    beforeEach(() => {
      wrapper = mount(VkCalendarDayView, {
        props: {
          ...baseProps
        }
      })
    })

    describe('gridCells', () => {
      it.each([28, 29, 30, 31])('renders %i day cells for a month with %i days', (days) => {
        const wrapper = mount(VkCalendarDayView, {
          props: {
            ...baseProps,
            daysInMonth: days,
            startsOn: 0
          }
        })

        const dayButtons = wrapper.findAll('.vk-calendar__grid-button').filter(btn => !isNaN(Number(btn.text())))

        expect(dayButtons.length).toBe(days)
      })
    })

    describe('isSelected', () => {
      it('should grid button render with correct variant if selected', () => {
        const selectedDayButton = wrapper.findAll('.vk-calendar__grid-button').find(btn => btn.text() === '15')
        const isSelected = selectedDayButton?.classes().includes('bg-primary')

        expect(isSelected).toBe(true)
      })

      it('should grid button render with correct variant if not selected', () => {
        const selectedDayButton = wrapper.findAll('.vk-calendar__grid-button').find(btn => btn.text() === '10')
        const isSelected = selectedDayButton?.classes().includes('bg-primary')

        expect(isSelected).toBe(false)
      })

      it('should grid button render with correct variant if not selected', () => {
        const unselectedDayButton = wrapper.findAll('.vk-calendar__grid-button').find(btn => btn.text() === '10')
        const isSelected = unselectedDayButton?.classes().includes('text-on-surface')

        expect(isSelected).toBe(true)
      })
    })

    describe('isArrowDisabled', () => {
      it('should disable previous month arrow if min date is reached', () => {
        const wrapper = mount(VkCalendarDayView, {
          props: {
            ...baseProps,
            min: {
              day: 1,
              month: 9,
              year: 2024,
              lastDayOfMonth: 31,
              firstWeekDay: 2,
              obj: new Date(2024, 10, 1)
            }
          }
        })

        const isDisabled = wrapper.findAll('.vk-calendar__arrows').at(0)?.attributes('aria-disabled') === 'true'

        expect(isDisabled).toBe(true)
      })

      it('should disable next month arrow if max date is reached', () => {
        const wrapper = mount(VkCalendarDayView, {
          props: {
            ...baseProps,
            max: {
              day: 30,
              month: 9,
              year: 2024,
              lastDayOfMonth: 31,
              firstWeekDay: 2,
              obj: new Date(2024, 10, 30)
            }
          }
        })

        const isDisabled = wrapper.findAll('.vk-calendar__arrows').at(1)?.attributes('aria-disabled') === 'true'

        expect(isDisabled).toBe(true)
      })
    })

    describe('isWeekend and disable weekends', () => {
      it('should disable weekend days if disableWeekends is true', () => {
        const wrapper = mount(VkCalendarDayView, {
          props: {
            ...baseProps,
            disableWeekends: true
          }
        })

        const weekendDayButtons = wrapper.findAll('.vk-calendar__grid-button').filter(btn => {
          const day = Number(btn.text())
          const date = new Date(2024, 9, day)
          const dayOfWeek = date.getDay()
          return dayOfWeek === 0 || dayOfWeek === 6
        })

        weekendDayButtons.forEach(btn => {
          expect(btn.attributes('aria-disabled')).toBe('true')
        })
      })
    })

    describe('onArrowClick', () => {
      it('should emit changeMonth with correct value when previous arrow is clicked', async () => {
        await wrapper.findAll('.vk-calendar__arrows').at(0)?.trigger('click')

        expect(wrapper.emitted('changeMonth')?.at(0)).toEqual([8])
      })

      it('should emit changeMonth with correct value when next arrow is clicked', async () => {
        await wrapper.findAll('.vk-calendar__arrows').at(1)?.trigger('click')

        expect(wrapper.emitted('changeMonth')?.at(0)).toEqual([10])
      })
    })
  })

  describe('Emits', () => {
    let wrapper: VueWrapper

    beforeEach(() => {
      wrapper = mount(VkCalendarDayView, {
        props: {
          ...baseProps
        }
      })
    })

    it('should emit selectDay when a day is selected', async () => {
      await wrapper.findAll('.vk-calendar__grid-button').at(14)?.trigger('click')

      expect(wrapper.emitted()).toHaveProperty('selectDay')
    })

    it('should emit viewChange when period button is clicked', async () => {
      await wrapper.find('.vk-calendar__period-button').trigger('click')

      expect(wrapper.emitted()).toHaveProperty('viewChange')
    })
  })
})
