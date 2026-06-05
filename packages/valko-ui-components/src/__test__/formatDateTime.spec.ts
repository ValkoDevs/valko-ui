import formatDateTime from '#valkoui/utils/formatDateTime.ts'

describe('formatDateTime', () => {
  // March 5, 2024 at 09:03:07 (single-digit month, day, hour, minute, second — good for padding tests)
  const singleDigitDate = new Date(2024, 2, 5, 9, 3, 7)

  // November 15, 2024 at 14:30:45 (double-digit everything, PM)
  const doubleDigitDate = new Date(2024, 10, 15, 14, 30, 45)

  // Midnight
  const midnight = new Date(2024, 0, 1, 0, 0, 0)

  // Noon
  const noon = new Date(2024, 5, 15, 12, 0, 0)

  describe('Date tokens', () => {
    it('should format YYYY as 4-digit year', () => {
      expect(formatDateTime(doubleDigitDate, 'YYYY')).toBe('2024')
    })

    it('should format YY as 2-digit year', () => {
      expect(formatDateTime(doubleDigitDate, 'YY')).toBe('24')
    })

    it('should format MMMM as full month name', () => {
      const result = formatDateTime(doubleDigitDate, 'MMMM')
      expect(result).toContain('November')
    })

    it('should format MMM as abbreviated month name', () => {
      const result = formatDateTime(doubleDigitDate, 'MMM')
      expect(result).toContain('Nov')
    })

    it('should format MM as zero-padded month number', () => {
      expect(formatDateTime(singleDigitDate, 'MM')).toBe('03')
      expect(formatDateTime(doubleDigitDate, 'MM')).toBe('11')
    })

    it('should format M as month number without padding', () => {
      expect(formatDateTime(singleDigitDate, 'M')).toBe('3')
      expect(formatDateTime(doubleDigitDate, 'M')).toBe('11')
    })

    it('should format DD as zero-padded day', () => {
      expect(formatDateTime(singleDigitDate, 'DD')).toBe('05')
      expect(formatDateTime(doubleDigitDate, 'DD')).toBe('15')
    })

    it('should format D as day without padding', () => {
      expect(formatDateTime(singleDigitDate, 'D')).toBe('5')
      expect(formatDateTime(doubleDigitDate, 'D')).toBe('15')
    })

    it('should format dddd as full weekday name', () => {
      const result = formatDateTime(doubleDigitDate, 'dddd')
      expect(typeof result).toBe('string')
      expect(result.length).toBeGreaterThan(0)
    })

    it('should format ddd as abbreviated weekday name', () => {
      const result = formatDateTime(doubleDigitDate, 'ddd')
      expect(typeof result).toBe('string')
      expect(result.length).toBeGreaterThan(0)
    })

    it('should format dd as narrow weekday name', () => {
      const result = formatDateTime(doubleDigitDate, 'dd')
      expect(typeof result).toBe('string')
      expect(result.length).toBeGreaterThan(0)
    })
  })

  describe('Time tokens', () => {
    it('should format HH as zero-padded 24-hour hours', () => {
      expect(formatDateTime(singleDigitDate, 'HH')).toBe('09')
      expect(formatDateTime(doubleDigitDate, 'HH')).toBe('14')
    })

    it('should format H as 24-hour hours without padding', () => {
      expect(formatDateTime(singleDigitDate, 'H')).toBe('9')
      expect(formatDateTime(doubleDigitDate, 'H')).toBe('14')
    })

    it('should format hh as zero-padded 12-hour hours', () => {
      expect(formatDateTime(singleDigitDate, 'hh')).toBe('09')
      expect(formatDateTime(doubleDigitDate, 'hh')).toBe('02')
    })

    it('should format h as 12-hour hours without padding', () => {
      expect(formatDateTime(singleDigitDate, 'h')).toBe('9')
      expect(formatDateTime(doubleDigitDate, 'h')).toBe('2')
    })

    it('should format mm as zero-padded minutes', () => {
      expect(formatDateTime(singleDigitDate, 'mm')).toBe('03')
      expect(formatDateTime(doubleDigitDate, 'mm')).toBe('30')
    })

    it('should format m as minutes without padding', () => {
      expect(formatDateTime(singleDigitDate, 'm')).toBe('3')
      expect(formatDateTime(doubleDigitDate, 'm')).toBe('30')
    })

    it('should format ss as zero-padded seconds', () => {
      expect(formatDateTime(singleDigitDate, 'ss')).toBe('07')
      expect(formatDateTime(doubleDigitDate, 'ss')).toBe('45')
    })

    it('should format s as seconds without padding', () => {
      expect(formatDateTime(singleDigitDate, 's')).toBe('7')
      expect(formatDateTime(doubleDigitDate, 's')).toBe('45')
    })

    it('should format A as uppercase AM/PM', () => {
      expect(formatDateTime(singleDigitDate, 'A')).toBe('AM')
      expect(formatDateTime(doubleDigitDate, 'A')).toBe('PM')
    })

    it('should format a as lowercase am/pm', () => {
      expect(formatDateTime(singleDigitDate, 'a')).toBe('am')
      expect(formatDateTime(doubleDigitDate, 'a')).toBe('pm')
    })
  })

  describe('Combined formats', () => {
    it('should format a full date-time string', () => {
      expect(formatDateTime(doubleDigitDate, 'YYYY-MM-DD HH:mm:ss')).toBe('2024-11-15 14:30:45')
    })

    it('should format date-only string', () => {
      expect(formatDateTime(doubleDigitDate, 'YYYY-MM-DD')).toBe('2024-11-15')
    })

    it('should format time-only string', () => {
      expect(formatDateTime(doubleDigitDate, 'HH:mm:ss')).toBe('14:30:45')
    })

    it('should format 12-hour time with AM/PM', () => {
      expect(formatDateTime(doubleDigitDate, 'hh:mm A')).toBe('02:30 PM')
    })

    it('should format date with time', () => {
      expect(formatDateTime(singleDigitDate, 'YYYY-MM-DD HH:mm')).toBe('2024-03-05 09:03')
    })

    it('should preserve non-token characters', () => {
      expect(formatDateTime(doubleDigitDate, 'YYYY/MM/DD')).toBe('2024/11/15')
    })
  })

  describe('Edge cases', () => {
    it('should handle midnight (00:00:00)', () => {
      expect(formatDateTime(midnight, 'HH:mm:ss')).toBe('00:00:00')
    })

    it('should format midnight as 12 in 12-hour format', () => {
      expect(formatDateTime(midnight, 'hh:mm A')).toBe('12:00 AM')
    })

    it('should handle noon (12:00:00)', () => {
      expect(formatDateTime(noon, 'HH:mm:ss')).toBe('12:00:00')
    })

    it('should format noon as 12 PM in 12-hour format', () => {
      expect(formatDateTime(noon, 'hh:mm A')).toBe('12:00 PM')
    })

    it('should handle single-digit month and day with padding', () => {
      expect(formatDateTime(singleDigitDate, 'MM-DD')).toBe('03-05')
    })

    it('should handle single-digit month and day without padding', () => {
      expect(formatDateTime(singleDigitDate, 'M-D')).toBe('3-5')
    })

    it('should not cross-contaminate locale output with time tokens', () => {
      // MMMM for March contains 'h', which should NOT be matched by the 'h' token.
      // If contaminated, the 'h' in "March" would be replaced by the 12-hour value "8",
      // producing "Marc8 15, 2024" instead of the correct "March 15, 2024".
      const marchDate = new Date(2024, 2, 15, 8, 0, 0)
      const result = formatDateTime(marchDate, 'MMMM DD, YYYY', 'en-US')
      expect(result).toContain('March')
      expect(result).not.toMatch(/Mar\d/)
    })
  })

  describe('Locale parameter', () => {
    it('should use the provided locale for month names', () => {
      const defaultResult = formatDateTime(doubleDigitDate, 'MMMM', 'en-US')
      const spanishResult = formatDateTime(doubleDigitDate, 'MMMM', 'es')

      expect(defaultResult).toContain('November')
      expect(spanishResult).not.toBe(defaultResult)
    })

    it('should use the provided locale for weekday names', () => {
      const defaultResult = formatDateTime(doubleDigitDate, 'dddd', 'en-US')
      const spanishResult = formatDateTime(doubleDigitDate, 'dddd', 'es')

      expect(defaultResult).toContain('Friday')
      expect(spanishResult).not.toBe(defaultResult)
    })

    it('should use default locale when locale is undefined', () => {
      const withUndefined = formatDateTime(doubleDigitDate, 'YYYY-MM-DD')
      const withExplicit = formatDateTime(doubleDigitDate, 'YYYY-MM-DD', undefined)
      expect(withUndefined).toBe(withExplicit)
    })
  })
})
