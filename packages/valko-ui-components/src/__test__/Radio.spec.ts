import { VueWrapper, mount } from '@vue/test-utils'
import VkRadio from '#valkoui/components/Radio.vue'

describe('Radio component', () => {
  let wrapper: VueWrapper
  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkRadio, {})
      })

      it('should render', () => {
        expect(wrapper.find('.vk-radio').exists()).toBe(true)
      })

      it('should be color primary', () => {
        expect(wrapper.find('.vk-radio__radio').classes()).toContain('data-[checked=true]:bg-primary')
      })

      it('should be size md', () => {
        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.vk-radio__radio').classes()).toContain('data-[checked=true]:bg-primary')
      })

      it('should be shape rounded', () => {
        expect(wrapper.find('.rounded-full').exists()).toBe(true)
      })

      it('should have label on left', () => {
        expect(wrapper.find('.ml-2').exists()).toBe(true)
      })

      it('Should not be selected', () => {
        expect(wrapper.find('.vk-radio__icon').exists()).toBe(false)
      })

      it('should not be flat', () => {
        expect(wrapper.find('.shadow-none').exists()).toBe(false)
      })

      it('should not be disabled', () => {
        expect(wrapper.find('.cursor-not-allowed').exists()).toBe(false)
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', () => {
        wrapper = mount(VkRadio, {
          props: {
            color: 'primary'
          }
        })

        expect(wrapper.find('.vk-radio__radio').classes()).toContain('data-[checked=true]:bg-primary')
      })

      it('should be color secondary when props.color is secondary', () => {
        wrapper = mount(VkRadio, {
          props: {
            color: 'secondary'
          }
        })

        expect(wrapper.find('.vk-radio__radio').classes()).toContain('data-[checked=true]:bg-secondary')
      })

      it('should be color positive when props.color is positive', () => {
        wrapper = mount(VkRadio, {
          props: {
            color: 'positive'
          }
        })

        expect(wrapper.find('.vk-radio__radio').classes()).toContain('data-[checked=true]:bg-positive')
      })

      it('should be color accent when props.color is accent', () => {
        wrapper = mount(VkRadio, {
          props: {
            color: 'accent'
          }
        })

        expect(wrapper.find('.vk-radio__radio').classes()).toContain('data-[checked=true]:bg-accent')
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkRadio, {
          props: {
            color: 'warning'
          }
        })

        expect(wrapper.find('.vk-radio__radio').classes()).toContain('data-[checked=true]:bg-warning')
      })

      it('should be color negative when props.color is negative', () => {
        wrapper = mount(VkRadio, {
          props: {
            color: 'negative'
          }
        })

        expect(wrapper.find('.vk-radio__radio').classes()).toContain('data-[checked=true]:bg-negative')
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkRadio, {
          props: {
            shape: 'rounded'
          }
        })

        expect(wrapper.find('.rounded-full').exists()).toBe(true)
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkRadio, {
          props: {
            shape: 'soft'
          }
        })

        expect(wrapper.find('.rounded-sm').exists()).toBe(true)
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkRadio, {
          props: {
            shape: 'square'
          }
        })

        expect(wrapper.find('.rounded-none').exists()).toBe(true)
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        wrapper = mount(VkRadio, {
          props: {
            size: 'xs'
          }
        })

        expect(wrapper.find('.text-xs').exists()).toBe(true)
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkRadio, {
          props: {
            size: 'sm'
          }
        })

        expect(wrapper.find('.text-sm').exists()).toBe(true)
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkRadio, {
          props: {
            size: 'md'
          }
        })

        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkRadio, {
          props: {
            size: 'lg'
          }
        })

        expect(wrapper.find('.text-lg').exists()).toBe(true)
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.variant is filled', () => {
        wrapper = mount(VkRadio, {
          props: {
            variant: 'filled'
          }
        })

        expect(wrapper.find('.vk-radio__radio').classes()).toContain('data-[checked=true]:bg-primary')
      })

      it('should be outlined when props.variant is outlined', () => {
        wrapper = mount(VkRadio, {
          props: {
            variant: 'outlined',
            modelValue: 'hello',
            value: 'hello'
          }
        })

        expect(wrapper.find('.text-primary').exists()).toBe(true)
      })

      it('should be ghost when props.variant is ghost', () => {
        wrapper = mount(VkRadio, {
          props: {
            variant: 'ghost'
          }
        })

        expect(wrapper.find('.border-0').exists()).toBe(true)
      })
    })
  })

  describe('Helpertext', () => {
    it('should be empty', () => {
      const wrapper = mount(VkRadio, {})

      expect(wrapper.find('span').exists()).toBe(false)
    })

    it('should have a helpertext', () => {
      const wrapper = mount(VkRadio, {
        props: {
          helpertext: 'Hello World'
        }
      })

      expect(wrapper.find('.vk-radio__helpertext').text()).toContain('Hello World')
    })
  })

  describe('Emits', () => {
    it('should emit update event', () => {
      const wrapper = mount(VkRadio, {})

      wrapper.find('.vk-radio__radio-container').trigger('click')
      expect(wrapper.emitted('update:modelValue'))
    })
  })
})
