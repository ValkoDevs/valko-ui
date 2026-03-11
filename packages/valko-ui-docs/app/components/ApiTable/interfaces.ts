export type HeaderKey = 'props' | 'emits' | 'slots' | 'interface' | 'format'

export type ApiComplex =
  | 'primitive'
  | 'custom-type'
  | 'custom-string'
  | 'custom-number'
  | 'object'
  | 'function'
  | 'event'
  | 'slot'

export type ApiPrimitive =
  | 'string'
  | 'number'
  | 'boolean'
  | 'null'
  | 'undefined'
  | 'Date'
  | 'any'
  | 'unknown'
  | 'EpochTimeStamp'

export type ApiType = ApiComplex | ApiPrimitive

export interface BaseData {
  key: string;
  prop: string;
  default: string | boolean;
  description: string;
  values: string;
  apiType: ApiType;
}

export interface PropData extends BaseData {
  required: boolean;
}

export interface EmitData extends Omit<BaseData, 'prop' | 'default'> {
  event: string;
  type: string;
}

export interface SlotData extends Omit<BaseData, 'values' | 'default' | 'prop'> {
  name: string;
  example: string;
}

export interface FormatData extends Pick<BaseData, 'key' | 'description'> {
  format: string;
  example: string;
}

export type TableConfig =
  | { title: string; headers: 'props'; data: PropData[] }
  | { title: string; headers: 'emits'; data: EmitData[] }
  | { title: string; headers: 'slots'; data: SlotData[] }
  | { title: string; headers: 'interface'; data: PropData[] }
  | { title: string; headers: 'format'; data: FormatData[] }

export interface ApiTableProps {
  name: string;
  tables?: TableConfig[];
}
