import type { DefaultComponent } from './common'

export interface RangeProps extends DefaultComponent {
  minThumbValue?: number;
  maxThumbValue?: number
  progress?: number;
  min?: number;
  max?: number;
  step?: number;
  offset?: number;
  striped?: boolean;
  isRange?: boolean;
  showSteps?: boolean;
}
