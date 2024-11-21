import type { DefaultComponent } from './common'
import type { TimeProps } from './Time'

export interface TimepickerProps extends DefaultComponent, TimeProps {
  isOpen: boolean;
  parsedModel: string;
  flat?: boolean;
  label?: string;
  okButtonLabel?: string;
}
