import { type DefaultComponent } from '#valkoui'

export interface PaginationProps extends DefaultComponent {
  pages?: number;
  modelValue?: number;
  flat?: boolean;
  disabled?: boolean;
}
