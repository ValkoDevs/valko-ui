const formatDateTime = (date: Date, format: string, locale?: string): string => {
  const day = date.getDate()
  const month = date.getMonth()
  const year = date.getFullYear()
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()
  const hours12 = hours % 12 || 12
  const period: 'AM' | 'PM' = hours >= 12 ? 'PM' : 'AM'

  const tokens: Record<string, string> = {
    YYYY: `${year}`,
    YY: `${year}`.slice(-2),
    MMMM: date.toLocaleDateString(locale, { month: 'long' }),
    MMM: date.toLocaleDateString(locale, { month: 'short' }),
    MM: `${month + 1}`.padStart(2, '0'),
    M: `${month + 1}`,
    DD: `${day}`.padStart(2, '0'),
    D: `${day}`,
    dddd: date.toLocaleDateString(locale, { weekday: 'long' }),
    ddd: date.toLocaleDateString(locale, { weekday: 'short' }),
    dd: date.toLocaleDateString(locale, { weekday: 'narrow' }),
    HH: String(hours).padStart(2, '0'),
    H: String(hours),
    hh: String(hours12).padStart(2, '0'),
    h: String(hours12),
    mm: String(minutes).padStart(2, '0'),
    m: String(minutes),
    ss: String(seconds).padStart(2, '0'),
    s: String(seconds),
    A: period,
    a: period.toLowerCase()
  }

  const pattern = Object.keys(tokens)
    .sort((a, b) => b.length - a.length)
    .join('|')

  return format.replace(new RegExp(pattern, 'g'), (match) => tokens[match])
}

export default formatDateTime
