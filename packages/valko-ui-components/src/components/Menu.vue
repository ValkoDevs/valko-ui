<script setup lang="ts">
import { computed } from 'vue'
import { RovingFocusGroup, RovingFocusItem } from 'reka-ui'
import type { MenuProps, MenuItem } from '#valkoui/types/Menu'
import styles from '#valkoui/styles/Menu.styles.ts'

defineOptions({ name: 'VkMenu' })

const props = withDefaults(defineProps<MenuProps>(), {
  color: 'primary',
  size: 'md',
  variant: 'filled',
  shape: 'soft',
  active: null
})

const emit = defineEmits(['itemClick'])

const s = computed(() => styles(props))

const groups = props.items.reduce((acc: Set<string>, item: MenuItem) => {
  if (item.group) acc.add(item.group)
  else acc.add('default')
  return acc
}, new Set(['default']) as Set<string>)

const onItemClick = (item: MenuItem) => {
  if (item.disabled) return
  emit('itemClick', item)
  item.onClick?.()
}
</script>

<template>
  <RovingFocusGroup
    as-child
    orientation="vertical"
    :loop="true"
  >
    <div>
      <div
        v-for="group in groups"
        :key="group"
      >
        <span
          v-if="group !== 'default'"
          :class="s.group({ class: styleSlots?.group })"
          role="presentation"
        >
          {{ group }}
        </span>
        <ul
          :class="s.menu({ class: styleSlots?.menu })"
          role="menu"
          :aria-label="group !== 'default' ? group : 'Menu'"
        >
          <li
            v-for="item in items.filter((i: MenuItem) => i.group === group)"
            :key="item.key"
            :class="s.item({ class: styleSlots?.item })"
            role="none"
          >
            <slot
              name="item"
              :item="item"
            >
              <RovingFocusItem
                as-child
                :focusable="!item.disabled"
                :active="item.key === active"
              >
                <button
                  type="button"
                  :class="s.content({ class: styleSlots?.content })"
                  :aria-disabled="item.disabled || undefined"
                  role="menuitem"
                  @click.prevent="onItemClick(item)"
                >
                  {{ item.text }}
                </button>
              </RovingFocusItem>
            </slot>
          </li>
        </ul>
      </div>
    </div>
  </RovingFocusGroup>
</template>
