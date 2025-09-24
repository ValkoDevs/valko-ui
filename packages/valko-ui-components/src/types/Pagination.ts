import type { ColorsWithSurface, Shapes, Sizes, Variants, AriaAttributes } from './common'
import type { PaginationSlots } from '../styles/Pagination.styles'

export interface PaginationProps extends ColorsWithSurface, Shapes, Sizes, Variants, Pick<AriaAttributes, 'aria-label'> {
  pages?: number;
  modelValue?: number;
  elevated?: boolean;
  disabled?: boolean;
  styleSlots?: Partial<PaginationSlots>;
}
