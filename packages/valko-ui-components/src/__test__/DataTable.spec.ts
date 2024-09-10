import { nextTick } from 'vue'
import { VueWrapper, mount } from '@vue/test-utils'
import VkDataTable from '#valkoui/components/DataTable.vue'
import VkInput from '#valkoui/components/Input.vue'
import VkSelect from '#valkoui/components/Select.vue'
import VkPagination from '#valkoui/components/Pagination.vue'

const headers = [
  {
    key: 'prop',
    field: 'prop',
    label: 'Property'
  },
  {
    key: 'required',
    field: 'required',
    label: 'Required'
  }
]

const data = [
  {
    key: 'headersKey',
    prop: 'headers',
    required: true
  },
  {
    key: 'dataKey',
    prop: 'data',
    required: true
  },
  {
    key: 'stripedKey',
    prop: 'striped',
    required: false
  }
]

describe('DataTable component', () => {
  let wrapper: VueWrapper

  describe('When no extra functionality is added', () => {
    describe('Props', () => {
      describe('With default props', () => {
        beforeEach(() => {
          wrapper = mount(VkDataTable, {
            props: {
              headers,
              data
            }
          })
        })

        it('should render', () => {
          expect(wrapper.find('.vk-data-table').exists()).toBe(true)
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

      describe('When shape prop changes', () => {
        it('should be rounded when props.shape is rounded', () => {
          wrapper = mount(VkDataTable, {
            props: {
              headers,
              data,
              shape: 'rounded'
            }
          })

          expect(wrapper.find('.rounded-xl').exists()).toBe(true)
        })

        it('should be soft when props.shape is soft', () => {
          wrapper = mount(VkDataTable, {
            props: {
              headers,
              data,
              shape: 'soft'
            }
          })

          expect(wrapper.find('.rounded-lg').exists()).toBe(true)
        })

        it('should be square when props.shape is square', () => {
          wrapper = mount(VkDataTable, {
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
          wrapper = mount(VkDataTable, {
            props: {
              headers,
              data,
              size: 'xs'
            }
          })

          expect(wrapper.find('.text-xs').exists()).toBe(true)
        })

        it('should be sm when props.size is sm', () => {
          wrapper = mount(VkDataTable, {
            props: {
              headers,
              data,
              size: 'sm'
            }
          })

          expect(wrapper.find('.text-sm').exists()).toBe(true)
        })

        it('should be md when props.size is md', () => {
          wrapper = mount(VkDataTable, {
            props: {
              headers,
              data,
              size: 'md'
            }
          })

          expect(wrapper.find('.text-base').exists()).toBe(true)
        })

        it('should be lg when props.size is lg', () => {
          wrapper = mount(VkDataTable, {
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
          wrapper = mount(VkDataTable, {
            props: {
              headers,
              data,
              variant: 'filled'
            }
          })

          expect(wrapper.find('.bg-light-4').exists()).toBe(true)
        })

        it('should be outlined when props.variant is outlined', () => {
          wrapper = mount(VkDataTable, {
            props: {
              headers,
              data,
              variant: 'outlined'
            }
          })

          expect(wrapper.find('.border-b').exists()).toBe(true)
        })

        it('should be ghost when props.variant is ghost', () => {
          wrapper = mount(VkDataTable, {
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
          const wrapper = mount(VkDataTable, {
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
  })

  describe('When drag and drop functionality is added', () => {
    let wrapper: VueWrapper
    const dragHeaders = [{ key: 'draggable', field: 'draggable', label: '' }, ...headers]
    beforeEach(() => {
      wrapper = mount(VkDataTable, {
        props: {
          headers: dragHeaders,
          data
        }
      })
    })
    it('should display the draggable icon for the rows when true', () => {
      expect(wrapper.find('i.ti.ti-grip-vertical').exists()).toBe(true)
    })

    it('should emit onDragStart when a row is dragged', () => {
      wrapper.find('i.ti.ti-grip-vertical').trigger('dragstart')
      expect(wrapper.emitted()).toHaveProperty('onDragStart')
    })

    it('should emit onDragOver when a row is dragged over', () => {
      wrapper.find('i.ti.ti-grip-vertical').trigger('dragover')
      expect(wrapper.emitted()).toHaveProperty('onDragOver')
    })

    it('should emit onDrop when a row is dropped over', () => {
      wrapper.find('i.ti.ti-grip-vertical').trigger('drop')
      expect(wrapper.emitted()).toHaveProperty('onDrop')
    })
  })

  describe('When selectionMode functionality is added', () => {
    describe('When selectionMode is single', () => {
      let wrapper: VueWrapper
      const selectionHeaders = [{ key: 'selection', field: 'selection', label: 'Selection' }, ...headers]
      beforeEach(() => {
        wrapper = mount(VkDataTable, {
          props: {
            headers: selectionHeaders,
            data,
            selectionMode: 'single'
          }
        })
      })

      it('should display the radio buttons on the rows', () => {
        expect(wrapper.find('.vk-radio__container').exists()).toBe(true)
      })

      it('should emit onSelect when a row radio is clicked', () => {
        wrapper.find('.vk-radio__container').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('onSelect')
      })
    })

    describe('When selectionMode is multiple', () => {
      let wrapper: VueWrapper
      const selectionHeaders = [{ key: 'selection', field: 'selection', label: 'Selection' }, ...headers]
      beforeEach(() => {
        wrapper = mount(VkDataTable, {
          props: {
            headers: selectionHeaders,
            data,
            selectionMode: 'multiple'
          }
        })
      })

      it('should display the checkbox buttons on the rows', () => {
        expect(wrapper.find('.vk-checkbox__container').exists()).toBe(true)
      })

      it('should emit onSelectAll when the header checkbox is clicked', () => {
        wrapper.find('.vk-checkbox__container').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('onSelectAll')
      })

      it('should emit onSelect when a row checkbox is clicked', () => {
        const checkboxs = wrapper.findAll('.vk-checkbox__container')
        checkboxs[1].trigger('click')
        expect(wrapper.emitted()).toHaveProperty('onSelect')
      })
    })

    describe('When selectionMode is rowSingle', () => {
      let wrapper: VueWrapper
      beforeEach(() => {
        wrapper = mount(VkDataTable, {
          props: {
            headers,
            data,
            rowEvents: true,
            selectionMode: 'rowSingle'
          }
        })
      })

      it('should emit onSelect when a row is clicked', () => {
        wrapper.find('.vk-table__tr').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('onSelect')
      })
    })

    describe('When selectionMode is rowMultiple', () => {
      let wrapper: VueWrapper
      beforeEach(() => {
        wrapper = mount(VkDataTable, {
          props: {
            headers,
            data,
            rowEvents: true,
            selectionMode: 'rowMultiple'
          }
        })
      })

      it('should emit onSelect when a row is clicked', () => {
        wrapper.find('.vk-table__tr').trigger('click')
        expect(wrapper.emitted()).toHaveProperty('onSelect')
      })
    })
  })

  describe('When filterable functionality is added', () => {
    let wrapper: VueWrapper
    const filterHeaders = headers.map(header => ({ ...header, filterable: true }))
    beforeEach(() => {
      wrapper = mount(VkDataTable, {
        props: {
          headers: filterHeaders,
          data
        }
      })
    })
    it('should display the search icon in the header when true', () => {
      expect(wrapper.find('i.ti.ti-search').exists()).toBe(true)
    })

    it('should emit onFilter when the filter is being used', async () => {
      wrapper.find('i.ti.ti-search').trigger('click')
      wrapper.findComponent(VkInput).trigger('input')
      await new Promise(resolve => setTimeout(resolve, 500))
      expect(wrapper.emitted()).toHaveProperty('onFilter')
    })
  })

  describe('When sortable functionality is added', () => {
    let wrapper: VueWrapper
    const sortHeaders = headers.map(header => ({ ...header, sortable: true }))
    beforeEach(() => {
      wrapper = mount(VkDataTable, {
        props: {
          headers: sortHeaders,
          data
        }
      })
    })
    it('should display the sort icon in the header when true', () => {
      expect(wrapper.find('i.ti.ti-arrows-sort').exists()).toBe(true)
    })

    it('should emit onSort when the sort icon is clicked', async () => {
      wrapper.find('i.ti.ti-arrows-sort').trigger('click')
      expect(wrapper.emitted()).toHaveProperty('onSort')
    })
  })

  describe('When pagination functionality is added', () => {
    let wrapper: VueWrapper
    beforeEach(() => {
      wrapper = mount(VkDataTable, {
        props: {
          headers,
          data,
          total: 10,
          limit: 2
        }
      })
    })

    it('should emit onLimitChange when the limit is changed using the select', async () => {
      const select = wrapper.findComponent(VkSelect)
      select.find('.vk-input__input').trigger('focus')
      await nextTick()
      select.find('.vk-select__item:first-child').trigger('click')
      await nextTick()

      expect(wrapper.emitted()).toHaveProperty('onLimitChange')
    })

    it('should emit onPageChange when the page is changed', async () => {
      const pagination = wrapper.findComponent(VkPagination)
      pagination.find('.vk-pagination__right').trigger('click')
      await nextTick()

      expect(wrapper.emitted()).toHaveProperty('onPageChange')
    })
  })
})
