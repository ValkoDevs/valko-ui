import type { EventAdapterResult, EventCalendarAdapterOptions } from '#valkoui/types/EventCalendar'

const useEventCalendarAdapter = ({ timezones, hourRange }: EventCalendarAdapterOptions): EventAdapterResult => {
  const resolvedHourRange: [number, number] = Array.isArray(hourRange) ? hourRange : [8, 18]
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

  return {
    timezones: { locale, extras },
    hourRange: resolvedHourRange
  }
}

export default useEventCalendarAdapter
