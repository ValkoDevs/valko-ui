<script setup lang="ts">
import { BreadcrumbsProps, Crumb } from '#valkoui/types'
import { VkIcon } from '../'
import { useStyle } from './Breadcrumbs.styles'

defineOptions({ name: 'VkBreadcrumbs' })

const props = withDefaults(defineProps<BreadcrumbsProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  separator: '>',
  crumbs: () => []
})

const emit = defineEmits(['crumbClick'])

const classes = useStyle(props)
const lastCrumbKey = props.crumbs[props.crumbs.length - 1]?.key

const onCrumbClick = (item: Crumb) => {
  if (item.disabled) return
  emit('crumbClick', item)
  item.onClick?.()
}
</script>

<template>
  <div :class="classes.container">
    <a
      v-for="crumb in props.crumbs"
      :key="crumb.key"
      :class="classes.a"
      :data-disabled="crumb.disabled"
      @click="onCrumbClick(crumb)"
    >
      <vk-icon
        v-if="crumb.leftIcon"
        :name="crumb.leftIcon"
        :class="classes.iconLeft"
      />
      <span>{{ crumb.title }}</span>
      <vk-icon
        v-if="crumb.rightIcon"
        :name="crumb.rightIcon"
        :class="classes.iconRight"
      />
      <span
        v-if="crumb.key !== lastCrumbKey"
        :class="classes.separator"
      >{{ props.separator }}</span>
    </a>
  </div>
</template>
