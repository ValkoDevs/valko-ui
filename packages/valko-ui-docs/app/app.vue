<script setup lang="ts">
import '~/assets/styles.css'

const theme = useCookie('theme', {
  default: () => 'dark'
})
</script>

<template>
  <Html :class="theme">
    <Head>
      <Title>ValkoUI Components</Title>
    </Head>

    <Body>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </Body>
  </Html>
</template>
