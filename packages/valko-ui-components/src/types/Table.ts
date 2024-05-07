import type { Shapes, Color, Sizes, Variants } from './common'

export interface TableHeader {
  key: string;
  label: string;
  sortable: boolean;
}

export interface TableItem {
  key: string;
  [key: string]: unknown;
}

export interface TableProps extends Shapes, Sizes, Variants {
  headers: TableHeader[];
  data: TableItem[];
  color?: Color | 'neutral';
  selectable?: 'single' | 'multiple' | 'none';
  sortDir?: 'asc' | 'desc';
  selectionType?: 'check' | 'row';
  layout?: 'auto' | 'fixed';
  sortBy?: string | null;
  striped?: boolean;
  loading?: boolean;
  flat?: boolean;
}
