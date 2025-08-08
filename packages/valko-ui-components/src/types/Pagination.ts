import type { ColorsWithSurface, Shapes, Sizes, Variants, AriaAttributes } from './common'

export interface PaginationProps extends ColorsWithSurface, Shapes, Sizes, Variants, Pick<AriaAttributes, 'aria-label'> {
  pages?: number;
  modelValue?: number;
  elevated?: boolean;
  disabled?: boolean;
}
