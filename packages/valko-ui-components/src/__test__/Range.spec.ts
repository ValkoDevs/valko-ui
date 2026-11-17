import { mount, VueWrapper } from '@vue/test-utils'
import VkRange from '#valkoui/components/Range.vue'

// jsdom lacks ResizeObserver and pointer-capture APIs that reka-ui's slider uses
vi.stubGlobal('ResizeObserver', class {
  observe() { /* noop */ }
  unobserve() { /* noop */ }
  disconnect() { /* noop */ }
})
Element.prototype.setPointerCapture = vi.fn()
Element.prototype.hasPointerCapture = vi.fn(() => true)
Element.prototype.releasePointerCapture = vi.fn()

const firePointerDown = (element: Element, clientX: number) => {
  element.dispatchEvent(new PointerEvent('pointerdown', { clientX, bubbles: true, cancelable: true }))
}

describe('Range component', () => {
  let wrapper: VueWrapper

  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkRange, {
          props: {
            modelValue: 0
          }
        })
      })

      afterEach(() => wrapper.unmount())

      it('should render', () => {
        expect(wrapper.find('.vk-range').exists()).toBe(true)
      })

      it('should be color primary', () => {
        expect(wrapper.find('.bg-primary').exists()).toBe(true)
      })

      it('should be size md', () => {
        expect(wrapper.find('.h-3').exists()).toBe(true)
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.bg-surface-container-high').exists()).toBe(true)
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.rounded-md').exists()).toBe(true)
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', () => {
        wrapper = mount(VkRange, {
          props: {
            color: 'primary',
            modelValue: 0
          }
        })

        expect(wrapper.find('.bg-primary').exists()).toBe(true)
      })

      it('should be color secondary when props.color is secondary', () => {
        wrapper = mount(VkRange, {
          props: {
            color: 'secondary',
            modelValue: 0
          }
        })

        expect(wrapper.find('.bg-secondary').exists()).toBe(true)
      })

      it('should be color positive when props.color is positive', () => {
        wrapper = mount(VkRange, {
          props: {
            color: 'positive',
            modelValue: 0
          }
        })

        expect(wrapper.find('.bg-positive').exists()).toBe(true)
      })

      it('should be color accent when props.color is accent', () => {
        wrapper = mount(VkRange, {
          props: {
            color: 'accent',
            modelValue: 0
          }
        })

        expect(wrapper.find('.bg-accent').exists()).toBe(true)
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkRange, {
          props: {
            color: 'warning',
            modelValue: 0
          }
        })

        expect(wrapper.find('.bg-warning').exists()).toBe(true)
      })

      it('should be color negative when props.color is negative', () => {
        wrapper = mount(VkRange, {
          props: {
            color: 'negative',
            modelValue: 0
          }
        })

        expect(wrapper.find('.bg-negative').exists()).toBe(true)
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkRange, {
          props: {
            shape: 'rounded',
            modelValue: 0
          }
        })

        expect(wrapper.find('.rounded-full').exists()).toBe(true)
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkRange, {
          props: {
            shape: 'soft',
            modelValue: 0
          }
        })

        expect(wrapper.find('.rounded-md').exists()).toBe(true)
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkRange, {
          props: {
            shape: 'square',
            modelValue: 0
          }
        })

        expect(wrapper.find('.rounded-none').exists()).toBe(true)
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        wrapper = mount(VkRange, {
          props: {
            size: 'xs',
            modelValue: 0
          }
        })

        expect(wrapper.find('.h-2').exists()).toBe(true)
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkRange, {
          props: {
            size: 'sm',
            modelValue: 0
          }
        })

        expect(wrapper.find('.h-2\\.5').exists()).toBe(true)
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkRange, {
          props: {
            size: 'md',
            modelValue: 0
          }
        })

        expect(wrapper.find('.h-3').exists()).toBe(true)
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkRange, {
          props: {
            size: 'lg',
            modelValue: 0
          }
        })

        expect(wrapper.find('.h-3\\.5').exists()).toBe(true)
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.variant is filled', () => {
        wrapper = mount(VkRange, {
          props: {
            variant: 'filled',
            modelValue: 0
          }
        })

        expect(wrapper.find('.bg-surface-container-high').exists()).toBe(true)
      })

      it('should be outlined when props.variant is outlined', () => {
        wrapper = mount(VkRange, {
          props: {
            variant: 'outlined',
            modelValue: 0
          }
        })

        expect(wrapper.find('.border-2').exists()).toBe(true)
      })

      it('should be ghost when props.variant is ghost', () => {
        wrapper = mount(VkRange, {
          props: {
            variant: 'ghost',
            modelValue: 0
          }
        })

        expect(wrapper.find('.bg-surface-container-high\\/\\[\\.5\\]').exists()).toBe(true)
      })

      it('should be gradient when props.variant is gradient', () => {
        wrapper = mount(VkRange, {
          props: {
            variant: 'gradient',
            modelValue: 0
          }
        })

        expect(wrapper.find('.bg-gradient-to-br').exists()).toBe(true)
      })
    })

    describe('When isDouble prop changes', () => {
      it('should have one thumb when isDouble is false', () => {
        const localWrapper = mount(VkRange, {
          props: { modelValue: 0, isDouble: false }
        })
        const thumbs = localWrapper.findAll('.vk-range__thumb')
        expect(thumbs.length).toBe(1)
      })

      it('should have two thumbs when isDouble is true', () => {
        const localWrapper = mount(VkRange, {
          props: { modelValue: [0, 50], isDouble: true }
        })
        const thumbs = localWrapper.findAll('.vk-range__thumb')
        expect(thumbs.length).toBe(2)
      })
    })

    describe('When labels prop changes', () => {
      it('should render label slot content when labels are provided', () => {
        const labels = [{ value: 25, label: 'Low' }, { value: 75, label: 'High' }]
        wrapper = mount(VkRange, {
          props: { modelValue: 0, labels, showSteps: false }
        })
        expect(wrapper.find('.vk-range__label').exists()).toBe(true)
      })
    })
  })

  describe('Behavior', () => {
    const stubRect = (element: HTMLElement, rect: Partial<DOMRect>) => {
      element.getBoundingClientRect = () => rect as DOMRect
    }

    describe('Keyboard handling', () => {
      it('should increment the value by step on ArrowRight key press', async () => {
        wrapper = mount(VkRange, {
          props: { min: 0, max: 100, step: 10, modelValue: 50 }
        })

        await wrapper.find('.vk-range__thumb').trigger('keydown', { key: 'ArrowRight' })

        expect(wrapper.emitted('update:modelValue')![0]).toEqual([60])
      })

      it('should decrement the value by step on ArrowLeft key press', async () => {
        wrapper = mount(VkRange, {
          props: { min: 0, max: 100, step: 10, modelValue: 50 }
        })

        await wrapper.find('.vk-range__thumb').trigger('keydown', { key: 'ArrowLeft' })

        expect(wrapper.emitted('update:modelValue')![0]).toEqual([40])
      })

      it('should increment the value by step on ArrowUp key press', async () => {
        wrapper = mount(VkRange, {
          props: { min: 0, max: 100, step: 10, modelValue: 50 }
        })

        await wrapper.find('.vk-range__thumb').trigger('keydown', { key: 'ArrowUp' })

        expect(wrapper.emitted('update:modelValue')![0]).toEqual([60])
      })

      it('should decrement the value by step on ArrowDown key press', async () => {
        wrapper = mount(VkRange, {
          props: { min: 0, max: 100, step: 10, modelValue: 50 }
        })

        await wrapper.find('.vk-range__thumb').trigger('keydown', { key: 'ArrowDown' })

        expect(wrapper.emitted('update:modelValue')![0]).toEqual([40])
      })

      it('should set the value to min on Home key press', async () => {
        wrapper = mount(VkRange, {
          props: { min: 0, max: 100, step: 10, modelValue: 50 }
        })

        await wrapper.find('.vk-range__thumb').trigger('keydown', { key: 'Home' })

        expect(wrapper.emitted('update:modelValue')![0]).toEqual([0])
      })

      it('should set the value to max on End key press', async () => {
        wrapper = mount(VkRange, {
          props: { min: 0, max: 100, step: 10, modelValue: 50 }
        })

        await wrapper.find('.vk-range__thumb').trigger('keydown', { key: 'End' })

        expect(wrapper.emitted('update:modelValue')![0]).toEqual([100])
      })

      it('should not emit on unsupported key press', async () => {
        wrapper = mount(VkRange, {
          props: { min: 0, max: 100, step: 10, modelValue: 50 }
        })

        await wrapper.find('.vk-range__thumb').trigger('keydown', { key: 'Enter' })

        expect(wrapper.emitted('update:modelValue')).toBeUndefined()
      })

      it('should not exceed max on ArrowRight key press at max value', async () => {
        wrapper = mount(VkRange, {
          props: { min: 0, max: 100, step: 10, modelValue: 100 }
        })

        await wrapper.find('.vk-range__thumb').trigger('keydown', { key: 'ArrowRight' })

        expect(wrapper.emitted('update:modelValue')).toBeUndefined()
      })

      it('should not go below min on ArrowLeft key press at min value', async () => {
        wrapper = mount(VkRange, {
          props: { min: 0, max: 100, step: 10, modelValue: 0 }
        })

        await wrapper.find('.vk-range__thumb').trigger('keydown', { key: 'ArrowLeft' })

        expect(wrapper.emitted('update:modelValue')).toBeUndefined()
      })

      it('should increment the min thumb by step on ArrowRight key press when isDouble is true', async () => {
        wrapper = mount(VkRange, {
          props: { min: 0, max: 100, step: 10, modelValue: [20, 80], isDouble: true }
        })

        const thumbs = wrapper.findAll('.vk-range__thumb')
        await thumbs[0].trigger('keydown', { key: 'ArrowRight' })

        expect(wrapper.emitted('update:modelValue')![0]).toEqual([[30, 80]])
      })

      it('should increment the max thumb by step on ArrowRight key press when the max thumb is focused', async () => {
        wrapper = mount(VkRange, {
          props: { min: 0, max: 100, step: 10, modelValue: [20, 80], isDouble: true }
        })
        await wrapper.vm.$nextTick()

        const thumbs = wrapper.findAll('.vk-range__thumb')
        await thumbs[1].trigger('focus')
        await thumbs[1].trigger('keydown', { key: 'ArrowRight' })

        expect(wrapper.emitted('update:modelValue')![0]).toEqual([[20, 90]])
      })

      it('should prevent thumbs from overlapping when the min thumb is moved past the max', async () => {
        wrapper = mount(VkRange, {
          props: { min: 0, max: 100, step: 10, modelValue: [70, 80], isDouble: true }
        })

        const thumbs = wrapper.findAll('.vk-range__thumb')
        await thumbs[0].trigger('keydown', { key: 'ArrowRight' })

        expect(wrapper.emitted('update:modelValue')![0]).toEqual([[80, 80]])
      })
    })

    describe('Track interactions', () => {
      it('should move the thumb to the clicked position', async () => {
        wrapper = mount(VkRange, {
          props: { min: 0, max: 100, step: 5, modelValue: 0 }
        })

        const slider = wrapper.find('.vk-range')
        stubRect(slider.element as HTMLElement, {
          left: 0,
          width: 100,
          top: 0,
          height: 10,
          right: 100,
          bottom: 10,
          x: 0,
          y: 0,
          toJSON: () => {}
        })

        firePointerDown(slider.element, 50)
        await wrapper.vm.$nextTick()

        expect(wrapper.emitted('update:modelValue')![0]).toEqual([50])
      })

      it('should move the nearest thumb to the clicked position when isDouble is true', async () => {
        wrapper = mount(VkRange, {
          props: { min: 0, max: 100, step: 10, modelValue: [30, 80], isDouble: true }
        })

        const slider = wrapper.find('.vk-range')
        stubRect(slider.element as HTMLElement, {
          left: 0,
          width: 100,
          top: 0,
          height: 10,
          right: 100,
          bottom: 10,
          x: 0,
          y: 0,
          toJSON: () => {}
        })

        firePointerDown(slider.element, 20)
        await wrapper.vm.$nextTick()
        expect(wrapper.emitted('update:modelValue')![0]).toEqual([[20, 80]])

        firePointerDown(slider.element, 90)
        await wrapper.vm.$nextTick()
        expect(wrapper.emitted('update:modelValue')![1]).toEqual([[30, 90]])
      })
    })

    describe('Label clicks', () => {
      it('should emit the label value when a label is clicked', async () => {
        const labels = [{ value: 25, label: 'Low' }]
        wrapper = mount(VkRange, {
          props: { min: 0, max: 100, step: 5, modelValue: 0, labels }
        })

        await wrapper.find('.vk-range__label').trigger('click')

        expect(wrapper.emitted('update:modelValue')![0]).toEqual([25])
      })

      it('should clamp out-of-range label values', async () => {
        const labels = [{ value: 150, label: 'High' }]
        wrapper = mount(VkRange, {
          props: { min: 0, max: 100, step: 5, modelValue: 0, labels }
        })

        await wrapper.find('.vk-range__label').trigger('click')

        expect(wrapper.emitted('update:modelValue')![0]).toEqual([100])
      })

      it('should move the nearest thumb when a label is clicked when isDouble is true', async () => {
        const labels = [{ value: 75, label: 'High' }]
        wrapper = mount(VkRange, {
          props: { min: 0, max: 100, step: 5, modelValue: [30, 80], isDouble: true, labels }
        })

        await wrapper.find('.vk-range__label').trigger('click')

        expect(wrapper.emitted('update:modelValue')![0]).toEqual([[30, 75]])
      })
    })

    describe('Accessibility', () => {
      it('should expose slider role and current value on the thumb', async () => {
        wrapper = mount(VkRange, {
          props: { modelValue: 50 }
        })
        await wrapper.vm.$nextTick()

        const thumb = wrapper.find('.vk-range__thumb')
        expect(thumb.attributes('role')).toBe('slider')
        expect(thumb.attributes('aria-valuenow')).toBe('50')
        expect(thumb.attributes('aria-valuemin')).toBe('0')
        expect(thumb.attributes('aria-valuemax')).toBe('100')
        expect(thumb.attributes('aria-label')).toBe('Value')
      })

      it('should label min and max thumbs when isDouble is true', () => {
        wrapper = mount(VkRange, {
          props: { modelValue: [20, 80], isDouble: true }
        })

        const thumbs = wrapper.findAll('.vk-range__thumb')
        expect(thumbs[0].attributes('aria-label')).toBe('Minimum value')
        expect(thumbs[1].attributes('aria-label')).toBe('Maximum value')
      })

      it('should forward aria-describedby to the thumbs', () => {
        wrapper = mount(VkRange, {
          props: { modelValue: 0, ariaDescribedBy: 'range-description' }
        })

        expect(wrapper.find('.vk-range__thumb').attributes('aria-describedby')).toBe('range-description')
      })
    })

    describe('Step marks and striping', () => {
      it('should render step marks when showSteps is true', () => {
        wrapper = mount(VkRange, {
          props: { min: 0, max: 100, step: 10, modelValue: 0, showSteps: true }
        })

        expect(wrapper.findAll('.vk-range__mark').length).toBe(9)
      })

      it('should apply the striped background to the range when striped is true', () => {
        wrapper = mount(VkRange, {
          props: { modelValue: 0, striped: true, size: 'md' }
        })

        expect(wrapper.find('.vk-range__progress').attributes('style')).toContain('background-image')
      })

      it('should not apply the striped background when striped is false', () => {
        wrapper = mount(VkRange, {
          props: { modelValue: 0, striped: false }
        })

        expect(wrapper.find('.vk-range__progress').attributes('style')).not.toContain('background-image')
      })
    })
  })
})
