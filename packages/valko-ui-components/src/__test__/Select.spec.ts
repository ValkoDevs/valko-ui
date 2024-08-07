import { nextTick, ref } from 'vue'
import { VueWrapper, mount } from '@vue/test-utils'
import VkSelect from '#valkoui/components/Select.vue'

describe('Select component', () => {
  const currentValue = ref<number | undefined>(undefined)
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
            options,
            modelValue: currentValue.value
          },
          emits: {
            'update:modelValue': (newValue: number | undefined) => currentValue.value = newValue
          }
        })
        wrapper.find('.vk-input__input').trigger('focus')
      })

      afterEach(() => {
        currentValue.value = undefined
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

      it('should change value when an option is clicked', () => {
        wrapper.find('.vk-select__item:first-child').trigger('click')
        expect(currentValue.value).toBe(1)
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', async () => {
        wrapper = mount(VkSelect, {
          props: {
            options,
            color: 'primary'
          }
        })

        wrapper.find('.vk-input__input').trigger('focus')
        await nextTick()
        expect(wrapper.find('.vk-select__item').classes()).toContain('data-[variant=filled]:data-[selected=true]:bg-primary-500')
      })

      it('should be color neutral when props.color is neutral', async () => {
        wrapper = mount(VkSelect, {
          props: {
            options,
            color: 'neutral'
          }
        })

        wrapper.find('.vk-input__input').trigger('focus')
        await nextTick()
        expect(wrapper.find('.vk-select__item').classes()).toContain('data-[variant=filled]:data-[selected=true]:bg-light-3')
      })

      it('should be color success when props.color is success', async () => {
        wrapper = mount(VkSelect, {
          props: {
            options,
            color: 'success'
          }
        })

        wrapper.find('.vk-input__input').trigger('focus')
        await nextTick()
        expect(wrapper.find('.vk-select__item').classes()).toContain('data-[variant=filled]:data-[selected=true]:bg-success-500')
      })

      it('should be color info when props.color is info', async () => {
        wrapper = mount(VkSelect, {
          props: {
            options,
            color: 'info'
          }
        })

        wrapper.find('.vk-input__input').trigger('focus')
        await nextTick()
        expect(wrapper.find('.vk-select__item').classes()).toContain('data-[variant=filled]:data-[selected=true]:bg-info-500')
      })

      it('should be color warning when props.color is warning', async () => {
        wrapper = mount(VkSelect, {
          props: {
            options,
            color: 'warning'
          }
        })

        wrapper.find('.vk-input__input').trigger('focus')
        await nextTick()
        expect(wrapper.find('.vk-select__item').classes()).toContain('data-[variant=filled]:data-[selected=true]:bg-warning-500')
      })

      it('should be color error when props.color is error', async () => {
        wrapper = mount(VkSelect, {
          props: {
            options,
            color: 'error'
          }
        })

        wrapper.find('.vk-input__input').trigger('focus')
        await nextTick()
        expect(wrapper.find('.vk-select__item').classes()).toContain('data-[variant=filled]:data-[selected=true]:bg-error-500')
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkSelect, {
          props: {
            options,
            shape: 'rounded'
          }
        })

        expect(wrapper.find('.rounded-full').exists()).toBe(true)
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkSelect, {
          props: {
            options,
            shape: 'soft'
          }
        })

        expect(wrapper.find('.rounded-t-lg').exists()).toBe(true)
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkSelect, {
          props: {
            options,
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
            options,
            size: 'xs'
          }
        })

        expect(wrapper.find('.text-xs').exists()).toBe(true)
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkSelect, {
          props: {
            options,
            size: 'sm'
          }
        })

        expect(wrapper.find('.text-sm').exists()).toBe(true)
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkSelect, {
          props: {
            options,
            size: 'md'
          }
        })

        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkSelect, {
          props: {
            options,
            size: 'lg'
          }
        })

        expect(wrapper.find('.text-lg').exists()).toBe(true)
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.variant is filled', () => {
        wrapper = mount(VkSelect, {
          props: {
            options,
            variant: 'filled'
          }
        })

        expect(wrapper.find('.border-b-2').exists()).toBe(true)
      })

      it('should be outlined when props.variant is outlined', () => {
        wrapper = mount(VkSelect, {
          props: {
            options,
            variant: 'outlined'
          }
        })

        expect(wrapper.find('.border-2').exists()).toBe(true)
      })

      it('should be ghost when props.variant is ghost', () => {
        wrapper = mount(VkSelect, {
          props: {
            options,
            variant: 'ghost'
          }
        })

        expect(wrapper.find('.bg-inherit').exists()).toBe(true)
      })
    })

    describe('When allowClear prop changes', () => {
      beforeEach(() => {
        currentValue.value = 1
      })

      it('should allow value to be undefined when prop.allowClear is true', async () => {
        wrapper = mount(VkSelect, {
          props: {
            options,
            allowClear: true,
            modelValue: currentValue.value
          },
          emits: {
            'update:modelValue': (newValue: number | undefined) => currentValue.value = newValue
          }
        })

        wrapper.find('.vk-input__input').trigger('focus')
        await nextTick()
        wrapper.find('.vk-select__item:first-child').trigger('click')
        await nextTick()
        expect(currentValue.value).toBe(undefined)
      })

      it('should not allow value to be undefined when prop.allowClear is true', async () => {
        wrapper = mount(VkSelect, {
          props: {
            options,
            modelValue: currentValue.value
          },
          emits: {
            'update:modelValue': (newValue: number | undefined) => currentValue.value = newValue
          }
        })

        wrapper.find('.vk-input__input').trigger('focus')
        await nextTick()
        wrapper.find('.vk-select__item:first-child').trigger('click')
        await nextTick()
        expect(currentValue.value).toBe(1)
      })
    })
  })

  describe('Helpertext', () => {
    it('should not show when props.helpertext is not set', () => {
      wrapper = mount(VkSelect, {
        props: {
          options
        }
      })

      expect(wrapper.find('span').text()).toContain('')
    })

    it('should show when props.helpertext is set', () => {
      wrapper = mount(VkSelect, {
        props: {
          options,
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
