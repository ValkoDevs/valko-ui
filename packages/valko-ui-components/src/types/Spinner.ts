import type { Sizes, ColorsWithSurface } from './common'
import type { SpinnerSlots } from '../styles/Spinner.styles'

export interface SpinnerProps extends Sizes, ColorsWithSurface {
  name?: string;
  loading?: boolean;
  condensed?: boolean;
  styleSlots?: Partial<SpinnerSlots>;
}
