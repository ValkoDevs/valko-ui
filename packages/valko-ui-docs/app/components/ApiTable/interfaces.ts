import type { TableItem } from '#valkoui/types/Table'

export type HeaderKey = 'props' | 'emits' | 'slots' | 'interface' | 'format'

export interface ApiTableProps {
  name: string;
  tables?: {
    title: string;
    data: TableItem[];
    headers: HeaderKey;
  }[];
}
