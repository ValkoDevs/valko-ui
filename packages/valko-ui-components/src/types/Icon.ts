import { AriaAttributes } from './common'
import type { IconBase } from '../styles/Icon.styles'

export interface IconProps extends Pick<AriaAttributes, 'ariaLabel'> {
  name: string;
  styleSlots?: Partial<IconBase>;
}
