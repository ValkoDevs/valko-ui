import Toastify from 'toastify-js'
import type { NotificationProps } from '#valkoui/types/Notification.ts'
import useStyle from './useStyle.ts'
import styles from '#valkoui/styles/Notification.styles.ts'

const useNotification = (props: NotificationProps) => {
  if (!props.text) throw new Error('Text prop is required.')

  let notification: ReturnType<typeof Toastify> | null = null

  const classes = useStyle<NotificationProps, Record<string, string>>(props, styles)

  const defaultOnClick = () => notification?.hideToast()

  const notificationNode = document.createElement('div')
  notificationNode.innerText = props.text
  notificationNode.className = classes.value.content

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
    close: props.close || false,
    onClick: props.onClick || defaultOnClick
  })

  notification.showToast()

  let animationPaused = false
  let animationStartTime: number
  let elapsedTimeBeforePause: number
  let resumeTimeout: NodeJS.Timeout | null = null
  let progressBarContainer: HTMLDivElement | null = null
  const notificationContainer = document.querySelector('.vk-notification')

  const updateProgress = () => {
    const currentTime = Date.now()
    const elapsedTime = animationPaused ? elapsedTimeBeforePause : currentTime - animationStartTime
    const duration = props.duration || 3000
    const progress = Math.max(0, 100 - (elapsedTime / duration) * 100)

    if (progressBarContainer) {
      progressBarContainer.style.width = `${progress}%`
    }

    if (!animationPaused && elapsedTime < duration) {
      requestAnimationFrame(updateProgress)
    }
  }

  const startProgress = () => {
    animationStartTime = Date.now()
    updateProgress()
  }

  const resetProgress = () => {
    animationStartTime = Date.now()
    elapsedTimeBeforePause = 0
    startProgress()
  }

  setTimeout(() => {
    if (notificationContainer) {
      progressBarContainer = document.createElement('div')
      progressBarContainer.className = classes.value.progressbar
      notificationContainer.appendChild(progressBarContainer)
      startProgress()
    }
  }, 100)

  if (notificationContainer && props.stopOnFocus) {
    notificationContainer.addEventListener('mouseover', () => {
      animationPaused = true
      elapsedTimeBeforePause = Date.now() - animationStartTime
    })

    notificationContainer.addEventListener('mouseleave', () => {
      animationPaused = false
      if (resumeTimeout) clearTimeout(resumeTimeout)
      resumeTimeout = setTimeout(() => {
        resetProgress()
      }, 100)
    })
  }

  setTimeout(() => {
    const closeButton = document.querySelector('.toast-close')
    if (closeButton) {
      closeButton.innerHTML = ''
      closeButton.classList.add('self-start')
      const customIcon = document.createElement('i')
      customIcon.className = classes.value.close
      closeButton.appendChild(customIcon)
    }
  }, 100)

  return notification
}

export default useNotification
