import type { Sizes, ColorsWithSurface, Variants, Shapes, AriaAttributes } from './common'
import type { InputSlots } from '../styles/Input.styles'

export type InputType = 'text' | 'password' | 'email' | 'number'
export type InputCursor = 'text' | 'pointer'

export interface InputProps extends Sizes, ColorsWithSurface, Variants, Shapes, Omit<AriaAttributes, 'aria-description'> {
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
  iconClickFocus?: boolean;
  styleSlots?: Partial<InputSlots>;
}
