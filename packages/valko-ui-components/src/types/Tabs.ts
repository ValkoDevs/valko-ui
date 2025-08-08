import type { Sizes, Colors, VariantsAlt, ShapeWithLine, AriaAttributes } from './common'

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

export interface TabsProps extends Sizes, VariantsAlt, Colors, Pick<AriaAttributes, 'aria-label'> {
  tabs: Tab[];
  modelValue?: number;
  shape?: ShapeWithLine;
  defaultIndex?: number;
  grow?: boolean;
  vertical?: boolean;
}
