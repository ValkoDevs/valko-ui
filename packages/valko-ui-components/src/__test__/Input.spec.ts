import { nextTick } from 'vue'
import { VueWrapper, mount } from '@vue/test-utils'
import VkInput from '#valkoui/components/Input.vue'

describe('Input component', () => {
  let wrapper: VueWrapper
  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkInput, {})
      })

      it('should render', () => {
        expect(wrapper.find('.vk-input__container').exists()).toBe(true)
      })

      it('should be color primary', () => {
        expect(wrapper.find('.text-dark-2').exists()).toBe(true)
      })

      it('should be size md', () => {
        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.bg-light-3').exists()).toBe(true)
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.rounded-t-lg').exists()).toBe(true)
      })

      it('should be type text', () => {
        expect(wrapper.find('.vk-input__container').exists()).toBe(true)
      })

      it('should not be disabled', () => {
        expect(wrapper.find('.cursor-not-allowed').exists()).toBe(false)
      })

      it('should not have label', () => {
        expect(wrapper.find('.font-bold').text()).toContain('')
      })

      it('should not have helpertext', () => {
        expect(wrapper.find('vk-input__helper').exists()).toBe(false)
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', () => {
        wrapper = mount(VkInput, {
          props: {
            color: 'primary'
          }
        })

        expect(wrapper.find('.text-dark-2').exists()).toBe(true)
      })

      it('should be color neutral when props.color is neutral', () => {
        wrapper = mount(VkInput, {
          props: {
            color: 'neutral'
          }
        })

        expect(wrapper.find('.text-dark-1').exists()).toBe(true)
      })

      it('should be color success when props.color is success', () => {
        wrapper = mount(VkInput, {
          props: {
            color: 'success'
          }
        })

        expect(wrapper.find('.text-success-500').exists()).toBe(true)
      })

      it('should be color info when props.color is info', () => {
        wrapper = mount(VkInput, {
          props: {
            color: 'info'
          }
        })

        expect(wrapper.find('.text-info-500').exists()).toBe(true)
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkInput, {
          props: {
            color: 'warning'
          }
        })

        expect(wrapper.find('.text-warning-500').exists()).toBe(true)
      })

      it('should be color error when props.color is error', () => {
        wrapper = mount(VkInput, {
          props: {
            color: 'error'
          }
        })

        expect(wrapper.find('.text-error-500').exists()).toBe(true)
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkInput, {
          props: {
            shape: 'rounded'
          }
        })

        expect(wrapper.find('.rounded-full').exists()).toBe(true)
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkInput, {
          props: {
            shape: 'soft'
          }
        })

        expect(wrapper.find('.rounded-t-lg').exists()).toBe(true)
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkInput, {
          props: {
            shape: 'square'
          }
        })

        expect(wrapper.find('.rounded-none').exists()).toBe(true)
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        wrapper = mount(VkInput, {
          props: {
            size: 'xs'
          }
        })

        expect(wrapper.find('.text-xs').exists()).toBe(true)
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkInput, {
          props: {
            size: 'sm'
          }
        })

        expect(wrapper.find('.text-sm').exists()).toBe(true)
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkInput, {
          props: {
            size: 'md'
          }
        })

        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkInput, {
          props: {
            size: 'lg'
          }
        })

        expect(wrapper.find('.text-lg').exists()).toBe(true)
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.variant is filled', () => {
        wrapper = mount(VkInput, {
          props: {
            variant: 'filled'
          }
        })

        expect(wrapper.find('.border-b-2').exists()).toBe(true)
      })

      it('should be outlined when props.variant is outlined', () => {
        wrapper = mount(VkInput, {
          props: {
            variant: 'outlined'
          }
        })

        expect(wrapper.find('.border-2').exists()).toBe(true)
      })

      it('should be ghost when props.variant is ghost', () => {
        wrapper = mount(VkInput, {
          props: {
            variant: 'ghost'
          }
        })

        expect(wrapper.find('.bg-inherit').exists()).toBe(true)
      })
    })
  })

  describe('Slots', () => {
    it('Should render leftIcon when slot leftIcon is set', () => {
      wrapper = mount(VkInput, {
        slots: {
          leftIcon: '<i class="ti ti-brand-vue"></i>'
        }
      })

      expect(wrapper.find('i.ti.ti-brand-vue').exists()).toBe(true)
    })

    it('Should render rightIcon when slot rightIcon is set', () => {
      wrapper = mount(VkInput, {
        slots: {
          rightIcon: '<i class="ti ti-home"></i>'
        }
      })

      expect(wrapper.find('i.ti.ti-home').exists()).toBe(true)
    })

    it('should not render leftIcon when not provided', () => {
      const wrapper = mount(VkInput)

      expect(wrapper.find('.left-icon').exists()).toBe(false)
    })

    it('should not render rightIcon when not provided', () => {
      const wrapper = mount(VkInput)

      expect(wrapper.find('.right-icon').exists()).toBe(false)
    })
  })

  describe('Helpertext', () => {
    it('should not show when props.helpertext is not set', () => {
      wrapper = mount(VkInput, {})

      expect(wrapper.find('.vk-input__helper').exists()).toBe(false)
    })

    it('should show when props.helpertext is set', () => {
      wrapper = mount(VkInput, {
        props: {
          helpertext: 'Hello World'
        }
      })

      expect(wrapper.find('.vk-input__helper').text()).toContain('Hello World')
    })
  })

  describe('Emits', () => {
    it('should emit focus event', async () => {
      const wrapper = mount(VkInput, {})

      wrapper.find('.vk-input__input').trigger('focus')
      await nextTick()

      expect(wrapper.emitted()).toHaveProperty('focus')
    })

    it('should not emit focus event when disabled is true', async () => {
      const wrapper = mount(VkInput, {
        props: {
          disabled: true
        }
      })

      wrapper.find('.vk-input__input').trigger('focus')
      await nextTick()

      expect(wrapper.emitted()).not.toHaveProperty('focus')
    })
  })
})
