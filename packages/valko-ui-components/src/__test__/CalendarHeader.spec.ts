import VkCalendarHeader from '#valkoui/components/CalendarHeader.vue'
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
  format: 'DD-MM-YYYY'
})

describe('CalendarHeader Component', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(VkCalendarHeader, {
      props: {
        ...baseProps()
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
