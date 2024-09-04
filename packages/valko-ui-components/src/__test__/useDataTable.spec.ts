import { type ComputedRef, ref, nextTick } from 'vue'
import useDataTable from '#valkoui/composables/useDataTable'
import type { TableHeader } from '#valkoui/types/Table'
import type { DataTableInput } from '#valkoui/types/DataTable'

describe('useDataTable composable', () => {
  const headers: TableHeader[] = [
    { key: 'name', field: 'name', label: 'Name' },
    { key: 'age', field: 'age', label: 'Age' }
  ]

  const paginatedResult = ref({
    records: [
      { key: '1', name: 'Alice', age: 30 },
      { key: '2', name: 'Bob', age: 25 },
      { key: '3', name: 'Charlie', age: 35 }
    ],
    limit: 10,
    offset: 0,
    total: 3
  })

  describe('When no extra functionality is added', () => {
    let dataTable: ComputedRef<DataTableInput>
    beforeEach(() => {
      dataTable = useDataTable({
        headers,
        paginatedResult,
        selectAllStatus: undefined,
        selectionMode: 'none',
        draggable: false
      })
    })

    it('should return headers without changes', () => {
      expect(dataTable.value.headers).toEqual(headers)
    })

    it('should return data without changes', () => {
      expect(dataTable.value.data).toEqual(paginatedResult.value.records)
    })

    it('should update data when paginatedResult changes', async () => {
      const newPaginatedResult = ref({
        records: [
          { key: '4', name: 'David', age: 40 },
          { key: '5', name: 'Eve', age: 28 }
        ],
        limit: 10,
        offset: 0,
        total: 2
      })

      const dataTable = useDataTable({
        headers,
        paginatedResult,
        selectAllStatus: undefined,
        selectionMode: 'none',
        draggable: false
      })

      paginatedResult.value = newPaginatedResult.value
      await nextTick()

      expect(dataTable.value.data).toEqual(newPaginatedResult.value.records)
    })
  })

  describe('When selectionMode changes', () => {
    it('should return headers without changes when selectionMode is none', () => {
      const dataTable = useDataTable({
        headers,
        paginatedResult,
        selectAllStatus: undefined,
        selectionMode: 'none',
        draggable: false
      })

      expect(dataTable.value.headers).toEqual(headers)
    })

    it('should add a selection header when selectionMode is multiple', () => {
      const dataTable = useDataTable({
        headers,
        paginatedResult,
        selectAllStatus: undefined,
        selectionMode: 'multiple',
        draggable: false
      })

      expect(dataTable.value.headers[0]).toEqual({ key: 'selection', field: 'selection', label: 'Selection' })
    })

    it('should add a selection header when selectionMode is single', () => {
      const dataTable = useDataTable({
        headers,
        paginatedResult,
        selectAllStatus: undefined,
        selectionMode: 'single',
        draggable: false
      })

      expect(dataTable.value.headers[0]).toEqual({ key: 'selection', field: 'selection', label: 'Selection' })
    })

    it('should handle unexpected selectionMode gracefully', () => {
      const dataTable = useDataTable({
        headers,
        paginatedResult,
        selectAllStatus: undefined,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        selectionMode: 'unexpectedMode' as any,
        draggable: false
      })

      expect(dataTable.value.headers).toEqual(headers)
    })
  })

  describe('When draggable changes', () => {
    it('should return headers without changes if draggable is false', () => {
      const dataTable = useDataTable({
        headers,
        paginatedResult,
        selectAllStatus: undefined,
        selectionMode: 'none',
        draggable: false
      })

      expect(dataTable.value.headers).toEqual(headers)
    })

    it('should add a draggable header when draggable is true', () => {
      const dataTable = useDataTable({
        headers,
        paginatedResult,
        selectAllStatus: undefined,
        selectionMode: 'none',
        draggable: true
      })

      expect(dataTable.value.headers[0]).toEqual({ key: 'draggable', field: 'draggable', label: '' })
    })
  })

  describe('When draggable and selectionMode are both enabled', () => {
    it('should add both draggable and selection headers when both options are enabled', () => {
      const dataTable = useDataTable({
        headers,
        paginatedResult,
        selectAllStatus: undefined,
        selectionMode: 'multiple',
        draggable: true
      })

      expect(dataTable.value.headers).toEqual([
        { key: 'selection', field: 'selection', label: 'Selection' },
        { key: 'draggable', field: 'draggable', label: '' },
        ...headers
      ])
    })
  })

  describe('When onSelect is called', () => {
    it('should return one selected item when selectionMode is single', async () => {
      const dataTable = useDataTable({
        headers,
        paginatedResult,
        selectAllStatus: undefined,
        selectionMode: 'single',
        draggable: false
      })

      if (dataTable.value.onSelect) dataTable.value.onSelect(paginatedResult.value.records[0])
      if (dataTable.value.onSelect) dataTable.value.onSelect(paginatedResult.value.records[1])
      await nextTick()

      expect(dataTable.value.selection).toEqual(paginatedResult.value.records[1])
    })

    it('should return one selected item when selectionMode is rowSingle', async () => {
      const dataTable = useDataTable({
        headers,
        paginatedResult,
        selectAllStatus: undefined,
        selectionMode: 'rowSingle',
        draggable: false
      })

      if (dataTable.value.onSelect) dataTable.value.onSelect(paginatedResult.value.records[0])
      if (dataTable.value.onSelect) dataTable.value.onSelect(paginatedResult.value.records[1])
      await nextTick()

      expect(dataTable.value.selection).toEqual(paginatedResult.value.records[1])
    })

    it('should return an array of items when selectionMode is multiple', async () => {
      const dataTable = useDataTable({
        headers,
        paginatedResult,
        selectAllStatus: undefined,
        selectionMode: 'multiple',
        draggable: false
      })

      if (dataTable.value.onSelect) {
        dataTable.value.onSelect(paginatedResult.value.records[0])
        dataTable.value.onSelect(paginatedResult.value.records[1])
      }
      await nextTick()

      expect(dataTable.value.selection).toEqual([paginatedResult.value.records[0], paginatedResult.value.records[1]])
    })

    it('should return an array of items when selectionMode is rowMultiple', async () => {
      const dataTable = useDataTable({
        headers,
        paginatedResult,
        selectAllStatus: undefined,
        selectionMode: 'rowMultiple',
        draggable: false
      })

      if (dataTable.value.onSelect) {
        dataTable.value.onSelect(paginatedResult.value.records[0])
        dataTable.value.onSelect(paginatedResult.value.records[1])
      }
      await nextTick()

      expect(dataTable.value.selection).toEqual([paginatedResult.value.records[0], paginatedResult.value.records[1]])
    })
  })

  describe('When selectAllStatus changes', () => {
    it('should return false when selectAllStatus is undefined', () => {
      const dataTable = useDataTable({
        headers,
        paginatedResult,
        selectAllStatus: undefined,
        selectionMode: 'none',
        draggable: false
      })

      expect(dataTable.value.isAllSelected).toEqual(false)
    })

    it('should return false when selectAllStatus is false', () => {
      const dataTable = useDataTable({
        headers,
        paginatedResult,
        selectAllStatus: false,
        selectionMode: 'none',
        draggable: false
      })

      expect(dataTable.value.isAllSelected).toEqual(false)
    })

    it('should return true when selectAllStatus is true', () => {
      const dataTable = useDataTable({
        headers,
        paginatedResult,
        selectAllStatus: true,
        selectionMode: 'none',
        draggable: false
      })

      expect(dataTable.value.isAllSelected).toEqual(true)
    })
  })

  describe('When onSelectAll is called', () => {
    it('should return all the data when is called with true', () => {
      const dataTable = useDataTable({
        headers,
        paginatedResult,
        selectAllStatus: undefined,
        selectionMode: 'none',
        draggable: false
      })

      if (dataTable.value.onSelectAll) dataTable.value.onSelectAll(true)

      expect(dataTable.value.selection).toEqual(paginatedResult.value.records)
    })

    it('should deselect all the data when is called with false', () => {
      const dataTable = useDataTable({
        headers,
        paginatedResult,
        selectAllStatus: undefined,
        selectionMode: 'none',
        draggable: false
      })

      if (dataTable.value.onSelectAll) dataTable.value.onSelectAll(false)

      expect(dataTable.value.selection).toBeUndefined()
    })

    it('should handle an existing selection correctly', async () => {
      const dataTable = useDataTable({
        headers,
        paginatedResult,
        selectAllStatus: undefined,
        selectionMode: 'none',
        draggable: false
      })

      if (dataTable.value.onSelect) dataTable.value.onSelect(paginatedResult.value.records[0])
      if (dataTable.value.onSelectAll) dataTable.value.onSelectAll(true)
      await nextTick()

      expect(dataTable.value.selection).toEqual(paginatedResult.value.records)
    })
  })
})
