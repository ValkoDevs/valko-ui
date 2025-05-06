import { VueWrapper, mount } from '@vue/test-utils'
import VkCollapse from '#valkoui/components/Collapse.vue'
import VkCollapseItem from '#valkoui/components/CollapseItem.vue'

describe('Collapse component', () => {
  let wrapper: VueWrapper
  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkCollapse, {})
      })

      it('should render', () => {
        expect(wrapper.find('.vk-collapse').exists()).toBe(true)
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.bg-surface-container').exists()).toBe(true)
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.rounded-lg').exists()).toBe(true)
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkCollapse, {
          props: {
            shape: 'rounded'
          }
        })

        expect(wrapper.find('.rounded-2xl').exists()).toBe(true)
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkCollapse, {
          props: {
            shape: 'soft'
          }
        })

        expect(wrapper.find('.rounded-lg').exists()).toBe(true)
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkCollapse, {
          props: {
            shape: 'square'
          }
        })

        expect(wrapper.find('.rounded-none').exists()).toBe(true)
      })
    })

    describe('When separator prop changes', () => {
      it('should be line when props.separator is line', () => {
        wrapper = mount(VkCollapse, {
          props: {
            separator: 'line'
          }
        })

        expect(wrapper.find('.divide-y-2').exists()).toBe(true)
      })

      it('should be split when props.separator is split', () => {
        wrapper = mount(VkCollapse, {
          props: {
            separator: 'split'
          }
        })

        expect(wrapper.find('.gap-2').exists()).toBe(true)
      })

      it('should be none when props.separator is none', () => {
        wrapper = mount(VkCollapse, {
          props: {
            separator: 'none'
          }
        })

        expect(wrapper.find('.gap-0').exists()).toBe(true)
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.variant is filled', () => {
        wrapper = mount(VkCollapse, {
          props: {
            variant: 'filled'
          }
        })

        expect(wrapper.find('.bg-surface-container').exists()).toBe(true)
      })

      it('should be outlined when props.variant is outlined', () => {
        wrapper = mount(VkCollapse, {
          props: {
            variant: 'outlined'
          }
        })

        expect(wrapper.find('.border-2').exists()).toBe(true)
      })

      it('should be ghost when props.variant is ghost', () => {
        wrapper = mount(VkCollapse, {
          props: {
            variant: 'ghost'
          }
        })

        expect(wrapper.find('.bg-transparent').exists()).toBe(true)
      })
    })
  })

  describe('When multiple prop changes', () => {
    it('should allow multiple items to be opened when props.multiple is true', async () => {
      wrapper = mount(VkCollapse, {
        props: {
          multiple: true
        },
        slots: {
          default: [VkCollapseItem, VkCollapseItem]
        }
      })

      const collapseItems = wrapper.findAll('.vk-collapse-item__icon')
      await collapseItems[0].trigger('click')
      await collapseItems[1].trigger('click')
      expect(collapseItems[0].classes()).toContain('-rotate-90')
    })

    it('should not allow multiple items to be opened when props.multiple is false', async () => {
      wrapper = mount(VkCollapse, {
        props: {
          multiple: false
        },
        slots: {
          default: [VkCollapseItem, VkCollapseItem]
        }
      })

      const collapseItems = wrapper.findAll('.vk-collapse-item__icon')
      await collapseItems[0].trigger('click')
      await collapseItems[1].trigger('click')
      expect(collapseItems[0].classes()).not.toContain('-rotate-90')
    })
  })
})
