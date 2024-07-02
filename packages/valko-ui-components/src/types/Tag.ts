import type { Shapes, Color, Sizes, VariantsAlt } from './common'

export interface TagProps extends Shapes, Sizes, VariantsAlt {
  text: string;
  color?: Color | 'neutral';
  iconLeft?: string;
  iconRight?: string;
  disabled?: boolean;
  closable?: boolean;
  isPressable?: boolean;
}
