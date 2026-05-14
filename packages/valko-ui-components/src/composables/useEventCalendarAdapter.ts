import type { EventAdapterResult, EventCalendarAdapterOptions, CalendarEvent, EventPlacement, MonthDay, Timezone, ViewMode } from '#valkoui/types/EventCalendar'

const useEventCalendarAdapter = ({ timezones, hourRange }: EventCalendarAdapterOptions): EventAdapterResult => {
  const resolvedHourRange: [number, number] = Array.isArray(hourRange) ? hourRange : [0, 23]
  const [start, end] = resolvedHourRange
  const hourCount = end - start + 1

  const localeOffset = typeof timezones?.locale?.offset === 'number'
    ? timezones.locale.offset
    : -new Date().getTimezoneOffset()

  const getDisplayHours = (tzOffset: number): string[] => {
    const hourDiff = Math.floor((tzOffset - localeOffset) / 60)
    return Array.from({ length: hourCount }, (_, i) => {
      const hour = start + i + hourDiff
      const normalized = ((hour % 24) + 24) % 24
      return String(normalized).padStart(2, '0')
    })
  }

  const locale = {
    ...(timezones?.locale || {}),
    id: timezones?.locale?.id || Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
    offset: localeOffset,
    display: getDisplayHours(localeOffset)
  }

  const extras = (Array.isArray(timezones?.extras) ? timezones.extras : []).map(tz => ({
    ...tz,
    display: getDisplayHours(typeof tz.offset === 'number' ? tz.offset : localeOffset)
  }))

  const isSameDay = (a: Date, b: Date): boolean =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()

  const getMonday = (date: Date): Date => {
    const d = new Date(date)
    const day = d.getDay()
    const diff = day === 0 ? -6 : 1 - day
    d.setDate(d.getDate() + diff)
    d.setHours(0, 0, 0, 0)
    return d
  }

  const getTimezoneLabel = (tz: Timezone): string => {
    if (tz.abbreviation) return tz.abbreviation
    const city = tz.id.split('/').pop()?.replace(/_/g, ' ') || tz.id
    return city.split(' ').map(w => w[0]?.toUpperCase()).join('')
  }

  const getTimezoneFullName = (tz: Timezone): string =>
    tz.name || tz.id.split('/').pop()?.replace(/_/g, ' ') || tz.id

  const WEEKDAY_NAMES = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const formatDayHeader = (date: Date): string =>
    `${WEEKDAY_NAMES[date.getDay()]} ${date.getDate()}`

  const isToday = (date: Date, now: Date): boolean => isSameDay(date, now)

  const getHours = (): number[] =>
    Array.from({ length: hourCount }, (_, i) => start + i)

  const getWeekDays = (date: Date, showWeekends: boolean): Date[] => {
    const monday = getMonday(date)
    const dayCount = showWeekends ? 7 : 5
    return Array.from({ length: dayCount }, (_, i) => {
      const d = new Date(monday)
      d.setDate(monday.getDate() + i)
      return d
    })
  }

  const getEventsForDay = (events: CalendarEvent[], day: Date): CalendarEvent[] =>
    events
      .filter(event => isSameDay(event.start, day))
      .sort((a, b) => a.start.getTime() - b.start.getTime())

  const getMonthGrid = (date: Date, today: Date, showWeekends: boolean): MonthDay[][] => {
    const year = date.getFullYear()
    const month = date.getMonth()

    const firstOfMonth = new Date(year, month, 1)
    const firstDayOfWeek = (firstOfMonth.getDay() + 6) % 7

    const gridStart = new Date(firstOfMonth)
    gridStart.setDate(gridStart.getDate() - firstDayOfWeek)

    const lastOfMonth = new Date(year, month + 1, 0)
    const lastDayOfWeek = (lastOfMonth.getDay() + 6) % 7

    const gridEnd = new Date(lastOfMonth)
    gridEnd.setDate(gridEnd.getDate() + (6 - lastDayOfWeek))

    const weeks: MonthDay[][] = []
    const cursor = new Date(gridStart)

    while (cursor <= gridEnd) {
      const week: MonthDay[] = []
      for (let i = 0; i < 7; i++) {
        const d = new Date(cursor)
        const isCurrentMonth = d.getMonth() === month && d.getFullYear() === year

        if (showWeekends || i < 5) {
          week.push({ date: d, isCurrentMonth, isToday: isSameDay(d, today) })
        }

        cursor.setDate(cursor.getDate() + 1)
      }
      weeks.push(week)
    }

    return weeks
  }

  const getEventPlacements = (events: CalendarEvent[]): Map<string, EventPlacement> => {
    const placements = new Map<string, EventPlacement>()

    for (const event of events) {
      const eventStartHour = event.start.getHours() + event.start.getMinutes() / 60
      const eventEndHour = event.end.getHours() + event.end.getMinutes() / 60

      const clampedStart = Math.max(eventStartHour, start)
      const clampedEnd = Math.min(eventEndHour, end + 1)

      if (clampedStart >= clampedEnd) continue

      const topPercent = ((clampedStart - start + 0.5) / hourCount) * 100
      const bottomPercent = ((clampedEnd - start + 0.5) / hourCount) * 100
      const heightPercent = Math.min(bottomPercent, 100) - topPercent

      const overlapping = events
        .filter(e => e.start < event.end && e.end > event.start)
        .sort((a, b) => a.start.getTime() - b.start.getTime())

      const offsetIdx = overlapping.findIndex(e => e.id === event.id)
      const isOverlapping = overlapping.length > 1

      placements.set(event.id, {
        topPercent,
        heightPercent,
        leftPercent: (offsetIdx / overlapping.length) * 100,
        widthPercent: (1 / overlapping.length) * 100,
        zIndex: 10 + offsetIdx,
        isOverlapping
      })
    }

    return placements
  }

  const getStackedEventPlacements = (events: CalendarEvent[]): Map<string, EventPlacement> => {
    const sorted = [...events].sort((a, b) => {
      const startDiff = a.start.getTime() - b.start.getTime()
      if (startDiff !== 0) return startDiff
      return (b.end.getTime() - b.start.getTime()) - (a.end.getTime() - a.start.getTime())
    })

    const placements = new Map<string, EventPlacement>()

    for (const event of sorted) {
      const eventStartHour = event.start.getHours() + event.start.getMinutes() / 60
      const eventEndHour = event.end.getHours() + event.end.getMinutes() / 60

      const clampedStart = Math.max(eventStartHour, start)
      const clampedEnd = Math.min(eventEndHour, end + 1)

      if (clampedStart >= clampedEnd) continue

      const topPercent = ((clampedStart - start + 0.5) / hourCount) * 100
      const bottomPercent = ((clampedEnd - start + 0.5) / hourCount) * 100
      const heightPercent = Math.min(bottomPercent, 100) - topPercent

      const overlapIndex = sorted
        .filter(e => placements.has(e.id) && e.start < event.end && e.end > event.start)
        .length

      placements.set(event.id, {
        topPercent,
        heightPercent,
        leftPercent: 0,
        widthPercent: 100,
        zIndex: overlapIndex + 1,
        isOverlapping: overlapIndex > 0
      })
    }

    return placements
  }

  const getCurrentTimePosition = (now: Date): number => {
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const currentHour = hours + minutes / 60
    return Math.min(((currentHour - start + 0.5) / hourCount) * 100, 100)
  }

  const isCurrentTimeInRange = (now: Date): boolean => {
    const currentHour = now.getHours() + now.getMinutes() / 60
    return currentHour >= start && currentHour <= end + 1
  }

  const getDateLabel = (date: Date, view: ViewMode, showWeekends: boolean): string => {
    if (view === 'day') {
      return date.toLocaleDateString('en-US', {
        weekday: 'long',
        month: 'long',
        day: 'numeric',
        year: 'numeric'
      })
    }

    if (view === 'week') {
      const monday = getMonday(date)
      const lastDay = new Date(monday)
      lastDay.setDate(monday.getDate() + (showWeekends ? 6 : 4))

      const sameMonth = monday.getMonth() === lastDay.getMonth()
      const sameYear = monday.getFullYear() === lastDay.getFullYear()

      if (sameMonth && sameYear) {
        const month = monday.toLocaleDateString('en-US', { month: 'long' })
        return `${month} ${monday.getDate()} – ${lastDay.getDate()}, ${lastDay.getFullYear()}`
      }

      if (sameYear) {
        const s = monday.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
        const e = lastDay.toLocaleDateString('en-US', { month: 'short', day: 'numeric' })
        return `${s} – ${e}, ${lastDay.getFullYear()}`
      }

      const s = monday.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      const e = lastDay.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })
      return `${s} – ${e}`
    }

    return date.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })
  }

  const getPreviousDate = (date: Date, view: ViewMode): Date => {
    const d = new Date(date)
    if (view === 'day') d.setDate(d.getDate() - 1)
    else if (view === 'week') d.setDate(d.getDate() - 7)
    else d.setMonth(d.getMonth() - 1)
    return d
  }

  const getNextDate = (date: Date, view: ViewMode): Date => {
    const d = new Date(date)
    if (view === 'day') d.setDate(d.getDate() + 1)
    else if (view === 'week') d.setDate(d.getDate() + 7)
    else d.setMonth(d.getMonth() + 1)
    return d
  }

  const snapToQuarterHour = (date: Date): Date => {
    const d = new Date(date)
    const minutes = d.getMinutes()
    d.setMinutes(Math.round(minutes / 15) * 15, 0, 0)
    return d
  }

  const getTimeFromPosition = (positionPercent: number): { hour: number; minute: number } => {
    const rawHour = (positionPercent / 100 * hourCount) + start - 0.5
    const clampedHour = Math.max(start, Math.min(rawHour, end + 1))
    const totalMinutes = Math.round(clampedHour * 60 / 15) * 15
    const hour = Math.floor(totalMinutes / 60)
    const minute = totalMinutes % 60
    return { hour, minute }
  }

  return {
    timezones: { locale, extras },
    hourRange: resolvedHourRange,
    isSameDay,
    getMonday,
    getTimezoneLabel,
    getTimezoneFullName,
    formatDayHeader,
    isToday,
    getHours,
    getWeekDays,
    getEventsForDay,
    getMonthGrid,
    getEventPlacements,
    getStackedEventPlacements,
    getCurrentTimePosition,
    isCurrentTimeInRange,
    getDateLabel,
    getPreviousDate,
    getNextDate,
    snapToQuarterHour,
    getTimeFromPosition
  }
}

export default useEventCalendarAdapter
