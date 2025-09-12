import { nextTick } from 'vue'
import { VueWrapper, mount } from '@vue/test-utils'
import VkRange from '#valkoui/components/Range.vue'

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

      it('should have modelValue as a single number when isDouble is false', () => {
        const localWrapper = mount(VkRange, {
          props: { modelValue: 0, isDouble: false }
        })
        expect(localWrapper.props('modelValue')).toBe(0)
      })

      it('should have modelValue as an array when isDouble is true', () => {
        const localWrapper = mount(VkRange, {
          props: { modelValue: [10, 60], isDouble: true }
        })
        expect(localWrapper.props('modelValue')).toStrictEqual([10, 60])
      })
    })

    describe('When isrange prop changes', () => {
      it('should have one thumb when props.isrange is false', async () => {
        const wrapper = mount(VkRange, {
          props: {
            modelValue: 0,
            isDouble: false
          }
        })

        const thumbs = wrapper.findAll('.vk-range__thumb')

        expect(thumbs.length).toBe(1)
      })

      it('should have two thumbs when props.isrange is true', async () => {
        const wrapper = mount(VkRange, {
          props: {
            modelValue: 0,
            isDouble: true
          }
        })

        const thumbs = wrapper.findAll('.vk-range__thumb')

        expect(thumbs.length).toBe(2)
      })

      it('should modelvalue be only one number when props.isrange is false', async () => {
        const wrapper = mount(VkRange, {
          props: {
            modelValue: 0,
            isDouble: false
          }
        })

        expect(wrapper.props('modelValue')).toBe(0)
      })

      it('should modelvalue be an array of two numbers when props.isrange is true', async () => {
        const wrapper = mount(VkRange, {
          props: {
            modelValue: [0, 50],
            isDouble: false
          }
        })

        expect(wrapper.props('modelValue')).toStrictEqual([0, 50])
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
    describe('getNewThumbPosition', () => {
      it('should calculate the new thumb position correctly when clicked on the slider', async () => {
        const wrapper = mount(VkRange, {
          props: {
            min: 0,
            max: 100,
            step: 5,
            modelValue: 0
          }
        })

        const slider = wrapper.find('.vk-range')
        const sliderElement = slider.element as HTMLElement

        const mockRect = {
          left: 0,
          width: 100,
          top: 0,
          height: 10,
          right: 100,
          bottom: 10,
          x: 0,
          y: 0,
          toJSON: () => {}
        }

        sliderElement.getBoundingClientRect = () => mockRect

        await slider.trigger('mousedown', { clientX: 50 })

        expect(wrapper.emitted()['update:modelValue']![0]).toEqual([50])
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

      it('should update both thumbs and emit correct values when isDouble is true', async () => {
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
      it('should move the min thumb when clicked near the min value', async () => {
        const wrapper = mount(VkRange, {
          props: {
            min: 0,
            max: 100,
            step: 10,
            modelValue: [30, 80],
            isDouble: true
          }
        })

        const vm = wrapper.vm as unknown as { handleMultipleThumbs: (newPosition: number) => void }

        vm.handleMultipleThumbs(20)

        expect(wrapper.emitted()['update:modelValue']![0]).toEqual([[20, 80]])
      })

      it('should move the max thumb when clicked near the max value', async () => {
        const wrapper = mount(VkRange, {
          props: {
            min: 0,
            max: 100,
            step: 10,
            modelValue: [30, 80],
            isDouble: true
          }
        })

        const vm = wrapper.vm as unknown as { handleMultipleThumbs: (newPosition: number) => void }

        vm.handleMultipleThumbs(90)

        expect(wrapper.emitted()['update:modelValue']![0]).toEqual([[30, 90]])
      })

      it('should move the thumb closer to the clicked position', async () => {
        const wrapper = mount(VkRange, {
          props: {
            min: 0,
            max: 100,
            step: 10,
            modelValue: [30, 80],
            isDouble: true
          }
        })

        const vm = wrapper.vm as unknown as { handleMultipleThumbs: (newPosition: number) => void }

        vm.handleMultipleThumbs(50)

        expect(wrapper.emitted()['update:modelValue']![0]).toEqual([[50, 80]])
      })
    })
  })

  describe('Computed properties', () => {
    describe('inlineStyles', () => {
      it('should calculate inlineStyles correctly for non-striped, non-indeterminate mode', () => {
        wrapper = mount(VkRange, {
          props: {
            modelValue: 0,
            progress: 50
          }
        })

        const style = (wrapper.vm as unknown as { inlineStyles: string }).inlineStyles

        expect(style).toContain('left: 0%; width: 0%;')
      })

      it('should return inlineStyles with striped background when striped is true', () => {
        wrapper = mount(VkRange, {
          props: {
            striped: true,
            modelValue: 0,
            progress: 50,
            size: 'md'
          }
        })
        const style = (wrapper.vm as unknown as { inlineStyles: string }).inlineStyles
        expect(style).toContain('background-image')
      })

      it('should return an inlineStyles string even if no condition adds styles (when indeterminate is true and striped is false)', () => {
        wrapper = mount(VkRange, {
          props: {
            indeterminate: true,
            striped: false,
            modelValue: 0,
            progress: 50
          }
        })
        const style = (wrapper.vm as unknown as { inlineStyles: string }).inlineStyles
        expect(style).toBe('left: 0%; width: 0%;')
      })
    })

    describe('thumbStyles', () => {
      it('should calculate thumbStyles correctly for single thumb (modelValue as number)', () => {
        wrapper = mount(VkRange, {
          props: {
            modelValue: 50,
            isDouble: false
          }
        })

        const thumbStyles = (wrapper.vm as unknown as { thumbStyles: { start: { left: string }, end: { left: string } } }).thumbStyles

        expect(thumbStyles.start.left).toBe('0%')
      })

      it('should calculate thumbStyles correctly for double thumb (modelValue as array)', () => {
        wrapper = mount(VkRange, {
          props: {
            modelValue: [20, 80],
            isDouble: true
          }
        })

        const thumbStyles = (wrapper.vm as unknown as { thumbStyles: { start: { left: string }, end: { left: string } } }).thumbStyles

        expect(thumbStyles.end.left).toBe('80%')
      })
    })

    describe('stepMarks', () => {
      it('should calculate stepMarks correctly', () => {
        wrapper = mount(VkRange, {
          props: {
            modelValue: 0,
            step: 10,
            min: 0,
            max: 100
          }
        })

        const marks = (wrapper.vm as unknown as { stepMarks: number[] }).stepMarks
        expect(marks.length).toBe(9)
      })

      it('should have the first step mark equal to 10%', () => {
        wrapper = mount(VkRange, {
          props: {
            modelValue: 0,
            step: 10,
            min: 0,
            max: 100
          }
        })

        const marks = (wrapper.vm as unknown as { stepMarks: number[] }).stepMarks
        expect(marks[0]).toBe(10)
      })
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

    it('should emit update:modelValue event on thumb drag', async () => {
      const wrapper = mount(VkRange, {
        props: {
          modelValue: 0
        }
      })

      const thumbs = wrapper.findAll('.vk-range__thumb')
      const firstThumb = thumbs[0]
      firstThumb.trigger('mousedown', { clientX: 50 })
      firstThumb.trigger('mousemove', { clientX: 100 })
      firstThumb.trigger('mouseup')
      await wrapper.vm.$nextTick()

      expect(wrapper.emitted()).toHaveProperty('update:modelValue')
    })
  })
})
