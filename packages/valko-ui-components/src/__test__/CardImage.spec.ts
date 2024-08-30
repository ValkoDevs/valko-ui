import { VueWrapper, mount } from '@vue/test-utils'
import VkCard from '#valkoui/components/Card.vue'
import VkCardImage from '#valkoui/components/CardImage.vue'

describe('CardImage component', () => {
  let wrapper: VueWrapper
  let childWrapper: VueWrapper
  describe('Should Render', () => {
    beforeEach(() => {
      wrapper = mount(VkCard, {
        slots: {
          default: VkCardImage
        }
      })
      childWrapper = wrapper.findComponent(VkCardImage)
    })

    it('should render', () => {
      expect(childWrapper.find('.vk-cardimage').exists()).toBe(true)
    })
  })
})
