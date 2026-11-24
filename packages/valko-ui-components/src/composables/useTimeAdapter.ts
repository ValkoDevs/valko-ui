import { type Ref, ref, shallowRef, computed, toValue } from 'vue'
import { Time } from '@internationalized/date'
import type { TimeAdapterProps, TimeAdapterResult } from '#valkoui/types/Time'

const UNIT_FIELDS = { h: 'hour', m: 'minute', s: 'second' } as const

// Legacy constraint semantics: hours in UTC, minutes on the local clock.
export const timeFromEpochSeconds = (epochSeconds: number): Time => {
  const date = new Date(+epochSeconds * 1000)
  return new Time(date.getUTCHours(), date.getMinutes())
}

const useTimeAdapter = (props: TimeAdapterProps | Ref<TimeAdapterProps>): TimeAdapterResult => {
  const model = ref<EpochTimeStamp>(+new Date())
  // `shallowRef` keeps the exact `Time` type — deep refs unwrap and flatten the class.
  const tempTime = shallowRef<Time | null>(null)

  const modelTime = computed(() => {
    const date = new Date(model.value)
    return new Time(date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds())
  })

  const parsedPeriod = computed<'AM' | 'PM'>(() => (modelTime.value.hour >= 12 ? 'PM' : 'AM'))

  const userPeriod = ref<'AM' | 'PM'>(parsedPeriod.value)

  const toDateOnModelDate = (time: Time): Date => {
    const date = new Date(model.value)
    date.setHours(time.hour, time.minute, time.second, time.millisecond)
    return date
  }

  const formattedTime = computed(() => {
    const { format } = toValue(props)
    const selectedTime = modelTime.value
    const displayValue = tempTime.value ?? selectedTime
    const is12 = /[h]/.test(format || '')

    return {
      selected: {
        hours: selectedTime.hour,
        minutes: selectedTime.minute,
        seconds: selectedTime.second,
        obj: new Date(model.value)
      },
      display: {
        hours: is12 ? displayValue.hour % 12 || 12 : displayValue.hour,
        minutes: displayValue.minute,
        seconds: displayValue.second,
        obj: toDateOnModelDate(displayValue)
      }
    }
  })

  const parsedModel = computed(() => {
    const { format } = toValue(props)
    const time = modelTime.value
    const formatted = format || 'HH:mm:ss'
    const hours12 = time.hour % 12 || 12

    return formatted
      .replace('HH', String(time.hour).padStart(2, '0'))
      .replace('H', String(time.hour))
      .replace('hh', String(hours12).padStart(2, '0'))
      .replace('h', String(hours12))
      .replace('mm', String(time.minute).padStart(2, '0'))
      .replace('m', String(time.minute))
      .replace('ss', String(time.second).padStart(2, '0'))
      .replace('s', String(time.second))
      .replace('A', parsedPeriod.value)
      .replace('a', parsedPeriod.value.toLowerCase())
  })

  const convertTo24Hour = (hours: number, period: 'AM' | 'PM') => {
    if (hours === 12) return period === 'AM' ? 0 : 12
    return period === 'PM' ? hours + 12 : hours
  }

  const isTimeDisabled = (hours: number, minutes = 0) => {
    const { minTime, maxTime, disabledTimes, format } = toValue(props)

    const is12 = /[h]/.test(format || '') || /[A|a]/.test(format || '')

    const minTimeValue = minTime ? timeFromEpochSeconds(minTime) : null
    const maxTimeValue = maxTime ? timeFromEpochSeconds(maxTime) : null
    const currentTime = new Time(is12 ? convertTo24Hour(hours, userPeriod.value) : hours, minutes)

    const isSpecificallyDisabled = disabledTimes
      ? disabledTimes.some(disabledTime => {
        const disabledDate = new Date(disabledTime * 1000)
        const disabledHour = is12
          ? convertTo24Hour(disabledDate.getUTCHours() % 12 || 12, disabledDate.getUTCHours() >= 12 ? 'PM' : 'AM')
          : disabledDate.getUTCHours()
        return currentTime.compare(new Time(disabledHour, disabledDate.getMinutes())) === 0
      })
      : false

    return (
      (minTimeValue !== null && minTimeValue.compare(currentTime) > 0) ||
      (maxTimeValue !== null && maxTimeValue.compare(currentTime) < 0) ||
      isSpecificallyDisabled
    )
  }

  const onSelectAMPM = (selectedPeriod: 'AM' | 'PM') => {
    userPeriod.value = selectedPeriod

    const hours = (tempTime.value ?? modelTime.value).hour
    const adjustedHours = selectedPeriod === 'AM' ? hours % 12 : (hours % 12) + 12

    tempTime.value = (tempTime.value ?? modelTime.value).set({ hour: adjustedHours })
  }

  const setDisplayUnit = (unit: 'h' | 'm' | 's', value: number) => {
    tempTime.value = (tempTime.value ?? modelTime.value).set({ [UNIT_FIELDS[unit]]: value })
  }

  const onSelectTime = () => {
    if (tempTime.value) model.value = +toDateOnModelDate(tempTime.value)
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
      period: userPeriod
    }
  ]
}

export default useTimeAdapter
