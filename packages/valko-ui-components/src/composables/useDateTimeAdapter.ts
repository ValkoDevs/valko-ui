import { type Ref, computed, ref, toValue } from 'vue'
import type { CalendarAdapter } from '#valkoui/types/Calendar'
import type { TimeAdapterInterface } from '#valkoui/types/Time'

export interface DateTimeAdapterProps {
  format?: string;
  locale?: string;
  minDate?: EpochTimeStamp;
  maxDate?: EpochTimeStamp;
  disabledDates?: EpochTimeStamp[];
  minTime?: EpochTimeStamp;
  maxTime?: EpochTimeStamp;
  disabledTimes?: EpochTimeStamp[];
}

export interface DateTimeControls {
  commitSelection: () => EpochTimeStamp;
  resetSelection: () => void;
}

export type DateTimeAdapterResult = [
  Ref<EpochTimeStamp>,
  Ref<string>,
  CalendarAdapter,
  TimeAdapterInterface,
  DateTimeControls
]

const useDateTimeAdapter = (props: DateTimeAdapterProps | Ref<DateTimeAdapterProps>): DateTimeAdapterResult => {
  const model = ref<EpochTimeStamp>(+new Date())
  const tempDate = ref<Date | null>(null)
  const tempTime = ref<Date | null>(null)

  // === DATE ADAPTER LOGIC ===

  type DayOfWeek = 0 | 1 | 2 | 3 | 4 | 5 | 6

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

    const selected = formatDate(tempDate.value ?? (model.value ? new Date(model.value) : new Date()))
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

  const disabledDates = computed(() => {
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
    const currentModel = new Date(model.value)
    tempDate.value = new Date(selectedDate.getFullYear(), selectedDate.getMonth(), day,
      currentModel.getHours(), currentModel.getMinutes(), currentModel.getSeconds())

    return +tempDate.value
  }

  const getWeekdays = () => {
    const { locale } = toValue(props)
    const weekdays = []
    const currentDate = formattedDates.value.display.obj
    const currentDay = currentDate.getDay()

    for (let i = 0; i < 7; i++) {
      const adjustedDate = new Date(currentDate)
      adjustedDate.setDate(currentDate.getDate() - currentDay + i)
      weekdays.push(adjustedDate.toLocaleDateString(locale, { weekday: 'short' }))
    }

    return weekdays
  }

  const getMonths = () => {
    const { locale } = toValue(props)
    const months = []
    const year = formattedDates.value.display.year

    for (let i = 0; i < 12; i++) {
      const date = new Date(year, i, 1)
      months.push(date.toLocaleDateString(locale, { month: 'short' }))
    }

    return months
  }

  const calendarAdapter: CalendarAdapter = {
    formattedDates,
    disabledDates,
    onSelectDay,
    onSelectMonth,
    onSelectYear,
    getWeekdays,
    getMonths
  }

  // === TIME ADAPTER LOGIC ===

  const formatTime = (epoch: number) => {
    const date = new Date(epoch)
    return {
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
      obj: date
    }
  }

  const parsedPeriod = computed<'AM' | 'PM'>(() => {
    const hours = formatTime(model.value).hours
    return hours >= 12 ? 'PM' : 'AM'
  })

  const userPeriod = ref<'AM' | 'PM'>(parsedPeriod.value)

  const formattedTime = computed(() => {
    const { format } = toValue(props)
    const selected = formatTime(model.value)
    const display = tempTime.value ? formatTime(tempTime.value.getTime()) : selected

    const is12HourFormat = /[h]/.test(format || '')

    return {
      selected,
      display: {
        ...display,
        hours: is12HourFormat ? display.hours % 12 || 12 : display.hours
      }
    }
  })

  const isTimeDisabled = (hours: number, minutes = 0) => {
    const { minTime, maxTime, disabledTimes, format } = toValue(props)

    const is12HourFormat = /[h]/.test(format || '') || /[A|a]/.test(format || '')

    const convertTo24Hour = (h: number, period: 'AM' | 'PM') => {
      if (h === 12) return period === 'AM' ? 0 : 12
      return period === 'PM' ? h + 12 : h
    }

    const minDate = minTime ? new Date(+minTime * 1000) : null
    const maxDate = maxTime ? new Date(+maxTime * 1000) : null

    const formatTimeNumber = (h: number, m: number) => +(`${h}` + `${m}`.padStart(2, '0'))

    const minNumber = minDate ? formatTimeNumber(minDate.getUTCHours(), minDate.getMinutes()) : -1
    const maxNumber = maxDate ? formatTimeNumber(maxDate.getUTCHours(), maxDate.getMinutes()) : Infinity
    const currentNumber = formatTimeNumber(is12HourFormat ? convertTo24Hour(hours, userPeriod.value) : hours, minutes)

    const isSpecificallyDisabled = disabledTimes
      ? disabledTimes.some(disabledTime => {
        const disabledDate = new Date(disabledTime * 1000)
        const disabledHour = is12HourFormat
          ? convertTo24Hour(disabledDate.getUTCHours() % 12 || 12, disabledDate.getUTCHours() >= 12 ? 'PM' : 'AM')
          : disabledDate.getUTCHours()
        const disabledNumber = formatTimeNumber(disabledHour, disabledDate.getMinutes())
        return disabledNumber === currentNumber
      })
      : false

    return minNumber > currentNumber || maxNumber < currentNumber || isSpecificallyDisabled
  }

  const onSelectAMPM = (selectedPeriod: 'AM' | 'PM') => {
    userPeriod.value = selectedPeriod

    const hours = tempTime.value
      ? tempTime.value.getHours()
      : formatTime(model.value).hours

    const adjustedHours = selectedPeriod === 'AM' ? hours % 12 : (hours % 12) + 12

    if (tempTime.value) {
      tempTime.value.setHours(adjustedHours)
    } else {
      tempTime.value = new Date(model.value)
      tempTime.value.setHours(adjustedHours)
    }
  }

  const setDisplayUnit = (unit: 'h' | 'm' | 's', value: number) => {
    const unitMap: Record<string, keyof Pick<Date, 'setHours' | 'setMinutes' | 'setSeconds'>> = {
      h: 'setHours',
      m: 'setMinutes',
      s: 'setSeconds'
    }

    const helperDate = new Date(
      tempTime.value
        ? tempTime.value
        : model.value
          ? model.value
          : 0
    )
    helperDate[unitMap[unit]](value)

    tempTime.value = helperDate
  }

  // No-op: VkTime calls this internally, but for DateTimePicker
  // the actual commit is handled by controls.commitSelection()
  const onSelectTime = () => {}

  const timeAdapter: TimeAdapterInterface = {
    formattedTime,
    setDisplayUnit,
    onSelectAMPM,
    onSelectTime,
    isTimeDisabled,
    period: userPeriod
  }

  // === CONTROLS ===

  const commitSelection = (): EpochTimeStamp => {
    const base = tempDate.value
      ? new Date(tempDate.value)
      : new Date(model.value)

    if (tempTime.value) {
      base.setHours(
        tempTime.value.getHours(),
        tempTime.value.getMinutes(),
        tempTime.value.getSeconds()
      )
    }

    model.value = +base
    tempDate.value = null
    tempTime.value = null

    return model.value
  }

  const resetSelection = () => {
    tempDate.value = null
    tempTime.value = null
  }

  const controls: DateTimeControls = {
    commitSelection,
    resetSelection
  }

  // === COMBINED PARSED MODEL ===

  const parsedModel = computed(() => {
    const { format } = toValue(props)
    const date = formattedDates.value.selected
    const time = formattedTime.value.selected
    const hours12 = time.hours % 12 || 12

    let result = format || 'YYYY-MM-DD HH:mm'

    // Date replacements
    result = result
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

    // Time replacements
    result = result
      .replace('HH', String(time.hours).padStart(2, '0'))
      .replace('H', String(time.hours))
      .replace('hh', String(hours12).padStart(2, '0'))
      .replace('h', String(hours12))
      .replace('mm', String(time.minutes).padStart(2, '0'))
      .replace('m', String(time.minutes))
      .replace('ss', String(time.seconds).padStart(2, '0'))
      .replace('s', String(time.seconds))
      .replace('A', parsedPeriod.value)
      .replace('a', parsedPeriod.value.toLowerCase())

    return result
  })

  return [
    model,
    parsedModel,
    calendarAdapter,
    timeAdapter,
    controls
  ]
}

export default useDateTimeAdapter
