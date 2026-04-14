import { VueWrapper, mount } from '@vue/test-utils'
import VkSkeleton from '#valkoui/components/Skeleton.vue'

describe('Skeleton component', () => {
  let wrapper: VueWrapper

  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkSkeleton, {})
      })

      it('should render', () => {
        expect(wrapper.find('.vk-skeleton').exists()).toBe(true)
      })

      it('should be full width by default', () => {
        expect(wrapper.find('.w-full').exists()).toBe(true)
      })

      it('should be full height by default', () => {
        expect(wrapper.find('.h-full').exists()).toBe(true)
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when shape is rounded', () => {
        wrapper = mount(VkSkeleton, {
          props: { shape: 'rounded' }
        })
        expect(wrapper.find('.rounded-full').exists()).toBe(true)
      })

      it('should be soft when shape is soft', () => {
        wrapper = mount(VkSkeleton, {
          props: { shape: 'soft' }
        })
        expect(wrapper.find('.rounded-lg').exists()).toBe(true)
      })

      it('should be square when shape is square', () => {
        wrapper = mount(VkSkeleton, {
          props: { shape: 'square' }
        })
        expect(wrapper.find('.rounded-none').exists()).toBe(true)
      })
    })
  })
})
