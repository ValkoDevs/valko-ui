import { VueWrapper, mount } from '@vue/test-utils'
import VkCard from '#valkoui/components/Card.vue'
import VkCardHeader from '#valkoui/components/CardHeader.vue'

describe('CardHeader component', () => {
  let wrapper: VueWrapper
  let childWrapper: VueWrapper
  describe('Should Render', () => {
    beforeEach(() => {
      wrapper = mount(VkCard, {
        slots: {
          default: VkCardHeader
        }
      })
      childWrapper = wrapper.findComponent(VkCardHeader)
    })

    it('should render', () => {
      expect(childWrapper.find('.vk-card__header').exists()).toBe(true)
    })
  })
})
