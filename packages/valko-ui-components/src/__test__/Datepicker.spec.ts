import { ref, computed, toValue, nextTick } from 'vue'
import { VueWrapper, mount } from '@vue/test-utils'
import VkDatepicker from '#valkoui/components/Datepicker.vue'
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

const [ model, parsedModelValue, adapter ] = useDateAdapter()
const modelValue = toValue(model)
const parsedModel = toValue(parsedModelValue)
describe('Datepicker component', () => {
  let wrapper: VueWrapper

  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkDatepicker, {
          props: {
            isOpen: true,
            modelValue,
            parsedModel,
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

        expect(wrapper.find('.vk-datepicker__content').classes()).toContain('rounded-lg')
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', async () => {
        wrapper = mount(VkDatepicker, {
          props: {
            isOpen: true,
            color: 'primary',
            parsedModel,
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
            parsedModel,
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
            parsedModel,
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
            parsedModel,
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
            parsedModel,
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
            parsedModel,
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
            parsedModel,
            modelValue,
            adapter
          }
        })

        const input = wrapper.find('.vk-input__input')

        expect(input.classes()).toContain('focus:border-on-surface-variant')
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', async () => {
        wrapper = mount(VkDatepicker, {
          props: {
            isOpen: true,
            shape: 'rounded',
            parsedModel,
            modelValue,
            adapter
          }
        })

        const input = wrapper.findAll('.vk-input__input')[0]
        await input.trigger('focus')

        expect(wrapper.find('.vk-datepicker__content').classes()).toContain('rounded-2xl')
      })

      it('should be soft when props.shape is soft', async () => {
        wrapper = mount(VkDatepicker, {
          props: {
            isOpen: true,
            shape: 'soft',
            parsedModel,
            modelValue,
            adapter
          }
        })

        const input = wrapper.findAll('.vk-input__input')[0]
        await input.trigger('focus')

        expect(wrapper.find('.vk-datepicker__content').classes()).toContain('rounded-lg')
      })

      it('should be square when props.shape is square', async () => {
        wrapper = mount(VkDatepicker, {
          props: {
            isOpen: true,
            shape: 'square',
            parsedModel,
            modelValue,
            adapter
          }
        })

        const input = wrapper.findAll('.vk-input__input')[0]
        await input.trigger('focus')

        expect(wrapper.find('.vk-datepicker__content').classes()).toContain('rounded-none')
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        wrapper = mount(VkDatepicker, {
          props: {
            isOpen: true,
            size: 'xs',
            parsedModel,
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
            parsedModel,
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
            parsedModel,
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
            parsedModel,
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
            parsedModel,
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
            parsedModel,
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
            parsedModel,
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
          parsedModel,
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
          parsedModel,
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
          parsedModel,
          adapter
        }
      })

      const input = wrapper.findAll('.vk-input__input')[0]
      await input.trigger('focus')

      document.body.dispatchEvent(new MouseEvent('mousedown', { bubbles: true }))
      await nextTick()

      expect(wrapper.emitted()).toHaveProperty('close')
    })
  })
})
