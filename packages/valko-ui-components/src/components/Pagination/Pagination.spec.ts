import { nextTick } from 'vue'
import { VueWrapper, mount } from '@vue/test-utils'
import { VkPagination } from '.'

describe('Switch component', () => {
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
        expect(wrapper.find('.h-9').exists()).toBe(true)
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

      it('should have left arrow disabled', () => {
        expect(wrapper.find('.vk-pagination__left').classes()).toContain('cursor-not-allowed')
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

      it('should be color secondary when props.color is secondary', () => {
        wrapper = mount(VkPagination, {
          props: {
            color: 'secondary'
          }
        })

        expect(wrapper.find('.bg-secondary-600').exists()).toBe(true)
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

      it('should be color light when props.color is light', () => {
        wrapper = mount(VkPagination, {
          props: {
            color: 'light'
          }
        })

        expect(wrapper.find('.bg-light-2').exists()).toBe(true)
      })

      it('should be color dark when props.color is dark', () => {
        wrapper = mount(VkPagination, {
          props: {
            color: 'dark'
          }
        })

        expect(wrapper.find('.bg-dark-4').exists()).toBe(true)
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

        expect(wrapper.find('.h-6').exists()).toBe(true)
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkPagination, {
          props: {
            size: 'sm'
          }
        })

        expect(wrapper.find('.h-7').exists()).toBe(true)
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkPagination, {
          props: {
            size: 'md'
          }
        })

        expect(wrapper.find('.h-9').exists()).toBe(true)
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkPagination, {
          props: {
            size: 'lg'
          }
        })

        expect(wrapper.find('.h-11').exists()).toBe(true)
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.size is filled', () => {
        wrapper = mount(VkPagination, {
          props: {
            variant: 'filled'
          }
        })

        expect(wrapper.find('.bg-light-3').exists()).toBe(true)
      })

      it('should be outlined when props.size is outlined', () => {
        wrapper = mount(VkPagination, {
          props: {
            variant: 'outlined'
          }
        })

        expect(wrapper.find('.border-2').exists()).toBe(true)
      })

      it('should be ghost when props.size is ghost', () => {
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
})
