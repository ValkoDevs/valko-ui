<script lang="ts" setup>
import type { CodeBlockProps } from './interfaces'
import hljs from 'highlight.js/lib/core'
import xml from 'highlight.js/lib/languages/xml'
import typescript from 'highlight.js/lib/languages/typescript'

hljs.registerLanguage('ts', typescript)
hljs.registerLanguage('html', xml)
hljs.registerLanguage('vue', (hljs) => ({
  subLanguage: 'html',
  contains: [
    hljs.COMMENT('<!--', '-->', {
      relevance: 10
    }),
    {
      begin: /^(\s*)(<([Ss][Cc][Rr][Ii][Pp][Tt])( setup)?( lang=["']ts["'])?>)/gm,
      end: /^(\s*)(<\/[Ss][Cc][Rr][Ii][Pp][Tt]>)/gm,
      subLanguage: 'ts',
      excludeBegin: true,
      excludeEnd: true
    }
  ]
}))

defineOptions({ name: 'CodeBlock' })

const props = withDefaults(defineProps<CodeBlockProps>(), {
  language: 'vue'
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
    await navigator.clipboard.writeText(props.code)
    btnIcon.value = 'check'
    setTimeout(() => btnIcon.value = 'copy', 3000)
  } catch (error) {
    btnIcon.value = 'error-404'
    console.error(error)
  }
}
</script>

<template>
  <div class="relative group w-full p-5 bg-light-200 dark:bg-dark-800 rounded-lg w-full">
    <vk-button
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

    <pre class="flex overflow-auto"><code v-html="highlightedCode" /></pre>
  </div>
</template>
