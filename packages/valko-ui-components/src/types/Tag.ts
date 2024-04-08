import type { Shapes, Color, Sizes, Variants } from '#valkoui/types'

export interface TagProps extends Shapes, Sizes, Variants {
  color?: Color | 'neutral';
  text: string;
  iconLeft?: string;
  iconRight?: string;
  disabled?: boolean;
  closable?: boolean;
  isPressable?: boolean;
}
