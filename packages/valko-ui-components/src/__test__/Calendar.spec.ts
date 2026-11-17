import { mount, VueWrapper } from '@vue/test-utils'
import { CalendarDate } from '@internationalized/date'
import VkCalendar from '#valkoui/components/Calendar.vue'
import useDateAdapter from '#valkoui/composables/useDateAdapter'
import type { CalendarAdapter, CalendarProps } from '#valkoui/types/Calendar'

let adapter: CalendarAdapter
const modelValue = new CalendarDate(2024, 10, 15)

beforeEach(() => {
  const [ model, , adapterResult ] = useDateAdapter({ format: 'YYYY-MM-DD' })
  model.value = modelValue
  adapter = adapterResult
})

const dayButton = (wrapper: VueWrapper, day: string) =>
  wrapper.findAll('.vk-calendar__grid-button').find(button => button.text() === day)

describe('Calendar component', () => {
  describe('Props', () => {
    describe('With default props', () => {
      it('should render', () => {
        const wrapper = mount(VkCalendar, {
          props: {
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-calendar').exists()).toBe(true)
      })

      it('should be color primary', () => {
        const wrapper = mount(VkCalendar, {
          props: {
            modelValue,
            adapter
          }
        })

        expect(dayButton(wrapper, '15')!.classes()).toContain('bg-primary')
      })

      it('should be size md', () => {
        const wrapper = mount(VkCalendar, {
          props: {
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be variant filled', () => {
        const wrapper = mount(VkCalendar, {
          props: {
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-calendar__filled').exists()).toBe(true)
      })

      it('should be shape soft', () => {
        const wrapper = mount(VkCalendar, {
          props: {
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-calendar__grid-button').classes()).toContain('rounded-sm')
      })
    })

    describe('When color prop changes', () => {
      it.each([
        ['primary', 'bg-primary'],
        ['secondary', 'bg-secondary'],
        ['positive', 'bg-positive'],
        ['accent', 'bg-accent'],
        ['warning', 'bg-warning'],
        ['negative', 'bg-negative']
      ])('should be color %s when props.color is %s', async (color, colorClass) => {
        const wrapper = mount(VkCalendar, {
          props: {
            color: color as CalendarProps['color'],
            modelValue,
            adapter
          }
        })

        expect(dayButton(wrapper, '15')!.classes()).toContain(colorClass)
      })

      it('should be color surface when props.color is surface and no day is selected', () => {
        const wrapper = mount(VkCalendar, {
          props: {
            color: 'surface',
            modelValue,
            adapter
          }
        })

        expect(dayButton(wrapper, '15')!.classes()).toContain('bg-surface-container-highest')
      })
    })

    describe('When shape prop changes', () => {
      it.each([
        ['rounded', 'rounded-full'],
        ['soft', 'rounded-sm'],
        ['square', 'rounded-none']
      ])('should be %s when props.shape is %s', (shape, shapeClass) => {
        const wrapper = mount(VkCalendar, {
          props: {
            shape: shape as CalendarProps['shape'],
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-calendar__grid-button').classes()).toContain(shapeClass)
      })
    })

    describe('When size prop changes', () => {
      it.each([
        ['xs', 'text-xs'],
        ['sm', 'text-sm'],
        ['md', 'text-base'],
        ['lg', 'text-lg']
      ])('should be %s when props.size is %s', (size, sizeClass) => {
        const wrapper = mount(VkCalendar, {
          props: {
            size: size as CalendarProps['size'],
            modelValue,
            adapter
          }
        })

        expect(wrapper.find(`.${sizeClass}`).exists()).toBe(true)
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.variant is filled', () => {
        const wrapper = mount(VkCalendar, {
          props: {
            variant: 'filled',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-calendar__filled').exists()).toBe(true)
      })

      it('should be outlined when props.variant is outlined', () => {
        const wrapper = mount(VkCalendar, {
          props: {
            variant: 'outlined',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.border-2').exists()).toBe(true)
      })

      it('should be ghost when props.variant is ghost', () => {
        const wrapper = mount(VkCalendar, {
          props: {
            variant: 'ghost',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-calendar__ghost').exists()).toBe(true)
      })
    })

    describe('When format prop changes', () => {
      it.each([
        ['YYYY', 'vk-calendar-year-view-stub'],
        ['MM', 'vk-calendar-month-view-stub'],
        ['DD', 'vk-calendar-day-view-stub']
      ])('should render the correct view when format prop is %s', (format, stub) => {
        const wrapper = mount(VkCalendar, {
          props: {
            modelValue,
            adapter,
            format
          },
          global: {
            stubs: {
              VkCalendarDayView: true,
              VkCalendarMonthView: true,
              VkCalendarYearView: true
            }
          }
        })

        expect(wrapper.find(stub).exists()).toBe(true)
      })
    })
  })

  describe('Adapter & Methods', () => {
    describe('Watcher: format prop', () => {
      it('should update view when format prop changes', async () => {
        const wrapper = mount(VkCalendar, {
          props: {
            modelValue,
            adapter,
            format: 'YYYY-MM-DD'
          }
        })

        await wrapper.setProps({ format: 'YYYY' })

        expect(wrapper.find('.vk-calendar__view-container').attributes()).toHaveProperty('data-current-view', 'years')
      })
    })

    describe('onSelectYear', () => {
      it('should directly emit the value if the format is year-only', async () => {
        const wrapper = mount(VkCalendar, {
          props: {
            modelValue,
            adapter,
            format: 'YYYY'
          }
        })

        await wrapper.findAll('.vk-calendar__grid-button').at(0)?.trigger('click')

        expect(wrapper.find('.vk-calendar__period-button').text()).toBe('2010 - 2029')
      })

      it('should show month view after selecting a year if selectionType is not year-only', async () => {
        const wrapper = mount(VkCalendar, {
          props: {
            modelValue,
            adapter,
            format: 'YYYY-MM'
          }
        })

        await wrapper.find('.vk-calendar__period-button').trigger('click')
        await wrapper.findAll('.vk-calendar__grid-button').at(0)?.trigger('click')

        expect(wrapper.find('.vk-calendar__view-container').attributes()).toHaveProperty('data-current-view', 'months')
      })
    })

    describe('onSelectMonth', () => {
      it('should only cycle between month & year view if format not contains D', async () => {
        const wrapper = mount(VkCalendar, {
          props: {
            modelValue,
            adapter,
            format: 'YYYY-MM'
          }
        })

        await wrapper.findAll('.vk-calendar__grid-button').at(0)?.trigger('click')

        expect(wrapper.find('.vk-calendar__period-button').text()).toBe('2024')
      })

      it('should show day view after selecting a month if selectionType is not month-only or month-year', async () => {
        const wrapper = mount(VkCalendar, {
          props: {
            modelValue,
            adapter,
            format: 'YYYY-MM-DD'
          }
        })

        await wrapper.find('.vk-calendar__period-button').trigger('click')
        await wrapper.findAll('.vk-calendar__grid-button').at(0)?.trigger('click')

        expect(wrapper.find('.vk-calendar__view-container').attributes()).toHaveProperty('data-current-view', 'days')
      })
    })

    describe('View logic', () => {
      it('should switch to month view when period button is clicked in day view', async () => {
        const wrapper = mount(VkCalendar, {
          props: {
            modelValue,
            adapter
          }
        })

        await wrapper.find('.vk-calendar__period-button').trigger('click')

        expect(wrapper.find('.vk-calendar__view-container').attributes()).toHaveProperty('data-current-view', 'months')
      })

      it('should render the day view if format does not include D, M, or Y', () => {
        const wrapper = mount(VkCalendar, {
          props: {
            modelValue,
            adapter,
            format: ''
          }
        })

        expect(wrapper.find('.vk-calendar__view-container').attributes()).toHaveProperty('data-current-view', 'days')
      })

      it('should return day-month if format contains D and M but not Y', async () => {
        const wrapper = mount(VkCalendar, {
          props: {
            modelValue,
            adapter,
            format: 'DD-MM'
          }
        })

        await wrapper.find('.vk-calendar__period-button').trigger('click')

        expect(wrapper.find('.vk-calendar').attributes()).toHaveProperty('data-selection-type', 'day-month')
      })
    })

    describe('onChangeMonth', () => {
      it('should go to the previous month when clicking the left arrow', async () => {
        const wrapper = mount(VkCalendar, {
          props: {
            modelValue,
            adapter,
            format: 'YYYY-MM-DD'
          }
        })

        await wrapper.findAll('.vk-calendar__arrows').at(0)?.trigger('click')

        expect(wrapper.find('.vk-calendar__period-button').text()).toBe('Sep - 2024')
      })

      it('should go to the next month and year when clicking the right arrow in December', async () => {
        const wrapper = mount(VkCalendar, {
          props: {
            modelValue,
            adapter,
            format: 'YYYY-MM-DD'
          }
        })

        await wrapper.setProps({ modelValue: new CalendarDate(2024, 12, 15) })
        await wrapper.findAll('.vk-calendar__arrows').at(1)?.trigger('click')

        expect(wrapper.find('.vk-calendar__period-button').text()).toBe('Jan - 2025')
      })

      it('should go to the next month when clicking the right arrow', async () => {
        const wrapper = mount(VkCalendar, {
          props: {
            modelValue,
            adapter,
            format: 'YYYY-MM-DD'
          }
        })

        await wrapper.findAll('.vk-calendar__arrows').at(1)?.trigger('click')

        expect(wrapper.find('.vk-calendar__period-button').text()).toBe('Nov - 2024')
      })
    })
  })

  describe('Disabled dates & min/max', () => {
    it('should disable days outside the min/max range', () => {
      const wrapper = mount(VkCalendar, {
        props: {
          modelValue,
          adapter,
          minDate: new CalendarDate(2024, 10, 10),
          maxDate: new CalendarDate(2024, 10, 20)
        }
      })

      expect(dayButton(wrapper, '5')!.attributes('data-disabled')).toBeDefined()
      expect(dayButton(wrapper, '25')!.attributes('data-disabled')).toBeDefined()
      expect(dayButton(wrapper, '15')!.attributes('data-disabled')).toBeUndefined()
    })

    it('should disable days included in disabledDates', () => {
      const [ model, , disabledAdapter ] = useDateAdapter({
        format: 'YYYY-MM-DD',
        disabledDates: [new CalendarDate(2024, 10, 17)]
      })
      model.value = modelValue

      const wrapper = mount(VkCalendar, {
        props: {
          modelValue,
          adapter: disabledAdapter
        }
      })

      expect(dayButton(wrapper, '17')!.attributes('data-disabled')).toBeDefined()
      expect(dayButton(wrapper, '18')!.attributes('data-disabled')).toBeUndefined()
    })
  })

  describe('Emits', () => {
    it('should emit update:modelValue event', async () => {
      const wrapper = mount(VkCalendar, {
        props: {
          modelValue,
          adapter
        }
      })

      await dayButton(wrapper, '20')!.trigger('click')

      expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    })

    describe('Emit update depending on format prop', () => {
      it('should emit only the year if props format only contains Y', async () => {
        const wrapper = mount(VkCalendar, {
          props: {
            modelValue,
            adapter,
            format: 'YYYY'
          }
        })

        await wrapper.findAll('.vk-calendar__grid-button').at(0)?.trigger('click')

        expect(wrapper.emitted('update:modelValue')![0]).toEqual([new CalendarDate(2010, 1, 1)])
      })

      it('should emit only the month if props format only contains M', async () => {
        const wrapper = mount(VkCalendar, {
          props: {
            modelValue,
            adapter,
            format: 'MM'
          }
        })

        await wrapper.findAll('.vk-calendar__grid-button').at(0)?.trigger('click')

        expect(wrapper.emitted('update:modelValue')![0]).toEqual([new CalendarDate(2024, 1, 1)])
      })

      it('should emit only the day if props format only contains D', async () => {
        const wrapper = mount(VkCalendar, {
          props: {
            modelValue,
            adapter,
            format: 'DD'
          }
        })

        await dayButton(wrapper, '20')!.trigger('click')

        expect(wrapper.emitted('update:modelValue')![0]).toEqual([new CalendarDate(2024, 10, 20)])
      })
    })
  })
})
