import { VueWrapper, mount } from '@vue/test-utils'
import VkBreadcrumbs from '#valkoui/components/Breadcrumbs.vue'
import { Crumb } from '#valkoui/types/Breadcrumbs'

describe('Breadcrumbs component', () => {
  let wrapper: VueWrapper
  const onClickMock = vi.fn()

  const crumbs: Crumb[] = [
    { key: 'home', title: 'Home', onClick: onClickMock, leftIcon: 'home' },
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
        expect(wrapper.find('.vk-breadcrumbs__a').classes()).toContain('hover:text-primary-600')
      })

      it('should be size md', () => {
        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.vk-breadcrumbs').classes()).toContain('bg-light-200')
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.rounded-lg').exists()).toBe(true)
      })

      it('should not be flat', () => {
        expect(wrapper.find('.shadow-none').exists()).toBe(false)
      })

      it('should have default separator', () => {
        expect(wrapper.find('.vk-breadcrumbs').html()).toContain('>')
      })

      it('should not be condensed', () => {
        expect(wrapper.find('.vk-breadcrumbs').classes()).toContain('py-2')
      })

      it('should render correct number of crumbs', () => {
        expect(wrapper.findAll('.vk-breadcrumbs__a').length).toBe(crumbs.length)
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

        expect(wrapper.find('.vk-breadcrumbs__a').classes()).toContain('hover:text-primary-600')
      })

      it('should be color secondary when props.color is secondary', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            color: 'secondary'
          }
        })

        expect(wrapper.find('.vk-breadcrumbs__a').classes()).toContain('hover:text-dark-950')
      })

      it('should be color positive when props.color is positive', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            color: 'positive'
          }
        })

        expect(wrapper.find('.vk-breadcrumbs__a').classes()).toContain('hover:text-positive')
      })

      it('should be color accent when props.color is accent', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            color: 'accent'
          }
        })

        expect(wrapper.find('.vk-breadcrumbs__a').classes()).toContain('hover:text-accent')
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            color: 'warning'
          }
        })

        expect(wrapper.find('.vk-breadcrumbs__a').classes()).toContain('hover:text-warning')
      })

      it('should be color negative when props.color is negative', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs,
            color: 'negative'
          }
        })

        expect(wrapper.find('.vk-breadcrumbs__a').classes()).toContain('hover:text-negative')
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

        expect(wrapper.find('.bg-light-200').exists()).toBe(true)
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

        expect(wrapper.find('.vk-breadcrumbs').classes()).toContain('bg-light-200/[.50]')
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

      it('should not render a separator when there is only one crumb', () => {
        wrapper = mount(VkBreadcrumbs, {
          props: {
            crumbs: [{ key: 'home', title: 'Home' }],
            separator: 'minus'
          }
        })

        expect(wrapper.find('.vk-breadcrumbs__separator').exists()).toBe(false)
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

  describe('Crumb onClick', () => {
    it('should execute onClick if the crumb has one', () => {
      const wrapper = mount(VkBreadcrumbs, {
        props: {
          crumbs
        }
      })

      const itemList = wrapper.findAll('.vk-breadcrumbs__a')
      itemList[0].trigger('click')
      expect(onClickMock).toHaveBeenCalledTimes(1)
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
