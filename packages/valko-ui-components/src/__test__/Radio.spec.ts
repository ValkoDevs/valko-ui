import { VueWrapper, mount } from '@vue/test-utils'
import VkRadio from '#valkoui/components/Radio.vue'
import VkRadioGroup from '#valkoui/components/RadioGroup.vue'

describe('Radio component', () => {
  let wrapper: VueWrapper
  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkRadio, {})
      })

      it('should render', () => {
        expect(wrapper.find('.vk-radio').exists()).toBe(true)
      })

      it('should be color primary', () => {
        expect(wrapper.find('.vk-radio__radio').classes()).toContain('group-data-[state=checked]:bg-primary')
      })

      it('should be size md', () => {
        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.vk-radio__radio').classes()).toContain('group-data-[state=checked]:bg-primary')
      })

      it('should be shape rounded', () => {
        expect(wrapper.find('.rounded-full').exists()).toBe(true)
      })

      it('should have label on left', () => {
        expect(wrapper.find('.ml-2').exists()).toBe(true)
      })

      it('Should not be selected', () => {
        expect(wrapper.find('.vk-radio__icon').exists()).toBe(false)
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

        expect(wrapper.find('.vk-radio__radio').classes()).toContain('group-data-[state=checked]:bg-primary')
      })

      it('should be color secondary when props.color is secondary', () => {
        wrapper = mount(VkRadio, {
          props: {
            color: 'secondary'
          }
        })

        expect(wrapper.find('.vk-radio__radio').classes()).toContain('group-data-[state=checked]:bg-secondary')
      })

      it('should be color positive when props.color is positive', () => {
        wrapper = mount(VkRadio, {
          props: {
            color: 'positive'
          }
        })

        expect(wrapper.find('.vk-radio__radio').classes()).toContain('group-data-[state=checked]:bg-positive')
      })

      it('should be color accent when props.color is accent', () => {
        wrapper = mount(VkRadio, {
          props: {
            color: 'accent'
          }
        })

        expect(wrapper.find('.vk-radio__radio').classes()).toContain('group-data-[state=checked]:bg-accent')
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkRadio, {
          props: {
            color: 'warning'
          }
        })

        expect(wrapper.find('.vk-radio__radio').classes()).toContain('group-data-[state=checked]:bg-warning')
      })

      it('should be color negative when props.color is negative', () => {
        wrapper = mount(VkRadio, {
          props: {
            color: 'negative'
          }
        })

        expect(wrapper.find('.vk-radio__radio').classes()).toContain('group-data-[state=checked]:bg-negative')
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

        expect(wrapper.find('.rounded-sm').exists()).toBe(true)
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
      it('should be filled when props.variant is filled', () => {
        wrapper = mount(VkRadio, {
          props: {
            variant: 'filled'
          }
        })

        expect(wrapper.find('.vk-radio__radio').classes()).toContain('group-data-[state=checked]:bg-primary')
      })

      it('should be outlined when props.variant is outlined', () => {
        wrapper = mount(VkRadio, {
          props: {
            variant: 'outlined',
            modelValue: 'hello',
            value: 'hello'
          }
        })

        expect(wrapper.find('.text-primary').exists()).toBe(true)
      })

      it('should be ghost when props.variant is ghost', () => {
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

      expect(wrapper.find('.vk-radio__helpertext').exists()).toBe(false)
    })

    it('should have a helpertext', () => {
      const wrapper = mount(VkRadio, {
        props: {
          helpertext: 'Hello World'
        }
      })

      expect(wrapper.find('.vk-radio__helpertext').text()).toContain('Hello World')
    })
  })

  describe('Arias', () => {
    it('should have aria-describedby when ariaDescribedBy prop is set', () => {
      const wrapper = mount(VkRadio, {
        props: {
          ariaDescribedBy: 'radio-helpertext'
        }
      })

      expect(wrapper.find('[role="radio"]').attributes('aria-describedby')).toBe('radio-helpertext')
    })

    it('should not set aria-label when the prop is not provided', () => {
      const wrapper = mount(VkRadio, { props: { label: 'Option' } })

      expect(wrapper.find('[role="radio"]').attributes('aria-label')).toBeUndefined()
    })

    it('should set aria-label when the prop is provided', () => {
      const wrapper = mount(VkRadio, { props: { ariaLabel: 'Custom label' } })

      expect(wrapper.find('[role="radio"]').attributes('aria-label')).toBe('Custom label')
    })
  })

  describe('Radiogroup semantics', () => {
    it('should render a radiogroup root with a radio item', () => {
      wrapper = mount(VkRadio, {})

      expect(wrapper.find('[role="radiogroup"]').exists()).toBe(true)
      expect(wrapper.find('[role="radio"]').exists()).toBe(true)
    })

    it('should be unchecked by default', () => {
      wrapper = mount(VkRadio, {})

      expect(wrapper.find('[role="radio"]').attributes('aria-checked')).toBe('false')
    })

    it('should be checked when modelValue matches value', () => {
      wrapper = mount(VkRadio, {
        props: {
          modelValue: 'a',
          value: 'a'
        }
      })

      expect(wrapper.find('[role="radio"]').attributes('aria-checked')).toBe('true')
    })

    it('should stay checked after clicking when no value prop is set', async () => {
      const wrapper = mount(VkRadio, {})

      expect(wrapper.find('[role="radio"]').attributes('aria-checked')).toBe('false')
      expect(wrapper.find('[role="radio"]').attributes('data-state')).toBe('unchecked')

      await wrapper.find('[role="radio"]').trigger('click')

      expect(wrapper.find('[role="radio"]').attributes('aria-checked')).toBe('true')
      expect(wrapper.find('[role="radio"]').attributes('data-state')).toBe('checked')
      expect(wrapper.emitted('update:modelValue')![0][0]).toBeUndefined()

      await wrapper.setProps({})

      expect(wrapper.find('[role="radio"]').attributes('aria-checked')).toBe('true')
      expect(wrapper.find('[role="radio"]').attributes('data-state')).toBe('checked')
    })
  })

  describe('When used inside a VkRadioGroup', () => {
    const GroupConsumer = {
      components: { VkRadio, VkRadioGroup },
      props: ['modelValue'],
      template: `
        <vk-radio-group name="group" :model-value="modelValue" @update:model-value="$emit('update:modelValue', $event)">
          <vk-radio value="a" label="A" />
          <vk-radio value="b" label="B" />
        </vk-radio-group>
      `
    }

    it('should render a single radiogroup root and one named input for the whole group', () => {
      wrapper = mount({
        components: { VkRadio, VkRadioGroup },
        template: `
          <form>
            <vk-radio-group name="group">
              <vk-radio value="a" label="A" />
              <vk-radio value="b" label="B" />
            </vk-radio-group>
          </form>
        `
      })

      expect(wrapper.findAll('[role="radiogroup"]')).toHaveLength(1)
      expect(wrapper.findAll('[role="radio"]')).toHaveLength(2)
      expect(wrapper.findAll('input[name="group"]')).toHaveLength(1)
    })

    it('should emit the clicked value through the group model', async () => {
      wrapper = mount(GroupConsumer)

      await wrapper.findAll('[role="radio"]')[1].trigger('click')

      expect(wrapper.emitted('update:modelValue')![0][0]).toBe('b')
    })

    it('should check the matching radio when modelValue matches its value', async () => {
      wrapper = mount(GroupConsumer, { props: { modelValue: 'b' } })

      const radios = wrapper.findAll('[role="radio"]')
      expect(radios[0].attributes('aria-checked')).toBe('false')
      expect(radios[1].attributes('aria-checked')).toBe('true')
    })
  })

  describe('Emits', () => {
    it('should emit update event', () => {
      const wrapper = mount(VkRadio, {})

      wrapper.find('[role="radio"]').trigger('click')
      expect(wrapper.emitted('update:modelValue'))
    })

    it('should not emit update event when disabled', async () => {
      const wrapper = mount(VkRadio, {
        props: {
          disabled: true
        }
      })

      await wrapper.find('[role="radio"]').trigger('click')

      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    })
  })
})
