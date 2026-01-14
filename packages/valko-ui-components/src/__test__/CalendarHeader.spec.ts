import VkCalendarHeader from '#valkoui/components/CalendarHeader.vue'
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
  format: 'DD-MM-YYYY'
}

describe('CalendarHeader Component', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(VkCalendarHeader, {
      props: {
        ...baseProps
      }
    })
  })

  describe('Rendering', () => {
    it('should render properly', () => {
      expect(wrapper.exists()).toBe(true)
    })

    it('should display the given loaded period', async () => {
      await wrapper.setProps({ loadedPeriod: '10-2024' })

      expect(wrapper.find('.vk-calendar__period-button').text()).toBe('10-2024')
    })

    it('should disable left arrow when disabledLeft is true', async () => {
      await wrapper.setProps({ disabledLeft: true })

      expect(wrapper.findAll('.vk-calendar__arrows').at(0)?.attributes('aria-disabled')).toBe('true')
    })

    it('should disable right arrow when disabledRight is true', async () => {
      await wrapper.setProps({ disabledRight: true })

      expect(wrapper.findAll('.vk-calendar__arrows').at(1)?.attributes('aria-disabled')).toBe('true')
    })
  })

  describe('Emits', () => {
    it('should emit previousClick when left arrow is clicked', async () => {
      await wrapper.findAll('.vk-calendar__arrows').at(0)?.trigger('click')

      expect(wrapper.emitted('previousClick')).toBeTruthy()
    })

    it('should emit nextClick when right arrow is clicked', async () => {
      await wrapper.findAll('.vk-calendar__arrows').at(1)?.trigger('click')

      expect(wrapper.emitted('nextClick')).toBeTruthy()
    })

    it('should emit viewChange when period label is clicked', async () => {
      await wrapper.find('.vk-calendar__period-button').trigger('click')

      expect(wrapper.emitted()).toHaveProperty('viewChange')
    })
  })
})
