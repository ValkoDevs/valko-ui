import type { Color, Sizes, Variants, Shapes } from './common'

export interface SwitchProps extends Sizes, Shapes, Variants {
  color?: Exclude<Color, 'light' | 'dark'>;
  label?: string;
  position?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  modelValue?: boolean;
  flat?: boolean;
}
