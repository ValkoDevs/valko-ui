import type { DefaultComponent } from './common'
import type { TimeProps } from './Time'

export interface TimepickerProps extends DefaultComponent, TimeProps {
  parsedModel: string;
  flat?: boolean;
  label?: string;
}
