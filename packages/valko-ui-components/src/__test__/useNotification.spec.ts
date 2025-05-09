import { nextTick, defineComponent } from 'vue'
import { mount, VueWrapper } from '@vue/test-utils'
import useNotification from '#valkoui/composables/useNotification'
import type { NotificationProps } from '#valkoui/types/Notification'

describe('useNotification composable', () => {
  const TestButton = defineComponent({
    name: 'TestButton',
    setup() {
      const onClick = () => {}

      return {
        onClick
      }
    },
    template: '<button @click="onClick">Click Me</button>'
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

  describe('With default props', () => {
    beforeEach(async () => {
      wrapper = mount(TestButton, {
        props: {
          onClick: () => useNotification(props)
        }
      })

      await wrapper.trigger('click')
      await nextTick()
      notification = document.querySelector('.vk-notification')
    })

    it('should show a notification when the button is clicked', () => {
      expect(notification).not.toBeNull()
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
  })

  describe('When color props changes', () => {
    it('should be primary when color props is primary', async () => {
      wrapper = mount(TestButton, {
        props: {
          onClick: () => useNotification({ text: 'Hello World', color: 'primary' })
        }
      })

      await wrapper.trigger('click')
      await nextTick()
      notification = document.querySelector('.vk-notification')

      expect(notification?.className).toContain('bg-primary')
    })

    it('should be secondary when color props is secondary', async () => {
      wrapper = mount(TestButton, {
        props: {
          onClick: () => useNotification({ text: 'Hello World', color: 'secondary' })
        }
      })

      await wrapper.trigger('click')
      await nextTick()
      notification = document.querySelector('.vk-notification')

      expect(notification?.className).toContain('bg-secondary')
    })

    it('should be positive when color props is positive', async () => {
      wrapper = mount(TestButton, {
        props: {
          onClick: () => useNotification({ text: 'Hello World', color: 'positive' })
        }
      })

      await wrapper.trigger('click')
      await nextTick()
      notification = document.querySelector('.vk-notification')

      expect(notification?.className).toContain('bg-positive')
    })

    it('should be accent when color props is accent', async () => {
      wrapper = mount(TestButton, {
        props: {
          onClick: () => useNotification({ text: 'Hello World', color: 'accent' })
        }
      })

      await wrapper.trigger('click')
      await nextTick()
      notification = document.querySelector('.vk-notification')

      expect(notification?.className).toContain('bg-accent')
    })

    it('should be warning when color props is warning', async () => {
      wrapper = mount(TestButton, {
        props: {
          onClick: () => useNotification({ text: 'Hello World', color: 'warning' })
        }
      })

      await wrapper.trigger('click')
      await nextTick()
      notification = document.querySelector('.vk-notification')

      expect(notification?.className).toContain('bg-warning')
    })

    it('should be negative when color props is negative', async () => {
      wrapper = mount(TestButton, {
        props: {
          onClick: () => useNotification({ text: 'Hello World', color: 'negative' })
        }
      })

      await wrapper.trigger('click')
      await nextTick()
      notification = document.querySelector('.vk-notification')

      expect(notification?.className).toContain('bg-negative')
    })
  })

  describe('When variant props changes', () => {
    it('should be filled when variant props is filled', async () => {
      wrapper = mount(TestButton, {
        props: {
          onClick: () => useNotification({ text: 'Hello World', variant: 'filled' })
        }
      })

      await wrapper.trigger('click')
      await nextTick()
      notification = document.querySelector('.vk-notification')

      expect(notification?.className).toContain('text-on-primary')
    })

    it('should be outlined when variant props is outlined', async () => {
      wrapper = mount(TestButton, {
        props: {
          onClick: () => useNotification({ text: 'Hello World', variant: 'outlined' })
        }
      })

      await wrapper.trigger('click')
      await nextTick()
      notification = document.querySelector('.vk-notification')

      expect(notification?.className).toContain('border-2')
    })

    it('should be ghost when variant props is ghost', async () => {
      wrapper = mount(TestButton, {
        props: {
          onClick: () => useNotification({ text: 'Hello World', variant: 'ghost' })
        }
      })

      await wrapper.trigger('click')
      await nextTick()
      notification = document.querySelector('.vk-notification')

      expect(notification?.className).toContain('backdrop-blur')
    })
  })

  describe('When shape props changes', () => {
    it('should be rounded when shape prop is rounded', async () => {
      wrapper = mount(TestButton, {
        props: {
          onClick: () => useNotification({ text: 'Hello World', shape: 'rounded' })
        }
      })

      await wrapper.trigger('click')
      await nextTick()
      notification = document.querySelector('.vk-notification')

      expect(notification?.className).toContain('rounded-full')
    })

    it('should be soft when shape prop is soft', async () => {
      wrapper = mount(TestButton, {
        props: {
          onClick: () => useNotification({ text: 'Hello World', shape: 'soft' })
        }
      })

      await wrapper.trigger('click')
      await nextTick()
      notification = document.querySelector('.vk-notification')

      expect(notification?.className).toContain('rounded-lg')
    })

    it('should be square when shape prop is square', async () => {
      wrapper = mount(TestButton, {
        props: {
          onClick: () => useNotification({ text: 'Hello World', shape: 'square' })
        }
      })

      await wrapper.trigger('click')
      await nextTick()
      notification = document.querySelector('.vk-notification')

      expect(notification?.className).toContain('rounded-none')
    })
  })

  describe('When size prop changes', () => {
    it('should be xs when size prop is xs', async () => {
      wrapper = mount(TestButton, {
        props: {
          onClick: () => useNotification({ text: 'Hello World', size: 'xs' })
        }
      })

      await wrapper.trigger('click')
      await nextTick()
      notification = document.querySelector('.vk-notification')

      expect(notification?.className).toContain('w-40')
    })

    it('should be sm when size prop is sm', async () => {
      wrapper = mount(TestButton, {
        props: {
          onClick: () => useNotification({ text: 'Hello World', size: 'sm' })
        }
      })

      await wrapper.trigger('click')
      await nextTick()
      notification = document.querySelector('.vk-notification')

      expect(notification?.className).toContain('w-44')
    })

    it('should be md when size prop is md', async () => {
      wrapper = mount(TestButton, {
        props: {
          onClick: () => useNotification({ text: 'Hello World', size: 'md' })
        }
      })

      await wrapper.trigger('click')
      await nextTick()
      notification = document.querySelector('.vk-notification')

      expect(notification?.className).toContain('w-48')
    })

    it('should be lg when size prop is lg', async () => {
      wrapper = mount(TestButton, {
        props: {
          onClick: () => useNotification({ text: 'Hello World', size: 'lg' })
        }
      })

      await wrapper.trigger('click')
      await nextTick()
      notification = document.querySelector('.vk-notification')

      expect(notification?.className).toContain('w-52')
    })
  })
})
