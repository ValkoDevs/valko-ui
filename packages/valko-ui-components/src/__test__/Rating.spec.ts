import { mount, VueWrapper } from '@vue/test-utils'
import { vi } from 'vitest'
import VkRating from '#valkoui/components/Rating.vue'
import VkIcon from '#valkoui/components/Icon.vue'

const mockElementRect = (element: Element, width = 100) => {
  vi.spyOn(element, 'getBoundingClientRect').mockReturnValue({
    width,
    left: 0,
    top: 0,
    right: width,
    bottom: 0,
    height: 0,
    x: 0,
    y: 0,
    toJSON: () => ({})
  } as DOMRect)
}

describe('Rating component', () => {
  let wrapper: VueWrapper
  const globalOptions = {
    global: {
      components: {
        VkIcon
      }
    }
  }

  const mountRating = (props = {}) => {
    wrapper = mount(VkRating, {
      ...globalOptions,
      props: {
        modelValue: 0,
        ...props
      }
    })

    return wrapper
  }

  describe('Props', () => {
    describe('Default props', () => {
      beforeEach(() => {
        mountRating()
      })

      it('should render the rating component', () => {
        expect(wrapper.find('.vk-rating').exists()).toBe(true)
      })

      it('should render 5 items by default', () => {
        expect(wrapper.findAll('[role="radio"]')).toHaveLength(5)
      })

      it('should use primary color by default', () => {
        expect(wrapper.find('.text-primary').exists()).toBe(true)
      })

      it('should use md size by default', () => {
        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should not be disabled by default', () => {
        expect(wrapper.find('.cursor-not-allowed').exists()).toBe(false)
      })
    })

    describe('When max prop changes', () => {
      it('should render the configured amount of items', () => {
        mountRating({
          max: 7
        })

        expect(wrapper.findAll('[role="radio"]')).toHaveLength(7)
      })

      it('should clamp max to at least one item', () => {
        mountRating({
          max: 0
        })

        expect(wrapper.findAll('[role="radio"]')).toHaveLength(1)
      })
    })

    describe('When disabled prop changes', () => {
      it('should render disabled styles', () => {
        mountRating({
          modelValue: 2,
          disabled: true
        })

        expect(wrapper.find('.cursor-not-allowed').exists()).toBe(true)
      })
    })
  })

  describe('Selection', () => {
    beforeEach(() => {
      mountRating()
    })

    describe('Single selection', () => {
      it('should emit the selected value when an item is clicked', async () => {
        const item = wrapper.findAll('[role="radio"]')[2]
        mockElementRect(item.element)

        await item.trigger('click', {
          clientX: 100
        })

        expect(wrapper.emitted('update:modelValue')).toEqual([[3]])
      })

      it('should clear the value when clicking the selected item', async () => {
        await wrapper.setProps({
          modelValue: 3
        })

        const item = wrapper.findAll('[role="radio"]')[2]
        mockElementRect(item.element)

        await item.trigger('click', {
          clientX: 100
        })

        expect(wrapper.emitted('update:modelValue')).toEqual([[0]])
      })
    })

    describe('Half selection', () => {
      beforeEach(async () => {
        await wrapper.setProps({
          half: true
        })
      })

      it('should emit half value when clicking the first half of an item', async () => {
        const item = wrapper.findAll('[role="radio"]')[2]
        mockElementRect(item.element)

        await item.trigger('click', {
          clientX: 20
        })

        expect(wrapper.emitted('update:modelValue')).toEqual([[2.5]])
      })

      it('should emit whole value when clicking the second half of an item', async () => {
        const item = wrapper.findAll('[role="radio"]')[2]
        mockElementRect(item.element)

        await item.trigger('click', {
          clientX: 80
        })

        expect(wrapper.emitted('update:modelValue')).toEqual([[3]])
      })
    })

    describe('Disabled and readonly', () => {
      it('should not emit when disabled', async () => {
        await wrapper.setProps({
          disabled: true
        })

        const item = wrapper.findAll('[role="radio"]')[1]
        mockElementRect(item.element)

        await item.trigger('click', {
          clientX: 100
        })

        expect(wrapper.emitted('update:modelValue')).toBeUndefined()
      })

      it('should not emit when readonly', async () => {
        await wrapper.setProps({
          readonly: true
        })

        const item = wrapper.findAll('[role="radio"]')[1]
        mockElementRect(item.element)

        await item.trigger('click', {
          clientX: 100
        })

        expect(wrapper.emitted('update:modelValue')).toBeUndefined()
      })
    })
  })

  describe('Hover', () => {
    beforeEach(() => {
      mountRating({
        modelValue: 2
      })
    })

    const getOverlayStyle = (index: number) => {
      const item = wrapper.findAll('[role="radio"]')[index]

      return item.findAllComponents(VkIcon)[1].attributes('style')
    }

    it('should update the fill while hovering', async () => {
      const item = wrapper.findAll('[role="radio"]')[3]
      mockElementRect(item.element)

      await item.trigger('mousemove', {
        clientX: 100
      })

      expect(getOverlayStyle(3)).toContain('width: 100%')
    })

    it('should restore the selected value after mouseleave', async () => {
      const item = wrapper.findAll('[role="radio"]')[3]
      mockElementRect(item.element)

      await item.trigger('mousemove', {
        clientX: 100
      })

      await item.trigger('mouseleave')

      expect(getOverlayStyle(3)).toContain('width: 0%')
    })

    it('should hover half values when half mode is enabled', async () => {
      await wrapper.setProps({
        half: true
      })

      const item = wrapper.findAll('[role="radio"]')[2]
      mockElementRect(item.element)

      await item.trigger('mousemove', {
        clientX: 20
      })

      expect(getOverlayStyle(2)).toContain('width: 50%')
    })

    it('should not update the hover state when disabled', async () => {
      await wrapper.setProps({
        disabled: true
      })

      const item = wrapper.findAll('[role="radio"]')[3]
      mockElementRect(item.element)

      await item.trigger('mousemove', {
        clientX: 100
      })

      expect(getOverlayStyle(3)).toContain('width: 0%')
    })

    it('should not update the hover state when readonly', async () => {
      await wrapper.setProps({
        readonly: true
      })

      const item = wrapper.findAll('[role="radio"]')[3]
      mockElementRect(item.element)

      await item.trigger('mousemove', {
        clientX: 100
      })

      expect(getOverlayStyle(3)).toContain('width: 0%')
    })
  })

  describe('Animation', () => {
    beforeEach(() => {
      vi.useFakeTimers()

      wrapper = mount(VkRating, {
        ...globalOptions,
        props: {
          modelValue: 0
        }
      })
    })

    afterEach(() => {
      vi.useRealTimers()
    })

    it('should animate selected items after selecting a value', async () => {
      const item = wrapper.findAll('[role="radio"]')[2]
      mockElementRect(item.element)

      await item.trigger('click', {
        clientX: 100
      })

      expect(wrapper.findAll('.animate-pop')).toHaveLength(3)
    })

    it('should remove animation state after animation timeout', async () => {
      const item = wrapper.findAll('[role="radio"]')[2]
      mockElementRect(item.element)

      await item.trigger('click', {
        clientX: 100
      })

      expect(wrapper.findAll('.animate-pop')).toHaveLength(3)

      vi.advanceTimersByTime(300)

      await wrapper.vm.$nextTick()

      expect(wrapper.findAll('.animate-pop')).toHaveLength(0)
    })

    it('should reset previous animation timeout when selecting quickly', async () => {
      const items = wrapper.findAll('[role="radio"]')

      mockElementRect(items[1].element)
      mockElementRect(items[3].element)

      await items[1].trigger('click', {
        clientX: 100
      })

      vi.advanceTimersByTime(100)

      await items[3].trigger('click', {
        clientX: 100
      })

      expect(wrapper.findAll('.animate-pop')).toHaveLength(4)

      vi.advanceTimersByTime(300)

      await wrapper.vm.$nextTick()

      expect(wrapper.findAll('.animate-pop')).toHaveLength(0)
    })

    it('should clear animation timeout on unmount', async () => {
      const clearTimeoutSpy = vi.spyOn(globalThis, 'clearTimeout')

      const item = wrapper.findAll('[role="radio"]')[2]
      mockElementRect(item.element)

      await item.trigger('click', {
        clientX: 100
      })

      wrapper.unmount()

      expect(clearTimeoutSpy).toHaveBeenCalled()

      clearTimeoutSpy.mockRestore()
    })
  })

  describe('Accessibility', () => {
    beforeEach(() => {
      mountRating({
        modelValue: 2
      })
    })

    it('should render a radiogroup', () => {
      const group = wrapper.find('[role="radiogroup"]')

      expect(group.exists()).toBe(true)
    })

    it('should render radio items', () => {
      expect(wrapper.findAll('[role="radio"]')).toHaveLength(5)
    })

    it('should mark selected items as checked', () => {
      const items = wrapper.findAll('[role="radio"]')

      expect(items[0].attributes('aria-checked')).toBe('true')
      expect(items[1].attributes('aria-checked')).toBe('true')
      expect(items[2].attributes('aria-checked')).toBe('false')
    })

    it('should expose the current item label', () => {
      const items = wrapper.findAll('[role="radio"]')

      expect(items[0].attributes('aria-label')).toBe('1 of 5')
      expect(items[4].attributes('aria-label')).toBe('5 of 5')
    })

    describe('When accessibility props are provided', () => {
      beforeEach(async () => {
        await wrapper.setProps({
          ariaLabel: 'Rating',
          ariaLabelledBy: 'rating-label',
          ariaDescribedBy: 'rating-description'
        })
      })

      it('should forward accessibility attributes to the radiogroup', () => {
        const group = wrapper.find('[role="radiogroup"]')

        expect(group.attributes()).toEqual(expect.objectContaining({
          'aria-label': 'Rating',
          'aria-labelledby': 'rating-label',
          'aria-describedby': 'rating-description'
        }))
      })
    })

    describe('When disabled or readonly', () => {
      it('should expose aria-disabled', async () => {
        await wrapper.setProps({
          disabled: true
        })

        expect(wrapper.find('[role="radiogroup"]').attributes('aria-disabled')).toBe('true')
      })

      it('should expose aria-readonly', async () => {
        await wrapper.setProps({
          readonly: true
        })

        expect(wrapper.find('[role="radiogroup"]').attributes('aria-readonly')).toBe('true')
      })
    })
  })

  describe('Slots', () => {
    it('should expose default scoped slot props', () => {
      wrapper = mount(VkRating, {
        ...globalOptions,
        props: {
          modelValue: 2
        },
        slots: {
          default: `
      <template #default="{ value, displayValue, items, setValue, isDisabled, isReadonly }">
        <div class="slot-data">
          {{ JSON.stringify({
            value,
            displayValue,
            items: items.length,
            setValue: typeof setValue,
            disabled: isDisabled,
            readonly: isReadonly
          }) }}
        </div>
      </template>
    `
        }
      })

      expect(wrapper.find('.slot-data').text()).toBe(JSON.stringify({
        value: 2,
        displayValue: 2,
        items: 5,
        setValue: 'function',
        disabled: false,
        readonly: false
      }))
    })

    it('should expose star item state through slot items', () => {
      wrapper = mount(VkRating, {
        ...globalOptions,
        props: {
          modelValue: 3
        },
        slots: {
          default: `
          <template #default="{ items }">
            <div
              v-for="item in items"
              :key="item.index"
              :data-fill="item.fill"
              :data-active="item.active"
            />
          </template>
        `
        }
      })

      const items = wrapper.findAll('[data-fill]')

      expect(items.map(item => ({
        fill: item.attributes('data-fill'),
        active: item.attributes('data-active')
      }))).toEqual([
        {
          fill: '100',
          active: 'true'
        },
        {
          fill: '100',
          active: 'true'
        },
        {
          fill: '100',
          active: 'true'
        },
        {
          fill: '0',
          active: 'false'
        },
        {
          fill: '0',
          active: 'false'
        }
      ])
    })
  })
})
