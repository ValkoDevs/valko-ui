import type { Color, Sizes, Variants, Shapes } from '#valkoui/types'

export interface SwitchProps extends Sizes, Shapes, Variants {
  color?: Exclude<Color, 'light' | 'dark'>;
  label?: string;
  position?: boolean;
  disabled?: boolean;
  readonly?: boolean;
  modelValue?: boolean;
}
