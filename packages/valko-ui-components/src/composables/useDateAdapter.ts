import { type Ref, computed, shallowRef, toValue } from 'vue'
import { CalendarDate, getLocalTimeZone, isSameDay } from '@internationalized/date'
import type { DateValue } from '@internationalized/date'
import type { AdapterProps, DayOfWeek, AdapterResult, FormattedDate } from '#valkoui/types/Calendar'

const useDateAdapter = (props: AdapterProps | Ref<AdapterProps>): AdapterResult => {
  const tempDate = shallowRef<DateValue | null>(null)
  const now = new Date()
  const model = shallowRef<DateValue>(new CalendarDate(now.getFullYear(), now.getMonth() + 1, now.getDate()))

  const formatDate = (normalizedDate: DateValue): FormattedDate<DateValue> => {
    const firstOfMonth = normalizedDate.set({ day: 1 })

    return {
      day: normalizedDate.day,
      month: normalizedDate.month - 1,
      year: normalizedDate.year,
      lastDayOfMonth: normalizedDate.set({ day: 1 }).add({ months: 1 }).set({ day: 1 }).subtract({ days: 1 }).day,
      firstWeekDay: firstOfMonth.toDate(getLocalTimeZone()).getDay() as DayOfWeek,
      obj: normalizedDate
    }
  }

  const formattedDates = computed(() => {
    const { minDate, maxDate } = toValue(props)

    const selected = formatDate(model.value)
    const display = tempDate.value ? formatDate(tempDate.value) : selected
    const min = minDate ? formatDate(minDate) : undefined
    const max = maxDate ? formatDate(maxDate) : undefined

    return {
      selected,
      display,
      min,
      max
    }
  })

  const parsedModel = computed(() => {
    const { format, locale } = toValue(props)
    const date = formattedDates.value.selected
    const jsDate = date.obj.toDate(getLocalTimeZone())

    const result = format || 'YYYY-MM-DD'

    return result
      .replace('YYYY', `${date.year}`)
      .replace('YY', `${date.year}`.slice(-2))
      .replace('MMMM', jsDate.toLocaleDateString(locale, { month: 'long' }))
      .replace('MMM', jsDate.toLocaleDateString(locale, { month: 'short' }))
      .replace('MM', `${date.month + 1}`.padStart(2, '0'))
      .replace('M', `${date.month + 1}`)
      .replace('DD', `${date.day}`.padStart(2, '0'))
      .replace('D', `${date.day}`)
      .replace('dddd', jsDate.toLocaleDateString(locale, { weekday: 'long' }))
      .replace('ddd', jsDate.toLocaleDateString(locale, { weekday: 'short' }))
      .replace('dd', jsDate.toLocaleDateString(locale, { weekday: 'narrow' }))
  })

  const isDateDisabled = (date: DateValue) => {
    const { disabledDates, disableWeekends } = toValue(props)
    const dayOfWeek = date.toDate(getLocalTimeZone()).getDay()

    const isDisabledDate = disabledDates?.some(disabledDate => isSameDay(disabledDate, date)) ?? false
    const isWeekendDisabled = disableWeekends === true && [0, 6].includes(dayOfWeek)

    return isDisabledDate || isWeekendDisabled
  }

  const onSelectYear = (year: number) => {
    tempDate.value = (tempDate.value ?? model.value).set({ year, month: 1, day: 1 })

    return tempDate.value
  }

  const onSelectMonth = (month: number) => {
    const year = tempDate.value ? tempDate.value.year : model.value.year
    tempDate.value = (tempDate.value ?? model.value).set({ year, month: month + 1, day: 1 })

    return tempDate.value
  }

  const onSelectDay = (day: number) => {
    tempDate.value = (tempDate.value ?? model.value).set({ day })

    return tempDate.value
  }

  const onPlaceholderChange = (date: DateValue) => {
    tempDate.value = date
  }

  const getWeekdays = () => {
    const { locale } = toValue(props)
    const weekdays = []
    const baseDate = formattedDates.value.display.obj.toDate(getLocalTimeZone())
    const currentDay = baseDate.getDay()

    for (let i = 0; i < 7; i++) {
      const adjustedDate = new Date(baseDate)
      adjustedDate.setDate(baseDate.getDate() - currentDay + i)
      weekdays.push(adjustedDate.toLocaleDateString(locale, { weekday: 'short' }))
    }

    return weekdays
  }

  const getMonths = () => {
    const { locale } = toValue(props)
    const months = []
    const year = formattedDates.value.display.year

    for (let i = 0; i < 12; i++) {
      const tempDate = new Date(year, i, 1)
      months.push(tempDate.toLocaleDateString(locale, { month: 'short' }))
    }

    return months
  }

  return [
    model,
    parsedModel,
    {
      formattedDates,
      isDateDisabled,
      onSelectDay,
      onSelectMonth,
      onSelectYear,
      onPlaceholderChange,
      getWeekdays,
      getMonths
    }
  ]
}

export default useDateAdapter
