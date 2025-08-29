import { AriaAttributes } from './common'
import type { IconSlots } from '../styles/Icon.styles'

export interface IconProps extends Pick<AriaAttributes, 'aria-label'> {
  name: string;
  styleSlots?: Partial<IconSlots>;
}
