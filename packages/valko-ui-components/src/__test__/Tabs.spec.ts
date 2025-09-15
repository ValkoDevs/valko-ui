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
        expect(wrapper.find('.bg-primary').exists()).toBe(true)
      })

      it('should be size md', () => {
        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.bg-surface-container').exists()).toBe(true)
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

        expect(wrapper.find('.bg-primary').exists()).toBe(true)
      })

      it('should be color secondary when props.color is secondary', () => {
        wrapper = mount(VkTabs, {
          props: {
            color: 'secondary',
            tabs
          }
        })

        expect(wrapper.find('.bg-secondary').exists()).toBe(true)
      })

      it('should be color positive when props.color is positive', () => {
        wrapper = mount(VkTabs, {
          props: {
            color: 'positive',
            tabs
          }
        })

        expect(wrapper.find('.bg-positive').exists()).toBe(true)
      })

      it('should be color accent when props.color is accent', () => {
        wrapper = mount(VkTabs, {
          props: {
            color: 'accent',
            tabs
          }
        })

        expect(wrapper.find('.bg-accent').exists()).toBe(true)
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkTabs, {
          props: {
            color: 'warning',
            tabs
          }
        })

        expect(wrapper.find('.bg-warning').exists()).toBe(true)
      })

      it('should be color negative when props.color is negative', () => {
        wrapper = mount(VkTabs, {
          props: {
            color: 'negative',
            tabs
          }
        })

        expect(wrapper.find('.bg-negative').exists()).toBe(true)
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

        expect(wrapper.find('.bg-surface-container').exists()).toBe(true)
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

        expect(wrapper.find('.vk-tabs__cursor').classes()).toContain('bg-gradient-to-br')
      })
    })
  })

  describe('Methods', () => {
    describe('onChange', () => {
      it('should not emit tabClick event if the tab is disabled', async () => {
        const wrapper = mount(VkTabs, {
          props: {
            tabs: [
              { key: 'photos', title: 'Photos', disabled: true },
              { key: 'videos', title: 'Videos' }
            ]
          }
        })

        const tabList = wrapper.findComponent({ name: 'TabList' })
        await tabList.find('button').trigger('click')

        expect(wrapper.emitted('tabClick')).toBeUndefined()
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


