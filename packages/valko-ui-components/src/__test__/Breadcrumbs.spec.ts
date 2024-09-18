import { VueWrapper, mount } from '@vue/test-utils'
import VkBreadcrumbs from '#valkoui/components/Breadcrumbs.vue'
import { Crumb } from '#valkoui/types/Breadcrumbs'

describe('Breadcrumbs component', () => {
  let wrapper: VueWrapper
  const crumbs: Crumb[] = [
    { key: 'home', title: 'Home', onClick: () => vi.fn(), leftIcon: 'home' },
    { key: 'music', title: 'Music', rightIcon: 'music', disabled: true },
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
        expect(wrapper.find('.vk-breadcrumbs').exists()).toBe(true)
      })

      it('should be color primary', () => {
        expect(wrapper.find('.vk-breadcrumbs__a').classes()).toContain('text-primary-500')
      })

      it('should be size md', () => {
        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.vk-breadcrumbs').classes()).toContain('bg-light-3')
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
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            color: 'primary'
          }
        })

        expect(wrapper.find('.text-primary-500').exists()).toBe(true)
      })

      it('should be color neutral when props.color is neutral', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            color: 'neutral'
          }
        })

        expect(wrapper.find('.text-dark-1').exists()).toBe(true)
      })

      it('should be color success when props.color is success', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            color: 'success'
          }
        })

        expect(wrapper.find('.text-success-500').exists()).toBe(true)
      })

      it('should be color info when props.color is info', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            color: 'info'
          }
        })

        expect(wrapper.find('.text-info-500').exists()).toBe(true)
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            color: 'warning'
          }
        })

        expect(wrapper.find('.text-warning-500').exists()).toBe(true)
      })

      it('should be color error when props.color is error', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            color: 'error'
          }
        })

        expect(wrapper.find('.text-error-500').exists()).toBe(true)
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

        expect(wrapper.find('.rounded-full').exists()).toBe(true)
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            shape: 'soft'
          }
        })

        expect(wrapper.find('.rounded-lg').exists()).toBe(true)
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            shape: 'square'
          }
        })

        expect(wrapper.find('.rounded-none').exists()).toBe(true)
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

        expect(wrapper.find('.text-xs').exists()).toBe(true)
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            size: 'sm'
          }
        })

        expect(wrapper.find('.text-sm').exists()).toBe(true)
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            size: 'md'
          }
        })

        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            size: 'lg'
          }
        })

        expect(wrapper.find('.text-lg').exists()).toBe(true)
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.variant is filled', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            variant: 'filled'
          }
        })

        expect(wrapper.find('.bg-light-3').exists()).toBe(true)
      })

      it('should be outlined when props.variant is outlined', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            variant: 'outlined'
          }
        })

        expect(wrapper.find('.border-2').exists()).toBe(true)
      })

      it('should be ghost when props.variant is ghost', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            variant: 'ghost'
          }
        })

        expect(wrapper.find('.vk-breadcrumbs').classes()).toContain('bg-light-3/[.50]')
      })

      it('should be link when props.variant is link', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            variant: 'link'
          }
        })

        expect(wrapper.find('.bg-transparent').exists()).toBe(true)
      })
    })

    describe('When separator prop changes', () => {
      it('should use the given string in separator', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            separator: '/'
          }
        })

        expect(wrapper.find('.vk-breadcrumbs').html()).toContain('/')
      })

      it('should be an icon if the string has more than two characters', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            separator: 'minus'
          }
        })

        expect(wrapper.find('i.ti.ti-minus').exists()).toBe(true)
      })

      it('should not render a separator after the last crumb', () => {
        const wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            separator: 'minus'
          }
        })

        const crumbsElements = wrapper.findAll('.vk-breadcrumbs__a')
        const lastCrumb = crumbsElements[crumbsElements.length - 1]
        expect(lastCrumb.html()).not.toContain('i.ti.ti-minus')
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
    it('should emit crumbClick event when an item is clicked', () => {
      const wrapper = mount(VkBreadcrumbs, {
        props: {
          crumbs
        }
      })

      wrapper.find('.vk-breadcrumbs__a').trigger('click')
      expect(wrapper.emitted()).toHaveProperty('crumbClick')
    })

    it('should not emit crumbClick event when a clicked item is disabled', () => {
      const wrapper = mount(VkBreadcrumbs, {
        props: {
          crumbs
        }
      })

      const itemList = wrapper.findAll('.vk-breadcrumbs__a')
      itemList[1].trigger('click')
      expect(wrapper.emitted()).not.toHaveProperty('crumbClick')
    })
  })
})
