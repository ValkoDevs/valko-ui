<script setup lang="ts">
import { computed, watchEffect } from 'vue'
import {
  PaginationRoot,
  PaginationList,
  PaginationListItem,
  PaginationPrev,
  PaginationNext,
  PaginationEllipsis
} from 'reka-ui'
import type { PaginationProps } from '#valkoui/types/Pagination'
import styles from '#valkoui/styles/Pagination.styles.ts'
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

const s = computed(() => styles(props))

const changePage = (page: number) => {
  if (page !== props.modelValue)
    emit('update:modelValue', page)
}

watchEffect(() => {
  if (props.modelValue > +props.pages)
    emit('update:modelValue', +props.pages)
})
</script>

<template>
  <PaginationRoot
    :class="s.nav({ class: styleSlots?.nav })"
    :aria-label="ariaLabel ?? 'Pagination'"
    :page="modelValue"
    :items-per-page="1"
    :total="+pages"
    :sibling-count="1"
    show-edges
    :disabled="disabled"
    @update:page="changePage"
  >
    <PaginationPrev as-child>
      <vk-button
        variant="link"
        color="surface"
        class="vk-pagination__left"
        :shape="shape"
        :size="size"
        condensed
      >
        <div :class="s.arrows({ class: styleSlots?.arrows })">
          <vk-icon name="chevron-left" />
        </div>
      </vk-button>
    </PaginationPrev>
    <PaginationList
      v-slot="{ items }"
      as="template"
    >
      <template
        v-for="(item, index) in items"
        :key="index"
      >
        <PaginationListItem
          v-if="item.type === 'page'"
          :value="item.value"
          as-child
        >
          <vk-button
            :variant="item.value === modelValue ? variant : 'link'"
            :color="item.value === modelValue ? color : 'surface'"
            :size="size"
            :shape="shape"
            condensed
          >
            <div :class="s.button({ class: styleSlots?.button })">
              {{ item.value }}
            </div>
          </vk-button>
        </PaginationListItem>
        <PaginationEllipsis
          v-else
          as-child
        >
          <vk-button
            variant="link"
            color="surface"
            :size="size"
            :shape="shape"
            condensed
            :disabled="disabled"
          >
            <div :class="s.button({ class: styleSlots?.button })">
              ...
            </div>
          </vk-button>
        </PaginationEllipsis>
      </template>
    </PaginationList>
    <PaginationNext as-child>
      <vk-button
        variant="link"
        color="surface"
        class="vk-pagination__right"
        :shape="shape"
        :size="size"
        condensed
      >
        <div :class="s.arrows({ class: styleSlots?.arrows })">
          <vk-icon name="chevron-right" />
        </div>
      </vk-button>
    </PaginationNext>
  </PaginationRoot>
</template>
