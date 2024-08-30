import { nextTick } from 'vue'
import { mount, VueWrapper } from '@vue/test-utils'
import VkButton from '#valkoui/components/Button.vue'
import useNotification from '#valkoui/composables/useNotification'
import type { NotificationProps } from '#valkoui/types/Notification'

describe('useNotification composable', () => {
  let wrapper: VueWrapper
  let notification: HTMLElement | null
  const props = {
    text: 'Hello World',
    duration: 3000,
    close: true,
    color: 'primary',
    size: 'md',
    shape: 'soft',
    variant: 'filled'

  } as NotificationProps

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
  })
})
