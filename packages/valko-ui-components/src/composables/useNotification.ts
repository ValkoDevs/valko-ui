import Toastify from 'toastify-js'
import type { NotificationProps } from '#valkoui/types/Notification.ts'
import type { SlotStyles } from '#valkoui/types/common'
import useStyle from './useStyle.ts'
import styles from '#valkoui/styles/Notification.styles.ts'

const useNotification = (props: NotificationProps) => {
  if (!props.text) throw new Error('Text prop is required.')

  let notification: ReturnType<typeof Toastify> | null = null

  const defaultProps = {
    color: props.color || 'primary',
    variant: props.variant || 'filled',
    shape: props.shape || 'soft',
    size: props.size || 'md',
    flat: props.flat || false
  }

  const combinedProps = { ...props, ...defaultProps }

  const classes = useStyle<NotificationProps, SlotStyles>(combinedProps, styles)

  const defaultOnClick = () => notification?.hideToast()

  const notificationNode = document.createElement('div')
  notificationNode.className = classes.value.container

  const content = document.createElement('div')
  content.className = classes.value.content
  content.innerText = props.text
  notificationNode.appendChild(content)

  const progressBarContainer = document.createElement('div')
  progressBarContainer.className = classes.value.progressbar
  notificationNode.appendChild(progressBarContainer)

  if (props.close) {
    const closeButton = document.createElement('button')
    closeButton.onclick = () => notification?.hideToast()

    const customIcon = document.createElement('i')
    customIcon.className = classes.value.icon

    closeButton.appendChild(customIcon)
    notificationNode.appendChild(closeButton)
  }

  notification = Toastify({
    node: notificationNode,
    className: classes.value.notification,
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
