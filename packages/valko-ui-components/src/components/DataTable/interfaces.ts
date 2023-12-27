import Sizes from '@/types/sizes'
import Variants from '@/types/variants'

interface DataTableHeader{
  key: string;
  label: string;
  sortable: boolean;
}

interface DataTableItem{
  key: string;
  [key: string]: unknown;
}

export interface DataTableProps extends Variants, Sizes  {
  type?: 'filled' | 'outlined' | 'ghost';
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
