import type { Shapes, Color, Sizes, Variants } from './common'

export interface DataTableHeader {
  key: string;
  label: string;
  sortable: boolean;
}

export interface DataTableItem {
  key: string;
  [key: string]: unknown;
}

export interface DataTableProps extends Shapes, Sizes, Variants {
  headers: DataTableHeader[];
  data: DataTableItem[];
  color?: Color | 'neutral';
  sortBy?: string | null;
  sortDir?: 'asc' | 'desc';
  records?: number;
  page?: number;
  selectable?: 'single' | 'multiple' | 'none';
  selectionType?: 'check' | 'row';
  striped?: boolean;
  loading?: boolean;
  flat?: boolean;
  layout?: 'auto' | 'fixed';
}
