import { nextTick } from 'vue'
import { VueWrapper, mount } from '@vue/test-utils'
import { VkSelect } from '.'

describe('Select component', () => {
  const options = [
    { value: 1, label: 'Wade Cooper' },
    { value: 2, label: 'Arlene Mccoy' },
    { value: 3, label: 'Devon Webb' },
    { value: 4, label: 'Tom Cook' }
  ]
  let wrapper: VueWrapper
  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkSelect, {
          props: {
            options
          }
        })
        wrapper.find('.vk-input__input').trigger('focus')
      })

      it('should render', () => {
        expect(wrapper.find('.vk-select__container').exists()).toBe(true)
      })

      it('should be color primary', () => {
        expect(wrapper.find('.vk-select__item').classes()).toContain('data-[variant=filled]:data-[selected=true]:bg-primary-500')
      })

      it('should be size md', () => {
        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.rounded-t-lg').exists()).toBe(true)
      })

      it('should be type text', () => {
        expect(wrapper.find('.vk-select__container').exists()).toBe(true)
      })

      it('should show options when focused', () => {
        expect(wrapper.find('.vk-select__item').exists()).toBe(true)
      })

      it('should not be disabled', () => {
        expect(wrapper.find('.cursor-not-allowed').exists()).toBe(false)
      })

      it('should not have label', () => {
        expect(wrapper.find('.font-bold').text()).toContain('')
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', async () => {
        wrapper = mount(VkSelect, {
          props: {
            color: 'primary',
            options
          }
        })

        wrapper.find('.vk-input__input').trigger('focus')
        await nextTick()
        expect(wrapper.find('.vk-select__item').classes()).toContain('data-[variant=filled]:data-[selected=true]:bg-primary-500')
      })

      it('should be color secondary when props.color is secondary', async () => {
        wrapper = mount(VkSelect, {
          props: {
            color: 'secondary',
            options
          }
        })

        wrapper.find('.vk-input__input').trigger('focus')
        await nextTick()
        expect(wrapper.find('.vk-select__item').classes()).toContain('data-[variant=filled]:data-[selected=true]:bg-secondary-500')
      })

      it('should be color success when props.color is success', async () => {
        wrapper = mount(VkSelect, {
          props: {
            color: 'success',
            options
          }
        })

        wrapper.find('.vk-input__input').trigger('focus')
        await nextTick()
        expect(wrapper.find('.vk-select__item').classes()).toContain('data-[variant=filled]:data-[selected=true]:bg-success-500')
      })

      it('should be color info when props.color is info', async () => {
        wrapper = mount(VkSelect, {
          props: {
            color: 'info',
            options
          }
        })

        wrapper.find('.vk-input__input').trigger('focus')
        await nextTick()
        expect(wrapper.find('.vk-select__item').classes()).toContain('data-[variant=filled]:data-[selected=true]:bg-info-500')
      })

      it('should be color warning when props.color is warning', async () => {
        wrapper = mount(VkSelect, {
          props: {
            color: 'warning',
            options
          }
        })

        wrapper.find('.vk-input__input').trigger('focus')
        await nextTick()
        expect(wrapper.find('.vk-select__item').classes()).toContain('data-[variant=filled]:data-[selected=true]:bg-warning-500')
      })

      it('should be color error when props.color is error', async () => {
        wrapper = mount(VkSelect, {
          props: {
            color: 'error',
            options
          }
        })

        wrapper.find('.vk-input__input').trigger('focus')
        await nextTick()
        expect(wrapper.find('.vk-select__item').classes()).toContain('data-[variant=filled]:data-[selected=true]:bg-error-500')
      })

      it('should be color light when props.color is light', async () => {
        wrapper = mount(VkSelect, {
          props: {
            color: 'light',
            options
          }
        })

        wrapper.find('.vk-input__input').trigger('focus')
        await nextTick()
        expect(wrapper.find('.vk-select__item').classes()).toContain('data-[variant=filled]:data-[selected=true]:bg-light-1')
      })

      it('should be color dark when props.color is dark', async () => {
        wrapper = mount(VkSelect, {
          props: {
            color: 'dark',
            options
          }
        })

        wrapper.find('.vk-input__input').trigger('focus')
        await nextTick()
        expect(wrapper.find('.vk-select__item').classes()).toContain('data-[variant=filled]:data-[selected=true]:bg-dark-5')
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkSelect, {
          props: {
            shape: 'rounded'
          }
        })

        expect(wrapper.find('.rounded-full').exists()).toBe(true)
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkSelect, {
          props: {
            shape: 'soft'
          }
        })

        expect(wrapper.find('.rounded-t-lg').exists()).toBe(true)
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkSelect, {
          props: {
            shape: 'square'
          }
        })

        expect(wrapper.find('.rounded-none').exists()).toBe(true)
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        wrapper = mount(VkSelect, {
          props: {
            size: 'xs'
          }
        })

        expect(wrapper.find('.text-xs').exists()).toBe(true)
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkSelect, {
          props: {
            size: 'sm'
          }
        })

        expect(wrapper.find('.text-sm').exists()).toBe(true)
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkSelect, {
          props: {
            size: 'md'
          }
        })

        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkSelect, {
          props: {
            size: 'lg'
          }
        })

        expect(wrapper.find('.text-lg').exists()).toBe(true)
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.size is filled', () => {
        wrapper = mount(VkSelect, {
          props: {
            variant: 'filled'
          }
        })

        expect(wrapper.find('.border-b-2').exists()).toBe(true)
      })

      it('should be outlined when props.size is outlined', () => {
        wrapper = mount(VkSelect, {
          props: {
            variant: 'outlined'
          }
        })

        expect(wrapper.find('.border-2').exists()).toBe(true)
      })

      it('should be ghost when props.size is ghost', () => {
        wrapper = mount(VkSelect, {
          props: {
            variant: 'ghost'
          }
        })

        expect(wrapper.find('.bg-inherit').exists()).toBe(true)
      })
    })
  })

  describe('Helpertext', () => {
    it('should not show when props.helpertext is not set', () => {
      wrapper = mount(VkSelect, {})

      expect(wrapper.find('span').text()).toContain('')
    })

    it('should show when props.helpertext is set', () => {
      wrapper = mount(VkSelect, {
        props: {
          helpertext: 'Hello World'
        }
      })

      expect(wrapper.find('.mt-1').text()).toContain('Hello World')
    })
  })

  describe('Emits', () => {
    it('should emit update event', async () => {
      const wrapper = mount(VkSelect, {
        props: {
          options
        }
      })
      wrapper.find('.vk-input__input').trigger('focus')
      await nextTick()
      wrapper.find('.vk-select__item').trigger('click')
      expect(wrapper.emitted('update:modelValue'))
    })
  })
})
