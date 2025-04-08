import { ref, computed, toValue } from 'vue'
import { VueWrapper, mount } from '@vue/test-utils'
import VkTime from '#valkoui/components/Time.vue'
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

const [ model, , adapter ] = useTimeAdapter()
const modelValue = toValue(model)

describe('Time component', () => {
  let wrapper: VueWrapper

  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkTime, {
          props: {
            modelValue,
            adapter
          }
        })
      })

      it('should render', () => {
        expect(wrapper.find('.vk-time').exists()).toBe(true)
      })

      it('should be color primary', () => {
        expect(wrapper.find('.vk-time__ok-button').classes()).toContain('bg-primary-500')
      })

      it('should be size md', () => {
        expect(wrapper.find('.vk-time__unit-button').classes()).toContain('size-7')
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.vk-time__ok-button').classes()).toContain('bg-primary-500')
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.vk-time__ok-button').classes()).toContain('rounded')
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', () => {
        wrapper = mount(VkTime, {
          props: {
            color: 'primary',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-time__ok-button').classes()).toContain('bg-primary-500')
      })

      it('should be color neutral when props.color is neutral', () => {
        wrapper = mount(VkTime, {
          props: {
            color: 'neutral',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-time__ok-button').classes()).toContain('bg-dark-900')
      })

      it('should be color success when props.color is success', () => {
        wrapper = mount(VkTime, {
          props: {
            color: 'success',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-time__ok-button').classes()).toContain('bg-success-500')
      })

      it('should be color info when props.color is info', () => {
        wrapper = mount(VkTime, {
          props: {
            color: 'info',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-time__ok-button').classes()).toContain('bg-info-500')
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkTime, {
          props: {
            color: 'warning',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-time__ok-button').classes()).toContain('bg-warning-500')
      })

      it('should be color error when props.color is error', () => {
        wrapper = mount(VkTime, {
          props: {
            color: 'error',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-time__ok-button').classes()).toContain('bg-error-500')
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkTime, {
          props: {
            shape: 'rounded',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-time__ok-button').classes()).toContain('rounded-full')
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkTime, {
          props: {
            shape: 'soft',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-time__ok-button').classes()).toContain('rounded')
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkTime, {
          props: {
            shape: 'square',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-time__ok-button').classes()).toContain('rounded-none')
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        wrapper = mount(VkTime, {
          props: {
            size: 'xs',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-time__unit-button').classes()).toContain('size-5')
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkTime, {
          props: {
            size: 'sm',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-time__unit-button').classes()).toContain('size-6')
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkTime, {
          props: {
            size: 'md',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-time__unit-button').classes()).toContain('size-7')
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkTime, {
          props: {
            size: 'lg',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-time__unit-button').classes()).toContain('size-8')
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.variant is filled', () => {
        wrapper = mount(VkTime, {
          props: {
            variant: 'filled',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-time__ok-button').classes()).toContain('bg-primary-500')
      })

      it('should be outlined when props.variant is outlined', () => {
        wrapper = mount(VkTime, {
          props: {
            variant: 'outlined',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-time__ok-button').classes()).toContain('border-primary-500')
      })

      it('should be ghost when props.variant is ghost', () => {
        wrapper = mount(VkTime, {
          props: {
            variant: 'ghost',
            modelValue,
            adapter
          }
        })

        expect(wrapper.find('.vk-time__ok-button').classes()).toContain('bg-primary-500/[.3]')
      })
    })
  })

  describe('Emits', () => {
    it('should emit onSelect event', async () => {
      const wrapper = mount(VkTime, {
        props: {
          modelValue,
          adapter
        }
      })

      const button = wrapper.find('.vk-time__ok-button')
      await button.trigger('click')

      expect(wrapper.emitted()).toHaveProperty('onSelect')
    })
  })
})
