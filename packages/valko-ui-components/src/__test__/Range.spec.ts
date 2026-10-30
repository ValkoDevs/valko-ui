import { nextTick } from 'vue'
import { VueWrapper, mount, DOMWrapper } from '@vue/test-utils'
import VkRange from '#valkoui/components/Range.vue'
import useRangeKeyboardNav from '#valkoui/composables/useRangeKeyboardNav.ts'

vi.mock('#valkoui/composables/useRangeKeyboardNav.ts', () => ({
  default: vi.fn(() => vi.fn())
}))

const useRangeKeyboardNavMock = vi.mocked(useRangeKeyboardNav)

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

        expect(wrapper.find('.vk-range__progress_container').classes()).toContain('h-2.5')
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

        expect(wrapper.find('.vk-range__progress_container').classes()).toContain('h-3.5')
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

        expect(wrapper.find('.vk-range__progress_container').classes()).toContain('bg-surface-container-high/[.5]')
      })

      it('should be gradient when props.variant is gradient', () => {
        wrapper = mount(VkRange, {
          props: {
            variant: 'gradient',
            modelValue: 0
          }
        })

        expect(wrapper.find('.vk-range__progress').classes()).toContain('bg-gradient-to-br')
      })
    })

    describe('When isDouble prop changes', () => {
      it('should render one thumb when isDouble is false', () => {
        wrapper = mount(VkRange, {
          props: {
            modelValue: 0,
            isDouble: false
          }
        })

        expect(wrapper.findAll('.vk-range__thumb')).toHaveLength(1)
      })

      it('should render two thumbs when isDouble is true', () => {
        wrapper = mount(VkRange, {
          props: {
            modelValue: [0, 50],
            isDouble: true
          }
        })

        expect(wrapper.findAll('.vk-range__thumb')).toHaveLength(2)
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

  describe('Methods', () => {
    describe('Thumb position calculation', () => {
      it('should calculate thumb position from slider coordinates', async () => {
        wrapper = mount(VkRange, {
          props: {
            min: 0,
            max: 100,
            step: 5,
            modelValue: 0
          }
        })

        const slider = wrapper.find('.vk-range')
        const sliderElement = slider.element as HTMLElement

        sliderElement.getBoundingClientRect = () => ({
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

        await slider.trigger('mousedown', { clientX: 50 })

        expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([50])
      })

      it('should return 0 when slider element is unavailable', () => {
        wrapper = mount(VkRange, {
          props: {
            min: 0,
            max: 100,
            step: 5,
            modelValue: 0
          }
        })

        // @ts-expect-error: forcing sliderRef to test fallback behavior
        wrapper.vm.sliderRef = null

        // @ts-expect-error: accessing internal method for edge case testing
        const result = wrapper.vm.getNewThumbPosition(50)

        expect(result).toBe(0)
      })
    })

    describe('updateThumbPosition', () => {
      it('should update the position of the thumb and emit the correct value when isDouble is false', async () => {
        const wrapper = mount(VkRange, {
          props: {
            min: 0,
            max: 100,
            step: 5,
            modelValue: 50,
            isDouble: false
          }
        })
        const vm = wrapper.vm as unknown as { updateThumbPosition: (newPosition: number, thumb: 'min' | 'max') => void }
        vm.updateThumbPosition(60, 'max')
        expect(wrapper.emitted()['update:modelValue']![0]).toEqual([60])
      })

      it('should update selected thumb when isDouble is true', async () => {
        const wrapper = mount(VkRange, {
          props: {
            min: 0,
            max: 100,
            step: 5,
            modelValue: [20, 80],
            isDouble: true
          }
        })
        const vm = wrapper.vm as unknown as { updateThumbPosition: (newPosition: number, thumb: 'min' | 'max') => void }
        vm.updateThumbPosition(30, 'min')
        expect(wrapper.emitted()['update:modelValue']![0]).toEqual([[30, 80]])
      })

      it('should prevent overlapping of thumbs when isDouble is true', async () => {
        const wrapper = mount(VkRange, {
          props: {
            min: 0,
            max: 100,
            step: 5,
            modelValue: [50, 80],
            isDouble: true
          }
        })
        const vm = wrapper.vm as unknown as { updateThumbPosition: (newPosition: number, thumb: 'min' | 'max') => void }
        vm.updateThumbPosition(90, 'min')
        expect(wrapper.emitted()['update:modelValue']![0]).toEqual([[80, 80]])
      })
    })

    describe('handleMultipleThumbs', () => {
      it('should update the minimum thumb when the new position is closer to the minimum value', async () => {
        const wrapper = mount(VkRange, {
          props: {
            modelValue: [30, 80],
            isDouble: true,
            min: 0,
            max: 100
          }
        })

        const slider = wrapper.find('.vk-range')
        const sliderElement = slider.element as HTMLElement

        sliderElement.getBoundingClientRect = () => ({
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

        await slider.trigger('mousedown', { clientX: 20 })

        expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([[20, 80]])
      })

      it('should update the maximum thumb when the new position is closer to the maximum value', async () => {
        const wrapper = mount(VkRange, {
          props: {
            modelValue: [30, 80],
            isDouble: true,
            min: 0,
            max: 100
          }
        })

        const slider = wrapper.find('.vk-range')
        const sliderElement = slider.element as HTMLElement

        sliderElement.getBoundingClientRect = () => ({
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

        await slider.trigger('mousedown', { clientX: 90 })

        expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([[30, 90]])
      })

      it('should move the closest thumb to the clicked position', async () => {
        const wrapper = mount(VkRange, {
          props: {
            modelValue: [30, 80],
            isDouble: true,
            min: 0,
            max: 100
          }
        })

        const slider = wrapper.find('.vk-range')
        const sliderElement = slider.element as HTMLElement

        sliderElement.getBoundingClientRect = () => ({
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

        await slider.trigger('mousedown', { clientX: 50 })

        expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([[50, 80]])
      })
    })

    describe('onMove', () => {
      it('should not update the value when dragging is inactive', () => {
        wrapper = mount(VkRange, {
          props: {
            modelValue: 50
          }
        })

        const vm = wrapper.vm as unknown as {
          isDragging: boolean
          onMove: (event: MouseEvent) => void
        }

        vm.isDragging = false

        vm.onMove(new MouseEvent('mousemove', {
          clientX: 100
        }))

        expect(wrapper.emitted('update:modelValue')).toBeUndefined()
      })
    })

    describe('onSliderClick', () => {
      it('should update closest thumb when slider is clicked in double mode', async () => {
        const wrapper = mount(VkRange, {
          props: {
            modelValue: [10, 70],
            isDouble: true,
            min: 0,
            max: 100,
            step: 10
          }
        })

        const slider = wrapper.find('.vk-range')
        const sliderElement = slider.element as HTMLElement
        sliderElement.getBoundingClientRect = () => ({
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

        await slider.trigger('mousedown', { clientX: 20 })
        await slider.trigger('mouseup')

        expect(wrapper.emitted()['update:modelValue']![0]).toEqual([[20, 70]])
      })

      it('should use event.touches[0].clientX for touch events', async () => {
        const wrapper = mount(VkRange, {
          props: { modelValue: 30 }
        })

        const slider = wrapper.find('.vk-range')
        const sliderElement = slider.element as HTMLElement
        sliderElement.getBoundingClientRect = () => ({
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

        const touch = {
          touches: [{ clientX: 50 }]
        }

        // @ts-expect-error: direct call to onSliderClick to simulate touch event
        wrapper.vm.onSliderClick(touch)
        await wrapper.vm.$nextTick()

        expect(wrapper.emitted()['update:modelValue'][0]).toEqual([50])
      })
    })

    describe('onLabelClick', () => {
      it('should use handleMultipleThumbs to move the closest thumb to the label value if double is true', async () => {
        const labels = [{ value: 25, label: 'Low' }, { value: 75, label: 'High' }]
        const wrapper = mount(VkRange, {
          props: {
            modelValue: [20, 80],
            isDouble: true,
            labels,
            showSteps: false
          }
        })

        const label = wrapper.find('.vk-range__label')

        await label.trigger('click')

        expect(wrapper.emitted()['update:modelValue']![0]).toEqual([[25, 80]])
      })

      it('should use handleSingleThumb to move the thumb to the label value if double is false', async () => {
        const labels = [{ value: 25, label: 'Low' }, { value: 75, label: 'High' }]
        const wrapper = mount(VkRange, {
          props: {
            modelValue: 20,
            isDouble: false,
            labels,
            showSteps: false
          }
        })

        const label = wrapper.find('.vk-range__label')

        await label.trigger('click')

        expect(wrapper.emitted()['update:modelValue']![0]).toEqual([25])
      })
    })

    describe('onStart', () => {
      it('should start dragging on mouse interaction', async () => {
        const wrapper = mount(VkRange, {
          props: {
            modelValue: [20, 80],
            isDouble: true
          }
        })

        const thumb = wrapper.find('.vk-range__thumb')

        await thumb.trigger('mousedown', { clientX: 50 })

        expect(wrapper.vm).toHaveProperty('isDragging', true)
      })

      it('should start dragging on touch interaction', async () => {
        const wrapper = mount(VkRange, {
          props: {
            modelValue: [20, 80],
            isDouble: true
          }
        })

        const thumb = wrapper.find('.vk-range__thumb')
        const touch = { touches: [{ clientX: 50 }] }
        await thumb.trigger('touchstart', touch)
        expect(wrapper.vm).toHaveProperty('isDragging', true)
      })
    })
  })

  describe('Keyboard Navigation', () => {
    beforeEach(() => {
      useRangeKeyboardNavMock.mockClear()
    })

    it('should initialize keyboard navigation for the thumb', () => {
      wrapper = mount(VkRange, {
        props: {
          modelValue: 50
        }
      })

      expect(useRangeKeyboardNavMock).toHaveBeenCalledWith(
        expect.objectContaining({
          onUpdate: expect.any(Function)
        })
      )
    })

    it('should pass min, max and step values to keyboard navigation', () => {
      wrapper = mount(VkRange, {
        props: {
          modelValue: 50,
          min: 10,
          max: 90,
          step: 5
        }
      })

      const config = useRangeKeyboardNavMock.mock.calls[0][0] as {
        min: () => number
        max: () => number
        step: () => number
      }

      expect({
        min: config.min(),
        max: config.max(),
        step: config.step()
      }).toEqual({
        min: 10,
        max: 90,
        step: 5
      })
    })

    it('should attach keyboard navigation handler to the thumb', async () => {
      const mockHandler = vi.fn()
      useRangeKeyboardNavMock.mockReturnValue(mockHandler)

      wrapper = mount(VkRange, {
        props: {
          modelValue: 50
        }
      })

      await wrapper.find('.vk-range__thumb').trigger('keydown', {
        key: 'ArrowRight'
      })

      expect(mockHandler).toHaveBeenCalled()
    })

    it('should initialize keyboard navigation for both thumbs when isDouble is true', () => {
      wrapper = mount(VkRange, {
        props: {
          modelValue: [30, 70],
          isDouble: true
        }
      })

      expect(useRangeKeyboardNavMock).toHaveBeenCalledTimes(2)
    })

    it('should update thumb position when keyboard navigation triggers onUpdate', () => {
      useRangeKeyboardNavMock.mockImplementation(({ onUpdate }) => {
        onUpdate(70)

        return vi.fn()
      })

      wrapper = mount(VkRange, {
        props: {
          modelValue: 50,
          min: 0,
          max: 100,
          step: 10
        }
      })

      expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([70])
    })

    it('should attach keyboard navigation handler to the minimum thumb when isDouble is true', async () => {
      const mockHandler = vi.fn()

      useRangeKeyboardNavMock.mockReturnValue(mockHandler)

      wrapper = mount(VkRange, {
        props: {
          modelValue: [30, 70],
          isDouble: true
        }
      })

      const thumbs = wrapper.findAll('.vk-range__thumb')

      await thumbs[0].trigger('keydown', {
        key: 'ArrowRight'
      })

      expect(mockHandler).toHaveBeenCalled()
    })
  })

  describe('Watchers', () => {
    it('should keep modelValue within range when min changes', async () => {
      wrapper = mount(VkRange, {
        props: {
          min: 0,
          max: 100,
          modelValue: 0
        }
      })

      await wrapper.setProps({ min: 10 })

      expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    })

    it('should keep modelValue within range when max changes', async () => {
      wrapper = mount(VkRange, {
        props: {
          min: 0,
          max: 100,
          modelValue: 100
        }
      })

      await wrapper.setProps({ max: 90 })

      expect(wrapper.emitted('update:modelValue')).toBeTruthy()
    })

    it('should emit array value when switching to double mode', async () => {
      wrapper = mount(VkRange, {
        props: {
          min: 0,
          max: 100,
          modelValue: 0,
          isDouble: false
        }
      })

      await wrapper.setProps({
        isDouble: true,
        min: 5,
        max: 15
      })

      expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([[5, 15]])
    })

    it('should emit single value when switching to single mode', async () => {
      wrapper = mount(VkRange, {
        props: {
          min: 0,
          max: 100,
          modelValue: [0, 100],
          isDouble: true
        }
      })

      await wrapper.setProps({
        isDouble: false,
        max: 42
      })

      expect(wrapper.emitted('update:modelValue')?.at(-1)).toEqual([42])
    })
  })

  describe('Computed properties', () => {
    describe('inlineStyles', () => {
      it('should return default position styles', () => {
        wrapper = mount(VkRange, {
          props: {
            modelValue: 0
          }
        })

        const style = (wrapper.vm as unknown as {
          inlineStyles: string
        }).inlineStyles

        expect(style).toContain('left: 0%; width: 0%;')
      })

      it('should include striped background styles when striped is enabled', () => {
        wrapper = mount(VkRange, {
          props: {
            modelValue: 0,
            striped: true
          }
        })

        const style = (wrapper.vm as unknown as {
          inlineStyles: string
        }).inlineStyles

        expect(style).toContain('background-image')
      })
    })

    describe('thumbStyles', () => {
      it('should calculate thumb position for single value mode', () => {
        wrapper = mount(VkRange, {
          props: {
            modelValue: 50,
            isDouble: false
          }
        })

        const thumbStyles = (wrapper.vm as unknown as {
          thumbStyles: {
            start: { left: string }
            end: { left: string }
          }
        }).thumbStyles

        expect(thumbStyles.start.left).toBe('0%')
      })

      it('should calculate thumb positions for double value mode', () => {
        wrapper = mount(VkRange, {
          props: {
            modelValue: [20, 80],
            isDouble: true
          }
        })

        const thumbStyles = (wrapper.vm as unknown as {
          thumbStyles: {
            start: { left: string }
            end: { left: string }
          }
        }).thumbStyles

        expect(thumbStyles.end.left).toBe('80%')
      })
    })

    describe('stepMarks', () => {
      it('should generate the correct amount of step marks', () => {
        wrapper = mount(VkRange, {
          props: {
            modelValue: 0,
            step: 10,
            min: 0,
            max: 100
          }
        })

        const marks = (wrapper.vm as unknown as {
          stepMarks: number[]
        }).stepMarks

        expect(marks).toHaveLength(9)
      })

      it('should calculate the first step mark position', () => {
        wrapper = mount(VkRange, {
          props: {
            modelValue: 0,
            step: 10,
            min: 0,
            max: 100
          }
        })

        const marks = (wrapper.vm as unknown as {
          stepMarks: number[]
        }).stepMarks

        expect(marks[0]).toBe(10)
      })
    })
  })

  describe('Listeners', () => {
    let wrapper: VueWrapper
    let thumb: DOMWrapper<Element>
    let touch: Touch
    let moveTouch: Touch
    let removeSpy: ReturnType<typeof vi.spyOn>

    beforeEach(() => {
      removeSpy = vi.spyOn(document, 'removeEventListener')
      wrapper = mount(VkRange, {
        props: {
          modelValue: 0
        }
      })

      thumb = wrapper.find('.vk-range__thumb')

      touch = {
        identifier: 0,
        target: thumb.element,
        clientX: 50,
        clientY: 0,
        screenX: 50,
        screenY: 0,
        pageX: 50,
        pageY: 0,
        radiusX: 0,
        radiusY: 0,
        rotationAngle: 0,
        force: 0.5
      }

      moveTouch = {
        ...touch,
        clientX: 60,
        pageX: 60,
        screenX: 60
      }
    })

    afterEach(() => {
      removeSpy.mockRestore()
      wrapper.unmount()
    })

    it('should remove mousemove listener after mouse interaction', async () => {
      await thumb.trigger('mousedown', { clientX: 50 })
      await document.dispatchEvent(new MouseEvent('mousemove', { clientX: 60 }))
      await document.dispatchEvent(new MouseEvent('mouseup', { clientX: 60 }))
      expect(removeSpy).toHaveBeenCalledWith('mousemove', expect.any(Function))
    })

    it('should remove touchmove listener after touch interaction', async () => {
      await thumb.trigger('touchstart', { touches: [touch] })
      await document.dispatchEvent(new TouchEvent('touchmove', { touches: [moveTouch] }))
      await document.dispatchEvent(new TouchEvent('touchend', { changedTouches: [moveTouch] }))
      expect(removeSpy).toHaveBeenCalledWith('touchmove', expect.any(Function))
    })

    it('should remove mouseup listener after mouse interaction', async () => {
      await thumb.trigger('mousedown', { clientX: 50 })
      await document.dispatchEvent(new MouseEvent('mousemove', { clientX: 60 }))
      await document.dispatchEvent(new MouseEvent('mouseup', { clientX: 60 }))
      expect(removeSpy).toHaveBeenCalledWith('mouseup', expect.any(Function))
    })

    it('should remove touchend listener after touch interaction', async () => {
      await thumb.trigger('touchstart', { touches: [touch] })
      await document.dispatchEvent(new TouchEvent('touchmove', { touches: [moveTouch] }))
      await document.dispatchEvent(new TouchEvent('touchend', { changedTouches: [moveTouch] }))
      expect(removeSpy).toHaveBeenCalledWith('touchend', expect.any(Function))
    })
  })

  describe('Emits', () => {
    it('should emit update:modelValue event when a thumb is dragged', async () => {
      wrapper = mount(VkRange, {
        props: {
          modelValue: 0
        }
      })

      const thumb = wrapper.find('.vk-range__thumb')
      await thumb.trigger('mousedown', { clientX: 50 })
      await thumb.trigger('mousemove', { clientX: 100 })
      await thumb.trigger('mouseup')
      await nextTick()
      expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    })

    it('should emit update:modelValue event when a label is clicked', async () => {
      const labels = [{ value: 30, label: 'Thirty' }]
      wrapper = mount(VkRange, {
        props: {
          modelValue: 0,
          labels
        }
      })

      const label = wrapper.find('.vk-range__label')
      await label.trigger('click')
      await nextTick()
      expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    })
  })
})
