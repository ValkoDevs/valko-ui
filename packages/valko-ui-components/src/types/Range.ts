import type { VariantsAlt, Sizes, Colors, Shapes, AriaAttributes } from './common'

export interface Label {
  value: number;
  label: string;
}
export interface RangeProps<R = boolean, T = R extends true ? number[] : number> extends VariantsAlt, Sizes, Colors, Shapes, Pick<AriaAttributes, 'aria-describedby'> {
  modelValue?: T;
  isDouble?: R;
  labels?: Label[]
  min?: number;
  max?: number;
  step?: number;
  striped?: boolean;
  showSteps?: boolean;
}
