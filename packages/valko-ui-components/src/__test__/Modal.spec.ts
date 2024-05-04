import { VueWrapper, mount } from '@vue/test-utils'
import { DialogPanel } from '@headlessui/vue'
import { nextTick } from 'vue'
import VkModal from '#valkoui/components/Modal.vue'

class ResizeObserver {
  observe() {return}
  unobserve() {return}
  disconnect() {return}
}

global.ResizeObserver = ResizeObserver

describe('Modal component', () => {
  let wrapper: VueWrapper
  let modal: VueWrapper
  let backdrop: VueWrapper
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
        expect(backdrop.classes()).toContain('bg-light-5/80')
      })

      it('should not have title', () => {
        expect(modal.find('.text-lg').text()).toContain('')
      })

      it('should not be flat', () => {
        expect(modal.classes('.shadow-none')).toBe(false)
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

    describe('When cosable and title prop changes', () => {
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
        expect(backdrop.classes()).toContain('bg-light-5/80')
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
  })
})
