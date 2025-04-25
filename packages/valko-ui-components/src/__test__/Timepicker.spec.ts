import { ref, computed, toValue, nextTick } from 'vue'
import { VueWrapper, mount } from '@vue/test-utils'
import VkTimepicker from '#valkoui/components/Timepicker.vue'
import type { TimeAdapterResult } from '#valkoui/types/Time'

const { useTimeAdapter } = vi.hoisted(() => ({
  useTimeAdapter: vi.fn(() => ([
    ref(1728987010),
    computed(() => '10:10:10'),
    {
      formattedTime: computed(() => ({
        selected: {
          hours: 10,
          minutes: 10,
          seconds: 10,
          obj: new Date(1728987010)
        },
        display: {
          hours: 10,
          minutes: 10,
          seconds: 10,
          obj: new Date(1728987010)
        }
      })),
      setDisplayUnit: vi.fn(),
      onSelectAMPM: vi.fn(),
      onSelectTime: vi.fn(),
      isTimeDisabled: vi.fn(),
      period: ref('AM')
    }
  ] as TimeAdapterResult))
}))

vi.mock('#valkoui/composables/useTimeAdapter.ts', () => ({
  default: useTimeAdapter
}))

const [ model, parModel, adapter ] = useTimeAdapter()
const modelValue = toValue(model)
const parsedModel = toValue(parModel)

describe('Time component', () => {
  let wrapper: VueWrapper

  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkTimepicker, {
          props: {
            modelValue,
            isOpen: true,
            parsedModel,
            adapter
          }
        })
      })

      it('should render', () => {
        expect(wrapper.find('.vk-timepicker').exists()).toBe(true)
      })

      it('should be color primary', () => {
        expect(wrapper.find('.vk-input__label').classes()).toContain('peer-focus:text-primary-500')
      })

      it('should be size md', () => {
        expect(wrapper.find('.vk-input__input').classes()).toContain('text-base')
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.vk-input__input').classes()).toContain('bg-light-200')
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.vk-timepicker__content').classes()).toContain('rounded-lg')
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', () => {
        wrapper = mount(VkTimepicker, {
          props: {
            color: 'primary',
            modelValue,
            isOpen: true,
            parsedModel,
            adapter
          }
        })

        expect(wrapper.find('.vk-input__label').classes()).toContain('peer-focus:text-primary-500')
      })

      it('should be color secondary when props.color is secondary', () => {
        wrapper = mount(VkTimepicker, {
          props: {
            color: 'secondary',
            modelValue,
            isOpen: true,
            parsedModel,
            adapter
          }
        })

        expect(wrapper.find('.vk-input__label').classes()).toContain('peer-focus:text-dark-800')
      })

      it('should be color positive when props.color is positive', () => {
        wrapper = mount(VkTimepicker, {
          props: {
            color: 'positive',
            modelValue,
            isOpen: true,
            parsedModel,
            adapter
          }
        })

        expect(wrapper.find('.vk-input__label').classes()).toContain('text-positive')
      })

      it('should be color accent when props.color is accent', () => {
        wrapper = mount(VkTimepicker, {
          props: {
            color: 'accent',
            modelValue,
            isOpen: true,
            parsedModel,
            adapter
          }
        })

        expect(wrapper.find('.vk-input__label').classes()).toContain('text-accent')
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkTimepicker, {
          props: {
            color: 'warning',
            modelValue,
            isOpen: true,
            parsedModel,
            adapter
          }
        })

        expect(wrapper.find('.vk-input__label').classes()).toContain('text-warning')
      })

      it('should be color negative when props.color is negative', () => {
        wrapper = mount(VkTimepicker, {
          props: {
            color: 'negative',
            modelValue,
            isOpen: true,
            parsedModel,
            adapter
          }
        })

        expect(wrapper.find('.vk-input__label').classes()).toContain('text-negative')
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkTimepicker, {
          props: {
            shape: 'rounded',
            modelValue,
            isOpen: true,
            parsedModel,
            adapter
          }
        })

        expect(wrapper.find('.vk-timepicker__content').classes()).toContain('rounded-2xl')
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkTimepicker, {
          props: {
            shape: 'soft',
            modelValue,
            isOpen: true,
            parsedModel,
            adapter
          }
        })

        const input = wrapper.find('.vk-timepicker__input')
        input.trigger('focus')
        expect(wrapper.find('.vk-timepicker__content').classes()).toContain('rounded-lg')
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkTimepicker, {
          props: {
            shape: 'square',
            modelValue,
            isOpen: true,
            parsedModel,
            adapter
          }
        })

        const input = wrapper.find('.vk-timepicker__input')
        input.trigger('focus')
        expect(wrapper.find('.vk-timepicker__content').classes()).toContain('rounded-none')
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        wrapper = mount(VkTimepicker, {
          props: {
            size: 'xs',
            modelValue,
            isOpen: true,
            parsedModel,
            adapter
          }
        })

        expect(wrapper.find('.vk-input__input').classes()).toContain('text-xs')
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkTimepicker, {
          props: {
            size: 'sm',
            modelValue,
            isOpen: true,
            parsedModel,
            adapter
          }
        })

        expect(wrapper.find('.vk-input__input').classes()).toContain('text-sm')
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkTimepicker, {
          props: {
            size: 'md',
            modelValue,
            isOpen: true,
            parsedModel,
            adapter
          }
        })

        expect(wrapper.find('.vk-input__input').classes()).toContain('text-base')
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkTimepicker, {
          props: {
            size: 'lg',
            modelValue,
            isOpen: true,
            parsedModel,
            adapter
          }
        })

        expect(wrapper.find('.vk-input__input').classes()).toContain('text-lg')
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.variant is filled', () => {
        wrapper = mount(VkTimepicker, {
          props: {
            variant: 'filled',
            modelValue,
            isOpen: true,
            parsedModel,
            adapter
          }
        })

        expect(wrapper.find('.vk-input__input').classes()).toContain('border-b-2')
      })

      it('should be outlined when props.variant is outlined', () => {
        wrapper = mount(VkTimepicker, {
          props: {
            variant: 'outlined',
            modelValue,
            isOpen: true,
            parsedModel,
            adapter
          }
        })

        expect(wrapper.find('.vk-input__input').classes()).toContain('border-2')
      })

      it('should be ghost when props.variant is ghost', () => {
        wrapper = mount(VkTimepicker, {
          props: {
            variant: 'ghost',
            modelValue,
            isOpen: true,
            parsedModel,
            adapter
          }
        })

        expect(wrapper.find('.vk-input__input').classes()).toContain('bg-inherit')
      })
    })
  })

  describe('Emits', () => {
    it('should emit open event', async () => {
      const wrapper = mount(VkTimepicker, {
        props: {
          modelValue,
          isOpen: true,
          parsedModel,
          adapter
        }
      })

      const input = wrapper.findAll('.vk-input__input')[0]
      await input.trigger('focus')

      expect(wrapper.emitted()).toHaveProperty('open')
    })

    it('should emit onSelect event', async () => {
      const wrapper = mount(VkTimepicker, {
        props: {
          modelValue,
          isOpen: true,
          parsedModel,
          adapter
        }
      })

      const button = wrapper.find('.vk-time__ok-button')
      await button.trigger('click')

      expect(wrapper.emitted()).toHaveProperty('onSelect')
    })

    it('should emit close event', async () => {
      const wrapper = mount(VkTimepicker, {
        props: {
          modelValue,
          isOpen: true,
          parsedModel,
          adapter
        }
      })

      const button = wrapper.find('.vk-time__ok-button')
      await button.trigger('click')

      expect(wrapper.emitted()).toHaveProperty('close')
    })

    it('should emit close when a click occurs outside the root component', async () => {
      const wrapper = mount(VkTimepicker, {
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
