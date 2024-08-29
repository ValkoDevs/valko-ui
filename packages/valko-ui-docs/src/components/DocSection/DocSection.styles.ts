import { tv } from 'tailwind-variants'
import { computed } from 'vue'

const useStyle = () => {
  const section = tv({
    slots: {
      title: [
        'text-4xl',
        'font-bold'
      ],
      subtitle: [
        'text-2xl'
      ],
      divider: [
        'mb-4',
        'mt-1',
        'w-full',
        'border-light-4',
        'dark:border-dark-1'
      ],
      section: [
        'w-full',
        'mb-16'
      ],
      container: [
        'flex',
        'w-full',
        'flex-col',
        'justify-start',
        'items-start',
        'py-5'
      ],
      playground: [
        'flex',
        'flex-col',
        'gap-4',
        'md:flex-row',
        'items-stretch'
      ],
      playgroundView: [
        'flex',
        'w-full',
        'md:w-auto',
        'md:grow',
        'justify-center',
        'items-center',
        'border',
        'border-light-4',
        'dark:border-dark-1',
        'rounded'
      ],
      playgroundForm: [
        'w-full',
        'md:w-64',
        'shrink-0',
        'flex',
        'flex-col',
        'gap-2',
        'justify-between',
        'items-stretch',
        'mb-auto'
      ]
    }
  })

  return computed(() => {
    const slots = section()

    return {
      title: slots.title(),
      subtitle: slots.subtitle(),
      divider: slots.divider(),
      section: slots.section(),
      container: slots.container(),
      playground: slots.playground(),
      playgroundView: slots.playgroundView(),
      playgroundForm: slots.playgroundForm()
    }
  })
}

export default useStyle





