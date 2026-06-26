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

    describe('When styleSlots prop is set', () => {
      it('should apply custom classes to the container', () => {
        wrapper = mount(VkSkeleton, {
          props: { styleSlots: { container: ['custom-class'] } }
        })

        expect(wrapper.find('.custom-class').exists()).toBe(true)
      })

      it('should preserve base classes when custom classes are added', () => {
        wrapper = mount(VkSkeleton, {
          props: { styleSlots: { container: ['custom-class'] } }
        })

        expect(wrapper.find('.vk-skeleton').exists()).toBe(true)
      })

      it('should compose custom classes with variant classes', () => {
        wrapper = mount(VkSkeleton, {
          props: { shape: 'rounded', styleSlots: { container: ['custom-class'] } }
        })

        expect(wrapper.find('.rounded-full.custom-class').exists()).toBe(true)
      })

      it('should allow overriding the default width', () => {
        wrapper = mount(VkSkeleton, {
          props: { styleSlots: { container: ['w-48'] } }
        })

        expect(wrapper.find('.w-48').exists()).toBe(true)
      })

      it('should allow overriding the default height', () => {
        wrapper = mount(VkSkeleton, {
          props: { styleSlots: { container: ['h-12'] } }
        })

        expect(wrapper.find('.h-12').exists()).toBe(true)
      })
    })
  })
})
