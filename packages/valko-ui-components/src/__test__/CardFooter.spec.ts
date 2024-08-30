import { VueWrapper, mount } from '@vue/test-utils'
import VkCard from '#valkoui/components/Card.vue'
import VkCardFooter from '#valkoui/components/CardFooter.vue'

describe('CardFooter component', () => {
  let wrapper: VueWrapper
  let childWrapper: VueWrapper
  describe('Should Render', () => {
    beforeEach(() => {
      wrapper = mount(VkCard, {
        slots: {
          default: VkCardFooter
        }
      })
      childWrapper = wrapper.findComponent(VkCardFooter)
    })

    it('should render', () => {
      expect(childWrapper.find('.vk-cardfooter').exists()).toBe(true)
    })
  })
})
