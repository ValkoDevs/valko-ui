import type { Ref, ComputedRef } from 'vue'
import { DefaultComponent } from './common'

export type TimeAdapterProps = Pick<TimeProps, 'format' | 'locale' | 'minTime' | 'maxTime' | 'disabledTimes' | 'modelValue'>

export type TimeAdapterInterface = {
  formattedTime: ComputedRef<{
    selected: FormattedTime,
    display: FormattedTime
  }>,
  onSelectHour: (hour: number) => void,
  onSelectMinute: (minute: number) => void,
  onSelectSecond: (second: number) => void,
  onSelectAMPM: (period: 'AM' | 'PM') => void,
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
  format?: string;
  locale?: string;
  minTime?: number;
  maxTime?: number;
  disabledTimes?: number[];
}
