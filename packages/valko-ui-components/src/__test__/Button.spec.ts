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
        expect(wrapper.find('.bg-primary').exists()).toBe(true)
      })

      it('should be size md', () => {
        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.vk-button__filled').exists()).toBe(true)
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.rounded-sm').exists()).toBe(true)
      })

      it('should not be elevated', () => {
        expect(wrapper.find('.shadow-el1').exists()).toBe(false)
      })

      it('should not be block', () => {
        expect(wrapper.find('.size-fit').exists()).toBe(true)
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

        expect(wrapper.find('.bg-primary').exists()).toBe(true)
      })

      it('should be color secondary when props.color is secondary', () => {
        wrapper = mount(VkButton, {
          props: {
            color: 'secondary'
          }
        })

        expect(wrapper.find('.bg-secondary').exists()).toBe(true)
      })

      it('should be color positive when props.color is positive', () => {
        wrapper = mount(VkButton, {
          props: {
            color: 'positive'
          }
        })

        expect(wrapper.find('.bg-positive').exists()).toBe(true)
      })

      it('should be color accent when props.color is accent', () => {
        wrapper = mount(VkButton, {
          props: {
            color: 'accent'
          }
        })

        expect(wrapper.find('.bg-accent').exists()).toBe(true)
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkButton, {
          props: {
            color: 'warning'
          }
        })

        expect(wrapper.find('.bg-warning').exists()).toBe(true)
      })

      it('should be color negative when props.color is negative', () => {
        wrapper = mount(VkButton, {
          props: {
            color: 'negative'
          }
        })

        expect(wrapper.find('.bg-negative').exists()).toBe(true)
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

        expect(wrapper.find('.rounded-sm').exists()).toBe(true)
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

        expect(wrapper.find('.vk-button__filled').exists()).toBe(true)
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

        expect(wrapper.find('.vk-button__ghost').exists()).toBe(true)
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

      it('should apply correct spinner styles for positive color', () => {
        const wrapper = mount(VkButton, {
          props: {
            loading: true,
            color: 'positive',
            variant: 'filled'
          }
        })

        expect(wrapper.find('.vk-spinner__icon').classes()).toContain('text-white')
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

      it('should apply correct spinner styles when color is positive and variant is filled', () => {
        const wrapper = mount(VkButton, {
          props: {
            loading: true,
            color: 'positive',
            variant: 'filled'
          }
        })
        expect(wrapper.find('.vk-spinner__icon').classes()).toContain('text-white')
      })

      it('should apply correct spinner styles when color is primary and variant is outlined', () => {
        const wrapper = mount(VkButton, {
          props: {
            loading: true,
            color: 'primary',
            variant: 'outlined'
          }
        })
        expect(wrapper.find('.vk-spinner__icon').classes()).toContain('text-primary')
      })

      it('should apply correct spinner styles when color is positive and variant is outlined', () => {
        const wrapper = mount(VkButton, {
          props: {
            loading: true,
            color: 'positive',
            variant: 'outlined'
          }
        })
        expect(wrapper.find('.vk-spinner__icon').classes()).toContain('text-positive')
      })
    })

    describe('When elevated prop changes', () => {
      it('should be elevated when props.elevated is true', () => {
        wrapper = mount(VkButton, {
          props: {
            elevated: true
          }
        })
        expect(wrapper.find('.vk-button__base').classes()).toContain('shadow-el1')
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
