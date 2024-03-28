import { computed } from 'vue'
import { tv } from 'tailwind-variants'

const styles = tv({
  base: [
    'vk-cardbody',
    'p-4'
  ]
})

export const useStyle = () => computed(() => styles())
