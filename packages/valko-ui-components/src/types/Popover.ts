import type { DefaultComponent } from './common'

export interface PopoverItem {
  key: string;
  [key: string]: string;
}

export interface PopoverProps extends DefaultComponent {
  items: PopoverItem[];
}
