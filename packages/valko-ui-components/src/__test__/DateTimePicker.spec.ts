import { ref, computed, toValue, nextTick } from 'vue'
import { VueWrapper, mount } from '@vue/test-utils'
import VkDateTimePicker from '#valkoui/components/DateTimePicker.vue'
import type { DateTimeAdapterResult } from '#valkoui/composables/useDateTimeAdapter'

const { useDateTimeAdapter } = vi.hoisted(() => ({
  useDateTimeAdapter: vi.fn(() => ([
    ref(1729017518),
    computed(() => '2024-10-15 10:10'),
    {
      formattedDates: computed(() => ({
        selected: {
          day: 15,
          month: 9,
          year: 2024,
          lastDayOfMonth: 31,
          firstWeekDay: 2,
          obj: new Date(2024, 9, 15)
        },
        display: {
          day: 15,
          month: 9,
          year: 2024,
          lastDayOfMonth: 31,
          firstWeekDay: 2,
          obj: new Date(2024, 9, 15)
        }
      })),
      disabledDates: computed(() => []),
      onSelectDay: () => 1728961200000,
      onSelectMonth: () => 1727751600000,
      onSelectYear: () => 1704078000000,
      getWeekdays: () => ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
      getMonths: () => ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
    },
    {
      formattedTime: computed(() => ({
        selected: {
          hours: 10,
          minutes: 10,
          seconds: 0,
          obj: new Date(1729017518)
        },
        display: {
          hours: 10,
          minutes: 10,
          seconds: 0,
          obj: new Date(1729017518)
        }
      })),
      setDisplayUnit: vi.fn(),
      onSelectAMPM: vi.fn(),
      onSelectTime: vi.fn(),
      isTimeDisabled: vi.fn(),
      period: ref('AM')
    },
    {
      commitSelection: vi.fn(() => 1729017518),
      resetSelection: vi.fn()
    }
  ] as DateTimeAdapterResult))
}))

vi.mock('#valkoui/composables/useDateTimeAdapter.ts', () => ({
  default: useDateTimeAdapter
}))

const [model, parsedModelValue, calendarAdapter, timeAdapter, controls] = useDateTimeAdapter()
const modelValue = toValue(model)
const parsedModel = toValue(parsedModelValue)

describe('DateTimePicker component', () => {
  let wrapper: VueWrapper

  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkDateTimePicker, {
          props: {
            isOpen: true,
            modelValue,
            parsedModel,
            calendarAdapter,
            timeAdapter,
            controls
          }
        })
      })

      it('should render', () => {
        expect(wrapper.find('.vk-datetimepicker').exists()).toBe(true)
      })

      it('should be color primary', () => {
        const input = wrapper.find('.vk-input__input')
        expect(input.classes()).toContain('focus:border-primary')
      })

      it('should be size md', () => {
        const input = wrapper.find('.vk-input__input')
        expect(input.classes()).toContain('text-base')
      })

      it('should be variant filled', () => {
        const input = wrapper.find('.vk-input__input')
        expect(input.classes()).toContain('bg-surface-container-highest')
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.vk-datetimepicker__content').classes()).toContain('rounded-lg')
      })

      it('should show the date section by default', () => {
        expect(wrapper.find('.vk-datetimepicker__date-section').exists()).toBe(true)
        expect(wrapper.find('.vk-datetimepicker__time-section').exists()).toBe(false)
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', () => {
        wrapper = mount(VkDateTimePicker, {
          props: {
            isOpen: true,
            color: 'primary',
            parsedModel,
            modelValue,
            calendarAdapter,
            timeAdapter,
            controls
          }
        })
        const input = wrapper.find('.vk-input__input')
        expect(input.classes()).toContain('focus:border-primary')
      })

      it('should be color secondary when props.color is secondary', () => {
        wrapper = mount(VkDateTimePicker, {
          props: {
            isOpen: true,
            color: 'secondary',
            parsedModel,
            modelValue,
            calendarAdapter,
            timeAdapter,
            controls
          }
        })
        const input = wrapper.find('.vk-input__input')
        expect(input.classes()).toContain('focus:border-secondary')
      })

      it('should be color positive when props.color is positive', () => {
        wrapper = mount(VkDateTimePicker, {
          props: {
            isOpen: true,
            color: 'positive',
            parsedModel,
            modelValue,
            calendarAdapter,
            timeAdapter,
            controls
          }
        })
        const input = wrapper.find('.vk-input__input')
        expect(input.classes()).toContain('focus:border-positive')
      })

      it('should be color accent when props.color is accent', () => {
        wrapper = mount(VkDateTimePicker, {
          props: {
            isOpen: true,
            color: 'accent',
            parsedModel,
            modelValue,
            calendarAdapter,
            timeAdapter,
            controls
          }
        })
        const input = wrapper.find('.vk-input__input')
        expect(input.classes()).toContain('focus:border-accent')
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkDateTimePicker, {
          props: {
            isOpen: true,
            color: 'warning',
            parsedModel,
            modelValue,
            calendarAdapter,
            timeAdapter,
            controls
          }
        })
        const input = wrapper.find('.vk-input__input')
        expect(input.classes()).toContain('focus:border-warning')
      })

      it('should be color negative when props.color is negative', () => {
        wrapper = mount(VkDateTimePicker, {
          props: {
            isOpen: true,
            color: 'negative',
            parsedModel,
            modelValue,
            calendarAdapter,
            timeAdapter,
            controls
          }
        })
        const input = wrapper.find('.vk-input__input')
        expect(input.classes()).toContain('focus:border-negative')
      })

      it('should be color surface when props.color is surface', () => {
        wrapper = mount(VkDateTimePicker, {
          props: {
            isOpen: true,
            color: 'surface',
            parsedModel,
            modelValue,
            calendarAdapter,
            timeAdapter,
            controls
          }
        })
        const input = wrapper.find('.vk-input__input')
        expect(input.classes()).toContain('focus:border-on-surface')
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkDateTimePicker, {
          props: {
            isOpen: true,
            shape: 'rounded',
            parsedModel,
            modelValue,
            calendarAdapter,
            timeAdapter,
            controls
          }
        })
        expect(wrapper.find('.vk-datetimepicker__content').classes()).toContain('rounded-2xl')
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkDateTimePicker, {
          props: {
            isOpen: true,
            shape: 'soft',
            parsedModel,
            modelValue,
            calendarAdapter,
            timeAdapter,
            controls
          }
        })
        expect(wrapper.find('.vk-datetimepicker__content').classes()).toContain('rounded-lg')
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkDateTimePicker, {
          props: {
            isOpen: true,
            shape: 'square',
            parsedModel,
            modelValue,
            calendarAdapter,
            timeAdapter,
            controls
          }
        })
        expect(wrapper.find('.vk-datetimepicker__content').classes()).toContain('rounded-none')
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        wrapper = mount(VkDateTimePicker, {
          props: {
            isOpen: true,
            size: 'xs',
            parsedModel,
            modelValue,
            calendarAdapter,
            timeAdapter,
            controls
          }
        })
        const input = wrapper.find('.vk-input__input')
        expect(input.classes()).toContain('text-xs')
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkDateTimePicker, {
          props: {
            isOpen: true,
            size: 'sm',
            parsedModel,
            modelValue,
            calendarAdapter,
            timeAdapter,
            controls
          }
        })
        const input = wrapper.find('.vk-input__input')
        expect(input.classes()).toContain('text-sm')
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkDateTimePicker, {
          props: {
            isOpen: true,
            size: 'md',
            parsedModel,
            modelValue,
            calendarAdapter,
            timeAdapter,
            controls
          }
        })
        const input = wrapper.find('.vk-input__input')
        expect(input.classes()).toContain('text-base')
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkDateTimePicker, {
          props: {
            isOpen: true,
            size: 'lg',
            parsedModel,
            modelValue,
            calendarAdapter,
            timeAdapter,
            controls
          }
        })
        const input = wrapper.find('.vk-input__input')
        expect(input.classes()).toContain('text-lg')
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.variant is filled', () => {
        wrapper = mount(VkDateTimePicker, {
          props: {
            isOpen: true,
            variant: 'filled',
            parsedModel,
            modelValue,
            calendarAdapter,
            timeAdapter,
            controls
          }
        })
        const input = wrapper.find('.vk-input__input')
        expect(input.classes()).toContain('bg-surface-container-highest')
      })

      it('should be outlined when props.variant is outlined', () => {
        wrapper = mount(VkDateTimePicker, {
          props: {
            isOpen: true,
            variant: 'outlined',
            parsedModel,
            modelValue,
            calendarAdapter,
            timeAdapter,
            controls
          }
        })
        const input = wrapper.find('.vk-input__input')
        expect(input.classes()).toContain('border-2')
      })

      it('should be ghost when props.variant is ghost', () => {
        wrapper = mount(VkDateTimePicker, {
          props: {
            isOpen: true,
            variant: 'ghost',
            parsedModel,
            modelValue,
            calendarAdapter,
            timeAdapter,
            controls
          }
        })
        const input = wrapper.find('.vk-input__input')
        expect(input.classes()).toContain('bg-transparent')
      })
    })
  })

  describe('Step navigation', () => {
    it('should transition from date to time step when a day is selected', async () => {
      wrapper = mount(VkDateTimePicker, {
        props: {
          isOpen: true,
          modelValue,
          parsedModel,
          calendarAdapter,
          timeAdapter,
          controls
        }
      })

      expect(wrapper.find('.vk-datetimepicker__date-section').exists()).toBe(true)
      expect(wrapper.find('.vk-datetimepicker__time-section').exists()).toBe(false)

      const button = wrapper.findAll('.vk-calendar__grid-button')[14]
      await button.trigger('click')
      await nextTick()

      expect(wrapper.find('.vk-datetimepicker__date-section').exists()).toBe(false)
      expect(wrapper.find('.vk-datetimepicker__time-section').exists()).toBe(true)
    })

    it('should not emit update:modelValue when a date is selected', async () => {
      wrapper = mount(VkDateTimePicker, {
        props: {
          isOpen: true,
          modelValue,
          parsedModel,
          calendarAdapter,
          timeAdapter,
          controls
        }
      })

      const button = wrapper.findAll('.vk-calendar__grid-button')[14]
      await button.trigger('click')
      await nextTick()

      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    })

    it('should transition back to date step when back button is clicked', async () => {
      wrapper = mount(VkDateTimePicker, {
        props: {
          isOpen: true,
          modelValue,
          parsedModel,
          calendarAdapter,
          timeAdapter,
          controls
        }
      })

      const dayButton = wrapper.findAll('.vk-calendar__grid-button')[14]
      await dayButton.trigger('click')
      await nextTick()

      expect(wrapper.find('.vk-datetimepicker__time-section').exists()).toBe(true)

      const backButton = wrapper.find('.vk-datetimepicker__back-button')
      await backButton.trigger('click')
      await nextTick()

      expect(wrapper.find('.vk-datetimepicker__date-section').exists()).toBe(true)
      expect(wrapper.find('.vk-datetimepicker__time-section').exists()).toBe(false)
    })

    it('should reset to date step when picker reopens', async () => {
      wrapper = mount(VkDateTimePicker, {
        props: {
          isOpen: true,
          modelValue,
          parsedModel,
          calendarAdapter,
          timeAdapter,
          controls
        }
      })

      const dayButton = wrapper.findAll('.vk-calendar__grid-button')[14]
      await dayButton.trigger('click')
      await nextTick()

      expect(wrapper.find('.vk-datetimepicker__time-section').exists()).toBe(true)

      await wrapper.setProps({ isOpen: false })
      await wrapper.setProps({ isOpen: true })
      await nextTick()

      expect(wrapper.find('.vk-datetimepicker__date-section').exists()).toBe(true)
      expect(wrapper.find('.vk-datetimepicker__time-section').exists()).toBe(false)
    })

    it('should call resetSelection when picker opens', async () => {
      wrapper = mount(VkDateTimePicker, {
        props: {
          isOpen: false,
          modelValue,
          parsedModel,
          calendarAdapter,
          timeAdapter,
          controls
        }
      })

      await wrapper.setProps({ isOpen: true })
      await nextTick()

      expect(controls.resetSelection).toHaveBeenCalled()
    })
  })

  describe('Emits', () => {
    it('should emit open when the input is focused', async () => {
      wrapper = mount(VkDateTimePicker, {
        props: {
          isOpen: true,
          modelValue,
          parsedModel,
          calendarAdapter,
          timeAdapter,
          controls
        }
      })

      const input = wrapper.findAll('.vk-input__input')[0]
      await input.trigger('focus')

      expect(wrapper.emitted()).toHaveProperty('open')
    })

    it('should emit close when a click occurs outside the root component', async () => {
      wrapper = mount(VkDateTimePicker, {
        props: {
          isOpen: true,
          modelValue,
          parsedModel,
          calendarAdapter,
          timeAdapter,
          controls
        }
      })

      const input = wrapper.findAll('.vk-input__input')[0]
      await input.trigger('focus')

      document.body.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
      await nextTick()

      expect(wrapper.emitted()).toHaveProperty('close')
    })

    it('should call commitSelection and emit update:modelValue and close when OK is clicked', async () => {
      wrapper = mount(VkDateTimePicker, {
        props: {
          isOpen: true,
          modelValue,
          parsedModel,
          calendarAdapter,
          timeAdapter,
          controls
        }
      })

      // Navigate to time step
      const dayButton = wrapper.findAll('.vk-calendar__grid-button')[14]
      await dayButton.trigger('click')
      await nextTick()

      // Click OK
      const okButton = wrapper.find('.vk-time__ok-button')
      await okButton.trigger('click')

      expect(controls.commitSelection).toHaveBeenCalled()
      expect(wrapper.emitted('update:modelValue')).toBeTruthy()
      expect(wrapper.emitted('update:modelValue')![0]).toEqual([1729017518])
      expect(wrapper.emitted()).toHaveProperty('close')
    })
  })
})
