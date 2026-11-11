import { defineComponent, nextTick } from 'vue'
import { mount, VueWrapper } from '@vue/test-utils'
import useNotification from '#valkoui/composables/useNotification'
import type { NotificationHandle } from '#valkoui/composables/useNotification'
import VkNotificationProvider from '#valkoui/components/NotificationProvider.vue'
import type { NotificationProps } from '#valkoui/types/Notification'

class ResizeObserverStub {
  observe() {}
  unobserve() {}
  disconnect() {}
}

vi.stubGlobal('ResizeObserver', ResizeObserverStub)

const flush = async () => {
  await nextTick()
  await nextTick()
}

describe('useNotification composable', () => {
  const Host = defineComponent({
    name: 'TestHost',
    components: { VkNotificationProvider },
    props: {
      notificationProps: { type: Object, required: true }
    },
    setup(hProps) {
      const trigger = () => useNotification(hProps.notificationProps as NotificationProps)

      return { trigger }
    },
    template: `
      <VkNotificationProvider>
        <button data-test="trigger" @click="trigger">Show Notification</button>
      </VkNotificationProvider>`
  })

  let wrapper: VueWrapper
  let notification: HTMLElement | null
  const props: NotificationProps = {
    text: 'Hello World',
    duration: 3000,
    close: true,
    color: 'primary',
    size: 'md',
    shape: 'soft',
    variant: 'filled'
  }

  const mountHost = async (notificationProps: NotificationProps = props) => {
    wrapper = mount(Host, {
      props: { notificationProps },
      attachTo: document.body
    })

    await nextTick()
    await wrapper.find('[data-test="trigger"]').trigger('click')
    await flush()
    notification = document.querySelector<HTMLElement>('.vk-notification')
  }

  const mountHostAndTrigger = async (notificationProps: Partial<NotificationProps> = {}) => {
    await mountHost({ ...props, ...notificationProps })
  }

  afterEach(() => {
    wrapper?.unmount()
    document.body.innerHTML = ''
    notification = null
  })

  describe('With default props', () => {
    beforeEach(async () => {
      await mountHost()
    })

    it('should show a notification when the function is called', () => {
      expect(notification).not.toBeNull()
    })

    it('should render the notification text', () => {
      expect(notification?.textContent).toContain('Hello World')
    })

    it('should be open', () => {
      expect(notification?.getAttribute('data-state')).toBe('open')
    })

    it('should be color primary', () => {
      expect(notification?.className).toContain('bg-primary')
    })

    it('should be size md', () => {
      expect(notification?.className).toContain('w-48')
    })

    it('should be shape soft', () => {
      expect(notification?.className).toContain('rounded-lg')
    })

    it('should be variant filled', () => {
      expect(notification?.className).toContain('text-on-primary')
    })

    it('should have progressbar', () => {
      expect(document.querySelector('.vk-notification__progressbar')).not.toBeNull()
    })

    it('should render the notification inside the viewport', () => {
      const viewport = notification?.closest('.vk-notification__viewport')

      expect(viewport?.getAttribute('data-placement')).toBe('top-right')
    })
  })

  describe('When color props changes', () => {
    it.each([
      ['primary', 'bg-primary'],
      ['secondary', 'bg-secondary'],
      ['positive', 'bg-positive'],
      ['accent', 'bg-accent'],
      ['warning', 'bg-warning'],
      ['negative', 'bg-negative']
    ])('should be %s when color props is %s', async (color, className) => {
      await mountHostAndTrigger({ color: color as NotificationProps['color'] })

      expect(notification?.className).toContain(className)
    })

    it('should be surface when color props is surface', async () => {
      await mountHostAndTrigger({ color: 'surface' })

      expect(notification?.className).toContain('bg-inverse-surface')
    })
  })

  describe('When variant props changes', () => {
    it('should be filled when variant props is filled', async () => {
      await mountHostAndTrigger({ variant: 'filled' })

      expect(notification?.className).toContain('text-on-primary')
    })

    it('should be outlined when variant props is outlined', async () => {
      await mountHostAndTrigger({ variant: 'outlined' })

      expect(notification?.className).toContain('border-2')
    })

    it('should be ghost when variant props is ghost', async () => {
      await mountHostAndTrigger({ variant: 'ghost' })

      expect(notification?.className).toContain('backdrop-blur')
    })
  })

  describe('When shape props changes', () => {
    it.each([
      ['rounded', 'rounded-full'],
      ['soft', 'rounded-lg'],
      ['square', 'rounded-none']
    ])('should be %s when shape prop is %s', async (shape, className) => {
      await mountHostAndTrigger({ shape: shape as NotificationProps['shape'] })

      expect(notification?.className).toContain(className)
    })
  })

  describe('When size prop changes', () => {
    it.each([
      ['xs', 'w-40'],
      ['sm', 'w-44'],
      ['md', 'w-48'],
      ['lg', 'w-52']
    ])('should be %s when size prop is %s', async (size, className) => {
      await mountHostAndTrigger({ size: size as NotificationProps['size'] })

      expect(notification?.className).toContain(className)
    })
  })

  describe('When gravity and position props change', () => {
    it('should render in the top-left viewport when gravity is top and position is left', async () => {
      await mountHostAndTrigger({ gravity: 'top', position: 'left' })

      const viewport = notification?.closest('.vk-notification__viewport')

      expect(viewport?.className).toContain('top-0')
      expect(viewport?.className).toContain('left-[15px]')
    })

    it('should render in the bottom-right viewport when gravity is bottom and position is right', async () => {
      await mountHostAndTrigger({ gravity: 'bottom', position: 'right' })

      const viewport = notification?.closest('.vk-notification__viewport')

      expect(viewport?.className).toContain('bottom-0')
      expect(viewport?.className).toContain('right-[15px]')
    })

    it('should animate from below when gravity is bottom', async () => {
      await mountHostAndTrigger({ gravity: 'bottom' })

      expect(notification?.className).toContain('[--vk-toast-enter-y:2rem]')
    })
  })

  describe('When text prop changes', () => {
    it('should render the text when text props is set', async () => {
      await mountHostAndTrigger({ text: 'Custom text' })

      expect(notification?.textContent).toContain('Custom text')
    })

    it('should throw when text prop is not provided', () => {
      expect(() => useNotification({} as NotificationProps)).toThrow('Property "text" is required')
    })
  })

  describe('When close prop is set', () => {
    it('should render a close button', async () => {
      await mountHostAndTrigger({ close: true })

      expect(notification?.querySelector('button')).not.toBeNull()
    })

    it('should not render a close button by default', async () => {
      await mountHostAndTrigger({ close: undefined })

      expect(notification?.querySelector('button')).toBeNull()
    })

    it('should remove the notification when the close button is clicked', async () => {
      await mountHostAndTrigger({ close: true })

      notification?.querySelector('button')?.click()
      await flush()

      expect(document.querySelector('.vk-notification')).toBeNull()
    })
  })

  describe('When the notification is dismissed', () => {
    it('should auto-dismiss after the duration', async () => {
      vi.useFakeTimers({ toFake: ['setTimeout', 'clearTimeout'] })

      await mountHostAndTrigger({ duration: 3000 })
      expect(document.querySelector('.vk-notification')).not.toBeNull()

      await vi.advanceTimersByTimeAsync(2999)
      await flush()
      expect(document.querySelector('.vk-notification')).not.toBeNull()

      await vi.advanceTimersByTimeAsync(1)
      await flush()
      expect(document.querySelector('.vk-notification')).toBeNull()

      vi.useRealTimers()
    })

    it('should close through the returned hideToast handle', async () => {
      const handles: NotificationHandle[] = []
      const CaptureHost = defineComponent({
        name: 'CaptureHost',
        components: { VkNotificationProvider },
        setup() {
          const trigger = () => {
            handles.push(useNotification({ text: 'Hello World' }))
          }

          return { trigger }
        },
        template: `
          <VkNotificationProvider>
            <button data-test="trigger" @click="trigger">Show Notification</button>
          </VkNotificationProvider>`
      })

      wrapper = mount(CaptureHost, { attachTo: document.body })
      await nextTick()
      await wrapper.find('[data-test="trigger"]').trigger('click')
      await flush()
      expect(document.querySelector('.vk-notification')).not.toBeNull()

      handles[0]?.hideToast()
      await flush()
      expect(document.querySelector('.vk-notification')).toBeNull()
    })
  })

  describe('When click related props are set', () => {
    it('should close the notification when clicked without onClick or destination', async () => {
      await mountHostAndTrigger()

      notification?.click()
      await flush()

      expect(document.querySelector('.vk-notification')).toBeNull()
    })

    it('should call the custom onClick when the notification is clicked', async () => {
      const onClick = vi.fn()
      await mountHostAndTrigger({ onClick })

      notification?.click()

      expect(onClick).toHaveBeenCalledTimes(1)
      expect(document.querySelector('.vk-notification')).not.toBeNull()
    })

    it('should open the destination in a new window when newWindow is set', async () => {
      const open = vi.spyOn(window, 'open').mockReturnValue(null)
      await mountHostAndTrigger({ destination: 'https://valko.ui', newWindow: true })

      notification?.click()

      expect(open).toHaveBeenCalledWith('https://valko.ui', '_blank')
      open.mockRestore()
    })

    it('should open the destination in the same window by default', async () => {
      const open = vi.spyOn(window, 'open').mockReturnValue(null)
      await mountHostAndTrigger({ destination: 'https://valko.ui' })

      notification?.click()

      expect(open).toHaveBeenCalledWith('https://valko.ui', '_self')
      open.mockRestore()
    })
  })

  describe('When offset prop is set', () => {
    it('should apply offset margins away from the viewport edges', async () => {
      await mountHostAndTrigger({ gravity: 'top', position: 'right', offset: { x: 10, y: 5 } })

      expect(notification?.style.marginTop).toBe('5px')
      expect(notification?.style.marginRight).toBe('10px')
    })

    it('should apply string offsets on the gravity side', async () => {
      await mountHostAndTrigger({ gravity: 'bottom', offset: '1rem' })

      expect(notification?.style.marginBottom).toBe('1rem')
    })
  })
})
