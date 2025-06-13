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
  if (btnIcon.value === 'check') return 'text-positive'
  if (btnIcon.value === 'error') return 'text-negative'
  if (btnIcon.value === 'copy') return 'hover:text-primary'
  return ''
})

const copyToClipboard = async () => {
  try {
    await navigator.clipboard.writeText(props.code)
    btnIcon.value = 'check'
    setTimeout(() => btnIcon.value = 'copy', 3000)
  } catch (error) {
    btnIcon.value = 'error'
    console.error(error)
  }
}
</script>

<template>
  <div class="relative group w-full h-full flex p-5 justify-start items-center bg-surface-container rounded">
    <vk-button
      variant="link"
      shape="rounded"
      color="secondary"
      condensed
      :class="`size-10 absolute! top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity ${iconClass}`"
      @click="copyToClipboard"
    >
      <vk-icon
        :name="btnIcon"
        class="text-2xl p-2"
      />
    </vk-button>
    <pre class="overflow-auto flex w-full h-full items-center justify-start mr-10"><code v-html="highlightedCode" /></pre>
  </div>
</template>
