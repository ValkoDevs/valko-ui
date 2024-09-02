import { ref, nextTick } from 'vue'
import useDataTable from '#valkoui/composables/useDataTable'
import type { TableHeader, TableItem } from '#valkoui/types/Table'

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

  const dataTable = useDataTable({
    headers,
    paginatedResult,
    selectAllStatus: undefined,
    selectionMode: 'none',
    draggable: false
  })

  it('should return the correct initial headers and data', () => {
    expect(dataTable.value.headers).toEqual(headers)
    expect(dataTable.value.data).toEqual(paginatedResult.value.records)
    expect(dataTable.value.isAllSelected).toBe(false)
  })

  it('should add a selection column when selectionMode is single or multiple', () => {
    const multipleTable = useDataTable({
      headers,
      paginatedResult,
      selectAllStatus: undefined,
      selectionMode: 'multiple',
      draggable: false
    })

    expect(multipleTable.value.headers[0]).toEqual({ key: 'selection', field: 'selection', label: 'Selection' })
  })

  it('should add a draggable column when draggable is true', () => {
    const draggableTable = useDataTable({
      headers,
      paginatedResult,
      selectAllStatus: undefined,
      selectionMode: 'none',
      draggable: true
    })

    expect(draggableTable.value.headers[0]).toEqual({ key: 'draggable', field: 'draggable', label: '' })
  })

  it('should update selection when onSelect is called in single selection mode', async () => {
    const selectionTable = useDataTable({
      headers,
      paginatedResult,
      selectAllStatus: undefined,
      selectionMode: 'single',
      draggable: false
    })

    if (selectionTable.value.onSelect) selectionTable.value.onSelect(paginatedResult.value.records[1])

    await nextTick()

    expect(selectionTable.value.selection).toEqual(paginatedResult.value.records[1])
  })

  it('should update selection when onSelect is called in multiple selection mode', async () => {
    const multipleTable = useDataTable({
      headers,
      paginatedResult,
      selectAllStatus: undefined,
      selectionMode: 'multiple',
      draggable: false
    })

    if (multipleTable.value.onSelect) {
      multipleTable.value.onSelect(paginatedResult.value.records[0])
      multipleTable.value.onSelect(paginatedResult.value.records[1])
    }
    await nextTick()

    expect(multipleTable.value.selection).toEqual([paginatedResult.value.records[0], paginatedResult.value.records[1]])
  })

  it('should select all items when onSelectAll is called with true', async () => {
    const multipleTable = useDataTable({
      headers,
      paginatedResult,
      selectAllStatus: true,
      selectionMode: 'multiple',
      draggable: false
    })

    paginatedResult.value.records.forEach((item: TableItem) => {
      if (multipleTable.value.onSelect) multipleTable.value.onSelect(item)
    })

    await nextTick()

    expect(multipleTable.value.selection).toEqual(paginatedResult.value.records)
    expect(multipleTable.value.isAllSelected).toBe(true)
  })

  it('should deselect all items when onSelectAll is called with false', () => {
    const multipleTable = useDataTable({
      headers,
      paginatedResult,
      selectAllStatus: undefined,
      selectionMode: 'multiple',
      draggable: false
    })

    expect(multipleTable.value.selection).toBeUndefined()
    expect(multipleTable.value.isAllSelected).toBe(false)
  })
})
