import { type DefaultComponent } from '#valkoui/types'

export interface DataTableHeader {
  key: string;
  label: string;
  sortable: boolean;
}

export interface DataTableItem {
  key: string;
  [key: string]: unknown;
}

export interface DataTableProps extends DefaultComponent {
  headers: DataTableHeader[];
  data: DataTableItem[];
  sortBy?: string | null;
  sortDir?: 'asc' | 'desc';
  records?: number;
  page?: number;
  selectable?: 'single' | 'multiple' | 'none';
  selectionType?: 'check' | 'row';
  rounded?: boolean;
  striped?: boolean;
  loading?: boolean;
  shadow?: boolean;
}
