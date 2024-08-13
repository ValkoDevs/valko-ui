import type { Ref } from 'vue'
import type { TableHeader, TableItem, TableProps } from './Table'
import type { Colors, Pagination, Sort, Filter } from './common'

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
  isAllSelected?: boolean | null;
  selection?: TableItem[] | TableItem;
  sort?: Ref<{ field: string; direction?: 'desc' | 'asc' | undefined; } | undefined>;
  filters?: Ref<Filter[]>;
  pageSizeOptions?: number[];
  selectionMode?: SelectionMode;
  onSelect?: (item: TableItem) => void;
  onSelectAll?: (allSelected: boolean) => void;
  onPageChange?: (offset: number) => void;
  onLimitChange?: (limit: number) => void;
  onSort?: (sort: Sort) => void;
  onFilter?: (filters: Filter[]) => void;
}

export interface DataTableProps extends TableProps, Colors {
  selection: TableItem[] | TableItem;
  isAllSelected?: boolean | null;
  filters?: Filter[];
  sort?: Sort;
  loading?: boolean;
  total?: number;
  limit?: number;
  offset?: number;
  selectionMode?: SelectionMode;
  page?: number;
  pageSizeOptions?: number[];
}

export interface ClientSideDataTable<T extends TableItem> {
  data: T[] | Ref<T[]>;
  headers: TableHeader[];
  selectionMode: SelectionMode | Ref<SelectionMode>;
  pageSizeOptions: number[]
}
