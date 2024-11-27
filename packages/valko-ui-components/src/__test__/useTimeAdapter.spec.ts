import useTimeAdapter from '#valkoui/composables/useTimeAdapter'

describe('useTimeAdapter composable', () => {
  const mockTime = new Date(2024, 9, 18, 14, 5, 9)

  beforeAll(() => {
    vi.useFakeTimers().setSystemTime(mockTime.getTime())
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

  describe('Adapter methods', () => {
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
    })

    describe('isTimeDisabled', () => {
      let isTimeDisabled: (hours: number, minutes?: number) => boolean | undefined

      beforeEach(() => {
        [, , { isTimeDisabled }] = useTimeAdapter({
          format: 'HH:mm:ss',
          disabledTimes: [
            new Date(2024, 10, 21, 14, 0).getTime(), // 14:00
            new Date(2024, 10, 21, 15, 30).getTime(), // 15:30
            new Date(2024, 10, 21, 23, 45).getTime() // 23:45
          ]
        })
      })

      it('should disable a specific hour', () => {
        expect(isTimeDisabled(14)).toBe(true)
      })

      // it('should disable a specific minute', () => {
      //   expect(isTimeDisabled(15, 30)).toBe(true)
      // })

      // it('should disable a specific hour, minute combination', () => {
      //   expect(isTimeDisabled(23, 45)).toBe(true)
      // })

      it('should work when no disabledTimes are provided', () => {
        [, , { isTimeDisabled }] = useTimeAdapter({
          format: 'HH:mm:ss',
          disabledTimes: []
        })

        expect(isTimeDisabled(14)).toBe(false)
      })
    })
  })
})
