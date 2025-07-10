<script setup lang="ts">
import { ref, computed, watch, nextTick } from 'vue'
import type { MenuProps, MenuItem } from '#valkoui/types/Menu'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Menu.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'

defineOptions({ name: 'VkMenu' })

const props = withDefaults(defineProps<MenuProps>(), {
  color: 'primary',
  size: 'md',
  variant: 'filled',
  shape: 'soft',
  active: null
})

const emit = defineEmits(['itemClick'])

const classes = useStyle<MenuProps, SlotStyles>(props, styles)

const groups = props.items.reduce((acc: Set<string>, item: MenuItem) => {
  if (item.group) acc.add(item.group)
  else acc.add('default')
  return acc
}, new Set(['default']) as Set<string>)

const focusedIndex = ref(-1)

const navigableItems = computed(() => props.items.filter(item => !item.disabled))

watch(
  () => [props.active, props.items],
  () => {
    const idx = navigableItems.value.findIndex(i => i.key === props.active)
    focusedIndex.value = idx >= 0 ? idx : (navigableItems.value.length ? 0 : -1)
  },
  { immediate: true }
)

const onItemClick = (item: MenuItem) => {
  if (item.disabled) return
  emit('itemClick', item)
  item.onClick?.()
}

const focusItem = (index: number) => {
  focusedIndex.value = index
  nextTick(() => {
    const allButtons = document.querySelectorAll('[role="menuitem"]')
    if (allButtons[index]) (allButtons[index] as HTMLElement).focus()
  })
}

const focusedKey = computed(() => navigableItems.value[focusedIndex.value]?.key)

const onKeyDown = (event: KeyboardEvent, item: MenuItem) => {
  const currentIndex = navigableItems.value.findIndex(i => i.key === item.key)
  if (currentIndex === -1) return

  let newIndex = currentIndex

  switch (event.key) {
    case 'ArrowDown':
      newIndex = (currentIndex + 1) % navigableItems.value.length
      event.preventDefault()
      break
    case 'ArrowUp':
      newIndex = (currentIndex - 1 + navigableItems.value.length) % navigableItems.value.length
      event.preventDefault()
      break
    case 'Home':
      newIndex = 0
      event.preventDefault()
      break
    case 'End':
      newIndex = navigableItems.value.length - 1
      event.preventDefault()
      break
    case 'Enter':
    case ' ':
      if (!item.disabled) {
        onItemClick(item)
      }
      event.preventDefault()
      break
    default:
      return
  }

  if (newIndex !== currentIndex) {
    focusItem(newIndex)
  }
}
</script>

<template>
  <div>
    <div
      v-for="group in groups"
      :key="group"
    >
      <span
        v-if="group !== 'default'"
        :class="classes.group"
        role="presentation"
      >
        {{ group }}
      </span>
      <ul
        :class="classes.menu"
        role="menu"
        :aria-label="group !== 'default' ? group : 'Menu'"
      >
        <li
          v-for="item in props.items.filter(i => i.group === group)"
          :key="item.key"
          :class="classes.item"
          role="none"
        >
          <slot
            name="item"
            :item="item"
          >
            <button
              :class="classes.content"
              :data-active="item.key === props.active"
              :data-disabled="item.disabled"
              :aria-disabled="item.disabled || undefined"
              role="menuitem"
              :tabindex="focusedKey === item.key ? 0 : -1"
              @click.prevent="onItemClick(item)"
              @keydown="(e) => onKeyDown(e, item)"
            >
              {{ item.text }}
            </button>
          </slot>
        </li>
      </ul>
    </div>
  </div>
</template>
