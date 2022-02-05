<template>
  <NuxtPage></NuxtPage>
</template>
<script lang="ts" setup>
onErrorCaptured((error) => {
  console.info(error)
})
</script>
<style>
body {
  width: calc(100vw - 16px);
  height: calc(100vh - 16px);
  padding: 8px;
  margin: 0px;
}
#__nuxt {
  width: 100%;
  height: 100%;
}
</style>