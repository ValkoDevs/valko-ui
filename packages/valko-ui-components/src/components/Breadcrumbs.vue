<script setup lang="ts">
import type { BreadcrumbsProps, Crumb } from '#valkoui/types/Breadcrumbs'
import type { SlotStyles } from '#valkoui/types/common'
import styles from '#valkoui/styles/Breadcrumbs.styles.ts'
import useStyle from '#valkoui/composables/useStyle.ts'
import VkIcon from './Icon.vue'

defineOptions({ name: 'VkBreadcrumbs' })

const props = withDefaults(defineProps<BreadcrumbsProps>(), {
  color: 'primary',
  variant: 'filled',
  size: 'md',
  shape: 'soft',
  separator: '>',
  crumbs: () => [],
  condensed: false
})

const emit = defineEmits(['crumbClick'])

const classes = useStyle<BreadcrumbsProps, SlotStyles>(props, styles)

const lastCrumbKey = props.crumbs[props.crumbs.length - 1]?.key

const onCrumbClick = (item: Crumb) => {
  if (item.disabled) return
  emit('crumbClick', item)
  item.onClick?.()
}

const useIcon = (separator: string) => separator.length > 2
</script>

<template>
  <nav
    :class="classes.container"
    :aria-label="props['aria-label'] ?? 'Breadcrumbs'"
  >
    <ol :class="classes.ol">
      <li
        v-for="crumb in crumbs"
        :key="crumb.key"
        :class="classes.li"
      >
        <a
          v-if="crumb.key !== lastCrumbKey"
          role="link"
          :tabindex="crumb.key !== lastCrumbKey ? 0 : -1"
          :class="classes.a"
          :data-disabled="crumb.disabled"
          :aria-disabled="crumb.disabled || undefined"
          @click.prevent="onCrumbClick(crumb)"
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
        </a>

        <span
          v-else
          :class="[classes.a, '!cursor-default']"
          aria-current="page"
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
        </span>

        <span
          v-if="crumb.key !== lastCrumbKey"
          :class="classes.separator"
          aria-hidden="true"
        >
          <template v-if="useIcon(separator)">
            <vk-icon :name="separator" />
          </template>
          <template v-else>
            {{ separator }}
          </template>
        </span>
      </li>
    </ol>
  </nav>
</template>
