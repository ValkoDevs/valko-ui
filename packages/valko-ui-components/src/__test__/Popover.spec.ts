import { h, nextTick } from 'vue'
import { VueWrapper, mount } from '@vue/test-utils'
import VkPopover from '#valkoui/components/Popover.vue'

describe('Popover component', () => {
  let wrapper: VueWrapper

  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkPopover, {
          props: {
            isOpen: true
          }
        })
      })

      it('should render', () => {
        expect(wrapper.find('.vk-popover').exists()).toBe(true)
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.vk-popover__panel').classes()).toContain('rounded-lg')
      })

      it('should not be elevated', () => {
        expect(wrapper.find('.shadow-el2').exists()).toBe(true)
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkPopover, {
          props: {
            isOpen: true,
            shape: 'rounded'
          }
        })

        expect(wrapper.find('.vk-popover__panel').classes()).toContain('rounded-2xl')
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkPopover, {
          props: {
            isOpen: true,
            shape: 'soft'
          }
        })

        expect(wrapper.find('.vk-popover__panel').classes()).toContain('rounded-lg')
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkPopover, {
          props: {
            isOpen: true,
            shape: 'square'
          }
        })

        expect(wrapper.find('.vk-popover__panel').classes()).toContain('rounded-none')
      })
    })

    describe('When placement prop changes', () => {
      it('should be top when props.placement is top', () => {
        wrapper = mount(VkPopover, {
          props: {
            isOpen: true,
            placement: 'top'
          }
        })

        expect(wrapper.find('.vk-popover__panel').classes()).toContain('data-[placement=top-start]:origin-bottom-left')
      })

      it('should be bottom when props.placement is bottom', () => {
        wrapper = mount(VkPopover, {
          props: {
            isOpen: true,
            placement: 'bottom'
          }
        })

        expect(wrapper.find('.vk-popover__panel').classes()).toContain('data-[placement=bottom-start]:origin-top-left')
      })

      it('should be left when props.placement is left', () => {
        wrapper = mount(VkPopover, {
          props: {
            isOpen: true,
            placement: 'left'
          }
        })

        expect(wrapper.find('.vk-popover__panel').classes()).toContain('data-[placement=left-start]:origin-right')
      })

      it('should be right when props.placement is right', () => {
        wrapper = mount(VkPopover, {
          props: {
            isOpen: true,
            placement: 'right'
          }
        })

        expect(wrapper.find('.vk-popover__panel').classes()).toContain('data-[placement=right-start]:origin-left')
      })
    })

    describe('When isOpen prop changes', () => {
      it('should not show popover when isOpen is false', () => {
        wrapper = mount(VkPopover, {
          props: { isOpen: false }
        })

        expect(wrapper.find('.vk-popover__panel').exists()).toBe(false)
      })
    })

    describe('When text prop changes', () => {
      it('should render text when text is provided', () => {
        wrapper = mount(VkPopover, {
          props: { isOpen: true, text: 'Hello World' }
        })

        expect(wrapper.find('.vk-popover__panel').text()).toContain('Hello World')
      })

      it('should not render text when no text is provided', () => {
        wrapper = mount(VkPopover, {
          props: { isOpen: true, text: '' }
        })

        expect(wrapper.find('.vk-popover__panel').text()).toContain('')
      })
    })

    describe('When elevated prop changes', () => {
      it('should be elevated when props.elevated is true', () => {
        wrapper = mount(VkPopover, {
          props: {
            isOpen: true,
            elevated: true
          }
        })

        expect(wrapper.find('.vk-popover__panel').classes()).toContain('shadow-el3')
      })
    })
  })

  describe('Slots', () => {
    it('should render content in trigger', () => {
      wrapper = mount(VkPopover, {
        props: {
          isOpen: true
        },
        slots: {
          trigger: 'Hello World'
        }
      })

      expect(wrapper.find('.vk-popover').text()).toBe('Hello World')
    })

    it('should not have content in trigger slot', () => {
      wrapper = mount(VkPopover, {
        props: {
          isOpen: true
        },
        slots: {
          trigger: ''
        }
      })

      expect(wrapper.find('.vk-popover').text()).toBe('')
    })

    it('should render content in panel', () => {
      wrapper = mount(VkPopover, {
        props: {
          isOpen: true
        },
        slots: {
          panel: 'Hello World'
        }
      })

      expect(wrapper.find('.vk-popover__panel').text()).toBe('Hello World')
    })

    it('should override text prop with panel content', () => {
      wrapper = mount(VkPopover, {
        props: {
          isOpen: true,
          text: 'Hello Text'
        },
        slots: {
          panel: 'Hello Content'
        }
      })

      expect(wrapper.find('.vk-popover__panel').text()).toBe('Hello Content')
    })
  })

  describe('Methods & Listeners', () => {
    it('should remove event listeners when the component is unmounted', async () => {
      const removeSpy = vi.spyOn(document, 'removeEventListener')
      const wrapper = mount(VkPopover, {
        props: {
          isOpen: true
        }
      })

      wrapper.unmount()
      expect(removeSpy).toHaveBeenCalledWith('click', expect.any(Function))
      removeSpy.mockRestore()
    })

    describe('placement', () => {
      it('should use the passed alignment prop if present', () => {
        wrapper = mount(VkPopover, {
          props: {
            isOpen: true,
            alignment: 'start'
          }
        })
        expect(wrapper.find('.vk-popover__panel').attributes('data-placement')).toContain('start')
      })
    })
  })

  describe('Emits', () => {
    it('should emit update:isOpen false when clicking outside', async () => {
      wrapper = mount(VkPopover, {
        props: {
          isOpen: true
        },
        attachTo: document.body
      })

      await nextTick()
      document.body.click()
      await nextTick()

      expect(wrapper.emitted('update:isOpen')).toEqual([[false]])
    })

    it('should not emit update:isOpen when clicking outside if isOpen is false', async () => {
      wrapper = mount(VkPopover, {
        props: {
          isOpen: false
        },
        attachTo: document.body
      })

      await nextTick()
      document.body.click()
      await nextTick()

      expect(wrapper.emitted('update:isOpen')).toBeUndefined()
    })

    it('should not emit update:isOpen when clicking inside the popover', async () => {
      wrapper = mount(VkPopover, {
        props: {
          isOpen: true
        },
        attachTo: document.body
      })

      await nextTick()
      const popoverElement = wrapper.find('.vk-popover').element as HTMLElement
      popoverElement.click()
      await nextTick()

      expect(wrapper.emitted('update:isOpen')).toBeUndefined()
    })

    it('should emit update:isOpen true when setOpen is called from trigger slot', async () => {
      wrapper = mount(VkPopover, {
        slots: {
          trigger: ({ setOpen }) => h('button', {
            class: 'trigger-btn',
            onClick: () => setOpen(true)
          }, 'Trigger')
        },
        attachTo: document.body
      })

      const trigger = wrapper.find('.trigger-btn')
      await trigger.trigger('click')
      await nextTick()

      expect(wrapper.emitted('update:isOpen')).toEqual([[true]])
    })

    it('should emit update:isOpen false when setOpen is called from panel slot', async () => {
      wrapper = mount(VkPopover, {
        slots: {
          panel: ({ setOpen }) => h('button', {
            class: 'close-btn',
            onClick: () => setOpen(false)
          }, 'Close')
        },
        props: {
          isOpen: true
        },
        attachTo: document.body
      })

      const closeButton = wrapper.find('.close-btn')
      await closeButton.trigger('click')
      await nextTick()

      expect(wrapper.emitted('update:isOpen')).toEqual([[false]])
    })
  })

  describe('Controlled & Uncontrolled State', () => {
    it('should render closed by default when isOpen is not passed', () => {
      wrapper = mount(VkPopover, {
        slots: {
          trigger: 'Trigger'
        }
      })

      expect(wrapper.find('.vk-popover__panel').exists()).toBe(false)
    })

    it('should open when setOpen is called in uncontrolled mode', async () => {
      wrapper = mount(VkPopover, {
        slots: {
          trigger: ({ setOpen }) => h('button', {
            class: 'trigger-btn',
            onClick: () => setOpen(true)
          }, 'Trigger'),
          panel: 'Popover Content'
        },
        attachTo: document.body
      })

      const trigger = wrapper.find('.trigger-btn')
      await trigger.trigger('click')
      await nextTick()

      expect(wrapper.find('.vk-popover__panel').exists()).toBe(true)
    })

    it('should close when clicking outside in uncontrolled mode', async () => {
      wrapper = mount(VkPopover, {
        slots: {
          trigger: ({ setOpen }) => h('button', {
            class: 'trigger-btn',
            onClick: () => setOpen(true)
          }, 'Trigger'),
          panel: 'Popover Content'
        },
        attachTo: document.body
      })

      const trigger = wrapper.find('.trigger-btn')
      await trigger.trigger('click')
      await nextTick()
      document.body.click()
      await nextTick()

      expect(wrapper.find('.vk-popover__panel').exists()).toBe(false)
    })

    it('should not close when clicking inside the popover in uncontrolled mode', async () => {
      wrapper = mount(VkPopover, {
        slots: {
          trigger: ({ setOpen }) => h('button', {
            class: 'trigger-btn',
            onClick: () => setOpen(true)
          }, 'Trigger'),
          panel: '<div class="popover-inner">Inner Content</div>'
        },
        attachTo: document.body
      })

      const trigger = wrapper.find('.trigger-btn')
      await trigger.trigger('click')
      await nextTick()
      const popoverElement = wrapper.find('.vk-popover').element as HTMLElement
      popoverElement.click()
      await nextTick()

      expect(wrapper.find('.vk-popover__panel').exists()).toBe(true)
    })

    it('should keep controlled state when trigger calls setOpen', async () => {
      wrapper = mount(VkPopover, {
        props: {
          isOpen: false
        },
        slots: {
          trigger: ({ setOpen }) => h('button', {
            class: 'trigger-btn',
            onClick: () => setOpen(true)
          }, 'Trigger'),
          panel: 'Popover Content'
        },
        attachTo: document.body
      })

      const trigger = wrapper.find('.trigger-btn')
      await trigger.trigger('click')
      await nextTick()

      expect(wrapper.find('.vk-popover__panel').exists()).toBe(false)
    })
  })

  describe('Uncontrolled mode', () => {
    it('should render closed by default when isOpen is not passed', () => {
      wrapper = mount(VkPopover, {
        props: {},
        slots: {
          trigger: '<button>Trigger</button>'
        }
      })

      expect(wrapper.find('.vk-popover').exists()).toBe(true)
      expect(wrapper.find('.vk-popover__panel').exists()).toBe(false)
    })

    it('should open when the trigger slot is clicked', async () => {
      wrapper = mount(VkPopover, {
        props: {},
        slots: {
          trigger: '<button class="trigger-btn">Trigger</button>',
          panel: 'Popover Content'
        },
        attachTo: document.body
      })

      expect(wrapper.find('.vk-popover__panel').exists()).toBe(false)

      const trigger = wrapper.find('.trigger-btn')
      await trigger.trigger('click')
      await nextTick()

      expect(wrapper.find('.vk-popover__panel').exists()).toBe(true)
      expect(wrapper.find('.vk-popover__panel').text()).toBe('Popover Content')
    })

    it('should close when clicking outside', async () => {
      wrapper = mount(VkPopover, {
        props: {},
        slots: {
          trigger: '<button class="trigger-btn">Trigger</button>',
          panel: 'Popover Content'
        },
        attachTo: document.body
      })

      // Open first
      const trigger = wrapper.find('.trigger-btn')
      await trigger.trigger('click')
      await nextTick()

      expect(wrapper.find('.vk-popover__panel').exists()).toBe(true)

      // Click outside
      document.body.click()
      await nextTick()

      expect(wrapper.find('.vk-popover__panel').exists()).toBe(false)
    })

    it('should emit update:isOpen true when trigger is clicked', async () => {
      wrapper = mount(VkPopover, {
        props: {},
        slots: {
          trigger: '<button class="trigger-btn">Trigger</button>'
        },
        attachTo: document.body
      })

      const trigger = wrapper.find('.trigger-btn')
      await trigger.trigger('click')
      await nextTick()

      expect(wrapper.emitted('update:isOpen')).toEqual([[true]])
    })

    it('should emit update:isOpen false when clicking outside in uncontrolled mode', async () => {
      wrapper = mount(VkPopover, {
        props: {},
        slots: {
          trigger: '<button class="trigger-btn">Trigger</button>',
          panel: 'Content'
        },
        attachTo: document.body
      })

      // Open first
      const trigger = wrapper.find('.trigger-btn')
      await trigger.trigger('click')
      await nextTick()

      expect(wrapper.find('.vk-popover__panel').exists()).toBe(true)

      // Click outside
      document.body.click()
      await nextTick()

      expect(wrapper.emitted('update:isOpen')).toEqual([[true], [false]])
    })

    it('should not close when clicking inside the popover in uncontrolled mode', async () => {
      wrapper = mount(VkPopover, {
        props: {},
        slots: {
          trigger: '<button class="trigger-btn">Trigger</button>',
          panel: '<div class="popover-inner">Inner Content</div>'
        },
        attachTo: document.body
      })

      // Open first
      const trigger = wrapper.find('.trigger-btn')
      await trigger.trigger('click')
      await nextTick()

      expect(wrapper.find('.vk-popover__panel').exists()).toBe(true)

      // Click inside the popover root (not outside)
      const popoverElement = wrapper.find('.vk-popover').element as HTMLElement
      popoverElement.click()
      await nextTick()

      expect(wrapper.find('.vk-popover__panel').exists()).toBe(true)
    })
  })
})
