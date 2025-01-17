import { VueWrapper, mount } from '@vue/test-utils'
import VkCard from '#valkoui/components/Card.vue'
import VkCardBody from '#valkoui/components/CardBody.vue'

describe('CardBody component', () => {
  let wrapper: VueWrapper
  let childWrapper: VueWrapper
  describe('Should Render', () => {
    beforeEach(() => {
      wrapper = mount(VkCard, {
        slots: {
          default: VkCardBody
        }
      })
      childWrapper = wrapper.findComponent(VkCardBody)
    })

    it('should render', () => {
      expect(childWrapper.find('.vk-card__body').exists()).toBe(true)
    })
  })
})
