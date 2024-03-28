import { computed } from 'vue'
import { tv } from 'tailwind-variants'

const styles = tv({
  base: [
    'vk-cardheader',
    'p-4',
    'group-data-[direction=col]:border-b-2',
    'group-data-[direction=col-reverse]:border-t-2',
    'border-light-4',
    'text-lg',
    'dark:border-dark-1'
  ]
})

export const useStyle = () => computed(() => styles())
