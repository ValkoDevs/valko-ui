<script lang="ts" setup>
import type { CodeBlockProps } from './interfaces'
import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import xml from 'highlight.js/lib/languages/xml'

hljs.registerLanguage('js', javascript)
hljs.registerLanguage('html', xml)

defineOptions({ name: 'CodeBlock' })

const props = withDefaults(defineProps<CodeBlockProps>(), {
  language: 'html'
})

const btnIcon = ref('copy')

const highlightedCode = computed(() => hljs.highlight(
  props.code,
  { language: props.language }
).value)

const iconClass = computed(() => {
  if (btnIcon.value === 'check') return 'text-success-500'
  if (btnIcon.value === 'error-404') return 'text-error-500'
  return ''
})

const copyToClipboard = async () => {
  try {
    if (props.copy) await navigator.clipboard.writeText(props.copy)
    btnIcon.value = 'check'
    setTimeout(() => btnIcon.value = 'copy', 3000)
  } catch (error) {
    btnIcon.value = 'error-404'
    console.error(error)
  }
}
</script>

<template>
  <div class="relative group w-full">
    <vk-button
      v-if="!!copy"
      variant="link"
      shape="rounded"
      color="neutral"
      condensed
      class="size-5 absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity"
      @click="copyToClipboard"
    >
      <vk-icon
        :name="btnIcon"
        :class="`text-2xl ${btnIcon === 'copy' ? 'hover:text-primary-500' : ''} ${iconClass}`"
      />
    </vk-button>

    <pre><code v-html="highlightedCode" /></pre>
  </div>
</template>
