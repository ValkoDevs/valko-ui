import VkCalendarYearView from '#valkoui/components/CalendarYearView.vue'
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
  startsOn: adapter.formattedDates.value.display.year,
  selected: adapter.formattedDates.value.selected
})

describe('CalendarYearView Component', () => {
  let wrapper: VueWrapper

  beforeEach(() => {
    wrapper = mount(VkCalendarYearView, {
      props: {
        ...baseProps()
      }
    })
  })

  describe('Rendering', () => {
    it('should render the component', () => {
      expect(wrapper.exists()).toBe(true)
    })

    describe('Years Grid', () => {
      it('should render 20 year buttons', () => {
        const yearButtons = wrapper.findAll('.vk-calendar__grid-button')

        expect(yearButtons.length).toBe(20)
      })
    })

    describe('disabled years', () => {
      it('should disable years before min year', async () => {
        await wrapper.setProps({
          minYear: 2015
        })

        const yearButtons = wrapper.findAll('.vk-calendar__grid-button')

        yearButtons.slice(0, 5).forEach((button) => {
          expect(button.attributes('aria-disabled')).toBe('true')
        })

        yearButtons.slice(5).forEach((button) => {
          expect(button.attributes('aria-disabled')).toBe('false')
        })
      })

      it('should disable years after max year', async () => {
        await wrapper.setProps({
          maxYear: 2025
        })

        const yearButtons = wrapper.findAll('.vk-calendar__grid-button')

        yearButtons.slice(0, 16).forEach((button) => {
          expect(button.attributes('aria-disabled')).toBe('false')
        })

        yearButtons.slice(16).forEach((button) => {
          expect(button.attributes('aria-disabled')).toBe('true')
        })
      })
    })

    describe('yearList', () => {
      it('should generate a list of years centered around the display year', () => {
        const yearButtons = wrapper.findAll('.vk-calendar__grid-button')
        const expectedYears = [
          '2010', '2011', '2012', '2013', '2014',
          '2015', '2016', '2017', '2018', '2019',
          '2020', '2021', '2022', '2023', '2024',
          '2025', '2026', '2027', '2028', '2029'
        ]

        yearButtons.forEach((button, index) => {
          expect(button.text()).toBe(expectedYears[index])
        })
      })
    })
  })

  describe('Functionality', () => {
    describe('Arrow Buttons', () => {
      it('should correctly jump back 20 years when previous arrow is clicked', async () => {
        await wrapper.findAll('.vk-calendar__arrows').at(0)?.trigger('click')

        expect(wrapper.find('.vk-calendar__period-button').text()).toBe('1990 - 2009')
      })

      it('should correctly jump forward 20 years when next arrow is clicked', async () => {
        await wrapper.findAll('.vk-calendar__arrows').at(1)?.trigger('click')

        expect(wrapper.find('.vk-calendar__period-button').text()).toBe('2030 - 2049')
      })
    })
  })

  describe('Emits', () => {
    it('should emit selectYear when a year is clicked', async () => {
      await wrapper.findAll('.vk-calendar__grid-button').at(0)?.trigger('click')

      expect(wrapper.emitted('selectYear')?.at(0)).toEqual([2010])
    })
  })
})
