import { nextTick } from 'vue'
import { mount, VueWrapper } from '@vue/test-utils'
import VkButton from '#valkoui/components/Button.vue'
import useNotification from '#valkoui/composables/useNotification'
import type { NotificationProps } from '#valkoui/types/Notification'

describe('useNotification composable', () => {
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
      wrapper = mount(VkButton, {
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
      expect(notification?.className).toContain('bg-primary-500')
    })

    it('should be size md', () => {
      expect(notification?.className).toContain('w-48')
    })

    it('should be shape soft', () => {
      expect(notification?.className).toContain('rounded-lg')
    })

    it('should be variant filled', () => {
      expect(notification?.className).toContain('text-light-1')
    })

    it('should have progressbar', () => {
      expect(document.querySelector('.vk-notification__progressbar')).not.toBeNull()
    })

    it('should not be flat', () => {
      expect(notification?.className).toContain('shadow-md')
    })
  })

  describe('When color props changes', () => {
    it('should be primary when color props is primary', async () => {
      wrapper = mount(VkButton, {
        props: {
          onClick: () => useNotification({ text: 'Hello World', color: 'primary' })
        }
      })

      await wrapper.trigger('click')
      await nextTick()
      notification = document.querySelector('.vk-notification')

      expect(notification?.className).toContain('bg-primary-500')
    })

    it('should be neutral when color props is neutral', async () => {
      wrapper = mount(VkButton, {
        props: {
          onClick: () => useNotification({ text: 'Hello World', color: 'neutral' })
        }
      })

      await wrapper.trigger('click')
      await nextTick()
      notification = document.querySelector('.vk-notification')

      expect(notification?.className).toContain('bg-light-4')
    })

    it('should be success when color props is success', async () => {
      wrapper = mount(VkButton, {
        props: {
          onClick: () => useNotification({ text: 'Hello World', color: 'success' })
        }
      })

      await wrapper.trigger('click')
      await nextTick()
      notification = document.querySelector('.vk-notification')

      expect(notification?.className).toContain('bg-success-500')
    })

    it('should be info when color props is info', async () => {
      wrapper = mount(VkButton, {
        props: {
          onClick: () => useNotification({ text: 'Hello World', color: 'info' })
        }
      })

      await wrapper.trigger('click')
      await nextTick()
      notification = document.querySelector('.vk-notification')

      expect(notification?.className).toContain('bg-info-500')
    })

    it('should be warning when color props is warning', async () => {
      wrapper = mount(VkButton, {
        props: {
          onClick: () => useNotification({ text: 'Hello World', color: 'warning' })
        }
      })

      await wrapper.trigger('click')
      await nextTick()
      notification = document.querySelector('.vk-notification')

      expect(notification?.className).toContain('bg-warning-500')
    })

    it('should be error when color props is error', async () => {
      wrapper = mount(VkButton, {
        props: {
          onClick: () => useNotification({ text: 'Hello World', color: 'error' })
        }
      })

      await wrapper.trigger('click')
      await nextTick()
      notification = document.querySelector('.vk-notification')

      expect(notification?.className).toContain('bg-error-500')
    })
  })

  describe('When variant props changes', () => {
    it('should be filled when variant props is filled', async () => {
      wrapper = mount(VkButton, {
        props: {
          onClick: () => useNotification({ text: 'Hello World', variant: 'filled' })
        }
      })

      await wrapper.trigger('click')
      await nextTick()
      notification = document.querySelector('.vk-notification')

      expect(notification?.className).toContain('text-light-1')
    })

    it('should be outlined when variant props is outlined', async () => {
      wrapper = mount(VkButton, {
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
      wrapper = mount(VkButton, {
        props: {
          onClick: () => useNotification({ text: 'Hello World', variant: 'ghost' })
        }
      })

      await wrapper.trigger('click')
      await nextTick()
      notification = document.querySelector('.vk-notification')

      expect(notification?.className).toContain('shadow-none')
    })
  })

  describe('When shape props changes', () => {
    it('should be rounded when shape prop is rounded', async () => {
      wrapper = mount(VkButton, {
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
      wrapper = mount(VkButton, {
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
      wrapper = mount(VkButton, {
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
      wrapper = mount(VkButton, {
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
      wrapper = mount(VkButton, {
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
      wrapper = mount(VkButton, {
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
      wrapper = mount(VkButton, {
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
