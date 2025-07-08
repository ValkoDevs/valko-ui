import type { Sizes, ColorsWithSurface, Variants, Shapes, AriaAttributes } from './common'

export type InputType = 'text' | 'password' | 'email' | 'number'
export type InputCursor = 'text' | 'pointer'

export interface InputProps extends Sizes, ColorsWithSurface, Variants, Shapes, Pick<AriaAttributes, 'aria-label' | 'aria-labelledby' | 'aria-describedby' | 'aria-invalid' | 'aria-required'> {
  type?: InputType;
  cursor?: InputCursor;
  modelValue?: string | number;
  helpertext?: string;
  min?: number;
  max?: number;
  step?: number;
  label?: string;
  disabled?: boolean;
  loading?: boolean;
  readonly?: boolean;
  clearable?: boolean;
}
