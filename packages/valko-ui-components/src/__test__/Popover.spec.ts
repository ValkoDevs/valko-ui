import { VueWrapper, mount } from '@vue/test-utils'
import { defineComponent, h, nextTick, ref } from 'vue'
import VkPopover from '#valkoui/components/Popover.vue'

const flushPortals = async () => {
  await nextTick()
  await nextTick()
  await new Promise((resolve) => setTimeout(resolve, 5))
}

const findPanel = () => document.querySelector('.vk-popover__panel')

describe('Popover component', () => {
  let wrapper: VueWrapper

  afterEach(() => {
    wrapper?.unmount()
  })

  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(async () => {
        wrapper = mount(VkPopover, {
          props: {
            isOpen: true
          },
          attachTo: document.body
        })
        await flushPortals()
      })

      it('should render', () => {
        expect(wrapper.find('.vk-popover').exists()).toBe(true)
      })

      it('should render the panel in a portal attached to body', () => {
        expect(findPanel()).toBeTruthy()
        expect(wrapper.find('.vk-popover__panel').exists()).toBe(false)
      })

      it('should be shape soft', () => {
        expect(findPanel()!.classList).toContain('rounded-lg')
      })

      it('should not be elevated', () => {
        expect(findPanel()!.classList).toContain('shadow-el2')
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', async () => {
        wrapper = mount(VkPopover, {
          props: {
            isOpen: true,
            shape: 'rounded'
          },
          attachTo: document.body
        })
        await flushPortals()

        expect(findPanel()!.classList).toContain('rounded-2xl')
      })

      it('should be soft when props.shape is soft', async () => {
        wrapper = mount(VkPopover, {
          props: {
            isOpen: true,
            shape: 'soft'
          },
          attachTo: document.body
        })
        await flushPortals()

        expect(findPanel()!.classList).toContain('rounded-lg')
      })

      it('should be square when props.shape is square', async () => {
        wrapper = mount(VkPopover, {
          props: {
            isOpen: true,
            shape: 'square'
          },
          attachTo: document.body
        })
        await flushPortals()

        expect(findPanel()!.classList).toContain('rounded-none')
      })
    })

    describe('When placement prop changes', () => {
      it('should be top when props.placement is top', async () => {
        wrapper = mount(VkPopover, {
          props: {
            isOpen: true,
            placement: 'top'
          },
          attachTo: document.body
        })
        await flushPortals()

        expect(findPanel()!.getAttribute('data-side')).toBe('top')
      })

      it('should be bottom when props.placement is bottom', async () => {
        wrapper = mount(VkPopover, {
          props: {
            isOpen: true,
            placement: 'bottom'
          },
          attachTo: document.body
        })
        await flushPortals()

        expect(findPanel()!.getAttribute('data-side')).toBe('bottom')
      })

      it('should be left when props.placement is left', async () => {
        wrapper = mount(VkPopover, {
          props: {
            isOpen: true,
            placement: 'left'
          },
          attachTo: document.body
        })
        await flushPortals()

        expect(findPanel()!.getAttribute('data-side')).toBe('left')
      })

      it('should be right when props.placement is right', async () => {
        wrapper = mount(VkPopover, {
          props: {
            isOpen: true,
            placement: 'right'
          },
          attachTo: document.body
        })
        await flushPortals()

        expect(findPanel()!.getAttribute('data-side')).toBe('right')
      })

      it('should delegate auto placement to Reka collision handling', async () => {
        wrapper = mount(VkPopover, {
          props: {
            isOpen: true,
            placement: 'auto'
          },
          attachTo: document.body
        })
        await flushPortals()

        expect(findPanel()).toBeTruthy()
      })
    })

    describe('When alignment prop changes', () => {
      it('should default alignment to start', async () => {
        wrapper = mount(VkPopover, {
          props: {
            isOpen: true,
            placement: 'top'
          },
          attachTo: document.body
        })
        await flushPortals()

        expect(findPanel()!.getAttribute('data-align')).toBe('start')
      })

      it('should map alignment center', async () => {
        wrapper = mount(VkPopover, {
          props: {
            isOpen: true,
            placement: 'top',
            alignment: 'center'
          },
          attachTo: document.body
        })
        await flushPortals()

        expect(findPanel()!.getAttribute('data-align')).toBe('center')
      })

      it('should map alignment end', async () => {
        wrapper = mount(VkPopover, {
          props: {
            isOpen: true,
            placement: 'top',
            alignment: 'end'
          },
          attachTo: document.body
        })
        await flushPortals()

        expect(findPanel()!.getAttribute('data-align')).toBe('end')
      })
    })

    describe('When isOpen prop changes', () => {
      it('should not show popover when isOpen is false', async () => {
        wrapper = mount(VkPopover, {
          props: { isOpen: false },
          attachTo: document.body
        })
        await flushPortals()

        expect(findPanel()).toBeNull()
      })
    })

    describe('When text prop changes', () => {
      it('should render text when text is provided', async () => {
        wrapper = mount(VkPopover, {
          props: { isOpen: true, text: 'Hello World' },
          attachTo: document.body
        })
        await flushPortals()

        expect(findPanel()!.textContent).toContain('Hello World')
      })
    })

    describe('When elevated prop changes', () => {
      it('should be elevated when props.elevated is true', async () => {
        wrapper = mount(VkPopover, {
          props: {
            isOpen: true,
            elevated: true
          },
          attachTo: document.body
        })
        await flushPortals()

        expect(findPanel()!.classList).toContain('shadow-el3')
      })
    })
  })

  describe('Slots', () => {
    it('should render content in default', async () => {
      wrapper = mount(VkPopover, {
        props: {
          isOpen: true
        },
        slots: {
          default: '<button class="trigger-el">Trigger</button>'
        },
        attachTo: document.body
      })
      await flushPortals()

      expect(wrapper.find('.trigger-el').exists()).toBe(true)
    })

    it('should render the default slot inside the Reka trigger', async () => {
      wrapper = mount(VkPopover, {
        props: {
          isOpen: true
        },
        slots: {
          default: '<button class="trigger-el">Trigger</button>'
        },
        attachTo: document.body
      })
      await flushPortals()

      const trigger = document.querySelector('[aria-haspopup="dialog"]')
      expect(trigger).toBeTruthy()
      expect(trigger!.contains(wrapper.find('.trigger-el').element)).toBe(true)
    })

    it('should render content in popover-content', async () => {
      wrapper = mount(VkPopover, {
        props: {
          isOpen: true
        },
        slots: {
          'popover-content': 'Hello World'
        },
        attachTo: document.body
      })
      await flushPortals()

      expect(findPanel()!.textContent).toBe('Hello World')
    })

    it('should override text prop with content in popover-content', async () => {
      wrapper = mount(VkPopover, {
        props: {
          isOpen: true,
          text: 'Hello Text'
        },
        slots: {
          'popover-content': 'Hello Content'
        },
        attachTo: document.body
      })
      await flushPortals()

      expect(findPanel()!.textContent).not.toContain('Hello Text')
      expect(findPanel()!.textContent).toContain('Hello Content')
    })
  })

  describe('Emits', () => {
    it('should emit close when clicking outside', async () => {
      wrapper = mount(VkPopover, {
        props: {
          isOpen: true
        },
        attachTo: document.body
      })
      await flushPortals()

      document.body.dispatchEvent(new MouseEvent('pointerdown', { bubbles: true }))
      document.body.dispatchEvent(new MouseEvent('click', { bubbles: true }))
      await flushPortals()

      expect(wrapper.emitted('close')).toBeTruthy()
    })

    it('should emit update:isOpen with the trigger click toggle result', async () => {
      wrapper = mount(VkPopover, {
        props: {
          isOpen: true
        },
        slots: {
          default: '<button class="trigger-el">Trigger</button>'
        },
        attachTo: document.body
      })
      await flushPortals()

      await wrapper.find('.trigger-el').trigger('click')
      await flushPortals()

      expect(wrapper.emitted('update:isOpen')!.at(-1)).toEqual([false])
      expect(wrapper.emitted('close')).toBeTruthy()
    })
  })

  describe('Controlled open', () => {
    it('should open the panel when the consumer applies update:isOpen', async () => {
      const isOpen = ref(false)
      const Harness = defineComponent({
        setup() {
          return () => h(VkPopover, {
            isOpen: isOpen.value,
            'onUpdate:isOpen': (value: boolean) => { isOpen.value = value }
          }, {
            default: () => h('button', { class: 'trigger-el' }, 'Trigger'),
            'popover-content': () => 'Panel content'
          })
        }
      })

      wrapper = mount(Harness, { attachTo: document.body })
      await flushPortals()
      expect(findPanel()).toBeNull()

      await wrapper.find('.trigger-el').trigger('click')
      await flushPortals()

      expect(findPanel()).toBeTruthy()
      expect(findPanel()!.textContent).toContain('Panel content')
    })
  })
})
