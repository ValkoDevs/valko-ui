import { VueWrapper, mount, flushPromises } from '@vue/test-utils'
import { nextTick } from 'vue'
import VkDropdown from '#valkoui/components/Dropdown.vue'
import type { DropdownProps } from '#valkoui/types/Dropdown'

const flushPortals = async () => {
  await flushPromises()
  await nextTick()
  await new Promise((resolve) => setTimeout(resolve, 5))
}

const findMenu = () => document.querySelector('.vk-dropdown__items-menu')
const findItemButtons = () => document.querySelectorAll('.vk-dropdown__item-button')
const findItemButton = () => document.querySelector('.vk-dropdown__item-button')

describe('Dropdown component', () => {
  let wrapper: VueWrapper
  const items = [
    { key: 'image', title: 'Upload Image', icon: 'photo' },
    { key: 'edit', title: 'Edit', icon: 'edit' },
    { key: 'disabled', title: 'Disabled', icon: 'negative' },
    { key: 'video', title: 'Upload Video', icon: 'video' },
    { key: 'delete', title: 'Delete', icon: 'trash' }
  ]

  const openDropdown = async (props: DropdownProps = { items }) => {
    wrapper = mount(VkDropdown, {
      props,
      attachTo: document.body
    })
    await wrapper.find('.vk-dropdown__trigger-button').trigger('click')
    await flushPortals()
  }

  afterEach(() => {
    wrapper?.unmount()
  })

  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(async () => {
        await openDropdown()
      })

      it('should render', () => {
        expect(wrapper.find('.vk-dropdown__container').exists()).toBe(true)
      })

      it('should render the items menu in a portal attached to body', () => {
        expect(findMenu()).toBeTruthy()
        expect(wrapper.find('.vk-dropdown__items-menu').exists()).toBe(false)
      })

      it('should be color primary', () => {
        expect(findItemButton()!.classList).toContain('hover:bg-primary')
      })

      it('should be size md', () => {
        expect(findItemButton()!.classList).toContain('text-base')
      })

      it('should be variant filled', () => {
        expect(findItemButton()!.classList).toContain('hover:bg-primary')
      })

      it('should be shape soft', () => {
        expect(findItemButton()!.classList).toContain('data-[shape=soft]:rounded-lg')
      })

      it('should not be disabled', () => {
        expect(wrapper.find('.cursor-not-allowed').exists()).toBe(false)
      })

      it('should not have a label', () => {
        expect(wrapper.find('.vk-dropdown__trigger-button').text()).toBe('')
      })

      it('should not be elevated', () => {
        expect(wrapper.find('.shadow-el1').exists()).toBe(false)
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', async () => {
        await openDropdown({ color: 'primary', items })
        expect(findItemButton()!.classList).toContain('hover:bg-primary')
      })

      it('should be color secondary when props.color is secondary', async () => {
        await openDropdown({ color: 'secondary', items })
        expect(findItemButton()!.classList).toContain('hover:bg-secondary')
      })

      it('should be color positive when props.color is positive', async () => {
        await openDropdown({ color: 'positive', items })
        expect(findItemButton()!.classList).toContain('hover:bg-positive')
      })

      it('should be color accent when props.color is accent', async () => {
        await openDropdown({ color: 'accent', items })
        expect(findItemButton()!.classList).toContain('hover:bg-accent')
      })

      it('should be color warning when props.color is warning', async () => {
        await openDropdown({ color: 'warning', items })
        expect(findItemButton()!.classList).toContain('hover:bg-warning')
      })

      it('should be color negative when props.color is negative', async () => {
        await openDropdown({ color: 'negative', items })
        expect(findItemButton()!.classList).toContain('hover:bg-negative')
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', async () => {
        await openDropdown({ shape: 'rounded', items })
        expect(findItemButton()!.classList).toContain('data-[shape=rounded]:rounded-full')
      })

      it('should be soft when props.shape is soft', async () => {
        await openDropdown({ shape: 'soft', items })
        expect(findItemButton()!.classList).toContain('data-[shape=soft]:rounded-lg')
      })

      it('should be square when props.shape is square', async () => {
        await openDropdown({ shape: 'square', items })
        expect(findItemButton()!.classList).toContain('data-[shape=square]:rounded-none')
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', async () => {
        await openDropdown({ size: 'xs', items })
        expect(findItemButton()!.classList).toContain('text-xs')
      })

      it('should be sm when props.size is sm', async () => {
        await openDropdown({ size: 'sm', items })
        expect(findItemButton()!.classList).toContain('text-sm')
      })

      it('should be md when props.size is md', async () => {
        await openDropdown({ size: 'md', items })
        expect(findItemButton()!.classList).toContain('text-base')
      })

      it('should be lg when props.size is lg', async () => {
        await openDropdown({ size: 'lg', items })
        expect(findItemButton()!.classList).toContain('text-lg')
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.variant is filled', async () => {
        await openDropdown({ variant: 'filled', items })
        expect(findItemButton()!.classList).toContain('hover:bg-primary')
      })

      it('should be outlined when props.variant is outlined', async () => {
        await openDropdown({ variant: 'outlined', items })
        expect(findItemButton()!.classList).toContain('border-2')
      })

      it('should be ghost when props.variant is ghost', async () => {
        await openDropdown({ variant: 'ghost', items })
        expect(findItemButton()!.classList).toContain('hover:bg-primary-container')
      })

      it('should be link when props.variant is link', async () => {
        await openDropdown({ variant: 'link', items })
        expect(findItemButton()!.classList).toContain('hover:text-primary')
      })

      it('should be gradient when props.variant is gradient', async () => {
        await openDropdown({ variant: 'gradient', items })
        expect(findItemButton()!.classList).toContain('bg-gradient-to-br')
      })
    })

    describe('When icon prop changes', () => {
      it('should render the default icon if non is provided', async () => {
        await openDropdown()
        expect(wrapper.find('i.ti.ti-chevron-down').exists()).toBe(true)
      })

      it('should render the custom icon if provided', async () => {
        await openDropdown({ items, icon: 'home' })
        expect(wrapper.find('i.ti.ti-home').exists()).toBe(true)
      })
    })

    describe('When disabled prop changes', () => {
      it('should not be disabled if disabled prop is false', async () => {
        await openDropdown({ items, disabled: false })
        expect(wrapper.find('.cursor-not-allowed').exists()).toBe(false)
      })

      it('should be disabled if disabled prop is true', async () => {
        await openDropdown({ items, disabled: true })
        expect(wrapper.find('.cursor-not-allowed').exists()).toBe(true)
      })

      it('should the item be disabled if has disabled true', async () => {
        await openDropdown({ items: [{ key: 'disabled', title: 'Disabled', icon: 'negative', disabled: true }] })
        expect(findItemButton()!.classList).toContain('data-[disabled]:cursor-not-allowed')
        expect(findItemButton()!.getAttribute('data-disabled')).toBe('')
      })
    })

    describe('When items prop changes', () => {
      it('should render all provided items correctly', async () => {
        await openDropdown()
        expect(findItemButtons().length).toBe(items.length)
      })

      it('should not render an icon if an item does not provide one', async () => {
        await openDropdown({ items: [{ key: 'no-icon', title: 'No Icon' }] })
        const itemButton = findItemButton()!
        expect(itemButton.querySelector('i')).toBeNull()
      })
    })

    describe('When placement and alignment props change', () => {
      it('should map placement to the menu side', async () => {
        await openDropdown({ items, placement: 'top' })
        expect(findMenu()!.getAttribute('data-side')).toBe('top')
      })

      it('should map alignment to the menu align', async () => {
        await openDropdown({ items, placement: 'bottom', alignment: 'end' })
        expect(findMenu()!.getAttribute('data-align')).toBe('end')
      })

      it('should delegate auto placement to Reka collision handling', async () => {
        await openDropdown({ items, placement: 'auto' })
        expect(findMenu()).toBeTruthy()
      })
    })

    describe('When elevated prop changes', () => {
      it('should be elevated when props.elevated is true', async () => {
        await openDropdown({ elevated: true, items })
        expect(wrapper.find('.vk-button__base').classes()).toContain('shadow-el1')
      })
    })
  })

  describe('Slots', () => {
    it('should render custom dropdown-trigger if provided on the slot', async () => {
      wrapper = mount(VkDropdown, {
        props: {
          items
        },
        slots: {
          'dropdown-trigger': '<button class="custom-trigger">Menu</button>'
        },
        attachTo: document.body
      })

      expect(wrapper.find('.custom-trigger').exists()).toBe(true)
    })

    it('should render default dropdown-trigger if the slot is not modified', async () => {
      await openDropdown()
      expect(wrapper.find('.vk-dropdown__trigger-button').exists()).toBe(true)
    })

    it('should provide open and toggle in the dropdown-trigger slot contract', async () => {
      const captured: { props?: Record<string, unknown> } = {}
      wrapper = mount(VkDropdown, {
        props: {
          items
        },
        slots: {
          'dropdown-trigger': (slotData) => {
            captured.props = slotData as Record<string, unknown>
            return '<button class="custom-trigger">Menu</button>'
          }
        },
        attachTo: document.body
      })

      expect(captured.props).toBeTruthy()
      expect(typeof captured.props!.toggle).toBe('function')
      expect(captured.props!.open).toBe(false)

      await (captured.props!.toggle as (event?: MouseEvent) => void)()
      await flushPortals()

      expect(captured.props!.open).toBe(true)
      expect(findMenu()).toBeTruthy()
    })
  })

  describe('Computeds', () => {
    describe('open computed', () => {
      it('should not update internalOpen when isOpen prop is set (controlled)', async () => {
        wrapper = mount(VkDropdown, {
          props: {
            isOpen: true,
            items: []
          },
          attachTo: document.body
        })

        await wrapper.find('.vk-dropdown__trigger-button').trigger('click')
        await flushPortals()

        expect((wrapper.props() as Record<string, unknown>).isOpen).toBe(true)
      })
    })
  })

  describe('Emits', () => {
    it('should emit itemClick when an item is clicked', async () => {
      await openDropdown()

      findItemButton()!.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }))
      await flushPromises()

      expect(wrapper.emitted('itemClick')).toBeTruthy()
    })

    it('should emit click event when the trigger is clicked', async () => {
      wrapper = mount(VkDropdown, {
        props: {
          items
        },
        attachTo: document.body
      })

      await wrapper.find('.vk-dropdown__trigger-button').trigger('click')

      expect(wrapper.emitted('click')).toBeTruthy()
    })

    it('should emit update:isOpen and render the menu when a controlled dropdown is opened', async () => {
      wrapper = mount(VkDropdown, {
        props: {
          items,
          isOpen: false
        },
        attrs: {
          'onUpdate:isOpen': (value: boolean) => wrapper.setProps({ isOpen: value })
        },
        attachTo: document.body
      })

      await wrapper.find('.vk-dropdown__trigger-button').trigger('click')

      expect(wrapper.emitted('update:isOpen')).toEqual([[true]])
      await flushPortals()

      expect(findMenu()).toBeTruthy()

      await wrapper.find('.vk-dropdown__trigger-button').trigger('click')
      await flushPortals()

      expect(wrapper.emitted('update:isOpen')).toEqual([[true], [false]])
      expect(findMenu()).toBeFalsy()
    })

    it('should not emit itemClick when the clicked item is disabled', async () => {
      await openDropdown({ items: [{ key: 'edit', title: 'Edit', icon: 'edit', disabled: true }] })

      findItemButton()!.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }))
      await flushPromises()

      expect(wrapper.emitted('itemClick')).toBeFalsy()
    })

    it('should close the menu when clicking outside', async () => {
      await openDropdown()
      expect(findMenu()).toBeTruthy()

      document.body.dispatchEvent(new MouseEvent('pointerdown', { bubbles: true }))
      document.body.dispatchEvent(new MouseEvent('click', { bubbles: true }))
      await flushPortals()

      expect(findMenu()).toBeNull()
    })

    it('should close the menu when pressing Escape', async () => {
      await openDropdown()
      expect(findMenu()).toBeTruthy()

      document.body.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
      await flushPortals()

      expect(findMenu()).toBeNull()
    })

    it('should close the menu after selecting an item', async () => {
      await openDropdown()

      findItemButton()!.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }))
      await flushPromises()
      await flushPortals()

      expect(findMenu()).toBeNull()
    })
  })

  describe('Keyboard navigation', () => {
    const pressKey = async (key: string) => {
      document.activeElement!.dispatchEvent(new KeyboardEvent('keydown', { key, bubbles: true, cancelable: true }))
      await flushPromises()
    }

    it('should focus the menu when it opens', async () => {
      await openDropdown()

      expect(document.activeElement).toBeTruthy()
      expect(findMenu()!.contains(document.activeElement)).toBe(true)
    })

    it('should move focus with ArrowDown and ArrowUp', async () => {
      await openDropdown()

      await pressKey('ArrowDown')
      expect(document.activeElement!.textContent).toContain('Upload Image')

      await pressKey('ArrowDown')
      expect(document.activeElement!.textContent).toContain('Edit')

      await pressKey('ArrowUp')
      expect(document.activeElement!.textContent).toContain('Upload Image')
    })

    it('should select the focused item with Enter', async () => {
      await openDropdown()

      await pressKey('ArrowDown')
      await pressKey('Enter')
      await flushPortals()

      expect(wrapper.emitted('itemClick')).toBeTruthy()
    })

    it('should skip disabled items when navigating', async () => {
      await openDropdown({
        items: [
          { key: 'alpha', title: 'Alpha' },
          { key: 'bravo', title: 'Bravo', disabled: true },
          { key: 'charlie', title: 'Charlie' }
        ]
      })

      await pressKey('ArrowDown')
      expect(document.activeElement!.textContent).toContain('Alpha')

      await pressKey('ArrowDown')
      expect(document.activeElement!.textContent).toContain('Charlie')
    })
  })
})
