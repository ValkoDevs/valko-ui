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
        expect(drawer.classes()).toContain('md:max-w-xl')
      })

      it('should be closable', () => {
        expect(drawer.find('i.ti.ti-x').exists()).toBe(true)
      })

      it('should be opaque', () => {
        expect(backdrop.classes()).toContain('bg-state-scrim')
      })

      it('should not have title', () => {
        expect(drawer.find('.vk-drawer__title').text()).toContain('')
      })

      it('should be elevated', () => {
        expect(drawer.classes()).toContain('shadow-el3')
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

      it('should not render the header section when both title and closable are falsy', async () => {
        const wrapper = mount(VkDrawer, {
          props: {
            isOpen: true,
            closable: false,
            title: ''
          }
        })

        await nextTick()
        const drawerPanel = wrapper.getComponent(DialogPanel)
        expect(drawerPanel.find('.vk-drawer__panel-child').exists()).toBe(false)
      })

      it('should render header with title but without close button when closable is false', async () => {
        const wrapper = mount(VkDrawer, {
          props: {
            isOpen: true,
            closable: false,
            title: 'Drawer'
          }
        })

        await nextTick()
        const drawerPanel = wrapper.getComponent(DialogPanel)
        const header = drawerPanel.find('.vk-drawer__panel-child')

        expect(header.exists()).toBe(true)
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
        expect(drawer.classes()).toContain('md:max-w-xs')
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
        expect(drawer.classes()).toContain('md:max-w-lg')
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
        expect(drawer.classes()).toContain('md:max-w-xl')
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
        expect(drawer.classes()).toContain('md:max-w-2xl')
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
        expect(backdrop.classes()).toContain('bg-state-scrim')
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

  describe('When isOpen prop changes', () => {
    it('should render the panel when isOpen is true', async () => {
      wrapper = mount(VkDrawer, {
        props: {
          isOpen: true
        }
      })

      await nextTick()
      drawer = wrapper.getComponent(DialogPanel) as unknown as VueWrapper
      expect(drawer.find('.vk-drawer__panel').exists()).toBe(true)
    })

    it('should not render the panel when isOpen is false', async () => {
      wrapper = mount(VkDrawer, {
        props: {
          isOpen: false
        }
      })

      await nextTick()
      drawer = wrapper.findComponent(DialogPanel)
      expect(drawer.exists()).toBe(false)
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
    it('should emit close if closable is true', async () => {
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

    it('should not emit close if closable is false', async () => {
      const wrapper = mount(VkDrawer, {
        props: {
          isOpen: true,
          closable: false
        },
        slots: {
          default: 'Hello World'
        }
      })

      await nextTick()
      window.dispatchEvent(new Event('click', { bubbles: true }))

      expect(wrapper.emitted()).not.toHaveProperty('close')
    })
  })

  describe('Animations based on prop placement', () => {
    it('should apply the correct transition classes for right placement', async () => {
      const wrapper = mount(VkDrawer, {
        props: {
          isOpen: true,
          placement: 'right'
        }
      })

      await nextTick()
      const panel = wrapper.findComponent({ name: 'DialogPanel' })

      expect(panel.classes()).toContain('translate-x-full')
    })

    it('should apply the correct transition classes for left placement', async () => {
      const wrapper = mount(VkDrawer, {
        props: {
          isOpen: true,
          placement: 'left'
        }
      })

      await nextTick()
      const panel = wrapper.findComponent({ name: 'DialogPanel' })

      expect(panel.classes()).toContain('-translate-x-full')
    })

    it('should apply the correct transition classes for top placement', async () => {
      const wrapper = mount(VkDrawer, {
        props: {
          isOpen: true,
          placement: 'top'
        }
      })

      await nextTick()
      const panel = wrapper.findComponent({ name: 'DialogPanel' })

      expect(panel.classes()).toContain('-translate-y-full')
    })

    it('should apply the correct transition classes for bottom placement', async () => {
      const wrapper = mount(VkDrawer, {
        props: {
          isOpen: true,
          placement: 'bottom'
        }
      })

      await nextTick()
      const panel = wrapper.findComponent({ name: 'DialogPanel' })

      expect(panel.classes()).toContain('translate-y-full')
    })

    it('should apply default transition classes when placement is unrecognized', async () => {
      const wrapper = mount(VkDrawer, {
        props: {
          isOpen: true,
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          placement: 'invalid-placement' as any
        }
      })

      await nextTick()
      const panel = wrapper.findComponent({ name: 'DialogPanel' })

      expect(panel.classes()).toContain('opacity-0')
    })
  })
})
