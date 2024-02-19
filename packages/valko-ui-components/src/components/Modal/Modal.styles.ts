import { tv } from 'tailwind-variants'
import { computed } from 'vue'
import { ModalProps } from './interfaces'

const useStyle = (props: ModalProps) => {
  const modal = tv({
    slots: {
      container: [
        'vk-modal__container',
        'overflow-y-auto',
        'fixed',
        'inset-0'
      ],
      backdrop: [
        'vk-modal__backdrop',
        'fixed',
        'inset-0'
      ],
      dialog: [
        'relative',
        'z-50'
      ],
      content: [
        'p-4',
        'min-h-full',
        'text-center',
        'flex',
        'items-center',
        'justify-center'
      ],
      panel: [
        'vk-modal__panel',
        'w-full',
        'p-6',
        'bg-white',
        'shadow-lg',
        'text-left',
        'overflow-hidden',
        'flex',
        'flex-col',
        'justify-start',
        'align-middle',
        'gap-4',
        'transition-all',
        'transform',
        'dark:bg-dark-3'
      ],
      panelChild: [
        'flex',
        'w-full',
        'justify-between',
        'items-center'
      ],
      title: [
        'vk-modal__title',
        'leading-6',
        'text-lg',
        'font-medium'
      ],
      modalButton: [
        'flex',
        'justify-end',
        'align-center'
      ],
      closeButton: [
        'mr-2'
      ]
    },
    variants: {
      size: {
        xs: {
          panel: [
            'max-w-xs'
          ]
        },
        sm: {
          panel: [
            'max-w-lg'
          ]
        },
        md: {
          panel: [
            'max-w-3xl'
          ]
        },
        lg: {
          panel: [
            'max-w-7xl'
          ]
        },
        full: {
          panel: [
            'h-screen',
            'max-w-full',
            'max-h-full'
          ],
          content: [
            'p-0'
          ]
        }
      },
      shape: {
        rounded: {
          panel: [
            'rounded-2xl'
          ]
        },
        soft: {
          panel: [
            'rounded-lg'
          ]
        },
        square: {
          panel: [
            'rounded-none'
          ]
        }
      },
      backdrop: {
        blur: {
          backdrop: [
            'backdrop-blur-sm'
          ]
        },
        opaque: {
          backdrop: [
            'bg-light-5/80',
            'dark:bg-dark-1/80'
          ]
        },
        transparent: {
          backdrop: [
            'bg-transparent'
          ]
        }
      },
      flat: {
        true: {
          panel: [
            'shadow-none'
          ]
        }
      }
    }
  })

  return computed(() => {
    const slots = modal({
      size: props.size,
      shape: props.shape,
      backdrop: props.backdrop,
      flat: props.flat
    })

    return {
      container: slots.container(),
      backdrop: slots.backdrop(),
      content: slots.content(),
      panel: slots.panel(),
      panelChild: slots.panelChild(),
      title: slots.title(),
      modalButton: slots.modalButton(),
      dialog: slots.dialog(),
      closeButton: slots.closeButton()
    }
  })
}

export default useStyle
