<script setup lang="ts">
import { useId, inject } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import type { CollapseItemProps, CollapseItemStates } from '#valkoui/types/Collapse'
import styles from '#valkoui/styles/CollapseItem.styles.ts'
import VkIcon from './Icon.vue'

defineOptions({ name: 'VkCollapseItem' })

const props = defineProps<CollapseItemProps>()

const classes = styles(props)

const {
  items = {},
  toggleItem = () => {}
} = inject<CollapseItemStates>('itemStates') || {}

const itemId = useId()
</script>

<template>
  <disclosure
    as="div"
    :key="itemId"
    :class="classes.collapseItem({ class: styleSlots?.collapseItem })"
  >
    <disclosure-button
      :class="classes.button({ class: styleSlots?.button })"
      @click="toggleItem(itemId)"
    >
      <slot name="title">
        <div>
          {{ title }}
        </div>
        <vk-icon
          name="chevron-left"
          :class="`${classes.icon({ class: styleSlots?.icon })} ${itemId && items[itemId] ? classes.iconOpen : ''}`"
        />
      </slot>
    </disclosure-button>
    <transition
      enter-active-class="transition-all duration-200 ease-out"
      enter-from-class="transition-all max-h-0 opacity-0"
      enter-to-class="transition-all max-h-96 opacity-100"
      leave-active-class="transition-all duration-200 ease-out"
      leave-from-class="transition-all max-h-96 opacity-100"
      leave-to-class="transition-all max-h-0 opacity-0"
    >
      <disclosure-panel
        v-if="itemId && items[itemId]"
        static
        :class="classes.panel({ class: styleSlots?.panel })"
      >
        <slot />
      </disclosure-panel>
    </transition>
  </disclosure>
</template>
