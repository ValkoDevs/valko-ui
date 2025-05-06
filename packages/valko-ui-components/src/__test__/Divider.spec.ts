import { VueWrapper, mount } from '@vue/test-utils'
import VkDivider from '#valkoui/components/Divider.vue'

describe('Divider component', () => {
  let wrapper: VueWrapper
  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkDivider, {})
      })

      it('should render', () => {
        expect(wrapper.find('.vk-divider').exists()).toBe(true)
      })

      it('should be color primary', () => {
        expect(wrapper.find('.bg-primary').exists()).toBe(true)
      })

      it('should be size md', () => {
        expect(wrapper.find('.vk-divider').classes()).toContain('h-[3px]')
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.vk-filled').exists()).toBe(true)
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.rounded').exists()).toBe(true)
      })

      it('should be direction horizontal', () => {
        expect(wrapper.find('.w-full').exists()).toBe(true)
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', () => {
        wrapper = mount(VkDivider, {
          props: {
            color: 'primary'
          }
        })

        expect(wrapper.find('.bg-primary').exists()).toBe(true)
      })

      it('should be color secondary when props.color is secondary', () => {
        wrapper = mount(VkDivider, {
          props: {
            color: 'secondary'
          }
        })

        expect(wrapper.find('.bg-secondary').exists()).toBe(true)
      })

      it('should be color positive when props.color is positive', () => {
        wrapper = mount(VkDivider, {
          props: {
            color: 'positive'
          }
        })

        expect(wrapper.find('.bg-positive').exists()).toBe(true)
      })

      it('should be color accent when props.color is accent', () => {
        wrapper = mount(VkDivider, {
          props: {
            color: 'accent'
          }
        })

        expect(wrapper.find('.bg-accent').exists()).toBe(true)
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkDivider, {
          props: {
            color: 'warning'
          }
        })

        expect(wrapper.find('.bg-warning').exists()).toBe(true)
      })

      it('should be color negative when props.color is negative', () => {
        wrapper = mount(VkDivider, {
          props: {
            color: 'negative'
          }
        })

        expect(wrapper.find('.bg-negative').exists()).toBe(true)
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkDivider, {
          props: {
            shape: 'rounded'
          }
        })

        expect(wrapper.find('.rounded-full').exists()).toBe(true)
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkDivider, {
          props: {
            shape: 'soft'
          }
        })

        expect(wrapper.find('.rounded').exists()).toBe(true)
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkDivider, {
          props: {
            shape: 'square'
          }
        })

        expect(wrapper.find('.rounded-none').exists()).toBe(true)
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        wrapper = mount(VkDivider, {
          props: {
            size: 'xs'
          }
        })

        expect(wrapper.find('.vk-divider').classes()).toContain('h-px')
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkDivider, {
          props: {
            size: 'sm'
          }
        })

        expect(wrapper.find('.vk-divider').classes()).toContain('h-0.5')
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkDivider, {
          props: {
            size: 'md'
          }
        })

        expect(wrapper.find('.vk-divider').classes()).toContain('h-[3px]')
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkDivider, {
          props: {
            size: 'lg'
          }
        })

        expect(wrapper.find('.vk-divider').classes()).toContain('h-1')
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.variant is filled', () => {
        wrapper = mount(VkDivider, {
          props: {
            variant: 'filled'
          }
        })

        expect(wrapper.find('.vk-filled').exists()).toBe(true)
      })

      it('should be outlined when props.variant is outlined', () => {
        wrapper = mount(VkDivider, {
          props: {
            variant: 'outlined'
          }
        })

        expect(wrapper.find('.border').exists()).toBe(true)
      })

      it('should be ghost when props.variant is ghost', () => {
        wrapper = mount(VkDivider, {
          props: {
            variant: 'ghost'
          }
        })

        expect(wrapper.find('.vk-ghost').exists()).toBe(true)
      })
    })

    describe('When direction prop changes', () => {
      it('should be horizontal when props.direction is horizontal', () => {
        wrapper = mount(VkDivider, {
          props: {
            direction: 'horizontal'
          }
        })

        expect(wrapper.find('.w-full').exists()).toBe(true)
      })

      it('should be vertical when props.direction is vertical', () => {
        wrapper = mount(VkDivider, {
          props: {
            direction: 'vertical'
          }
        })

        expect(wrapper.find('.h-full').exists()).toBe(true)
      })
    })
  })
})
