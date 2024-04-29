import { VueWrapper, mount } from '@vue/test-utils'
import { VkMenu, type MenuItem } from '#valkoui'

describe('Menu component', () => {
  const menuItems: MenuItem[] = [
    { key: 'get-started', group: 'General', text: 'Get Started' },
    { key: 'divider', group: 'Layout', text: 'Divider' },
    { key: 'button', group: 'Forms', text: 'Button' },
    { key: 'input', group: 'Forms',  text:'Input' },
    { key: 'checkbox', group: 'Forms', text: 'Checkbox' },
    { key: 'select', group: 'Forms', text: 'Select' },
    { key: 'textarea', group: 'Forms', text: 'Textarea' },
    { key: 'radio', group: 'Forms', text: 'Radio' },
    { key: 'alert', group: 'Ui', text: 'Alert' },
    { key: 'progressbar', group: 'Ui', text: 'Progressbar' },
    { key: 'spinner', group: 'Ui', text: 'Spinner' },
    { key: 'pagination', group: 'Data', text: 'Pagination' },
    { key: 'collapse', group: 'Data', text: 'Collapse' },
    { key: 'tabs', group: 'Data', text: 'Tabs' }
  ]
  let wrapper: VueWrapper
  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkMenu, {
          props: {
            items: menuItems,
            active: 1
          }
        })
      })

      it('should render', () => {
        expect(wrapper.find('.vk-menu__group').exists()).toBe(true)
      })

      it('should be color primary', () => {
        expect(wrapper.find('.vk-menu__content').classes()).toContain('data-[active=true]:bg-primary-500')
      })

      it('should be size md', () => {
        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.vk-menu__group').exists()).toBe(true)
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.rounded-lg').exists()).toBe(true)
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', () => {
        wrapper = mount(VkMenu, {
          props: {
            color: 'primary',
            items: menuItems,
            active: 1
          }
        })

        expect(wrapper.find('.vk-menu__content').classes()).toContain('data-[active=true]:bg-primary-500')
      })

      it('should be color secondary when props.color is secondary', () => {
        wrapper = mount(VkMenu, {
          props: {
            color: 'secondary',
            items: menuItems,
            active: 1
          }
        })

        expect(wrapper.find('.vk-menu__content').classes()).toContain('data-[active=true]:bg-secondary-500')
      })

      it('should be color success when props.color is success', () => {
        wrapper = mount(VkMenu, {
          props: {
            color: 'success',
            items: menuItems,
            active: 1
          }
        })

        expect(wrapper.find('.vk-menu__content').classes()).toContain('data-[active=true]:bg-success-500')
      })

      it('should be color info when props.color is info', () => {
        wrapper = mount(VkMenu, {
          props: {
            color: 'info',
            items: menuItems,
            active: 1
          }
        })

        expect(wrapper.find('.vk-menu__content').classes()).toContain('data-[active=true]:bg-info-500')
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkMenu, {
          props: {
            color: 'warning',
            items: menuItems,
            active: 1
          }
        })

        expect(wrapper.find('.vk-menu__content').classes()).toContain('data-[active=true]:bg-warning-500')
      })

      it('should be color error when props.color is error', () => {
        wrapper = mount(VkMenu, {
          props: {
            color: 'error',
            items: menuItems,
            active: 1
          }
        })

        expect(wrapper.find('.vk-menu__content').classes()).toContain('data-[active=true]:bg-error-500')
      })

      it('should be color light when props.color is light', () => {
        wrapper = mount(VkMenu, {
          props: {
            color: 'light',
            items: menuItems,
            active: 1
          }
        })

        expect(wrapper.find('.vk-menu__content').classes()).toContain('data-[active=true]:bg-light-1')
      })

      it('should be color dark when props.color is dark', () => {
        wrapper = mount(VkMenu, {
          props: {
            color: 'dark',
            items: menuItems,
            active: 1
          }
        })

        expect(wrapper.find('.vk-menu__content').classes()).toContain('data-[active=true]:bg-dark-3')
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkMenu, {
          props: {
            shape: 'rounded',
            items: menuItems,
            active: 1
          }
        })

        expect(wrapper.find('.rounded-full').exists()).toBe(true)
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkMenu, {
          props: {
            shape: 'soft',
            items: menuItems,
            active: 1
          }
        })

        expect(wrapper.find('.rounded-lg').exists()).toBe(true)
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkMenu, {
          props: {
            shape: 'square',
            items: menuItems,
            active: 1
          }
        })

        expect(wrapper.find('.rounded-none').exists()).toBe(true)
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        wrapper = mount(VkMenu, {
          props: {
            size: 'xs',
            items: menuItems,
            active: 1
          }
        })

        expect(wrapper.find('.text-xs').exists()).toBe(true)
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkMenu, {
          props: {
            size: 'sm',
            items: menuItems,
            active: 1
          }
        })

        expect(wrapper.find('.text-sm').exists()).toBe(true)
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkMenu, {
          props: {
            size: 'md',
            items: menuItems,
            active: 1
          }
        })

        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkMenu, {
          props: {
            size: 'lg',
            items: menuItems,
            active: 1
          }
        })

        expect(wrapper.find('.text-lg').exists()).toBe(true)
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.size is filled', () => {
        wrapper = mount(VkMenu, {
          props: {
            variant: 'filled',
            items: menuItems,
            active: 1
          }
        })

        expect(wrapper.find('.vk-menu__group').exists()).toBe(true)
      })

      it('should be outlined when props.size is outlined', () => {
        wrapper = mount(VkMenu, {
          props: {
            variant: 'outlined',
            items: menuItems,
            active: 1
          }
        })

        expect(wrapper.find('.border-2').exists()).toBe(true)
      })

      it('should be ghost when props.size is ghost', () => {
        wrapper = mount(VkMenu, {
          props: {
            variant: 'ghost',
            items: menuItems,
            active: 1
          }
        })

        expect(wrapper.find('.vk-menu__group').exists()).toBe(true)
      })
    })
  })
})
