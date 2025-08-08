<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import type { PaginationProps } from '#valkoui/types/Pagination'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Pagination.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'
import VkIcon from './Icon.vue'
import VkButton from './Button.vue'

defineOptions({ name: 'VkPagination' })

const props = withDefaults(defineProps<PaginationProps>(), {
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  pages: 1,
  modelValue: 1,
  elevated: false
})

const emit = defineEmits(['update:modelValue'])

const classes = useStyle<PaginationProps, SlotStyles>(props, styles)

const visiblePages = computed(() => {
  const total = +props.pages
  const current = props.modelValue

  if (total <= 7)
    return Array.from({ length: total }, (_, i) => i + 1)
  if (current <= 4)
    return [1, 2, 3, 4, 5, '...', total]
  if (current > total - 4)
    return [1, '...', total - 4, total - 3, total - 2, total - 1, total]

  return [1, '...', current - 1, current, current + 1, '...', total]
})

const changePage = (page: string | number) => {
  if (+page !== props.modelValue && page !== '...' && !props.disabled)
    emit('update:modelValue', page)
}

watchEffect(() => {
  if (props.modelValue > +props.pages)
    emit('update:modelValue', +props.pages)
})
</script>

<template>
  <div>
    <nav
      :class="classes.nav"
      :aria-label="props['aria-label'] ?? 'Pagination'"
    >
      <vk-button
        variant="link"
        class="vk-pagination__left"
        color="surface"
        :shape="shape"
        :size="size"
        condensed
        :disabled="modelValue === 1 || disabled"
        @click="() => changePage(modelValue - 1)"
      >
        <div :class="classes.arrows">
          <span class="sr-only">Previous</span>
          <vk-icon name="chevron-left" />
        </div>
      </vk-button>
      <vk-button
        v-for="page in visiblePages"
        :key="page"
        :variant="page === modelValue ? variant : 'link'"
        :color="page === modelValue ? color : 'surface'"
        :size="size"
        :shape="shape"
        condensed
        :disabled="disabled"
        @click="() => changePage(page)"
      >
        <div :class="classes.button">
          {{ page }}
        </div>
      </vk-button>
      <vk-button
        variant="link"
        class="vk-pagination__right"
        color="surface"
        :shape="shape"
        :size="size"
        condensed
        :disabled="modelValue === +pages || disabled"
        @click="() => changePage(modelValue + 1)"
      >
        <div :class="classes.arrows">
          <span class="sr-only">Next</span>
          <vk-icon name="chevron-right" />
        </div>
      </vk-button>
    </nav>
  </div>
</template>
