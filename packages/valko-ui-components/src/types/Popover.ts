import type { Shapes, Alignments, PlacementsWithAuto } from './common'

export interface PopoverProps extends Shapes, Alignments, PlacementsWithAuto {
  text?: string;
  isOpen?: boolean;
  flat?: boolean;
  condensed?: boolean;
  panelClasses?: string | string[];
}
