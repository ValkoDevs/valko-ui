import type { PlacementWithAuto, SelectOption, Placement } from '#valkoui'

const general = [
  { label: 'Bottom', value: 'bottom' },
  { label: 'Top', value: 'top' },
  { label: 'Left', value: 'left' },
  { label: 'Right', value: 'right' }
] as SelectOption<Placement>[]

const withAuto = [
  ...general,
  { label: 'Auto', value: 'auto' }
] as SelectOption<PlacementWithAuto>[]

const placementOptions = {
  general,
  withAuto
}

export default placementOptions
