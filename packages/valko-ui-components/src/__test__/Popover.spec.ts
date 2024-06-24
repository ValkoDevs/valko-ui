import { VueWrapper, mount } from '@vue/test-utils'
import VkPopover from '#valkoui/components/Popover.vue'

describe('Popover component', () => {
  let wrapper: VueWrapper

  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkPopover, {
          props: {
            isOpen: true
          }
        })
      })

      it('should render', () => {
        expect(wrapper.find('.vk-popover').exists()).toBe(true)
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.vk-popover__panel').classes()).toContain('rounded-lg')
      })

      it('should not be flat', () => {
        expect(wrapper.find('.shadow-none').exists()).toBe(false)
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkPopover, {
          props: {
            isOpen: true,
            shape: 'rounded'
          }
        })

        expect(wrapper.find('.vk-popover__panel').classes()).toContain('rounded-2xl')
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkPopover, {
          props: {
            isOpen: true,
            shape: 'soft'
          }
        })

        expect(wrapper.find('.vk-popover__panel').classes()).toContain('rounded-lg')
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkPopover, {
          props: {
            isOpen: true,
            shape: 'square'
          }
        })

        expect(wrapper.find('.vk-popover__panel').classes()).toContain('rounded-none')
      })
    })
  })

  describe('Slots', () => {
    it('should render content in default', () => {
      wrapper = mount(VkPopover, {
        props: {
          isOpen: true
        },
        slots: {
          default: 'Hello World'
        }
      })

      expect(wrapper.find('.vk-popover').text()).toBe('Hello World')
    })

    it('should render content in popover-content', () => {
      wrapper = mount(VkPopover, {
        props: {
          isOpen: true
        },
        slots: {
          'popover-content': 'Hello World'
        }
      })

      expect(wrapper.find('.vk-popover__panel').text()).toBe('Hello World')
    })
  })
})
