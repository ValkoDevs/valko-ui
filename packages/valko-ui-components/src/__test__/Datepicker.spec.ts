import { ref, computed, toValue, nextTick } from 'vue'
import { VueWrapper, mount } from '@vue/test-utils'
import VkDatepicker from '#valkoui/components/Datepicker.vue'
import type { AdapterResult } from '#valkoui/types/Calendar'

const { useDateAdapter } = vi.hoisted(() => ({
  useDateAdapter: vi.fn(() => ({
    model: ref(1729017518),
    displayValue: computed(() => '2024-10-15'),
    adapter: {
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
  } as AdapterResult))
}))

vi.mock('#valkoui/composables/useDateAdapter.ts', () => ({
  default: useDateAdapter
}))

const { model, displayValue: displayValueRef, adapter } = useDateAdapter()
const modelValue = toValue(model)
const displayValue = toValue(displayValueRef)
describe('Datepicker component', () => {
  let wrapper: VueWrapper

  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkDatepicker, {
          props: {
            isOpen: true,
            modelValue,
            displayValue,
            adapter
          }
        })
      })

      it('should render', () => {
        expect(wrapper.find('.vk-datepicker').exists()).toBe(true)
      })

      it('should be color primary', async () => {
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

      it('should be shape soft', async () => {
        const input = wrapper.findAll('.vk-input__input')[0]
        await input.trigger('focus')

        expect(wrapper.find('.vk-popover__panel').classes()).toContain('rounded-lg')
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', async () => {
        wrapper = mount(VkDatepicker, {
          props: {
            isOpen: true,
            color: 'primary',
            displayValue,
            modelValue,
            adapter
          }
        })

        const input = wrapper.find('.vk-input__input')

        expect(input.classes()).toContain('focus:border-primary')
      })

      it('should be color secondary when props.color is secondary', () => {
        wrapper = mount(VkDatepicker, {
          props: {
            isOpen: true,
            color: 'secondary',
            displayValue,
            modelValue,
            adapter
          }
        })

        const input = wrapper.find('.vk-input__input')

        expect(input.classes()).toContain('focus:border-secondary')
      })

      it('should be color positive when props.color is positive', () => {
        wrapper = mount(VkDatepicker, {
          props: {
            isOpen: true,
            color: 'positive',
            displayValue,
            modelValue,
            adapter
          }
        })

        const input = wrapper.find('.vk-input__input')

        expect(input.classes()).toContain('focus:border-positive')
      })

      it('should be color accent when props.color is accent', () => {
        wrapper = mount(VkDatepicker, {
          props: {
            isOpen: true,
            color: 'accent',
            displayValue,
            modelValue,
            adapter
          }
        })

        const input = wrapper.find('.vk-input__input')

        expect(input.classes()).toContain('focus:border-accent')
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkDatepicker, {
          props: {
            isOpen: true,
            color: 'warning',
            displayValue,
            modelValue,
            adapter
          }
        })

        const input = wrapper.find('.vk-input__input')

        expect(input.classes()).toContain('focus:border-warning')
      })

      it('should be color negative when props.color is negative', () => {
        wrapper = mount(VkDatepicker, {
          props: {
            isOpen: true,
            color: 'negative',
            displayValue,
            modelValue,
            adapter
          }
        })

        const input = wrapper.find('.vk-input__input')

        expect(input.classes()).toContain('focus:border-negative')
      })

      it('should be color surface when props.color is surface', () => {
        wrapper = mount(VkDatepicker, {
          props: {
            isOpen: true,
            color: 'surface',
            displayValue,
            modelValue,
            adapter
          }
        })

        const input = wrapper.find('.vk-input__input')

        expect(input.classes()).toContain('focus:border-on-surface')
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', async () => {
        wrapper = mount(VkDatepicker, {
          props: {
            isOpen: true,
            shape: 'rounded',
            displayValue,
            modelValue,
            adapter
          }
        })

        const input = wrapper.findAll('.vk-input__input')[0]
        await input.trigger('focus')

        expect(wrapper.find('.vk-popover__panel').classes()).toContain('rounded-2xl')
      })

      it('should be soft when props.shape is soft', async () => {
        wrapper = mount(VkDatepicker, {
          props: {
            isOpen: true,
            shape: 'soft',
            displayValue,
            modelValue,
            adapter
          }
        })

        const input = wrapper.findAll('.vk-input__input')[0]
        await input.trigger('focus')

        expect(wrapper.find('.vk-popover__panel').classes()).toContain('rounded-lg')
      })

      it('should be square when props.shape is square', async () => {
        wrapper = mount(VkDatepicker, {
          props: {
            isOpen: true,
            shape: 'square',
            displayValue,
            modelValue,
            adapter
          }
        })

        const input = wrapper.findAll('.vk-input__input')[0]
        await input.trigger('focus')

        expect(wrapper.find('.vk-popover__panel').classes()).toContain('rounded-none')
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        wrapper = mount(VkDatepicker, {
          props: {
            isOpen: true,
            size: 'xs',
            displayValue,
            modelValue,
            adapter
          }
        })

        const input = wrapper.find('.vk-input__input')

        expect(input.classes()).toContain('text-xs')
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkDatepicker, {
          props: {
            isOpen: true,
            size: 'sm',
            displayValue,
            modelValue,
            adapter
          }
        })

        const input = wrapper.find('.vk-input__input')

        expect(input.classes()).toContain('text-sm')
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkDatepicker, {
          props: {
            isOpen: true,
            size: 'md',
            displayValue,
            modelValue,
            adapter
          }
        })

        const input = wrapper.find('.vk-input__input')

        expect(input.classes()).toContain('text-base')
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkDatepicker, {
          props: {
            isOpen: true,
            size: 'lg',
            displayValue,
            modelValue,
            adapter
          }
        })

        const input = wrapper.find('.vk-input__input')

        expect(input.classes()).toContain('text-lg')
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.variant is filled', () => {
        wrapper = mount(VkDatepicker, {
          props: {
            isOpen: true,
            variant: 'filled',
            displayValue,
            modelValue,
            adapter
          }
        })

        const input = wrapper.find('.vk-input__input')

        expect(input.classes()).toContain('bg-surface-container-highest')
      })

      it('should be outlined when props.variant is outlined', () => {
        wrapper = mount(VkDatepicker, {
          props: {
            isOpen: true,
            variant: 'outlined',
            displayValue,
            modelValue,
            adapter
          }
        })

        const input = wrapper.find('.vk-input__input')

        expect(input.classes()).toContain('border-2')
      })

      it('should be ghost when props.variant is ghost', () => {
        wrapper = mount(VkDatepicker, {
          props: {
            isOpen: true,
            variant: 'ghost',
            displayValue,
            modelValue,
            adapter
          }
        })

        const input = wrapper.find('.vk-input__input')

        expect(input.classes()).toContain('bg-transparent')
      })
    })
  })

  describe('Emits', () => {
    it('should emit update:modelValue event', async () => {
      const wrapper = mount(VkDatepicker, {
        props: {
          isOpen: true,
          modelValue,
          displayValue,
          adapter
        }
      })

      const input = wrapper.findAll('.vk-input__input')[0]
      await input.trigger('focus')

      const button = wrapper.findAll('.vk-calendar__grid-button')[14]
      await button.trigger('click')

      expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    })

    it('should emit open when the input is focused', async () => {
      const wrapper = mount(VkDatepicker, {
        props: {
          isOpen: true,
          modelValue,
          displayValue,
          adapter
        }
      })

      const input = wrapper.findAll('.vk-input__input')[0]
      await input.trigger('focus')

      expect(wrapper.emitted()).toHaveProperty('open')
    })

    it('should emit close when a click occurs outside the root component', async () => {
      const wrapper = mount(VkDatepicker, {
        props: {
          isOpen: true,
          modelValue,
          displayValue,
          adapter
        }
      })

      const input = wrapper.findAll('.vk-input__input')[0]
      await input.trigger('focus')

      document.body.dispatchEvent(new MouseEvent('click', { bubbles: true }))
      await nextTick()

      expect(wrapper.emitted()).toHaveProperty('close')
    })
  })

  describe('Uncontrolled mode', () => {
    it('should render closed by default when isOpen is not passed', () => {
      wrapper = mount(VkDatepicker, {
        props: {
          modelValue,
          displayValue,
          adapter
        }
      })

      expect(wrapper.find('.vk-datepicker').exists()).toBe(true)
      expect(wrapper.find('.vk-popover__panel').exists()).toBe(false)
    })

    it('should open when the input is focused', async () => {
      wrapper = mount(VkDatepicker, {
        props: {
          modelValue,
          displayValue,
          adapter
        },
        attachTo: document.body
      })

      const input = wrapper.find('.vk-input__input')
      await input.trigger('focus')
      await nextTick()

      expect(wrapper.find('.vk-popover__panel').exists()).toBe(true)
    })

    it('should close when clicking outside', async () => {
      wrapper = mount(VkDatepicker, {
        props: {
          modelValue,
          displayValue,
          adapter
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

    it('should close when a date is finalized', async () => {
      wrapper = mount(VkDatepicker, {
        props: {
          modelValue,
          displayValue,
          adapter
        },
        attachTo: document.body
      })

      // Open first
      const input = wrapper.find('.vk-input__input')
      await input.trigger('focus')
      await nextTick()

      expect(wrapper.find('.vk-popover__panel').exists()).toBe(true)

      // Click a day button to finalize selection
      const button = wrapper.findAll('.vk-calendar__grid-button')[14]
      await button.trigger('click')
      await nextTick()

      expect(wrapper.find('.vk-popover__panel').exists()).toBe(false)
    })

    it('should emit open and close events in uncontrolled mode', async () => {
      wrapper = mount(VkDatepicker, {
        props: {
          modelValue,
          displayValue,
          adapter
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
  })
})
