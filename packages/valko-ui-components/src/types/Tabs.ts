import type { Sizes, Color, VariantsAlt, Shape } from './common'

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

export interface TabsProps extends Sizes, VariantsAlt {
  tabs: Tab[];
  shape?: Shape | 'line';
  color?: Color | 'neutral';
  defaultIndex?: number;
  grow?: boolean;
  vertical?: boolean;
}
