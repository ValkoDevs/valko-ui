import VkCalendarMonthView from '#valkoui/components/CalendarMonthView.vue'
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
      getMonths: () => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
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
  format: 'DD-MM-YYYY',
  selected: adapter.formattedDates.value.selected,
  display: adapter.formattedDates.value.display,
  monthNames: adapter.getMonths()
}

describe('CalendarMonthView Component', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(VkCalendarMonthView, {
      props: {
        ...baseProps
      }
    })
  })

  describe('Rendering', () => {
    it('should render the component', () => {
      expect(wrapper.exists()).toBe(true)
    })

    it('should render month buttons', () => {
      const monthButtons = wrapper.findAll('.vk-calendar__grid-button')
      expect(monthButtons.length).toBe(12)
    })

    describe('disabled months', () => {
      it('should disable months before min month', async () => {
        await wrapper.setProps({
          min: {
            day: 1,
            month: 4,
            year: 2024,
            lastDayOfMonth: 30,
            firstWeekDay: 1,
            obj: new Date(2024, 4, 1)
          }
        })

        const monthButtons = wrapper.findAll('.vk-calendar__grid-button')
        monthButtons.slice(0, 4).forEach((button) => {
          expect(button.attributes('aria-disabled') === 'true').toBe(true)
        })
      })

      it('should disable months after max month', async () => {
        await wrapper.setProps({
          max: {
            day: 1,
            month: 7,
            year: 2024,
            lastDayOfMonth: 31,
            firstWeekDay: 1,
            obj: new Date(2024, 7, 1)
          }
        })

        const monthButtons = wrapper.findAll('.vk-calendar__grid-button')
        monthButtons.slice(8).forEach((button) => {
          expect(button.attributes('aria-disabled') === 'true').toBe(true)
        })
      })
    })
  })

  describe('Emits', () => {
    it('should emit selectMonth with correct value when a month is clicked', async () => {
      await wrapper.findAll('.vk-calendar__grid-button').at(4)?.trigger('click')

      expect(wrapper.emitted('selectMonth')?.at(0)).toEqual([4])
    })

    it('should emit viewChange when period button is clicked', async () => {
      await wrapper.find('.vk-calendar__period-button').trigger('click')

      expect(wrapper.emitted('viewChange')?.at(0)).toEqual(['years'])
    })

    it('should emit changeYear when previous arrow is clicked', async () => {
      await wrapper.findAll('.vk-calendar__arrows').at(0)?.trigger('click')

      expect(wrapper.emitted('changeYear')?.at(0)).toEqual([2023])
    })

    it('should emit changeYear when next arrow is clicked', async () => {
      await wrapper.findAll('.vk-calendar__arrows').at(1)?.trigger('click')

      expect(wrapper.emitted('changeYear')?.at(0)).toEqual([2025])
    })
  })
})
