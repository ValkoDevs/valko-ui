import { VueWrapper, mount } from '@vue/test-utils'
import { VkProgressbar } from '#valkoui'

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
        expect(wrapper.find('.bg-primary-500').exists()).toBe(true)
      })

      it('should be size md', () => {
        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.bg-light-3').exists()).toBe(true)
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

        expect(wrapper.find('.bg-primary-500').exists()).toBe(true)
      })

      it('should be color secondary when props.color is secondary', () => {
        wrapper = mount(VkProgressbar, {
          props: {
            color: 'secondary'
          }
        })

        expect(wrapper.find('.bg-secondary-500').exists()).toBe(true)
      })

      it('should be color success when props.color is success', () => {
        wrapper = mount(VkProgressbar, {
          props: {
            color: 'success'
          }
        })

        expect(wrapper.find('.bg-success-500').exists()).toBe(true)
      })

      it('should be color info when props.color is info', () => {
        wrapper = mount(VkProgressbar, {
          props: {
            color: 'info'
          }
        })

        expect(wrapper.find('.bg-info-500').exists()).toBe(true)
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkProgressbar, {
          props: {
            color: 'warning'
          }
        })

        expect(wrapper.find('.bg-warning-500').exists()).toBe(true)
      })

      it('should be color error when props.color is error', () => {
        wrapper = mount(VkProgressbar, {
          props: {
            color: 'error'
          }
        })

        expect(wrapper.find('.bg-error-500').exists()).toBe(true)
      })

      it('should be color light when props.color is light', () => {
        wrapper = mount(VkProgressbar, {
          props: {
            color: 'light'
          }
        })

        expect(wrapper.find('.bg-light-1').exists()).toBe(true)
      })

      it('should be color dark when props.color is dark', () => {
        wrapper = mount(VkProgressbar, {
          props: {
            color: 'dark'
          }
        })

        expect(wrapper.find('.bg-dark-5').exists()).toBe(true)
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
      it('should be filled when props.size is filled', () => {
        wrapper = mount(VkProgressbar, {
          props: {
            variant: 'filled'
          }
        })

        expect(wrapper.find('.bg-light-3').exists()).toBe(true)
      })

      it('should be outlined when props.size is outlined', () => {
        wrapper = mount(VkProgressbar, {
          props: {
            variant: 'outlined'
          }
        })

        expect(wrapper.find('.border-2').exists()).toBe(true)
      })

      it('should be ghost when props.size is ghost', () => {
        wrapper = mount(VkProgressbar, {
          props: {
            variant: 'ghost'
          }
        })

        expect(wrapper.find('.bg-transparent').exists()).toBe(true)
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
    })
  })
})
