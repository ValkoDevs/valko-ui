import { VueWrapper, mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import VkTooltip from '#valkoui/components/Tooltip.vue'
import type { TooltipProps } from '#valkoui/types/Tooltip'

const flushPortals = async () => {
  await nextTick()
  await nextTick()
  await new Promise((resolve) => setTimeout(resolve, 5))
}

const findTip = () => document.querySelector('.vk-tooltip_tip')

describe('Tooltip component', () => {
  let wrapper: VueWrapper

  const showTooltip = async (props: TooltipProps = { content: 'Hello World' }) => {
    wrapper = mount(VkTooltip, {
      props,
      slots: {
        default: '<button class="tooltip-target">Hover Me</button>'
      },
      attachTo: document.body
    })

    await wrapper.find('.tooltip-target').trigger('pointermove')
    await flushPortals()
  }

  afterEach(() => {
    wrapper?.unmount()
  })

  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(async () => {
        await showTooltip()
      })

      it('should render', () => {
        expect(wrapper.find('.vk-tooltip').exists()).toBe(true)
      })

      it('should render the tip in a portal attached to body', () => {
        expect(findTip()).toBeTruthy()
        expect(wrapper.find('.vk-tooltip_tip').exists()).toBe(false)
      })

      it('should render the content', () => {
        expect(findTip()!.textContent).toContain('Hello World')
      })

      it('should be size md', () => {
        expect(findTip()!.classList).toContain('text-base')
      })

      it('should be shape soft', () => {
        expect(findTip()!.classList).toContain('rounded-lg')
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', async () => {
        await showTooltip({ shape: 'rounded', content: 'Hello World' })
        expect(findTip()!.classList).toContain('rounded-2xl')
      })

      it('should be soft when props.shape is soft', async () => {
        await showTooltip({ shape: 'soft', content: 'Hello World' })
        expect(findTip()!.classList).toContain('rounded-lg')
      })

      it('should be square when props.shape is square', async () => {
        await showTooltip({ shape: 'square', content: 'Hello World' })
        expect(findTip()!.classList).toContain('rounded-none')
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', async () => {
        await showTooltip({ size: 'xs', content: 'Hello World' })
        expect(findTip()!.classList).toContain('text-xs')
      })

      it('should be sm when props.size is sm', async () => {
        await showTooltip({ size: 'sm', content: 'Hello World' })
        expect(findTip()!.classList).toContain('text-sm')
      })

      it('should be md when props.size is md', async () => {
        await showTooltip({ size: 'md', content: 'Hello World' })
        expect(findTip()!.classList).toContain('text-base')
      })

      it('should be lg when props.size is lg', async () => {
        await showTooltip({ size: 'lg', content: 'Hello World' })
        expect(findTip()!.classList).toContain('text-lg')
      })
    })

    describe('When placement and alignment props change', () => {
      it('should map placement to the tip side', async () => {
        await showTooltip({ content: 'Hello World', placement: 'top' })
        expect(findTip()!.getAttribute('data-side')).toBe('top')
      })

      it('should map alignment to the tip align', async () => {
        await showTooltip({ content: 'Hello World', placement: 'bottom', alignment: 'end' })
        expect(findTip()!.getAttribute('data-align')).toBe('end')
      })

      it('should delegate auto placement to Reka collision handling', async () => {
        await showTooltip({ content: 'Hello World', placement: 'auto' })
        expect(findTip()).toBeTruthy()
      })
    })
  })

  describe('Slots', () => {
    it('should be empty', () => {
      wrapper = mount(VkTooltip, {
        props: {
          content: 'Hello World'
        },
        attachTo: document.body
      })

      expect(wrapper.find('[data-test="default-slot"]').exists()).toBe(false)
    })

    it('should not be empty', () => {
      wrapper = mount(VkTooltip, {
        props: {
          content: 'Hello World'
        },
        slots: {
          default: '<button>Hover Me</button>'
        },
        attachTo: document.body
      })

      expect(wrapper.find('.vk-tooltip').html()).toContain('Hover Me')
    })
  })

  describe('Events', () => {
    it('should display the tooltip on hover', async () => {
      await showTooltip()

      expect(findTip()).toBeTruthy()
    })

    it('should hide the tooltip on pointer leave', async () => {
      await showTooltip()
      expect(findTip()).toBeTruthy()

      await wrapper.find('.tooltip-target').trigger('pointerleave')
      await flushPortals()

      expect(findTip()).toBeNull()
    })

    it('should display the tooltip on keyboard focus', async () => {
      wrapper = mount(VkTooltip, {
        props: {
          content: 'Hello World'
        },
        slots: {
          default: '<button class="tooltip-target">Focus Me</button>'
        },
        attachTo: document.body
      })

      await wrapper.find('.tooltip-target').trigger('focus')
      await flushPortals()

      expect(findTip()).toBeTruthy()
    })

    it('should hide the tooltip on blur', async () => {
      wrapper = mount(VkTooltip, {
        props: {
          content: 'Hello World'
        },
        slots: {
          default: '<button class="tooltip-target">Focus Me</button>'
        },
        attachTo: document.body
      })

      await wrapper.find('.tooltip-target').trigger('focus')
      await flushPortals()
      expect(findTip()).toBeTruthy()

      await wrapper.find('.tooltip-target').trigger('blur')
      await flushPortals()

      expect(findTip()).toBeNull()
    })

    it('should wire aria-describedby from the trigger to the tip', async () => {
      await showTooltip()

      const describedby = wrapper.find('.tooltip-target').attributes('aria-describedby')

      expect(describedby).toBeTruthy()
      expect(document.getElementById(describedby!)).toBeTruthy()
    })
  })
})
