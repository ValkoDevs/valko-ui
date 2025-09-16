import { VueWrapper, mount } from '@vue/test-utils'
import VkCheckbox from '#valkoui/components/Checkbox.vue'

describe('Checkbox component', () => {
  let wrapper: VueWrapper
  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkCheckbox, {})
      })

      it('should render', () => {
        expect(wrapper.find('.vk-checkbox').exists()).toBe(true)
      })

      it('should be color primary', () => {
        expect(wrapper.find('.vk-checkbox__checkbox').classes()).toContain('data-[checked=true]:bg-primary')
      })

      it('should be size md', () => {
        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.vk-checkbox__checkbox').classes()).toContain('data-[checked=true]:bg-primary')
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.rounded-sm').exists()).toBe(true)
      })

      it('should have label on left', () => {
        expect(wrapper.find('.ml-2').exists()).toBe(true)
      })

      it('should not be disabled', () => {
        expect(wrapper.find('.cursor-not-allowed').exists()).toBe(false)
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', () => {
        wrapper = mount(VkCheckbox, {
          props: {
            color: 'primary'
          }
        })

        expect(wrapper.find('.vk-checkbox__checkbox').classes()).toContain('data-[checked=true]:bg-primary')
      })

      it('should be color secondary when props.color is secondary', () => {
        wrapper = mount(VkCheckbox, {
          props: {
            color: 'secondary'
          }
        })

        expect(wrapper.find('.vk-checkbox__checkbox').classes()).toContain('data-[checked=true]:bg-secondary')
      })

      it('should be color positive when props.color is positive', () => {
        wrapper = mount(VkCheckbox, {
          props: {
            color: 'positive'
          }
        })

        expect(wrapper.find('.vk-checkbox__checkbox').classes()).toContain('data-[checked=true]:bg-positive')
      })

      it('should be color accent when props.color is accent', () => {
        wrapper = mount(VkCheckbox, {
          props: {
            color: 'accent'
          }
        })

        expect(wrapper.find('.vk-checkbox__checkbox').classes()).toContain('data-[checked=true]:bg-accent')
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkCheckbox, {
          props: {
            color: 'warning'
          }
        })

        expect(wrapper.find('.vk-checkbox__checkbox').classes()).toContain('data-[checked=true]:bg-warning')
      })

      it('should be color negative when props.color is negative', () => {
        wrapper = mount(VkCheckbox, {
          props: {
            color: 'negative'
          }
        })

        expect(wrapper.find('.vk-checkbox__checkbox').classes()).toContain('data-[checked=true]:bg-negative')
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkCheckbox, {
          props: {
            shape: 'rounded'
          }
        })

        expect(wrapper.find('.rounded-full').exists()).toBe(true)
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkCheckbox, {
          props: {
            shape: 'soft'
          }
        })

        expect(wrapper.find('.rounded-sm').exists()).toBe(true)
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkCheckbox, {
          props: {
            shape: 'square'
          }
        })

        expect(wrapper.find('.rounded-none').exists()).toBe(true)
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        wrapper = mount(VkCheckbox, {
          props: {
            size: 'xs'
          }
        })

        expect(wrapper.find('.text-xs').exists()).toBe(true)
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkCheckbox, {
          props: {
            size: 'sm'
          }
        })

        expect(wrapper.find('.text-sm').exists()).toBe(true)
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkCheckbox, {
          props: {
            size: 'md'
          }
        })

        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkCheckbox, {
          props: {
            size: 'lg'
          }
        })

        expect(wrapper.find('.text-lg').exists()).toBe(true)
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.variant is filled', () => {
        wrapper = mount(VkCheckbox, {
          props: {
            variant: 'filled'
          }
        })

        expect(wrapper.find('.vk-checkbox__checkbox').classes()).toContain('data-[checked=true]:bg-primary')
      })

      it('should be outlined when props.variant is outlined', () => {
        wrapper = mount(VkCheckbox, {
          props: {
            variant: 'outlined'
          }
        })

        expect(wrapper.find('.vk-checkbox__checkbox').classes()).toContain('data-[checked=true]:border-primary')
      })

      it('should be ghost when props.variant is ghost', () => {
        wrapper = mount(VkCheckbox, {
          props: {
            variant: 'ghost'
          }
        })

        expect(wrapper.find('.border-0')).toBeDefined()
      })
    })
  })

  describe('Icon', () => {
    it('should show check icon as default', () => {
      wrapper = mount(VkCheckbox, {
        props: {
          modelValue: true
        }
      })

      expect(wrapper.find('i.ti.ti-check').exists()).toBe(true)
    })

    it('should show indeterminate icon', () => {
      wrapper = mount(VkCheckbox, {
        props: {
          modelValue: null
        }
      })

      expect(wrapper.find('i.ti.ti-minus').exists()).toBe(true)
    })
  })

  describe('Helpertext', () => {
    it('should be empty', () => {
      const wrapper = mount(VkCheckbox, {})

      expect(wrapper.find('.vk-checkbox__helpertext').exists()).toBe(false)
    })

    it('should have a helpertext', () => {
      const wrapper = mount(VkCheckbox, {
        props: {
          helpertext: 'Hello World'
        }
      })

      expect(wrapper.find('.vk-checkbox__helpertext').text()).toContain('Hello World')
    })
  })

  describe('Emits', () => {
    it('should emit update event', () => {
      const wrapper = mount(VkCheckbox, {})

      wrapper.find('.vk-checkbox__container').trigger('click')
      expect(wrapper.emitted('update:modelValue'))
    })
  })
})
