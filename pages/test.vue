<template>
  <div>
    <h1>Test.vue</h1>
    <button @click="handleClick">click</button>
  </div>
</template>
<script lang="ts" setup>
const { BASE_URL } = useRuntimeConfig()
console.info('BASE_URL: ', BASE_URL)
const handleClick = async () => {
  const { data, error } = await useAsyncData(
    'test',
    () => $fetch(
      `${BASE_URL}/system/test`,
      { credentials: 'include' }
    )
  )
  console.info(data, error)
}
</script>