import { VueWrapper, mount } from '@vue/test-utils'
import { nextTick } from 'vue'
import { VkAvatar } from '.'

describe('Avatar component', () => {
  let wrapper: VueWrapper
  beforeAll(() => {
    Image.prototype.decode = async () => this
  })
  afterAll(() => {
    Image.prototype.decode = undefined
  })
  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkAvatar, {
          src: 'example.url'
        })
      })

      it('should render', () => {
        expect(wrapper.find('.vk-avatar').exists()).toBe(true)
      })

      it('should be color primary', () => {
        expect(wrapper.find('.bg-primary-500').exists()).toBe(true)
      })

      it('should be size md', () => {
        expect(wrapper.find('.text-5xl').exists()).toBe(true)
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.text-white').exists()).toBe(true)
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.rounded-lg').exists()).toBe(true)
      })

      it('should not be flat', () => {
        expect(wrapper.find('.shadow-none').exists()).toBe(false)
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

        expect(wrapper.find('.bg-primary-500').exists()).toBe(true)
      })

      it('should be color secondary when props.color is secondary', () => {
        wrapper = mount(VkAvatar, {
          props: {
            src: 'example.url',
            color: 'secondary'
          }
        })

        expect(wrapper.find('.bg-secondary-500').exists()).toBe(true)
      })

      it('should be color success when props.color is success', () => {
        wrapper = mount(VkAvatar, {
          props: {
            src: 'example.url',
            color: 'success'
          }
        })

        expect(wrapper.find('.bg-success-500').exists()).toBe(true)
      })

      it('should be color info when props.color is info', () => {
        wrapper = mount(VkAvatar, {
          props: {
            src: 'example.url',
            color: 'info'
          }
        })

        expect(wrapper.find('.bg-info-500').exists()).toBe(true)
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkAvatar, {
          props: {
            src: 'example.url',
            color: 'warning'
          }
        })

        expect(wrapper.find('.bg-warning-500').exists()).toBe(true)
      })

      it('should be color error when props.color is error', () => {
        wrapper = mount(VkAvatar, {
          props: {
            src: 'example.url',
            color: 'error'
          }
        })

        expect(wrapper.find('.bg-error-500').exists()).toBe(true)
      })

      it('should be color light when props.color is light', () => {
        wrapper = mount(VkAvatar, {
          props: {
            src: 'example.url',
            color: 'light'
          }
        })

        expect(wrapper.find('.bg-light-1').exists()).toBe(true)
      })

      it('should be color dark when props.color is dark', () => {
        wrapper = mount(VkAvatar, {
          props: {
            src: 'example.url',
            color: 'dark'
          }
        })

        expect(wrapper.find('.bg-dark-5').exists()).toBe(true)
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
      it('should be filled when props.size is filled', () => {
        wrapper = mount(VkAvatar, {
          props: {
            src: 'example.url',
            variant: 'filled'
          }
        })

        expect(wrapper.find('.text-white').exists()).toBe(true)
      })

      it('should be outlined when props.size is outlined', () => {
        wrapper = mount(VkAvatar, {
          props: {
            src: 'example.url',
            variant: 'outlined'
          }
        })

        expect(wrapper.find('.border-2').exists()).toBe(true)
      })

      it('should be ghost when props.size is ghost', () => {
        wrapper = mount(VkAvatar, {
          props: {
            src: 'example.url',
            variant: 'ghost'
          }
        })

        expect(wrapper.find('.vk-avatar').classes()).toContain('bg-primary-500/[.20]')
      })
    })

    describe('When props name and props src are defined or not', () => {
      it('should display an img with the given src', async () => {
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
            src: 'example.url',
            name: 'Brandon Coper'
          }
        })

        expect(wrapper.find('span').text()).toContain('BC')
      })

      it('should display an user icon if there is no src or name given', () => {
        wrapper = mount(VkAvatar, {
          props: {
            src: 'example.url'
          }
        })

        expect(wrapper.find('i.ti.ti-user').exists()).toBe(true)
      })
    })
  })
})
