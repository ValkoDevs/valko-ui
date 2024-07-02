import { VueWrapper, mount } from '@vue/test-utils'
import VkCheckbox from '#valkoui/components/Checkbox.vue'

describe('Checkbox component', () => {
  let wrapper: VueWrapper
  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkCheckbox, {})
      })

      it('should render', () => {
        expect(wrapper.find('.vk-checkbox__container').exists()).toBe(true)
      })

      it('should be color primary', () => {
        expect(wrapper.find('.vk-checkbox__checkbox').classes()).toContain('data-[checked=true]:bg-primary-500')
      })

      it('should be size md', () => {
        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.vk-checkbox__checkbox').classes()).toContain('data-[checked=true]:bg-primary-500')
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.rounded').exists()).toBe(true)
      })

      it('should have label on left', () => {
        expect(wrapper.find('.ml-2').exists()).toBe(true)
      })

      it('should not be flat', () => {
        expect(wrapper.find('.shadow-none').exists()).toBe(false)
      })

      it('should not be disabled', () => {
        expect(wrapper.find('.cursor-not-allowed').exists()).toBe(false)
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', () => {
        wrapper = mount(VkCheckbox, {
          props: {
            color: 'primary'
          }
        })

        expect(wrapper.find('.vk-checkbox__checkbox').classes()).toContain('data-[checked=true]:bg-primary-500')
      })

      it('should be color neutral when props.color is neutral', () => {
        wrapper = mount(VkCheckbox, {
          props: {
            color: 'neutral'
          }
        })

        expect(wrapper.find('.vk-checkbox__checkbox').classes()).toContain('data-[checked=true]:bg-light-4')
      })

      it('should be color success when props.color is success', () => {
        wrapper = mount(VkCheckbox, {
          props: {
            color: 'success'
          }
        })

        expect(wrapper.find('.vk-checkbox__checkbox').classes()).toContain('data-[checked=true]:bg-success-500')
      })

      it('should be color info when props.color is info', () => {
        wrapper = mount(VkCheckbox, {
          props: {
            color: 'info'
          }
        })

        expect(wrapper.find('.vk-checkbox__checkbox').classes()).toContain('data-[checked=true]:bg-info-500')
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkCheckbox, {
          props: {
            color: 'warning'
          }
        })

        expect(wrapper.find('.vk-checkbox__checkbox').classes()).toContain('data-[checked=true]:bg-warning-500')
      })

      it('should be color error when props.color is error', () => {
        wrapper = mount(VkCheckbox, {
          props: {
            color: 'error'
          }
        })

        expect(wrapper.find('.vk-checkbox__checkbox').classes()).toContain('data-[checked=true]:bg-error-500')
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkCheckbox, {
          props: {
            shape: 'rounded'
          }
        })

        expect(wrapper.find('.rounded-full').exists()).toBe(true)
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkCheckbox, {
          props: {
            shape: 'soft'
          }
        })

        expect(wrapper.find('.rounded').exists()).toBe(true)
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkCheckbox, {
          props: {
            shape: 'square'
          }
        })

        expect(wrapper.find('.rounded-none').exists()).toBe(true)
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        wrapper = mount(VkCheckbox, {
          props: {
            size: 'xs'
          }
        })

        expect(wrapper.find('.text-xs').exists()).toBe(true)
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkCheckbox, {
          props: {
            size: 'sm'
          }
        })

        expect(wrapper.find('.text-sm').exists()).toBe(true)
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkCheckbox, {
          props: {
            size: 'md'
          }
        })

        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkCheckbox, {
          props: {
            size: 'lg'
          }
        })

        expect(wrapper.find('.text-lg').exists()).toBe(true)
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.variant is filled', () => {
        wrapper = mount(VkCheckbox, {
          props: {
            variant: 'filled'
          }
        })

        expect(wrapper.find('.vk-checkbox__checkbox').classes()).toContain('data-[checked=true]:bg-primary-500')
      })

      it('should be outlined when props.variant is outlined', () => {
        wrapper = mount(VkCheckbox, {
          props: {
            variant: 'outlined'
          }
        })

        expect(wrapper.find('.vk-checkbox__checkbox').classes()).toContain('data-[checked=true]:border-primary-500')
      })

      it('should be ghost when props.variant is ghost', () => {
        wrapper = mount(VkCheckbox, {
          props: {
            variant: 'ghost'
          }
        })

        expect(wrapper.find('.border-0')).toBeDefined()
      })
    })
  })

  describe('Icon', () => {
    it('should show check icon as default', () => {
      wrapper = mount(VkCheckbox, {
        props: {
          modelValue: true
        }
      })

      expect(wrapper.find('i.ti.ti-check').exists()).toBe(true)
    })

    it('should show indeterminate icon', () => {
      wrapper = mount(VkCheckbox, {
        props: {
          indeterminate: true
        }
      })

      expect(wrapper.find('i.ti.ti-minus').exists()).toBe(true)
    })
  })

  describe('Helpertext', () => {
    it('should be empty', () => {
      const wrapper = mount(VkCheckbox, {})

      expect(wrapper.find('span').exists()).toBe(false)
    })

    it('should have a helpertext', () => {
      const wrapper = mount(VkCheckbox, {
        props: {
          helpertext: 'Hello World'
        }
      })

      expect(wrapper.find('.inline-block').text()).toContain('Hello World')
    })
  })

  describe('Emits', () => {
    it('should emit update event', () => {
      const wrapper = mount(VkCheckbox, {})

      wrapper.find('.vk-checkbox__container').trigger('click')
      expect(wrapper.emitted('update:modelValue'))
    })
  })
})
