import { type Ref, ref, computed, toValue } from 'vue'
import type { TimeAdapterProps, TimeAdapterResult } from '#valkoui/types/Time'
import formatDateTime from '#valkoui/utils/formatDateTime.ts'

const useTimeAdapter = (props: TimeAdapterProps | Ref<TimeAdapterProps>, externalModel?: Ref<EpochTimeStamp>): TimeAdapterResult => {
  const model = externalModel ?? ref<EpochTimeStamp>(+new Date())
  const tempTime = ref<Date | null>(null)

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

  const parsedModel = computed(() => {
    const { format, locale } = toValue(props)
    return formatDateTime(new Date(model.value), format || 'HH:mm:ss', locale)
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

  const onSelectTime = () => {
    if (tempTime.value) model.value = +tempTime.value
    tempTime.value = null
  }

  return {
    model,
    displayValue: parsedModel,
    adapter: {
      formattedTime,
      setDisplayUnit,
      onSelectAMPM,
      onSelectTime,
      isTimeDisabled,
      period: userPeriod,
      resetTempState: () => { tempTime.value = null }
    }
  }
}

export default useTimeAdapter
