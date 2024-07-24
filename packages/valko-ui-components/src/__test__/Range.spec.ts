import { VueWrapper, mount } from '@vue/test-utils'
import VkRange from '#valkoui/components/Range.vue'

describe('Range component', () => {
  let wrapper: VueWrapper

  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkRange, {
          props: {
            modelValue: 0
          }
        })
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
            color: 'primary',
            modelValue: 0
          }
        })

        expect(wrapper.find('.bg-primary-500').exists()).toBe(true)
      })

      it('should be color neutral when props.color is neutral', () => {
        wrapper = mount(VkRange, {
          props: {
            color: 'neutral',
            modelValue: 0
          }
        })

        expect(wrapper.find('.bg-light-5').exists()).toBe(true)
      })

      it('should be color success when props.color is success', () => {
        wrapper = mount(VkRange, {
          props: {
            color: 'success',
            modelValue: 0
          }
        })

        expect(wrapper.find('.bg-success-500').exists()).toBe(true)
      })

      it('should be color info when props.color is info', () => {
        wrapper = mount(VkRange, {
          props: {
            color: 'info',
            modelValue: 0
          }
        })

        expect(wrapper.find('.bg-info-500').exists()).toBe(true)
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkRange, {
          props: {
            color: 'warning',
            modelValue: 0
          }
        })

        expect(wrapper.find('.bg-warning-500').exists()).toBe(true)
      })

      it('should be color error when props.color is error', () => {
        wrapper = mount(VkRange, {
          props: {
            color: 'error',
            modelValue: 0
          }
        })

        expect(wrapper.find('.bg-error-500').exists()).toBe(true)
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkRange, {
          props: {
            shape: 'rounded',
            modelValue: 0
          }
        })

        expect(wrapper.find('.rounded-full').exists()).toBe(true)
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkRange, {
          props: {
            shape: 'soft',
            modelValue: 0
          }
        })

        expect(wrapper.find('.rounded-md').exists()).toBe(true)
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkRange, {
          props: {
            shape: 'square',
            modelValue: 0
          }
        })

        expect(wrapper.find('.rounded-none').exists()).toBe(true)
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        wrapper = mount(VkRange, {
          props: {
            size: 'xs',
            modelValue: 0
          }
        })

        expect(wrapper.find('.h-2').exists()).toBe(true)
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkRange, {
          props: {
            size: 'sm',
            modelValue: 0
          }
        })

        expect(wrapper.find('.vk-range__progress').classes()).toContain('h-2.5')
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkRange, {
          props: {
            size: 'md',
            modelValue: 0
          }
        })

        expect(wrapper.find('.h-3').exists()).toBe(true)
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkRange, {
          props: {
            size: 'lg',
            modelValue: 0
          }
        })

        expect(wrapper.find('.vk-range__progress').classes()).toContain('h-3.5')
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.variant is filled', () => {
        wrapper = mount(VkRange, {
          props: {
            variant: 'filled',
            modelValue: 0
          }
        })

        expect(wrapper.find('.bg-light-3').exists()).toBe(true)
      })

      it('should be outlined when props.variant is outlined', () => {
        wrapper = mount(VkRange, {
          props: {
            variant: 'outlined',
            modelValue: 0
          }
        })

        expect(wrapper.find('.border-2').exists()).toBe(true)
      })

      it('should be ghost when props.variant is ghost', () => {
        wrapper = mount(VkRange, {
          props: {
            variant: 'ghost',
            modelValue: 0
          }
        })

        expect(wrapper.find('.vk-range__progress').classes()).toContain('bg-light-3/[.5]')
      })

      it('should be gradient when props.variant is gradient', () => {
        wrapper = mount(VkRange, {
          props: {
            variant: 'gradient',
            modelValue: 0
          }
        })

        expect(wrapper.find('.bg-gradient-to-br').exists()).toBe(true)
      })
    })

    describe('When isrange prop changes', () => {
      it('should have one thumb when props.isrange is false', async () => {
        const wrapper = mount(VkRange, {
          props: {
            modelValue: 0,
            isRange: false
          }
        })

        const thumbs = wrapper.findAll('.vk-range__thumb')

        expect(thumbs.length).toBe(1)
      })

      it('should have two thumbs when props.isrange is true', async () => {
        const wrapper = mount(VkRange, {
          props: {
            modelValue: 0,
            isRange: true
          }
        })

        const thumbs = wrapper.findAll('.vk-range__thumb')

        expect(thumbs.length).toBe(2)
      })

      it('should modelvalue be only one number when props.isrange is false', async () => {
        const wrapper = mount(VkRange, {
          props: {
            modelValue: 0,
            isRange: false
          }
        })

        expect(wrapper.props('modelValue')).toBe(0)
      })

      it('should modelvalue be an array of two numbers when props.isrange is true', async () => {
        const wrapper = mount(VkRange, {
          props: {
            modelValue: [0, 50],
            isRange: false
          }
        })

        expect(wrapper.props('modelValue')).toStrictEqual([0, 50])
      })
    })
  })

  describe('Emits', () => {
    it('should emit update:modelValue event on thumb drag', async () => {
      const wrapper = mount(VkRange, {
        props: {
          modelValue: 0
        }
      })

      const thumbs = wrapper.findAll('.vk-range__thumb')
      const firstThumb = thumbs[0]
      firstThumb.trigger('mousedown', { clientX: 50 })
      firstThumb.trigger('mousemove', { clientX: 100 })
      firstThumb.trigger('mouseup')
      await wrapper.vm.$nextTick()

      expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    })
  })
})
