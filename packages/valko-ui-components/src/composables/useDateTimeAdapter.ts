import { type Ref, computed, ref, toValue } from 'vue'
import type { CalendarAdapter } from '#valkoui/types/Calendar'
import type { TimeAdapterInterface } from '#valkoui/types/Time'
import type { DateTimeAdapterProps, DateTimeControls, DateTimeAdapterResult } from '#valkoui/types/DateTimePicker'
import useDateAdapter from '#valkoui/composables/useDateAdapter.ts'
import useTimeAdapter from '#valkoui/composables/useTimeAdapter.ts'
import formatDateTime from '#valkoui/utils/formatDateTime.ts'

const useDateTimeAdapter = (props: DateTimeAdapterProps | Ref<DateTimeAdapterProps>): DateTimeAdapterResult => {
  const model = ref<EpochTimeStamp>(+new Date())

  const dateProps = computed(() => {
    const normalizedProps = toValue(props)

    return {
      format: normalizedProps.format,
      locale: normalizedProps.locale,
      minDate: normalizedProps.minDate,
      maxDate: normalizedProps.maxDate,
      disabledDates: normalizedProps.disabledDates
    }
  })

  const timeProps = computed(() => {
    const normalizedProps = toValue(props)

    return {
      format: normalizedProps.format,
      locale: normalizedProps.locale,
      minTime: normalizedProps.minTime,
      maxTime: normalizedProps.maxTime,
      disabledTimes: normalizedProps.disabledTimes
    }
  })

  const { adapter: dateAdapter } = useDateAdapter(dateProps, model)
  const { adapter: timeAdapterRaw } = useTimeAdapter(timeProps, model)

  const calendarAdapter: CalendarAdapter = {
    ...dateAdapter,
    formattedDates: computed(() => {
      const original = dateAdapter.formattedDates.value
      return { ...original, selected: original.display }
    })
  }

  const timeAdapter: TimeAdapterInterface = {
    ...timeAdapterRaw,
    onSelectTime: () => {}
  }

  const commitSelection = (): EpochTimeStamp => {
    const dateDisplay = calendarAdapter.formattedDates.value.display
    const timeDisplay = timeAdapterRaw.formattedTime.value.display

    const base = new Date(dateDisplay.year, dateDisplay.month, dateDisplay.day)
    base.setHours(
      timeDisplay.obj.getHours(),
      timeDisplay.obj.getMinutes(),
      timeDisplay.obj.getSeconds()
    )

    model.value = +base

    dateAdapter.resetTempState?.()
    timeAdapterRaw.resetTempState?.()

    return model.value
  }

  const resetSelection = () => {
    dateAdapter.resetTempState?.()
    timeAdapterRaw.resetTempState?.()
  }

  const controls: DateTimeControls = {
    commitSelection,
    resetSelection
  }

  const parsedModel = computed(() => {
    const { format, locale } = toValue(props)
    return formatDateTime(new Date(model.value), format || 'YYYY-MM-DD HH:mm', locale)
  })

  return {
    model,
    displayValue: parsedModel,
    adapter: {
      date: calendarAdapter,
      time: timeAdapter
    },
    controls
  }
}

export default useDateTimeAdapter
