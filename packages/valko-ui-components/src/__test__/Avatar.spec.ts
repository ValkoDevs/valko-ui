import { VueWrapper, mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import VkAvatar from '#valkoui/components/Avatar.vue'

describe('Avatar component', () => {
  let wrapper: VueWrapper
  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(async () => {
        wrapper = mount(VkAvatar, {
          props: {
            src: 'example.url'
          }
        })
        await nextTick()
      })

      it('should render', () => {
        expect(wrapper.find('.vk-avatar').exists()).toBe(true)
      })

      it('should be color primary', () => {
        expect(wrapper.find('.bg-primary').exists()).toBe(true)
      })

      it('should be size md', () => {
        expect(wrapper.find('.text-5xl').exists()).toBe(true)
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.vk-avatar__filled').exists()).toBe(true)
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.rounded-lg').exists()).toBe(true)
      })

      it('should not be elevated', () => {
        expect(wrapper.find('.shadow-el1').exists()).toBe(false)
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', () => {
        wrapper = mount(VkAvatar, {
          props: {
            src: 'example.url',
            color: 'primary'
          }
        })

        expect(wrapper.find('.bg-primary').exists()).toBe(true)
      })

      it('should be color secondary when props.color is secondary', () => {
        wrapper = mount(VkAvatar, {
          props: {
            src: 'example.url',
            color: 'secondary'
          }
        })

        expect(wrapper.find('.bg-secondary').exists()).toBe(true)
      })

      it('should be color positive when props.color is positive', () => {
        wrapper = mount(VkAvatar, {
          props: {
            src: 'example.url',
            color: 'positive'
          }
        })

        expect(wrapper.find('.bg-positive').exists()).toBe(true)
      })

      it('should be color accent when props.color is accent', () => {
        wrapper = mount(VkAvatar, {
          props: {
            src: 'example.url',
            color: 'accent'
          }
        })

        expect(wrapper.find('.bg-accent').exists()).toBe(true)
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkAvatar, {
          props: {
            src: 'example.url',
            color: 'warning'
          }
        })

        expect(wrapper.find('.bg-warning').exists()).toBe(true)
      })

      it('should be color negative when props.color is negative', () => {
        wrapper = mount(VkAvatar, {
          props: {
            src: 'example.url',
            color: 'negative'
          }
        })

        expect(wrapper.find('.bg-negative').exists()).toBe(true)
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkAvatar, {
          props: {
            src: 'example.url',
            shape: 'rounded'
          }
        })

        expect(wrapper.find('.rounded-full').exists()).toBe(true)
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkAvatar, {
          props: {
            src: 'example.url',
            shape: 'soft'
          }
        })

        expect(wrapper.find('.rounded-lg').exists()).toBe(true)
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkAvatar, {
          props: {
            src: 'example.url',
            shape: 'square'
          }
        })

        expect(wrapper.find('.rounded-none').exists()).toBe(true)
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        wrapper = mount(VkAvatar, {
          props: {
            src: 'example.url',
            size: 'xs'
          }
        })

        expect(wrapper.find('.text-xl').exists()).toBe(true)
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkAvatar, {
          props: {
            src: 'example.url',
            size: 'sm'
          }
        })

        expect(wrapper.find('.text-3xl').exists()).toBe(true)
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkAvatar, {
          props: {
            src: 'example.url',
            size: 'md'
          }
        })

        expect(wrapper.find('.text-5xl').exists()).toBe(true)
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkAvatar, {
          props: {
            src: 'example.url',
            size: 'lg'
          }
        })

        expect(wrapper.find('.text-6xl').exists()).toBe(true)
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.variant is filled', () => {
        wrapper = mount(VkAvatar, {
          props: {
            src: 'example.url',
            variant: 'filled'
          }
        })

        expect(wrapper.find('.vk-avatar__filled').exists()).toBe(true)
      })

      it('should be outlined when props.variant is outlined', () => {
        wrapper = mount(VkAvatar, {
          props: {
            src: 'example.url',
            variant: 'outlined'
          }
        })

        expect(wrapper.find('.vk-avatar').classes()).toContain('border-[3px]')
      })

      it('should be ghost when props.variant is ghost', () => {
        wrapper = mount(VkAvatar, {
          props: {
            src: 'example.url',
            variant: 'ghost'
          }
        })

        expect(wrapper.find('.vk-avatar__ghost').exists()).toBe(true)
      })

      it('should be gradient when props.variant is gradient', () => {
        wrapper = mount(VkAvatar, {
          props: {
            src: 'example.url',
            variant: 'gradient'
          }
        })

        expect(wrapper.find('.bg-gradient-to-br').exists()).toBe(true)
      })
    })

    describe('When prop name and prop src change', () => {
      it('should display an img when src is given', async () => {
        wrapper = mount(VkAvatar, {
          props: {
            src: 'example.url'
          }
        })
        await nextTick()
        expect(wrapper.find('img').attributes('src')).toBe('example.url')
      })

      it('should display the initials of the given name if there is no src', () => {
        wrapper = mount(VkAvatar, {
          props: {
            src: '',
            name: 'Brandon Coper'
          }
        })

        expect(wrapper.find('.vk-avatar > span').text()).toContain('BC')
      })
    })

    describe('When prop src is invalid', () => {
      it('should display a user icon if there is no src or name given', () => {
        wrapper = mount(VkAvatar, {})

        expect(wrapper.find('i.ti.ti-user').exists()).toBe(true)
      })
    })

    describe('When prop elevated changes', () => {
      it('should be elevated when props.elevated is true', () => {
        wrapper = mount(VkAvatar, {
          props: {
            src: 'example.url',
            elevated: true
          }
        })

        expect(wrapper.find('.shadow-el1').exists()).toBe(true)
      })
    })
  })
})
