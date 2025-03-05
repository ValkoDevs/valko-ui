import type { Ref, ComputedRef } from 'vue'
import type { DefaultComponent } from './common'

export type TimeAdapterProps = Pick<TimeProps, 'format' | 'locale' | 'minTime' | 'maxTime' | 'disabledTimes' | 'modelValue'>

export type TimeAdapterInterface = {
  formattedTime: ComputedRef<{
    selected: FormattedTime,
    display: FormattedTime
  }>,
  setDisplayUnit: (unit: 'h' | 'm' | 's', value: number) => void,
  onSelectAMPM: (period: 'AM' | 'PM') => void,
  onSelectTime: () => void,
  isTimeDisabled: (hours: number, minutes?: number) => boolean | undefined,
  period: Ref<'AM' | 'PM'>
}

export interface FormattedTime {
  hours: number;
  minutes: number;
  seconds: number;
  obj: Date;
}

export type TimeAdapterResult = [
  Ref<EpochTimeStamp>,
  ComputedRef<string>,
  TimeAdapterInterface
]

export interface TimeProps extends DefaultComponent {
  adapter: TimeAdapterInterface;
  modelValue?: EpochTimeStamp;
  okButtonLabel?: string;
  format?: string;
  locale?: string;
  minTime?: EpochTimeStamp;
  maxTime?: EpochTimeStamp;
  disabledTimes?: EpochTimeStamp[];
  minuteStep?: 1 | 5 | 10 | 15 | 20 | 30;
}
