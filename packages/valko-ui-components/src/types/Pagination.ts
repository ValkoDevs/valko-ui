import type { DefaultComponent } from './common'

export interface PaginationProps extends DefaultComponent {
  pages?: number;
  modelValue?: number;
  flat?: boolean;
  disabled?: boolean;
}
