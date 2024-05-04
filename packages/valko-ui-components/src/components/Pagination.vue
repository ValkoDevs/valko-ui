<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import type { PaginationProps } from '#valkoui/types/Pagination'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Pagination.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'
import useDarkMode from '#valkoui/composables/useDarkMode.ts'
import VkIcon from './Icon.vue'
import VkButton from './Button.vue'

defineOptions({ name: 'VkPagination' })

const props = withDefaults(defineProps<PaginationProps>(), {
  variant: 'filled',
  shape: 'soft',
  size: 'md',
  pages: 1,
  modelValue: 1
})

const emit = defineEmits(['update:modelValue'])

const classes = useStyle<PaginationProps, SlotStyles>(props, styles)
const isDarkMode = useDarkMode()
const buttonColor = computed(() => isDarkMode.value ? 'light' : 'dark')

const pages = computed(() => {
  const maxPages = props.pages < 7 ? props.pages : 7
  const currentPage = props.modelValue
  const totalPages = +props.pages
  let pagesArr: Array<string | number>
  if (totalPages > 7 && currentPage <= 4) {
    pagesArr = [
      1,
      currentPage > 4 ? '...' : 2,
      currentPage > 4 ? currentPage - 1 : 3,
      currentPage > 4 ? currentPage : 4,
      currentPage > 4 ? currentPage + 1 : 5,
      '...',
      totalPages
    ]
  } else if (totalPages > 7 && currentPage >= 5) {
    pagesArr = [
      1,
      '...',
      currentPage < totalPages - 3 ? currentPage - 1 : totalPages - 4,
      currentPage < totalPages - 3 ? currentPage : totalPages - 3,
      currentPage < totalPages - 3 ? currentPage + 1 : totalPages - 2,
      currentPage < totalPages - 3 ? '...' : totalPages - 1,
      totalPages
    ]
  } else {
    pagesArr = Array.from({ length: maxPages }, (_, i) => i + 1)
  }
  return pagesArr
})

const changePage = (page: string | number) => {
  if (page !== props.modelValue && page !== '...' && !props.disabled)
    emit('update:modelValue', page)

}

watchEffect(() => {
  if (props.modelValue > +props.pages) emit('update:modelValue', +props.pages)
})
</script>

<template>
  <div>
    <nav
      :class="classes.nav"
    >
      <vk-button
        variant="link"
        class="vk-pagination__left"
        :color="buttonColor"
        :shape="props.shape"
        :size="size"
        condensed
        flat
        :disabled="props.modelValue === 1 || props.disabled"
        @click="() => changePage(props.modelValue - 1)"
      >
        <div :class="classes.arrows">
          <span class="sr-only">Previous</span>
          <vk-icon name="chevron-left" />
        </div>
      </vk-button>
      <vk-button
        v-for="page in pages"
        :key="page"
        flat
        :variant="page === props.modelValue ? props.variant : 'link'"
        :color="page === props.modelValue ? props.color : buttonColor"
        :size="size"
        :shape="props.shape"
        condensed
        :disabled="props.disabled"
        @click="() => changePage(page)"
      >
        <div :class="classes.button">
          {{ page }}
        </div>
      </vk-button>
      <vk-button
        variant="link"
        class="vk-pagination__right"
        :color="buttonColor"
        :shape="props.shape"
        :size="size"
        flat
        condensed
        :disabled="props.modelValue === +props.pages || props.disabled"
        @click="() => changePage(props.modelValue + 1)"
      >
        <div :class="classes.arrows">
          <span class="sr-only">Next</span>
          <vk-icon name="chevron-right" />
        </div>
      </vk-button>
    </nav>
  </div>
</template>
