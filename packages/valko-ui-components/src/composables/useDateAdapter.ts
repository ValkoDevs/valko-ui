import { type Ref, computed, ref, toValue } from 'vue'
import type { AdapterProps, DayOfWeek, AdapterResult } from '#valkoui/types/Calendar'

const useDateAdapter = (props: AdapterProps | Ref<AdapterProps>): AdapterResult => {
  const tempDate = ref<Date | null>(null)
  const model = ref<EpochTimeStamp>(+new Date())

  const formatDate = (normalizedDate: Date) => {
    const helperDate = new Date(normalizedDate.getFullYear(), normalizedDate.getMonth() + 1, 0)
    const lastDayOfMonth = helperDate.getDate()
    helperDate.setDate(1)
    const firstWeekDay = helperDate.getDay() as DayOfWeek

    return {
      day: normalizedDate.getDate(),
      month: normalizedDate.getMonth(),
      year: normalizedDate.getFullYear(),
      lastDayOfMonth,
      firstWeekDay,
      obj: normalizedDate as Date
    }
  }

  const formattedDates = computed(() => {
    const { minDate, maxDate } = toValue(props)

    const selected = formatDate(model.value ? new Date(model.value) : new Date())
    const display = tempDate.value ? formatDate(toValue(tempDate) as Date) : selected
    const min = minDate ? formatDate(new Date(+minDate)) : undefined
    const max = maxDate ? formatDate(new Date(+maxDate)) : undefined

    return {
      selected,
      display,
      min,
      max
    }
  })

  const parsedModel = computed(() => {
    const { format } = toValue(props)
    const date = formattedDates.value.selected

    const result = format || 'YYYY-MM-DD'

    return result
      .replace('YYYY', `${date.year}`)
      .replace('YY', `${date.year}`.slice(-2))
      .replace('MMMM', date.obj.toLocaleDateString(undefined, { month: 'long' }))
      .replace('MMM', date.obj.toLocaleDateString(undefined, { month: 'short' }))
      .replace('MM', `${date.month + 1}`.padStart(2, '0'))
      .replace('M', `${date.month + 1}`)
      .replace('DD', `${date.day}`.padStart(2, '0'))
      .replace('D', `${date.day}`)
      .replace('dddd', date.obj.toLocaleDateString(undefined, { weekday: 'long' }))
      .replace('ddd', date.obj.toLocaleDateString(undefined, { weekday: 'short' }))
      .replace('dd', date.obj.toLocaleDateString(undefined, { weekday: 'narrow' }))
  })

  const disabledDates = computed(() =>{
    const { disabledDates } = toValue(props)

    return disabledDates ? disabledDates
      .map(timestamp => formatDate(new Date(timestamp)))
      .filter(date => date.year === formattedDates.value.display.year && date.month === formattedDates.value.display.month)
      .map(date => date.day) : []
  })

  const onSelectYear = (year: number) => {
    tempDate.value = new Date(year, 0, 1)
    return +tempDate.value
  }

  const onSelectMonth = (month: number) => {
    const year = tempDate.value ? tempDate.value.getFullYear() : new Date().getFullYear()
    tempDate.value = new Date(year, month, 1)

    return +tempDate.value
  }

  const onSelectDay = (day: number) => {
    const selectedDate = tempDate.value ? tempDate.value : new Date()
    tempDate.value = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day)

    return +tempDate.value
  }

  const getWeekdays = () => {
    const { locale } = toValue(props)
    const weekdays = []
    const tempDate = formattedDates.value.display.obj
    const currentDay = tempDate.getDay()

    for (let i = 0; i < 7; i++) {
      const adjustedDate = new Date(tempDate)
      adjustedDate.setDate(tempDate.getDate() - currentDay + i)
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
      disabledDates,
      onSelectDay,
      onSelectMonth,
      onSelectYear,
      getWeekdays,
      getMonths
    }
  ]
}

export default useDateAdapter
