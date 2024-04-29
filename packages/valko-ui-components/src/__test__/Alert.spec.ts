import { VueWrapper, mount } from '@vue/test-utils'
import { VkAlert } from '#valkoui'

describe('Alert component', () => {
  let wrapper: VueWrapper

  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkAlert, {})
      })

      it('should render', () => {
        expect(wrapper.find('.vk-alert__container').exists()).toBe(true)
      })

      it('should be color primary', () => {
        expect(wrapper.find('.bg-primary-500').exists()).toBe(true)
      })

      it('should be size md', () => {
        expect(wrapper.find('span.text-base').exists()).toBe(true)
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.bg-primary-500').exists()).toBe(true)
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.rounded-lg').exists()).toBe(true)
      })

      it('should have default icon', () => {
        expect(wrapper.find('i.ti.ti-bulb-filled').exists()).toBe(true)
      })

      it('should not be flat', () => {
        expect(wrapper.find('.shadow-none').exists()).toBe(false)
      })

      it('should not be closable', () => {
        expect(wrapper.find('.vk-alert__close').exists()).toBe(false)
      })

      it('should not have title', () => {
        expect(wrapper.find('h6').exists()).toBe(false)
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', () => {
        wrapper = mount(VkAlert, {
          props: {
            color: 'primary'
          }
        })

        expect(wrapper.find('.bg-primary-500').exists()).toBe(true)
      })

      it('should be color secondary when props.color is secondary', () => {
        wrapper = mount(VkAlert, {
          props: {
            color: 'secondary'
          }
        })

        expect(wrapper.find('.bg-secondary-500').exists()).toBe(true)
      })

      it('should be color success when props.color is success', () => {
        wrapper = mount(VkAlert, {
          props: {
            color: 'success'
          }
        })

        expect(wrapper.find('.bg-success-500').exists()).toBe(true)
      })

      it('should be color info when props.color is info', () => {
        wrapper = mount(VkAlert, {
          props: {
            color: 'info'
          }
        })

        expect(wrapper.find('.bg-info-500').exists()).toBe(true)
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkAlert, {
          props: {
            color: 'warning'
          }
        })

        expect(wrapper.find('.bg-warning-500').exists()).toBe(true)
      })

      it('should be color error when props.color is error', () => {
        wrapper = mount(VkAlert, {
          props: {
            color: 'error'
          }
        })

        expect(wrapper.find('.bg-error-500').exists()).toBe(true)
      })

      it('should be color light when props.color is light', () => {
        wrapper = mount(VkAlert, {
          props: {
            color: 'light'
          }
        })

        expect(wrapper.find('.bg-light-1').exists()).toBe(true)
      })

      it('should be color dark when props.color is dark', () => {
        wrapper = mount(VkAlert, {
          props: {
            color: 'dark'
          }
        })

        expect(wrapper.find('.bg-dark-5').exists()).toBe(true)
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkAlert, {
          props: {
            shape: 'rounded'
          }
        })

        expect(wrapper.find('.rounded-full').exists()).toBe(true)
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkAlert, {
          props: {
            shape: 'soft'
          }
        })

        expect(wrapper.find('.rounded-lg').exists()).toBe(true)
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkAlert, {
          props: {
            shape: 'square'
          }
        })

        expect(wrapper.find('.rounded-none').exists()).toBe(true)
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        wrapper = mount(VkAlert, {
          props: {
            size: 'xs'
          }
        })

        expect(wrapper.find('.text-xs').exists()).toBe(true)
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkAlert, {
          props: {
            size: 'sm'
          }
        })

        expect(wrapper.find('.text-sm').exists()).toBe(true)
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkAlert, {
          props: {
            size: 'md'
          }
        })

        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkAlert, {
          props: {
            size: 'lg'
          }
        })

        expect(wrapper.find('.text-lg').exists()).toBe(true)
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.size is filled', () => {
        wrapper = mount(VkAlert, {
          props: {
            variant: 'filled'
          }
        })

        expect(wrapper.find('.text-white').exists()).toBe(true)
      })

      it('should be outlined when props.size is outlined', () => {
        wrapper = mount(VkAlert, {
          props: {
            variant: 'outlined'
          }
        })

        expect(wrapper.find('.border-2').exists()).toBe(true)
      })

      it('should be ghost when props.size is ghost', () => {
        wrapper = mount(VkAlert, {
          props: {
            variant: 'ghost'
          }
        })

        expect(wrapper.find('.shadow-none').exists()).toBe(true)
      })
    })

    describe('When title prop changes', () => {
      it('should show title when props.title is set', () => {
        wrapper = mount(VkAlert, {
          props: {
            title: 'Hello World'
          }
        })

        expect(wrapper.find('h6').text()).toContain('Hello World')
      })
    })

    describe('When icon prop changes', () => {
      it('should show default icon when props.icon is an empty string', () => {
        wrapper = mount(VkAlert, {
          props: {
            icon: ''
          }
        })

        expect(wrapper.find('i.ti.ti-bulb-filled').exists()).toBe(true)
      })

      it('should show custom icon when props.icon is an icon name', () => {
        wrapper = mount(VkAlert, {
          props: {
            icon: 'home'
          }
        })

        expect(wrapper.find('i.ti.ti-home').exists()).toBe(true)
      })

      it('should not show icon when props.icon is null', () => {
        wrapper = mount(VkAlert, {
          props: {
            icon: null
          }
        })

        expect(wrapper.find('i.ti').exists()).toBe(false)
      })
    })
  })

  describe('Slots', () => {
    describe('With default slots', () => {
      it('should be empty', () => {
        wrapper = mount(VkAlert, {})

        expect(wrapper.find('span').text()).toBe('')
      })
    })

    describe('When slot changes', () => {
      it('should render text in slot name default', () => {
        wrapper = mount(VkAlert, {
          slots: {
            default: 'Hello World'
          }
        })

        expect(wrapper.find('span').text()).toContain('Hello World')
      })
    })
  })

  describe('Emits', () => {
    it('should emit close event', () => {
      const wrapper = mount(VkAlert, {
        props: {
          closable: true
        }
      })

      wrapper.find('.vk-alert__close').trigger('click')
      expect(wrapper.emitted()).toHaveProperty('close')
    })
  })
})
