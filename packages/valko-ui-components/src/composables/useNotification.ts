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

  const defaultOnClick = () => notification?.hideToast()

  const notification = Toastify({
    text: props.text,
    className: classes.value,
    duration: props.duration || 3000,
    destination: props.destination,
    newWindow: props.newWindow || false,
    gravity: props.gravity || 'top',
    position: props.position || 'right',
    stopOnFocus: props.stopOnFocus === false ? false : true,
    offset: props.offset || undefined,
    close: props.close || false,
    onClick: props.onClick || defaultOnClick
  })

  notification.showToast()

  let animationPaused = false
  let animationStartTime: number
  let elapsedTimeBeforePause: number
  let resumeTimeout: NodeJS.Timeout | null = null
  const notificationContainer = document.querySelector('.vk-notification')

  const progressBarContainer = document.createElement('div')
  // progressBarContainer.className = classes.value.progressbar

  const updateProgress = () => {
    const currentTime = Date.now()
    const elapsedTime = animationPaused ? elapsedTimeBeforePause : currentTime - animationStartTime
    const duration = props.duration || 3000
    const progress = Math.max(0, 100 - (elapsedTime / duration) * 100)

    progressBarContainer.style.width = `${progress}%`

    if (!animationPaused && elapsedTime < duration) {
      requestAnimationFrame(updateProgress)
    }
  }

  setTimeout(() => {
    if (notificationContainer) {
      notificationContainer.appendChild(progressBarContainer)
      animationStartTime = Date.now()
      updateProgress()
    }
  }, 100)

  if (notificationContainer && props.stopOnFocus) {
    notificationContainer.addEventListener('mouseover', () => {
      animationPaused = true
      elapsedTimeBeforePause = Date.now() - animationStartTime
    })

    notificationContainer.addEventListener('mouseleave', () => {
      animationPaused = false
      animationStartTime = Date.now() - elapsedTimeBeforePause

      if (resumeTimeout) clearTimeout(resumeTimeout)
      resumeTimeout = setTimeout(() => {
        updateProgress()
      }, 100)
    })
  }

  setTimeout(() => {
    const closeButton = document.querySelector('.toast-close')
    if (closeButton) {
      closeButton.innerHTML = ''
      closeButton.classList.add('self-start')
      const customIcon = document.createElement('i')
      // customIcon.className = classes.value.close
      closeButton.appendChild(customIcon)
    }
  }, 100)

  return notification
}

export default useNotification
