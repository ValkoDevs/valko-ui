import { VueWrapper, mount } from '@vue/test-utils'
import VkButton from '#valkoui/components/Button.vue'

describe('Button component', () => {
  let wrapper: VueWrapper
  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkButton, {})
      })

      it('should render', () => {
        expect(wrapper.find('.vk-button__base').exists()).toBe(true)
      })

      it('should be color primary', () => {
        expect(wrapper.find('.bg-primary-500').exists()).toBe(true)
      })

      it('should be size md', () => {
        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.text-light-1').exists()).toBe(true)
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.rounded').exists()).toBe(true)
      })

      it('should not be flat', () => {
        expect(wrapper.find('.shadow-none').exists()).toBe(false)
      })

      it('should not be block', () => {
        expect(wrapper.find('.w-full').exists()).toBe(false)
      })

      it('should not be condensed', () => {
        expect(wrapper.find('.py-0').exists()).toBe(false)
      })

      it('should not be disabled', () => {
        expect(wrapper.find('.cursor-not-allowed').exists()).toBe(false)
      })

      it('should not be loading', () => {
        expect(wrapper.find('.vk-spinner').exists()).toBe(false)
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', () => {
        wrapper = mount(VkButton, {
          props: {
            color: 'primary'
          }
        })

        expect(wrapper.find('.bg-primary-500').exists()).toBe(true)
      })

      it('should be color neutral when props.color is neutral', () => {
        wrapper = mount(VkButton, {
          props: {
            color: 'neutral'
          }
        })

        expect(wrapper.find('.bg-dark-4').exists()).toBe(true)
      })

      it('should be color success when props.color is success', () => {
        wrapper = mount(VkButton, {
          props: {
            color: 'success'
          }
        })

        expect(wrapper.find('.bg-success-500').exists()).toBe(true)
      })

      it('should be color info when props.color is info', () => {
        wrapper = mount(VkButton, {
          props: {
            color: 'info'
          }
        })

        expect(wrapper.find('.bg-info-500').exists()).toBe(true)
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkButton, {
          props: {
            color: 'warning'
          }
        })

        expect(wrapper.find('.bg-warning-500').exists()).toBe(true)
      })

      it('should be color error when props.color is error', () => {
        wrapper = mount(VkButton, {
          props: {
            color: 'error'
          }
        })

        expect(wrapper.find('.bg-error-500').exists()).toBe(true)
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkButton, {
          props: {
            shape: 'rounded'
          }
        })

        expect(wrapper.find('.rounded-full').exists()).toBe(true)
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkButton, {
          props: {
            shape: 'soft'
          }
        })

        expect(wrapper.find('.rounded').exists()).toBe(true)
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkButton, {
          props: {
            shape: 'square'
          }
        })

        expect(wrapper.find('.rounded-none').exists()).toBe(true)
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        wrapper = mount(VkButton, {
          props: {
            size: 'xs'
          }
        })

        expect(wrapper.find('.text-xs').exists()).toBe(true)
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkButton, {
          props: {
            size: 'sm'
          }
        })

        expect(wrapper.find('.text-sm').exists()).toBe(true)
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkButton, {
          props: {
            size: 'md'
          }
        })

        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkButton, {
          props: {
            size: 'lg'
          }
        })

        expect(wrapper.find('.text-lg').exists()).toBe(true)
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.variant is filled', () => {
        wrapper = mount(VkButton, {
          props: {
            variant: 'filled'
          }
        })

        expect(wrapper.find('.text-light-1').exists()).toBe(true)
      })

      it('should be outlined when props.variant is outlined', () => {
        wrapper = mount(VkButton, {
          props: {
            variant: 'outlined'
          }
        })

        expect(wrapper.find('.border-2').exists()).toBe(true)
      })

      it('should be ghost when props.variant is ghost', () => {
        wrapper = mount(VkButton, {
          props: {
            variant: 'ghost'
          }
        })

        expect(wrapper.find('.shadow-none').exists()).toBe(true)
      })

      it('should be link when props.variant is link', () => {
        wrapper = mount(VkButton, {
          props: {
            variant: 'link'
          }
        })

        expect(wrapper.find('.bg-transparent').exists()).toBe(true)
      })

      it('should be gradient when props.variant is gradient', () => {
        wrapper = mount(VkButton, {
          props: {
            variant: 'gradient'
          }
        })

        expect(wrapper.find('.bg-gradient-to-br').exists()).toBe(true)
      })
    })

    describe('When loading prop changes', () => {
      it('should display a spinner when prop loading is true', () => {
        wrapper = mount(VkButton, {
          props: {
            loading: true
          }
        })

        expect(wrapper.find('.vk-spinner').exists()).toBe(true)
      })

      it('should not display a spinner when prop loading is false', () => {
        wrapper = mount(VkButton, {
          props: {
            loading: false
          }
        })

        expect(wrapper.find('.vk-spinner').exists()).toBe(false)
      })

      it('should apply correct spinner styles based on color and variant', () => {
        const wrapper = mount(VkButton, {
          props: {
            loading: true,
            color: 'primary',
            variant: 'filled'
          }
        })

        expect(wrapper.find('.vk-spinner__icon').classes()).toContain('text-white')
      })

      it('should apply correct spinner styles for success color', () => {
        const wrapper = mount(VkButton, {
          props: {
            loading: true,
            color: 'success',
            variant: 'filled'
          }
        })

        expect(wrapper.find('.vk-spinner__icon').classes()).toContain('text-white')
      })

      it('should apply correct spinner styles when color is neutral and variant is filled', () => {
        const wrapper = mount(VkButton, {
          props: {
            loading: true,
            color: 'neutral',
            variant: 'filled'
          }
        })
        expect(wrapper.find('.vk-spinner__icon').classes()).toContain('data-[variant=filled]:data-[color=neutral]:text-white')
      })

      it('should apply correct spinner styles when color is primary and variant is filled', () => {
        const wrapper = mount(VkButton, {
          props: {
            loading: true,
            color: 'primary',
            variant: 'filled'
          }
        })
        expect(wrapper.find('.vk-spinner__icon').classes()).toContain('text-white')
      })

      it('should apply correct spinner styles when color is success and variant is filled', () => {
        const wrapper = mount(VkButton, {
          props: {
            loading: true,
            color: 'success',
            variant: 'filled'
          }
        })
        expect(wrapper.find('.vk-spinner__icon').classes()).toContain('text-white')
      })

      it('should apply correct spinner styles when color is neutral and variant is outlined', () => {
        const wrapper = mount(VkButton, {
          props: {
            loading: true,
            color: 'neutral',
            variant: 'outlined'
          }
        })
        expect(wrapper.find('.vk-spinner__icon').classes()).toContain('data-[variant=outlined]:data-[color=neutral]:text-black')
      })

      it('should apply correct spinner styles when color is primary and variant is outlined', () => {
        const wrapper = mount(VkButton, {
          props: {
            loading: true,
            color: 'primary',
            variant: 'outlined'
          }
        })
        expect(wrapper.find('.vk-spinner__icon').classes()).toContain('text-primary-500')
      })

      it('should apply correct spinner styles when color is success and variant is outlined', () => {
        const wrapper = mount(VkButton, {
          props: {
            loading: true,
            color: 'success',
            variant: 'outlined'
          }
        })
        expect(wrapper.find('.vk-spinner__icon').classes()).toContain('text-success-500')
      })
    })
  })

  describe('With slots', () => {
    it('should be empty', () => {
      const wrapper = mount(VkButton, {})

      expect(wrapper.find('.vk-button__base').text()).toContain('')
    })

    it('should show slot content if provided', () => {
      const wrapper = mount(VkButton, {
        slots: {
          default: 'Hello World'
        }
      })

      expect(wrapper.find('.vk-button__base').text()).toContain('Hello World')
    })
  })

  describe('Emits', () => {
    it('should emit click event if not disabled or loading', () => {
      const wrapper = mount(VkButton, {})

      wrapper.find('.vk-button__base').trigger('click')
      expect(wrapper.emitted()).toHaveProperty('click')
    })

    it('should not emit click event if disabled is true', async () => {
      const wrapper = mount(VkButton, {
        props: {
          disabled: true
        }
      })

      await wrapper.find('button').trigger('click')
      expect(wrapper.emitted()).not.toHaveProperty('click')
    })

    it('should not emit click event if loading is true', async () => {
      const wrapper = mount(VkButton, {
        props: {
          loading: true
        }
      })

      await wrapper.find('button').trigger('click')
      expect(wrapper.emitted()).not.toHaveProperty('click')
    })
  })
})
