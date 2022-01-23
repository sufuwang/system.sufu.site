<template>
  <div class="container">
    <h1>It is user.[id].vue</h1>
    <h2>id: {{ $route.params.id }}</h2>
  </div>
</template>
<script lang="ts" setup>
definePageMeta({ layout: "user" });
</script>
<style lang="less">
.container {
  display: flex;
  flex-direction: row;
  align-items: baseline;
  h1 {
    margin-right: 10px;
  }
}
</style>