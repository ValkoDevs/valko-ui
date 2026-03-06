import { type EventAdapterResult, EventCalendarAdapter } from '#valkoui/types/EventCalendar'
import { reactive } from 'vue'

const useEventCalendarAdapter = ({ timezones, hourRange }: EventCalendarAdapter): EventAdapterResult => {
  const result = reactive<EventAdapterResult>({
    timezones: {
      locale: {
        ...(timezones?.locale || {}),
        id: timezones?.locale?.id || Intl.DateTimeFormat().resolvedOptions().timeZone || 'UTC',
        offset: typeof timezones?.locale?.offset === 'number' ? timezones?.locale?.offset : -new Date().getTimezoneOffset(),
        display: []
      },
      extras: Array.isArray(timezones?.extras) ? timezones.extras : []
    },
    hourRange: Array.isArray(hourRange) ? hourRange : [8, 18]
  })

  const getDisplayHours = (tz: { offset?: number }, baseOffset: number, range: [number, number]) => {
    const tzOffset = typeof tz.offset === 'number' ? tz.offset : baseOffset
    const [start, end] = range
    const hourDiff = Math.floor((tzOffset - baseOffset) / 60)
    return Array.from({ length: end - start }, (_, i) => {
      const hour = start + i + hourDiff
      return hour < 0 ? String(24 + hour).padStart(2, '0') : String(hour % 24).padStart(2, '0')
    })
  }

  result.timezones.locale.display = getDisplayHours(result.timezones.locale, result.timezones.locale.offset as number, result.hourRange as [number, number])

  result.timezones.extras.length = 0
  for (const tz of Array.isArray(timezones?.extras) ? timezones.extras : []) {
    result.timezones.extras.push({
      ...tz,
      display: getDisplayHours(tz, result.timezones.locale.offset as number, result.hourRange as [number, number])
    })
  }

  return result
}

export default useEventCalendarAdapter
