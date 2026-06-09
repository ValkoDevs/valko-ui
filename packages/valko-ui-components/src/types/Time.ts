import type { Ref, ComputedRef } from 'vue'
import type { DefaultComponent } from './common'
import type { TimeSlots } from '../styles/Time.styles'

export type TimeAdapterProps = Pick<TimeProps, 'format' | 'locale' | 'minTime' | 'maxTime' | 'disabledTimes' | 'modelValue'>
export type MinuteStep = 1 | 5 | 10 | 15 | 20 | 30

export type TimeAdapterInterface = {
  formattedTime: ComputedRef<{
    selected: FormattedTime,
    display: FormattedTime
  }>,
  setDisplayUnit: (unit: 'h' | 'm' | 's', value: number) => void,
  onSelectAMPM: (period: 'AM' | 'PM') => void,
  onSelectTime: () => void,
  isTimeDisabled: (hours: number, minutes?: number) => boolean | undefined,
  period: Ref<'AM' | 'PM'>,
  resetTempState?: () => void
}

export interface FormattedTime {
  hours: number;
  minutes: number;
  seconds: number;
  obj: Date;
}

export interface TimeAdapterResult {
  model: Ref<EpochTimeStamp>;
  displayValue: ComputedRef<string>;
  adapter: TimeAdapterInterface;
}

export interface TimeProps extends DefaultComponent {
  adapter: TimeAdapterInterface;
  modelValue?: EpochTimeStamp;
  okButtonLabel?: string;
  format?: string;
  locale?: string;
  minTime?: EpochTimeStamp;
  maxTime?: EpochTimeStamp;
  disabledTimes?: EpochTimeStamp[];
  minuteStep?: MinuteStep;
  styleSlots?: Partial<TimeSlots>;
}
