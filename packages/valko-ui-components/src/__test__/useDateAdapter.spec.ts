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
    it('should return model as an EpochTimeStamp', () => {
      const [ model ] = useDateAdapter({ format: 'YYYY-MM-DD' })
      expect(model.value).toBe(new Date(2024, 9, 18).getTime())
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
    it('should fallback to today for day if model is falsy', () => {
      const [model, , adapter] = useDateAdapter({})
      model.value = 0
      const today = new Date()
      expect(adapter.formattedDates.value.selected.day).toBe(today.getDate())
    })
    it('should fallback to today for month if model is falsy', () => {
      const [model, , adapter] = useDateAdapter({})
      model.value = 0
      const today = new Date()
      expect(adapter.formattedDates.value.selected.month).toBe(today.getMonth())
    })
    it('should fallback to today for year if model is falsy', () => {
      const [model, , adapter] = useDateAdapter({})
      model.value = 0
      const today = new Date()
      expect(adapter.formattedDates.value.selected.year).toBe(today.getFullYear())
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
        model.value = new Date(2022, 5, 1).getTime()
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
    })

    it('should set year to default when format is MM-DD', () => {
      const mockYear = new Date().getFullYear()
      const [model, , adapter] = useDateAdapter({ format: 'MM-DD' })
      model.value = new Date(mockYear, 5, 1).getTime()
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
        model.value = new Date(2022, 7, 1).getTime()
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
      model.value = new Date(mockYear, 7, 1).getTime()
      adapter.onSelectMonth(7)
      expect(adapter.formattedDates.value.display.year).toBe(mockYear)
    })
  })

  describe('disabledDates', () => {
    it('should return an empty array if disabledDates is not provided', () => {
      const [, , adapter] = useDateAdapter({ format: 'YYYY-MM-DD' })
      expect(adapter.disabledDates.value).toEqual([])
    })

    it('should return the correct disabled date for a single day', () => {
      const disabledTimestamp = new Date(2024, 9, 17).getTime()
      const [, , adapter] = useDateAdapter({
        format: 'YYYY-MM-DD',
        disabledDates: [disabledTimestamp]
      })

      const { disabledDates } = adapter

      expect(disabledDates.value).toContain(17)
    })

    it('should not disable a day that is not in the disabledDates array', () => {
      const disabledTimestamp = new Date(2024, 9, 17).getTime()
      const [, , adapter] = useDateAdapter({
        format: 'YYYY-MM-DD',
        disabledDates: [disabledTimestamp]
      })

      const { disabledDates } = adapter

      expect(disabledDates.value).not.toContain(18)
    })

    it('should return the correct disabled date for another day', () => {
      const disabledTimestamp = new Date(2024, 9, 19).getTime()
      const [, , adapter] = useDateAdapter({
        format: 'YYYY-MM-DD',
        disabledDates: [disabledTimestamp]
      })

      const { disabledDates } = adapter

      expect(disabledDates.value).toContain(19)
    })

    it('should handle an empty disabledDates array', () => {
      const [, , adapter] = useDateAdapter({
        format: 'YYYY-MM-DD',
        disabledDates: []
      })

      const { disabledDates } = adapter

      expect(disabledDates.value.length).toBe(0)
    })

    it('should disable today\'s date correctly', () => {
      const today = new Date()
      const todayTimestamp = today.getTime()
      const [, , adapter] = useDateAdapter({
        format: 'YYYY-MM-DD',
        disabledDates: [todayTimestamp]
      })

      const { disabledDates } = adapter

      expect(disabledDates.value).toContain(today.getDate())
    })
  })

  describe('When min & max date funcionality is added or not', () => {
    it('should correctly format minDate in formattedDates', () => {
      const minDate = new Date(2024, 0, 1)
      const minTimestamp = minDate.getTime()
      const [, , adapter] = useDateAdapter({
        format: 'YYYY-MM-DD',
        minDate: minTimestamp
      })

      const { formattedDates } = adapter

      expect(formattedDates.value.min).toMatchObject({
        day: minDate.getDate(),
        month: minDate.getMonth(),
        year: minDate.getFullYear(),
        lastDayOfMonth: 31,
        firstWeekDay: 1,
        obj: expect.any(Date)
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
      const maxDate = new Date(2024, 11, 31)
      const maxTimestamp = maxDate.getTime()
      const [, , adapter] = useDateAdapter({
        format: 'YYYY-MM-DD',
        maxDate: maxTimestamp
      })

      const { formattedDates } = adapter

      expect(formattedDates.value.max).toMatchObject({
        day: maxDate.getDate(),
        month: maxDate.getMonth(),
        year: maxDate.getFullYear(),
        lastDayOfMonth: 31,
        firstWeekDay: 0,
        obj: expect.any(Date)
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
