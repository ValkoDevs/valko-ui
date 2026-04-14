import type { Shapes } from './common'
import type { SkeletonSlots } from '../styles/Skeleton.styles'

export interface SkeletonProps extends Shapes {
  styleSlots?: Partial<SkeletonSlots>;
}
