import { VueWrapper, mount } from '@vue/test-utils'
import VkRange from '#valkoui/components/Range.vue'

describe('Range component', () => {
  let wrapper: VueWrapper

  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkRange, {})
      })

      it('should render', () => {
        expect(wrapper.find('.vk-range').exists()).toBe(true)
      })

      it('should be color primary', () => {
        expect(wrapper.find('.bg-primary-500').exists()).toBe(true)
      })

      it('should be size md', () => {
        expect(wrapper.find('.h-3').exists()).toBe(true)
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.bg-light-3').exists()).toBe(true)
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.rounded-md').exists()).toBe(true)
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', () => {
        wrapper = mount(VkRange, {
          props: {
            color: 'primary'
          }
        })

        expect(wrapper.find('.bg-primary-500').exists()).toBe(true)
      })

      it('should be color neutral when props.color is neutral', () => {
        wrapper = mount(VkRange, {
          props: {
            color: 'neutral'
          }
        })

        expect(wrapper.find('.bg-light-5').exists()).toBe(true)
      })

      it('should be color success when props.color is success', () => {
        wrapper = mount(VkRange, {
          props: {
            color: 'success'
          }
        })

        expect(wrapper.find('.bg-success-500').exists()).toBe(true)
      })

      it('should be color info when props.color is info', () => {
        wrapper = mount(VkRange, {
          props: {
            color: 'info'
          }
        })

        expect(wrapper.find('.bg-info-500').exists()).toBe(true)
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkRange, {
          props: {
            color: 'warning'
          }
        })

        expect(wrapper.find('.bg-warning-500').exists()).toBe(true)
      })

      it('should be color error when props.color is error', () => {
        wrapper = mount(VkRange, {
          props: {
            color: 'error'
          }
        })

        expect(wrapper.find('.bg-error-500').exists()).toBe(true)
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkRange, {
          props: {
            shape: 'rounded'
          }
        })

        expect(wrapper.find('.rounded-full').exists()).toBe(true)
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkRange, {
          props: {
            shape: 'soft'
          }
        })

        expect(wrapper.find('.rounded-md').exists()).toBe(true)
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkRange, {
          props: {
            shape: 'square'
          }
        })

        expect(wrapper.find('.rounded-none').exists()).toBe(true)
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        wrapper = mount(VkRange, {
          props: {
            size: 'xs'
          }
        })

        expect(wrapper.find('.h-2').exists()).toBe(true)
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkRange, {
          props: {
            size: 'sm'
          }
        })

        expect(wrapper.find('.vk-range__progress').classes()).toContain('h-2.5')
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkRange, {
          props: {
            size: 'md'
          }
        })

        expect(wrapper.find('.h-3').exists()).toBe(true)
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkRange, {
          props: {
            size: 'lg'
          }
        })

        expect(wrapper.find('.vk-range__progress').classes()).toContain('h-3.5')
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.variant is filled', () => {
        wrapper = mount(VkRange, {
          props: {
            variant: 'filled'
          }
        })

        expect(wrapper.find('.bg-light-3').exists()).toBe(true)
      })

      it('should be outlined when props.variant is outlined', () => {
        wrapper = mount(VkRange, {
          props: {
            variant: 'outlined'
          }
        })

        expect(wrapper.find('.border-2').exists()).toBe(true)
      })

      it('should be ghost when props.variant is ghost', () => {
        wrapper = mount(VkRange, {
          props: {
            variant: 'ghost'
          }
        })

        expect(wrapper.find('.vk-range__progress').classes()).toContain('bg-light-3/[.5]')
      })

      it('should be gradient when props.variant is gradient', () => {
        wrapper = mount(VkRange, {
          props: {
            variant: 'gradient'
          }
        })

        expect(wrapper.find('.bg-gradient-to-br').exists()).toBe(true)
      })
    })
  })

  describe('Emits', () => {
    it('should emit update:minThumbValue event on thumb drag', async () => {
      const wrapper = mount(VkRange, {
        props: {
          minThumbValue: 30,
          maxThumbValue: 70
        }
      })

      const thumbs = wrapper.findAll('.vk-range__thumb')
      const firstThumb = thumbs[0]
      firstThumb.trigger('mousedown', { clientX: 100 })
      firstThumb.trigger('mousemove', { clientX: 150 })
      firstThumb.trigger('mouseup')
      await wrapper.vm.$nextTick()

      expect(wrapper.emitted()).toHaveProperty('update:minThumbValue')
    })

    it('should emit update:maxThumbValue event on thumb drag', async () => {
      const wrapper = mount(VkRange, {
        props: {
          isRange: true,
          minThumbValue: 30,
          maxThumbValue: 70
        }
      })

      const thumbs = wrapper.findAll('.vk-range__thumb')
      const secondThumb = thumbs[1]
      secondThumb.trigger('mousedown', { clientX: 200 })
      secondThumb.trigger('mousemove', { clientX: 250 })
      secondThumb.trigger('mouseup')
      await wrapper.vm.$nextTick()

      expect(wrapper.emitted()).toHaveProperty('update:maxThumbValue')
    })
  })
})
