import { VueWrapper, mount, flushPromises } from '@vue/test-utils'
import { nextTick } from 'vue'
import VkDropdown from '#valkoui/components/Dropdown.vue'

describe('Dropdown component', () => {
  let wrapper: VueWrapper
  const items = [
    { key: 'image', title: 'Upload Image', icon: 'photo' },
    { key: 'edit', title: 'Edit', icon: 'edit' },
    { key: 'disabled', title: 'Disabled', icon: 'error-404' },
    { key: 'video', title: 'Upload Video', icon: 'video' },
    { key: 'delete', title: 'Delete', icon: 'trash' }
  ]
  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(async () => {
        wrapper = mount(VkDropdown, {
          props: {
            items: items
          }
        })
        wrapper.find('.vk-dropdown__button').trigger('click')
        await nextTick()
        await flushPromises()
      })

      it('should render', () => {
        expect(wrapper.find('.vk-dropdown__container').exists()).toBe(true)
      })

      it('should be color primary', () => {
        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('data-[active=true]:bg-primary-500')
      })

      it('should be size md', () => {
        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('text-base')
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('data-[active=true]:text-white')
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('data-[shape=soft]:rounded-lg')
      })

      it('should not be flat', () => {
        expect(wrapper.find('.shadow-none').exists()).toBe(false)
      })

      it('should not be disabled', () => {
        expect(wrapper.find('.cursor-not-allowed').exists()).toBe(false)
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', async () => {
        wrapper = mount(VkDropdown, {
          props: {
            color: 'primary',
            items
          }
        })
        wrapper.find('.vk-dropdown__button').trigger('click')
        await nextTick()
        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('data-[active=true]:bg-primary-500')
      })
      it('should be color secondary when props.color is secondary', async () => {
        wrapper = mount(VkDropdown, {
          props: {
            color: 'secondary',
            items
          }
        })
        wrapper.find('.vk-dropdown__button').trigger('click')
        await nextTick()
        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('data-[active=true]:bg-secondary-500')
      })

      it('should be color success when props.color is success', async () => {
        wrapper = mount(VkDropdown, {
          props: {
            color: 'success',
            items
          }
        })
        wrapper.find('.vk-dropdown__button').trigger('click')
        await nextTick()
        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('data-[active=true]:bg-success-500')
      })

      it('should be color info when props.color is info', async () => {
        wrapper = mount(VkDropdown, {
          props: {
            color: 'info',
            items
          }
        })
        wrapper.find('.vk-dropdown__button').trigger('click')
        await nextTick()
        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('data-[active=true]:bg-info-500')
      })

      it('should be color warning when props.color is warning', async () => {
        wrapper = mount(VkDropdown, {
          props: {
            color: 'warning',
            items
          }
        })
        wrapper.find('.vk-dropdown__button').trigger('click')
        await nextTick()
        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('data-[active=true]:bg-warning-500')
      })

      it('should be color error when props.color is error', async () => {
        wrapper = mount(VkDropdown, {
          props: {
            color: 'error',
            items
          }
        })
        wrapper.find('.vk-dropdown__button').trigger('click')
        await nextTick()
        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('data-[active=true]:bg-error-500')
      })

      it('should be color light when props.color is light', async () => {
        wrapper = mount(VkDropdown, {
          props: {
            color: 'light',
            items
          }
        })
        wrapper.find('.vk-dropdown__button').trigger('click')
        await nextTick()
        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('data-[active=true]:bg-light-3')
      })

      it('should be color dark when props.color is dark', async () => {
        wrapper = mount(VkDropdown, {
          props: {
            color: 'dark',
            items
          }
        })
        wrapper.find('.vk-dropdown__button').trigger('click')
        await nextTick()
        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('data-[active=true]:bg-dark-5')
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', async () => {
        wrapper = mount(VkDropdown, {
          props: {
            shape: 'rounded',
            items
          }
        })
        wrapper.find('.vk-dropdown__button').trigger('click')
        await nextTick()
        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('data-[shape=rounded]:rounded-full')
      })

      it('should be soft when props.shape is soft', async () => {
        wrapper = mount(VkDropdown, {
          props: {
            shape: 'soft',
            items
          }
        })
        wrapper.find('.vk-dropdown__button').trigger('click')
        await nextTick()
        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('data-[shape=soft]:rounded-lg')
      })

      it('should be square when props.shape is square', async () => {
        wrapper = mount(VkDropdown, {
          props: {
            shape: 'square',
            items
          }
        })
        wrapper.find('.vk-dropdown__button').trigger('click')
        await nextTick()
        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('data-[shape=square]:rounded-none')
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', async () => {
        wrapper = mount(VkDropdown, {
          props: {
            size: 'xs',
            items
          }
        })
        wrapper.find('.vk-dropdown__button').trigger('click')
        await nextTick()
        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('text-xs')
      })

      it('should be sm when props.size is sm', async () => {
        wrapper = mount(VkDropdown, {
          props: {
            size: 'sm',
            items
          }
        })
        wrapper.find('.vk-dropdown__button').trigger('click')
        await nextTick()
        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('text-sm')
      })

      it('should be md when props.size is md', async () => {
        wrapper = mount(VkDropdown, {
          props: {
            size: 'md',
            items
          }
        })
        wrapper.find('.vk-dropdown__button').trigger('click')
        await nextTick()
        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('text-base')
      })

      it('should be lg when props.size is lg', async () => {
        wrapper = mount(VkDropdown, {
          props: {
            size: 'lg',
            items
          }
        })
        wrapper.find('.vk-dropdown__button').trigger('click')
        await nextTick()
        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('text-lg')
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.size is filled', async () => {
        wrapper = mount(VkDropdown, {
          props: {
            variant: 'filled',
            items
          }
        })
        wrapper.find('.vk-dropdown__button').trigger('click')
        await nextTick()
        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('data-[active=true]:text-white')
      })

      it('should be outlined when props.size is outlined', async () => {
        wrapper = mount(VkDropdown, {
          props: {
            variant: 'outlined',
            items
          }
        })
        wrapper.find('.vk-dropdown__button').trigger('click')
        await nextTick()
        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('border-2')
      })

      it('should be ghost when props.size is ghost', () => {
        wrapper = mount(VkDropdown, {
          props: {
            variant: 'ghost',
            items
          }
        })

        expect(wrapper.find('.shadow-none').exists()).toBe(true)
      })

      it('should be link when props.size is link', () => {
        wrapper = mount(VkDropdown, {
          props: {
            variant: 'link',
            items
          }
        })

        expect(wrapper.find('.bg-transparent').exists()).toBe(true)
      })
    })
  })

  describe('Emits', () => {
    it('should emit click event', async () => {
      const wrapper = mount(VkDropdown, {
        props: {
          items
        }
      })
      wrapper.find('.vk-dropdown__button').trigger('click')
      await nextTick()
      wrapper.find('.vk-dropdown__item-button').trigger('click')
      expect(wrapper.emitted()).toHaveProperty('itemClick')
    })
  })
})
