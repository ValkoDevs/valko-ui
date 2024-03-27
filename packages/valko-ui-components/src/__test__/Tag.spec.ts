import { VueWrapper, mount } from '@vue/test-utils'
import { VkTag } from '#valkoui/components'

describe('Tag component', () => {
  let wrapper: VueWrapper

  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkTag, {})
      })

      it('should render', () => {
        expect(wrapper.find('.vk-tag').exists()).toBe(true)
      })

      it('should be color primary', () => {
        expect(wrapper.find('.bg-primary-600').exists()).toBe(true)
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.text-white').exists()).toBe(true)
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.rounded-lg').exists()).toBe(true)
      })

      it('should be size md', () => {
        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should not be flat', () => {
        expect(wrapper.find('.shadow-none').exists()).toBe(false)
      })

      it('should not be closable', () => {
        expect(wrapper.find('.vk-tag__closable').exists()).toBe(false)
      })

      it('should not be disabled', () => {
        expect(wrapper.find('.vk-tag').classes()).not.toContain('cursor-not-allowed')
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', () => {
        wrapper = mount(VkTag, {
          props: {
            color: 'primary'
          }
        })

        expect(wrapper.find('.bg-primary-600')).toBeDefined()
      })

      it('should be color secondary when props.color is secondary', () => {
        wrapper = mount(VkTag, {
          props: {
            color: 'secondary'
          }
        })

        expect(wrapper.find('.bg-secondary-600')).toBeDefined()
      })

      it('should be color success when props.color is success', () => {
        wrapper = mount(VkTag, {
          props: {
            color: 'success'
          }
        })

        expect(wrapper.find('.bg-success-600')).toBeDefined()
      })

      it('should be color info when props.color is info', () => {
        wrapper = mount(VkTag, {
          props: {
            color: 'info'
          }
        })

        expect(wrapper.find('.bg-info-600')).toBeDefined()
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkTag, {
          props: {
            color: 'warning'
          }
        })

        expect(wrapper.find('.bg-warning-600')).toBeDefined()
      })

      it('should be color error when props.color is error', () => {
        wrapper = mount(VkTag, {
          props: {
            color: 'error'
          }
        })

        expect(wrapper.find('.bg-error-600')).toBeDefined()
      })

      it('should be color light when props.color is light', () => {
        wrapper = mount(VkTag, {
          props: {
            color: 'light'
          }
        })

        expect(wrapper.find('.bg-light-2')).toBeDefined()
      })

      it('should be color dark when props.color is dark', () => {
        wrapper = mount(VkTag, {
          props: {
            color: 'dark'
          }
        })

        expect(wrapper.find('.bg-dark-4')).toBeDefined()
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkTag, {
          props: {
            shape: 'rounded'
          }
        })

        expect(wrapper.find('.rounded-full')).toBeDefined()
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkTag, {
          props: {
            shape: 'soft'
          }
        })

        expect(wrapper.find('.rounded-lg')).toBeDefined()
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkTag, {
          props: {
            shape: 'square'
          }
        })

        expect(wrapper.find('.rounded-none')).toBeDefined()
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        wrapper = mount(VkTag, {
          props: {
            size: 'xs'
          }
        })

        expect(wrapper.find('.text-xs')).toBeDefined()
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkTag, {
          props: {
            size: 'sm'
          }
        })

        expect(wrapper.find('.text-sm')).toBeDefined()
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkTag, {
          props: {
            size: 'md'
          }
        })

        expect(wrapper.find('.text-base')).toBeDefined()
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkTag, {
          props: {
            size: 'lg'
          }
        })

        expect(wrapper.find('.text-lg')).toBeDefined()
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.size is filled', () => {
        wrapper = mount(VkTag, {
          props: {
            variant: 'filled'
          }
        })

        expect(wrapper.find('.text-white')).toBeDefined()
      })

      it('should be outlined when props.size is outlined', () => {
        wrapper = mount(VkTag, {
          props: {
            variant: 'outlined'
          }
        })

        expect(wrapper.find('.border-2')).toBeDefined()
      })

      it('should be ghost when props.size is ghost', () => {
        wrapper = mount(VkTag, {
          props: {
            variant: 'ghost'
          }
        })

        expect(wrapper.find('.shadow-none')).toBeDefined()
      })
    })

    describe('When icon prop changes', () => {
      it('should display iconLeft', () => {
        wrapper = mount(VkTag, {
          props: {
            iconLeft: 'tag'
          }
        })

        expect(wrapper.find('i.ti.ti-tag').exists()).toBe(true)
      })

      it('should display iconRight', () => {
        wrapper = mount(VkTag, {
          props: {
            iconRight: 'tag'
          }
        })

        expect(wrapper.find('i.ti.ti-tag').exists()).toBe(true)
      })
    })

    describe('Closable button color', () => {
      it('should be light if variant is filled', () => {
        wrapper = mount(VkTag, {
          props: {
            variant: 'filled',
            closable: true
          }
        })

        expect(wrapper.find('.vk-tag__closable').classes()).toContain('text-light-1')
      })

      it('should hava props.color if variant is outlined or ghost', () => {
        wrapper = mount(VkTag, {
          props: {
            variant: 'outlined',
            closable: true
          }
        })

        expect(wrapper.find('.vk-tag__closable').classes()).toContain('text-primary-600')
      })
    })
  })

  describe('Emits', () => {
    it('should emit close event', () => {
      const wrapper = mount(VkTag, {
        props: {
          closable: true
        }
      })

      wrapper.find('.vk-tag__closable').trigger('click')
      expect(wrapper.emitted()).toHaveProperty('close')
    })

    it('should emit click event', () => {
      const wrapper = mount(VkTag, {})

      wrapper.find('.vk-tag').trigger('click')
      expect(wrapper.emitted()).toHaveProperty('click')
    })
  })
})
