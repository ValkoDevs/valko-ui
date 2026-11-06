import { VueWrapper, enableAutoUnmount, mount } from '@vue/test-utils'
import { DialogPanel } from '@headlessui/vue'
import { nextTick } from 'vue'
import VkModal from '#valkoui/components/Modal.vue'
import VkDrawer from '#valkoui/components/Drawer.vue'

class ResizeObserver {
  observe() {return}
  unobserve() {return}
  disconnect() {return}
}

globalThis.ResizeObserver = ResizeObserver

enableAutoUnmount(afterEach)

describe('Modal component', () => {
  let wrapper: VueWrapper
  let modal: VueWrapper
  let backdrop: VueWrapper

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
          }
        })
        await nextTick()
        modal = wrapper.getComponent(DialogPanel) as unknown as VueWrapper
        backdrop = wrapper.getComponent('.vk-modal__backdrop') as unknown as VueWrapper
      })

      it('should render', () => {
        expect(modal.text()).toContain('Hello World')
      })

      it('should be size md', () => {
        expect(modal.classes()).toContain('max-w-3xl')
      })

      it('should be shape soft', () => {
        expect(modal.classes()).toContain('rounded-lg')
      })

      it('should be closable', () => {
        expect(modal.find('i.ti.ti-x').exists()).toBe(true)
      })

      it('should be opaque', () => {
        expect(backdrop.classes()).toContain('bg-state-scrim')
      })

      it('should not have title', () => {
        expect(modal.find('.text-lg').text()).toContain('')
      })
    })

    describe('When isOpen prop changes', () => {
      it('should not render when isOpen is false', async () => {
        wrapper = mount(VkModal, {
          props: {
            isOpen: false
          }
        })
        await nextTick()
        expect(wrapper.html()).toBe('')
      })
    })

    describe('When closable and title prop changes', () => {
      it('should not display closable icon when false', async () => {
        wrapper = mount(VkModal, {
          props: {
            isOpen: true,
            closable: false
          }
        })
        await nextTick()
        modal = wrapper.getComponent(DialogPanel) as unknown as VueWrapper
        expect(modal.find('i.ti.ti-x').exists()).toBe(false)
      })

      it('should not emit close event when the dialog triggers close', async () => {
        const wrapper = mount(VkModal, {
          props: {
            isOpen: true,
            closable: false
          },
          slots: {
            default: 'Hello World'
          }
        })

        await nextTick()
        dispatchEvent(new MouseEvent('click', { bubbles: true }))
        await nextTick()

        expect(wrapper.emitted()).not.toHaveProperty('close')
      })

      it('should have title if title props is given', async () => {
        wrapper = mount(VkModal, {
          props: {
            isOpen: true,
            title: 'Modal Title'
          }
        })
        await nextTick()
        modal = wrapper.getComponent(DialogPanel) as unknown as VueWrapper
        expect(modal.find('.vk-modal__title').text()).toContain('Modal Title')
      })

      it('should be closable and not have title', async () => {
        wrapper = mount(VkModal, {
          props: {
            isOpen: true,
            closable: true
          }
        })
        await nextTick()
        modal = wrapper.getComponent(DialogPanel) as unknown as VueWrapper
        expect(modal.find('i.ti.ti-x').exists()).toBe(true)
      })

      it('should not render the header section when both title and closable are falsy', async () => {
        const wrapper = mount(VkModal, {
          props: {
            isOpen: true,
            closable: false,
            title: ''
          }
        })

        await nextTick()
        const modalPanel = wrapper.getComponent(DialogPanel)
        const header = modalPanel.find('.vk-modal__panel-child')

        expect(header.exists()).toBe(false)
      })

      it('should render header with title but without close button when closable is false', async () => {
        const wrapper = mount(VkModal, {
          props: {
            isOpen: true,
            closable: false,
            title: 'Drawer'
          }
        })

        await nextTick()
        const modalPanel = wrapper.getComponent(DialogPanel)
        const header = modalPanel.find('.vk-modal__panel-child')

        expect(header.exists()).toBe(true)
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', async () => {
        wrapper = mount(VkModal, {
          props: {
            isOpen: true,
            shape: 'rounded'
          }
        })
        await nextTick()
        modal = wrapper.getComponent(DialogPanel) as unknown as VueWrapper
        expect(modal.classes()).toContain('rounded-2xl')
      })

      it('should be soft when props.shape is soft', async () => {
        wrapper = mount(VkModal, {
          props: {
            isOpen: true,
            shape: 'soft'
          },
          slots: {
            default: 'Hello World'
          }
        })
        await nextTick()
        modal = wrapper.getComponent(DialogPanel) as unknown as VueWrapper
        expect(modal.classes()).toContain('rounded-lg')
      })

      it('should be square when props.shape is square', async () => {
        wrapper = mount(VkModal, {
          props: {
            isOpen: true,
            shape: 'square'
          },
          slots: {
            default: 'Hello World'
          }
        })
        await nextTick()
        modal = wrapper.getComponent(DialogPanel) as unknown as VueWrapper
        expect(modal.classes()).toContain('rounded-none')
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
          }
        })

        await nextTick()
        backdrop = wrapper.getComponent('.vk-modal__backdrop') as unknown as VueWrapper
        expect(backdrop.classes()).toContain('bg-state-scrim')
      })

      it('should be blur when props.backdrop is blur', async () => {
        wrapper = mount(VkModal, {
          props: {
            isOpen: true,
            backdrop: 'blur'
          },
          slots: {
            default: 'Hello World'
          }
        })

        await nextTick()
        backdrop = wrapper.getComponent('.vk-modal__backdrop') as unknown as VueWrapper
        expect(backdrop.classes()).toContain('backdrop-blur-sm')
      })

      it('should be transparent when props.backdrop is transparent', async () => {
        wrapper = mount(VkModal, {
          props: {
            isOpen: true,
            backdrop: 'transparent'
          },
          slots: {
            default: 'Hello World'
          }
        })

        await nextTick()
        backdrop = wrapper.getComponent('.vk-modal__backdrop') as unknown as VueWrapper
        expect(backdrop.classes()).toContain('bg-transparent')
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
          }
        })
        await nextTick()
        modal = wrapper.getComponent(DialogPanel) as unknown as VueWrapper
        expect(modal.classes()).toContain('max-w-xs')
      })

      it('should be sm when props.size is sm', async () => {
        wrapper = mount(VkModal, {
          props: {
            isOpen: true,
            size: 'sm'
          },
          slots: {
            default: 'Hello World'
          }
        })
        await nextTick()
        modal = wrapper.getComponent(DialogPanel) as unknown as VueWrapper
        expect(modal.classes()).toContain('max-w-lg')
      })

      it('should be md when props.size is md', async () => {
        wrapper = mount(VkModal, {
          props: {
            isOpen: true,
            size: 'md'
          },
          slots: {
            default: 'Hello World'
          }
        })
        await nextTick()
        modal = wrapper.getComponent(DialogPanel) as unknown as VueWrapper
        expect(modal.classes()).toContain('max-w-3xl')
      })

      it('should be lg when props.size is lg', async () => {
        wrapper = mount(VkModal, {
          props: {
            isOpen: true,
            size: 'lg'
          },
          slots: {
            default: 'Hello World'
          }
        })
        await nextTick()
        modal = wrapper.getComponent(DialogPanel) as unknown as VueWrapper
        expect(modal.classes()).toContain('max-w-7xl')
      })

      it('should be full when props.size is full', async () => {
        wrapper = mount(VkModal, {
          props: {
            isOpen: true,
            size: 'full'
          },
          slots: {
            default: 'Hello World'
          }
        })
        await nextTick()
        modal = wrapper.getComponent(DialogPanel) as unknown as VueWrapper
        expect(modal.classes()).toContain('max-w-full')
      })
    })
  })

  describe('Slots', () => {
    it('should be empty', async () => {
      const wrapper = mount(VkModal, {
        props: {
          isOpen: true
        }
      })
      await nextTick()
      modal = wrapper.getComponent(DialogPanel) as unknown as VueWrapper
      expect(modal.text()).toContain('')
    })

    it('should be displayed if has content', async () => {
      const wrapper = mount(VkModal, {
        props: {
          isOpen: true
        },
        slots: {
          default: 'Hello World'
        }
      })
      await nextTick()
      modal = wrapper.getComponent(DialogPanel) as unknown as VueWrapper
      expect(modal.text()).toContain('Hello World')
    })
  })

  describe('Arias', () => {
    it('should use description id for aria-describedby if aria-description is provided', async () => {
      mount(VkModal, {
        props: {
          isOpen: true,
          ariaDescription: 'Some description'
        },
        attachTo: document.body
      })

      await nextTick()

      const dialog = document.querySelector('.vk-modal__dialog')
      expect(dialog?.getAttribute('aria-describedby')).toBeTruthy()
    })
  })

  describe('Emits', () => {
    it('should emit close event', async () => {
      const wrapper = mount(VkModal, {
        props: {
          isOpen: true,
          closable: true
        },
        slots: {
          default: 'Hello World'
        }
      })
      await nextTick()
      modal = wrapper.getComponent(DialogPanel) as unknown as VueWrapper
      modal.find('i.ti.ti-x').trigger('click')
      expect(wrapper.emitted()).toHaveProperty('close')
    })

    it('should not emit close if closable is false when the dialog close is emited', async () => {
      const DialogStub = {
        template: '<div @click="$emit(\'close\')"><slot /></div>'
      }

      const DialogPanelStub = {
        template: '<div><slot /></div>'
      }

      const wrapper = mount(VkModal, {
        props: {
          isOpen: true,
          closable: false
        },
        slots: {
          default: 'Hello World'
        },
        global: {
          stubs: {
            Dialog: DialogStub,
            DialogPanel: DialogPanelStub
          }
        }
      })

      await nextTick()
      await wrapper.findComponent(DialogStub).trigger('click')

      expect(wrapper.emitted()).not.toHaveProperty('close')
    })
  })

  describe('Stacking', () => {
    let modalA: VueWrapper
    let modalB: VueWrapper
    let drawerWrapper: VueWrapper
    let stackedModal: VueWrapper

    afterEach(() => document.body.innerHTML = '')

    const clickOn = async (selector: string) => {
      const target = document.querySelector(selector) as HTMLElement
      target.dispatchEvent(new Event('pointerdown', { bubbles: true }))
      target.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }))
      await nextTick()
    }

    const pressEscape = async () => {
      window.dispatchEvent(new KeyboardEvent('keydown', { key: 'Escape' }))
      await nextTick()
    }

    const mountStack = async (stackable?: boolean) => {
      modalA = mount(VkModal, {
        props: { isOpen: true, stackable, title: 'Modal A' },
        slots: { default: '<span data-test="inside-a">A content</span>' }
      })
      modalB = mount(VkModal, {
        props: { isOpen: false, stackable, title: 'Modal B' },
        slots: { default: '<button data-test="inside-b">B content</button>' }
      })
      await nextTick()
      await nextTick()
    }

    const openStackedModal = async () => {
      await modalB.setProps({ isOpen: true })
      await nextTick()
      await nextTick()
    }

    const mountDrawerStack = async () => {
      drawerWrapper = mount(VkDrawer, {
        props: { isOpen: true, title: 'Drawer' },
        slots: { default: '<span data-test="inside-drawer">Drawer content</span>' }
      })
      stackedModal = mount(VkModal, {
        props: { isOpen: false, stackable: true, title: 'Modal' },
        slots: { default: '<button data-test="inside-modal">Modal content</button>' }
      })
      await nextTick()
      await nextTick()
    }

    const openStackedDrawerModal = async () => {
      await stackedModal.setProps({ isOpen: true })
      await nextTick()
      await nextTick()
    }

    it('keeps the previous modal open when a stackable modal is opened on top', async () => {
      await mountStack(true)
      await openStackedModal()

      expect(modalA.emitted('close')).toBeUndefined()
      expect(modalB.emitted('close')).toBeUndefined()
    })

    it('does not close the underlying modal when interacting with the stacked modal', async () => {
      await mountStack(true)
      await openStackedModal()
      await clickOn('[data-test="inside-b"]')

      expect(modalA.emitted('close')).toBeUndefined()
      expect(modalB.emitted('close')).toBeUndefined()
    })

    it('closes only the topmost modal when Escape is pressed', async () => {
      await mountStack(true)
      await openStackedModal()
      await pressEscape()

      expect(modalB.emitted('close')).toHaveLength(1)
      expect(modalA.emitted('close')).toBeUndefined()
    })

    it('closes only the topmost modal when its backdrop is clicked', async () => {
      await mountStack(true)
      await openStackedModal()
      const topmostPortal = [...document.querySelectorAll('[data-headlessui-portal]')].pop() as HTMLElement
      const backdrop = topmostPortal.querySelector('.vk-modal__backdrop') as HTMLElement
      backdrop.dispatchEvent(new Event('pointerdown', { bubbles: true }))
      backdrop.dispatchEvent(new MouseEvent('click', { bubbles: true, cancelable: true }))
      await nextTick()

      expect(modalB.emitted('close')).toHaveLength(1)
      expect(modalA.emitted('close')).toBeUndefined()
    })

    it('closes the open modal by default when another modal is opened without stackable', async () => {
      await mountStack()
      await openStackedModal()

      expect(modalA.emitted('close')).toHaveLength(1)
      expect(modalB.emitted('close')).toBeUndefined()
    })

    it('does not close the drawer when interacting with a stackable modal on top', async () => {
      await mountDrawerStack()
      await openStackedDrawerModal()
      await clickOn('[data-test="inside-modal"]')

      expect(drawerWrapper.emitted('close')).toBeUndefined()
      expect(stackedModal.emitted('close')).toBeUndefined()
    })

    it('closes only the topmost overlay when Escape is pressed with a drawer open', async () => {
      await mountDrawerStack()
      await openStackedDrawerModal()
      await pressEscape()

      expect(stackedModal.emitted('close')).toHaveLength(1)
      expect(drawerWrapper.emitted('close')).toBeUndefined()
    })
  })
})
