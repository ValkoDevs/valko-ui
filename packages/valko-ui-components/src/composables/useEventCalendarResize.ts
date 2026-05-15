import { ref, computed, onUnmounted } from 'vue'
import type { CalendarEvent, ResizeContext, EventResizePayload, EventAdapterResult } from '#valkoui/types/EventCalendar'

const useEventCalendarResize = (
  adapter: EventAdapterResult,
  enabled: () => boolean,
  onResize: (payload: EventResizePayload) => void
) => {
  const isResizing = ref(false)
  const resizingEventId = ref<string | null>(null)
  const resizingEventColor = ref<string | null>(null)
  const ghostTopPercent = ref(0)
  const ghostHeightPercent = ref(0)

  const [start, end] = adapter.hourRange
  const hourCount = end - start + 1
  let resizeCtx: ResizeContext | null = null

  const ghostStyle = computed(() => {
    if (!isResizing.value) return null
    return {
      top: `${ghostTopPercent.value}%`,
      height: `${ghostHeightPercent.value}%`,
      left: '8px',
      right: '8px'
    }
  })

  const getHourFromY = (clientY: number, areaRect: DOMRect): number => {
    const relativeY = clientY - areaRect.top
    const percent = Math.max(0, Math.min(100, (relativeY / areaRect.height) * 100))
    const { hour, minute } = adapter.getTimeFromPosition(percent)
    return hour + minute / 60
  }

  const updateGhost = (clientY: number) => {
    if (!resizeCtx) return
    const rawHour = getHourFromY(clientY, resizeCtx.eventsAreaRect)

    const origStartHour = resizeCtx.originalStart.getHours() + resizeCtx.originalStart.getMinutes() / 60
    const origEndHour = resizeCtx.originalEnd.getHours() + resizeCtx.originalEnd.getMinutes() / 60

    let newStartHour: number
    let newEndHour: number
    const minDuration = 0.25

    if (resizeCtx.edge === 'top') {
      newStartHour = Math.max(start, Math.min(rawHour, origEndHour - minDuration))
      newEndHour = origEndHour
    } else {
      newStartHour = origStartHour
      newEndHour = Math.min(end + 1, Math.max(rawHour, origStartHour + minDuration))
    }

    ghostTopPercent.value = ((newStartHour - start + 0.5) / hourCount) * 100
    ghostHeightPercent.value = ((newEndHour - newStartHour) / hourCount) * 100
  }

  const onMouseMove = (e: MouseEvent) => {
    if (!resizeCtx) return
    e.preventDefault()
    updateGhost(e.clientY)
  }

  const resetState = () => {
    isResizing.value = false
    resizingEventId.value = null
    resizingEventColor.value = null
    ghostTopPercent.value = 0
    ghostHeightPercent.value = 0
    resizeCtx = null
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
  }

  const onMouseUp = (e: MouseEvent) => {
    if (!resizeCtx) return
    const ctx = resizeCtx
    const rawHour = getHourFromY(e.clientY, ctx.eventsAreaRect)

    const origStartHour = ctx.originalStart.getHours() + ctx.originalStart.getMinutes() / 60
    const origEndHour = ctx.originalEnd.getHours() + ctx.originalEnd.getMinutes() / 60
    const minDuration = 0.25

    let newStartHour: number
    let newEndHour: number

    if (ctx.edge === 'top') {
      newStartHour = Math.max(start, Math.min(rawHour, origEndHour - minDuration))
      newEndHour = origEndHour
    } else {
      newStartHour = origStartHour
      newEndHour = Math.min(end + 1, Math.max(rawHour, origStartHour + minDuration))
    }

    const snappedStartMinutes = Math.round((newStartHour % 1) * 60 / 15) * 15
    const snappedEndMinutes = Math.round((newEndHour % 1) * 60 / 15) * 15

    const finalStart = new Date(ctx.dayDate)
    finalStart.setHours(Math.floor(newStartHour), snappedStartMinutes, 0, 0)

    const finalEnd = new Date(ctx.dayDate)
    finalEnd.setHours(Math.floor(newEndHour), snappedEndMinutes, 0, 0)

    if (finalStart.getTime() !== ctx.originalStart.getTime() || finalEnd.getTime() !== ctx.originalEnd.getTime()) {
      onResize({
        event: ctx.event,
        originalStart: ctx.originalStart,
        originalEnd: ctx.originalEnd,
        newStart: finalStart,
        newEnd: finalEnd
      })
    }

    resetState()
  }

  const handleResizeStart = (
    event: CalendarEvent,
    edge: 'top' | 'bottom',
    mouseEvent: MouseEvent,
    eventsAreaEl: HTMLElement,
    dayDate: Date
  ) => {
    if (!enabled()) return
    mouseEvent.preventDefault()
    mouseEvent.stopPropagation()

    const eventsAreaRect = eventsAreaEl.getBoundingClientRect()

    resizeCtx = {
      event,
      edge,
      originalStart: event.start,
      originalEnd: event.end,
      eventsAreaRect,
      dayDate
    }

    isResizing.value = true
    resizingEventId.value = event.id
    resizingEventColor.value = event.color || null

    const startHour = event.start.getHours() + event.start.getMinutes() / 60
    const endHour = event.end.getHours() + event.end.getMinutes() / 60
    ghostTopPercent.value = ((startHour - start + 0.5) / hourCount) * 100
    ghostHeightPercent.value = ((endHour - startHour) / hourCount) * 100

    document.addEventListener('mousemove', onMouseMove)
    document.addEventListener('mouseup', onMouseUp)
  }

  onUnmounted(() => {
    document.removeEventListener('mousemove', onMouseMove)
    document.removeEventListener('mouseup', onMouseUp)
  })

  return {
    isResizing,
    resizingEventId,
    resizingEventColor,
    ghostTopPercent,
    ghostHeightPercent,
    ghostStyle,
    handleResizeStart
  }
}

export default useEventCalendarResize
