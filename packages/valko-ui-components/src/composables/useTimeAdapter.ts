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

  const onSelectTimeUnit = (unit: 'hours' | 'minutes' | 'seconds', value: number) => {
    const { minTime: min, maxTime: max, disabledTimes: disabled } = toValue(props)

    if ( unit === 'hours' && ((min && value < min) || (max && value > max) || (disabled?.includes(value)))) {
      return model.value
    }

    const date = new Date(model.value)
    date[`set${unit.charAt(0).toUpperCase() + unit.slice(1)}` as 'setHours' | 'setMinutes' | 'setSeconds'](value)
    model.value = date.getTime()

    return model.value
  }

  const onSelectAMPM = (selectedPeriod: 'AM' | 'PM') => {
    period.value = selectedPeriod
    return model.value
  }

  return [
    model,
    parsedModel,
    {
      formattedTime,
      onSelectHour: (hour: number) => onSelectTimeUnit('hours', hour),
      onSelectMinute: (minute: number) => onSelectTimeUnit('minutes', minute),
      onSelectSecond: (second: number) => onSelectTimeUnit('seconds', second),
      onSelectAMPM,
      period
    }
  ]
}

export default useTimeAdapter
