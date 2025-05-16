import type { ColorsWithSurface, Shapes, Sizes, Variants } from './common'

export interface PaginationProps extends ColorsWithSurface, Shapes, Sizes, Variants {
  pages?: number;
  modelValue?: number;
  elevated?: boolean;
  disabled?: boolean;
}
