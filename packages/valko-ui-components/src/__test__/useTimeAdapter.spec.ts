import useTimeAdapter from '#valkoui/composables/useTimeAdapter'

describe('useTimeAdapter composable', () => {
  const mockTime = new Date(2024, 9, 18, 14, 5, 9)

  beforeEach(() => {
    vi.useFakeTimers()
    vi.setSystemTime(mockTime.getTime())
  })

  afterAll(() => {
    vi.useRealTimers()
  })

  describe('Model', () => {
    it('should return model as an EpochTimeStamp', () => {
      const [ model ] = useTimeAdapter({ format: 'HH:mm:ss' })
      expect(model.value).toBe(mockTime.getTime())
    })
  })

  describe('ParsedModel', () => {
    it('should fallback to default format HH:mm:ss if format is missing', () => {
      const [, parsedModel] = useTimeAdapter({})

      expect(parsedModel.value).toBe('14:05:09')
    })

    it('should fallback to 12 for hours12 if hour is 0 (midnight)', () => {
      const midnight = new Date(2024, 9, 18, 0, 0, 0)
      vi.setSystemTime(midnight.getTime())
      const [, parsedModel] = useTimeAdapter({ format: 'h' })

      expect(parsedModel.value).toBe('12')
      vi.useRealTimers()
    })

    it('should fallback to 12 for hours12 if hour is 12 (noon)', () => {
      const noon = new Date(2024, 9, 18, 12, 0, 0)
      vi.setSystemTime(noon.getTime())
      const [, parsedModel] = useTimeAdapter({ format: 'h' })

      expect(parsedModel.value).toBe('12')
      vi.useRealTimers()
    })

    it('should format time as HH (24-hour padded)', () => {
      const [ , parsedModel ] = useTimeAdapter({ format: 'HH' })
      expect(parsedModel.value).toBe('14')
    })

    it('should format time as H (24-hour without padding)', () => {
      const [ , parsedModel ] = useTimeAdapter({ format: 'H' })
      expect(parsedModel.value).toBe('14')
    })

    it('should format time as hh (12-hour padded)', () => {
      const [ , parsedModel ] = useTimeAdapter({ format: 'hh' })
      expect(parsedModel.value).toBe('02')
    })

    it('should format time as h (12-hour without padding)', () => {
      const [ , parsedModel ] = useTimeAdapter({ format: 'h' })
      expect(parsedModel.value).toBe('2')
    })

    it('should format minutes as mm (padded)', () => {
      const [ , parsedModel ] = useTimeAdapter({ format: 'mm' })
      expect(parsedModel.value).toBe('05')
    })

    it('should format minutes as m (without padding)', () => {
      const [ , parsedModel ] = useTimeAdapter({ format: 'm' })
      expect(parsedModel.value).toBe('5')
    })

    it('should format seconds as ss (padded)', () => {
      const [ , parsedModel ] = useTimeAdapter({ format: 'ss' })
      expect(parsedModel.value).toBe('09')
    })

    it('should format seconds as s (without padding)', () => {
      const [ , parsedModel ] = useTimeAdapter({ format: 's' })
      expect(parsedModel.value).toBe('9')
    })

    it('should format period as A (uppercase AM/PM)', () => {
      const [ , parsedModel ] = useTimeAdapter({ format: 'A' })
      expect(parsedModel.value).toBe('PM')
    })

    it('should format period as a (lowercase am/pm)', () => {
      const [ , parsedModel ] = useTimeAdapter({ format: 'a' })
      expect(parsedModel.value).toBe('pm')
    })
  })

  describe('formattedTime', () => {

    it('should display 12 for midnight in 12-hour format', () => {
      const midnight = new Date(2024, 9, 18, 0, 0, 0)
      vi.setSystemTime(midnight.getTime())
      const [,, { formattedTime }] = useTimeAdapter({ format: 'h:mm A' })

      expect(formattedTime.value.display.hours).toBe(12)
      vi.useRealTimers()
    })

    it('should fallback to 24-hour display if format does not include h', () => {
      const [,, { formattedTime }] = useTimeAdapter({})

      expect(formattedTime.value.display.hours).toBe(14)
    })

    it('should use 12-hour display if format includes h', () => {
      const [,, { formattedTime }] = useTimeAdapter({ format: 'h:mm A' })

      expect(formattedTime.value.display.hours).toBe(2)
    })
  })

  describe('setDisplayUnit', () => {
    it('should correctly update the parsed model when setting hours', () => {
      const [, parsedModel, { setDisplayUnit }] = useTimeAdapter({ format: 'HH:mm:ss' })
      setDisplayUnit('h', 14)
      expect(parsedModel.value).toContain('14')
    })

    it('should correctly update the parsed model when setting minutes', () => {
      const [, parsedModel, { setDisplayUnit }] = useTimeAdapter({ format: 'HH:mm:ss' })
      setDisplayUnit('m', 5)
      expect(parsedModel.value).toContain('05')
    })

    it('should correctly update the parsed model when setting seconds', () => {
      const [, parsedModel, { setDisplayUnit }] = useTimeAdapter({ format: 'HH:mm:ss' })
      setDisplayUnit('s', 9)
      expect(parsedModel.value).toContain('09')
    })
  })

  describe('onSelectAMPM', () => {
    it('should switch to AM', () => {
      const [, , { onSelectAMPM, period }] = useTimeAdapter({ format: 'hh:mm:ss A' })
      onSelectAMPM('AM')
      expect(period.value).toBe('AM')
    })

    it('should switch to PM', () => {
      const [, , { onSelectAMPM, period }] = useTimeAdapter({ format: 'hh:mm:ss A' })
      onSelectAMPM('PM')
      expect(period.value).toBe('PM')
    })

    it('should set hours using the ternary (AM branch)', () => {
      const [,, ctx] = useTimeAdapter({ format: 'hh:mm:ss A' })
      ctx.setDisplayUnit('h', 13)
      ctx.onSelectAMPM('AM')
      expect(ctx.formattedTime.value.display.hours).toBe(1)
    })

    it('should set parsedModel correctly for AM branch', () => {
      const [ , parsedModel, ctx ] = useTimeAdapter({ format: 'hh:mm:ss A' })
      ctx.setDisplayUnit('h', 13)
      ctx.onSelectAMPM('AM')
      ctx.onSelectTime()
      expect(parsedModel.value.startsWith('01')).toBe(true)
    })

    it('should set hours using the ternary (PM branch)', () => {
      const [,, ctx] = useTimeAdapter({ format: 'hh:mm:ss A' })
      ctx.setDisplayUnit('h', 1)
      ctx.onSelectAMPM('PM')
      expect(ctx.formattedTime.value.display.hours).toBe(1)
    })

    it('should set parsedModel correctly for PM branch', () => {
      const [ , parsedModel, ctx ] = useTimeAdapter({ format: 'HH:mm:ss' })
      ctx.setDisplayUnit('h', 1)
      ctx.onSelectAMPM('PM')
      ctx.onSelectTime()
      const hour = Number(parsedModel.value.split(':')[0])
      expect(hour).toBe(13)
    })

    it('should set parsedModel correctly when tempTime exists', () => {
      const [ , parsedModel, ctx ] = useTimeAdapter({ format: 'HH:mm:ss' })
      ctx.setDisplayUnit('h', 5)
      ctx.onSelectAMPM('PM')
      ctx.onSelectTime()
      const hour = Number(parsedModel.value.split(':')[0])
      expect(hour).toBe(17)
    })

    it('should set hours on tempTime if tempTime exists', () => {
      const [,, ctx] = useTimeAdapter({ format: 'hh:mm:ss A' })
      ctx.setDisplayUnit('h', 5)
      ctx.onSelectAMPM('PM')
      expect(ctx.formattedTime.value.display.hours).toBe(5)
    })

    it('should set parsedModel correctly when tempTime exists', () => {
      const [ , parsedModel, ctx ] = useTimeAdapter({ format: 'HH:mm:ss' })
      ctx.setDisplayUnit('h', 5)
      ctx.onSelectAMPM('PM')
      ctx.onSelectTime()
      const hour = Number(parsedModel.value.split(':')[0])
      expect(hour).toBe(17)
    })

    it('should set hours on new tempTime if tempTime does not exist', () => {
      const [,, ctx] = useTimeAdapter({ format: 'hh:mm:ss A' })
      ctx.onSelectAMPM('AM')
      expect(ctx.formattedTime.value.display.hours).toBe(2)
    })

    it('should set parsedModel correctly when tempTime does not exist', () => {
      const [ , parsedModel, ctx ] = useTimeAdapter({ format: 'hh:mm:ss A' })
      ctx.onSelectAMPM('AM')
      ctx.onSelectTime()
      expect(parsedModel.value.endsWith('AM')).toBe(true)
    })
  })

  describe('onSelectTime', () => {
    it('should correctly update the model with a selected hour', () => {
      const [model, , { setDisplayUnit, onSelectTime }] = useTimeAdapter({ format: 'HH:mm:ss' })

      setDisplayUnit('h', 15)
      onSelectTime()

      const updatedTime = new Date(mockTime)
      updatedTime.setHours(15)

      expect(model.value).toBe(updatedTime.getTime())
    })

    it('should correctly update the model with a selected minute', () => {
      const [model, , { setDisplayUnit, onSelectTime }] = useTimeAdapter({ format: 'HH:mm:ss' })

      setDisplayUnit('m', 45)
      onSelectTime()

      const updatedTime = new Date(mockTime)
      updatedTime.setMinutes(45)

      expect(model.value).toBe(updatedTime.getTime())
    })

    it('should correctly update the model with a selected second', () => {
      const [model, , { setDisplayUnit, onSelectTime }] = useTimeAdapter({ format: 'HH:mm:ss' })

      setDisplayUnit('s', 30)
      onSelectTime()

      const updatedTime = new Date(mockTime)
      updatedTime.setSeconds(30)

      expect(model.value).toBe(updatedTime.getTime())
    })

    it('should not update the model if tempTime is null', () => {
      const [model, , { onSelectTime }] = useTimeAdapter({ format: 'HH:mm:ss' })
      const original = model.value
      onSelectTime()
      expect(model.value).toBe(original)
    })
  })

  describe('isTimeDisabled', () => {
    let isTimeDisabled: (hours: number, minutes?: number) => boolean | undefined

    beforeEach(() => {
      const result = useTimeAdapter({
        format: 'HH:mm:ss',
        disabledTimes: [
          new Date(2024, 10, 21, 14, 0).getTime(),
          new Date(2024, 10, 21, 15, 30).getTime(),
          new Date(2024, 10, 21, 23, 45).getTime()
        ]
      })

      isTimeDisabled = result[2].isTimeDisabled
    })

    it('should disable a specific hour', () => {
      expect(isTimeDisabled(14)).toBe(true)
    })

    it('should work when no disabledTimes are provided', () => {
      const [, , { isTimeDisabled }] = useTimeAdapter({
        format: 'HH:mm:ss',
        disabledTimes: []
      })
      expect(isTimeDisabled(14)).toBe(false)
    })

    it('should use 24-hour logic when format is empty string', () => {
      const [, , { isTimeDisabled }] = useTimeAdapter({ format: '' })
      expect(isTimeDisabled(10)).toBe(false)
    })

    it('should use 24-hour logic when format is undefined', () => {
      const [, , { isTimeDisabled }] = useTimeAdapter({})
      expect(isTimeDisabled(10)).toBe(false)
    })

    it('should use convertTo24Hour for 12-hour format (AM)', () => {
      const [, , { isTimeDisabled }] = useTimeAdapter({ format: 'h:mm A' })
      expect(isTimeDisabled(12)).toBe(false)
    })

    it('should use convertTo24Hour for 12-hour format (PM)', () => {
      const [, , { isTimeDisabled }] = useTimeAdapter({ format: 'h:mm A' })
      expect(isTimeDisabled(1)).toBe(false)
    })

    it('should not disable minDate boundary when minTime and maxTime are provided', () => {
      const minDate = new Date(Date.UTC(2024, 9, 18, 13, 0, 0))
      const maxDate = new Date(Date.UTC(2024, 9, 18, 15, 0, 0))
      const minTime = Math.floor(minDate.getTime() / 1000)
      const maxTime = Math.floor(maxDate.getTime() / 1000)
      const [, , { isTimeDisabled }] = useTimeAdapter({ format: 'HH:mm:ss', minTime, maxTime })
      expect(isTimeDisabled(minDate.getUTCHours(), minDate.getUTCMinutes())).toBe(false)
    })

    it('should not disable maxDate boundary when minTime and maxTime are provided', () => {
      const minDate = new Date(Date.UTC(2024, 9, 18, 13, 0, 0))
      const maxDate = new Date(Date.UTC(2024, 9, 18, 15, 0, 0))
      const minTime = Math.floor(minDate.getTime() / 1000)
      const maxTime = Math.floor(maxDate.getTime() / 1000)
      const [, , { isTimeDisabled }] = useTimeAdapter({ format: 'HH:mm:ss', minTime, maxTime })
      expect(isTimeDisabled(maxDate.getUTCHours(), maxDate.getUTCMinutes())).toBe(false)
    })

    it('should not disable value between minDate and maxDate when minTime and maxTime are provided', () => {
      const minDate = new Date(Date.UTC(2024, 9, 18, 13, 0, 0))
      const maxDate = new Date(Date.UTC(2024, 9, 18, 15, 0, 0))
      const minTime = Math.floor(minDate.getTime() / 1000)
      const maxTime = Math.floor(maxDate.getTime() / 1000)
      const [, , { isTimeDisabled }] = useTimeAdapter({ format: 'HH:mm:ss', minTime, maxTime })
      expect(isTimeDisabled(14, 0)).toBe(false)
    })

    it('should return true if below minTime', () => {
      const minTime = Math.floor(new Date(2024, 9, 18, 15, 0, 0).getTime() / 1000)
      const [, , { isTimeDisabled }] = useTimeAdapter({ format: 'HH:mm:ss', minTime })
      expect(isTimeDisabled(14, 0)).toBe(true)
    })

    it('should return true if above maxTime', () => {
      const maxDate = new Date(Date.UTC(2024, 9, 18, 13, 0, 0))
      const maxTime = Math.floor(maxDate.getTime() / 1000)
      const [, , { isTimeDisabled }] = useTimeAdapter({ format: 'HH:mm:ss', maxTime })
      expect(isTimeDisabled(14, 0)).toBe(true)
    })

    it('should use convertTo24Hour in disabledTimes logic for 12-hour format', () => {
      const disabledDate = new Date(Date.UTC(2024, 9, 18, 14, 0, 0))
      const disabled = Math.floor(disabledDate.getTime() / 1000)
      const [, , { isTimeDisabled }] = useTimeAdapter({ format: 'h:mm A', disabledTimes: [disabled] })
      expect(isTimeDisabled(2, 0)).toBe(true)
    })

    it('should return 0 for convertTo24Hour when h === 12 and period is AM', () => {
      const minDate = new Date(Date.UTC(2024, 9, 18, 1, 0, 0))
      const minTime = Math.floor(minDate.getTime() / 1000)
      const [, , { isTimeDisabled, onSelectAMPM }] = useTimeAdapter({ format: 'h:mm A', minTime })
      onSelectAMPM('AM')
      expect(isTimeDisabled(12, 0)).toBe(true)
    })

    it('should return 12 for convertTo24Hour when h === 12 and period is PM', () => {
      const minDate = new Date(Date.UTC(2024, 9, 18, 13, 0, 0))
      const minTime = Math.floor(minDate.getTime() / 1000)
      const [, , { isTimeDisabled, onSelectAMPM }] = useTimeAdapter({ format: 'h:mm A', minTime })
      onSelectAMPM('PM')
      expect(isTimeDisabled(12, 0)).toBe(true)
    })

    it('should return h + 12 for convertTo24Hour when h !== 12 and period is PM', () => {
      const minDate = new Date(Date.UTC(2024, 9, 18, 14, 0, 0))
      const minTime = Math.floor(minDate.getTime() / 1000)
      const [, , { isTimeDisabled, onSelectAMPM }] = useTimeAdapter({ format: 'h:mm A', minTime })
      onSelectAMPM('PM')
      expect(isTimeDisabled(1, 0)).toBe(true)
    })

    it('should return h for convertTo24Hour when h !== 12 and period is AM', () => {
      const minDate = new Date(Date.UTC(2024, 9, 18, 2, 0, 0))
      const minTime = Math.floor(minDate.getTime() / 1000)
      const [, , { isTimeDisabled, onSelectAMPM }] = useTimeAdapter({ format: 'h:mm A', minTime })
      onSelectAMPM('AM')
      expect(isTimeDisabled(1, 0)).toBe(true)
    })

    it('should cover disabledTimes logic: || 12 fallback', () => {
      const disabledDate = new Date(Date.UTC(2024, 9, 18, 0, 0, 0))
      const disabled = Math.floor(disabledDate.getTime() / 1000)
      const [, , { isTimeDisabled, onSelectAMPM }] = useTimeAdapter({ format: 'h:mm A', disabledTimes: [disabled] })
      onSelectAMPM('AM')
      expect(isTimeDisabled(12, 0)).toBe(true)
    })

    it('should cover disabledTimes logic: AM period branch', () => {
      const disabledDate = new Date(Date.UTC(2024, 9, 18, 1, 0, 0))
      const disabled = Math.floor(disabledDate.getTime() / 1000)
      const [, , { isTimeDisabled, onSelectAMPM }] = useTimeAdapter({ format: 'h:mm A', disabledTimes: [disabled] })
      onSelectAMPM('AM')
      expect(isTimeDisabled(1, 0)).toBe(true)
    })

    it('should return false for isSpecificallyDisabled fallback', () => {
      const [, , { isTimeDisabled }] = useTimeAdapter({ format: 'HH:mm:ss' })
      expect(isTimeDisabled(10)).toBe(false)
    })
  })

  describe('parsedPeriod', () => {
    it('should return AM for morning hours', () => {
      const morningTime = new Date(2024, 9, 18, 9, 0, 0)
      vi.setSystemTime(morningTime.getTime())
      const [,, { period }] = useTimeAdapter({ format: 'HH:mm:ss' })

      expect(period.value).toBe('AM')
      vi.useRealTimers()
    })

    it('should return PM for afternoon hours', () => {
      const afternoonTime = new Date(2024, 9, 18, 15, 0, 0)
      vi.setSystemTime(afternoonTime.getTime())
      const [,, { period }] = useTimeAdapter({ format: 'HH:mm:ss' })

      expect(period.value).toBe('PM')
      vi.useRealTimers()
    })
  })
})
