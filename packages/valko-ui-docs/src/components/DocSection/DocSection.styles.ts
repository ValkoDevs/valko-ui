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
        'px-10',
        'py-5'
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
      container: slots.container()
    }
  })
}

export default useStyle





