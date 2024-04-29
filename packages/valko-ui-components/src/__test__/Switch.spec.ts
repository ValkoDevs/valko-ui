import { VueWrapper, mount } from '@vue/test-utils'
import { VkSwitch } from '#valkoui'

describe('Switch component', () => {
  let wrapper: VueWrapper

  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkSwitch, {})
      })

      it('should render', () => {
        expect(wrapper.find('.vk-switch__container')).toBeDefined()
      })

      it('should be color primary', () => {
        expect(wrapper.find('.bg-primary-500')).toBeDefined()
      })

      it('should be size md', () => {
        expect(wrapper.find('.text-base')).toBeDefined()
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.bg-light-4')).toBeDefined()
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.rounded')).toBeDefined()
      })

      it('should have label', () => {
        expect(wrapper.find('.vk-switch__label').text()).toContain('Switch')
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', () => {
        wrapper = mount(VkSwitch, {
          props: {
            color: 'primary'
          }
        })

        expect(wrapper.find('.bg-primary-500')).toBeDefined()
      })

      it('should be color secondary when props.color is secondary', () => {
        wrapper = mount(VkSwitch, {
          props: {
            color: 'secondary'
          }
        })

        expect(wrapper.find('.bg-secondary-500')).toBeDefined()
      })

      it('should be color success when props.color is success', () => {
        wrapper = mount(VkSwitch, {
          props: {
            color: 'success'
          }
        })

        expect(wrapper.find('.bg-success-500')).toBeDefined()
      })

      it('should be color info when props.color is info', () => {
        wrapper = mount(VkSwitch, {
          props: {
            color: 'info'
          }
        })

        expect(wrapper.find('.bg-info-500')).toBeDefined()
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkSwitch, {
          props: {
            color: 'warning'
          }
        })

        expect(wrapper.find('.bg-warning-500')).toBeDefined()
      })

      it('should be color error when props.color is error', () => {
        wrapper = mount(VkSwitch, {
          props: {
            color: 'error'
          }
        })

        expect(wrapper.find('.bg-error-500')).toBeDefined()
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkSwitch, {
          props: {
            shape: 'rounded'
          }
        })

        expect(wrapper.find('.rounded-full')).toBeDefined()
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkSwitch, {
          props: {
            shape: 'soft'
          }
        })

        expect(wrapper.find('.rounded')).toBeDefined()
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkSwitch, {
          props: {
            shape: 'square'
          }
        })

        expect(wrapper.find('.rounded-none')).toBeDefined()
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        wrapper = mount(VkSwitch, {
          props: {
            size: 'xs'
          }
        })

        expect(wrapper.find('.text-xs')).toBeDefined()
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkSwitch, {
          props: {
            size: 'sm'
          }
        })

        expect(wrapper.find('.text-sm')).toBeDefined()
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkSwitch, {
          props: {
            size: 'md'
          }
        })

        expect(wrapper.find('.text-base')).toBeDefined()
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkSwitch, {
          props: {
            size: 'lg'
          }
        })

        expect(wrapper.find('.text-lg')).toBeDefined()
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.size is filled', () => {
        wrapper = mount(VkSwitch, {
          props: {
            variant: 'filled'
          }
        })

        expect(wrapper.find('.text-white')).toBeDefined()
      })

      it('should be outlined when props.size is outlined', () => {
        wrapper = mount(VkSwitch, {
          props: {
            variant: 'outlined'
          }
        })

        expect(wrapper.find('.border-2')).toBeDefined()
      })

      it('should be ghost when props.size is ghost', () => {
        wrapper = mount(VkSwitch, {
          props: {
            variant: 'ghost'
          }
        })

        expect(wrapper.find('.bg-transparent')).toBeDefined()
      })
    })

    describe('When label prop changes', () => {
      it('should show label when props.label is set', () => {
        wrapper = mount(VkSwitch, {
          props: {
            label: 'Hello World'
          }
        })

        expect(wrapper.find('.vk-switch__label').text()).toContain('Hello World')
      })

      it('should not render when props.label is empty', () => {
        wrapper = mount(VkSwitch, {
          props: {
            label: ''
          }
        })

        expect(wrapper.find('.vk-switch__label').exists()).toBe(false)
      })
    })
  })

  describe('Emits', () => {
    it('should emit update event', () => {
      const wrapper = mount(VkSwitch, {})

      wrapper.find('.cursor-pointer').trigger('click')
      expect(wrapper.emitted('update:modelValue'))
    })
  })
})
