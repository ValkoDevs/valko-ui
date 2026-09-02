import { nextTick } from 'vue'
import { VueWrapper, mount } from '@vue/test-utils'
import VkSelect from '#valkoui/components/Select.vue'
import useListKeyboardNav from '#valkoui/composables/useListKeyboardNav.ts'

vi.mock('#valkoui/composables/useListKeyboardNav.ts', () => ({
  default: vi.fn(() => vi.fn())
}))

const useListKeyboardNavMock = vi.mocked(useListKeyboardNav)

HTMLElement.prototype.scrollIntoView = vi.fn()

describe('Select component', () => {
  const options = [
    { value: 1, label: 'Wade Cooper' },
    { value: 2, label: 'Arlene Mccoy' },
    { value: 3, label: 'Devon Webb' },
    { value: 4, label: 'Tom Cook' }
  ]

  let wrapper: VueWrapper

  const mountSelect = async (props = {}) => {
    wrapper = mount(VkSelect, {
      props: {
        options,
        ...props
      }
    })

    return wrapper
  }

  const openDropdown = async () => {
    await wrapper.find('.vk-input__input').trigger('focus')
    await nextTick()
  }

  describe('Props', () => {
    describe('Default props', () => {
      beforeEach(async () => {
        await mountSelect({
          modelValue: ''
        })

        await openDropdown()
      })

      afterEach(() => wrapper.unmount())

      it('should render the select component', () => {
        expect(wrapper.find('.vk-select__container').exists()).toBe(true)
      })

      it('should use primary color by default', () => {
        expect(wrapper.find('.vk-select__item').classes())
          .toContain('data-[variant=filled]:data-[selected=true]:bg-primary')
      })

      it('should use md size by default', () => {
        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should use soft shape by default', () => {
        expect(wrapper.find('.rounded-t-lg').exists()).toBe(true)
      })

      it('should show options when focused', () => {
        expect(wrapper.find('.vk-select__item').exists()).toBe(true)
      })

      it('should not be disabled by default', () => {
        expect(wrapper.find('.cursor-not-allowed').exists()).toBe(false)
      })

      it('should not render label by default', () => {
        expect(wrapper.find('.vk-input__label').text()).toBe('')
      })
    })

    describe('When color prop changes', () => {
      it('should be primary when props.color is primary', async () => {
        await mountSelect({
          color: 'primary'
        })

        await openDropdown()

        expect(wrapper.find('.vk-select__item').classes()).toContain('data-[variant=filled]:data-[selected=true]:bg-primary')
      })

      it('should be secondary when props.color is secondary', async () => {
        await mountSelect({
          color: 'secondary'
        })

        await openDropdown()

        expect(wrapper.find('.vk-select__item').classes()).toContain('data-[variant=filled]:data-[selected=true]:bg-secondary')
      })

      it('should be positive when props.color is positive', async () => {
        await mountSelect({
          color: 'positive'
        })

        await openDropdown()

        expect(wrapper.find('.vk-select__item').classes()).toContain('data-[variant=filled]:data-[selected=true]:bg-positive')
      })

      it('should be accent when props.color is accent', async () => {
        await mountSelect({
          color: 'accent'
        })

        await openDropdown()

        expect(wrapper.find('.vk-select__item').classes()).toContain('data-[variant=filled]:data-[selected=true]:bg-accent')
      })

      it('should be warning when props.color is warning', async () => {
        await mountSelect({
          color: 'warning'
        })

        await openDropdown()

        expect(wrapper.find('.vk-select__item').classes()).toContain('data-[variant=filled]:data-[selected=true]:bg-warning')
      })

      it('should be negative when props.color is negative', async () => {
        await mountSelect({
          color: 'negative'
        })

        await openDropdown()

        expect(wrapper.find('.vk-select__item').classes()).toContain('data-[variant=filled]:data-[selected=true]:bg-negative')
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', async () => {
        await mountSelect({
          shape: 'rounded'
        })

        expect(wrapper.find('.rounded-full').exists()).toBe(true)
      })

      it('should be soft when props.shape is soft', async () => {
        await mountSelect({
          shape: 'soft'
        })

        expect(wrapper.find('.rounded-t-lg').exists()).toBe(true)
      })

      it('should be square when props.shape is square', async () => {
        await mountSelect({
          shape: 'square'
        })

        expect(wrapper.find('.rounded-none').exists()).toBe(true)
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', async () => {
        await mountSelect({
          size: 'xs'
        })

        expect(wrapper.find('.text-xs').exists()).toBe(true)
      })

      it('should be sm when props.size is sm', async () => {
        await mountSelect({
          size: 'sm'
        })

        expect(wrapper.find('.text-sm').exists()).toBe(true)
      })

      it('should be md when props.size is md', async () => {
        await mountSelect({
          size: 'md'
        })

        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be lg when props.size is lg', async () => {
        await mountSelect({
          size: 'lg'
        })

        expect(wrapper.find('.text-lg').exists()).toBe(true)
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.variant is filled', async () => {
        await mountSelect({
          variant: 'filled'
        })

        expect(wrapper.find('.border-b-2').exists()).toBe(true)
      })

      it('should be outlined when props.variant is outlined', async () => {
        await mountSelect({
          variant: 'outlined'
        })

        expect(wrapper.find('.border-2').exists()).toBe(true)
      })

      it('should be ghost when props.variant is ghost', async () => {
        await mountSelect({
          variant: 'ghost'
        })

        expect(wrapper.find('.bg-inherit').exists()).toBe(true)
      })
    })

    describe('When clearable prop changes', () => {
      it('should not allow clearing when clearable is false', async () => {
        await mountSelect({
          modelValue: 1,
          clearable: false
        })

        await openDropdown()

        await wrapper.find('.vk-select__item:first-child').trigger('click')

        expect(wrapper.emitted('update:modelValue')).toBeUndefined()
      })
    })

    describe('When helpertext prop changes', () => {
      it('should not show when helpertext is not set', async () => {
        await mountSelect()

        expect(wrapper.find('.vk-input__helper').exists()).toBe(false)
      })

      it('should show when helpertext is set', async () => {
        await mountSelect({
          helpertext: 'Hello World'
        })

        expect(wrapper.find('.vk-input__helper').text())
          .toContain('Hello World')
      })
    })
  })

  describe('Dropdown', () => {
    beforeEach(async () => {
      await mountSelect()
    })

    afterEach(() => wrapper.unmount())

    it('should open when input is focused', async () => {
      await openDropdown()

      expect(wrapper.find('.vk-select__dropdown').exists()).toBe(true)
    })

    it('should not open when disabled', async () => {
      await wrapper.setProps({
        disabled: true
      })

      await wrapper.find('.vk-input__input').trigger('focus')
      await nextTick()

      expect(wrapper.find('.vk-select__dropdown').exists()).toBe(false)
    })

    it('should not open when readonly', async () => {
      await wrapper.setProps({
        readonly: true
      })

      await wrapper.find('.vk-input__input').trigger('focus')
      await nextTick()

      expect(wrapper.find('.vk-select__dropdown').exists()).toBe(false)
    })

    it('should not open when disabled and readonly', async () => {
      await wrapper.setProps({
        disabled: true,
        readonly: true
      })

      await wrapper.find('.vk-input__input').trigger('focus')
      await nextTick()

      expect(wrapper.find('.vk-select__dropdown').exists()).toBe(false)
    })

    it('should close when input loses focus', async () => {
      await openDropdown()

      await wrapper.find('.vk-input__input').trigger('blur')
      await nextTick()

      expect(wrapper.find('.vk-select__dropdown').exists()).toBe(false)
    })

    it('should close when Escape key is pressed', async () => {
      await openDropdown()

      await wrapper.find('.vk-input__input').trigger('keydown', {
        key: 'Escape'
      })

      await nextTick()

      expect(wrapper.find('.vk-select__dropdown').exists()).toBe(false)
    })

    it('should open when the dropdown icon is clicked', async () => {
      const icon = wrapper.findComponent({
        name: 'VkIcon'
      })

      await icon.trigger('click')
      await nextTick()

      expect(wrapper.find('.vk-select__dropdown').exists()).toBe(true)
    })

    it('should close when clicking outside', async () => {
      await openDropdown()

      document.body.click()
      await nextTick()

      expect(wrapper.find('.vk-select__dropdown').exists()).toBe(false)
    })

    it('should not close when clicking inside the select', async () => {
      wrapper = mount(VkSelect, {
        props: {
          options
        },
        attachTo: document.body
      })

      await openDropdown()

      await wrapper.find('.vk-select__container').trigger('click')

      await nextTick()

      expect(wrapper.find('.vk-select__dropdown').exists()).toBe(true)
    })
  })

  describe('Selection', () => {
    describe('Single selection', () => {
      beforeEach(async () => {
        await mountSelect()
        await openDropdown()
      })

      afterEach(() => wrapper.unmount())

      it('should select an item when clicked', async () => {
        await wrapper.find('.vk-select__item:first-child').trigger('click')

        expect(wrapper.emitted('update:modelValue')).toEqual([[1]])
      })

      it('should select a different item when another option is selected', async () => {
        await wrapper.setProps({
          modelValue: 2
        })

        await wrapper.vm.$nextTick()

        await wrapper.find('.vk-select__item:first-child').trigger('click')

        expect(wrapper.emitted('update:modelValue')).toEqual([[1]])
      })

      it('should not deselect an item when clearable is false', async () => {
        await wrapper.setProps({
          modelValue: 1,
          clearable: false
        })

        await wrapper.vm.$nextTick()

        await wrapper.find('.vk-select__item:first-child').trigger('click')

        expect(wrapper.emitted('update:modelValue')).toBeUndefined()
      })

      it('should deselect an item when clearable is true', async () => {
        await wrapper.setProps({
          modelValue: 1,
          clearable: true
        })

        await wrapper.vm.$nextTick()

        await wrapper.find('.vk-select__item:first-child').trigger('click')

        expect(wrapper.emitted('update:modelValue')).toEqual([[undefined]])
      })
    })

    describe('Multiple selection', () => {
      beforeEach(async () => {
        await mountSelect({
          multiple: true,
          modelValue: []
        })

        await openDropdown()
      })

      afterEach(() => wrapper.unmount())

      it('should select multiple items', async () => {
        const items = wrapper.findAll('.vk-select__item')

        await items[0].trigger('click')
        await items[1].trigger('click')

        expect(wrapper.emitted('update:modelValue')).toEqual([[[1]], [[2]]])
      })

      it('should initialize selected values as an empty array when modelValue is not an array', async () => {
        await wrapper.setProps({
          modelValue: undefined
        })

        await wrapper.vm.$nextTick()

        await wrapper.find('.vk-select__item:first-child').trigger('click')

        expect(wrapper.emitted('update:modelValue')).toEqual([[[1]]])
      })

      it('should remove an already selected item', async () => {
        await wrapper.setProps({
          modelValue: [1, 2]
        })

        await wrapper.vm.$nextTick()

        await wrapper.find('.vk-select__item:first-child').trigger('click')

        expect(wrapper.emitted('update:modelValue')).toEqual([[[2]]])
      })

      it('should not remove the last item when clearable is false', async () => {
        await wrapper.setProps({
          modelValue: [1],
          clearable: false
        })

        await wrapper.vm.$nextTick()

        await wrapper.find('.vk-select__item:first-child').trigger('click')

        expect(wrapper.emitted('update:modelValue')).toBeUndefined()
      })
    })

    describe('Disabled and readonly', () => {
      beforeEach(async () => {
        await mountSelect()
        await openDropdown()
      })

      afterEach(() => wrapper.unmount())

      it('should not select an item when disabled', async () => {
        await wrapper.setProps({
          disabled: true
        })

        await wrapper.vm.$nextTick()

        await wrapper.find('.vk-select__item:first-child').trigger('click')

        expect(wrapper.emitted('update:modelValue')).toBeUndefined()
      })

      it('should not select an item when readonly', async () => {
        await wrapper.setProps({
          readonly: true
        })

        await wrapper.vm.$nextTick()

        await wrapper.find('.vk-select__item:first-child').trigger('click')

        expect(wrapper.emitted('update:modelValue')).toBeUndefined()
      })
    })
  })

  describe('Keyboard Navigation', () => {
    beforeEach(async () => {
      useListKeyboardNavMock.mockClear()

      await mountSelect()

      await openDropdown()
    })

    afterEach(() => wrapper.unmount())

    it('should initialize keyboard navigation with loop enabled and item count', () => {
      const config = useListKeyboardNavMock.mock.calls[0][0]

      expect(config).toEqual(
        expect.objectContaining({
          loop: true,
          itemCount: expect.any(Function)
        })
      )
    })

    it('should return the amount of options from itemCount callback', () => {
      const config = useListKeyboardNavMock.mock.calls[0][0] as {
        itemCount: () => number
      }

      expect(config.itemCount()).toBe(options.length)
    })

    it('should enable keyboard navigation only when dropdown is open', async () => {
      const config = useListKeyboardNavMock.mock.calls[0][0] as {
        enabled: () => boolean
      }

      await wrapper.find('.vk-input__input').trigger('blur')
      await nextTick()

      expect(config.enabled()).toBe(false)
    })

    it('should provide move and select callbacks', () => {
      const config = useListKeyboardNavMock.mock.calls[0][0]

      expect(Object.keys(config)).toEqual(expect.arrayContaining(['onMove', 'onSelect']))
    })

    it('should trigger keyboard navigation from the input', async () => {
      const mockHandler = vi.fn()

      useListKeyboardNavMock.mockReturnValue(mockHandler)

      await mountSelect()

      const input = wrapper.find('.vk-input__input')

      await input.trigger('focus')
      await nextTick()

      await input.trigger('keydown', {
        key: 'ArrowDown'
      })

      expect(mockHandler).toHaveBeenCalled()
    })

    it('should highlight the item when navigation moves', async () => {
      const config = useListKeyboardNavMock.mock.calls[0][0] as {
        onMove: (index: number) => void
      }

      config.onMove(2)

      await nextTick()

      const items = wrapper.findAll('.vk-select__item')

      expect(items[2].attributes('data-highlighted')).toBe('true')
    })

    it('should scroll the highlighted item into view', async () => {
      const config = useListKeyboardNavMock.mock.calls[0][0] as {
        onMove: (index: number) => void
      }

      config.onMove(2)

      await nextTick()

      expect(HTMLElement.prototype.scrollIntoView).toHaveBeenCalled()
    })

    it('should select an option from keyboard navigation in single mode', async () => {
      const config = useListKeyboardNavMock.mock.calls[0][0] as {
        onSelect: (index: number) => void
      }

      config.onSelect(0)

      await nextTick()

      expect(wrapper.emitted('update:modelValue')).toEqual([[1]])
    })

    it('should select an option from keyboard navigation in multiple mode', async () => {
      await wrapper.setProps({
        multiple: true,
        modelValue: []
      })

      await nextTick()

      const config = useListKeyboardNavMock.mock.calls[0][0] as {
        onSelect: (index: number) => void
      }

      config.onSelect(0)

      await nextTick()

      expect(wrapper.emitted('update:modelValue')).toEqual([[[1]]])
    })

    it('should ignore selection when option does not exist', async () => {
      const config = useListKeyboardNavMock.mock.calls[0][0] as {
        onSelect: (index: number) => void
      }

      config.onSelect(999)

      await nextTick()

      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    })
  })

  describe('Clear behavior', () => {
    beforeEach(async () => {
      await mountSelect()

      await openDropdown()
    })

    afterEach(() => wrapper.unmount())

    it('should clear the selected value when clearable is enabled', async () => {
      await wrapper.setProps({
        modelValue: 1,
        clearable: true
      })

      await wrapper.vm.$nextTick()

      const input = wrapper.findComponent({
        name: 'VkInput'
      })

      input.vm.$emit('clear')

      await wrapper.vm.$nextTick()

      expect(wrapper.emitted('update:modelValue')).toEqual([[undefined]])
    })

    it('should not clear the selected value when clearable is disabled', async () => {
      await wrapper.setProps({
        modelValue: 1,
        clearable: false
      })

      await wrapper.vm.$nextTick()

      const input = wrapper.findComponent({
        name: 'VkInput'
      })

      input.vm.$emit('clear')

      await wrapper.vm.$nextTick()

      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    })

    it('should emit an empty array when clearing multiple selection', async () => {
      await wrapper.setProps({
        modelValue: [1, 2],
        multiple: true,
        clearable: true
      })

      await wrapper.vm.$nextTick()

      const input = wrapper.findComponent({
        name: 'VkInput'
      })

      input.vm.$emit('clear')

      await wrapper.vm.$nextTick()

      expect(wrapper.emitted('update:modelValue')).toEqual([[[]]])
    })
  })

  describe('Display value', () => {
    beforeEach(async () => {
      await mountSelect()
    })

    afterEach(() => wrapper.unmount())

    it('should display the label for selected single value', async () => {
      await wrapper.setProps({
        modelValue: 1
      })

      await wrapper.vm.$nextTick()

      const input = wrapper.findComponent({
        name: 'VkInput'
      })

      expect(input.find('input').element.value).toBe('Wade Cooper')
    })

    it('should display selected labels for multiple values', async () => {
      await wrapper.setProps({
        modelValue: [1, 2],
        multiple: true
      })

      await wrapper.vm.$nextTick()

      const input = wrapper.findComponent({
        name: 'VkInput'
      })

      expect(input.find('input').element.value).toBe('Wade Cooper, Arlene Mccoy')
    })

    it('should display an empty value when no option is selected', async () => {
      await wrapper.setProps({
        modelValue: undefined
      })

      await wrapper.vm.$nextTick()

      const input = wrapper.findComponent({
        name: 'VkInput'
      })

      expect(input.find('input').element.value).toBe('')
    })

    it('should ignore values that do not exist in options', async () => {
      await wrapper.setProps({
        modelValue: 99
      })

      await wrapper.vm.$nextTick()

      const input = wrapper.findComponent({
        name: 'VkInput'
      })

      expect(input.find('input').element.value).toBe('')
    })
  })

  describe('Accessibility', () => {
    beforeEach(async () => {
      await mountSelect()

      await openDropdown()
    })

    afterEach(() => wrapper.unmount())

    it('should render listbox role', () => {
      expect(wrapper.find('[role="listbox"]').exists()).toBe(true)
    })

    it('should render options with option role', () => {
      expect(wrapper.find('[role="option"]').exists()).toBe(true)
    })

    it('should mark selected options', async () => {
      await wrapper.setProps({
        modelValue: 1
      })

      await wrapper.vm.$nextTick()

      expect(
        wrapper.find('.vk-select__item')
          .attributes('aria-selected')
      )
        .toBe('true')
    })
  })

  describe('Emits', () => {
    beforeEach(async () => {
      await mountSelect()

      await openDropdown()
    })

    afterEach(() => wrapper.unmount())

    it('should emit update:modelValue when selecting an option', async () => {
      await wrapper
        .find('.vk-select__item:first-child')
        .trigger('click')

      expect(wrapper.emitted())
        .toHaveProperty('update:modelValue')
    })

    it('should emit the selected value', async () => {
      await wrapper
        .find('.vk-select__item:first-child')
        .trigger('click')

      expect(wrapper.emitted('update:modelValue')).toEqual([[1]])
    })
  })
})
