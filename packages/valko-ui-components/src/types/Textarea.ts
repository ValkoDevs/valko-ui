import type { DefaultComponent, AriaAttributes } from './common'
import type { TextareaSlots } from '../styles/Textarea.styles'

export interface TextareaProps extends DefaultComponent, Omit<AriaAttributes, 'aria-description'>{
  disabled?: boolean;
  loading?: boolean;
  readonly?: boolean;
  modelValue?: string;
  helpertext?: string;
  label?: string;
  maxlength?: number;
  styleSlots?: Partial<TextareaSlots>;
}
