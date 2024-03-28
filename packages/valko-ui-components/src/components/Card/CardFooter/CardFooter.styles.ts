import { computed } from 'vue'
import { tv } from 'tailwind-variants'

const styles = tv({
  base: [
    'vk-cardfooter',
    'p-4',
    'group-data-[direction=col]:border-t-2',
    'group-data-[direction=col-reverse]:border-b-2',
    'border-light-4',
    'dark:border-dark-1'
  ]
})

export const useStyle = () => computed(() => styles())
