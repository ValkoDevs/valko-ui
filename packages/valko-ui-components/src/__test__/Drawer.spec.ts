import { VueWrapper, mount } from '@vue/test-utils'
import { DialogPanel } from '@headlessui/vue'
import { nextTick } from 'vue'
import VkDrawer from '#valkoui/components/Drawer.vue'

class ResizeObserver {
  observe() {return}
  unobserve() {return}
  disconnect() {return}
}

global.ResizeObserver = ResizeObserver

describe('Drawer component', () => {
  let wrapper: VueWrapper
  let drawer: VueWrapper
  let backdrop: VueWrapper
  let panel: VueWrapper
  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(async () => {
        wrapper = mount(VkDrawer, {
          props: {
            isOpen: true
          },
          slots: {
            default: 'Hello World'
          }
        })
        await nextTick()
        drawer = wrapper.getComponent(DialogPanel) as unknown as VueWrapper
        backdrop = wrapper.getComponent('.vk-drawer__backdrop') as unknown as VueWrapper
      })

      it('should render', () => {
        expect(drawer.text()).toContain('Hello World')
      })

      it('should be shape soft', () => {
        expect(drawer.classes()).toContain('rounded-l-lg')
      })

      it('should be size md', () => {
        expect(drawer.classes()).toContain('max-w-xl')
      })

      it('should be closable', () => {
        expect(drawer.find('i.ti.ti-x').exists()).toBe(true)
      })

      it('should be opaque', () => {
        expect(backdrop.classes()).toContain('bg-light-5/80')
      })

      it('should have title', () => {
        expect(drawer.find('.text-lg').text()).toContain('Drawer')
      })

      it('should not be flat', () => {
        expect(drawer.classes('.shadow-none')).toBe(false)
      })
    })

    describe('When isOpen prop changes', () => {
      it('should not render when isOpen is false', async () => {
        wrapper = mount(VkDrawer, {
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
        wrapper = mount(VkDrawer, {
          props: {
            isOpen: true,
            closable: false
          }
        })
        await nextTick()
        drawer = wrapper.getComponent(DialogPanel) as unknown as VueWrapper
        expect(drawer.find('i.ti.ti-x').exists()).toBe(false)
      })

      it('should have title if title props is given', async () => {
        wrapper = mount(VkDrawer, {
          props: {
            isOpen: true,
            title: 'Drawer Title'
          }
        })
        await nextTick()
        drawer = wrapper.getComponent(DialogPanel) as unknown as VueWrapper
        expect(drawer.find('.vk-drawer__title').text()).toContain('Drawer Title')
      })

      it('should be closable and not have title', async () => {
        wrapper = mount(VkDrawer, {
          props: {
            isOpen: true,
            closable: true
          }
        })
        await nextTick()
        drawer = wrapper.getComponent(DialogPanel) as unknown as VueWrapper
        expect(drawer.find('i.ti.ti-x').exists()).toBe(true)
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', async () => {
        wrapper = mount(VkDrawer, {
          props: {
            isOpen: true,
            shape: 'rounded'
          }
        })
        await nextTick()
        drawer = wrapper.getComponent(DialogPanel) as unknown as VueWrapper
        expect(drawer.classes()).toContain('rounded-l-2xl')
      })

      it('should be soft when props.shape is soft', async () => {
        wrapper = mount(VkDrawer, {
          props: {
            isOpen: true,
            shape: 'soft'
          },
          slots: {
            default: 'Hello World'
          }
        })
        await nextTick()
        drawer = wrapper.getComponent(DialogPanel) as unknown as VueWrapper
        expect(drawer.classes()).toContain('rounded-l-lg')
      })

      it('should be square when props.shape is square', async () => {
        wrapper = mount(VkDrawer, {
          props: {
            isOpen: true,
            shape: 'square'
          },
          slots: {
            default: 'Hello World'
          }
        })
        await nextTick()
        drawer = wrapper.getComponent(DialogPanel) as unknown as VueWrapper
        expect(drawer.classes()).toContain('rounded-none')
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
          }
        })
        await nextTick()
        drawer = wrapper.getComponent(DialogPanel) as unknown as VueWrapper
        expect(drawer.classes()).toContain('max-w-xs')
      })

      it('should be sm when props.size is sm', async () => {
        wrapper = mount(VkDrawer, {
          props: {
            isOpen: true,
            size: 'sm'
          },
          slots: {
            default: 'Hello World'
          }
        })
        await nextTick()
        drawer = wrapper.getComponent(DialogPanel) as unknown as VueWrapper
        expect(drawer.classes()).toContain('max-w-lg')
      })

      it('should be md when props.size is md', async () => {
        wrapper = mount(VkDrawer, {
          props: {
            isOpen: true,
            size: 'md'
          },
          slots: {
            default: 'Hello World'
          }
        })
        await nextTick()
        drawer = wrapper.getComponent(DialogPanel) as unknown as VueWrapper
        expect(drawer.classes()).toContain('max-w-xl')
      })

      it('should be lg when props.size is lg', async () => {
        wrapper = mount(VkDrawer, {
          props: {
            isOpen: true,
            size: 'lg'
          },
          slots: {
            default: 'Hello World'
          }
        })
        await nextTick()
        drawer = wrapper.getComponent(DialogPanel) as unknown as VueWrapper
        expect(drawer.classes()).toContain('max-w-2xl')
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
          }
        })

        await nextTick()
        backdrop = wrapper.getComponent('.vk-drawer__backdrop') as unknown as VueWrapper
        expect(backdrop.classes()).toContain('bg-light-5/80')
      })

      it('should be blur when props.backdrop is blur', async () => {
        wrapper = mount(VkDrawer, {
          props: {
            isOpen: true,
            backdrop: 'blur'
          },
          slots: {
            default: 'Hello World'
          }
        })

        await nextTick()
        backdrop = wrapper.getComponent('.vk-drawer__backdrop') as unknown as VueWrapper
        expect(backdrop.classes()).toContain('backdrop-blur-sm')
      })

      it('should be transparent when props.backdrop is transparent', async () => {
        wrapper = mount(VkDrawer, {
          props: {
            isOpen: true,
            backdrop: 'transparent'
          },
          slots: {
            default: 'Hello World'
          }
        })

        await nextTick()
        backdrop = wrapper.getComponent('.vk-drawer__backdrop') as unknown as VueWrapper
        expect(backdrop.classes()).toContain('bg-transparent')
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
          }
        })

        await nextTick()
        panel = wrapper.getComponent('.vk-drawer__panel') as unknown as VueWrapper
        expect(panel.classes()).toContain('right-0')
      })

      it('should be left when props.placement is left', async () => {
        wrapper = mount(VkDrawer, {
          props: {
            isOpen: true,
            placement: 'left'
          },
          slots: {
            default: 'Hello World'
          }
        })

        await nextTick()
        panel = wrapper.getComponent('.vk-drawer__panel') as unknown as VueWrapper
        expect(panel.classes()).toContain('left-0')
      })

      it('should be bottom when props.placement is bottom', async () => {
        wrapper = mount(VkDrawer, {
          props: {
            isOpen: true,
            placement: 'bottom'
          },
          slots: {
            default: 'Hello World'
          }
        })

        await nextTick()
        panel = wrapper.getComponent('.vk-drawer__panel') as unknown as VueWrapper
        expect(panel.classes()).toContain('bottom-0')
      })

      it('should be top when props.placement is top', async () => {
        wrapper = mount(VkDrawer, {
          props: {
            isOpen: true,
            placement: 'top'
          },
          slots: {
            default: 'Hello World'
          }
        })

        await nextTick()
        panel = wrapper.getComponent('.vk-drawer__panel') as unknown as VueWrapper
        expect(panel.classes()).toContain('top-0')
      })
    })
  })

  describe('Slots', () => {
    it('should be empty', async () => {
      const wrapper = mount(VkDrawer, {
        props: {
          isOpen: true
        }
      })
      await nextTick()
      drawer = wrapper.getComponent(DialogPanel) as unknown as VueWrapper
      expect(drawer.text()).toContain('')
    })

    it('should be displayed if has content', async () => {
      const wrapper = mount(VkDrawer, {
        props: {
          isOpen: true
        },
        slots: {
          default: 'Hello World'
        }
      })
      await nextTick()
      drawer = wrapper.getComponent(DialogPanel) as unknown as VueWrapper
      expect(drawer.text()).toContain('Hello World')
    })
  })

  describe('Emits', () => {
    it('should emit close event', async () => {
      const wrapper = mount(VkDrawer, {
        props: {
          isOpen: true,
          closable: true
        },
        slots: {
          default: 'Hello World'
        }
      })
      await nextTick()
      drawer = wrapper.getComponent(DialogPanel) as unknown as VueWrapper
      drawer.find('i.ti.ti-x').trigger('click')
      expect(wrapper.emitted()).toHaveProperty('close')
    })
  })
})
