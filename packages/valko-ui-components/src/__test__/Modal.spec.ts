import { DOMWrapper, VueWrapper, mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import VkModal from '#valkoui/components/Modal.vue'

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

const getPanel = () => new DOMWrapper(document.querySelector('.vk-modal__panel') as Element)
const getBackdrop = () => new DOMWrapper(document.querySelector('.vk-modal__backdrop') as Element)
const getDialog = () => new DOMWrapper(document.querySelector('.vk-modal__dialog') as Element)

describe('Modal component', () => {
  let wrapper: VueWrapper

  afterEach(() => {
    wrapper?.unmount()
    document.body.innerHTML = ''
  })

  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(async () => {
        wrapper = mount(VkModal, {
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

      it('should be size md', () => {
        expect(getPanel().classes()).toContain('max-w-3xl')
      })

      it('should be shape soft', () => {
        expect(getPanel().classes()).toContain('rounded-lg')
      })

      it('should be closable', () => {
        expect(getPanel().find('i.ti.ti-x').exists()).toBe(true)
      })

      it('should be opaque', () => {
        expect(getBackdrop().classes()).toContain('bg-state-scrim')
      })

      it('should not have title', () => {
        expect(getPanel().find('.vk-modal__title').text()).toContain('')
      })
    })

    describe('When isOpen prop changes', () => {
      it('should not render when isOpen is false', async () => {
        wrapper = mount(VkModal, {
          props: {
            isOpen: false
          },
          attachTo: document.body
        })
        await flushTicks()
        expect(document.querySelector('.vk-modal__panel')).toBeNull()
      })

      it('should render when isOpen becomes true and unmount when it becomes false', async () => {
        wrapper = mount(VkModal, {
          props: {
            isOpen: false
          },
          attachTo: document.body
        })
        await flushTicks()

        await wrapper.setProps({ isOpen: true })
        await flushTicks()
        expect(document.querySelector('.vk-modal__panel')).not.toBeNull()

        await wrapper.setProps({ isOpen: false })
        await flushTicks()
        expect(document.querySelector('.vk-modal__panel')).toBeNull()
      })
    })

    describe('When closable and title prop changes', () => {
      it('should not display closable icon when false', async () => {
        wrapper = mount(VkModal, {
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
        wrapper = mount(VkModal, {
          props: {
            isOpen: true,
            title: 'Modal Title'
          },
          attachTo: document.body
        })
        await flushTicks()
        expect(getPanel().find('.vk-modal__title').text()).toContain('Modal Title')
      })

      it('should be closable and not have title', async () => {
        wrapper = mount(VkModal, {
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
        wrapper = mount(VkModal, {
          props: {
            isOpen: true,
            closable: false,
            title: ''
          },
          attachTo: document.body
        })
        await flushTicks()
        expect(getPanel().find('.vk-modal__panel-child').exists()).toBe(false)
      })

      it('should render header with title but without close button when closable is false', async () => {
        wrapper = mount(VkModal, {
          props: {
            isOpen: true,
            closable: false,
            title: 'Modal'
          },
          attachTo: document.body
        })
        await flushTicks()
        const header = getPanel().find('.vk-modal__panel-child')
        expect(header.exists()).toBe(true)
        expect(header.find('i.ti.ti-x').exists()).toBe(false)
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', async () => {
        wrapper = mount(VkModal, {
          props: {
            isOpen: true,
            shape: 'rounded'
          },
          attachTo: document.body
        })
        await flushTicks()
        expect(getPanel().classes()).toContain('rounded-2xl')
      })

      it('should be soft when props.shape is soft', async () => {
        wrapper = mount(VkModal, {
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
        expect(getPanel().classes()).toContain('rounded-lg')
      })

      it('should be square when props.shape is square', async () => {
        wrapper = mount(VkModal, {
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

    describe('When backdrop prop changes', () => {
      it('should be opaque when props.backdrop is opaque', async () => {
        wrapper = mount(VkModal, {
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
        wrapper = mount(VkModal, {
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
        wrapper = mount(VkModal, {
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

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', async () => {
        wrapper = mount(VkModal, {
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
        expect(getPanel().classes()).toContain('max-w-xs')
      })

      it('should be sm when props.size is sm', async () => {
        wrapper = mount(VkModal, {
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
        expect(getPanel().classes()).toContain('max-w-lg')
      })

      it('should be md when props.size is md', async () => {
        wrapper = mount(VkModal, {
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
        expect(getPanel().classes()).toContain('max-w-3xl')
      })

      it('should be lg when props.size is lg', async () => {
        wrapper = mount(VkModal, {
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
        expect(getPanel().classes()).toContain('max-w-7xl')
      })

      it('should be full when props.size is full', async () => {
        wrapper = mount(VkModal, {
          props: {
            isOpen: true,
            size: 'full'
          },
          slots: {
            default: 'Hello World'
          },
          attachTo: document.body
        })
        await flushTicks()
        expect(getPanel().classes()).toContain('max-w-full')
      })
    })
  })

  describe('Slots', () => {
    it('should be empty', async () => {
      wrapper = mount(VkModal, {
        props: {
          isOpen: true
        },
        attachTo: document.body
      })
      await flushTicks()
      expect(getPanel().text()).toContain('')
    })

    it('should be displayed if has content', async () => {
      wrapper = mount(VkModal, {
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
      wrapper = mount(VkModal, {
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
      wrapper = mount(VkModal, {
        props: {
          isOpen: true,
          ariaLabelledBy: 'modal-title-id'
        },
        attachTo: document.body
      })
      await flushTicks()

      expect(getDialog().attributes('aria-labelledby')).toBe('modal-title-id')
      expect(document.getElementById('modal-title-id')).not.toBeNull()
      expect(document.getElementById('modal-title-id')?.textContent).toContain('')
    })
  })

  describe('Emits', () => {
    it('should emit close event when the close button is clicked', async () => {
      wrapper = mount(VkModal, {
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
      wrapper = mount(VkModal, {
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
      wrapper = mount(VkModal, {
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
      wrapper = mount(VkModal, {
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
      wrapper = mount(VkModal, {
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
      wrapper = mount(VkModal, {
        props: {
          isOpen: true
        },
        attachTo: document.body
      })
      await flushTicks()

      expect(getBackdrop().classes()).toContain('data-[state=open]:animate-vk-fade-in')
      expect(getBackdrop().classes()).toContain('data-[state=closed]:animate-vk-fade-out')
    })

    it('should animate the panel scale on open and close', async () => {
      wrapper = mount(VkModal, {
        props: {
          isOpen: true
        },
        attachTo: document.body
      })
      await flushTicks()

      expect(getPanel().classes()).toContain('group-data-[state=open]/vk-dialog:animate-vk-modal-panel-in')
      expect(getPanel().classes()).toContain('group-data-[state=closed]/vk-dialog:animate-vk-modal-panel-out')
    })

    it('should keep the dialog mounted while the leave animation plays', async () => {
      wrapper = mount(VkModal, {
        props: {
          isOpen: true
        },
        attachTo: document.body
      })
      await flushTicks()

      expect(getDialog().classes()).toContain('data-[state=closed]:animate-vk-modal-dialog-leave')
    })
  })

  describe('Focus', () => {
    it('should not move focus into the dialog on open', async () => {
      wrapper = mount(VkModal, {
        props: {
          isOpen: true
        },
        attachTo: document.body
      })
      await flushTicks()

      expect(document.activeElement).toBe(document.body)
    })

    it('should keep focus trapped inside the dialog', async () => {
      wrapper = mount(VkModal, {
        props: {
          isOpen: true
        },
        attachTo: document.body
      })
      await flushTicks()

      const closeButton = document.querySelector('.vk-modal__panel button') as HTMLElement
      closeButton.focus()
      expect(document.activeElement).toBe(closeButton)

      document.body.dispatchEvent(new FocusEvent('focusin', { bubbles: true }))
      expect(document.activeElement).toBe(closeButton)
    })
  })
})
