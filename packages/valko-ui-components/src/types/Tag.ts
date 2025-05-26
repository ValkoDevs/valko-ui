import type { Shapes, ColorsWithSurface, Sizes, VariantsAlt } from './common'

export interface TagProps extends Shapes, Sizes, VariantsAlt, ColorsWithSurface {
  text: string;
  iconLeft?: string;
  iconRight?: string;
  disabled?: boolean;
  closable?: boolean;
  isPressable?: boolean;
}
