import type { Sizes, Colors, VariantsAlt, ShapeWithLine } from './common'

export interface Tab {
  key: string | number;
  title: string;
  leftIcon?: string;
  rightIcon?: string;
  disabled?: boolean;
}

export interface TabKeymap {
  [key: string]: string
}

export interface TabsProps extends Sizes, VariantsAlt, Colors {
  tabs: Tab[];
  shape?: ShapeWithLine;
  defaultIndex?: number;
  grow?: boolean;
  vertical?: boolean;
}
