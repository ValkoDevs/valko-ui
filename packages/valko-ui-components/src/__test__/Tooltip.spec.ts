import { nextTick  } from 'vue'
import { VueWrapper, mount } from '@vue/test-utils'
import VkTooltip from '#valkoui/components/Tooltip.vue'

describe('Tooltip component', () => {
  let wrapper: VueWrapper
  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(async () => {
        wrapper = mount(VkTooltip, {
          props: {
            content: 'Hello World'
          },
          slots: {
            default: '<button>Hover Me</button>'
          }
        })
        wrapper.find('.vk-tooltip').trigger('mouseenter')
        await nextTick()
      })

      it('should render', () => {
        expect(wrapper.find('.vk-tooltip').exists()).toBe(true)
      })

      it('should be size md', () => {
        expect(wrapper.find('.vk-tooltip_tip').classes()).toContain('text-base')
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.vk-popover__panel').classes()).toContain('rounded-lg')
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', async () => {
        wrapper = mount(VkTooltip, {
          props: {
            shape: 'rounded',
            content: 'Hello World'
          },
          slots: {
            default: '<button>Hover Me</button>'
          }
        })

        wrapper.find('.vk-tooltip').trigger('mouseenter')
        await nextTick()
        expect(wrapper.find('.vk-popover__panel').classes()).toContain('rounded-2xl')
      })

      it('should be soft when props.shape is soft', async () => {
        wrapper = mount(VkTooltip, {
          props: {
            shape: 'soft',
            content: 'Hello World'
          },
          slots: {
            default: '<button>Hover Me</button>'
          }
        })

        wrapper.find('.vk-tooltip').trigger('mouseenter')
        await nextTick()
        expect(wrapper.find('.vk-popover__panel').classes()).toContain('rounded-lg')
      })

      it('should be square when props.shape is square', async () => {
        wrapper = mount(VkTooltip, {
          props: {
            shape: 'square',
            content: 'Hello World'
          },
          slots: {
            default: '<button>Hover Me</button>'
          }
        })

        wrapper.find('.vk-tooltip').trigger('mouseenter')
        await nextTick()
        expect(wrapper.find('.vk-popover__panel').classes()).toContain('rounded-none')
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', async () => {
        wrapper = mount(VkTooltip, {
          props: {
            size: 'xs',
            content: 'Hello World'
          },
          slots: {
            default: '<button>Hover Me</button>'
          }
        })

        wrapper.find('.vk-tooltip').trigger('mouseenter')
        await nextTick()
        expect(wrapper.find('.vk-tooltip_tip').classes()).toContain('text-xs')
      })

      it('should be sm when props.size is sm', async () => {
        wrapper = mount(VkTooltip, {
          props: {
            size: 'sm',
            content: 'Hello World'
          },
          slots: {
            default: '<button>Hover Me</button>'
          }
        })

        wrapper.find('.vk-tooltip').trigger('mouseenter')
        await nextTick()
        expect(wrapper.find('.vk-tooltip_tip').classes()).toContain('text-sm')
      })

      it('should be md when props.size is md', async () => {
        wrapper = mount(VkTooltip, {
          props: {
            size: 'md',
            content: 'Hello World'
          },
          slots: {
            default: '<button>Hover Me</button>'
          }
        })

        wrapper.find('.vk-tooltip').trigger('mouseenter')
        await nextTick()
        expect(wrapper.find('.vk-tooltip_tip').classes()).toContain('text-base')
      })

      it('should be lg when props.size is lg', async () => {
        wrapper = mount(VkTooltip, {
          props: {
            size: 'lg',
            content: 'Hello World'
          },
          slots: {
            default: '<button>Hover Me</button>'
          }
        })

        wrapper.find('.vk-tooltip').trigger('mouseenter')
        await nextTick()
        expect(wrapper.find('.vk-tooltip_tip').classes()).toContain('text-lg')
      })
    })
  })

  describe('Slots', () => {
    it('should be empty', () => {
      const wrapper = mount(VkTooltip, {
        props: {
          content: 'Hello World'
        }
      })

      expect(wrapper.find('[data-test="default-slot"]').exists()).toBe(false)
    })

    it('should not be empty', () => {
      const wrapper = mount(VkTooltip, {
        props: {
          content: 'Hello World'
        },
        slots: {
          default: '<button>Hover Me</button>'
        }
      })

      expect(wrapper.find('.vk-tooltip').html()).toContain('<button>Hover Me</button>')
    })
  })

  describe('Events', () => {
    it('should display the tooltip on mouseenter', async () => {
      const wrapper = mount(VkTooltip, {
        props: {
          content: 'Hello World'
        },
        slots: {
          default: '<button>Hover Me</button>'
        }
      })

      wrapper.find('.vk-tooltip').trigger('mouseenter')
      await nextTick()

      expect(wrapper.find('.vk-tooltip_tip').exists()).toBe(true)
    })

    it('should hide the tooltip on mouseleave', async () => {
      const wrapper = mount(VkTooltip, {
        props: {
          content: 'Hello World'
        },
        slots: {
          default: '<button>Hover Me</button>'
        }
      })

      wrapper.find('.vk-tooltip').trigger('mouseenter')
      await nextTick()
      wrapper.find('.vk-tooltip').trigger('mouseleave')
      await nextTick()
      expect(wrapper.find('.vk-tooltip_tip').exists()).toBe(false)
    })
  })
})
