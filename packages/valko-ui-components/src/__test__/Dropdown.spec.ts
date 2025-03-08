import { VueWrapper, mount, flushPromises } from '@vue/test-utils'
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

        await wrapper.find('.vk-dropdown__trigger-button').trigger('click')
        await flushPromises()
      })

      it('should render', () => {
        expect(wrapper.find('.vk-dropdown__container').exists()).toBe(true)
      })

      it('should be color primary', () => {
        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('hover:bg-primary-500')
      })

      it('should be size md', () => {
        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('text-base')
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('hover:text-light-1')
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('data-[shape=soft]:rounded-lg')
      })

      it('should not be flat', () => {
        expect(wrapper.find('.vk-dropdown__items-menu').classes()).toContain('shadow-sm')
      })

      it('should not be disabled', () => {
        expect(wrapper.find('.cursor-not-allowed').exists()).toBe(false)
      })

      it('should not have a label', () => {
        expect(wrapper.find('.vk-dropdown__trigger-button').text()).toBe('')
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
        wrapper.find('.vk-dropdown__trigger-button').trigger('click')
        await nextTick()
        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('hover:bg-primary-500')
      })

      it('should be color neutral when props.color is neutral', async () => {
        wrapper = mount(VkDropdown, {
          props: {
            color: 'neutral',
            items
          }
        })
        wrapper.find('.vk-dropdown__trigger-button').trigger('click')
        await nextTick()
        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('hover:bg-light-4')
      })

      it('should be color success when props.color is success', async () => {
        wrapper = mount(VkDropdown, {
          props: {
            color: 'success',
            items
          }
        })
        wrapper.find('.vk-dropdown__trigger-button').trigger('click')
        await nextTick()
        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('hover:bg-success-500')
      })

      it('should be color info when props.color is info', async () => {
        wrapper = mount(VkDropdown, {
          props: {
            color: 'info',
            items
          }
        })
        wrapper.find('.vk-dropdown__trigger-button').trigger('click')
        await nextTick()
        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('hover:bg-info-500')
      })

      it('should be color warning when props.color is warning', async () => {
        wrapper = mount(VkDropdown, {
          props: {
            color: 'warning',
            items
          }
        })
        wrapper.find('.vk-dropdown__trigger-button').trigger('click')
        await nextTick()
        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('hover:bg-warning-500')
      })

      it('should be color error when props.color is error', async () => {
        wrapper = mount(VkDropdown, {
          props: {
            color: 'error',
            items
          }
        })
        wrapper.find('.vk-dropdown__trigger-button').trigger('click')
        await nextTick()
        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('hover:bg-error-500')
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

        await wrapper.find('.vk-dropdown__trigger-button').trigger('click')

        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('data-[shape=rounded]:rounded-full')
      })

      it('should be soft when props.shape is soft', async () => {
        wrapper = mount(VkDropdown, {
          props: {
            shape: 'soft',
            items
          }
        })

        await wrapper.find('.vk-dropdown__trigger-button').trigger('click')

        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('data-[shape=soft]:rounded-lg')
      })

      it('should be square when props.shape is square', async () => {
        wrapper = mount(VkDropdown, {
          props: {
            shape: 'square',
            items
          }
        })

        await wrapper.find('.vk-dropdown__trigger-button').trigger('click')

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

        await wrapper.find('.vk-dropdown__trigger-button').trigger('click')

        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('text-xs')
      })

      it('should be sm when props.size is sm', async () => {
        wrapper = mount(VkDropdown, {
          props: {
            size: 'sm',
            items
          }
        })

        await wrapper.find('.vk-dropdown__trigger-button').trigger('click')

        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('text-sm')
      })

      it('should be md when props.size is md', async () => {
        wrapper = mount(VkDropdown, {
          props: {
            size: 'md',
            items
          }
        })

        await wrapper.find('.vk-dropdown__trigger-button').trigger('click')

        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('text-base')
      })

      it('should be lg when props.size is lg', async () => {
        wrapper = mount(VkDropdown, {
          props: {
            size: 'lg',
            items
          }
        })

        await wrapper.find('.vk-dropdown__trigger-button').trigger('click')

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
        wrapper.find('.vk-dropdown__trigger-button').trigger('click')
        await nextTick()
        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('hover:text-light-1')
      })

      it('should be outlined when props.variant is outlined', async () => {
        wrapper = mount(VkDropdown, {
          props: {
            variant: 'outlined',
            items
          }
        })

        await wrapper.find('.vk-dropdown__trigger-button').trigger('click')

        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('border-2')
      })

      it('should be ghost when props.variant is ghost', async () => {
        wrapper = mount(VkDropdown, {
          props: {
            variant: 'ghost',
            items
          }
        })

        await wrapper.find('.vk-dropdown__trigger-button').trigger('click')

        expect(wrapper.find('.vk-dropdown__items-menu').classes()).toContain('shadow-none')
      })

      it('should be link when props.variant is link', async () => {
        wrapper = mount(VkDropdown, {
          props: {
            variant: 'link',
            items
          }
        })

        await wrapper.find('.vk-dropdown__trigger-button').trigger('click')

        expect(wrapper.find('.vk-dropdown__items-menu').classes()).toContain('bg-transparent')
      })

      it('should be gradient when props.variant is gradient', async () => {
        wrapper = mount(VkDropdown, {
          props: {
            variant: 'gradient',
            items
          }
        })

        await wrapper.find('.vk-dropdown__trigger-button').trigger('click')

        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('bg-gradient-to-br')
      })
    })

    describe('When icon prop changes', () => {
      it('should render the default icon if non is provided', () => {
        const wrapper = mount(VkDropdown, {
          props: {
            items
          }
        })

        expect(wrapper.find('i.ti.ti-chevron-down').exists()).toBe(true)
      })

      it('should render the custom icon if provided', () => {
        const wrapper = mount(VkDropdown, {
          props: {
            items,
            icon: 'home'
          }
        })

        expect(wrapper.find('i.ti.ti-home').exists()).toBe(true)
      })
    })

    describe('When flat prop changes', () => {
      it('should be flat if prop flat is true', async () => {
        const wrapper = mount(VkDropdown, {
          props: {
            items,
            flat: true
          }
        })

        await wrapper.find('.vk-dropdown__trigger-button').trigger('click')

        expect(wrapper.find('.vk-dropdown__items-menu').classes()).toContain('shadow-none')
      })

      it('should have shadow if prop flat is false', async () => {
        const wrapper = mount(VkDropdown, {
          props: {
            items,
            flat: false
          }
        })

        await wrapper.find('.vk-dropdown__trigger-button').trigger('click')

        expect(wrapper.find('.vk-dropdown__items-menu').classes()).toContain('shadow-sm')
      })
    })

    describe('When disabled prop changes', () => {
      it('should not be disabled if disabled prop is false', () => {
        const wrapper = mount(VkDropdown, {
          props: {
            items,
            disabled: false
          }
        })

        expect(wrapper.find('.cursor-not-allowed').exists()).toBe(false)
      })

      it('should be disabled if disabled prop is true', () => {
        const wrapper = mount(VkDropdown, {
          props: {
            items,
            disabled: true
          }
        })

        expect(wrapper.find('.cursor-not-allowed').exists()).toBe(true)
      })

      it('should the item be disabled if has disabled true', async () => {
        const disabledItem = { key: 'disabled', title: 'Disabled', icon: 'error-404', disabled: true }
        const wrapper = mount(VkDropdown, {
          props: {
            items: [disabledItem]
          }
        })

        await wrapper.find('.vk-dropdown__trigger-button').trigger('click')
        expect(wrapper.find('.vk-dropdown__item-button').classes()).toContain('data-[disabled=true]:cursor-not-allowed')
      })
    })

    describe('When items prop changes', () => {
      it('should render all provided items correctly', async () => {
        const wrapper = mount(VkDropdown, {
          props: {
            items
          }
        })

        await wrapper.find('.vk-dropdown__trigger-button').trigger('click')
        const renderedItems = wrapper.findAll('.vk-dropdown__item-button')

        expect(renderedItems.length).toBe(items.length)
      })

      it('should not render an icon if an item does not provide one', async () => {
        const itemWithoutIcon = { key: 'no-icon', title: 'No Icon' }
        const wrapper = mount(VkDropdown, {
          props: {
            items: [itemWithoutIcon]
          }
        })

        await wrapper.find('.vk-dropdown__trigger-button').trigger('click')
        const itemButton = wrapper.find('.vk-dropdown__item-button')

        expect(itemButton.findComponent({ name: 'VkIcon' }).exists()).toBe(false)
      })
    })
  })

  describe('Slots', () => {
    it('should render custom dropdown-trigger if provided on the slot', async () => {
      const wrapper = mount(VkDropdown, {
        props: {
          items
        },
        slots: {
          'dropdown-trigger': '<button class="custom-trigger">Menu</button>'
        }
      })

      expect(wrapper.find('.custom-trigger').exists()).toBe(true)
    })

    it('should render default dropdown-trigger if the slot is not modified', async () => {
      const wrapper = mount(VkDropdown, {
        props: {
          items
        }
      })

      expect(wrapper.find('.vk-dropdown__trigger-button').exists()).toBe(true)
    })
  })

  describe('Emits', () => {
    it('should emit click event', async () => {
      const wrapper = mount(VkDropdown, {
        props: {
          items
        }
      })

      await wrapper.find('.vk-dropdown__trigger-button').trigger('click')
      await wrapper.find('.vk-dropdown__item-button').trigger('click')

      expect(wrapper.emitted()).toHaveProperty('itemClick')
    })

    it('should not emit click event when the clicked item is disabled', async () => {
      const wrapper = mount(VkDropdown, {
        props: {
          items: [{ key: 'edit', title: 'Edit', icon: 'edit', disabled: true }]
        }
      })
      wrapper.find('.vk-dropdown__trigger-button').trigger('click')
      await nextTick()
      wrapper.find('.vk-dropdown__item-button').trigger('click')

      expect(wrapper.emitted()).not.toHaveProperty('itemClick')
    })
  })
})
