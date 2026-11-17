<script setup lang="ts">
import { useId, inject, computed } from 'vue'
import { CollapsibleRoot, CollapsibleTrigger, CollapsibleContent } from 'reka-ui'
import type { CollapseItemProps, CollapseItemStates } from '#valkoui/types/Collapse'
import styles from '#valkoui/styles/CollapseItem.styles.ts'
import VkIcon from './Icon.vue'

defineOptions({ name: 'VkCollapseItem' })

const props = defineProps<CollapseItemProps>()

const s = computed(() => styles(props))

const {
  items = {},
  toggleItem = () => {}
} = inject<CollapseItemStates>('itemStates') || {}

const itemId = useId()
</script>

<template>
  <CollapsibleRoot
    :class="s.collapseItem({ class: styleSlots?.collapseItem })"
    :open="items[itemId] ?? false"
    @update:open="toggleItem(itemId)"
  >
    <CollapsibleTrigger
      :class="s.button({ class: styleSlots?.button })"
    >
      <slot name="title">
        <div>
          {{ title }}
        </div>
        <vk-icon
          name="chevron-left"
          :data-open="items[itemId]"
          :class="s.icon({ class: styleSlots?.icon })"
        />
      </slot>
    </CollapsibleTrigger>
    <CollapsibleContent
      :class="s.panel({ class: styleSlots?.panel })"
    >
      <slot />
    </CollapsibleContent>
  </CollapsibleRoot>
</template>
