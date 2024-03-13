import { type DefaultComponent } from '#valkoui/types'

export interface PaginationProps extends DefaultComponent {
  pages?: number;
  modelValue?: number;
  flat?: boolean;
  disabled?: boolean;
}
