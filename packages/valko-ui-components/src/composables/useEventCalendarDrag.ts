import { ref, computed } from 'vue'
import type { CalendarEvent, DragContext, EventDropPayload, EventAdapterResult } from '#valkoui/types/EventCalendar'

const useEventCalendarDrag = (
  adapter: EventAdapterResult,
  enabled: () => boolean,
  onDrop: (payload: EventDropPayload) => void
) => {
  const isDragging = ref(false)
  const draggedEventId = ref<string | null>(null)
  const draggedEventColor = ref<string | null>(null)
  const ghostTopPercent = ref(0)
  const ghostHeightPercent = ref(0)
  const dragOverDayIdx = ref(-1)
  const targetDay = ref<Date | null>(null)

  const [start, end] = adapter.hourRange
  const hourCount = end - start + 1
  let dragCtx: DragContext | null = null

  const ghostStyle = computed(() => {
    if (!isDragging.value) return null
    return {
      top: `${ghostTopPercent.value}%`,
      height: `${ghostHeightPercent.value}%`,
      left: '8px',
      right: '8px'
    }
  })

  const computeGhostFromY = (clientY: number, areaRect: DOMRect) => {
    if (!dragCtx) return

    const relativeY = clientY - areaRect.top
    const percent = Math.max(0, Math.min(100, (relativeY / areaRect.height) * 100))

    const { hour, minute } = adapter.getTimeFromPosition(percent)
    const newStartHour = hour + minute / 60
    const durationHours = dragCtx.durationMs / (1000 * 60 * 60)

    const clampedStartHour = Math.max(start, Math.min(end + 1 - durationHours, newStartHour))
    const clampedEndHour = clampedStartHour + durationHours

    ghostTopPercent.value = ((clampedStartHour - start + 0.5) / hourCount) * 100
    ghostHeightPercent.value = ((clampedEndHour - clampedStartHour) / hourCount) * 100
  }

  const resetState = () => {
    isDragging.value = false
    draggedEventId.value = null
    draggedEventColor.value = null
    ghostTopPercent.value = 0
    ghostHeightPercent.value = 0
    dragOverDayIdx.value = -1
    targetDay.value = null
    dragCtx = null
  }

  const handleDragStart = (event: CalendarEvent, dragEvent: DragEvent, dayDate: Date) => {
    if (!enabled()) {
      dragEvent.preventDefault()
      return
    }

    if (dragEvent.dataTransfer) {
      dragEvent.dataTransfer.effectAllowed = 'move'
      dragEvent.dataTransfer.setData('text/plain', event.id)
      dragEvent.dataTransfer.setDragImage(dragEvent.target as HTMLElement, 0, 0)
    }

    dragCtx = {
      event,
      originalStart: event.start,
      originalEnd: event.end,
      durationMs: event.end.getTime() - event.start.getTime(),
      originDay: dayDate
    }

    isDragging.value = true
    draggedEventId.value = event.id
    draggedEventColor.value = event.color || null
    targetDay.value = dayDate

    const startHour = event.start.getHours() + event.start.getMinutes() / 60
    const endHour = event.end.getHours() + event.end.getMinutes() / 60
    ghostTopPercent.value = ((startHour - start + 0.5) / hourCount) * 100
    ghostHeightPercent.value = ((endHour - startHour) / hourCount) * 100
  }

  const handleDragEnd = () => {
    resetState()
  }

  const handleEventsAreaDragOver = (dragEvent: DragEvent, dayDate: Date, dayIdx?: number) => {
    if (!dragCtx) return
    dragEvent.preventDefault()

    targetDay.value = dayDate
    if (dayIdx !== undefined) dragOverDayIdx.value = dayIdx

    const areaRect = (dragEvent.currentTarget as HTMLElement).getBoundingClientRect()
    computeGhostFromY(dragEvent.clientY, areaRect)
  }

  const handleEventsAreaDrop = (dragEvent: DragEvent, dayDate: Date) => {
    dragEvent.preventDefault()
    if (!dragCtx) return

    const ctx = dragCtx
    const areaRect = (dragEvent.currentTarget as HTMLElement).getBoundingClientRect()
    const relativeY = dragEvent.clientY - areaRect.top
    const percent = Math.max(0, Math.min(100, (relativeY / areaRect.height) * 100))
    const { hour, minute } = adapter.getTimeFromPosition(percent)

    const rawStart = new Date(dayDate)
    rawStart.setHours(hour, minute, 0, 0)

    const snappedStart = adapter.snapToQuarterHour(rawStart)
    const durationHours = ctx.durationMs / (1000 * 60 * 60)
    const maxStartHour = end + 1 - durationHours
    const clampedStartHour = Math.max(start, Math.min(maxStartHour, snappedStart.getHours() + snappedStart.getMinutes() / 60))

    const finalStart = new Date(dayDate)
    finalStart.setHours(Math.floor(clampedStartHour), Math.round((clampedStartHour % 1) * 60), 0, 0)

    const finalEnd = new Date(finalStart.getTime() + ctx.durationMs)

    const payload: EventDropPayload = {
      event: ctx.event,
      originalStart: ctx.originalStart,
      originalEnd: ctx.originalEnd,
      newStart: finalStart,
      newEnd: finalEnd
    }

    resetState()
    onDrop(payload)
  }

  const handleMonthCellDragOver = (dragEvent: DragEvent, dayDate: Date) => {
    if (!dragCtx) return
    dragEvent.preventDefault()
    targetDay.value = dayDate
  }

  const handleMonthCellDrop = (dragEvent: DragEvent, dayDate: Date) => {
    dragEvent.preventDefault()
    if (!dragCtx) return

    const ctx = dragCtx
    const origin = ctx.originDay
    const target = dayDate

    if (!adapter.isSameDay(target, origin)) {
      const originMidnight = new Date(origin)
      originMidnight.setHours(0, 0, 0, 0)
      const targetMidnight = new Date(target)
      targetMidnight.setHours(0, 0, 0, 0)
      const dayDiff = Math.round((targetMidnight.getTime() - originMidnight.getTime()) / 86400000)

      const newStart = new Date(ctx.event.start)
      newStart.setDate(newStart.getDate() + dayDiff)
      const newEnd = new Date(ctx.event.end)
      newEnd.setDate(newEnd.getDate() + dayDiff)

      const payload: EventDropPayload = {
        event: ctx.event,
        originalStart: ctx.originalStart,
        originalEnd: ctx.originalEnd,
        newStart,
        newEnd
      }

      resetState()
      onDrop(payload)
    } else {
      resetState()
    }
  }

  const handleDragLeave = () => {
    dragOverDayIdx.value = -1
    targetDay.value = null
  }

  return {
    isDragging,
    draggedEventId,
    draggedEventColor,
    dragOverDayIdx,
    targetDay,
    ghostTopPercent,
    ghostHeightPercent,
    ghostStyle,
    handleDragStart,
    handleDragEnd,
    handleEventsAreaDragOver,
    handleEventsAreaDrop,
    handleMonthCellDragOver,
    handleMonthCellDrop,
    handleDragLeave
  }
}

export default useEventCalendarDrag
