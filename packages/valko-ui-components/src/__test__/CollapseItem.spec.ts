import { nextTick } from 'vue'
import { VueWrapper, mount } from '@vue/test-utils'
import VkCollapse from '#valkoui/components/Collapse.vue'
import VkCollapseItem from '#valkoui/components/CollapseItem.vue'

describe('CollapseItem component', () => {
  let wrapper: VueWrapper
  let childWrapper: VueWrapper
  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkCollapse, {
          slots: {
            default: VkCollapseItem
          }
        })
        childWrapper = wrapper.findComponent(VkCollapseItem)
      })

      it('should render', () => {
        expect(childWrapper.find('.vk-collapse-item').exists()).toBe(true)
      })

      it('should be size md', () => {
        expect(childWrapper.find('.vk-collapse-item__button').classes()).toContain('group-data-[size=md]:text-base')
      })

      it('should be variant filled', () => {
        expect(childWrapper.classes()).toContain('group-data-[variant=filled]:bg-light-3')
      })

      it('should be shape soft', () => {
        expect(childWrapper.classes()).toContain('group-data-[shape=soft]:group-data-[separator=split]:rounded-lg')
      })

      it('should have icon', () => {
        expect(childWrapper.find('.vk-collapse-item__icon').exists()).toBe(true)
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkCollapse, {
          slots: {
            default: VkCollapseItem
          },
          props: {
            shape: 'rounded',
            separator: 'split'
          }
        })
        childWrapper = wrapper.findComponent(VkCollapseItem)
        expect(childWrapper.classes()).toContain('group-data-[shape=rounded]:group-data-[separator=split]:rounded-3xl')
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkCollapse, {
          slots: {
            default: VkCollapseItem
          },
          props: {
            shape: 'soft',
            separator: 'split'
          }
        })
        childWrapper = wrapper.findComponent(VkCollapseItem)
        expect(childWrapper.classes()).toContain('group-data-[shape=soft]:group-data-[separator=split]:rounded-lg')
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkCollapse, {
          slots: {
            default: VkCollapseItem
          },
          props: {
            shape: 'square'
          }
        })
        childWrapper = wrapper.findComponent(VkCollapseItem)
        expect(childWrapper.classes()).toContain('group-data-[shape=square]:rounded-none')
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        wrapper = mount(VkCollapse, {
          slots: {
            default: VkCollapseItem
          },
          props: {
            size: 'xs'
          }
        })

        childWrapper = wrapper.findComponent(VkCollapseItem)
        expect(childWrapper.find('.vk-collapse-item__button').classes()).toContain('group-data-[size=xs]:text-xs')
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkCollapse, {
          slots: {
            default: VkCollapseItem
          },
          props: {
            size: 'sm'
          }
        })

        childWrapper = wrapper.findComponent(VkCollapseItem)
        expect(childWrapper.find('.vk-collapse-item__button').classes()).toContain('group-data-[size=sm]:text-sm')
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkCollapse, {
          slots: {
            default: VkCollapseItem
          },
          props: {
            size: 'md'
          }
        })

        childWrapper = wrapper.findComponent(VkCollapseItem)
        expect(childWrapper.find('.vk-collapse-item__button').classes()).toContain('group-data-[size=md]:text-base')
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkCollapse, {
          slots: {
            default: VkCollapseItem
          },
          props: {
            size: 'lg'
          }
        })

        childWrapper = wrapper.findComponent(VkCollapseItem)
        expect(childWrapper.find('.vk-collapse-item__button').classes()).toContain('group-data-[size=lg]:text-lg')
      })
    })

    describe('Icon', () => {
      it('should open when clicked', async () => {
        wrapper = mount(VkCollapse, {
          slots: {
            default: VkCollapseItem
          },
          props: {
            size: 'lg'
          }
        })

        childWrapper = wrapper.findComponent(VkCollapseItem)
        childWrapper.find('.vk-collapse-item__button').trigger('click')
        await nextTick()
        expect(childWrapper.find('.vk-collapse-item__icon').classes()).toContain('-rotate-90')
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.size is filled', () => {
        wrapper = mount(VkCollapse, {
          slots: {
            default: VkCollapseItem
          },
          props: {
            variant: 'filled'
          }
        })

        childWrapper = wrapper.findComponent(VkCollapseItem)
        expect(childWrapper.find('.vk-collapse-item').classes()).toContain('group-data-[variant=filled]:bg-light-3')
      })

      it('should be outlined when props.size is outlined', () => {
        wrapper = mount(VkCollapse, {
          slots: {
            default: VkCollapseItem
          },
          props: {
            variant: 'outlined'
          }
        })

        childWrapper = wrapper.findComponent(VkCollapseItem)
        expect(childWrapper.find('.vk-collapse-item').classes()).toContain('group-data-[variant=outlined]:group-data-[separator=split]:border-2')
      })

      it('should be ghost when props.size is ghost', () => {
        wrapper = mount(VkCollapse, {
          slots: {
            default: VkCollapseItem
          },
          props: {
            variant: 'ghost'
          }
        })

        childWrapper = wrapper.findComponent(VkCollapseItem)
        expect(childWrapper.find('.vk-collapse-item').classes()).toContain('group-data-[variant=ghost]:bg-transparent')
      })
    })
  })
})
