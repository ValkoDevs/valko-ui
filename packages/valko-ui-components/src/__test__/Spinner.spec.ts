import { VueWrapper, mount } from '@vue/test-utils'
import VkSpinner from '#valkoui/components/Spinner.vue'

describe('Spinner component', () => {
  let wrapper: VueWrapper
  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkSpinner, {})
      })

      it('should render', () => {
        expect(wrapper.find('.animate-spin').exists()).toBe(true)
      })

      it('should be color primary', () => {
        expect(wrapper.find('.text-primary').exists()).toBe(true)
      })

      it('should be size md', () => {
        expect(wrapper.find('.text-2xl').exists()).toBe(true)
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', () => {
        wrapper = mount(VkSpinner, {
          props: {
            color: 'primary'
          }
        })

        expect(wrapper.find('.text-primary').exists()).toBe(true)
      })

      it('should be color secondary when props.color is secondary', () => {
        wrapper = mount(VkSpinner, {
          props: {
            color: 'secondary'
          }
        })

        expect(wrapper.find('.text-secondary').exists()).toBe(true)
      })

      it('should be color positive when props.color is positive', () => {
        wrapper = mount(VkSpinner, {
          props: {
            color: 'positive'
          }
        })

        expect(wrapper.find('.text-positive').exists()).toBe(true)
      })

      it('should be color accent when props.color is accent', () => {
        wrapper = mount(VkSpinner, {
          props: {
            color: 'accent'
          }
        })

        expect(wrapper.find('.text-accent').exists()).toBe(true)
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkSpinner, {
          props: {
            color: 'warning'
          }
        })

        expect(wrapper.find('.text-warning').exists()).toBe(true)
      })

      it('should be color negative when props.color is negative', () => {
        wrapper = mount(VkSpinner, {
          props: {
            color: 'negative'
          }
        })

        expect(wrapper.find('.text-negative').exists()).toBe(true)
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        wrapper = mount(VkSpinner, {
          props: {
            size: 'xs'
          }
        })

        expect(wrapper.find('.text-lg').exists()).toBe(true)
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkSpinner, {
          props: {
            size: 'sm'
          }
        })

        expect(wrapper.find('.text-xl').exists()).toBe(true)
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkSpinner, {
          props: {
            size: 'md'
          }
        })

        expect(wrapper.find('.text-2xl').exists()).toBe(true)
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkSpinner, {
          props: {
            size: 'lg'
          }
        })

        expect(wrapper.find('.text-3xl').exists()).toBe(true)
      })
    })

    describe('When name prop changes', () => {
      it('should be loader when props.name is loader', () => {
        wrapper = mount(VkSpinner, {
          props: {
            name: 'loader'
          }
        })

        expect(wrapper.find('i.ti.ti-loader').exists()).toBe(true)
      })
    })
  })
})
