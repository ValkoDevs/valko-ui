import type { DefaultComponent, AriaAttributes } from './common'
import type { TimeProps } from './Time'
import type { TimepickerSlots } from '../styles/Timepicker.styles'
export interface TimepickerProps extends DefaultComponent, TimeProps, Omit<AriaAttributes, 'ariaDescription'> {
  isOpen: boolean;
  /**
   * @deprecated Not used by the component anymore. Kept for backwards compatibility only.
   */
  parsedModel?: string;
  label?: string;
  /** Id forwarded to the TimeField's hidden form input. */
  id?: string;
  /** Name forwarded to the TimeField's hidden form input. */
  name?: string;
  okButtonLabel?: string;
  styleSlots?: Partial<TimepickerSlots>;
}
