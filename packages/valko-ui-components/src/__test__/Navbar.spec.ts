import { VueWrapper, mount } from '@vue/test-utils'
import VkNavbar from '#valkoui/components/Navbar.vue'

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

      it('should be color primary', () => {
        expect(wrapper.find('.bg-primary').exists()).toBe(true)
      })

      it('should be size md', () => {
        expect(wrapper.find('.h-14').exists()).toBe(true)
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.filter-none').exists()).toBe(true)
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.rounded-b-lg').exists()).toBe(true)
      })

      it('should not be elevated', () => {
        expect(wrapper.find('.shadow-el1').exists()).toBe(false)
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', () => {
        wrapper = mount(VkNavbar, {
          props: {
            color: 'primary'
          }
        })

        expect(wrapper.find('.bg-primary').exists()).toBe(true)
      })

      it('should be color secondary when props.color is secondary', () => {
        wrapper = mount(VkNavbar, {
          props: {
            color: 'secondary'
          }
        })

        expect(wrapper.find('.bg-secondary').exists()).toBe(true)
      })

      it('should be color positive when props.color is positive', () => {
        wrapper = mount(VkNavbar, {
          props: {
            color: 'positive'
          }
        })

        expect(wrapper.find('.bg-positive').exists()).toBe(true)
      })

      it('should be color accent when props.color is accent', () => {
        wrapper = mount(VkNavbar, {
          props: {
            color: 'accent'
          }
        })

        expect(wrapper.find('.bg-accent').exists()).toBe(true)
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkNavbar, {
          props: {
            color: 'warning'
          }
        })

        expect(wrapper.find('.bg-warning').exists()).toBe(true)
      })

      it('should be color negative when props.color is negative', () => {
        wrapper = mount(VkNavbar, {
          props: {
            color: 'negative'
          }
        })

        expect(wrapper.find('.bg-negative').exists()).toBe(true)
      })

      it('should be color surface when props.color is surface', () => {
        wrapper = mount(VkNavbar, {
          props: {
            color: 'surface'
          }
        })

        expect(wrapper.find('.bg-surface-container-highest').exists()).toBe(true)
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkNavbar, {
          props: {
            shape: 'rounded'
          }
        })

        expect(wrapper.find('.rounded-b-2xl').exists()).toBe(true)
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkNavbar, {
          props: {
            shape: 'soft'
          }
        })

        expect(wrapper.find('.rounded-b-lg').exists()).toBe(true)
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

        expect(wrapper.find('.h-10').exists()).toBe(true)
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

        expect(wrapper.find('.h-14').exists()).toBe(true)
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkNavbar, {
          props: {
            size: 'lg'
          }
        })

        expect(wrapper.find('.h-16').exists()).toBe(true)
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.variant is filled', () => {
        wrapper = mount(VkNavbar, {
          props: {
            variant: 'filled'
          }
        })

        expect(wrapper.find('.filter-none').exists()).toBe(true)
      })

      it('should be outlined when props.variant is outlined', () => {
        wrapper = mount(VkNavbar, {
          props: {
            variant: 'outlined'
          }
        })

        expect(wrapper.find('.border-b').exists()).toBe(true)
      })

      it('should be ghost when props.variant is ghost', () => {
        wrapper = mount(VkNavbar, {
          props: {
            variant: 'ghost'
          }
        })

        expect(wrapper.find('.backdrop-blur-lg').exists()).toBe(true)
      })

      it('should be gradient when props.variant is gradient', () => {
        wrapper = mount(VkNavbar, {
          props: {
            variant: 'gradient'
          }
        })

        expect(wrapper.find('.bg-gradient-to-br').exists()).toBe(true)
      })
    })

    describe('When elevated prop changes', () => {
      it('should be elevated when props.elevated is true', () => {
        wrapper = mount(VkNavbar, {
          props: {
            elevated: true
          }
        })

        expect(wrapper.find('.shadow-el1').exists()).toBe(true)
      })
    })
  })
})
