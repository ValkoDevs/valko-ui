import { VueWrapper, mount } from '@vue/test-utils'
import { VkSpinner } from '#valkoui/components'

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
        expect(wrapper.find('.text-primary-500').exists()).toBe(true)
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

        expect(wrapper.find('.text-primary-500').exists()).toBe(true)
      })

      it('should be color secondary when props.color is secondary', () => {
        wrapper = mount(VkSpinner, {
          props: {
            color: 'secondary'
          }
        })

        expect(wrapper.find('.text-secondary-500').exists()).toBe(true)
      })

      it('should be color success when props.color is success', () => {
        wrapper = mount(VkSpinner, {
          props: {
            color: 'success'
          }
        })

        expect(wrapper.find('.text-success-500').exists()).toBe(true)
      })

      it('should be color info when props.color is info', () => {
        wrapper = mount(VkSpinner, {
          props: {
            color: 'info'
          }
        })

        expect(wrapper.find('.text-info-500').exists()).toBe(true)
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkSpinner, {
          props: {
            color: 'warning'
          }
        })

        expect(wrapper.find('.text-warning-500').exists()).toBe(true)
      })

      it('should be color error when props.color is error', () => {
        wrapper = mount(VkSpinner, {
          props: {
            color: 'error'
          }
        })

        expect(wrapper.find('.text-error-500').exists()).toBe(true)
      })

      it('should be color light when props.color is light', () => {
        wrapper = mount(VkSpinner, {
          props: {
            color: 'light'
          }
        })

        expect(wrapper.find('.text-light-1').exists()).toBe(true)
      })

      it('should be color dark when props.color is dark', () => {
        wrapper = mount(VkSpinner, {
          props: {
            color: 'dark'
          }
        })

        expect(wrapper.find('.text-dark-5').exists()).toBe(true)
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

    describe('When variant prop changes', () => {
      it('should be loader when props.variant is loader', () => {
        wrapper = mount(VkSpinner, {
          props: {
            variant: 'loader'
          }
        })

        expect(wrapper.find('i.ti.ti-loader').exists()).toBe(true)
      })

      it('should be loader-2 when props.variant is loader-2', () => {
        wrapper = mount(VkSpinner, {
          props: {
            variant: 'loader-2'
          }
        })

        expect(wrapper.find('i.ti.ti-loader-2').exists()).toBe(true)
      })
    })
  })
})
