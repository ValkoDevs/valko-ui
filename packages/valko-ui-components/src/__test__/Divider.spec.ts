import { VueWrapper, mount } from '@vue/test-utils'
import { VkDivider } from '#valkoui/components'

describe('Didiver component', () => {
  let wrapper: VueWrapper
  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkDivider, {})
      })

      it('should render', () => {
        expect(wrapper.find('.vk-divider').exists()).toBe(true)
      })

      it('should be direction vertical', () => {
        expect(wrapper.find('.border-l').exists()).toBe(true)
      })
    })
  })

  describe('When direction prop changes', () => {
    it('should be vertical when prop.direction is vertical', () => {
      wrapper = mount(VkDivider, {})

      expect(wrapper.find('.border-l').exists()).toBe(true)
    })

    it('should be horizontal when prop.direction is horizontal', () => {
      wrapper = mount(VkDivider, {
        props: {
          direction: 'horizontal'
        }
      })

      expect(wrapper.find('.border-t').exists()).toBe(true)
    })
  })
})
