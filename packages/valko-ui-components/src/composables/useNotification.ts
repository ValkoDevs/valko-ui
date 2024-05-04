import Toastify from 'toastify-js'
import type { NotificationProps } from '#valkoui/types/Notification.ts'
import useStyle from './useStyle.ts'
import styles from '#valkoui/styles/Notification.styles.ts'

const useNotification = (props: NotificationProps) => {

  const styleProps: Omit<NotificationProps, 'className'> = {
    color: props.color || 'primary',
    variant: props.variant || 'filled',
    shape: props.shape || 'soft',
    size: props.size || 'md',
    flat: props.flat || false
  }

  const classes = useStyle<NotificationProps>(styleProps, styles)

  const notification = Toastify({
    text: props.text,
    className: classes.value,
    duration: props.duration || 3000,
    destination: props.destination,
    newWindow: props.newWindow || false,
    gravity: props.gravity || 'top',
    position: props.position || 'right',
    stopOnFocus: props.stopOnFocus || false,
    offset: props.offset || undefined,
    close: props.close || false,
    onClick: props.onClick || undefined
  }).showToast()

  setTimeout(() => {
    const closeButton = document.querySelector('.toast-close')
    if (closeButton) {
      closeButton.innerHTML = ''
      const customIcon = document.createElement('i')
      customIcon.classList.add('ti', 'ti-x')
      closeButton.appendChild(customIcon)
    }
  }, 100)

  return notification
}

export default useNotification
