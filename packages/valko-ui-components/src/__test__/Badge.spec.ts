import { VueWrapper, mount } from '@vue/test-utils'
import VkBadge from '#valkoui/components/Badge.vue'

describe('Avatar component', () => {
  let wrapper: VueWrapper
  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkBadge, {})
      })

      it('should render', () => {
        expect(wrapper.find('.vk-badge').exists()).toBe(true)
      })

      it('should be color primary', () => {
        expect(wrapper.find('.bg-primary-500').exists()).toBe(true)
      })

      it('should be size md', () => {
        expect(wrapper.find('.vk-badge__badge').classes()).toContain('text-sm')
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.rounded-lg').exists()).toBe(true)
      })

      it('should be displayed on top-right', () => {
        expect(wrapper.find('.right-0').exists()).toBe(true)
      })

      it('should not be flat', () => {
        expect(wrapper.find('.shadow-none').exists()).toBe(false)
      })

      it('should not be dot', () => {
        expect(wrapper.find('.vk-badge__badge').classes()).not.toContain('size-4')
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', () => {
        wrapper = mount(VkBadge, {
          props: {
            color: 'primary'
          }
        })

        expect(wrapper.find('.bg-primary-500').exists()).toBe(true)
      })

      it('should be color neutral when props.color is neutral', () => {
        wrapper = mount(VkBadge, {
          props: {
            color: 'neutral'
          }
        })

        expect(wrapper.find('.bg-light-200').exists()).toBe(true)
      })

      it('should be color success when props.color is success', () => {
        wrapper = mount(VkBadge, {
          props: {
            color: 'success'
          }
        })

        expect(wrapper.find('.bg-success-500').exists()).toBe(true)
      })

      it('should be color info when props.color is info', () => {
        wrapper = mount(VkBadge, {
          props: {
            color: 'info'
          }
        })

        expect(wrapper.find('.bg-info-500').exists()).toBe(true)
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkBadge, {
          props: {
            color: 'warning'
          }
        })

        expect(wrapper.find('.bg-warning-500').exists()).toBe(true)
      })

      it('should be color error when props.color is error', () => {
        wrapper = mount(VkBadge, {
          props: {
            color: 'error'
          }
        })

        expect(wrapper.find('.bg-error-500').exists()).toBe(true)
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkBadge, {
          props: {
            shape: 'rounded'
          }
        })

        expect(wrapper.find('.rounded-full').exists()).toBe(true)
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkBadge, {
          props: {
            shape: 'soft'
          }
        })

        expect(wrapper.find('.rounded-lg').exists()).toBe(true)
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkBadge, {
          props: {
            shape: 'square'
          }
        })

        expect(wrapper.find('.rounded-none').exists()).toBe(true)
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        wrapper = mount(VkBadge, {
          props: {
            size: 'xs'
          }
        })

        expect(wrapper.find('.vk-badge__badge').classes()).toContain('text-[0.6321875rem]')
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkBadge, {
          props: {
            size: 'sm'
          }
        })

        expect(wrapper.find('.vk-badge__badge').classes()).toContain('text-[0.74375rem]')
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkBadge, {
          props: {
            size: 'md'
          }
        })

        expect(wrapper.find('.vk-badge__badge').classes()).toContain('text-sm')
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkBadge, {
          props: {
            size: 'lg'
          }
        })

        expect(wrapper.find('.vk-badge__badge').classes()).toContain('text-[1.00625rem]')
      })
    })

    describe('When prop dot changes', () => {
      it('should be dot when is true', () => {
        wrapper = mount(VkBadge, {
          props: {
            dot: true
          }
        })

        expect(wrapper.find('.vk-badge__badge').classes()).toContain('size-4')
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.variant is filled', () => {
        wrapper = mount(VkBadge, {
          props: {
            variant: 'filled'
          }
        })

        expect(wrapper.find('.vk-badge__badge').classes()).toContain('bg-primary-500')
      })

      it('should be outlined when props.variant is outlined', () => {
        wrapper = mount(VkBadge, {
          props: {
            variant: 'outlined'
          }
        })

        expect(wrapper.find('.vk-badge__badge').classes()).toContain('border-2')
      })

      it('should be ghost when props.variant is ghost', () => {
        wrapper = mount(VkBadge, {
          props: {
            variant: 'ghost'
          }
        })

        expect(wrapper.find('.vk-badge__badge').classes()).toContain('bg-primary-500/[.7]')
      })

      it('should be gradient when props.variant is gradient', () => {
        wrapper = mount(VkBadge, {
          props: {
            variant: 'gradient'
          }
        })

        expect(wrapper.find('.vk-badge__badge').classes()).toContain('bg-gradient-to-br')
      })
    })
  })

  describe('Slots', () => {
    it('should display the content given', () => {
      wrapper = mount(VkBadge, {
        slots: {
          default: 'Hello World'
        }
      })

      expect(wrapper.find('.vk-badge').text()).toContain('Hello World')
    })
  })
})
