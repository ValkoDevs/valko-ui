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

      it('should be placement bottom', () => {
        expect(wrapper.find('.vk-popover__panel').classes()).toContain('mt-1')
      })

      it('should not be flat', () => {
        expect(wrapper.find('.shadow-none').exists()).toBe(false)
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

        expect(wrapper.find('.vk-popover__panel').classes()).toContain('mb-1')
      })

      it('should be bottom when props.placement is bottom', () => {
        wrapper = mount(VkPopover, {
          props: {
            isOpen: true,
            placement: 'bottom'
          }
        })

        expect(wrapper.find('.vk-popover__panel').classes()).toContain('mt-1')
      })

      it('should be left when props.placement is left', () => {
        wrapper = mount(VkPopover, {
          props: {
            isOpen: true,
            placement: 'left'
          }
        })

        expect(wrapper.find('.vk-popover__panel').classes()).toContain('mr-1')
      })

      it('should be right when props.placement is right', () => {
        wrapper = mount(VkPopover, {
          props: {
            isOpen: true,
            placement: 'right'
          }
        })

        expect(wrapper.find('.vk-popover__panel').classes()).toContain('ml-1')
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

    describe('When panelClasses prop changes', () => {
      it('should apply panelClasses when passed as a string', () => {
        const wrapper = mount(VkPopover, {
          props: {
            isOpen: true,
            panelClasses: 'custom-class'
          }
        })

        const panel = wrapper.find('.vk-popover__panel')
        expect(panel.classes()).toContain('custom-class')
      })

      it('should apply multiple panelClasses when passed as an array', () => {
        const wrapper = mount(VkPopover, {
          props: {
            isOpen: true,
            panelClasses: ['class-one', 'class-two']
          }
        })

        const panel = wrapper.find('.vk-popover__panel')
        expect(panel.classes()).toEqual(expect.arrayContaining(['class-one', 'class-two']))
      })
    })
  })

  describe('Slots', () => {
    it('should render content in default', () => {
      wrapper = mount(VkPopover, {
        props: {
          isOpen: true
        },
        slots: {
          default: 'Hello World'
        }
      })

      expect(wrapper.find('.vk-popover').text()).toBe('Hello World')
    })

    it('should not have content in default slot', () => {
      wrapper = mount(VkPopover, {
        props: {
          isOpen: true
        },
        slots: {
          default: ''
        }
      })

      expect(wrapper.find('.vk-popover').text()).toBe('')
    })

    it('should render content in popover-content', () => {
      wrapper = mount(VkPopover, {
        props: {
          isOpen: true
        },
        slots: {
          'popover-content': 'Hello World'
        }
      })

      expect(wrapper.find('.vk-popover__panel').text()).toBe('Hello World')
    })

    it('should override text prop with content in popover-content', () => {
      wrapper = mount(VkPopover, {
        props: {
          isOpen: true,
          text: 'Hello Text'
        },
        slots: {
          'popover-content': 'Hello Content'
        }
      })

      expect(wrapper.find('.vk-popover__panel').text()).not.toContain('Hello Text')
    })
  })

  describe('Events', () => {
    it('should emit close when clicking outside', async () => {
      wrapper = mount(VkPopover, {
        props: { isOpen: true },
        attachTo: document.body
      })

      await wrapper.vm.$nextTick()
      document.body.click()
      await wrapper.vm.$nextTick()

      expect(wrapper.emitted()).toHaveProperty('close')
    })

    it('should not emit close when clicking outside if isOpen is false', async () => {
      wrapper = mount(VkPopover, {
        props: { isOpen: false },
        attachTo: document.body
      })

      await wrapper.vm.$nextTick()
      document.body.click()
      await wrapper.vm.$nextTick()

      expect(wrapper.emitted('close')).toBeUndefined()
    })

    it('should not emit close when clicking inside the popover', async () => {
      wrapper = mount(VkPopover, {
        props: { isOpen: true },
        attachTo: document.body
      })

      await wrapper.vm.$nextTick()
      const popoverElement = wrapper.find('.vk-popover').element as HTMLElement
      popoverElement.click()
      await wrapper.vm.$nextTick()

      expect(wrapper.emitted('close')).toBeUndefined()
    })

  })
})
