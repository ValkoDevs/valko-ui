import Toastify from 'toastify-js'
import type { NotificationProps } from '#valkoui/types/Notification.ts'
import styles from '#valkoui/styles/Notification.styles.ts'

const useNotification = (props: NotificationProps) => {
  if (!props.text) throw new Error('Property "text" is required')

  let notification: ReturnType<typeof Toastify> | null = null

  const defaultProps = {
    color: props.color || 'primary',
    variant: props.variant || 'filled',
    shape: props.shape || 'soft',
    size: props.size || 'md'
  }

  const styleProps = {
    color: defaultProps.color,
    variant: defaultProps.variant,
    shape: defaultProps.shape,
    size: defaultProps.size,
    styleSlots: props.styleSlots
  }
  const classes = styles(styleProps)

  const defaultOnClick = () => notification?.hideToast()

  const notificationNode = document.createElement('div')
  notificationNode.className = classes.container({ class: props.styleSlots?.container })

  const content = document.createElement('div')
  content.className = classes.content({ class: props.styleSlots?.content })
  content.innerText = props.text
  notificationNode.appendChild(content)

  const progressBarContainer = document.createElement('div')
  progressBarContainer.className = classes.progressbar({ class: props.styleSlots?.progressbar })
  notificationNode.appendChild(progressBarContainer)

  if (props.close) {
    const closeButton = document.createElement('button')
    closeButton.onclick = () => notification?.hideToast()

    const customIcon = document.createElement('i')
    customIcon.className = classes.icon({ class: props.styleSlots?.icon })

    closeButton.appendChild(customIcon)
    notificationNode.appendChild(closeButton)
  }

  notification = Toastify({
    node: notificationNode,
    className: classes.notification({ class: props.styleSlots?.notification }),
    duration: props.duration || 3000,
    destination: props.destination,
    newWindow: props.newWindow || false,
    gravity: props.gravity || 'top',
    position: props.position || 'right',
    stopOnFocus: props.stopOnFocus === false ? false : true,
    offset: props.offset || undefined,
    close: false,
    onClick: props.onClick || defaultOnClick
  })

  let animationStartTime: number
  let isPaused = false

  const updateProgress = () => {
    const currentTime = Date.now()
    const elapsedTime = currentTime - animationStartTime
    const duration = props.duration || 3000
    const progress = Math.max(0, 100 - (elapsedTime / duration) * 100)

    if (progressBarContainer) {
      progressBarContainer.style.width = `${progress}%`
    }

    if (!isPaused && elapsedTime < duration) {
      requestAnimationFrame(updateProgress)
    }
  }

  const startProgress = () => {
    animationStartTime = Date.now()
    isPaused = false
    updateProgress()
  }

  const stopProgress = () => {
    animationStartTime = Date.now()
    isPaused = true
    updateProgress()
  }

  if (props.stopOnFocus) {
    notificationNode.addEventListener('mouseover', () => {
      stopProgress()
    })

    notificationNode.addEventListener('mouseleave', () => {
      startProgress()
    })
  }

  notification.showToast()
  startProgress()
  return notification
}

export default useNotification
