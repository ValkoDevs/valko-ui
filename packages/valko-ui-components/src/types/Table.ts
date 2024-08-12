import type { Shapes, Sizes, Variants } from './common'

export interface TableItem {
  key: string | number;
  [key: string]: string | number | boolean | null;
}

export interface TableHeader {
  key: string;
  label: string;
  field: keyof TableItem;
  sortable?: boolean;
  filterable?: boolean;
  class?: string;
}

export interface TableProps extends Shapes, Sizes, Variants {
  headers: TableHeader[];
  data: TableItem[];
  striped?: boolean;
}
