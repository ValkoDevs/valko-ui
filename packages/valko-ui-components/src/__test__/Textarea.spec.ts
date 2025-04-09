import { VueWrapper, mount } from '@vue/test-utils'
import VkTextarea from '#valkoui/components/Textarea.vue'

describe('Textarea component', () => {
  let wrapper: VueWrapper
  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkTextarea, {})
      })

      it('should render', () => {
        expect(wrapper.find('.vk-textarea__container').exists()).toBe(true)
      })

      it('should be color primary', () => {
        expect(wrapper.find('.text-dark-700').exists()).toBe(true)
      })

      it('should be size md', () => {
        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.bg-light-200').exists()).toBe(true)
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.rounded-t-lg').exists()).toBe(true)
      })

      it('should be type text', () => {
        expect(wrapper.find('.vk-textarea__container').exists()).toBe(true)
      })

      it('should not be disabled', () => {
        expect(wrapper.find('.cursor-not-allowed').exists()).toBe(false)
      })

      it('should not have label', () => {
        expect(wrapper.find('.font-bold').text()).toContain('')
      })

      it('should not have helpertext', () => {
        expect(wrapper.find('.vk-textarea__helper').exists()).toBe(false)
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', () => {
        wrapper = mount(VkTextarea, {
          props: {
            color: 'primary'
          }
        })

        expect(wrapper.find('.text-dark-700').exists()).toBe(true)
      })

      it('should be color neutral when props.color is neutral', () => {
        wrapper = mount(VkTextarea, {
          props: {
            color: 'neutral'
          }
        })

        expect(wrapper.find('.text-dark-600').exists()).toBe(true)
      })

      it('should be color success when props.color is success', () => {
        wrapper = mount(VkTextarea, {
          props: {
            color: 'success'
          }
        })

        expect(wrapper.find('.text-success-500').exists()).toBe(true)
      })

      it('should be color info when props.color is info', () => {
        wrapper = mount(VkTextarea, {
          props: {
            color: 'info'
          }
        })

        expect(wrapper.find('.text-info-500').exists()).toBe(true)
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkTextarea, {
          props: {
            color: 'warning'
          }
        })

        expect(wrapper.find('.text-warning-500').exists()).toBe(true)
      })

      it('should be color error when props.color is error', () => {
        wrapper = mount(VkTextarea, {
          props: {
            color: 'error'
          }
        })

        expect(wrapper.find('.text-error-500').exists()).toBe(true)
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkTextarea, {
          props: {
            shape: 'rounded'
          }
        })

        expect(wrapper.find('.rounded-xl').exists()).toBe(true)
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkTextarea, {
          props: {
            shape: 'soft'
          }
        })

        expect(wrapper.find('.rounded-t-lg').exists()).toBe(true)
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkTextarea, {
          props: {
            shape: 'square'
          }
        })

        expect(wrapper.find('.rounded-none').exists()).toBe(true)
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        wrapper = mount(VkTextarea, {
          props: {
            size: 'xs'
          }
        })

        expect(wrapper.find('.text-xs').exists()).toBe(true)
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkTextarea, {
          props: {
            size: 'sm'
          }
        })

        expect(wrapper.find('.text-sm').exists()).toBe(true)
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkTextarea, {
          props: {
            size: 'md'
          }
        })

        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkTextarea, {
          props: {
            size: 'lg'
          }
        })

        expect(wrapper.find('.text-lg').exists()).toBe(true)
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.variant is filled', () => {
        wrapper = mount(VkTextarea, {
          props: {
            variant: 'filled'
          }
        })

        expect(wrapper.find('.border-b-2').exists()).toBe(true)
      })

      it('should be outlined when props.variant is outlined', () => {
        wrapper = mount(VkTextarea, {
          props: {
            variant: 'outlined'
          }
        })

        expect(wrapper.find('.border-2').exists()).toBe(true)
      })

      it('should be ghost when props.variant is ghost', () => {
        wrapper = mount(VkTextarea, {
          props: {
            variant: 'ghost'
          }
        })

        expect(wrapper.find('.bg-inherit').exists()).toBe(true)
      })
    })
  })

  describe('Counter', () => {
    it('should show counter when props.maxlenght is set', () => {
      wrapper = mount(VkTextarea, {
        props: {
          maxlength: 50
        }
      })

      expect(wrapper.find('.vk-textarea__counter').exists()).toBe(true)
    })
  })

  describe('Helpertext', () => {
    it('should not show when props.helpertext is not set', () => {
      wrapper = mount(VkTextarea, {})

      expect(wrapper.find('.vk-textarea__helper').exists()).toBe(false)
    })

    it('should show helpertext when props.helpertext is set', () => {
      wrapper = mount(VkTextarea, {
        props: {
          helpertext: 'Hello World'
        }
      })

      expect(wrapper.find('.vk-textarea__helper').exists()).toBe(true)
    })
  })

  describe('Emits', () => {
    it('should emit focus event', () => {
      const wrapper = mount(VkTextarea, {})

      wrapper.find('.vk-textarea__textarea').trigger('input')
      expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    })
  })
})
