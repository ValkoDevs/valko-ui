import type { Ref } from 'vue'
import type { TableHeader, TableItem, TableProps } from './Table'
import type { Pagination, Sort, Filter } from './common'

export type SelectionMode = 'single' | 'multiple' | 'rowSingle' | 'rowMultiple' | 'none'

export interface DataTableConfig<T> {
  headers: TableHeader[];
  paginatedResult: Pagination<T> | Ref<Pagination<T>>;
  selectAllStatus?: boolean | null | undefined;
  selectionMode?: SelectionMode | Ref<SelectionMode>;
  draggable?: boolean | Ref<boolean>;
}

export interface DataTableInput {
  headers: TableHeader[];
  data: TableItem[];
  isAllSelected?: boolean | null;
  selection?: TableItem[] | TableItem;
  sort?: Sort | undefined;
  filters?: Filter[];
  pageSizeOptions?: number[];
  selectionMode?: SelectionMode;
  draggable?: boolean | Ref<boolean>;
  onSelect?: (item: TableItem) => void;
  onSelectAll?: (allSelected: boolean) => void;
  onPageChange?: (offset: number) => void;
  onLimitChange?: (limit: number) => void;
  onSort?: (sort: Sort) => void;
  onFilter?: (filters: Filter[]) => void;
  onDragStart?: (index: number) => void;
  onDragOver?: (event: DragEvent) => void;
  onDrop?: (event: DragEvent, index: number) => void;
}

export interface DataTableProps extends TableProps {
  selection?: TableItem[] | TableItem;
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
  pageSizeOptions: number[];
  draggable: boolean | Ref<boolean>;
}
