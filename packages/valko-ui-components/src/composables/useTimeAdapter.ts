import { type Ref, ref, computed, toValue } from 'vue'
import type { TimeAdapterProps, TimeAdapterResult } from '#valkoui/types/Time'

const useTimeAdapter = (props: TimeAdapterProps | Ref<TimeAdapterProps>): TimeAdapterResult => {
  const model = ref<EpochTimeStamp>(+new Date())
  const tempTime = ref<Date | null>(null)
  const period = ref<'AM' | 'PM'>('AM')

  const formatTime = (epoch: number) => {
    const date = new Date(epoch)
    return {
      hours: date.getHours(),
      minutes: date.getMinutes(),
      seconds: date.getSeconds(),
      obj: date
    }
  }

  const formattedTime = computed(() => {
    const selected = formatTime(model.value)
    const display = tempTime.value ? formatTime(tempTime.value.getTime()) : selected

    return {
      selected,
      display
    }
  })

  const parsedModel = computed(() => {
    const { format } = toValue(props)
    const time = formattedTime.value.selected

    const formatted = format || 'HH:mm:ss'
    const hours12 = time.hours % 12 || 12

    return formatted
      .replace('HH', String(time.hours).padStart(2, '0'))
      .replace('H', String(time.hours))
      .replace('hh', String(hours12).padStart(2, '0'))
      .replace('h', String(hours12))
      .replace('mm', String(time.minutes).padStart(2, '0'))
      .replace('m', String(time.minutes))
      .replace('ss', String(time.seconds).padStart(2, '0'))
      .replace('s', String(time.seconds))
      .replace('A', period.value)
      .replace('a', period.value.toLowerCase())
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
    const currentNumber = formatTimeNumber(is12HourFormat ? convertTo24Hour(hours, period.value) : hours, minutes)

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
    period.value = selectedPeriod
    return tempTime.value
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

  const onSelectTime = () => {
    if (tempTime.value) model.value = +tempTime.value
    tempTime.value = null
  }

  return [
    model,
    parsedModel,
    {
      formattedTime,
      setDisplayUnit,
      onSelectAMPM,
      onSelectTime,
      isTimeDisabled,
      period
    }
  ]
}

export default useTimeAdapter
