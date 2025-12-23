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

      it('should have default width', () => {
        expect(wrapper.find('.vk-skeleton').attributes('style')).toContain('width: 200px;')
      })

      it('should have default height', () => {
        expect(wrapper.find('.vk-skeleton').attributes('style')).toContain('height: 200px;')
      })
    })

    describe('When width and height props change', () => {
      it('should apply custom width', () => {
        wrapper = mount(VkSkeleton, {
          props: { width: 400 }
        })
        const skeletonElement = wrapper.find('.vk-skeleton')
        expect(skeletonElement.attributes('style')).toContain('width: 400px;')
      })

      it('should apply custom height', () => {
        wrapper = mount(VkSkeleton, {
          props: { height: 400 }
        })
        const skeletonElement = wrapper.find('.vk-skeleton')
        expect(skeletonElement.attributes('style')).toContain('height: 400px;')
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
