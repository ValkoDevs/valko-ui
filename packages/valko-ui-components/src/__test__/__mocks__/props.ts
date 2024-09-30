export interface MockProps {
  color?: string
  variant?: string
  size?: string
  shape?: string
  icon?: string
  closable?: boolean
  flat?: boolean
}

export const mockProps: MockProps = {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  icon: '',
  closable: false,
  flat: false
}
