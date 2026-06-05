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
      const { model } = useTimeAdapter({ format: 'HH:mm:ss' })
      expect(model.value).toBe(mockTime.getTime())
    })
  })

  describe('DisplayValue', () => {
    it('should format time as HH (24-hour padded)', () => {
      const { displayValue } = useTimeAdapter({ format: 'HH' })
      expect(displayValue.value).toBe('14')
    })

    it('should format time as H (24-hour without padding)', () => {
      const { displayValue } = useTimeAdapter({ format: 'H' })
      expect(displayValue.value).toBe('14')
    })

    it('should format time as hh (12-hour padded)', () => {
      const { displayValue } = useTimeAdapter({ format: 'hh' })
      expect(displayValue.value).toBe('02')
    })

    it('should format time as h (12-hour without padding)', () => {
      const { displayValue } = useTimeAdapter({ format: 'h' })
      expect(displayValue.value).toBe('2')
    })

    it('should format minutes as mm (padded)', () => {
      const { displayValue } = useTimeAdapter({ format: 'mm' })
      expect(displayValue.value).toBe('05')
    })

    it('should format minutes as m (without padding)', () => {
      const { displayValue } = useTimeAdapter({ format: 'm' })
      expect(displayValue.value).toBe('5')
    })

    it('should format seconds as ss (padded)', () => {
      const { displayValue } = useTimeAdapter({ format: 'ss' })
      expect(displayValue.value).toBe('09')
    })

    it('should format seconds as s (without padding)', () => {
      const { displayValue } = useTimeAdapter({ format: 's' })
      expect(displayValue.value).toBe('9')
    })

    it('should format period as A (uppercase AM/PM)', () => {
      const { displayValue } = useTimeAdapter({ format: 'A' })
      expect(displayValue.value).toBe('PM')
    })

    it('should format period as a (lowercase am/pm)', () => {
      const { displayValue } = useTimeAdapter({ format: 'a' })
      expect(displayValue.value).toBe('pm')
    })
  })

  describe('Adapter methods', () => {
    describe('setDisplayUnit', () => {
      it('should correctly update the display value when setting hours', () => {
        const { displayValue, adapter: { setDisplayUnit } } = useTimeAdapter({ format: 'HH:mm:ss' })
        setDisplayUnit('h', 14)
        expect(displayValue.value).toContain('14')
      })

      it('should correctly update the display value when setting minutes', () => {
        const { displayValue, adapter: { setDisplayUnit } } = useTimeAdapter({ format: 'HH:mm:ss' })
        setDisplayUnit('m', 5)
        expect(displayValue.value).toContain('05')
      })

      it('should correctly update the display value when setting seconds', () => {
        const { displayValue, adapter: { setDisplayUnit } } = useTimeAdapter({ format: 'HH:mm:ss' })
        setDisplayUnit('s', 9)
        expect(displayValue.value).toContain('09')
      })
    })

    describe('onSelectAMPM', () => {
      it('should switch to AM', () => {
        const { adapter: { onSelectAMPM, period } } = useTimeAdapter({ format: 'hh:mm:ss A' })
        onSelectAMPM('AM')
        expect(period.value).toBe('AM')
      })

      it('should switch to PM', () => {
        const { adapter: { onSelectAMPM, period } } = useTimeAdapter({ format: 'hh:mm:ss A' })
        onSelectAMPM('PM')
        expect(period.value).toBe('PM')
      })
    })

    describe('onSelectTime', () => {
      it('should correctly update the model with a selected hour', () => {
        const { model, adapter: { setDisplayUnit, onSelectTime } } = useTimeAdapter({ format: 'HH:mm:ss' })

        setDisplayUnit('h', 15)
        onSelectTime()

        const updatedTime = new Date(mockTime)
        updatedTime.setHours(15)

        expect(model.value).toBe(updatedTime.getTime())
      })

      it('should correctly update the model with a selected minute', () => {
        const { model, adapter: { setDisplayUnit, onSelectTime } } = useTimeAdapter({ format: 'HH:mm:ss' })

        setDisplayUnit('m', 45)
        onSelectTime()

        const updatedTime = new Date(mockTime)
        updatedTime.setMinutes(45)

        expect(model.value).toBe(updatedTime.getTime())
      })

      it('should correctly update the model with a selected second', () => {
        const { model, adapter: { setDisplayUnit, onSelectTime } } = useTimeAdapter({ format: 'HH:mm:ss' })

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
        ({ adapter: { isTimeDisabled } } = useTimeAdapter({
          format: 'HH:mm:ss',
          disabledTimes: [
            new Date(2024, 10, 21, 14, 0).getTime(), // 14:00
            new Date(2024, 10, 21, 15, 30).getTime(), // 15:30
            new Date(2024, 10, 21, 23, 45).getTime() // 23:45
          ]
        }))
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
        ({ adapter: { isTimeDisabled } } = useTimeAdapter({
          format: 'HH:mm:ss',
          disabledTimes: []
        }))

        expect(isTimeDisabled(14)).toBe(false)
      })
    })
  })
})
