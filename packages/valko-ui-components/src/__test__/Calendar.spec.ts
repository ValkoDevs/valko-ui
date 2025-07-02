import { ref, computed, toValue } from 'vue'
import { VueWrapper, mount } from '@vue/test-utils'
import VkCalendar from '#valkoui/components/Calendar.vue'
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
      onSelectDay: () => 1728961200000,
      onSelectMonth: () => 1727751600000,
      onSelectYear: () => 1704078000000,
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

describe('Calendar component', () => {
  let wrapper: VueWrapper

  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkCalendar, {
          props: {
            modelValue,
            adapter
          }
        })
      })

      it('should render', () => {
        expect(wrapper.find('.vk-calendar').exists()).toBe(true)
      })

      it('should be color primary', async () => {
        const button = wrapper.findAll('.vk-calendar__grid-button')[14]
        await button.trigger('click')

        expect(button.classes()).toContain('bg-primary')
      })

      it('should be size md', () => {
        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be variant filled', async () => {
        const button = wrapper.findAll('.vk-calendar__grid-button')[14]
        await button.trigger('click')
        expect(button.classes()).toContain('bg-primary')
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.vk-calendar__grid-button').classes()).toContain('rounded-sm')
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', async () => {
        wrapper = mount(VkCalendar, {
          props: {
            color: 'primary',
            modelValue,
            adapter
          }
        })

        const button = wrapper.findAll('.vk-calendar__grid-button')[14]
        await button.trigger('click')

        expect(button.classes()).toContain('bg-primary')
      })

      it('should be color secondary when props.color is secondary', async () => {
        wrapper = mount(VkCalendar, {
          props: {
            color: 'secondary',
            modelValue,
            adapter
          }
        })

        const button = wrapper.findAll('.vk-calendar__grid-button')[14]
        await button.trigger('click')

        expect(button.classes()).toContain('bg-secondary')
      })

      it('should be color positive when props.color is positive', async () => {
        wrapper = mount(VkCalendar, {
          props: {
            color: 'positive',
            modelValue,
            adapter
          }
        })

        const button = wrapper.findAll('.vk-calendar__grid-button')[14]
        await button.trigger('click')

        expect(button.classes()).toContain('bg-positive')
      })

      it('should be color accent when props.color is accent', async () => {
        wrapper = mount(VkCalendar, {
          props: {
            color: 'accent',
            modelValue,
            adapter
          }
        })

        const button = wrapper.findAll('.vk-calendar__grid-button')[14]
        await button.trigger('click')

        expect(button.classes()).toContain('bg-accent')
      })

      it('should be color warning when props.color is warning', async () => {
        wrapper = mount(VkCalendar, {
          props: {
            color: 'warning',
            modelValue,
            adapter
          }
        })
        const button = wrapper.findAll('.vk-calendar__grid-button')[14]
        await button.trigger('click')

        expect(button.classes()).toContain('bg-warning')
      })

      it('should be color negative when props.color is negative', async () => {
        wrapper = mount(VkCalendar, {
          props: {
            color: 'negative',
            modelValue,
            adapter
          }
        })

        const button = wrapper.findAll('.vk-calendar__grid-button')[14]
        await button.trigger('click')

        expect(button.classes()).toContain('bg-negative')
      })

      it('should be color surface when props.color is surface', async () => {
        wrapper = mount(VkCalendar, {
          props: {
            color: 'surface',
            modelValue,
            adapter
          }
        })

        const button = wrapper.findAll('.vk-calendar__grid-button')[14]
        await button.trigger('click')

        expect(button.classes()).toContain('bg-surface-container-highest')
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkCalendar, {
          props: {
            shape: 'rounded',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-calendar__grid-button').classes()).toContain('rounded-full')
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkCalendar, {
          props: {
            shape: 'soft',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-calendar__grid-button').classes()).toContain('rounded-sm')
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkCalendar, {
          props: {
            shape: 'square',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-calendar__grid-button').classes()).toContain('rounded-none')
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        wrapper = mount(VkCalendar, {
          props: {
            size: 'xs',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.text-xs').exists()).toBe(true)
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkCalendar, {
          props: {
            size: 'sm',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.text-sm').exists()).toBe(true)
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkCalendar, {
          props: {
            size: 'md',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkCalendar, {
          props: {
            size: 'lg',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.text-lg').exists()).toBe(true)
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.variant is filled', () => {
        wrapper = mount(VkCalendar, {
          props: {
            variant: 'filled',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-calendar__filled').exists()).toBe(true)
      })

      it('should be outlined when props.variant is outlined', () => {
        wrapper = mount(VkCalendar, {
          props: {
            variant: 'outlined',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.border-2').exists()).toBe(true)
      })

      it('should be ghost when props.variant is ghost', () => {
        wrapper = mount(VkCalendar, {
          props: {
            variant: 'ghost',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-calendar__ghost').exists()).toBe(true)
      })
    })
  })

  describe('Available views & changing beetwen them', () => {
    describe('Available views inferred by format', () => {
      it('should only be in year view if format only contains Y', async () => {
        const wrapper = mount(VkCalendar, {
          props: {
            modelValue,
            adapter,
            format: 'YYYY'
          }

        })

        const periodButton = wrapper.find('.vk-calendar__period-button')
        const gridButton = wrapper.findAll('.vk-calendar__grid-button')[0]
        await gridButton.trigger('click')

        expect(periodButton.text()).toBe('2010 - 2029')
      })
    })

    describe('Cycling between views', () => {
      it('should only cycle between month & year view if format not contains D', async () => {
        const wrapper = mount(VkCalendar, {
          props: {
            modelValue,
            adapter,
            format: 'YYYY-MM'
          }

        })

        const periodButton = wrapper.find('.vk-calendar__period-button')
        const gridButton = wrapper.findAll('.vk-calendar__grid-button')[0]
        await gridButton.trigger('click')

        expect(periodButton.text()).toBe('2024')
      })

      it('should switch to month view when period button is clicked in day view', async () => {
        const wrapper = mount(VkCalendar, {
          props: {
            modelValue,
            adapter
          }
        })

        const periodButton = wrapper.find('.vk-calendar__period-button')
        await periodButton.trigger('click')

        const gridButtons = wrapper.findAll('.vk-calendar__grid-button')[0]
        expect(gridButtons.text()).toBe('Jan')

      })
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

      const button = wrapper.findAll('.vk-calendar__grid-button')[14]
      await button.trigger('click')

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

        const button = wrapper.findAll('.vk-calendar__grid-button')[15]
        await button.trigger('click')

        expect(wrapper.emitted('update:modelValue')![0]).toEqual([1704078000000])
      })

      it('should emit only the month if props format only contains M', async () => {
        const wrapper = mount(VkCalendar, {
          props: {
            modelValue,
            adapter,
            format: 'MM'
          }
        })

        const button = wrapper.findAll('.vk-calendar__grid-button')[9]
        await button.trigger('click')

        expect(wrapper.emitted('update:modelValue')![0]).toEqual([1727751600000])
      })

      it('should emit only the day if props format only contains M', async () => {
        const wrapper = mount(VkCalendar, {
          props: {
            modelValue,
            adapter,
            format: 'DD'
          }
        })

        const button = wrapper.findAll('.vk-calendar__grid-button')[15]
        await button.trigger('click')

        expect(wrapper.emitted('update:modelValue')![0]).toEqual([1728961200000])
      })
    })
  })
})
