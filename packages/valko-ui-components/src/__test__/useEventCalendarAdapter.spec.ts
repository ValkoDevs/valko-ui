import useEventCalendarAdapter from '#valkoui/composables/useEventCalendarAdapter'
import type { CalendarEvent } from '#valkoui/types/EventCalendar'

const today = new Date(2025, 4, 15, 0, 0, 0, 0)

const sampleEvents: CalendarEvent[] = [
  { id: '1', start: new Date(2025, 4, 15, 9, 0), end: new Date(2025, 4, 15, 10, 0), title: 'Meeting' },
  { id: '2', start: new Date(2025, 4, 15, 9, 30), end: new Date(2025, 4, 15, 11, 0), title: 'Workshop' },
  { id: '3', start: new Date(2025, 4, 16, 14, 0), end: new Date(2025, 4, 16, 15, 0), title: 'Call' }
]

describe('useEventCalendarAdapter composable', () => {
  describe('Default configuration', () => {
    it('should default hourRange to [0, 23] when none is provided', () => {
      const adapter = useEventCalendarAdapter({})
      expect(adapter.hourRange).toEqual([0, 23])
    })

    it('should default locale timezone id to Intl.DateTimeFormat resolved timezone', () => {
      const adapter = useEventCalendarAdapter({})
      expect(adapter.timezones.locale.id).toBe(Intl.DateTimeFormat().resolvedOptions().timeZone)
    })

    it('should have display hours array with length matching hourCount', () => {
      const adapter = useEventCalendarAdapter({})
      expect(adapter.timezones.locale.display).toHaveLength(24)
    })
  })

  describe('Custom hour range', () => {
    it('should return correct getHours() array for custom hourRange [8, 17]', () => {
      const adapter = useEventCalendarAdapter({ hourRange: [8, 17] })
      expect(adapter.getHours()).toEqual([8, 9, 10, 11, 12, 13, 14, 15, 16, 17])
    })

    it('should store the custom hourRange correctly', () => {
      const adapter = useEventCalendarAdapter({ hourRange: [8, 17] })
      expect(adapter.hourRange).toEqual([8, 17])
    })
  })

  describe('isSameDay', () => {
    const { isSameDay } = useEventCalendarAdapter({})

    it('should return true for same day', () => {
      expect(isSameDay(new Date(2025, 4, 15, 9, 0), new Date(2025, 4, 15, 22, 0))).toBe(true)
    })

    it('should return false for different days', () => {
      expect(isSameDay(new Date(2025, 4, 15), new Date(2025, 4, 16))).toBe(false)
    })

    it('should return false for same day different month', () => {
      expect(isSameDay(new Date(2025, 4, 15), new Date(2025, 3, 15))).toBe(false)
    })
  })

  describe('getMonday', () => {
    const { getMonday } = useEventCalendarAdapter({})

    it('should return the Monday of the week for a Wednesday', () => {
      const wednesday = new Date(2025, 4, 14)
      const monday = getMonday(wednesday)
      expect(monday.getDay()).toBe(1)
      expect(monday.getDate()).toBe(12)
    })

    it('should return the same day when given a Monday', () => {
      const monday = new Date(2025, 4, 12)
      const result = getMonday(monday)
      expect(result.getDay()).toBe(1)
      expect(result.getDate()).toBe(12)
    })

    it('should return the previous Monday when given a Sunday', () => {
      const sunday = new Date(2025, 4, 18)
      const monday = getMonday(sunday)
      expect(monday.getDay()).toBe(1)
      expect(monday.getDate()).toBe(12)
    })
  })

  describe('getHours', () => {
    it('should return [0, 1, ..., 23] for default range', () => {
      const { getHours } = useEventCalendarAdapter({})
      const expected = Array.from({ length: 24 }, (_, i) => i)
      expect(getHours()).toEqual(expected)
    })

    it('should return [9, 10, ..., 17] for custom range [9, 17]', () => {
      const { getHours } = useEventCalendarAdapter({ hourRange: [9, 17] })
      expect(getHours()).toEqual([9, 10, 11, 12, 13, 14, 15, 16, 17])
    })
  })

  describe('getWeekDays', () => {
    const { getWeekDays } = useEventCalendarAdapter({})

    it('should return 7 days starting from Monday when showWeekends is true', () => {
      const days = getWeekDays(today, true)
      expect(days).toHaveLength(7)
      expect(days[0].getDay()).toBe(1)
    })

    it('should return 5 days (Mon-Fri) when showWeekends is false', () => {
      const days = getWeekDays(today, false)
      expect(days).toHaveLength(5)
      expect(days[0].getDay()).toBe(1)
      expect(days[4].getDay()).toBe(5)
    })
  })

  describe('getEventsForDay', () => {
    const { getEventsForDay } = useEventCalendarAdapter({})

    it('should return events matching the day sorted by start time', () => {
      const result = getEventsForDay(sampleEvents, today)
      expect(result).toHaveLength(2)
      expect(result[0].id).toBe('1')
      expect(result[1].id).toBe('2')
    })

    it('should return empty array for a day with no events', () => {
      const result = getEventsForDay(sampleEvents, new Date(2025, 4, 20))
      expect(result).toHaveLength(0)
    })

    it('should filter out events on different days', () => {
      const result = getEventsForDay(sampleEvents, today)
      const ids = result.map(e => e.id)
      expect(ids).not.toContain('3')
    })
  })

  describe('getMonthGrid', () => {
    const { getMonthGrid } = useEventCalendarAdapter({})

    it('should return array of weeks each with 7 days when showWeekends is true', () => {
      const grid = getMonthGrid(today, today, true)
      expect(grid.length).toBeGreaterThan(0)
      grid.forEach(week => expect(week).toHaveLength(7))
    })

    it('should return weeks with 5 days when showWeekends is false', () => {
      const grid = getMonthGrid(today, today, false)
      expect(grid.length).toBeGreaterThan(0)
      grid.forEach(week => expect(week).toHaveLength(5))
    })

    it('should set isCurrentMonth correctly', () => {
      const grid = getMonthGrid(today, today, true)
      const mayDays = grid.flat().filter(d => d.isCurrentMonth)
      mayDays.forEach(d => expect(d.date.getMonth()).toBe(4))
    })

    it('should set isToday correctly', () => {
      const grid = getMonthGrid(today, today, true)
      const todayEntries = grid.flat().filter(d => d.isToday)
      expect(todayEntries).toHaveLength(1)
      expect(todayEntries[0].date.getDate()).toBe(15)
    })
  })

  describe('getEventPlacements', () => {
    const { getEventPlacements } = useEventCalendarAdapter({})
    const dayEvents = sampleEvents.filter(e => e.start.getDate() === 15)

    it('should calculate topPercent and heightPercent for a single event', () => {
      const single = [sampleEvents[0]]
      const placements = getEventPlacements(single)
      const p = placements.get('1')!
      expect(p.topPercent).toBeCloseTo(((9 + 0.5) / 24) * 100)
      expect(p.heightPercent).toBeCloseTo(((10 + 0.5) / 24) * 100 - ((9 + 0.5) / 24) * 100)
    })

    it('should split columns for two overlapping events', () => {
      const placements = getEventPlacements(dayEvents)
      const p1 = placements.get('1')!
      const p2 = placements.get('2')!
      expect(p1.leftPercent).toBeCloseTo(0)
      expect(p1.widthPercent).toBeCloseTo(50)
      expect(p2.leftPercent).toBeCloseTo(50)
      expect(p2.widthPercent).toBeCloseTo(50)
    })

    it('should skip events outside the hourRange', () => {
      const { getEventPlacements: getPlacementsNarrow } = useEventCalendarAdapter({ hourRange: [9, 11] })
      const outOfRange: CalendarEvent[] = [
        { id: 'x', start: new Date(2025, 4, 15, 5, 0), end: new Date(2025, 4, 15, 6, 0), title: 'Early' }
      ]
      const placements = getPlacementsNarrow(outOfRange)
      expect(placements.has('x')).toBe(false)
    })
  })

  describe('getStackedEventPlacements', () => {
    const { getStackedEventPlacements } = useEventCalendarAdapter({})
    const dayEvents = sampleEvents.filter(e => e.start.getDate() === 15)

    it('should set zIndex=1 and isOverlapping=false for a single non-overlapping event', () => {
      const single = [sampleEvents[0]]
      const placements = getStackedEventPlacements(single)
      const p = placements.get('1')!
      expect(p.zIndex).toBe(1)
      expect(p.isOverlapping).toBe(false)
    })

    it('should set higher zIndex and isOverlapping=true for second overlapping event', () => {
      const placements = getStackedEventPlacements(dayEvents)
      const p2 = placements.get('2')!
      expect(p2.zIndex).toBeGreaterThan(1)
      expect(p2.isOverlapping).toBe(true)
    })
  })

  describe('getCurrentTimePosition', () => {
    const { getCurrentTimePosition } = useEventCalendarAdapter({})

    it('should return correct percentage within default range', () => {
      const now = new Date(2025, 4, 15, 10, 30)
      const currentHour = 10.5
      const expected = ((currentHour - 0 + 0.5) / 24) * 100
      expect(getCurrentTimePosition(now)).toBeCloseTo(expected)
    })

    it('should clamp to 100 max', () => {
      const { getCurrentTimePosition: getPos } = useEventCalendarAdapter({ hourRange: [0, 2] })
      const now = new Date(2025, 4, 15, 23, 59)
      expect(getPos(now)).toBe(100)
    })
  })

  describe('isCurrentTimeInRange', () => {
    it('should return true when current time is in range', () => {
      const { isCurrentTimeInRange } = useEventCalendarAdapter({ hourRange: [8, 17] })
      const now = new Date(2025, 4, 15, 10, 0)
      expect(isCurrentTimeInRange(now)).toBe(true)
    })

    it('should return false when current time is out of range', () => {
      const { isCurrentTimeInRange } = useEventCalendarAdapter({ hourRange: [9, 17] })
      const now = new Date(2025, 4, 15, 8, 0)
      expect(isCurrentTimeInRange(now)).toBe(false)
    })
  })

  describe('getDateLabel', () => {
    const { getDateLabel } = useEventCalendarAdapter({})

    it('should return full date string for day view', () => {
      const label = getDateLabel(today, 'day', true)
      expect(label).toBe('Thursday, May 15, 2025')
    })

    it('should return week range string for week view same month', () => {
      const label = getDateLabel(today, 'week', true)
      expect(label).toBe('May 12 – 18, 2025')
    })

    it('should return month and year for month view', () => {
      const label = getDateLabel(today, 'month', true)
      expect(label).toBe('May 2025')
    })
  })

  describe('getPreviousDate', () => {
    const { getPreviousDate } = useEventCalendarAdapter({})

    it('should subtract 1 day for day view', () => {
      const result = getPreviousDate(today, 'day')
      expect(result.getDate()).toBe(14)
    })

    it('should subtract 7 days for week view', () => {
      const result = getPreviousDate(today, 'week')
      expect(result.getDate()).toBe(8)
    })

    it('should subtract 1 month for month view', () => {
      const result = getPreviousDate(today, 'month')
      expect(result.getMonth()).toBe(3)
    })
  })

  describe('getNextDate', () => {
    const { getNextDate } = useEventCalendarAdapter({})

    it('should add 1 day for day view', () => {
      const result = getNextDate(today, 'day')
      expect(result.getDate()).toBe(16)
    })

    it('should add 7 days for week view', () => {
      const result = getNextDate(today, 'week')
      expect(result.getDate()).toBe(22)
    })

    it('should add 1 month for month view', () => {
      const result = getNextDate(today, 'month')
      expect(result.getMonth()).toBe(5)
    })
  })

  describe('snapToQuarterHour', () => {
    const { snapToQuarterHour } = useEventCalendarAdapter({})

    it('should snap 10:07 to 10:00', () => {
      const result = snapToQuarterHour(new Date(2025, 4, 15, 10, 7))
      expect(result.getHours()).toBe(10)
      expect(result.getMinutes()).toBe(0)
    })

    it('should snap 10:08 to 10:15', () => {
      const result = snapToQuarterHour(new Date(2025, 4, 15, 10, 8))
      expect(result.getHours()).toBe(10)
      expect(result.getMinutes()).toBe(15)
    })

    it('should snap 10:22 to 10:15', () => {
      const result = snapToQuarterHour(new Date(2025, 4, 15, 10, 22))
      expect(result.getHours()).toBe(10)
      expect(result.getMinutes()).toBe(15)
    })

    it('should snap 10:23 to 10:30', () => {
      const result = snapToQuarterHour(new Date(2025, 4, 15, 10, 23))
      expect(result.getHours()).toBe(10)
      expect(result.getMinutes()).toBe(30)
    })
  })

  describe('getTimeFromPosition', () => {
    it('should return near hour 0 for 0% with default range', () => {
      const { getTimeFromPosition } = useEventCalendarAdapter({})
      const result = getTimeFromPosition(0)
      expect(result.hour).toBe(0)
      expect(result.minute).toBe(0)
    })

    it('should return around hour 12-13 for 50% with range [8, 17]', () => {
      const { getTimeFromPosition } = useEventCalendarAdapter({ hourRange: [8, 17] })
      const result = getTimeFromPosition(50)
      expect(result.hour).toBeGreaterThanOrEqual(12)
      expect(result.hour).toBeLessThanOrEqual(13)
    })
  })

  describe('Timezone handling', () => {
    it('should compute display hours for extra timezones', () => {
      const adapter = useEventCalendarAdapter({
        timezones: {
          locale: { id: 'America/New_York', offset: -240 },
          extras: [{ id: 'Europe/London', offset: 60 }]
        }
      })
      expect(adapter.timezones.extras[0].display).toHaveLength(24)
    })

    it('getTimezoneLabel should return abbreviation if present', () => {
      const { getTimezoneLabel } = useEventCalendarAdapter({})
      expect(getTimezoneLabel({ id: 'America/New_York', offset: -300, abbreviation: 'EST' })).toBe('EST')
    })

    it('getTimezoneLabel should return first letters of city name if no abbreviation', () => {
      const { getTimezoneLabel } = useEventCalendarAdapter({})
      expect(getTimezoneLabel({ id: 'America/New_York', offset: -300 })).toBe('NY')
    })

    it('getTimezoneFullName should return name if present', () => {
      const { getTimezoneFullName } = useEventCalendarAdapter({})
      expect(getTimezoneFullName({ id: 'America/New_York', offset: -300, name: 'Eastern Time' })).toBe('Eastern Time')
    })

    it('getTimezoneFullName should return city from ID if no name', () => {
      const { getTimezoneFullName } = useEventCalendarAdapter({})
      expect(getTimezoneFullName({ id: 'America/New_York', offset: -300 })).toBe('New York')
    })
  })

  describe('formatDayHeader', () => {
    it('should return day header in "Mon 15" format', () => {
      const { formatDayHeader } = useEventCalendarAdapter({})
      expect(formatDayHeader(today)).toBe('Thu 15')
    })
  })

  describe('isToday', () => {
    const { isToday } = useEventCalendarAdapter({})

    it('should return true when dates match', () => {
      expect(isToday(new Date(2025, 4, 15, 10, 0), today)).toBe(true)
    })

    it('should return false when dates do not match', () => {
      expect(isToday(new Date(2025, 4, 16), today)).toBe(false)
    })
  })

  describe('getDateLabel week view cross-month same year', () => {
    it('should return cross-month format when week spans two months in same year', () => {
      const { getDateLabel } = useEventCalendarAdapter({})
      const label = getDateLabel(new Date(2025, 0, 30), 'week', true)
      expect(label).toContain('–')
      expect(label).toContain('Jan')
      expect(label).toContain('Feb')
    })
  })

  describe('getDateLabel week view cross-year', () => {
    it('should return cross-year format when week spans two years', () => {
      const { getDateLabel } = useEventCalendarAdapter({})
      const label = getDateLabel(new Date(2024, 11, 31), 'week', true)
      expect(label).toContain('–')
      expect(label).toContain('2024')
      expect(label).toContain('2025')
    })
  })

  describe('getDateLabel week view without weekends', () => {
    it('should use 4-day offset when showWeekends is false', () => {
      const { getDateLabel } = useEventCalendarAdapter({})
      const label = getDateLabel(new Date(2025, 4, 15), 'week', false)
      expect(label).toContain('May')
      expect(label).toContain('12')
      expect(label).toContain('16')
    })
  })

  describe('getStackedEventPlacements outside hourRange', () => {
    it('should skip events completely outside the hourRange', () => {
      const { getStackedEventPlacements } = useEventCalendarAdapter({ hourRange: [9, 17] })
      const events: CalendarEvent[] = [
        { id: 'early', start: new Date(2025, 4, 15, 5, 0), end: new Date(2025, 4, 15, 6, 0), title: 'Early' }
      ]
      const placements = getStackedEventPlacements(events)
      expect(placements.has('early')).toBe(false)
    })
  })

  describe('getStackedEventPlacements sort tiebreaker', () => {
    it('should sort longer-duration events first when start times are equal', () => {
      const { getStackedEventPlacements } = useEventCalendarAdapter({})
      const events: CalendarEvent[] = [
        { id: 'short', start: new Date(2025, 4, 15, 9, 0), end: new Date(2025, 4, 15, 10, 0), title: 'Short' },
        { id: 'long', start: new Date(2025, 4, 15, 9, 0), end: new Date(2025, 4, 15, 12, 0), title: 'Long' }
      ]
      const placements = getStackedEventPlacements(events)
      const pLong = placements.get('long')!
      const pShort = placements.get('short')!
      expect(pLong.zIndex).toBe(1)
      expect(pShort.zIndex).toBe(2)
    })
  })

  describe('getTimeFromPosition boundary values', () => {
    it('should clamp to start hour for 0% position', () => {
      const { getTimeFromPosition } = useEventCalendarAdapter({ hourRange: [8, 17] })
      const result = getTimeFromPosition(0)
      expect(result.hour).toBe(8)
      expect(result.minute).toBe(0)
    })

    it('should clamp to end hour for 100% position', () => {
      const { getTimeFromPosition } = useEventCalendarAdapter({ hourRange: [8, 17] })
      const result = getTimeFromPosition(100)
      expect(result.hour).toBe(17)
      expect(result.minute).toBe(30)
    })
  })

  describe('isCurrentTimeInRange boundary values', () => {
    it('should return true when current hour equals start', () => {
      const { isCurrentTimeInRange } = useEventCalendarAdapter({ hourRange: [8, 17] })
      expect(isCurrentTimeInRange(new Date(2025, 4, 15, 8, 0))).toBe(true)
    })

    it('should return true when current hour equals end+1', () => {
      const { isCurrentTimeInRange } = useEventCalendarAdapter({ hourRange: [8, 17] })
      expect(isCurrentTimeInRange(new Date(2025, 4, 15, 18, 0))).toBe(true)
    })

    it('should return false when current hour is just past end+1', () => {
      const { isCurrentTimeInRange } = useEventCalendarAdapter({ hourRange: [8, 17] })
      expect(isCurrentTimeInRange(new Date(2025, 4, 15, 18, 1))).toBe(false)
    })
  })

  describe('snapToQuarterHour rounding to next hour', () => {
    it('should snap 10:53 to 11:00', () => {
      const { snapToQuarterHour } = useEventCalendarAdapter({})
      const result = snapToQuarterHour(new Date(2025, 4, 15, 10, 53))
      expect(result.getHours()).toBe(11)
      expect(result.getMinutes()).toBe(0)
    })
  })

  describe('Timezone locale offset as number', () => {
    it('should use provided locale offset instead of system offset', () => {
      const adapter = useEventCalendarAdapter({
        timezones: { locale: { id: 'Custom/Zone', offset: 120 } }
      })
      expect(adapter.timezones.locale.offset).toBe(120)
    })
  })

  describe('Timezone extra with undefined offset', () => {
    it('should fallback to localeOffset when extra timezone offset is undefined', () => {
      const adapter = useEventCalendarAdapter({
        timezones: {
          locale: { id: 'UTC', offset: 0 },
          extras: [{ id: 'Unknown/Zone' }]
        }
      })
      expect(adapter.timezones.extras[0].display).toEqual(adapter.timezones.locale.display)
    })
  })

  describe('getTimezoneLabel single-segment id', () => {
    it('should return first letter for single-segment id like UTC', () => {
      const { getTimezoneLabel } = useEventCalendarAdapter({})
      expect(getTimezoneLabel({ id: 'UTC' })).toBe('U')
    })
  })

  describe('getTimezoneFullName with underscore in id', () => {
    it('should replace underscores with spaces', () => {
      const { getTimezoneFullName } = useEventCalendarAdapter({})
      expect(getTimezoneFullName({ id: 'America/Los_Angeles' })).toBe('Los Angeles')
    })
  })

  describe('Timezone locale id fallback to Intl', () => {
    it('should use provided locale id when given', () => {
      const adapter = useEventCalendarAdapter({
        timezones: { locale: { id: 'Europe/London', offset: 0 } }
      })
      expect(adapter.timezones.locale.id).toBe('Europe/London')
    })
  })

  describe('Timezone extras not an array', () => {
    it('should default extras to empty array when not provided', () => {
      const adapter = useEventCalendarAdapter({
        timezones: { locale: { id: 'UTC', offset: 0 } }
      })
      expect(adapter.timezones.extras).toEqual([])
    })
  })

  describe('Timezone locale not provided', () => {
    it('should use empty spread when timezones.locale is undefined', () => {
      const adapter = useEventCalendarAdapter({ timezones: {} })
      expect(adapter.timezones.locale.id).toBeTruthy()
    })
  })
})
