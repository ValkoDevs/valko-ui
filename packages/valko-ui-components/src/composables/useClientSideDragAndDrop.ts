import { type Ref, shallowRef, watch, toValue } from 'vue'
import type { TableItem } from '#valkoui/types/Table'

const useClientSideDragAndDrop = <T extends TableItem>(data: T[] | Ref<T[]>, enabled: boolean | Ref<boolean> = false) => {
  const result = shallowRef<T[]>(toValue(data))
  const dragStartIndex = shallowRef<number | null>(null)
  const draggedItem = shallowRef<T | null>(null)

  const handleDragStart = (index: number) => {
    if (!toValue(enabled)) return

    dragStartIndex.value = index
    draggedItem.value = result.value[index]
  }

  const handleDragOver = (event: DragEvent) => {
    if (!toValue(enabled)) return
    event.preventDefault()
  }

  const handleDrop = (event: DragEvent, index: number) => {
    if (!toValue(enabled)) return
    event.preventDefault()

    if (dragStartIndex.value !== null && draggedItem.value !== null) {
      const startIndex = dragStartIndex.value
      const targetIndex = Math.max(0, Math.min(index, result.value.length - 1))
      const newRecords = [...result.value]

      newRecords.splice(startIndex, 1)
      newRecords.splice(targetIndex, 0, draggedItem.value)

      result.value = newRecords

      dragStartIndex.value = null
      draggedItem.value = null
    }
  }

  watch(() => toValue(data), (newData) => {
    result.value = [...newData]
  },  { immediate: true })

  return {
    result,
    handleDragStart,
    handleDragOver,
    handleDrop
  }
}

export default useClientSideDragAndDrop
