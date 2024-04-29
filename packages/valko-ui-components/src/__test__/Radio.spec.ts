import { VueWrapper, mount } from '@vue/test-utils'
import { VkRadio } from '#valkoui'

describe('Radio component', () => {
  let wrapper: VueWrapper
  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkRadio, {})
      })

      it('should render', () => {
        expect(wrapper.find('.vk-radio__container').exists()).toBe(true)
      })

      it('should be color primary', () => {
        expect(wrapper.find('.vk-radio__radio').classes()).toContain('data-[checked=true]:bg-primary-500')
      })

      it('should be size md', () => {
        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.vk-radio__radio').classes()).toContain('data-[checked=true]:bg-primary-500')
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.rounded').exists()).toBe(true)
      })

      it('should have label on left', () => {
        expect(wrapper.find('.ml-2').exists()).toBe(true)
      })

      it('Should not be selected', () => {
        expect(wrapper.find('.vk-radio__icon').exists()).toBe(false)
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
        wrapper = mount(VkRadio, {
          props: {
            color: 'primary'
          }
        })

        expect(wrapper.find('.vk-radio__radio').classes()).toContain('data-[checked=true]:bg-primary-500')
      })

      it('should be color secondary when props.color is secondary', () => {
        wrapper = mount(VkRadio, {
          props: {
            color: 'secondary'
          }
        })

        expect(wrapper.find('.vk-radio__radio').classes()).toContain('data-[checked=true]:bg-secondary-500')
      })

      it('should be color success when props.color is success', () => {
        wrapper = mount(VkRadio, {
          props: {
            color: 'success'
          }
        })

        expect(wrapper.find('.vk-radio__radio').classes()).toContain('data-[checked=true]:bg-success-500')
      })

      it('should be color info when props.color is info', () => {
        wrapper = mount(VkRadio, {
          props: {
            color: 'info'
          }
        })

        expect(wrapper.find('.vk-radio__radio').classes()).toContain('data-[checked=true]:bg-info-500')
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkRadio, {
          props: {
            color: 'warning'
          }
        })

        expect(wrapper.find('.vk-radio__radio').classes()).toContain('data-[checked=true]:bg-warning-500')
      })

      it('should be color error when props.color is error', () => {
        wrapper = mount(VkRadio, {
          props: {
            color: 'error'
          }
        })

        expect(wrapper.find('.vk-radio__radio').classes()).toContain('data-[checked=true]:bg-error-500')
      })

      it('should be color light when props.color is light', () => {
        wrapper = mount(VkRadio, {
          props: {
            color: 'light'
          }
        })

        expect(wrapper.find('.vk-radio__radio').classes()).toContain('data-[checked=true]:bg-light-1')
      })

      it('should be color dark when props.color is dark', () => {
        wrapper = mount(VkRadio, {
          props: {
            color: 'dark'
          }
        })

        expect(wrapper.find('.vk-radio__radio').classes()).toContain('data-[checked=true]:bg-dark-5')
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkRadio, {
          props: {
            shape: 'rounded'
          }
        })

        expect(wrapper.find('.rounded-full').exists()).toBe(true)
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkRadio, {
          props: {
            shape: 'soft'
          }
        })

        expect(wrapper.find('.rounded').exists()).toBe(true)
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkRadio, {
          props: {
            shape: 'square'
          }
        })

        expect(wrapper.find('.rounded-none').exists()).toBe(true)
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        wrapper = mount(VkRadio, {
          props: {
            size: 'xs'
          }
        })

        expect(wrapper.find('.text-xs').exists()).toBe(true)
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkRadio, {
          props: {
            size: 'sm'
          }
        })

        expect(wrapper.find('.text-sm').exists()).toBe(true)
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkRadio, {
          props: {
            size: 'md'
          }
        })

        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkRadio, {
          props: {
            size: 'lg'
          }
        })

        expect(wrapper.find('.text-lg').exists()).toBe(true)
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.size is filled', () => {
        wrapper = mount(VkRadio, {
          props: {
            variant: 'filled'
          }
        })

        expect(wrapper.find('.vk-radio__radio').classes()).toContain('data-[checked=true]:bg-primary-500')
      })

      it('should be outlined when props.size is outlined', () => {
        wrapper = mount(VkRadio, {
          props: {
            variant: 'outlined',
            modelValue: 'hello',
            value: 'hello'
          }
        })

        expect(wrapper.find('.text-primary-500').exists()).toBe(true)
      })

      it('should be ghost when props.size is ghost', () => {
        wrapper = mount(VkRadio, {
          props: {
            variant: 'ghost'
          }
        })

        expect(wrapper.find('.border-0').exists()).toBe(true)
      })
    })
  })

  describe('Helpertext', () => {
    it('should be empty', () => {
      const wrapper = mount(VkRadio, {})

      expect(wrapper.find('span').exists()).toBe(false)
    })

    it('should have a helpertext', () => {
      const wrapper = mount(VkRadio, {
        props: {
          helpertext: 'Hello World'
        }
      })

      expect(wrapper.find('.inline-block').text()).toContain('Hello World')
    })
  })

  describe('Emits', () => {
    it('should emit update event', () => {
      const wrapper = mount(VkRadio, {})

      wrapper.find('.vk-radio__container').trigger('click')
      expect(wrapper.emitted('update:modelValue'))
    })
  })
})
