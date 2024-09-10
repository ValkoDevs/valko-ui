import { VueWrapper, mount } from '@vue/test-utils'
import VkTable from '#valkoui/components/Table.vue'

const headers = [
  {
    key: 'prop',
    field: 'prop',
    label: 'Property',
    sortable: true,
    filterable: true
  },
  {
    key: 'required',
    field: 'required',
    label: 'Required',
    sortable: true,
    filterable: true
  },
  {
    key: 'description',
    field: 'description',
    label: 'Description',
    sortable: true,
    filterable: true
  },
  {
    key: 'values',
    field: 'values',
    label: 'Values',
    sortable: true,
    filterable: true
  },
  {
    key: 'default',
    field: 'default',
    label: 'Default',
    sortable: true,
    filterable: true
  }
]

const data = [
  {
    key: 'headersKey',
    prop: 'headers',
    required: true,
    description: 'An array of objects defining the headers of the table.',
    values: 'TableHeader[]',
    default: '[]'
  },
  {
    key: 'dataKey',
    prop: 'data',
    required: true,
    description: 'An array of objects representing the data rows of the table.',
    values: 'TableItem[]',
    default: '[]'
  },
  {
    key: 'stripedKey',
    prop: 'striped',
    required: false,
    description: 'Specifies whether the table rows are striped for better readability.',
    values: 'boolean',
    default: 'false'
  },
  {
    key: 'selectedItemKey',
    prop: 'selectedItem',
    required: false,
    description: 'Helper prop to determine if a row is being selected using the key of the item pass by, only for styles purposes.',
    values: 'TableItem, TableItem[], undefined',
    default: 'undefined'
  },
  {
    key: 'rowEventsKey',
    prop: 'rowEvents',
    required: false,
    description: 'Allows rows to emit event onRowClick.',
    values: 'false, true',
    default: 'false'
  }
]


describe('Table component', () => {
  let wrapper: VueWrapper

  describe('Props', () => {
    describe('With default props', () => {
      beforeEach(() => {
        wrapper = mount(VkTable, {
          props: {
            headers,
            data
          }
        })
      })

      it('should render', () => {
        expect(wrapper.find('.vk-table').exists()).toBe(true)
      })

      it('should be size md', () => {
        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be variant filled', () => {
        expect(wrapper.find('.bg-light-4').exists()).toBe(true)
      })

      it('should be shape soft', () => {
        expect(wrapper.find('.rounded-lg').exists()).toBe(true)
      })
    })

    describe('When color prop changes', () => {
      it('should be color primary when props.color is primary', () => {
        wrapper = mount(VkTable, {
          props: {
            headers,
            data,
            color: 'primary'
          }
        })

        expect(wrapper.find('.vk-table__tr').classes()).toContain('data-[selected=true]:bg-primary-500/[.3]')
      })

      it('should be color neutral when props.color is neutral', () => {
        wrapper = mount(VkTable, {
          props: {
            headers,
            data,
            color: 'neutral'
          }
        })

        expect(wrapper.find('.vk-table__tr').classes()).toContain('data-[selected=true]:bg-dark-1/[.3]')
      })

      it('should be color success when props.color is success', () => {
        wrapper = mount(VkTable, {
          props: {
            headers,
            data,
            color: 'success'
          }
        })

        expect(wrapper.find('.vk-table__tr').classes()).toContain('data-[selected=true]:bg-success-500/[.3]')
      })

      it('should be color info when props.color is info', () => {
        wrapper = mount(VkTable, {
          props: {
            headers,
            data,
            color: 'info'
          }
        })

        expect(wrapper.find('.vk-table__tr').classes()).toContain('data-[selected=true]:bg-info-500/[.3]')
      })

      it('should be color warning when props.color is warning', () => {
        wrapper = mount(VkTable, {
          props: {
            headers,
            data,
            color: 'warning'
          }
        })

        expect(wrapper.find('.vk-table__tr').classes()).toContain('data-[selected=true]:bg-warning-500/[.3]')
      })

      it('should be color error when props.color is error', () => {
        wrapper = mount(VkTable, {
          props: {
            headers,
            data,
            color: 'error'
          }
        })

        expect(wrapper.find('.vk-table__tr').classes()).toContain('data-[selected=true]:bg-error-500/[.3]')
      })
    })

    describe('When shape prop changes', () => {
      it('should be rounded when props.shape is rounded', () => {
        wrapper = mount(VkTable, {
          props: {
            headers,
            data,
            shape: 'rounded'
          }
        })

        expect(wrapper.find('.rounded-xl').exists()).toBe(true)
      })

      it('should be soft when props.shape is soft', () => {
        wrapper = mount(VkTable, {
          props: {
            headers,
            data,
            shape: 'soft'
          }
        })

        expect(wrapper.find('.rounded-lg').exists()).toBe(true)
      })

      it('should be square when props.shape is square', () => {
        wrapper = mount(VkTable, {
          props: {
            headers,
            data,
            shape: 'square'
          }
        })

        expect(wrapper.find('.rounded-none').exists()).toBe(true)
      })
    })

    describe('When size prop changes', () => {
      it('should be xs when props.size is xs', () => {
        wrapper = mount(VkTable, {
          props: {
            headers,
            data,
            size: 'xs'
          }
        })

        expect(wrapper.find('.text-xs').exists()).toBe(true)
      })

      it('should be sm when props.size is sm', () => {
        wrapper = mount(VkTable, {
          props: {
            headers,
            data,
            size: 'sm'
          }
        })

        expect(wrapper.find('.text-sm').exists()).toBe(true)
      })

      it('should be md when props.size is md', () => {
        wrapper = mount(VkTable, {
          props: {
            headers,
            data,
            size: 'md'
          }
        })

        expect(wrapper.find('.text-base').exists()).toBe(true)
      })

      it('should be lg when props.size is lg', () => {
        wrapper = mount(VkTable, {
          props: {
            headers,
            data,
            size: 'lg'
          }
        })

        expect(wrapper.find('.text-lg').exists()).toBe(true)
      })
    })

    describe('When variant prop changes', () => {
      it('should be filled when props.variant is filled', () => {
        wrapper = mount(VkTable, {
          props: {
            headers,
            data,
            variant: 'filled'
          }
        })

        expect(wrapper.find('.bg-light-4').exists()).toBe(true)
      })

      it('should be outlined when props.variant is outlined', () => {
        wrapper = mount(VkTable, {
          props: {
            headers,
            data,
            variant: 'outlined'
          }
        })

        expect(wrapper.find('.border-b').exists()).toBe(true)
      })

      it('should be ghost when props.variant is ghost', () => {
        wrapper = mount(VkTable, {
          props: {
            headers,
            data,
            variant: 'ghost'
          }
        })

        expect(wrapper.find('.vk-table__thead').classes()).toContain('bg-light-4/[.60]')
      })
    })

    describe('When striped prop changes', () => {
      it('should be striped when true', () => {
        const wrapper = mount(VkTable, {
          props: {
            headers,
            data,
            striped: true
          }
        })

        expect(wrapper.find('.vk-table__tr').classes()).toContain('even:bg-light-3/[.8]')
      })
    })
  })

  describe('Slots', () => {
    it('should display header label in header-cell slots', () => {
      wrapper = mount(VkTable, {
        props: {
          headers,
          data
        }
      })

      expect(wrapper.find('th').text()).toBe('Property')
    })

    it('should display item label in item-cell slots', () => {
      wrapper = mount(VkTable, {
        props: {
          headers,
          data
        }
      })

      expect(wrapper.find('td').text()).toBe('headers')
    })

    it('should display the custom message in the no-data-message slot', () => {
      wrapper = mount(VkTable, {
        props: {
          headers,
          data: undefined
        },
        slots: {
          'no-data-message': 'no data message'
        }
      })

      expect(wrapper.find('.vk-table__no_data_message').text()).toBe('no data message')
    })

    it('should display the custom content in the table-footer slot', () => {
      wrapper = mount(VkTable, {
        props: {
          headers,
          data
        },
        slots: {
          'table-footer': 'table footer'
        }
      })

      expect(wrapper.find('.vk-table_footer').text()).toBe('table footer')
    })

    it('should not display table footer when not provided', () => {
      const wrapper = mount(VkTable, {
        props: {
          headers,
          data
        }
      })

      expect(wrapper.find('.vk-table_footer').exists()).toBe(false)
    })
  })

  describe('Emits', () => {
    it('should emit onRowClick event when a row is clicked and rowEvents is true', () => {
      const wrapper = mount(VkTable, {
        props: {
          headers,
          data,
          rowEvents: true
        }
      })

      wrapper.find('.vk-table__tr').trigger('click')
      expect(wrapper.emitted()).toHaveProperty('onRowClick')
    })

    it('should not emit onRowClick event when a row is clicked and rowEvents is false', () => {
      const wrapper = mount(VkTable, {
        props: {
          headers,
          data,
          rowEvents: false
        }
      })

      wrapper.find('.vk-table__tr').trigger('click')
      expect(wrapper.emitted()).not.toHaveProperty('onRowClick')
    })
  })

  describe('With different data states', () => {
    it('should display "No items found" when data is empty', () => {
      const wrapper = mount(VkTable, {
        props: {
          headers,
          data: []
        }
      })

      expect(wrapper.find('.vk-table__no_data_message').text()).toBe('No items found.')
    })

    it('should display rows with data correctly', () => {
      const wrapper = mount(VkTable, {
        props: {
          headers,
          data
        }
      })

      const rows = wrapper.findAll('.vk-table__tr')
      const firstRow = rows[0]
      expect(firstRow.text()).toContain('headers')
    })

    it('should display No items found when data is undefined', () => {
      const wrapper = mount(VkTable, {
        props: {
          headers,
          data: undefined
        }
      })

      expect(wrapper.find('.vk-table__no_data_message').text()).toBe('No items found.')
    })
  })

  describe('When prop selection changes', () => {
    it('should handle selection with different types', () => {
      const wrapper = mount(VkTable, {
        props: {
          headers,
          data,
          rowEvents: true,
          selection: { key: 'prop' }
        }
      })

      expect(wrapper.find('.vk-table__tr').classes()).toContain('data-[selected=true]:bg-primary-500/[.3]')
    })

    it('should handle empty selection', () => {
      const wrapper = mount(VkTable, {
        props: {
          headers,
          data,
          rowEvents: true,
          selection: []
        }
      })
      expect(wrapper.find('.vk-table__tr').classes()).not.toContain('data-[selected=true]:bg-success-500/[.3]')
    })
  })
})
