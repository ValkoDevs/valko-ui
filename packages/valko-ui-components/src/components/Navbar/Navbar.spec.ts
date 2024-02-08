import { VueWrapper, mount } from '@vue/test-utils'
import { VkNavbar } from '.'

describe('Navbar component', () => {
  let wrapper: VueWrapper
  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkNavbar, {})
      })

      it('should render', () => {
        expect(wrapper.find('.vk-navbar').exists()).toBe(true)
      })

      it('should be color neutral', () => {
        expect(wrapper.find('.bg-light-1').exists()).toBe(true)
      })

      it('should be size md', () => {
        expect(wrapper.find('.h-16').exists()).toBe(true)
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.filter-none').exists()).toBe(true)
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.rounded-b-2xl').exists()).toBe(true)
      })

      it('should not be flat', () => {
        expect(wrapper.find('.shadow-none').exists()).toBe(false)
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', () => {
        wrapper = mount(VkNavbar, {
          props: {
            color: 'primary'
          }
        })

        expect(wrapper.find('.bg-primary-500').exists()).toBe(true)
      })

      it('should be color secondary when props.color is secondary', () => {
        wrapper = mount(VkNavbar, {
          props: {
            color: 'secondary'
          }
        })

        expect(wrapper.find('.bg-secondary-500').exists()).toBe(true)
      })

      it('should be color success when props.color is success', () => {
        wrapper = mount(VkNavbar, {
          props: {
            color: 'success'
          }
        })

        expect(wrapper.find('.bg-success-500').exists()).toBe(true)
      })

      it('should be color info when props.color is info', () => {
        wrapper = mount(VkNavbar, {
          props: {
            color: 'info'
          }
        })

        expect(wrapper.find('.bg-info-500').exists()).toBe(true)
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkNavbar, {
          props: {
            color: 'warning'
          }
        })

        expect(wrapper.find('.bg-warning-500').exists()).toBe(true)
      })

      it('should be color error when props.color is error', () => {
        wrapper = mount(VkNavbar, {
          props: {
            color: 'error'
          }
        })

        expect(wrapper.find('.bg-error-500').exists()).toBe(true)
      })

      it('should be color light when props.color is light', () => {
        wrapper = mount(VkNavbar, {
          props: {
            color: 'light'
          }
        })

        expect(wrapper.find('.bg-white').exists()).toBe(true)
      })

      it('should be color dark when props.color is dark', () => {
        wrapper = mount(VkNavbar, {
          props: {
            color: 'dark'
          }
        })

        expect(wrapper.find('.bg-black').exists()).toBe(true)
      })

      it('should be color neutral when props.color is neutral', () => {
        wrapper = mount(VkNavbar, {
          props: {
            color: 'neutral'
          }
        })

        expect(wrapper.find('.bg-light-1').exists()).toBe(true)
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkNavbar, {
          props: {
            shape: 'rounded'
          }
        })

        expect(wrapper.find('.rounded-b-full').exists()).toBe(true)
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkNavbar, {
          props: {
            shape: 'soft'
          }
        })

        expect(wrapper.find('.rounded-b-2xl').exists()).toBe(true)
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkNavbar, {
          props: {
            shape: 'square'
          }
        })

        expect(wrapper.find('.rounded-none').exists()).toBe(true)
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        wrapper = mount(VkNavbar, {
          props: {
            size: 'xs'
          }
        })

        expect(wrapper.find('.h-8').exists()).toBe(true)
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkNavbar, {
          props: {
            size: 'sm'
          }
        })

        expect(wrapper.find('.h-12').exists()).toBe(true)
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkNavbar, {
          props: {
            size: 'md'
          }
        })

        expect(wrapper.find('.h-16').exists()).toBe(true)
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkNavbar, {
          props: {
            size: 'lg'
          }
        })

        expect(wrapper.find('.h-20').exists()).toBe(true)
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.size is filled', () => {
        wrapper = mount(VkNavbar, {
          props: {
            variant: 'filled'
          }
        })

        expect(wrapper.find('.filter-none').exists()).toBe(true)
      })

      it('should be outlined when props.size is outlined', () => {
        wrapper = mount(VkNavbar, {
          props: {
            variant: 'outlined'
          }
        })

        expect(wrapper.find('.border-b').exists()).toBe(true)
      })

      it('should be ghost when props.size is ghost', () => {
        wrapper = mount(VkNavbar, {
          props: {
            variant: 'ghost'
          }
        })

        expect(wrapper.find('.backdrop-blur-lg').exists()).toBe(true)
      })
    })
  })
})
