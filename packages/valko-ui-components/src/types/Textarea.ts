import type { DefaultComponent, AriaAttributes } from './common'

export interface TextareaProps extends DefaultComponent, Omit<AriaAttributes, 'aria-description'>{
  disabled?: boolean;
  loading?: boolean;
  readonly?: boolean;
  modelValue?: string;
  helpertext?: string;
  label?: string;
  maxlength?: number;
}
