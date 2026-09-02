import { VueWrapper, mount } from '@vue/test-utils'
import VkPagination from '#valkoui/components/Pagination.vue'
import useRangeKeyboardNav from '#valkoui/composables/useRangeKeyboardNav.ts'

vi.mock('#valkoui/composables/useRangeKeyboardNav.ts', () => ({
  default: vi.fn(() => vi.fn())
}))

const useRangeKeyboardNavMock = vi.mocked(useRangeKeyboardNav)

describe('Pagination component', () => {
  let wrapper: VueWrapper
  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkPagination, {})
      })

      it('should render', () => {
        expect(wrapper.find('.vk-pagination__nav').exists()).toBe(true)
      })

      it('should be color primary', () => {
        expect(wrapper.find('.bg-primary').exists()).toBe(true)
      })

      it('should be size md', () => {
        expect(wrapper.find('.size-9').exists()).toBe(true)
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.bg-surface-container').exists()).toBe(true)
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.rounded-lg').exists()).toBe(true)
      })

      it('should not be elevated', () => {
        expect(wrapper.find('.shadow-el1').exists()).toBe(false)
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', () => {
        wrapper = mount(VkPagination, {
          props: {
            color: 'primary'
          }
        })

        expect(wrapper.find('.bg-primary').exists()).toBe(true)
      })

      it('should be color secondary when props.color is secondary', () => {
        wrapper = mount(VkPagination, {
          props: {
            color: 'secondary'
          }
        })

        expect(wrapper.find('.bg-secondary').exists()).toBe(true)
      })

      it('should be color positive when props.color is positive', () => {
        wrapper = mount(VkPagination, {
          props: {
            color: 'positive'
          }
        })

        expect(wrapper.find('.bg-positive').exists()).toBe(true)
      })

      it('should be color accent when props.color is accent', () => {
        wrapper = mount(VkPagination, {
          props: {
            color: 'accent'
          }
        })

        expect(wrapper.find('.bg-accent').exists()).toBe(true)
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkPagination, {
          props: {
            color: 'warning'
          }
        })

        expect(wrapper.find('.bg-warning').exists()).toBe(true)
      })

      it('should be color negative when props.color is negative', () => {
        wrapper = mount(VkPagination, {
          props: {
            color: 'negative'
          }
        })

        expect(wrapper.find('.bg-negative').exists()).toBe(true)
      })

      it('should be color surface when props.color is surface', () => {
        wrapper = mount(VkPagination, {
          props: {
            color: 'surface'
          }
        })

        expect(wrapper.find('.bg-surface-container-highest').exists()).toBe(true)
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkPagination, {
          props: {
            shape: 'rounded'
          }
        })

        expect(wrapper.find('.rounded-full').exists()).toBe(true)
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkPagination, {
          props: {
            shape: 'soft'
          }
        })

        expect(wrapper.find('.rounded-lg').exists()).toBe(true)
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkPagination, {
          props: {
            shape: 'square'
          }
        })

        expect(wrapper.find('.rounded-none').exists()).toBe(true)
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        wrapper = mount(VkPagination, {
          props: {
            size: 'xs'
          }
        })

        expect(wrapper.find('.size-6').exists()).toBe(true)
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkPagination, {
          props: {
            size: 'sm'
          }
        })

        expect(wrapper.find('.size-7').exists()).toBe(true)
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkPagination, {
          props: {
            size: 'md'
          }
        })

        expect(wrapper.find('.size-9').exists()).toBe(true)
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkPagination, {
          props: {
            size: 'lg'
          }
        })

        expect(wrapper.find('.size-11').exists()).toBe(true)
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.variant is filled', () => {
        wrapper = mount(VkPagination, {
          props: {
            variant: 'filled'
          }
        })

        expect(wrapper.find('.bg-surface-container').exists()).toBe(true)
      })

      it('should be outlined when props.variant is outlined', () => {
        wrapper = mount(VkPagination, {
          props: {
            variant: 'outlined'
          }
        })

        expect(wrapper.find('.border-2').exists()).toBe(true)
      })

      it('should be ghost when props.variant is ghost', () => {
        wrapper = mount(VkPagination, {
          props: {
            variant: 'ghost'
          }
        })

        expect(wrapper.find('.bg-transparent').exists()).toBe(true)
      })
    })

    describe('When elevated prop changes', () => {
      it('should be elevated when props.elevated is true', () => {
        wrapper = mount(VkPagination, {
          props: {
            elevated: true
          }
        })

        expect(wrapper.find('.shadow-el1').exists()).toBe(true)
      })
    })
  })

  describe('When visible pages changes', () => {
    it('should return all pages when total pages are 7 or less', () => {
      const wrapper = mount(VkPagination, { props: { pages: 5, modelValue: 3 } })
      const visiblePages = (wrapper.vm as unknown as { visiblePages: (number | string)[] }).visiblePages

      expect(visiblePages).toEqual([1, 2, 3, 4, 5])
    })

    it('should return the first five pages and an ellipsis when current page is 1', () => {
      const wrapper = mount(VkPagination, { props: { pages: 10, modelValue: 1 } })
      const visiblePages = (wrapper.vm as unknown as { visiblePages: (number | string)[] }).visiblePages

      expect(visiblePages).toEqual([1, 2, 3, 4, 5, '...', 10])
    })

    it('should return the first five pages and an ellipsis when current page is 3', () => {
      const wrapper = mount(VkPagination, { props: { pages: 10, modelValue: 3 } })
      const visiblePages = (wrapper.vm as unknown as { visiblePages: (number | string)[] }).visiblePages

      expect(visiblePages).toEqual([1, 2, 3, 4, 5, '...', 10])
    })

    it('should return the last five pages and an ellipsis when current page is close to the end', () => {
      const wrapper = mount(VkPagination, { props: { pages: 10, modelValue: 9 } })
      const visiblePages = (wrapper.vm as unknown as { visiblePages: (number | string)[] }).visiblePages

      expect(visiblePages).toEqual([1, '...', 6, 7, 8, 9, 10])
    })

    it('should return the last five pages and an ellipsis when current page is the last one', () => {
      const wrapper = mount(VkPagination, { props: { pages: 10, modelValue: 10 } })
      const visiblePages = (wrapper.vm as unknown as { visiblePages: (number | string)[] }).visiblePages

      expect(visiblePages).toEqual([1, '...', 6, 7, 8, 9, 10])
    })

    it('should return middle pages with ellipses when current page is in the middle', () => {
      const wrapper = mount(VkPagination, { props: { pages: 10, modelValue: 5 } })
      const visiblePages = (wrapper.vm as unknown as { visiblePages: (number | string)[] }).visiblePages

      expect(visiblePages).toEqual([1, '...', 4, 5, 6, '...', 10])
    })

    it('should return correct pages when total pages are more than 7 and current page is near the start', () => {
      const wrapper = mount(VkPagination, { props: { pages: 8, modelValue: 2 } })
      const visiblePages = (wrapper.vm as unknown as { visiblePages: (number | string)[] }).visiblePages

      expect(visiblePages).toEqual([1, 2, 3, 4, 5, '...', 8])
    })

    it('should return correct pages when total pages are more than 7 and current page is near the end', () => {
      const wrapper = mount(VkPagination, { props: { pages: 8, modelValue: 7 } })
      const visiblePages = (wrapper.vm as unknown as { visiblePages: (number | string)[] }).visiblePages

      expect(visiblePages).toEqual([1, '...', 4, 5, 6, 7, 8])
    })
  })

  describe('Disabled', () => {
    it('should not have arrow left disabled', () => {
      wrapper = mount(VkPagination, {
        props: {
          modelValue: 5
        }
      })

      expect(wrapper.find('.vk-pagination__left').classes('.cursor-not-allowed')).toBe(false)
    })
  })

  describe('Emits', () => {
    it('should emit update:modelValue when selecting a different page', async () => {
      wrapper = mount(VkPagination, {
        props: {
          pages: 10,
          modelValue: 5
        }
      })

      await wrapper.findAll('.vk-pagination__button')[0].trigger('click')

      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([1])
    })

    it('should not emit update:modelValue when selecting the current page', async () => {
      wrapper = mount(VkPagination, {
        props: {
          pages: 5,
          modelValue: 1
        }
      })

      await wrapper.findAll('.vk-pagination__button')[0].trigger('click')

      expect(wrapper.emitted('update:modelValue')).toBeFalsy()
    })

    it('should emit update:modelValue when previous page is selected', async () => {
      wrapper = mount(VkPagination, {
        props: {
          pages: 10,
          modelValue: 5
        }
      })

      await wrapper.find('.vk-pagination__left').trigger('click')

      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([4])
    })

    it('should emit update:modelValue when next page is selected', async () => {
      wrapper = mount(VkPagination, {
        props: {
          pages: 10,
          modelValue: 5
        }
      })

      await wrapper.find('.vk-pagination__right').trigger('click')

      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([6])
    })

    it('should not emit update:modelValue when selected page is disabled', async () => {
      wrapper = mount(VkPagination, {
        props: {
          pages: 10,
          modelValue: 5,
          disabled: true
        }
      })

      await wrapper.findAll('.vk-pagination__button')[0].trigger('click')

      expect(wrapper.emitted('update:modelValue')).toBeFalsy()
    })

    it('should not emit update:modelValue when selected page is an ellipsis', () => {
      wrapper = mount(VkPagination, {
        props: {
          pages: 10,
          modelValue: 5
        }
      })

      const config = (wrapper.vm as unknown as {
        changePage: (page: string | number) => void
      }).changePage

      config('...')

      expect(wrapper.emitted('update:modelValue')).toBeFalsy()
    })
  })

  describe('Keyboard Navigation', () => {
    beforeEach(() => {
      useRangeKeyboardNavMock.mockClear()
    })

    it('should pass pagination boundaries to keyboard navigation', () => {
      mount(VkPagination, {
        props: {
          pages: 10,
          modelValue: 5
        }
      })

      const config = useRangeKeyboardNavMock.mock.calls[0][0] as {
        min: () => number
        max: () => number
      }

      expect({
        min: config.min(),
        max: config.max()
      }).toEqual({
        min: 1,
        max: 10
      })
    })

    it('should pass current value and step to keyboard navigation', () => {
      mount(VkPagination, {
        props: {
          pages: 10,
          modelValue: 5
        }
      })

      const config = useRangeKeyboardNavMock.mock.calls[0][0] as {
        currentValue: () => number
        step: () => number
      }

      expect({
        currentValue: config.currentValue(),
        step: config.step()
      }).toEqual({
        currentValue: 5,
        step: 1
      })
    })

    it('should disable keyboard navigation when pagination is disabled', () => {
      mount(VkPagination, {
        props: {
          pages: 10,
          modelValue: 5,
          disabled: true
        }
      })

      const config = useRangeKeyboardNavMock.mock.calls[0][0] as {
        enabled: () => boolean
      }

      expect(config.enabled()).toBe(false)
    })

    it('should enable keyboard navigation when pagination is enabled', () => {
      mount(VkPagination, {
        props: {
          pages: 10,
          modelValue: 5
        }
      })

      const config = useRangeKeyboardNavMock.mock.calls[0][0] as {
        enabled: () => boolean
      }

      expect(config.enabled()).toBe(true)
    })

    it('should attach keyboard navigation handler to pagination', async () => {
      const mockHandler = vi.fn()
      useRangeKeyboardNavMock.mockReturnValue(mockHandler)

      wrapper = mount(VkPagination, {
        props: {
          pages: 10,
          modelValue: 5
        }
      })

      await wrapper.find('.vk-pagination__nav').trigger('keydown')

      expect(mockHandler).toHaveBeenCalled()
    })

    it('should emit update:modelValue when keyboard navigation updates page', () => {
      wrapper = mount(VkPagination, {
        props: {
          pages: 10,
          modelValue: 5
        }
      })

      const config = useRangeKeyboardNavMock.mock.calls[0][0] as {
        onUpdate: (value: number) => void
      }

      config.onUpdate(6)

      expect(wrapper.emitted('update:modelValue')?.[0]).toEqual([6])
    })
  })
})
