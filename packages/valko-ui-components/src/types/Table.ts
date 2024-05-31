import type { Shapes, Sizes, Variants, Colors } from './common'

export interface TableItem {
  key: string | number;
  [key: string]: unknown;
}

export interface TableHeader {
  key: string;
  label: string;
  field: keyof TableItem;
  sortable: boolean;
  filterable: boolean;
  class?: string;
}

export interface TableProps extends Shapes, Sizes, Variants {
  headers: TableHeader[];
  data: Partial<TableItem>[];
  striped?: boolean;
}

export interface DataTableProps extends TableProps, Colors {
  selectable?: 'single' | 'multiple' | 'none';
  selectionType?: 'check' | 'row' | 'none';
  sortDir?: 'asc' | 'desc';
  sortBy?: string | null;
  loading?: boolean;
  records?: number;
  page?: number;
}
