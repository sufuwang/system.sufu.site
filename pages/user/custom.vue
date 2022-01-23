<template>
  ----
  <NuxtLayout>
    <template #default>
      <h1>It is custom.vue default part</h1>
    </template>
    
    <template #other>
      <h1>It is custom.vue other part</h1>
    </template>
  </NuxtLayout>
  <button @click="changeLayout">切换</button>
</template>
<script lang="ts" setup>
import { Ref } from 'vue'
const route = useRoute()

const changeLayout = () => {
  const d = (route.meta.layout as Ref<string>).value;
  (route.meta.layout as Ref<string>).value = d === "default" ? 'user' : 'default'
}
definePageMeta({ layout: ref(false) });
</script>