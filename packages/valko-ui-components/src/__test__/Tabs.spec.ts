import { VueWrapper, mount, flushPromises } from '@vue/test-utils'
import VkTabs from '#valkoui/components/Tabs.vue'

describe('Tabs component', () => {
  const tabs = [
    { key: 'photos', title: 'Photos', leftIcon: 'photo' },
    { key: 'videos', title: 'Videos', rightIcon: 'movie' },
    { key: 'favorite', title: 'Favorite' },
    { key: 'trending', title: 'Trending' },
    { key: 'friends', title: 'Friends' }
  ]
  let wrapper: VueWrapper
  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(async () => {
        wrapper = mount(VkTabs, {
          props: {
            tabs
          }
        })
        await flushPromises()
      })

      it('should render', () => {
        expect(wrapper.find('.vk-tabs__container').exists()).toBe(true)
      })

      it('should be color primary', () => {
        expect(wrapper.find('.bg-primary-500').exists()).toBe(true)
      })

      it('should be size md', () => {
        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.bg-light-3').exists()).toBe(true)
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.rounded-lg').exists()).toBe(true)
      })

      it('should have leftIcon when tabs[] contains leftICon', () => {
        expect(wrapper.find('.vk-tabs__left').exists()).toBe(true)
      })

      it('should have rightIcon when tabs[] contains rightICon', () => {
        expect(wrapper.find('.vk-tabs__right').exists()).toBe(true)
      })

      it('should not be disabled', () => {
        expect(wrapper.find('.cursor-not-allowed').exists()).toBe(false)
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', () => {
        wrapper = mount(VkTabs, {
          props: {
            color: 'primary',
            tabs
          }
        })

        expect(wrapper.find('.bg-primary-500').exists()).toBe(true)
      })

      it('should be color neutral when props.color is neutral', () => {
        wrapper = mount(VkTabs, {
          props: {
            color: 'neutral',
            tabs
          }
        })

        expect(wrapper.find('.bg-light-4').exists()).toBe(true)
      })

      it('should be color success when props.color is success', () => {
        wrapper = mount(VkTabs, {
          props: {
            color: 'success',
            tabs
          }
        })

        expect(wrapper.find('.bg-success-500').exists()).toBe(true)
      })

      it('should be color info when props.color is info', () => {
        wrapper = mount(VkTabs, {
          props: {
            color: 'info',
            tabs
          }
        })

        expect(wrapper.find('.bg-info-500').exists()).toBe(true)
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkTabs, {
          props: {
            color: 'warning',
            tabs
          }
        })

        expect(wrapper.find('.bg-warning-500').exists()).toBe(true)
      })

      it('should be color error when props.color is error', () => {
        wrapper = mount(VkTabs, {
          props: {
            color: 'error',
            tabs
          }
        })

        expect(wrapper.find('.bg-error-500').exists()).toBe(true)
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkTabs, {
          props: {
            shape: 'rounded',
            tabs
          }
        })

        expect(wrapper.find('.rounded-full').exists()).toBe(true)
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkTabs, {
          props: {
            shape: 'soft',
            tabs
          }
        })

        expect(wrapper.find('.rounded-lg').exists()).toBe(true)
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkTabs, {
          props: {
            shape: 'square',
            tabs
          }
        })

        expect(wrapper.find('.rounded-none').exists()).toBe(true)
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        wrapper = mount(VkTabs, {
          props: {
            size: 'xs',
            tabs
          }
        })

        expect(wrapper.find('.text-xs').exists()).toBe(true)
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkTabs, {
          props: {
            size: 'sm',
            tabs
          }
        })

        expect(wrapper.find('.text-sm').exists()).toBe(true)
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkTabs, {
          props: {
            size: 'md',
            tabs
          }
        })

        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkTabs, {
          props: {
            size: 'lg',
            tabs
          }
        })

        expect(wrapper.find('.text-lg').exists()).toBe(true)
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.variant is filled', () => {
        wrapper = mount(VkTabs, {
          props: {
            variant: 'filled',
            tabs
          }
        })

        expect(wrapper.find('.bg-light-3').exists()).toBe(true)
      })

      it('should be outlined when props.variant is outlined', () => {
        wrapper = mount(VkTabs, {
          props: {
            variant: 'outlined',
            tabs
          }
        })

        expect(wrapper.find('.border-2').exists()).toBe(true)
      })

      it('should be ghost when props.variant is ghost', () => {
        wrapper = mount(VkTabs, {
          props: {
            variant: 'ghost',
            tabs
          }
        })

        expect(wrapper.find('.bg-transparent').exists()).toBe(true)
      })

      it('should be gradient when props.variant is gradient', () => {
        wrapper = mount(VkTabs, {
          props: {
            variant: 'gradient',
            tabs
          }
        })

        expect(wrapper.find('.bg-gradient-to-br').exists()).toBe(true)
      })
    })
  })

  describe('Slots', () => {
    it('should render panel based on tabs.key', () => {
      wrapper = mount(VkTabs, {
        props: {
          tabs,
          slots: {
            photos: 'Hello World'
          }
        }
      })

      expect(wrapper.find('[data-key="photos"]').exists()).toBe(true)
    })
  })
})


