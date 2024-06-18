import type { Ref } from 'vue'
import type { Shapes, Sizes, Variants, Colors, Pagination, Sort, Filter } from './common'

export interface TableItem {
  key: string | number;
  [key: string]: unknown;
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

export type SelectionMode = 'single' | 'multiple' | 'row' | 'none'
export interface DataTableConfig<T> {
  headers: TableHeader[];
  paginatedResult: Pagination<T> | Ref<Pagination<T>>;
  selectAllStatus?: boolean | null | undefined;
  selectionMode?: SelectionMode | Ref<SelectionMode>;
}

export interface DataTableInput {
  headers: TableHeader[];
  data: TableItem[];
  isAllSelected: boolean | null;
  selection: TableItem[] | TableItem;
  handleSelect: (item: TableItem) => void;
  handleSelectAll: (allSelected: boolean) => void;
}
export interface DataTableProps extends TableProps, Colors {
  selection: TableItem[] | TableItem;
  isAllSelected?: boolean | null;
  filters?: Filter[];
  sort?: Sort;
  loading?: boolean;
  pagination?: Pagination<TableItem>;
  selectionMode?: SelectionMode;
  page?: number;
}
