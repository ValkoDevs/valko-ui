import type { Shapes, Color, Sizes, Variants } from '#valkoui/types'

export interface TagProps extends Shapes, Sizes, Variants {
  text: string;
  color?: Color | 'neutral';
  iconLeft?: string;
  iconRight?: string;
  disabled?: boolean;
  closable?: boolean;
  isPressable?: boolean;
}
