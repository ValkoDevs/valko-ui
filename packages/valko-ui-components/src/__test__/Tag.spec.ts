import { VueWrapper, mount } from '@vue/test-utils'
import VkTag from '#valkoui/components/Tag.vue'

describe('Tag component', () => {
  let wrapper: VueWrapper

  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkTag, {
          props: {
            text: 'Hello World'
          }
        })
      })

      it('should render', () => {
        expect(wrapper.find('.vk-tag').exists()).toBe(true)
      })

      it('should be color primary', () => {
        expect(wrapper.find('.bg-primary').exists()).toBe(true)
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.text-on-primary').exists()).toBe(true)
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.rounded-lg').exists()).toBe(true)
      })

      it('should be size md', () => {
        expect(wrapper.find('.text-sm').exists()).toBe(true)
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
            color: 'primary',
            text: 'Hello World'
          }
        })

        expect(wrapper.find('.bg-primary').exists()).toBe(true)
      })

      it('should be color secondary when props.color is secondary', () => {
        wrapper = mount(VkTag, {
          props: {
            color: 'secondary',
            text: 'Hello World'
          }
        })

        expect(wrapper.find('.bg-secondary').exists()).toBe(true)
      })

      it('should be color positive when props.color is positive', () => {
        wrapper = mount(VkTag, {
          props: {
            color: 'positive',
            text: 'Hello World'
          }
        })

        expect(wrapper.find('.bg-positive').exists()).toBe(true)
      })

      it('should be color accent when props.color is accent', () => {
        wrapper = mount(VkTag, {
          props: {
            color: 'accent',
            text: 'Hello World'
          }
        })

        expect(wrapper.find('.bg-accent').exists()).toBe(true)
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkTag, {
          props: {
            color: 'warning',
            text: 'Hello World'
          }
        })

        expect(wrapper.find('.bg-warning').exists()).toBe(true)
      })

      it('should be color negative when props.color is negative', () => {
        wrapper = mount(VkTag, {
          props: {
            color: 'negative',
            text: 'Hello World'
          }
        })

        expect(wrapper.find('.bg-negative').exists()).toBe(true)
      })

      it('should be color surface when props.color is surface', () => {
        wrapper = mount(VkTag, {
          props: {
            color: 'surface',
            text: 'Hello World'
          }
        })

        expect(wrapper.find('.bg-surface-container-highest').exists()).toBe(true)
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkTag, {
          props: {
            shape: 'rounded',
            text: 'Hello World'
          }
        })

        expect(wrapper.find('.rounded-full').exists()).toBe(true)
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkTag, {
          props: {
            shape: 'soft',
            text: 'Hello World'
          }
        })

        expect(wrapper.find('.rounded-lg').exists()).toBe(true)
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkTag, {
          props: {
            shape: 'square',
            text: 'Hello World'
          }
        })

        expect(wrapper.find('.rounded-none').exists()).toBe(true)
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        wrapper = mount(VkTag, {
          props: {
            size: 'xs',
            text: 'Hello World'
          }
        })

        expect(wrapper.find('.vk-tag').classes()).toContain('text-[0.6321875rem]')
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkTag, {
          props: {
            size: 'sm',
            text: 'Hello World'
          }
        })

        expect(wrapper.find('.vk-tag').classes()).toContain('text-[0.74375rem]')
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkTag, {
          props: {
            size: 'md',
            text: 'Hello World'
          }
        })

        expect(wrapper.find('.vk-tag').classes()).toContain('text-sm')
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkTag, {
          props: {
            size: 'lg',
            text: 'Hello World'
          }
        })

        expect(wrapper.find('.vk-tag').classes()).toContain('text-[1.00625rem]')
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.variant is filled', () => {
        wrapper = mount(VkTag, {
          props: {
            variant: 'filled',
            text: 'Hello World'
          }
        })

        expect(wrapper.find('.text-on-primary').exists()).toBe(true)
      })

      it('should be outlined when props.variant is outlined', () => {
        wrapper = mount(VkTag, {
          props: {
            variant: 'outlined',
            text: 'Hello World'
          }
        })

        expect(wrapper.find('.border-2').exists()).toBe(true)
      })

      it('should be ghost when props.variant is ghost', () => {
        wrapper = mount(VkTag, {
          props: {
            variant: 'ghost',
            text: 'Hello World'
          }
        })

        expect(wrapper.find('.vk-tag__ghost').exists()).toBe(true)
      })

      it('should be gradient when props.variant is gradient', () => {
        wrapper = mount(VkTag, {
          props: {
            variant: 'gradient',
            text: 'Hello World'
          }
        })

        expect(wrapper.find('.bg-gradient-to-br').exists()).toBe(true)
      })
    })

    describe('When icon prop changes', () => {
      it('should display iconLeft', () => {
        wrapper = mount(VkTag, {
          props: {
            iconLeft: 'tag',
            text: 'Hello World'
          }
        })

        expect(wrapper.find('i.ti.ti-tag').exists()).toBe(true)
      })

      it('should display iconRight', () => {
        wrapper = mount(VkTag, {
          props: {
            iconRight: 'tag',
            text: 'Hello World'
          }
        })

        expect(wrapper.find('i.ti.ti-tag').exists()).toBe(true)
      })
    })

    describe('Closable icon color', () => {
      it('should be primary if props.color is primary', () => {
        wrapper = mount(VkTag, {
          props: {
            color: 'primary',
            closable: true,
            text: 'Hello World'
          }
        })

        expect(wrapper.find('.vk-tag__close-icon').classes()).toContain('text-on-primary')
      })

      it('should be secondary if props.color is secondary', () => {
        wrapper = mount(VkTag, {
          props: {
            color: 'secondary',
            closable: true,
            text: 'Hello World'
          }
        })

        expect(wrapper.find('.vk-tag__close-icon').classes()).toContain('text-on-secondary')
      })

      it('should be positive if props.color is positive', () => {
        wrapper = mount(VkTag, {
          props: {
            color: 'positive',
            closable: true,
            text: 'Hello World'
          }
        })

        expect(wrapper.find('.vk-tag__close-icon').classes()).toContain('text-on-positive')
      })

      it('should be negative if props.color is negative', () => {
        wrapper = mount(VkTag, {
          props: {
            color: 'negative',
            closable: true,
            text: 'Hello World'
          }
        })

        expect(wrapper.find('.vk-tag__close-icon').classes()).toContain('text-on-negative')
      })

      it('should be warning if props.color is warning', () => {
        wrapper = mount(VkTag, {
          props: {
            color: 'warning',
            closable: true,
            text: 'Hello World'
          }
        })

        expect(wrapper.find('.vk-tag__close-icon').classes()).toContain('text-on-warning')
      })

      it('should be accent if props.color is accent', () => {
        wrapper = mount(VkTag, {
          props: {
            color: 'accent',
            closable: true,
            text: 'Hello World'
          }
        })

        expect(wrapper.find('.vk-tag__close-icon').classes()).toContain('text-on-accent')
      })
    })
  })

  describe('Emits', () => {
    it('should emit close event', () => {
      const wrapper = mount(VkTag, {
        props: {
          closable: true,
          text: 'Hello World'
        }
      })

      wrapper.find('.vk-tag__closable').trigger('click')
      expect(wrapper.emitted()).toHaveProperty('close')
    })

    it('should emit click event', () => {
      const wrapper = mount(VkTag, {
        props: {
          text: 'Hello World',
          isPressable: true
        }
      })

      wrapper.find('.vk-tag').trigger('click')
      expect(wrapper.emitted()).toHaveProperty('click')
    })
  })
})
