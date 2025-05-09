import { VueWrapper, mount } from '@vue/test-utils'
import VkMenu from '#valkoui/components/Menu.vue'
import { MenuItem } from '#valkoui/types/Menu.ts'

describe('Menu component', () => {
  const onClickMock = vi.fn()

  const menuItems: MenuItem[] = [
    { key: 'get-started', group: 'General', text: 'Get Started', onClick:  onClickMock },
    { key: 'divider', group: 'Layout', text: 'Divider', onClick:  onClickMock, disabled: true },
    { key: 'button', group: 'Forms', text: 'Button' }
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
        expect(wrapper.find('.vk-menu__content').classes()).toContain('data-[active=true]:bg-primary')
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

        expect(wrapper.find('.vk-menu__content').classes()).toContain('data-[active=true]:bg-primary')
      })

      it('should be color secondary when props.color is secondary', () => {
        wrapper = mount(VkMenu, {
          props: {
            color: 'secondary',
            items: menuItems,
            active: 1
          }
        })

        expect(wrapper.find('.vk-menu__content').classes()).toContain('data-[active=true]:bg-secondary')
      })

      it('should be color positive when props.color is positive', () => {
        wrapper = mount(VkMenu, {
          props: {
            color: 'positive',
            items: menuItems,
            active: 1
          }
        })

        expect(wrapper.find('.vk-menu__content').classes()).toContain('data-[active=true]:bg-positive')
      })

      it('should be color accent when props.color is accent', () => {
        wrapper = mount(VkMenu, {
          props: {
            color: 'accent',
            items: menuItems,
            active: 1
          }
        })

        expect(wrapper.find('.vk-menu__content').classes()).toContain('data-[active=true]:bg-accent')
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkMenu, {
          props: {
            color: 'warning',
            items: menuItems,
            active: 1
          }
        })

        expect(wrapper.find('.vk-menu__content').classes()).toContain('data-[active=true]:bg-warning')
      })

      it('should be color negative when props.color is negative', () => {
        wrapper = mount(VkMenu, {
          props: {
            color: 'negative',
            items: menuItems,
            active: 1
          }
        })

        expect(wrapper.find('.vk-menu__content').classes()).toContain('data-[active=true]:bg-negative')
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
      it('should be filled when props.variant is filled', () => {
        wrapper = mount(VkMenu, {
          props: {
            variant: 'filled',
            items: menuItems,
            active: 1
          }
        })

        expect(wrapper.find('.vk-menu__group').exists()).toBe(true)
      })

      it('should be outlined when props.variant is outlined', () => {
        wrapper = mount(VkMenu, {
          props: {
            variant: 'outlined',
            items: menuItems,
            active: 1
          }
        })

        expect(wrapper.find('.border-2').exists()).toBe(true)
      })

      it('should be ghost when props.variant is ghost', () => {
        wrapper = mount(VkMenu, {
          props: {
            variant: 'ghost',
            items: menuItems,
            active: 1
          }
        })

        expect(wrapper.find('.vk-menu__ghost').exists()).toBe(true)
      })

      it('should be link when props.variant is link', () => {
        wrapper = mount(VkMenu, {
          props: {
            variant: 'link',
            items: menuItems,
            active: 1
          }
        })

        expect(wrapper.find('.vk-menu__line').exists()).toBe(true)
      })

      it('should be line when props.variant is line', () => {
        wrapper = mount(VkMenu, {
          props: {
            variant: 'line',
            items: menuItems,
            active: 1
          }
        })

        expect(wrapper.find('.border-l-2').exists()).toBe(true)
      })

      it('should be gradient when props.variant is gradient', () => {
        wrapper = mount(VkMenu, {
          props: {
            variant: 'gradient',
            items: menuItems,
            active: 1
          }
        })

        expect(wrapper.find('.bg-gradient-to-br').exists()).toBe(true)
      })
    })
  })

  describe('onItemClick', () => {
    beforeEach(() => onClickMock.mockClear())

    it('should call item.onClick when defined', async () => {
      wrapper = mount(VkMenu, {
        props: {
          items: menuItems,
          active: 0
        }
      })

      const items = wrapper.findAll('button')
      await items[0].trigger('click')

      expect(onClickMock).toHaveBeenCalledTimes(1)
    })

    it('should not call item.onClick when disabled is true', async () => {
      wrapper = mount(VkMenu, {
        props: {
          items: menuItems,
          active: 0
        }
      })

      const items = wrapper.findAll('button')
      await items[1].trigger('click')

      expect(onClickMock).toHaveBeenCalledTimes(0)
    })
  })

  describe('Emits', () => {
    it('should emit itemClick when an Item in the menu is clicked', async () => {
      wrapper = mount(VkMenu, {
        props: {
          items: menuItems,
          active: 1
        }
      })

      const items = wrapper.findAll('button')
      await items[0].trigger('click')

      expect(wrapper.emitted()).toHaveProperty('itemClick')
    })
  })
})
