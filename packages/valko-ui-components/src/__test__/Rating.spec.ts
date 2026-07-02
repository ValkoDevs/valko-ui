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

  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkRating, {
          ...globalOptions,
          props: {
            modelValue: 0
          }
        })
      })

      it('should render', () => {
        expect(wrapper.find('.vk-rating').exists()).toBe(true)
      })

      it('should use slider semantics', () => {
        const root = wrapper.find('.vk-rating')
        expect(root.attributes('role')).toBe('slider')
        expect(root.attributes('aria-valuemin')).toBe('0')
        expect(root.attributes('aria-valuemax')).toBe('5')
        expect(root.attributes('aria-valuenow')).toBe('0')
      })

      it('should render 5 items by default', () => {
        expect(wrapper.findAll('.vk-rating [data-index]').length).toBe(5)
      })

      it('should be color primary', () => {
        expect(wrapper.find('.text-primary').exists()).toBe(true)
      })

      it('should be size md', () => {
        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should not be disabled by default', () => {
        expect(wrapper.find('.cursor-not-allowed').exists()).toBe(false)
      })
    })

    describe('When max prop changes', () => {
      it('should render max amount of items', () => {
        wrapper = mount(VkRating, {
          ...globalOptions,
          props: {
            modelValue: 0,
            max: 7
          }
        })

        expect(wrapper.findAll('.vk-rating [data-index]').length).toBe(7)
      })

      it('should clamp max to at least 1', () => {
        wrapper = mount(VkRating, {
          ...globalOptions,
          props: {
            modelValue: 0,
            max: 0
          }
        })

        expect(wrapper.findAll('.vk-rating [data-index]').length).toBe(1)
        expect(wrapper.find('.vk-rating').attributes('aria-valuemax')).toBe('1')
      })
    })

    describe('When disabled prop changes', () => {
      it('should set disabled styles and tabindex -1', () => {
        wrapper = mount(VkRating, {
          ...globalOptions,
          props: {
            modelValue: 2,
            disabled: true
          }
        })

        const root = wrapper.find('.vk-rating')

        expect(wrapper.find('.cursor-not-allowed').exists()).toBe(true)
        expect(root.attributes('tabindex')).toBe('-1')
        expect(root.attributes('aria-disabled')).toBe('true')
      })
    })
  })

  describe('Emits', () => {
    it('should emit update:modelValue on click', async () => {
      wrapper = mount(VkRating, {
        ...globalOptions,
        props: {
          modelValue: 0
        }
      })

      const item = wrapper.find('[data-index="3"]')
      mockElementRect(item.element)

      await item.trigger('click', { clientX: 100 })

      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([3])
    })

    it('should emit 0 when clicking currently selected value', async () => {
      wrapper = mount(VkRating, {
        ...globalOptions,
        props: {
          modelValue: 3
        }
      })

      const item = wrapper.find('[data-index="3"]')
      mockElementRect(item.element)

      await item.trigger('click', { clientX: 100 })

      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([0])
    })

    it('should emit half value when half mode is enabled and cursor is in first half', async () => {
      wrapper = mount(VkRating, {
        ...globalOptions,
        props: {
          modelValue: 0,
          half: true
        }
      })

      const item = wrapper.find('[data-index="3"]')
      mockElementRect(item.element)

      await item.trigger('click', { clientX: 20 })

      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([2.5])
    })

    it('should not emit when disabled', async () => {
      wrapper = mount(VkRating, {
        ...globalOptions,
        props: {
          modelValue: 0,
          disabled: true
        }
      })

      const item = wrapper.find('[data-index="2"]')
      mockElementRect(item.element)

      await item.trigger('click', { clientX: 100 })

      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    })

    it('should not emit when readonly', async () => {
      wrapper = mount(VkRating, {
        ...globalOptions,
        props: {
          modelValue: 0,
          readonly: true
        }
      })

      const item = wrapper.find('[data-index="2"]')
      mockElementRect(item.element)

      await item.trigger('click', { clientX: 100 })

      expect(wrapper.emitted('update:modelValue')).toBeUndefined()
    })
  })

  describe('Keyboard', () => {
    it('should increase value with ArrowRight', async () => {
      wrapper = mount(VkRating, {
        ...globalOptions,
        props: {
          modelValue: 1
        }
      })

      await wrapper.find('.vk-rating').trigger('keydown', { key: 'ArrowRight' })

      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([2])
    })

    it('should decrease value with ArrowLeft', async () => {
      wrapper = mount(VkRating, {
        ...globalOptions,
        props: {
          modelValue: 3
        }
      })

      await wrapper.find('.vk-rating').trigger('keydown', { key: 'ArrowLeft' })

      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([2])
    })

    it('should move to min with Home', async () => {
      wrapper = mount(VkRating, {
        ...globalOptions,
        props: {
          modelValue: 4
        }
      })

      await wrapper.find('.vk-rating').trigger('keydown', { key: 'Home' })

      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([0])
    })

    it('should move to max with End', async () => {
      wrapper = mount(VkRating, {
        ...globalOptions,
        props: {
          modelValue: 0,
          max: 7
        }
      })

      await wrapper.find('.vk-rating').trigger('keydown', { key: 'End' })

      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([7])
    })

    it('should use half-step increments in half mode', async () => {
      wrapper = mount(VkRating, {
        ...globalOptions,
        props: {
          modelValue: 2,
          half: true
        }
      })

      await wrapper.find('.vk-rating').trigger('keydown', { key: 'ArrowRight' })

      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([2.5])
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
          default: `<template #default="{ value, displayValue, items, setValue, hover, clearHover, isDisabled, isReadonly }">
            <div class="slot-value">{{ value }}</div>
            <div class="slot-display">{{ displayValue }}</div>
            <div class="slot-items">{{ items.length }}</div>
            <div class="slot-set-value">{{ typeof setValue }}</div>
            <div class="slot-hover">{{ typeof hover }}</div>
            <div class="slot-clear-hover">{{ typeof clearHover }}</div>
            <div class="slot-disabled">{{ isDisabled }}</div>
            <div class="slot-readonly">{{ isReadonly }}</div>
          </template>`
        }
      })

      expect(wrapper.find('.slot-value').text()).toBe('2')
      expect(wrapper.find('.slot-display').text()).toBe('2')
      expect(wrapper.find('.slot-items').text()).toBe('5')
      expect(wrapper.find('.slot-set-value').text()).toBe('function')
      expect(wrapper.find('.slot-hover').text()).toBe('function')
      expect(wrapper.find('.slot-clear-hover').text()).toBe('function')
      expect(wrapper.find('.slot-disabled').text()).toBe('false')
      expect(wrapper.find('.slot-readonly').text()).toBe('false')
    })
  })
})
