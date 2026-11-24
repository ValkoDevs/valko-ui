import VkCalendarMonthView from '#valkoui/components/CalendarMonthView.vue'
import { VueWrapper, mount } from '@vue/test-utils'
import { CalendarDate } from '@internationalized/date'
import useDateAdapter from '#valkoui/composables/useDateAdapter'
import type { CalendarAdapter } from '#valkoui/types/Calendar'

let adapter: CalendarAdapter
const modelValue = new CalendarDate(2024, 10, 15)

beforeEach(() => {
  const [ model, , adapterResult ] = useDateAdapter({ format: 'DD-MM-YYYY' })
  model.value = modelValue
  adapter = adapterResult
})

const baseProps = () => ({
  modelValue,
  adapter,
  format: 'DD-MM-YYYY',
  selected: adapter.formattedDates.value.selected,
  display: adapter.formattedDates.value.display,
  monthNames: adapter.getMonths()
})

describe('CalendarMonthView Component', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(VkCalendarMonthView, {
      props: {
        ...baseProps()
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
            obj: new CalendarDate(2024, 5, 1)
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
            obj: new CalendarDate(2024, 8, 1)
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
