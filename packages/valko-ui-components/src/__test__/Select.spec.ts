import { nextTick } from 'vue'
import { VueWrapper, mount, DOMWrapper } from '@vue/test-utils'
import VkSelect from '#valkoui/components/Select.vue'

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
      beforeEach(async () => {
        wrapper = mount(VkSelect, {
          props: {
            options,
            modelValue: ''
          }
        })
        wrapper.find('.vk-input__input').trigger('focus')
        await nextTick()
      })

      it('should render', () => {
        expect(wrapper.find('.vk-select__container').exists()).toBe(true)
      })

      it('should be color primary', () => {
        expect(wrapper.find('.vk-select__item').classes()).toContain('data-[variant=filled]:data-[selected=true]:bg-primary')
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
        expect(wrapper.find('.vk-input__label').text()).toContain('')
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
        expect(wrapper.find('.vk-select__item').classes()).toContain('data-[variant=filled]:data-[selected=true]:bg-primary')
      })

      it('should be color secondary when props.color is secondary', async () => {
        wrapper = mount(VkSelect, {
          props: {
            options,
            color: 'secondary'
          }
        })

        wrapper.find('.vk-input__input').trigger('focus')
        await nextTick()
        expect(wrapper.find('.vk-select__item').classes()).toContain('data-[variant=filled]:data-[selected=true]:bg-secondary')
      })

      it('should be color positive when props.color is positive', async () => {
        wrapper = mount(VkSelect, {
          props: {
            options,
            color: 'positive'
          }
        })

        wrapper.find('.vk-input__input').trigger('focus')
        await nextTick()
        expect(wrapper.find('.vk-select__item').classes()).toContain('data-[variant=filled]:data-[selected=true]:bg-positive')
      })

      it('should be color accent when props.color is accent', async () => {
        wrapper = mount(VkSelect, {
          props: {
            options,
            color: 'accent'
          }
        })

        wrapper.find('.vk-input__input').trigger('focus')
        await nextTick()
        expect(wrapper.find('.vk-select__item').classes()).toContain('data-[variant=filled]:data-[selected=true]:bg-accent')
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
        expect(wrapper.find('.vk-select__item').classes()).toContain('data-[variant=filled]:data-[selected=true]:bg-warning')
      })

      it('should be color negative when props.color is negative', async () => {
        wrapper = mount(VkSelect, {
          props: {
            options,
            color: 'negative'
          }
        })

        wrapper.find('.vk-input__input').trigger('focus')
        await nextTick()
        expect(wrapper.find('.vk-select__item').classes()).toContain('data-[variant=filled]:data-[selected=true]:bg-negative')
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

    describe('When clearable prop changes', () => {
      it('should not allow value to be undefined when clearable is false', async () => {
        wrapper = mount(VkSelect, {
          props: {
            options,
            clearable: false,
            modelValue: ''
          }
        })

        wrapper.find('.vk-input__input').trigger('focus')
        await nextTick()
        wrapper.find('.vk-select__item:first-child').trigger('click')
        await nextTick()

        wrapper.find('.vk-input__input').trigger('focus')
        await nextTick()
        wrapper.find('.vk-select__item:first-child').trigger('click')
        await nextTick()

        expect(wrapper.emitted('update:modelValue')?.[1]).toEqual([1])
      })
    })

    describe('When helpertext prop changes', () => {
      it('should not show when props.helpertext is not set', () => {
        wrapper = mount(VkSelect, {
          props: {
            options
          }
        })

        expect(wrapper.find('.vk-input__helper').exists()).toBe(false)
      })

      it('should show when props.helpertext is set', () => {
        wrapper = mount(VkSelect, {
          props: {
            options,
            helpertext: 'Hello World'
          }
        })

        expect(wrapper.find('.vk-input__helper').text()).toContain('Hello World')
      })
    })
  })

  describe('Methods', () => {
    describe('SelectItem functionality', () => {
      let items: DOMWrapper<HTMLElement>[]

      beforeEach(async () => {
        wrapper = mount(VkSelect, {
          props: {
            options
          }
        })

        await wrapper.find('.vk-input__input').trigger('focus')
        items = wrapper.findAll('.vk-select__item')
      })

      afterEach(() => wrapper.unmount())

      it('should select an item when clicked', async () => {
        await items[0].trigger('click')

        expect(wrapper.emitted('update:modelValue')).toEqual([[1]])
      })

      it('should deselect an item if it is already selected', async () => {
        wrapper.setProps({ modelValue: 1 })
        await wrapper.vm.$nextTick()

        await items[0].trigger('click')

        expect(wrapper.emitted('update:modelValue')).toEqual(undefined)
      })

      it('should handle multiple selections', async () => {
        wrapper.setProps({ multiple: true })
        await wrapper.vm.$nextTick()

        await items[0].trigger('click')
        await items[1].trigger('click')

        expect(wrapper.emitted('update:modelValue')).toEqual([[[1]], [[2]]])
      })

      it('should not clear value if clearable is false', async () => {
        wrapper.setProps({
          modelValue: 1,
          clearable: false
        })
        await wrapper.vm.$nextTick()

        await items[0].trigger('click')

        expect(wrapper.emitted('update:modelValue')).toBeUndefined()
      })

      it('should clear value if clearable is true and item is deselected', async () => {
        await wrapper.setProps({
          modelValue: 1,
          clearable: true
        })
        await wrapper.vm.$nextTick()

        await items[0].trigger('click')

        expect(wrapper.emitted('update:modelValue')).toEqual([[undefined]])
      })

      it('should not emit any event if the component is disabled', async () => {
        await wrapper.setProps({ disabled: true })
        await wrapper.vm.$nextTick()

        await items[0].trigger('click')

        expect(wrapper.emitted('update:modelValue')).toBeUndefined()
      })

      it('should not emit any event if the component is readonly', async () => {
        await wrapper.setProps({ readonly: true })
        await wrapper.vm.$nextTick()

        await items[0].trigger('click')

        expect(wrapper.emitted('update:modelValue')).toBeUndefined()
      })
    })

    describe('isSelected functionality', () => {
      let items: DOMWrapper<HTMLElement>[]

      beforeEach(async () => {
        wrapper = mount(VkSelect, {
          props: {
            options
          }
        })

        await wrapper.find('.vk-input__input').trigger('focus')
        items = wrapper.findAll('.vk-select__item')
      })

      afterEach(() => wrapper.unmount())

      it('should set data-selected attribute to true if the value is selected (single selection)', async () => {
        await wrapper.setProps({ modelValue: 1 })
        await wrapper.vm.$nextTick()

        expect(items[0].attributes('data-selected')).toBe('true')
      })

      it('should set data-selected to false if the value is not selected', async () => {
        await wrapper.setProps({ modelValue: 2 })
        await wrapper.vm.$nextTick()

        expect(items[0].attributes('data-selected')).toBe('false')
      })

      it('should set data-selected attribute to true if the value is selected (multiple selection)', async () => {
        await wrapper.setProps({
          modelValue: [1, 2],
          multiple: true
        })
        await wrapper.vm.$nextTick()

        const selectedAttributes = {
          item1: items[0].attributes('data-selected'),
          item2: items[1].attributes('data-selected')
        }

        expect(selectedAttributes).toEqual({ item1: 'true', item2: 'true' })
      })
    })

    describe('toggleDropdown functionality', () => {
      beforeEach(async () => {
        wrapper = mount(VkSelect, {
          props: {
            options
          }
        })
      })

      afterEach(() => wrapper.unmount())

      it('should open the dropdown when the input is focused', async () => {
        await wrapper.find('.vk-input__input').trigger('focus')

        expect(wrapper.find('.vk-select__dropdown').exists()).toBe(true)
      })

      it('should not open the dropdown when the input is disabled', async () => {
        wrapper.setProps({ disabled: true })
        await wrapper.vm.$nextTick()
        await wrapper.find('.vk-input__input').trigger('focus')

        expect(wrapper.find('.vk-select__dropdown').exists()).toBe(false)
      })

      it('should not open the dropdown when the input is readonly', async () => {
        wrapper.setProps({ readonly: true })
        await wrapper.vm.$nextTick()
        await wrapper.find('.vk-input__input').trigger('focus')

        expect(wrapper.find('.vk-select__dropdown').exists()).toBe(false)
      })

      it('should not open the dropdown when the input is disabled and readonly', async () => {
        wrapper.setProps({
          disabled: true,
          readonly: true
        })
        await wrapper.vm.$nextTick()
        await wrapper.find('.vk-input__input').trigger('focus')

        expect(wrapper.find('.vk-select__dropdown').exists()).toBe(false)
      })
    })

    describe('clearSelection', () => {
      beforeEach(async () => {
        wrapper = mount(VkSelect, {
          props: {
            options
          }
        })
      })

      afterEach(() => wrapper.unmount())

      it('should clear the selected value', async () => {
        await wrapper.setProps({
          modelValue: 1,
          clearable: true
        })
        await wrapper.vm.$nextTick()
        const vkInput = wrapper.findComponent({ name: 'VkInput' })
        vkInput.vm.$emit('clear')
        await wrapper.vm.$nextTick()

        expect(wrapper.emitted('update:modelValue')).toEqual([[undefined]])
      })

      it('should not clear the selected value if clearable is false', async () => {
        await wrapper.setProps({
          modelValue: 1,
          clearable: false
        })
        await wrapper.vm.$nextTick()
        const vkInput = wrapper.findComponent({ name: 'VkInput' })
        vkInput.vm.$emit('clear')
        await wrapper.vm.$nextTick()

        expect(wrapper.emitted('update:modelValue')).toBeUndefined()
      })

      it('should emit an empty array if clearable is true and is multiple true', async () => {
        await wrapper.setProps({
          modelValue: [1, 2],
          clearable: true,
          multiple: true
        })
        await wrapper.vm.$nextTick()
        const vkInput = wrapper.findComponent({ name: 'VkInput' })
        vkInput.vm.$emit('clear')
        await wrapper.vm.$nextTick()

        expect(wrapper.emitted('update:modelValue')).toEqual([[[]]])
      })
    })

    describe('closeDropdownOnOutsideClick', () => {
      it('should close the dropdown when clicked outside', async () => {
        const wrapper = mount(VkSelect, {
          props: {
            options,
            attachTo: document.body
          }
        })

        await wrapper.find('.vk-input__input').trigger('focus')
        await wrapper.vm.$nextTick()
        document.body.click()
        await wrapper.vm.$nextTick()

        expect(wrapper.find('.vk-select__dropdown').exists()).toBe(false)
      })
    })

    describe('handleMultipleSelection', () => {
      it('should handle multiple selection', async () => {
        const wrapper = mount(VkSelect, {
          props: {
            options,
            modelValue: [],
            multiple: true
          }
        })

        await wrapper.find('.vk-input__input').trigger('focus')
        await wrapper.vm.$nextTick()
        const items = wrapper.findAll('.vk-select__item')
        items[0].trigger('click')
        items[1].trigger('click')
        await wrapper.vm.$nextTick()

        expect(wrapper.emitted('update:modelValue')).toEqual([[[1]], [[2]]])
      })

      it('should remove the selected item if it is already selected', async () => {
        const wrapper = mount(VkSelect, {
          props: {
            options,
            modelValue: [1, 2],
            multiple: true
          }
        })

        await wrapper.find('.vk-input__input').trigger('focus')
        await wrapper.vm.$nextTick()
        wrapper.find('.vk-select__item:first-child').trigger('click')
        await wrapper.vm.$nextTick()

        expect(wrapper.emitted('update:modelValue')).toEqual([[[2]]])
      })

      it('should not allow to deselected item if clearable is false and its the last item remaining', async () => {
        const wrapper = mount(VkSelect, {
          props: {
            options,
            modelValue: [1],
            clearable: false,
            multiple: true
          }
        })

        await wrapper.find('.vk-input__input').trigger('focus')
        await wrapper.vm.$nextTick()
        wrapper.find('.vk-select__item:first-child').trigger('click')
        await wrapper.vm.$nextTick()

        expect(wrapper.emitted('update:modelValue')).toBeUndefined()
      })
    })

    describe('handleSingleSelection', () => {
      it('should not allow to deselect item if clearable is false', async () => {
        const wrapper = mount(VkSelect, {
          props: {
            options,
            modelValue: 1,
            clearable: false
          }
        })

        await wrapper.find('.vk-input__input').trigger('focus')
        await wrapper.vm.$nextTick()
        wrapper.find('.vk-select__item:first-child').trigger('click')
        await wrapper.vm.$nextTick()

        expect(wrapper.emitted('update:modelValue')).toBeUndefined()
      })

      it('should allow to deselect item if clearable is true', async () => {
        const wrapper = mount(VkSelect, {
          props: {
            options,
            modelValue: 1,
            clearable: true
          }
        })

        await wrapper.find('.vk-input__input').trigger('focus')
        await wrapper.vm.$nextTick()
        wrapper.find('.vk-select__item:first-child').trigger('click')
        await wrapper.vm.$nextTick()

        expect(wrapper.emitted('update:modelValue')).toEqual([[undefined]])
      })

      it('should select the item if it is not selected', async () => {
        const wrapper = mount(VkSelect, {
          props: {
            options,
            modelValue: 2
          }
        })

        await wrapper.find('.vk-input__input').trigger('focus')
        await wrapper.vm.$nextTick()
        wrapper.find('.vk-select__item:first-child').trigger('click')
        await wrapper.vm.$nextTick()

        expect(wrapper.emitted('update:modelValue')).toEqual([[1]])
      })
    })

    describe('updateValue', () => {
      let items: DOMWrapper<HTMLElement>[]

      beforeEach(async () => {
        wrapper = mount(VkSelect, {
          props: {
            options
          }
        })

        await wrapper.find('.vk-input__input').trigger('focus')
        items = wrapper.findAll('.vk-select__item')
      })

      afterEach(() => wrapper.unmount())

      it('should emit update:modelValue with the new value', async () => {
        await items[0].trigger('click')

        expect(wrapper.emitted('update:modelValue')).toEqual([[1]])
      })

      it('should not emit update:modelValue if the component is disabled', async () => {
        wrapper.setProps({ disabled: true })
        await wrapper.vm.$nextTick()
        await wrapper.find('.vk-select__item:first-child').trigger('click')
        await wrapper.vm.$nextTick()

        expect(wrapper.emitted('update:modelValue')).toBeUndefined()
      })

      it('should not emit update:modelValue if the component is readonly', async () => {
        wrapper.setProps({ readonly: true })
        await wrapper.vm.$nextTick()
        await wrapper.find('.vk-select__item:first-child').trigger('click')
        await wrapper.vm.$nextTick()

        expect(wrapper.emitted('update:modelValue')).toBeUndefined()
      })
    })
  })

  describe('Computed properties', () => {
    describe('showValue', () => {
      let wrapper: VueWrapper

      beforeEach(() => {
        wrapper = mount(VkSelect, {
          props: {
            options
          }
        })
      })

      afterEach(() => wrapper.unmount())

      it('should return the label for the selected value (single selection)', async () => {
        await wrapper.setProps({ modelValue: 1 })
        const vkInput = wrapper.findComponent({ name: 'VkInput' })
        await wrapper.vm.$nextTick()

        const inputElement = vkInput.find('input')
        expect(inputElement.element.value).toBe('Wade Cooper')
      })

      it('should return undefined if no value is selected (single selection)', async () => {
        await wrapper.setProps({ modelValue: undefined })
        const vkInput = wrapper.findComponent({ name: 'VkInput' })
        await wrapper.vm.$nextTick()

        expect(vkInput.attributes('value')).toBe(undefined)
      })

      it('should return a comma-separated string of labels for selected values (multiple selection)', async () => {
        await wrapper.setProps({
          modelValue: [1, 2],
          multiple: true
        })
        const vkInput = wrapper.findComponent({ name: 'VkInput' })
        await wrapper.vm.$nextTick()

        const inputElement = vkInput.find('input')
        expect(inputElement.element.value).toBe('Wade Cooper, Arlene Mccoy')
      })

      it('should return an empty string if no values are selected (multiple selection)', async () => {
        await wrapper.setProps({
          modelValue: [],
          multiple: true
        })
        const vkInput = wrapper.findComponent({ name: 'VkInput' })
        await wrapper.vm.$nextTick()

        const inputElement = vkInput.find('input')
        expect(inputElement.element.value).toBe('')
      })

      it('should handle non-existent values in the showMap', async () => {
        await wrapper.setProps({ modelValue: 99 })
        const vkInput = wrapper.findComponent({ name: 'VkInput' })
        await wrapper.vm.$nextTick()

        const inputElement = vkInput.find('input')
        expect(inputElement.element.value).toBe('')
      })
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
      wrapper.find('.vk-select__item:first-child').trigger('click')

      expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    })
  })
})
