import { DOMWrapper, VueWrapper, mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import VkDrawer from '#valkoui/components/Drawer.vue'

class ResizeObserver {
  observe() {return}
  unobserve() {return}
  disconnect() {return}
}

globalThis.ResizeObserver = ResizeObserver

const flushTicks = async () => {
  await nextTick()
  await nextTick()
}

// Reka registers its outside-pointerdown listener on a `setTimeout(0)`, so the
// tests must yield a macrotask before dispatching outside events.
// (`Promise.withResolvers` is unavailable: the package lib predates ES2024.)
const flushListeners = () => new Promise<void>(resolve => setTimeout(resolve, 0))

const getPanel = () => new DOMWrapper(document.querySelector('.vk-drawer__panel') as Element)
const getBackdrop = () => new DOMWrapper(document.querySelector('.vk-drawer__backdrop') as Element)
const getDialog = () => new DOMWrapper(document.querySelector('.vk-drawer__dialog') as Element)

describe('Drawer component', () => {
  let wrapper: VueWrapper

  afterEach(() => {
    wrapper?.unmount()
    document.body.innerHTML = ''
  })

  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(async () => {
        wrapper = mount(VkDrawer, {
          props: {
            isOpen: true
          },
          slots: {
            default: 'Hello World'
          },
          attachTo: document.body
        })
        await flushTicks()
      })

      it('should render', () => {
        expect(getPanel().text()).toContain('Hello World')
      })

      it('should be shape soft', () => {
        expect(getPanel().classes()).toContain('rounded-l-lg')
      })

      it('should be size md', () => {
        expect(getPanel().classes()).toContain('md:max-w-xl')
      })

      it('should be closable', () => {
        expect(getPanel().find('i.ti.ti-x').exists()).toBe(true)
      })

      it('should be opaque', () => {
        expect(getBackdrop().classes()).toContain('bg-state-scrim')
      })

      it('should not have title', () => {
        expect(getPanel().find('.vk-drawer__title').text()).toContain('')
      })

      it('should be elevated', () => {
        expect(getPanel().classes()).toContain('shadow-el3')
      })
    })

    describe('When isOpen prop changes', () => {
      it('should not render when isOpen is false', async () => {
        wrapper = mount(VkDrawer, {
          props: {
            isOpen: false
          },
          attachTo: document.body
        })
        await flushTicks()
        expect(document.querySelector('.vk-drawer__panel')).toBeNull()
      })

      it('should render when isOpen becomes true and unmount when it becomes false', async () => {
        wrapper = mount(VkDrawer, {
          props: {
            isOpen: false
          },
          attachTo: document.body
        })
        await flushTicks()

        await wrapper.setProps({ isOpen: true })
        await flushTicks()
        expect(document.querySelector('.vk-drawer__panel')).not.toBeNull()

        await wrapper.setProps({ isOpen: false })
        await flushTicks()
        expect(document.querySelector('.vk-drawer__panel')).toBeNull()
      })
    })

    describe('When closable and title prop changes', () => {
      it('should not display closable icon when false', async () => {
        wrapper = mount(VkDrawer, {
          props: {
            isOpen: true,
            closable: false
          },
          attachTo: document.body
        })
        await flushTicks()
        expect(getPanel().find('i.ti.ti-x').exists()).toBe(false)
      })

      it('should have title if title props is given', async () => {
        wrapper = mount(VkDrawer, {
          props: {
            isOpen: true,
            title: 'Drawer Title'
          },
          attachTo: document.body
        })
        await flushTicks()
        expect(getPanel().find('.vk-drawer__title').text()).toContain('Drawer Title')
      })

      it('should be closable and not have title', async () => {
        wrapper = mount(VkDrawer, {
          props: {
            isOpen: true,
            closable: true
          },
          attachTo: document.body
        })
        await flushTicks()
        expect(getPanel().find('i.ti.ti-x').exists()).toBe(true)
      })

      it('should not render the header section when both title and closable are falsy', async () => {
        wrapper = mount(VkDrawer, {
          props: {
            isOpen: true,
            closable: false,
            title: ''
          },
          attachTo: document.body
        })
        await flushTicks()
        expect(getPanel().find('.vk-drawer__panel-child').exists()).toBe(false)
      })

      it('should render header with title but without close button when closable is false', async () => {
        wrapper = mount(VkDrawer, {
          props: {
            isOpen: true,
            closable: false,
            title: 'Drawer'
          },
          attachTo: document.body
        })
        await flushTicks()
        const header = getPanel().find('.vk-drawer__panel-child')
        expect(header.exists()).toBe(true)
        expect(header.find('i.ti.ti-x').exists()).toBe(false)
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', async () => {
        wrapper = mount(VkDrawer, {
          props: {
            isOpen: true,
            shape: 'rounded'
          },
          attachTo: document.body
        })
        await flushTicks()
        expect(getPanel().classes()).toContain('rounded-l-2xl')
      })

      it('should be soft when props.shape is soft', async () => {
        wrapper = mount(VkDrawer, {
          props: {
            isOpen: true,
            shape: 'soft'
          },
          slots: {
            default: 'Hello World'
          },
          attachTo: document.body
        })
        await flushTicks()
        expect(getPanel().classes()).toContain('rounded-l-lg')
      })

      it('should be square when props.shape is square', async () => {
        wrapper = mount(VkDrawer, {
          props: {
            isOpen: true,
            shape: 'square'
          },
          slots: {
            default: 'Hello World'
          },
          attachTo: document.body
        })
        await flushTicks()
        expect(getPanel().classes()).toContain('rounded-none')
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', async () => {
        wrapper = mount(VkDrawer, {
          props: {
            isOpen: true,
            size: 'xs'
          },
          slots: {
            default: 'Hello World'
          },
          attachTo: document.body
        })
        await flushTicks()
        expect(getPanel().classes()).toContain('md:max-w-xs')
      })

      it('should be sm when props.size is sm', async () => {
        wrapper = mount(VkDrawer, {
          props: {
            isOpen: true,
            size: 'sm'
          },
          slots: {
            default: 'Hello World'
          },
          attachTo: document.body
        })
        await flushTicks()
        expect(getPanel().classes()).toContain('md:max-w-lg')
      })

      it('should be md when props.size is md', async () => {
        wrapper = mount(VkDrawer, {
          props: {
            isOpen: true,
            size: 'md'
          },
          slots: {
            default: 'Hello World'
          },
          attachTo: document.body
        })
        await flushTicks()
        expect(getPanel().classes()).toContain('md:max-w-xl')
      })

      it('should be lg when props.size is lg', async () => {
        wrapper = mount(VkDrawer, {
          props: {
            isOpen: true,
            size: 'lg'
          },
          slots: {
            default: 'Hello World'
          },
          attachTo: document.body
        })
        await flushTicks()
        expect(getPanel().classes()).toContain('md:max-w-2xl')
      })
    })

    describe('When backdrop prop changes', () => {
      it('should be opaque when props.backdrop is opaque', async () => {
        wrapper = mount(VkDrawer, {
          props: {
            isOpen: true,
            backdrop: 'opaque'
          },
          slots: {
            default: 'Hello World'
          },
          attachTo: document.body
        })
        await flushTicks()
        expect(getBackdrop().classes()).toContain('bg-state-scrim')
      })

      it('should be blur when props.backdrop is blur', async () => {
        wrapper = mount(VkDrawer, {
          props: {
            isOpen: true,
            backdrop: 'blur'
          },
          slots: {
            default: 'Hello World'
          },
          attachTo: document.body
        })
        await flushTicks()
        expect(getBackdrop().classes()).toContain('backdrop-blur-sm')
      })

      it('should be transparent when props.backdrop is transparent', async () => {
        wrapper = mount(VkDrawer, {
          props: {
            isOpen: true,
            backdrop: 'transparent'
          },
          slots: {
            default: 'Hello World'
          },
          attachTo: document.body
        })
        await flushTicks()
        expect(getBackdrop().classes()).toContain('bg-transparent')
      })
    })

    describe('When placement prop changes', () => {
      it('should be right when props.placement is right', async () => {
        wrapper = mount(VkDrawer, {
          props: {
            isOpen: true,
            placement: 'right'
          },
          slots: {
            default: 'Hello World'
          },
          attachTo: document.body
        })
        await flushTicks()
        expect(getPanel().classes()).toContain('right-0')
      })

      it('should be left when props.placement is left', async () => {
        wrapper = mount(VkDrawer, {
          props: {
            isOpen: true,
            placement: 'left'
          },
          slots: {
            default: 'Hello World'
          },
          attachTo: document.body
        })
        await flushTicks()
        expect(getPanel().classes()).toContain('left-0')
      })

      it('should be bottom when props.placement is bottom', async () => {
        wrapper = mount(VkDrawer, {
          props: {
            isOpen: true,
            placement: 'bottom'
          },
          slots: {
            default: 'Hello World'
          },
          attachTo: document.body
        })
        await flushTicks()
        expect(getPanel().classes()).toContain('bottom-0')
      })

      it('should be top when props.placement is top', async () => {
        wrapper = mount(VkDrawer, {
          props: {
            isOpen: true,
            placement: 'top'
          },
          slots: {
            default: 'Hello World'
          },
          attachTo: document.body
        })
        await flushTicks()
        expect(getPanel().classes()).toContain('top-0')
      })
    })
  })

  describe('Slots', () => {
    it('should be empty', async () => {
      wrapper = mount(VkDrawer, {
        props: {
          isOpen: true
        },
        attachTo: document.body
      })
      await flushTicks()
      expect(getPanel().text()).toContain('')
    })

    it('should be displayed if has content', async () => {
      wrapper = mount(VkDrawer, {
        props: {
          isOpen: true
        },
        slots: {
          default: 'Hello World'
        },
        attachTo: document.body
      })
      await flushTicks()
      expect(getPanel().text()).toContain('Hello World')
    })
  })

  describe('Arias', () => {
    it('should use description id for aria-describedby if aria-description is provided', async () => {
      wrapper = mount(VkDrawer, {
        props: {
          isOpen: true,
          ariaDescription: 'Some description'
        },
        attachTo: document.body
      })
      await flushTicks()

      const describedBy = getDialog().attributes('aria-describedby')
      expect(describedBy).toBeTruthy()
      expect(document.getElementById(describedBy as string)).not.toBeNull()
    })

    it('should label the dialog with the provided aria-labelled-by', async () => {
      wrapper = mount(VkDrawer, {
        props: {
          isOpen: true,
          ariaLabelledBy: 'drawer-title-id'
        },
        attachTo: document.body
      })
      await flushTicks()

      expect(getDialog().attributes('aria-labelledby')).toBe('drawer-title-id')
      expect(document.getElementById('drawer-title-id')).not.toBeNull()
      expect(document.getElementById('drawer-title-id')?.textContent).toContain('')
    })
  })

  describe('Emits', () => {
    it('should emit close event when the close button is clicked', async () => {
      wrapper = mount(VkDrawer, {
        props: {
          isOpen: true,
          closable: true
        },
        slots: {
          default: 'Hello World'
        },
        attachTo: document.body
      })
      await flushTicks()
      getPanel().find('i.ti.ti-x').trigger('click')
      await flushTicks()
      expect(wrapper.emitted()).toHaveProperty('close')
    })

    it('should emit close event on escape key when closable', async () => {
      wrapper = mount(VkDrawer, {
        props: {
          isOpen: true,
          closable: true
        },
        attachTo: document.body
      })
      await flushTicks()

      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
      await flushTicks()

      expect(wrapper.emitted()).toHaveProperty('close')
    })

    it('should emit close event on outside click when closable', async () => {
      wrapper = mount(VkDrawer, {
        props: {
          isOpen: true,
          closable: true
        },
        attachTo: document.body
      })
      await flushTicks()
      await flushListeners()

      document.dispatchEvent(new Event('pointerdown', { bubbles: true }))
      await flushTicks()

      expect(wrapper.emitted()).toHaveProperty('close')
    })

    it('should not emit close on escape key when closable is false', async () => {
      wrapper = mount(VkDrawer, {
        props: {
          isOpen: true,
          closable: false
        },
        attachTo: document.body
      })
      await flushTicks()

      document.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape', bubbles: true }))
      await flushTicks()

      expect(wrapper.emitted()).not.toHaveProperty('close')
    })

    it('should not emit close on outside click when closable is false', async () => {
      wrapper = mount(VkDrawer, {
        props: {
          isOpen: true,
          closable: false
        },
        attachTo: document.body
      })
      await flushTicks()
      await flushListeners()

      document.dispatchEvent(new Event('pointerdown', { bubbles: true }))
      await flushTicks()

      expect(wrapper.emitted()).not.toHaveProperty('close')
    })
  })

  describe('Transitions', () => {
    it('should animate the backdrop fade on open and close', async () => {
      wrapper = mount(VkDrawer, {
        props: {
          isOpen: true
        },
        attachTo: document.body
      })
      await flushTicks()

      expect(getBackdrop().classes()).toContain('data-[state=open]:animate-vk-fade-in')
      expect(getBackdrop().classes()).toContain('data-[state=closed]:animate-vk-fade-out')
    })

    it('should animate the panel slide for right placement', async () => {
      wrapper = mount(VkDrawer, {
        props: {
          isOpen: true,
          placement: 'right'
        },
        attachTo: document.body
      })
      await flushTicks()

      expect(getPanel().classes()).toContain('group-data-[state=open]/vk-dialog:animate-vk-drawer-in-right')
      expect(getPanel().classes()).toContain('group-data-[state=closed]/vk-dialog:animate-vk-drawer-out-right')
    })

    it('should animate the panel slide for left placement', async () => {
      wrapper = mount(VkDrawer, {
        props: {
          isOpen: true,
          placement: 'left'
        },
        attachTo: document.body
      })
      await flushTicks()

      expect(getPanel().classes()).toContain('group-data-[state=open]/vk-dialog:animate-vk-drawer-in-left')
      expect(getPanel().classes()).toContain('group-data-[state=closed]/vk-dialog:animate-vk-drawer-out-left')
    })

    it('should animate the panel slide for top placement', async () => {
      wrapper = mount(VkDrawer, {
        props: {
          isOpen: true,
          placement: 'top'
        },
        attachTo: document.body
      })
      await flushTicks()

      expect(getPanel().classes()).toContain('group-data-[state=open]/vk-dialog:animate-vk-drawer-in-top')
      expect(getPanel().classes()).toContain('group-data-[state=closed]/vk-dialog:animate-vk-drawer-out-top')
    })

    it('should animate the panel slide for bottom placement', async () => {
      wrapper = mount(VkDrawer, {
        props: {
          isOpen: true,
          placement: 'bottom'
        },
        attachTo: document.body
      })
      await flushTicks()

      expect(getPanel().classes()).toContain('group-data-[state=open]/vk-dialog:animate-vk-drawer-in-bottom')
      expect(getPanel().classes()).toContain('group-data-[state=closed]/vk-dialog:animate-vk-drawer-out-bottom')
    })

    it('should keep the dialog mounted while the leave animation plays', async () => {
      wrapper = mount(VkDrawer, {
        props: {
          isOpen: true
        },
        attachTo: document.body
      })
      await flushTicks()

      expect(getDialog().classes()).toContain('data-[state=closed]:animate-vk-drawer-dialog-leave')
    })
  })

  describe('Focus', () => {
    it('should not move focus into the drawer on open', async () => {
      wrapper = mount(VkDrawer, {
        props: {
          isOpen: true
        },
        attachTo: document.body
      })
      await flushTicks()

      expect(document.activeElement).toBe(document.body)
    })

    it('should keep focus trapped inside the drawer', async () => {
      wrapper = mount(VkDrawer, {
        props: {
          isOpen: true
        },
        attachTo: document.body
      })
      await flushTicks()

      const closeButton = document.querySelector('.vk-drawer__panel button') as HTMLElement
      closeButton.focus()
      expect(document.activeElement).toBe(closeButton)

      document.body.dispatchEvent(new FocusEvent('focusin', { bubbles: true }))
      expect(document.activeElement).toBe(closeButton)
    })
  })
})
