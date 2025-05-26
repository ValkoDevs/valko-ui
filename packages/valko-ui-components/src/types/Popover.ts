import type { Shapes, Alignments, PlacementsWithAuto } from './common'

export interface PopoverProps extends Shapes, Alignments, PlacementsWithAuto {
  text?: string;
  isOpen?: boolean;
  elevated?: boolean;
  condensed?: boolean;
  classes?: string | string[];
}
