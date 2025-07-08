import type { DefaultComponent, AriaAttributes } from './common'

export interface TextareaProps extends DefaultComponent, Pick<AriaAttributes, 'aria-label' | 'aria-labelledby' | 'aria-describedby' | 'aria-invalid' | 'aria-required'>{
  disabled?: boolean;
  loading?: boolean;
  readonly?: boolean;
  modelValue?: string;
  helpertext?: string;
  label?: string;
  maxlength?: number;
}
