import type { DefaultComponent, AriaAttributes } from './common'
import type { TimeProps } from './Time'
export interface TimepickerProps extends DefaultComponent, TimeProps, Omit<AriaAttributes, 'ariaDescription'> {
  isOpen?: boolean;
  parsedModel: string;
  label?: string;
  okButtonLabel?: string;
}
