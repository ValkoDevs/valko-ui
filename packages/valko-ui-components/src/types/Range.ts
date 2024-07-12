import type { DefaultComponent } from './common'

export interface RangeProps extends DefaultComponent {
  firstValue?: number;
  secondValue?: number
  progress?: number;
  min?: number;
  max?: number;
  step?: number;
  striped?: boolean;
  condensed?: boolean;
  double?: boolean;
}
