import { nextTick, type Ref } from 'vue'
import useClientSideDataTable from '#valkoui/composables/useClientSideDataTable'
import type { TableHeader, TableItem } from '#valkoui/types/Table'
import type { DataTableInput } from '#valkoui/types/DataTable'

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

  beforeEach(() => {
    vi.resetAllMocks()
  })

  describe('Should return an object with all the props and methods from composables', () => {
    let result: Ref<DataTableInput>
    beforeEach(async () => {
      result = useClientSideDataTable({
        data,
        headers,
        selectionMode: 'none',
        pageSizeOptions: [10, 20, 30],
        draggable: false
      })

      await nextTick()
    })

    // it('should return data array from useDataTable composable', () => {
    //   expect(result.value.data).toEqual(data)
    // })

    it('should return headers array from useDataTable composable', () => {
      expect(result.value.headers).toEqual(headers)
    })
  })
})
