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
        expect(wrapper.find('.vk-textarea__label').classes()).toContain('peer-focus:text-primary')
      })

      it('should be size md', () => {
        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.bg-surface-container-highest').exists()).toBe(true)
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

        expect(wrapper.find('.vk-textarea__label').classes()).toContain('peer-focus:text-primary')
      })

      it('should be color secondary when props.color is secondary', () => {
        wrapper = mount(VkTextarea, {
          props: {
            color: 'secondary'
          }
        })

        expect(wrapper.find('.vk-textarea__label').classes()).toContain('peer-focus:text-secondary')
      })

      it('should be color positive when props.color is positive', () => {
        wrapper = mount(VkTextarea, {
          props: {
            color: 'positive'
          }
        })

        expect(wrapper.find('.text-positive').exists()).toBe(true)
      })

      it('should be color accent when props.color is accent', () => {
        wrapper = mount(VkTextarea, {
          props: {
            color: 'accent'
          }
        })

        expect(wrapper.find('.text-accent').exists()).toBe(true)
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkTextarea, {
          props: {
            color: 'warning'
          }
        })

        expect(wrapper.find('.text-warning').exists()).toBe(true)
      })

      it('should be color negative when props.color is negative', () => {
        wrapper = mount(VkTextarea, {
          props: {
            color: 'negative'
          }
        })

        expect(wrapper.find('.text-negative').exists()).toBe(true)
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

        expect(wrapper.find('.bg-transparent').exists()).toBe(true)
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

  describe('Arias', () => {
    it('should set aria-describedby when helpertext is present', () => {
      wrapper = mount(VkTextarea, {
        props: {
          helpertext: 'Help text'
        }
      })
      const helpertextId = wrapper.find('.vk-textarea__helper').attributes('id')
      const describedby = wrapper.find('textarea').attributes('aria-describedby')
      expect(describedby).toContain(helpertextId)
    })

    it('should set aria-describedby when ariaDescribedBy prop is present', () => {
      wrapper = mount(VkTextarea, {
        props: {
          ariaDescribedBy: 'external-id'
        }
      })
      expect(wrapper.find('textarea').attributes('aria-describedby')).toContain('external-id')
    })

    it('should set aria-describedby with both helpertext id and aria-describedby prop', () => {
      wrapper = mount(VkTextarea, {
        props: {
          helpertext: 'Help text',
          ariaDescribedBy: 'external-id'
        }
      })
      const helpertextId = wrapper.find('.vk-textarea__helper').attributes('id')
      const describedby = wrapper.find('textarea').attributes('aria-describedby')
      expect(describedby).toContain(helpertextId)
      expect(describedby).toContain('external-id')
    })
  })

  describe('Methods', () => {
    describe('updateValue', () => {
      it('should update modelValue when input event is triggered', async () => {
        wrapper = mount(VkTextarea, {
          props: {
            modelValue: ''
          }
        })

        const textarea = wrapper.find('textarea')
        await textarea.setValue('Hello World')
        expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['Hello World'])
      })

      it('should not emit update:modelValue when readonly is true', async () => {
        wrapper = mount(VkTextarea, {
          props: {
            modelValue: '',
            readonly: true
          }
        })

        const textarea = wrapper.find('textarea')
        await textarea.setValue('Hello World')
        expect(wrapper.emitted()['update:modelValue']).toBeUndefined()
      })

      it('should not emit update:modelValue when disabled is true', async () => {
        wrapper = mount(VkTextarea, {
          props: {
            modelValue: '',
            disabled: true
          }
        })

        const textarea = wrapper.find('textarea')
        await textarea.setValue('Hello World')
        expect(wrapper.emitted()['update:modelValue']).toBeUndefined()
      })
    })

    describe('handleIconClick', () => {
      it('should emit leftIconClick event when the left icon is clicked', async () => {
        wrapper = mount(VkTextarea, {
          slots: {
            'left-icon': '<span>Left Icon</span>'
          }
        })

        const icon = wrapper.find('.vk-textarea__left-icon')
        await icon.trigger('click')
        expect(wrapper.emitted()).toHaveProperty('leftIconClick')
      })

      it('should not emit leftIconClick event when the textarea is disabled', async () => {
        wrapper = mount(VkTextarea, {
          props: {
            disabled: true
          },
          slots: {
            'left-icon': '<span>Left Icon</span>'
          }
        })

        const icon = wrapper.find('.vk-textarea__left-icon')
        await icon.trigger('click')
        expect(wrapper.emitted()).not.toHaveProperty('leftIconClick')
      })

      it('should not emit leftIconClick event when the textarea is readonly', async () => {
        wrapper = mount(VkTextarea, {
          props: {
            readonly: true
          },
          slots: {
            'left-icon': '<span>Left Icon</span>'
          }
        })

        const icon = wrapper.find('.vk-textarea__left-icon')
        await icon.trigger('click')
        expect(wrapper.emitted()).not.toHaveProperty('leftIconClick')
      })

      it('should emit rightIconClick event when the right icon is clicked', async () => {
        wrapper = mount(VkTextarea, {
          slots: {
            'right-icon': '<span>Right Icon</span>'
          }
        })

        const icon = wrapper.find('.vk-textarea__right-icon')
        await icon.trigger('click')
        expect(wrapper.emitted()).toHaveProperty('rightIconClick')
      })

      it('should not emit rightIconClick event when the textarea is disabled', async () => {
        wrapper = mount(VkTextarea, {
          props: {
            disabled: true
          },
          slots: {
            'right-icon': '<span>Right Icon</span>'
          }
        })

        const icon = wrapper.find('.vk-textarea__right-icon')
        await icon.trigger('click')
        expect(wrapper.emitted()).not.toHaveProperty('rightIconClick')
      })

      it('should not emit rightIconClick event when the textarea is readonly', async () => {
        wrapper = mount(VkTextarea, {
          props: {
            readonly: true
          },
          slots: {
            'right-icon': '<span>Right Icon</span>'
          }
        })

        const icon = wrapper.find('.vk-textarea__right-icon')
        await icon.trigger('click')
        expect(wrapper.emitted()).not.toHaveProperty('rightIconClick')
      })
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
