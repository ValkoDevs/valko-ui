import { type Ref, shallowRef, watch, toValue } from 'vue'
import type { TableItem } from '#valkoui/types/Table'

const useClientSideDragAndDrop = <T extends TableItem>(data: T[] | Ref<T[]>) => {
  const dragStartIndex = shallowRef<number | null>(null)
  const draggedItem = shallowRef<T | null>(null)
  const reOrderedData = shallowRef<T[]>([])

  watch(data, (newData) => {
    reOrderedData.value = [...toValue(newData)]
  }, { immediate: true })

  const handleDragStart = (index: number) => {
    dragStartIndex.value = index
    draggedItem.value = reOrderedData.value[index]
  }

  const handleDragOver = (event: DragEvent) => {
    event.preventDefault()
  }

  const handleDrop = (event: DragEvent, index: number) => {
    event.preventDefault()

    if (dragStartIndex.value !== null && draggedItem.value !== null) {
      const startIndex = dragStartIndex.value
      const targetIndex = Math.max(0, Math.min(index, reOrderedData.value.length - 1))
      const newRecords = [...reOrderedData.value]

      newRecords.splice(startIndex, 1)
      newRecords.splice(targetIndex, 0, draggedItem.value)

      reOrderedData.value = newRecords

      dragStartIndex.value = null
      draggedItem.value = null
    }
  }

  const result = shallowRef<T[]>([])

  watch(reOrderedData, (newData) => {
    result.value = [...newData]
  })

  return {
    result,
    handleDragStart,
    handleDragOver,
    handleDrop
  }
}

export default useClientSideDragAndDrop
