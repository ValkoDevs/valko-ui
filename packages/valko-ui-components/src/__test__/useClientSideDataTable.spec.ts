import { nextTick, type Ref } from 'vue'
import useClientSideDataTable from '#valkoui/composables/useClientSideDataTable'
import type { TableHeader, TableItem } from '#valkoui/types/Table'
import type { DataTableInput } from '#valkoui/types/DataTable'

const {
  useClientSideFilter,
  useClientSideSort,
  useClientSidePagination,
  useClientSideDragAndDrop,
  useDataTable
} = vi.hoisted(() => ({
  useClientSideFilter: vi.fn(() => ({
    result: [],
    filters: [{}],
    setFilters: vi.fn()
  })),
  useClientSideSort: vi.fn(() => ({
    result: [],
    sort: {},
    setSort: vi.fn()
  })),
  useClientSidePagination: vi.fn(() => ({
    result: [],
    setOffset: vi.fn(),
    setLimit: vi.fn()
  })),
  useClientSideDragAndDrop: vi.fn(() => ({
    result: [],
    handleDragStart: vi.fn(),
    handleDragOver: vi.fn(),
    handleDrop: vi.fn()
  })),
  useDataTable: vi.fn(() => ({
    headers: [],
    data: [],
    limit: 0,
    offset: 0,
    total: 0,
    isAllSelected: undefined,
    selection: [],
    selectionMode: 'none',
    onSelect: vi.fn(),
    onSelectAll: vi.fn()
  }))
}))

vi.mock('#valkoui/composables/useClientSideFilter.ts', () => ({
  default: useClientSideFilter
}))

vi.mock('#valkoui/composables/useClientSideSort.ts', () => ({
  default: useClientSideSort
}))

vi.mock('#valkoui/composables/useClientSidePagination.ts', () => ({
  default: useClientSidePagination
}))

vi.mock('#valkoui/composables/useClientSideDragAndDrop.ts', () => ({
  default: useClientSideDragAndDrop
}))

vi.mock('#valkoui/composables/useDataTable.ts', () => ({
  default: useDataTable
}))

describe('useClientSideDataTable composable', () => {
  const headers: TableHeader[] = [
    { key: 'name', field: 'name', label: 'Name' },
    { key: 'age', field: 'age', label: 'Age' }
  ]

  const data: TableItem[] = [
    { key: '1', name: 'Alice', age: 30 },
    { key: '2', name: 'Bob', age: 25 },
    { key: '3', name: 'Charlie', age: 35 }
  ]

  describe('Should return an object with all the props and methods from composables', () => {
    let result: Ref<DataTableInput>
    beforeEach(async () => {
      result = useClientSideDataTable({
        data,
        headers,
        selectionMode: 'multiple',
        pageSizeOptions: [10, 20, 30],
        draggable: false
      })

      await nextTick()
    })

    it('should call useClientSideFilter', () => {
      expect(useClientSideFilter).toHaveBeenCalled()
    })

    it('should call useClientSideSort', () => {
      expect(useClientSideSort).toHaveBeenCalled()
    })

    it('should call useClientSidePagination', () => {
      expect(useClientSidePagination).toHaveBeenCalled()
    })

    it('should call useClientSideDragAndDrop', () => {
      expect(useClientSideDragAndDrop).toHaveBeenCalled()
    })

    it('should call useDataTable', () => {
      expect(useDataTable).toHaveBeenCalled()
    })

    it('should return the expected object props', () => {
      const expectedProps = [
        'headers',
        'data',
        'limit',
        'offset',
        'total',
        'isAllSelected',
        'selection',
        'selectionMode',
        'onSelect',
        'onSelectAll',
        'sort',
        'filters',
        'pageSizeOptions',
        'draggable',
        'onPageChange',
        'onLimitChange',
        'onSort',
        'onFilter',
        'onDragStart',
        'onDragOver',
        'onDrop'
      ]

      expect(Object.keys(result.value)).toMatchObject(expectedProps)
    })
  })
})
