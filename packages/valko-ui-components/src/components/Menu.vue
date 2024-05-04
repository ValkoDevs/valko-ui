<script setup lang="ts">
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

const groups = props.items.reduce((acc: Set<string>, item: MenuItem) => {
  if (item.group) acc.add(item.group)
  return acc
}, new Set(['default']) as Set<string>)

const emit = defineEmits(['itemClick'])

const onItemClick = (item: MenuItem) => {
  if (item.disabled) return
  emit('itemClick', item)
  item.onClick?.()
}

const classes = useStyle<MenuProps, SlotStyles>(props, styles)
</script>

<template>
  <div>
    <div
      v-for="group in groups"
      :key="group"
    >
      <span
        v-if="group != 'default'"
        :class="classes.group"
      >{{ group }}</span>
      <ul :class="classes.menu">
        <li
          v-for="item in props.items.filter(i => i.group === group)"
          :key="item.key"
          :class="classes.item"
        >
          <slot
            name="item"
            :item="item"
          >
            <a
              href="!#"
              @click.prevent="onItemClick(item)"
              :class="classes.content"
              :data-active="item.key === props.active"
              :data-disabled="item.disabled"
            >{{ item.text }}</a>
          </slot>
        </li>
      </ul>
    </div>
  </div>
</template>
