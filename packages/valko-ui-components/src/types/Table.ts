import type { DefaultComponent } from './common'
import type { TableSlots } from '../styles/Table.styles'

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

export interface TableProps extends DefaultComponent {
  headers: TableHeader[];
  data: TableItem[];
  striped?: boolean;
  selection?: TableItem[] | TableItem | undefined;
  rowEvents?: boolean;
  styleSlots?: Partial<TableSlots>;
}
