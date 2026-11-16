import { CalendarDate } from '@internationalized/date'
import useDateAdapter from '#valkoui/composables/useDateAdapter'
import type { CalendarAdapter } from '#valkoui/types/Calendar'

describe('useDateAdapter composable', () => {
  const mockDate = new Date(2024, 9, 18)

  beforeAll(() => {
    vi.useFakeTimers().setSystemTime(mockDate.getTime())
  })

  afterAll(() => {
    vi.useRealTimers()
  })

  describe('model', () => {
    it('should return model as a DateValue', () => {
      const [ model ] = useDateAdapter({ format: 'YYYY-MM-DD' })
      expect(model.value).toEqual(new CalendarDate(2024, 10, 18))
    })
  })

  describe('parsedModel', () => {
    it('should fallback to default format YYYY-MM-DD if format is missing', () => {
      const [, parsedModel] = useDateAdapter({})
      const today = new Date()
      const expected = [
        today.getFullYear(),
        String(today.getMonth() + 1).padStart(2, '0'),
        String(today.getDate()).padStart(2, '0')
      ].join('-')

      expect(parsedModel.value).toBe(expected)
    })

    it('should format the year as YYYY (full year)', () => {
      const [, parsedModel] = useDateAdapter({ format: 'YYYY' })
      const currentYear = new Date().getFullYear()
      expect(parsedModel.value).toBe(`${currentYear}`)
    })

    it('should format the year as YY (last two digits)', () => {
      const [, parsedModel] = useDateAdapter({ format: 'YY' })
      const currentYear = new Date().getFullYear().toString().slice(-2)
      expect(parsedModel.value).toBe(currentYear)
    })

    it('should format the month as MMMM (full month name)', () => {
      const [, parsedModel] = useDateAdapter({ format: 'MMMM' })
      const expectedMonth = new Date().toLocaleDateString(undefined, { month: 'long' })
      expect(parsedModel.value).toBe(expectedMonth)
    })

    it('should format the month as MMM (abbreviated month name)', () => {
      const [, parsedModel] = useDateAdapter({ format: 'MMM' })
      const expectedMonth = new Date().toLocaleDateString(undefined, { month: 'short' })
      expect(parsedModel.value).toBe(expectedMonth)
    })

    it('should format the month as MM (two-digit month)', () => {
      const [, parsedModel] = useDateAdapter({ format: 'MM' })
      const expectedMonth = `${(new Date().getMonth() + 1).toString().padStart(2, '0')}`
      expect(parsedModel.value).toBe(expectedMonth)
    })

    it('should format the month as M (single-digit month)', () => {
      const [, parsedModel] = useDateAdapter({ format: 'M' })
      const expectedMonth = `${new Date().getMonth() + 1}`
      expect(parsedModel.value).toBe(expectedMonth)
    })

    it('should format the day as DD (two-digit day)', () => {
      const [, parsedModel] = useDateAdapter({ format: 'DD' })
      const expectedDay = `${new Date().getDate().toString().padStart(2, '0')}`
      expect(parsedModel.value).toBe(expectedDay)
    })

    it('should format the day as D (single-digit day)', () => {
      const [, parsedModel] = useDateAdapter({ format: 'D' })
      const expectedDay = `${new Date().getDate()}`
      expect(parsedModel.value).toBe(expectedDay)
    })

    it('should format the day as dddd (full weekday name)', () => {
      const [, parsedModel] = useDateAdapter({ format: 'dddd' })
      const expectedWeekday = new Date().toLocaleDateString(undefined, { weekday: 'long' })
      expect(parsedModel.value).toBe(expectedWeekday)
    })

    it('should format the day as ddd (abbreviated weekday name)', () => {
      const [, parsedModel] = useDateAdapter({ format: 'ddd' })
      const expectedWeekday = new Date().toLocaleDateString(undefined, { weekday: 'short' })
      expect(parsedModel.value).toBe(expectedWeekday)
    })

    it('should format the day as dd (narrow weekday)', () => {
      const [, parsedModel] = useDateAdapter({ format: 'dd' })
      const expectedWeekday = new Date().toLocaleDateString(undefined, { weekday: 'narrow' })
      expect(parsedModel.value).toBe(expectedWeekday)
    })
  })

  describe('formattedDates', () => {
    it('should default selected to today for day', () => {
      const [, , adapter] = useDateAdapter({})
      const today = new Date()
      expect(adapter.formattedDates.value.selected.day).toBe(today.getDate())
    })
    it('should default selected to today for month', () => {
      const [, , adapter] = useDateAdapter({})
      const today = new Date()
      expect(adapter.formattedDates.value.selected.month).toBe(today.getMonth())
    })
    it('should default selected to today for year', () => {
      const [, , adapter] = useDateAdapter({})
      const today = new Date()
      expect(adapter.formattedDates.value.selected.year).toBe(today.getFullYear())
    })
    it('should use model for selected when set', () => {
      const [model, , adapter] = useDateAdapter({})
      model.value = new CalendarDate(2022, 6, 1)
      expect(adapter.formattedDates.value.selected).toMatchObject({
        day: 1,
        month: 5,
        year: 2022,
        lastDayOfMonth: 30,
        firstWeekDay: 3
      })
    })
    it('should use tempDate for display once navigation starts', () => {
      const [, , adapter] = useDateAdapter({})
      adapter.onSelectYear(2022)
      adapter.onSelectMonth(5)
      expect(adapter.formattedDates.value.display).toMatchObject({
        day: 1,
        month: 5,
        year: 2022
      })
      expect(adapter.formattedDates.value.selected.year).toBe(2024)
    })
  })

  describe('getWeekdays', () => {
    it('should return correct weekdays based on locale', () => {
      const [, , adapter] = useDateAdapter({ locale: 'en-US', format: 'YYYY-MM-DD' })
      const weekdays = adapter.getWeekdays()
      expect(weekdays).toEqual(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])
    })
  })

  describe('getMonths', () => {
    it('should return correct months based on locale', () => {
      const [, , adapter] = useDateAdapter({ locale: 'en-US', format: 'YYYY-MM-DD' })
      const months = adapter.getMonths()
      expect(months).toEqual([
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
      ])
    })
  })

  describe('onSelectDay', () => {
    describe('with YYYY-MM-DD format and known model', () => {
      let model
      let adapter: CalendarAdapter

      beforeEach(() => {
        [model, , adapter] = useDateAdapter({ format: 'YYYY-MM-DD' })
        model.value = new CalendarDate(2022, 6, 1)
      })

      it('should set the selected day from tempDate', () => {
        adapter.onSelectYear(2022)
        adapter.onSelectMonth(5)
        adapter.onSelectDay(10)
        expect(adapter.formattedDates.value.display.day).toBe(10)
      })

      it('should set the selected month from tempDate', () => {
        adapter.onSelectYear(2022)
        adapter.onSelectMonth(5)
        adapter.onSelectDay(10)
        expect(adapter.formattedDates.value.display.month).toBe(5)
      })

      it('should set the selected year from tempDate', () => {
        adapter.onSelectYear(2022)
        adapter.onSelectMonth(5)
        adapter.onSelectDay(10)
        expect(adapter.formattedDates.value.display.year).toBe(2022)
      })

      it('should return the resulting DateValue', () => {
        adapter.onSelectYear(2022)
        adapter.onSelectMonth(5)
        const result = adapter.onSelectDay(10)
        expect(result).toEqual(new CalendarDate(2022, 6, 10))
      })
    })

    it('should set year to default when format is MM-DD', () => {
      const mockYear = new Date().getFullYear()
      const [model, , adapter] = useDateAdapter({ format: 'MM-DD' })
      model.value = new CalendarDate(mockYear, 6, 1)
      adapter.onSelectMonth(5)
      adapter.onSelectDay(10)
      expect(adapter.formattedDates.value.display.year).toBe(mockYear)
    })

    it('should use the actual year if format is DD and tempDate is not set', () => {
      const [, , adapter] = useDateAdapter({ format: 'DD' })
      adapter.onSelectDay(15)
      expect(adapter.formattedDates.value.display.year).toBe(new Date().getFullYear())
    })
  })

  describe('onSelectMonth', () => {
    describe('with YYYY-MM format and known model', () => {
      let model
      let adapter: CalendarAdapter

      beforeEach(() => {
        [model, , adapter] = useDateAdapter({ format: 'YYYY-MM' })
        model.value = new CalendarDate(2022, 8, 1)
      })

      it('should set the selected year from tempDate', () => {
        adapter.onSelectYear(2022)
        adapter.onSelectMonth(7)
        expect(adapter.formattedDates.value.display.year).toBe(2022)
      })

      it('should set the selected month from tempDate', () => {
        adapter.onSelectYear(2022)
        adapter.onSelectMonth(7)
        expect(adapter.formattedDates.value.display.month).toBe(7)
      })

      it('should set the year after selecting year and month', () => {
        adapter.onSelectYear(2022)
        adapter.onSelectMonth(7)
        expect(adapter.formattedDates.value.display.year).toBe(2022)
      })
    })

    it('should set year to default when format is MM', () => {
      const mockYear = new Date().getFullYear()
      const [model, , adapter] = useDateAdapter({ format: 'MM' })
      model.value = new CalendarDate(mockYear, 8, 1)
      adapter.onSelectMonth(7)
      expect(adapter.formattedDates.value.display.year).toBe(mockYear)
    })
  })

  describe('isDateDisabled', () => {
    it('should not disable any date when disabledDates is not provided', () => {
      const [, , adapter] = useDateAdapter({ format: 'YYYY-MM-DD' })
      expect(adapter.isDateDisabled(new CalendarDate(2024, 10, 17))).toBe(false)
    })

    it('should disable a date included in disabledDates', () => {
      const [, , adapter] = useDateAdapter({
        format: 'YYYY-MM-DD',
        disabledDates: [new CalendarDate(2024, 10, 17)]
      })

      expect(adapter.isDateDisabled(new CalendarDate(2024, 10, 17))).toBe(true)
    })

    it('should not disable a day that is not in the disabledDates array', () => {
      const [, , adapter] = useDateAdapter({
        format: 'YYYY-MM-DD',
        disabledDates: [new CalendarDate(2024, 10, 17)]
      })

      expect(adapter.isDateDisabled(new CalendarDate(2024, 10, 18))).toBe(false)
    })

    it('should handle an empty disabledDates array', () => {
      const [, , adapter] = useDateAdapter({
        format: 'YYYY-MM-DD',
        disabledDates: []
      })

      expect(adapter.isDateDisabled(new CalendarDate(2024, 10, 17))).toBe(false)
    })

    it('should disable a weekend when disableWeekends is set', () => {
      const [, , adapter] = useDateAdapter({
        format: 'YYYY-MM-DD',
        disableWeekends: true
      })

      expect(adapter.isDateDisabled(new CalendarDate(2024, 10, 19))).toBe(true)
      expect(adapter.isDateDisabled(new CalendarDate(2024, 10, 20))).toBe(true)
      expect(adapter.isDateDisabled(new CalendarDate(2024, 10, 21))).toBe(false)
    })
  })

  describe('When min & max date funcionality is added or not', () => {
    it('should correctly format minDate in formattedDates', () => {
      const minDate = new CalendarDate(2024, 1, 1)
      const [, , adapter] = useDateAdapter({
        format: 'YYYY-MM-DD',
        minDate
      })

      const { formattedDates } = adapter

      expect(formattedDates.value.min).toMatchObject({
        day: 1,
        month: 0,
        year: 2024,
        lastDayOfMonth: 31,
        firstWeekDay: 1
      })
    })

    it('should not set minDate in formattedDates when not provided', () => {
      const [, , adapter] = useDateAdapter({
        format: 'YYYY-MM-DD'
      })

      const { formattedDates } = adapter

      expect(formattedDates.value.min).toBeUndefined()
    })

    it('should correctly format maxDate in formattedDates', () => {
      const maxDate = new CalendarDate(2024, 12, 31)
      const [, , adapter] = useDateAdapter({
        format: 'YYYY-MM-DD',
        maxDate
      })

      const { formattedDates } = adapter

      expect(formattedDates.value.max).toMatchObject({
        day: 31,
        month: 11,
        year: 2024,
        lastDayOfMonth: 31,
        firstWeekDay: 0
      })
    })

    it('should not set maxDate in formattedDates when not provided', () => {
      const [, , adapter] = useDateAdapter({
        format: 'YYYY-MM-DD'
      })

      const { formattedDates } = adapter

      expect(formattedDates.value.max).toBeUndefined()
    })
  })
})
