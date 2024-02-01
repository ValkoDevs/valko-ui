import { VueWrapper, mount } from '@vue/test-utils'
import { VkCollapse } from '.'

describe('Switch component', () => {
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
        expect(wrapper.find('.bg-light-3').exists()).toBe(true)
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
      it('should be filled when props.size is filled', () => {
        wrapper = mount(VkCollapse, {
          props: {
            variant: 'filled'
          }
        })

        expect(wrapper.find('.bg-light-3').exists()).toBe(true)
      })

      it('should be outlined when props.size is outlined', () => {
        wrapper = mount(VkCollapse, {
          props: {
            variant: 'outlined'
          }
        })

        expect(wrapper.find('.border-2').exists()).toBe(true)
      })

      it('should be ghost when props.size is ghost', () => {
        wrapper = mount(VkCollapse, {
          props: {
            variant: 'ghost'
          }
        })

        expect(wrapper.find('.bg-transparent').exists()).toBe(true)
      })
    })
  })
})
