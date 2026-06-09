import { ref, computed, toValue, nextTick } from 'vue'
import { VueWrapper, mount } from '@vue/test-utils'
import VkDateTimePicker from '#valkoui/components/DateTimePicker.vue'
import type { DateTimeAdapterResult } from '#valkoui/types/DateTimePicker'

const { useDateTimeAdapter } = vi.hoisted(() => ({
  useDateTimeAdapter: vi.fn(() => ({
    model: ref(1729017518),
    displayValue: computed(() => '2024-10-15 10:10'),
    adapter: {
      date: {
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
      time: {
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
      }
    },
    controls: {
      commitSelection: vi.fn(() => 1729017518),
      resetSelection: vi.fn()
    }
  } as DateTimeAdapterResult))
}))

vi.mock('#valkoui/composables/useDateTimeAdapter.ts', () => ({
  default: useDateTimeAdapter
}))

const { model, displayValue: displayValueRef, adapter, controls } = useDateTimeAdapter()
const modelValue = toValue(model)
const displayValue = toValue(displayValueRef)

describe('DateTimePicker component', () => {
  let wrapper: VueWrapper

  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkDateTimePicker, {
          props: {
            isOpen: true,
            modelValue,
            displayValue,
            adapter,
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
        expect(wrapper.find('.vk-popover__panel').classes()).toContain('rounded-lg')
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
            displayValue,
            modelValue,
            adapter,
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
            displayValue,
            modelValue,
            adapter,
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
            displayValue,
            modelValue,
            adapter,
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
            displayValue,
            modelValue,
            adapter,
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
            displayValue,
            modelValue,
            adapter,
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
            displayValue,
            modelValue,
            adapter,
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
            displayValue,
            modelValue,
            adapter,
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
            displayValue,
            modelValue,
            adapter,
            controls
          }
        })
        expect(wrapper.find('.vk-popover__panel').classes()).toContain('rounded-2xl')
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkDateTimePicker, {
          props: {
            isOpen: true,
            shape: 'soft',
            displayValue,
            modelValue,
            adapter,
            controls
          }
        })
        expect(wrapper.find('.vk-popover__panel').classes()).toContain('rounded-lg')
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkDateTimePicker, {
          props: {
            isOpen: true,
            shape: 'square',
            displayValue,
            modelValue,
            adapter,
            controls
          }
        })
        expect(wrapper.find('.vk-popover__panel').classes()).toContain('rounded-none')
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        wrapper = mount(VkDateTimePicker, {
          props: {
            isOpen: true,
            size: 'xs',
            displayValue,
            modelValue,
            adapter,
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
            displayValue,
            modelValue,
            adapter,
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
            displayValue,
            modelValue,
            adapter,
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
            displayValue,
            modelValue,
            adapter,
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
            displayValue,
            modelValue,
            adapter,
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
            displayValue,
            modelValue,
            adapter,
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
            displayValue,
            modelValue,
            adapter,
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
          displayValue,
          adapter,
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
          displayValue,
          adapter,
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
          displayValue,
          adapter,
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
          displayValue,
          adapter,
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
          displayValue,
          adapter,
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
          displayValue,
          adapter,
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
          displayValue,
          adapter,
          controls
        }
      })

      const input = wrapper.findAll('.vk-input__input')[0]
      await input.trigger('focus')

      document.body.dispatchEvent(new MouseEvent('click', { bubbles: true }))
      await nextTick()

      expect(wrapper.emitted()).toHaveProperty('close')
    })

    it('should call commitSelection and emit update:modelValue and close when OK is clicked', async () => {
      wrapper = mount(VkDateTimePicker, {
        props: {
          isOpen: true,
          modelValue,
          displayValue,
          adapter,
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

  describe('Uncontrolled mode', () => {
    it('should render closed by default when isOpen is not passed', () => {
      wrapper = mount(VkDateTimePicker, {
        props: {
          modelValue,
          displayValue,
          adapter,
          controls
        }
      })

      expect(wrapper.find('.vk-datetimepicker').exists()).toBe(true)
      expect(wrapper.find('.vk-popover__panel').exists()).toBe(false)
    })

    it('should open when the input is focused', async () => {
      wrapper = mount(VkDateTimePicker, {
        props: {
          modelValue,
          displayValue,
          adapter,
          controls
        },
        attachTo: document.body
      })

      const input = wrapper.find('.vk-input__input')
      await input.trigger('focus')
      await nextTick()

      expect(wrapper.find('.vk-popover__panel').exists()).toBe(true)
    })

    it('should close when clicking outside', async () => {
      wrapper = mount(VkDateTimePicker, {
        props: {
          modelValue,
          displayValue,
          adapter,
          controls
        },
        attachTo: document.body
      })

      // Open first
      const input = wrapper.find('.vk-input__input')
      await input.trigger('focus')
      await nextTick()

      expect(wrapper.find('.vk-popover__panel').exists()).toBe(true)

      // Click outside
      document.body.dispatchEvent(new MouseEvent('click', { bubbles: true }))
      await nextTick()

      expect(wrapper.find('.vk-popover__panel').exists()).toBe(false)
    })

    it('should close when OK is clicked after selecting date and time', async () => {
      wrapper = mount(VkDateTimePicker, {
        props: {
          modelValue,
          displayValue,
          adapter,
          controls
        },
        attachTo: document.body
      })

      // Open first
      const input = wrapper.find('.vk-input__input')
      await input.trigger('focus')
      await nextTick()

      expect(wrapper.find('.vk-popover__panel').exists()).toBe(true)

      // Select a date to go to time step
      const dayButton = wrapper.findAll('.vk-calendar__grid-button')[14]
      await dayButton.trigger('click')
      await nextTick()

      // Click OK to confirm
      const okButton = wrapper.find('.vk-time__ok-button')
      await okButton.trigger('click')
      await nextTick()

      expect(wrapper.find('.vk-popover__panel').exists()).toBe(false)
    })

    it('should emit open and close events in uncontrolled mode', async () => {
      wrapper = mount(VkDateTimePicker, {
        props: {
          modelValue,
          displayValue,
          adapter,
          controls
        },
        attachTo: document.body
      })

      const input = wrapper.find('.vk-input__input')
      await input.trigger('focus')
      await nextTick()

      expect(wrapper.emitted()).toHaveProperty('open')

      document.body.dispatchEvent(new MouseEvent('click', { bubbles: true }))
      await nextTick()

      expect(wrapper.emitted()).toHaveProperty('close')
    })

    it('should reset to date step when reopened in uncontrolled mode', async () => {
      wrapper = mount(VkDateTimePicker, {
        props: {
          modelValue,
          displayValue,
          adapter,
          controls
        },
        attachTo: document.body
      })

      // Open
      const input = wrapper.find('.vk-input__input')
      await input.trigger('focus')
      await nextTick()

      // Navigate to time step
      const dayButton = wrapper.findAll('.vk-calendar__grid-button')[14]
      await dayButton.trigger('click')
      await nextTick()

      expect(wrapper.find('.vk-datetimepicker__time-section').exists()).toBe(true)

      // Close by clicking outside
      document.body.dispatchEvent(new MouseEvent('click', { bubbles: true }))
      await nextTick()

      expect(wrapper.find('.vk-popover__panel').exists()).toBe(false)

      // Reopen
      await input.trigger('focus')
      await nextTick()

      // Should be back to date step
      expect(wrapper.find('.vk-datetimepicker__date-section').exists()).toBe(true)
      expect(wrapper.find('.vk-datetimepicker__time-section').exists()).toBe(false)
    })
  })
})
