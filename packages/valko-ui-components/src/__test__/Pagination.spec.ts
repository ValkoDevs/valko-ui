import { nextTick } from 'vue'
import { VueWrapper, mount } from '@vue/test-utils'
import VkPagination from '#valkoui/components/Pagination.vue'

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
        expect(wrapper.find('.bg-primary-600').exists()).toBe(true)
      })

      it('should be size md', () => {
        expect(wrapper.find('.size-9').exists()).toBe(true)
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.bg-light-3').exists()).toBe(true)
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.rounded-lg').exists()).toBe(true)
      })

      it('should be flat', () => {
        expect(wrapper.find('.shadow-sm').exists()).toBe(true)
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', () => {
        wrapper = mount(VkPagination, {
          props: {
            color: 'primary'
          }
        })

        expect(wrapper.find('.bg-primary-600').exists()).toBe(true)
      })

      it('should be color neutral when props.color is neutral', () => {
        wrapper = mount(VkPagination, {
          props: {
            color: 'neutral'
          }
        })

        expect(wrapper.find('.bg-light-3').exists()).toBe(true)
      })

      it('should be color success when props.color is success', () => {
        wrapper = mount(VkPagination, {
          props: {
            color: 'success'
          }
        })

        expect(wrapper.find('.bg-success-600').exists()).toBe(true)
      })

      it('should be color info when props.color is info', () => {
        wrapper = mount(VkPagination, {
          props: {
            color: 'info'
          }
        })

        expect(wrapper.find('.bg-info-600').exists()).toBe(true)
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkPagination, {
          props: {
            color: 'warning'
          }
        })

        expect(wrapper.find('.bg-warning-600').exists()).toBe(true)
      })

      it('should be color error when props.color is error', () => {
        wrapper = mount(VkPagination, {
          props: {
            color: 'error'
          }
        })

        expect(wrapper.find('.bg-error-600').exists()).toBe(true)
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

        expect(wrapper.find('.bg-light-3').exists()).toBe(true)
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
    it('should emit update event on page button', () => {
      const wrapper = mount(VkPagination, {})

      wrapper.find('.vk-pagination__button').trigger('click')
      expect(wrapper.emitted('update:modelValue'))
    })

    it('should emit update event on arrow buttons', async () => {
      const wrapper = mount(VkPagination, {
        props: {
          pages: 20,
          modelValue: 10
        }
      })

      wrapper.find('.vk-pagination__left').trigger('click')
      expect(wrapper.emitted('update:modelValue'))
      await nextTick()
      wrapper.find('.vk-pagination__right').trigger('click')
      expect(wrapper.emitted('update:modelValue'))
    })
  })

  describe('Pages computed', () => {
    it('should show all pages when total pages are 7 or fewer', () => {
      const wrapper = mount(VkPagination, {
        props: {
          pages: 5,
          modelValue: 3
        }
      })

      expect(wrapper.vm.pages).toEqual([1, 2, 3, 4, 5])
    })

    it('should show pages correctly when currentPage is greater than 4 and totalPages is greater than 7', () => {
      const wrapper = mount(VkPagination, {
        props: {
          pages: 10,
          modelValue: 5
        }
      })

      expect(wrapper.vm.pages).toEqual([1, '...', 4, 5, 6, '...', 10])
    })

    it('should show pages correctly when currentPage is less than or equal to 4 and totalPages is greater than 7', () => {
      const wrapper = mount(VkPagination, {
        props: {
          pages: 10,
          modelValue: 3
        }
      })

      expect(wrapper.vm.pages).toEqual([1, 2, 3, 4, 5, '...', 10])
    })

    it('should handle cases where currentPage is in the middle and totalPages is greater than 7', () => {
      const wrapper = mount(VkPagination, {
        props: {
          pages: 15,
          modelValue: 8
        }
      })

      expect(wrapper.vm.pages).toEqual([1, '...', 7, 8, 9, '...', 15])
    })

    it('should handle edge case where currentPage is greater than totalPages', () => {
      const wrapper = mount(VkPagination, {
        props: {
          pages: 5,
          modelValue: 10
        }
      })

      expect(wrapper.vm.pages).toEqual([1, 2, 3, 4, 5])
    })

    it('should handle edge case where currentPage is exactly at the end', () => {
      const wrapper = mount(VkPagination, {
        props: {
          pages: 10,
          modelValue: 10
        }
      })

      expect(wrapper.vm.pages).toEqual([1, '...', 6, 7, 8, 9, 10])
    })

    it('should use default page values when currentPage <= 4', () => {
      const wrapper = mount(VkPagination, {
        props: {
          pages: 10,
          modelValue: 4
        }
      })

      expect(wrapper.vm.pages).toEqual([1, 2, 3, 4, 5, '...', 10])
    })

    it('should use currentPage and currentPage + 1 when currentPage > 4', () => {
      const wrapper = mount(VkPagination, {
        props: {
          pages: 10,
          modelValue: 6
        }
      })

      expect(wrapper.vm.pages).toEqual([1, '...', 5, 6, 7, '...', 10])
    })

    it('should handle cases where currentPage is near the end and totalPages is greater than 7', () => {
      const wrapper = mount(VkPagination, {
        props: {
          pages: 15,
          modelValue: 13
        }
      })

      expect(wrapper.vm.pages).toEqual([1, '...', 11, 12, 13, 14, 15])
    })
  })
})
