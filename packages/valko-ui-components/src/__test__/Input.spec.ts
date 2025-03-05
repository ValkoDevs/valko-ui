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

    describe('When type prop changes', () => {
      it('should be text when prop.type is text', () => {
        const wrapper = mount(VkInput, {
          props: {
            type: 'text'
          }
        })

        const input = wrapper.find('input')

        expect(input.attributes('type')).toBe('text')
      })

      it('should be email when prop.type is email', () => {
        const wrapper = mount(VkInput, {
          props: {
            type: 'email'
          }
        })

        const input = wrapper.find('input')

        expect(input.attributes('type')).toBe('email')
      })

      it('should be password when prop.type is password', () => {
        const wrapper = mount(VkInput, {
          props: {
            type: 'password'
          }
        })

        const input = wrapper.find('input')

        expect(input.attributes('type')).toBe('password')
      })

      it('should be number when prop.type is number', () => {
        const wrapper = mount(VkInput, {
          props: {
            type: 'number'
          }
        })

        const input = wrapper.find('input')

        expect(input.attributes('type')).toBe('number')
      })
    })

    describe('When helpertext prop changes', () => {
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

    describe('When clearable prop changes', () => {
      it('Should not display cleareable icon when cleareable is false', () => {
        wrapper = mount(VkInput, {
          props: {
            clereable: false
          }
        })

        expect(wrapper.find('i.ti.ti-circle-x').exists()).toBe(false)
      })

      it('Should display cleareable icon when cleareable is true and the input has a value', () => {
        wrapper = mount(VkInput, {
          props: {
            clearable: true,
            modelValue: 'Hello World'
          }
        })

        expect(wrapper.find('i.ti.ti-circle-x').exists()).toBe(true)
      })

      it('should clear the input value when clearable icon is clicked', async () => {
        const wrapper = mount(VkInput, {
          props: {
            clearable: true,
            modelValue: 'Hello World'
          }
        })

        await wrapper.find('i.ti.ti-circle-x').trigger('click')

        expect(wrapper.emitted('update:modelValue')).toStrictEqual([['']])
      })
    })

    describe('When disabled prop changes', () => {
      it('should be disabled when props.disabled is true', () => {
        wrapper = mount(VkInput, {
          props: {
            disabled: true
          }
        })

        expect(wrapper.find('input').attributes('disabled')).toBeDefined()
      })

      it('should not be disabled when props.disabled is false', () => {
        wrapper = mount(VkInput, {
          props: {
            disabled: false
          }
        })

        expect(wrapper.find('input').attributes('disabled')).toBeUndefined()
      })
    })

    describe('When readonly prop changes', () => {
      it('should be readonly when props.readonly is true', () => {
        wrapper = mount(VkInput, {
          props: {
            readonly: true
          }
        })

        expect(wrapper.find('input').attributes('readonly')).toBeDefined()
      })

      it('should not be readonly when props.readonly is false', () => {
        wrapper = mount(VkInput, {
          props: {
            readonly: false
          }
        })

        expect(wrapper.find('input').attributes('readonly')).toBeUndefined()
      })
    })

    describe('When modelValue changes', () => {
      it('should emit update:modelValue when input value changes', async () => {
        wrapper = mount(VkInput, {
          props: {
            modelValue: 'Initial value'
          }
        })

        const input = wrapper.find('input')
        await input.setValue('New value')

        expect(wrapper.emitted('update:modelValue')).toEqual([['New value']])
      })

      it('should display the correct initial value when modelValue is passed', () => {
        wrapper = mount(VkInput, {
          props: {
            modelValue: 'Test Value'
          }
        })

        const input = wrapper.find('input')
        expect(input.element.value).toBe('Test Value')
      })
    })

    describe('When cursor prop changes', () => {
      it('should be text if props.cursor is text', () => {
        const wrapper = mount(VkInput, {
          props: {
            cursor: 'text'
          }
        })

        expect(wrapper.find('.vk-input__input').classes()).toContain('cursor-text')
      })

      it('should be pointer if props.cursor is pointer', () => {
        const wrapper = mount(VkInput, {
          props: {
            cursor: 'pointer'
          }
        })

        expect(wrapper.find('.vk-input__input').classes()).toContain('cursor-pointer')
      })
    })

    describe('When step prop changes', () => {
      it('should be 1 if props.step is not set', () => {
        const wrapper = mount(VkInput, {})

        expect(wrapper.find('.vk-input__input').attributes('step')).toBe('1')
      })

      it('should be 2 if props.step is 2', () => {
        const wrapper = mount(VkInput, {
          props: {
            step: 2
          }
        })

        expect(wrapper.find('.vk-input__input').attributes('step')).toBe('2')
      })

      it('should update modelValue with the respective step value', async () => {
        vi.useFakeTimers()
        const wrapper = mount(VkInput, {
          props: {
            type: 'number',
            modelValue: 0,
            step: 5
          }
        })

        const upArrow = wrapper.find('i.ti.ti-chevron-up')
        await upArrow.trigger('mousedown')
        vi.advanceTimersByTime(75)
        await upArrow.trigger('mouseup')
        await wrapper.vm.$nextTick()
        expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([5])
      })
    })
  })

  describe('When extra functionality is added', () => {
    describe('changeValue functionality', () => {
      it('should emit update:modelValue with "6" when one increment is triggered', async () => {
        vi.useFakeTimers()
        const wrapper = mount(VkInput, {
          props: {
            type: 'number',
            modelValue: 5
          }
        })

        const upArrow = wrapper.find('i.ti.ti-chevron-up')
        await upArrow.trigger('mousedown')
        vi.advanceTimersByTime(75)
        await upArrow.trigger('mouseup')
        await wrapper.vm.$nextTick()
        expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([6])
      })

      it('should decrease the value by 1 when down arrow is pressed', async () => {
        vi.useFakeTimers()
        const wrapper = mount(VkInput, {
          props: {
            type: 'number',
            modelValue: 10
          }
        })

        const downArrow = wrapper.find('i.ti.ti-chevron-down')
        await downArrow.trigger('mousedown')
        vi.advanceTimersByTime(75)
        await downArrow.trigger('mouseup')
        await wrapper.vm.$nextTick()
        expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([9])
      })
    })

    describe('startHolding and stopHolding functionality', () => {
      it('should emit update:modelValue with a higher value when holding the up arrow', async () => {
        vi.clearAllTimers()
        vi.useFakeTimers()
        const wrapper = mount(VkInput, {
          props: {
            type: 'number',
            modelValue: 5
          }
        })

        const upArrow = wrapper.find('i.ti.ti-chevron-up')
        await upArrow.trigger('mousedown')
        vi.advanceTimersByTime(300)
        await upArrow.trigger('mouseup')
        await wrapper.vm.$nextTick()
        expect(wrapper.emitted('update:modelValue')?.[3]).toEqual([9])
      })

      it('should not update value after stopHolding is triggered', async () => {
        vi.useFakeTimers()
        const wrapper = mount(VkInput, {
          props: {
            type: 'number',
            modelValue: '5'
          }
        })

        const upArrow = wrapper.find('i.ti.ti-chevron-up')
        await upArrow.trigger('mousedown')
        vi.advanceTimersByTime(150)
        await upArrow.trigger('mouseup')
        await nextTick()
        const emittedBefore = wrapper.emitted('update:modelValue') as string[][]
        const lastValue = emittedBefore[emittedBefore.length - 1][0]
        vi.advanceTimersByTime(300)
        await nextTick()
        const emittedAfter = wrapper.emitted('update:modelValue') as string[][]

        expect(emittedAfter[emittedAfter.length - 1]).toEqual([lastValue])
        vi.useRealTimers()
      })
    })

    describe('Watch functionality for modelValue', () => {
      it('should trigger watch immediately with initial modelValue', () => {
        const wrapper = mount(VkInput, {
          props: { modelValue: 'initial' }
        })

        const input = wrapper.find('input')
        expect(input.element.value).toBe('initial')
      })

      it('should update modelValue correctly after user input', async () => {
        const wrapper = mount(VkInput, {
          props: { modelValue: 'initial' }
        })

        await wrapper.find('input').setValue('new user input')
        expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['new user input'])
      })

      it('should update the input element value when modelValue prop changes', async () => {
        const wrapper = mount(VkInput, {
          props: {
            modelValue: '10'
          }
        })

        const input = wrapper.find('input')
        expect(input.element.value).toBe('10')
      })

      it('should update the input element value after modelValue prop is changed', async () => {
        const wrapper = mount(VkInput, {
          props: {
            modelValue: '10'
          }
        })

        await wrapper.setProps({ modelValue: '20' })
        await nextTick()
        expect(wrapper.find('input').element.value).toBe('20')
      })

      it('should set data-filled to false when modelValue is empty', () => {
        const wrapper = mount(VkInput, {
          props: {
            modelValue: ''
          }
        })

        const input = wrapper.find('input')
        expect(input.attributes('data-filled')).toBe('false')
      })

      it('should set data-filled to true when modelValue is non-empty', () => {
        const wrapper = mount(VkInput, {
          props: {
            modelValue: 'Hello'
          }
        })

        const input = wrapper.find('input')
        expect(input.attributes('data-filled')).toBe('true')
      })

      it('should set data-filled to false when modelValue is an empty string', () => {
        const wrapper = mount(VkInput, {
          props: {
            modelValue: ''
          }
        })

        const input = wrapper.find('input')
        expect(input.attributes('data-filled')).toBe('false')
      })

      it('should set data-filled to false when modelValue is null', () => {
        const wrapper = mount(VkInput, {
          props: {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            modelValue: null as any
          }
        })

        const input = wrapper.find('input')
        expect(input.attributes('data-filled')).toBe('false')
      })

      it('should set data-filled to true when modelValue is a valid value', async () => {
        const wrapper = mount(VkInput, {
          props: { modelValue: 42 }
        })

        const input = wrapper.find('input')
        expect(input.attributes('data-filled')).toBe('true')
      })

      it('should set data-filled to false when modelValue is undefined', async () => {
        const wrapper = mount(VkInput, {
          props: { modelValue: undefined }
        })

        const input = wrapper.find('input')
        expect(input.attributes('data-filled')).toBe('false')
      })

      it('should update data-filled when modelValue changes from undefined to number', async () => {
        const wrapper = mount(VkInput, {
          props: { modelValue: undefined }
        })

        await wrapper.setProps({ modelValue: 10 })
        const input = wrapper.find('input')
        expect(input.attributes('data-filled')).toBe('true')
      })

      it('should update data-filled when modelValue changes from number to null', async () => {
        const wrapper = mount(VkInput, {
          props: { modelValue: 5 }
        })


        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        await wrapper.setProps({ modelValue: null as any })
        const input = wrapper.find('input')

        expect(input.attributes('data-filled')).toBe('false')
      })
    })

    describe('When input type is number', () => {
      it('should render the custom arrows for the input', () => {
        const wrapper = mount(VkInput, {
          props: {
            type: 'number'
          }
        })

        expect(wrapper.find('.vk-input__number-arrows').exists()).toBe(true)
      })

      it('should not render the custom arrows for the input if type is not number', () => {
        const wrapper = mount(VkInput, {
          props: {
            type: 'text'
          }
        })

        expect(wrapper.find('.vk-input__number-arrows').exists()).toBe(false)
      })
    })
  })

  describe('Slots', () => {
    it('Should render left-icon when slot left-icon is set', () => {
      wrapper = mount(VkInput, {
        slots: {
          'left-icon': '<i class="ti ti-brand-vue"></i>'
        }
      })

      expect(wrapper.find('i.ti.ti-brand-vue').exists()).toBe(true)
    })

    it('Should render right-icon when slot right-icon is set', () => {
      wrapper = mount(VkInput, {
        slots: {
          'right-icon': '<i class="ti ti-home"></i>'
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

  describe('Emits', () => {
    it('should emit focus event', async () => {
      const wrapper = mount(VkInput, {})

      await wrapper.find('.vk-input__input').trigger('focus')

      expect(wrapper.emitted()).toHaveProperty('focus')
    })

    it('should not emit focus event when disabled is true', async () => {
      const wrapper = mount(VkInput, {
        props: {
          disabled: true
        }
      })

      await wrapper.find('.vk-input__input').trigger('focus')

      expect(wrapper.emitted()).not.toHaveProperty('focus')
    })

    it('should emit update:modelvalue on input', async () => {
      wrapper = mount(VkInput, {})

      await wrapper.find('.vk-input__input').trigger('input')

      expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    })

    it('should not emit update:modelvalue when input is readonly', async () => {
      wrapper = mount(VkInput, {
        props: {
          readonly: true
        }
      })

      await wrapper.find('.vk-input__input').trigger('input')

      expect(wrapper.emitted()).not.toHaveProperty('update:modelValue')
    })

    it('should not emit update:modelvalue when input is disabled', async () => {
      wrapper = mount(VkInput, {
        props: {
          disabled: true
        }
      })

      await wrapper.find('.vk-input__input').trigger('input')

      expect(wrapper.emitted()).not.toHaveProperty('update:modelValue')
    })

    it('Should emit leftIconClick when slot left-icon is clicked', async () => {
      wrapper = mount(VkInput, {
        slots: {
          'left-icon': '<i class="ti ti-brand-vue"></i>'
        }
      })

      await wrapper.find('i.ti.ti-brand-vue').trigger('click')

      expect(wrapper.emitted()).toHaveProperty('leftIconClick')
    })

    it('Should emit rightIconClick when slot right-icon is clicked', async () => {
      wrapper = mount(VkInput, {
        slots: {
          'right-icon': '<i class="ti ti-home"></i>'
        }
      })

      await wrapper.find('i.ti.ti-home').trigger('click')

      expect(wrapper.emitted()).toHaveProperty('rightIconClick')
    })

    it('Should emit clear when the clear icon is clickled', () => {
      wrapper = mount(VkInput, {
        props: {
          clearable: true,
          modelValue: 'Hello World'
        }
      })

      wrapper.find('i.ti.ti-circle-x').trigger('click')
      expect(wrapper.emitted()).toHaveProperty('clear')
    })
  })
})
