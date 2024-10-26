import type { Shapes, Colors, Sizes, VariantsAlt } from './common'

export interface TagProps extends Shapes, Sizes, VariantsAlt, Colors {
  text: string;
  iconLeft?: string;
  iconRight?: string;
  disabled?: boolean;
  closable?: boolean;
  isPressable?: boolean;
}
