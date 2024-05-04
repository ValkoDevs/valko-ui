import { VueWrapper, mount } from '@vue/test-utils'
import VkBreadcrumbs from '#valkoui/components/Breadcrumbs.vue'
import { Crumb } from '#valkoui/types/Breadcrumbs'

describe('Breadcrumbs component', () => {
  let wrapper: VueWrapper
  const crumbs: Crumb[] = [
    { key: 'home', title: 'Home', onClick: () => vi.fn(), leftIcon: 'home' },
    { key: 'music', title: 'Music', rightIcon: 'music' },
    { key: 'artist', title: 'Artist' },
    { key: 'album', title: 'Album' },
    { key: 'song', title: 'Song' }
  ]

  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs
          }
        })
      })

      it('should render', () => {
        expect(wrapper.find('.vk-breadcrumbs')).toBeDefined()
      })

      it('should be color primary', () => {
        expect(wrapper.find('.bg-primary-500')).toBeDefined()
      })

      it('should be size md', () => {
        expect(wrapper.find('.text-base')).toBeDefined()
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.bg-primary-500')).toBeDefined()
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.rounded-lg')).toBeDefined()
      })

      it('should not be flat', () => {
        expect(wrapper.find('.shadow-none').exists()).toBe(false)
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            color: 'primary'
          }
        })

        expect(wrapper.find('.bg-primary-500')).toBeDefined()
      })

      it('should be color secondary when props.color is secondary', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            color: 'secondary'
          }
        })

        expect(wrapper.find('.bg-secondary-500')).toBeDefined()
      })

      it('should be color success when props.color is success', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            color: 'success'
          }
        })

        expect(wrapper.find('.bg-success-500')).toBeDefined()
      })

      it('should be color info when props.color is info', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            color: 'info'
          }
        })

        expect(wrapper.find('.bg-info-500')).toBeDefined()
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            color: 'warning'
          }
        })

        expect(wrapper.find('.bg-warning-500')).toBeDefined()
      })

      it('should be color error when props.color is error', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            color: 'error'
          }
        })

        expect(wrapper.find('.bg-error-500')).toBeDefined()
      })

      it('should be color light when props.color is light', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            color: 'light'
          }
        })

        expect(wrapper.find('.bg-light-1')).toBeDefined()
      })

      it('should be color dark when props.color is dark', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            color: 'dark'
          }
        })

        expect(wrapper.find('.bg-dark-5')).toBeDefined()
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            shape: 'rounded'
          }
        })

        expect(wrapper.find('.rounded-full')).toBeDefined()
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            shape: 'soft'
          }
        })

        expect(wrapper.find('.rounded-lg')).toBeDefined()
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            shape: 'square'
          }
        })

        expect(wrapper.find('.rounded-none')).toBeDefined()
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            size: 'xs'
          }
        })

        expect(wrapper.find('.text-xs')).toBeDefined()
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            size: 'sm'
          }
        })

        expect(wrapper.find('.text-sm')).toBeDefined()
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            size: 'md'
          }
        })

        expect(wrapper.find('.text-base')).toBeDefined()
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            size: 'lg'
          }
        })

        expect(wrapper.find('.text-lg')).toBeDefined()
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.size is filled', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            variant: 'filled'
          }
        })

        expect(wrapper.find('.bg-light-3').exists()).toBe(true)
      })

      it('should be outlined when props.size is outlined', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            variant: 'outlined'
          }
        })

        expect(wrapper.find('.border-2').exists()).toBe(true)
      })

      it('should be ghost when props.size is ghost', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            variant: 'ghost'
          }
        })

        expect(wrapper.find('.bg-transparent').exists()).toBe(true)
      })
    })
  })

  describe('Icons', () => {
    it('should have left icon if given', () => {
      const wrapper = mount(VkBreadcrumbs, {
        props: {
          crumbs
        }
      })

      expect(wrapper.find('i.ti.ti-home').exists()).toBe(true)
    })

    it('should have right icon if given', () => {
      const wrapper = mount(VkBreadcrumbs, {
        props: {
          crumbs
        }
      })

      expect(wrapper.find('i.ti.ti-music').exists()).toBe(true)
    })
  })

  describe('Emits', () => {
    it('should emit crumbClick event', () => {
      const wrapper = mount(VkBreadcrumbs, {
        props: {
          crumbs
        }
      })

      wrapper.find('.vk-breadcrumbs__a').trigger('click')
      expect(wrapper.emitted()).toHaveProperty('crumbClick')
    })
  })
})
