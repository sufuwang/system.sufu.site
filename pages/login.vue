<template>
  <div class="container">
    <el-form
      class="form"
      label-position="right"
      label-width="60px"
      :model="form" 
    >
      <el-form-item label="账号">
        <el-input v-model="form.account"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input v-model="form.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="handleSubmit" :disabled="isDisabled">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
const isDisabled = ref(true)
const form = ref({
  account: '',
  password: '',
})

watch(
  () => form.value,
  ({ account, password }) => {
    isDisabled.value = !account || !password
  },
  { deep: true }
)

const handleSubmit = async () => {
  console.info(form.value)
  await useFetch('http://127.0.0.1:3000/system/login', { method: 'post' })
}
</script>
<style lang="less">
.container {
  width: 100%;
  height: calc(100% - 300px);
  display: flex;
  justify-content: center;
  align-items: center;
  .form {
    width: 320px;
  }
}
</style>