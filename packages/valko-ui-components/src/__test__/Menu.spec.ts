import { VueWrapper, mount } from '@vue/test-utils'
import VkMenu from '#valkoui/components/Menu.vue'
import { MenuItem } from '#valkoui/types/Menu.ts'
import { nextTick } from 'vue'

describe('Menu component', () => {
  const onClickMock = vi.fn()

  const menuItems: MenuItem[] = [
    { key: 'get-started', group: 'General', text: 'Get Started', onClick:  onClickMock },
    { key: 'divider', group: 'Layout', text: 'Divider', onClick:  onClickMock, disabled: true },
    { key: 'button', group: 'Forms', text: 'Button' }
  ]

  let wrapper: VueWrapper

  const findItemButtons = () => wrapper.findAll('.vk-menu__content')

  afterEach(() => {
    wrapper?.unmount()
    onClickMock.mockClear()
  })

  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkMenu, {
          props: {
            items: menuItems,
            active: 1
          },
          attachTo: document.body
        })
      })

      it('should render', () => {
        expect(wrapper.find('.vk-menu__group').exists()).toBe(true)
      })

      it('should be color primary', () => {
        expect(wrapper.find('.vk-menu__content').classes()).toContain('data-[active]:bg-primary')
      })

      it('should be size md', () => {
        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.vk-menu__group').exists()).toBe(true)
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', () => {
        wrapper = mount(VkMenu, {
          props: {
            color: 'primary',
            items: menuItems,
            active: 'get-started'
          },
          attachTo: document.body
        })

        expect(wrapper.find('.vk-menu__content').classes()).toContain('data-[active]:bg-primary')
      })

      it('should be color secondary when props.color is secondary', () => {
        wrapper = mount(VkMenu, {
          props: {
            color: 'secondary',
            items: menuItems,
            active: 'get-started'
          },
          attachTo: document.body
        })

        expect(wrapper.find('.vk-menu__content').classes()).toContain('data-[active]:bg-secondary')
      })

      it('should be color positive when props.color is positive', () => {
        wrapper = mount(VkMenu, {
          props: {
            color: 'positive',
            items: menuItems,
            active: 'get-started'
          },
          attachTo: document.body
        })

        expect(wrapper.find('.vk-menu__content').classes()).toContain('data-[active]:bg-positive')
      })

      it('should be color accent when props.color is accent', () => {
        wrapper = mount(VkMenu, {
          props: {
            color: 'accent',
            items: menuItems,
            active: 'get-started'
          },
          attachTo: document.body
        })

        expect(wrapper.find('.vk-menu__content').classes()).toContain('data-[active]:bg-accent')
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkMenu, {
          props: {
            color: 'warning',
            items: menuItems,
            active: 'get-started'
          },
          attachTo: document.body
        })

        expect(wrapper.find('.vk-menu__content').classes()).toContain('data-[active]:bg-warning')
      })

      it('should be color negative when props.color is negative', () => {
        wrapper = mount(VkMenu, {
          props: {
            color: 'negative',
            items: menuItems,
            active: 'get-started'
          },
          attachTo: document.body
        })

        expect(wrapper.find('.vk-menu__content').classes()).toContain('data-[active]:bg-negative')
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkMenu, {
          props: {
            shape: 'rounded',
            items: menuItems,
            active: 1
          },
          attachTo: document.body
        })

        expect(wrapper.find('.rounded-full').exists()).toBe(true)
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkMenu, {
          props: {
            shape: 'soft',
            items: menuItems,
            active: 1
          },
          attachTo: document.body
        })

        expect(wrapper.find('.rounded-lg').exists()).toBe(true)
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkMenu, {
          props: {
            shape: 'square',
            items: menuItems,
            active: 1
          },
          attachTo: document.body
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
          },
          attachTo: document.body
        })

        expect(wrapper.find('.text-xs').exists()).toBe(true)
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkMenu, {
          props: {
            size: 'sm',
            items: menuItems,
            active: 1
          },
          attachTo: document.body
        })

        expect(wrapper.find('.text-sm').exists()).toBe(true)
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkMenu, {
          props: {
            size: 'md',
            items: menuItems,
            active: 1
          },
          attachTo: document.body
        })

        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkMenu, {
          props: {
            size: 'lg',
            items: menuItems,
            active: 1
          },
          attachTo: document.body
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
          },
          attachTo: document.body
        })

        expect(wrapper.find('.vk-menu__group').exists()).toBe(true)
      })

      it('should be outlined when props.variant is outlined', () => {
        wrapper = mount(VkMenu, {
          props: {
            variant: 'outlined',
            items: menuItems,
            active: 1
          },
          attachTo: document.body
        })

        expect(wrapper.find('.border-2').exists()).toBe(true)
      })

      it('should be ghost when props.variant is ghost', () => {
        wrapper = mount(VkMenu, {
          props: {
            variant: 'ghost',
            items: menuItems,
            active: 1
          },
          attachTo: document.body
        })

        expect(wrapper.find('.vk-menu__ghost').exists()).toBe(true)
      })

      it('should be link when props.variant is link', () => {
        wrapper = mount(VkMenu, {
          props: {
            variant: 'link',
            items: menuItems,
            active: 1
          },
          attachTo: document.body
        })

        expect(wrapper.find('.vk-menu__line').exists()).toBe(true)
      })

      it('should be line when props.variant is line', () => {
        wrapper = mount(VkMenu, {
          props: {
            variant: 'line',
            items: menuItems,
            active: 1
          },
          attachTo: document.body
        })

        expect(wrapper.find('.border-l-2').exists()).toBe(true)
      })

      it('should be gradient when props.variant is gradient', () => {
        wrapper = mount(VkMenu, {
          props: {
            variant: 'gradient',
            items: menuItems,
            active: 1
          },
          attachTo: document.body
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
        },
        attachTo: document.body
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
        },
        attachTo: document.body
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
        },
        attachTo: document.body
      })

      const items = wrapper.findAll('button')
      await items[0].trigger('click')

      expect(wrapper.emitted()).toHaveProperty('itemClick')
    })
  })

  describe('Items logic', () => {
    describe('Groups', () => {
      it('should set group to default is not group is provided', () => {
        const items: MenuItem[] = [
          { key: 'no-group', text: 'No Group' }
        ]

        wrapper = mount(VkMenu, {
          props: {
            items,
            active: 0
          },
          attachTo: document.body
        })

        expect(wrapper.find('.vk-menu__group').exists()).toBe(false)
      })

      it('should set group to provided group name', () => {
        const items: MenuItem[] = [
          { key: 'with-group', group: 'Custom Group', text: 'With Group' }
        ]

        wrapper = mount(VkMenu, {
          props: {
            items,
            active: 0
          },
          attachTo: document.body
        })

        expect(wrapper.find('.vk-menu__group').text()).toBe('Custom Group')
      })
    })

    describe('Active item', () => {
      it('should mark the item matching active prop with data-active', async () => {
        wrapper = mount(VkMenu, {
          props: {
            items: menuItems,
            active: 'button'
          },
          attachTo: document.body
        })

        await nextTick()
        const buttons = findItemButtons()

        expect(buttons[2].attributes('data-active')).toBe('')
        expect(buttons[0].attributes('data-active')).toBeUndefined()
      })

      it('should not mark any item with data-active when active does not match any key', async () => {
        wrapper = mount(VkMenu, {
          props: {
            items: menuItems,
            active: 'non-existent-key'
          },
          attachTo: document.body
        })

        await nextTick()
        findItemButtons().forEach((button) => {
          expect(button.attributes('data-active')).toBeUndefined()
        })
      })
    })

    describe('Roving focus', () => {
      it('should keep items out of the tab order until focus enters the group', async () => {
        wrapper = mount(VkMenu, {
          props: {
            items: menuItems,
            active: 'button'
          },
          attachTo: document.body
        })

        await nextTick()
        findItemButtons().forEach((button) => {
          expect(button.attributes('tabindex')).toBe('-1')
        })
      })

      it('should move entry focus to the item matching active prop', async () => {
        wrapper = mount(VkMenu, {
          props: {
            items: menuItems,
            active: 'button'
          },
          attachTo: document.body
        })

        await nextTick()
        await wrapper.find('div').trigger('focus')
        await nextTick()
        const buttons = findItemButtons()

        expect(buttons[2].attributes('tabindex')).toBe('0')
        expect(buttons[2].element).toBe(document.activeElement)
      })

      it('should move entry focus to the first item if active does not match any key', async () => {
        wrapper = mount(VkMenu, {
          props: {
            items: menuItems,
            active: 'non-existent-key'
          },
          attachTo: document.body
        })

        await nextTick()
        await wrapper.find('div').trigger('focus')
        await nextTick()
        const buttons = findItemButtons()

        expect(buttons[0].attributes('tabindex')).toBe('0')
        expect(buttons[0].element).toBe(document.activeElement)
      })

      it('should not make disabled items focusable', async () => {
        const items = [
          { key: 'a', text: 'A', disabled: true },
          { key: 'b', text: 'B', disabled: true }
        ]

        wrapper = mount(VkMenu, {
          props: { items, active: 'a' },
          attachTo: document.body
        })

        await nextTick()
        const buttons = findItemButtons()

        buttons.forEach((button) => {
          expect(button.attributes('tabindex')).toBe('-1')
        })
      })

      it('should move focus with ArrowDown skipping disabled items', async () => {
        wrapper = mount(VkMenu, {
          props: {
            items: menuItems,
            active: 'get-started'
          },
          attachTo: document.body
        })

        await nextTick()
        const buttons = findItemButtons()
        await buttons[0].trigger('keydown', { key: 'ArrowDown' })
        await nextTick()
        const moved = findItemButtons()

        expect(moved[2].attributes('tabindex')).toBe('0')
        expect(moved[2].element).toBe(document.activeElement)
      })

      it('should move focus with ArrowUp wrapping to the first item', async () => {
        wrapper = mount(VkMenu, {
          props: {
            items: menuItems,
            active: 'button'
          },
          attachTo: document.body
        })

        await nextTick()
        const buttons = findItemButtons()
        await buttons[2].trigger('keydown', { key: 'ArrowUp' })
        await nextTick()
        const moved = findItemButtons()

        expect(moved[0].attributes('tabindex')).toBe('0')
        expect(moved[0].element).toBe(document.activeElement)
      })
    })
  })
})
