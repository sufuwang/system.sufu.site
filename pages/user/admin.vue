<template>
  ----
  <NuxtLayout name="default">
    <template #default>
      <h1>It is admin.vue default part</h1>
    </template>
    
    <template #other>
      <h1>It is admin.vue other part</h1>
    </template>
  </NuxtLayout>
</template>
<script lang="ts" setup>
definePageMeta({ layout: false });
</script>