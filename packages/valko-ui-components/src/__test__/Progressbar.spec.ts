import { VueWrapper, mount } from '@vue/test-utils'
import VkProgressbar from '#valkoui/components/Progressbar.vue'

vi.mock('#valkoui/img/diagonal-stripes.svg', () => ({
  default: '/img/diagonal-stripes.svg'
}))

describe('Progressbar component', () => {
  let wrapper: VueWrapper
  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkProgressbar, {})
      })

      it('should render', () => {
        expect(wrapper.find('.vk-progressbar__container').exists()).toBe(true)
      })

      it('should be color primary', () => {
        expect(wrapper.find('.bg-primary').exists()).toBe(true)
      })

      it('should be size md', () => {
        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.bg-surface-container-lowest').exists()).toBe(true)
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.rounded-lg').exists()).toBe(true)
      })

      it('should not be indeterminate', () => {
        expect(wrapper.find('.animate-progress').exists()).toBe(false)
      })

      it('should not be striped', () => {
        expect(wrapper.find('.animate-cicle').exists()).toBe(false)
      })

      it('should not have buffer', () => {
        expect(wrapper.find('.vk-progressbar__buffer').exists()).toBe(false)
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', () => {
        wrapper = mount(VkProgressbar, {
          props: {
            color: 'primary'
          }
        })

        expect(wrapper.find('.bg-primary').exists()).toBe(true)
      })

      it('should be color secondary when props.color is secondary', () => {
        wrapper = mount(VkProgressbar, {
          props: {
            color: 'secondary'
          }
        })

        expect(wrapper.find('.bg-secondary').exists()).toBe(true)
      })

      it('should be color positive when props.color is positive', () => {
        wrapper = mount(VkProgressbar, {
          props: {
            color: 'positive'
          }
        })

        expect(wrapper.find('.bg-positive').exists()).toBe(true)
      })

      it('should be color accent when props.color is accent', () => {
        wrapper = mount(VkProgressbar, {
          props: {
            color: 'accent'
          }
        })

        expect(wrapper.find('.bg-accent').exists()).toBe(true)
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkProgressbar, {
          props: {
            color: 'warning'
          }
        })

        expect(wrapper.find('.bg-warning').exists()).toBe(true)
      })

      it('should be color negative when props.color is negative', () => {
        wrapper = mount(VkProgressbar, {
          props: {
            color: 'negative'
          }
        })

        expect(wrapper.find('.bg-negative').exists()).toBe(true)
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkProgressbar, {
          props: {
            shape: 'rounded'
          }
        })

        expect(wrapper.find('.rounded-full').exists()).toBe(true)
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkProgressbar, {
          props: {
            shape: 'soft'
          }
        })

        expect(wrapper.find('.rounded-lg').exists()).toBe(true)
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkProgressbar, {
          props: {
            shape: 'square'
          }
        })

        expect(wrapper.find('.rounded-none').exists()).toBe(true)
      })

      it('should be line when props.shape is line', () => {
        wrapper = mount(VkProgressbar, {
          props: {
            shape: 'line'
          }
        })

        expect(wrapper.find('.hidden').exists()).toBe(true)
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        wrapper = mount(VkProgressbar, {
          props: {
            size: 'xs'
          }
        })

        expect(wrapper.find('.text-xs').exists()).toBe(true)
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkProgressbar, {
          props: {
            size: 'sm'
          }
        })

        expect(wrapper.find('.text-sm').exists()).toBe(true)
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkProgressbar, {
          props: {
            size: 'md'
          }
        })

        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkProgressbar, {
          props: {
            size: 'lg'
          }
        })

        expect(wrapper.find('.text-lg').exists()).toBe(true)
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.variant is filled', () => {
        wrapper = mount(VkProgressbar, {
          props: {
            variant: 'filled'
          }
        })

        expect(wrapper.find('.bg-surface-container-lowest').exists()).toBe(true)
      })

      it('should be outlined when props.variant is outlined', () => {
        wrapper = mount(VkProgressbar, {
          props: {
            variant: 'outlined'
          }
        })

        expect(wrapper.find('.border-2').exists()).toBe(true)
      })

      it('should be ghost when props.variant is ghost', () => {
        wrapper = mount(VkProgressbar, {
          props: {
            variant: 'ghost'
          }
        })

        expect(wrapper.find('.bg-transparent').exists()).toBe(true)
      })

      it('should be gradient when props.variant is gradient', () => {
        wrapper = mount(VkProgressbar, {
          props: {
            variant: 'gradient'
          }
        })

        expect(wrapper.find('.bg-gradient-to-br').exists()).toBe(true)
      })
    })

    describe('When buffer prop changes', () => {
      it('should have buffer when props.buffer is set', () => {
        wrapper = mount(VkProgressbar, {
          props: {
            buffer: 20
          }
        })

        expect(wrapper.find('.vk-progressbar__buffer').exists()).toBe(true)
      })

      it('should not have buffer when props.buffer is not set', () => {
        wrapper = mount(VkProgressbar, {})

        expect(wrapper.find('.vk-progressbar__buffer').exists()).toBe(false)
      })

      it('should not show buffer when props.buffer is 0', () => {
        const wrapper = mount(VkProgressbar, {
          props: {
            buffer: 0
          }
        })

        expect(wrapper.find('.vk-progressbar__buffer').exists()).toBe(false)
      })

      it('should not show buffer when props.indeterminate is true', () => {
        const wrapper = mount(VkProgressbar, {
          props: {
            buffer: 50,
            indeterminate: true
          }
        })

        expect(wrapper.find('.vk-progressbar__buffer').exists()).toBe(false)
      })

      it('should apply the correct buffer style when props.buffer is set and indeterminate is false', () => {
        const wrapper = mount(VkProgressbar, {
          props: {
            buffer: 75,
            ndeterminate: false
          }
        })

        const progress = wrapper.find('.vk-progressbar__buffer')
        expect(progress.attributes('style')).toContain('left: -25%')
      })

      it('should return an empty bufferStyles when indeterminate is true', () => {
        const wrapper = mount(VkProgressbar, {
          props: {
            indeterminate: true,
            buffer: 75
          }
        })
        const bufferStyle = (wrapper.vm as unknown as { bufferStyles: string }).bufferStyles

        expect(bufferStyle).toBe('')
      })
    })

    describe('When indeterminate prop changes', () => {
      it('should apply animation when props.indeterminate is true', () => {
        const wrapper = mount(VkProgressbar, {
          props: {
            indeterminate: true
          }
        })

        const progress = wrapper.find('.vk-progressbar__progress')
        expect(progress.classes()).toContain('animate-progress')
      })

      it('should apply left position when props.indeterminate is false', () => {
        const wrapper = mount(VkProgressbar, {
          props: {
            progress: 50,
            indeterminate: false
          }
        })

        const progress = wrapper.find('.vk-progressbar__progress')
        expect(progress.attributes('style')).toContain('left: -50%')
      })
    })

    describe('When striped prop changes', () => {
      it('should apply striped background when props.striped is true', () => {
        const wrapper = mount(VkProgressbar, {
          props: {
            striped: true
          }
        })

        const progress = wrapper.find('.vk-progressbar__progress')
        console.log(wrapper.html())
        expect(progress.attributes('style')).toContain('background-image')
      })
    })
  })

  describe('Slots', () => {
    it('should render content inside the slot', () => {
      const wrapper = mount(VkProgressbar, {
        slots: {
          default: '<div class="custom-content">Custom Content</div>'
        }
      })

      expect(wrapper.find('.custom-content').exists()).toBe(true)
    })

    it('should not render the slot if no content is provided', () => {
      const wrapper = mount(VkProgressbar, {})

      expect(wrapper.find('.vk-progressbar__content').html()).toContain('')
    })
  })
})
