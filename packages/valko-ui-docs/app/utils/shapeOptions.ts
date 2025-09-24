import type { SelectOption, Shape, ShapeWithLine } from '#valkoui'

const general = [
  { value: 'rounded', label: 'Rounded' },
  { value: 'square', label: 'Square' },
  { value: 'soft', label: 'Soft' }
] as SelectOption<Shape>[]

const withLine = [
  ...general,
  { value: 'line', label: 'Line' }
] as SelectOption<ShapeWithLine>[]

const shapeOptions = {
  general,
  withLine
}

export default shapeOptions
