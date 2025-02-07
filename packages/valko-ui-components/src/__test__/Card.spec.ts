import { VueWrapper, mount } from '@vue/test-utils'
import VkCard from '#valkoui/components/Card.vue'

describe('Card component', () => {
  let wrapper: VueWrapper

  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkCard, {})
      })

      it('should render', () => {
        expect(wrapper.find('.vk-card').exists()).toBe(true)
      })

      it('should be size md', () => {
        expect(wrapper.find('.w-80').exists()).toBe(true)
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.bg-light-2').exists()).toBe(true)
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.rounded-lg').exists()).toBe(true)
      })

      it('should not be flat', () => {
        expect(wrapper.find('.shadow-none').exists()).toBe(false)
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkCard, {
          props: {
            shape: 'rounded'
          }
        })

        expect(wrapper.find('.rounded-3xl').exists()).toBe(true)
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkCard, {
          props: {
            shape: 'soft'
          }
        })

        expect(wrapper.find('.rounded-lg').exists()).toBe(true)
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkCard, {
          props: {
            shape: 'square'
          }
        })

        expect(wrapper.find('.rounded-none').exists()).toBe(true)
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        wrapper = mount(VkCard, {
          props: {
            size: 'xs'
          }
        })

        expect(wrapper.find('.w-48').exists()).toBe(true)
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkCard, {
          props: {
            size: 'sm'
          }
        })

        expect(wrapper.find('.w-64').exists()).toBe(true)
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkCard, {
          props: {
            size: 'md'
          }
        })

        expect(wrapper.find('.w-80').exists()).toBe(true)
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkCard, {
          props: {
            size: 'lg'
          }
        })

        expect(wrapper.find('.w-96').exists()).toBe(true)
      })

      it('should be full when props.size is full', () => {
        wrapper = mount(VkCard, {
          props: {
            size: 'full'
          }
        })

        expect(wrapper.find('.w-full').exists()).toBe(true)
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.variant is filled', () => {
        wrapper = mount(VkCard, {
          props: {
            variant: 'filled'
          }
        })

        expect(wrapper.find('.bg-light-2').exists()).toBe(true)
      })

      it('should be outlined when props.variant is outlined', () => {
        wrapper = mount(VkCard, {
          props: {
            variant: 'outlined'
          }
        })

        expect(wrapper.find('.border-2').exists()).toBe(true)
      })

      it('should be ghost when props.variant is ghost', () => {
        wrapper = mount(VkCard, {
          props: {
            variant: 'ghost'
          }
        })

        expect(wrapper.find('.shadow-none').exists()).toBe(true)
      })
    })
  })

  describe('Slots', () => {
    describe('With default slots', () => {
      it('should be empty', () => {
        wrapper = mount(VkCard, {})

        expect(wrapper.find('.vk-card').text()).toBe('')
      })
    })

    describe('When slot changes', () => {
      it('should render text in slot name default', () => {
        wrapper = mount(VkCard, {
          slots: {
            default: 'Hello World'
          }
        })

        expect(wrapper.find('.vk-card').text()).toContain('Hello World')
      })
    })
  })

  describe('Emits', () => {
    it('should emit click event', () => {
      const wrapper = mount(VkCard, {
        props: {
          isPressable: true
        }
      })

      wrapper.find('.vk-card').trigger('click')
      expect(wrapper.emitted()).toHaveProperty('click')
    })
  })
})
