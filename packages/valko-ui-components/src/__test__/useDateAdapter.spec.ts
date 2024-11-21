import useDateAdapter from '#valkoui/composables/useDateAdapter'

describe('useDateAdapter composable', () => {
  const mockDate = new Date(2024, 9, 18)

  beforeAll(() => {
    vi.useFakeTimers().setSystemTime(mockDate.getTime())
  })

  afterAll(() => {
    vi.useRealTimers()
  })

  describe('Model prop', () => {
    it('should return model as an EpochTimeStamp', () => {
      const [model] = useDateAdapter({ format: 'YYYY-MM-DD' })
      expect(model.value).toBe(new Date(2024, 9, 18).getTime())
    })
  })

  describe('ParsedModel prop', () => {
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

  describe('Date interaction and helper functions', () => {
    describe('GetWeekdays', () => {
      it('should return correct weekdays based on locale', () => {
        const [, , adapter] = useDateAdapter({ locale: 'en-US', format: 'YYYY-MM-DD' })
        const weekdays = adapter.getWeekdays()

        expect(weekdays).toEqual(['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])
      })
    })

    describe('GetMonths', () => {
      it('should return correct months based on locale', () => {
        const [, , adapter] = useDateAdapter({ locale: 'en-US', format: 'YYYY-MM-DD' })
        const months = adapter.getMonths()

        expect(months).toEqual([
          'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
        ])
      })
    })

    describe('onSelectDay', () => {
      it('should correctly select a day using onSelectDay', () => {
        const selectedDay = 18
        const [, , adapter] = useDateAdapter({
          format: 'DD'
        })

        adapter.onSelectDay(selectedDay)

        expect(adapter.formattedDates.value.selected.day).toBe(selectedDay)
      })
    })

    describe('onSelectMonth', () => {
      it('should correctly select a month using onSelectMonth', () => {
        const selectedMonth = 9
        const [, , adapter] = useDateAdapter({
          format: 'MM'
        })

        adapter.onSelectMonth(selectedMonth)

        expect(adapter.formattedDates.value.selected.month).toBe(selectedMonth)
      })
    })

    describe('onSelectYear', () => {
      it('should correctly select a year using onSelectYear', () => {
        const selectedYear = 2024
        const [, , adapter] = useDateAdapter({
          format: 'YYYY'
        })

        adapter.onSelectYear(selectedYear)

        expect(adapter.formattedDates.value.selected.year).toBe(selectedYear)
      })
    })
  })

  describe('When DisabledDates funcionality is added or not', () => {
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
      const minDate = new Date(2024, 0, 1) // 1 de enero de 2024
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
