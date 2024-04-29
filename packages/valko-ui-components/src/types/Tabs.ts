import type { Sizes, Colors, Variants, Shape } from '#valkoui'

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

export interface TabsProps extends Colors, Sizes, Variants {
  tabs: Tab[];
  shape?: Shape | 'line';
  defaultIndex?: number;
  grow?: boolean;
  vertical?: boolean;
}
