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
      <el-form-item class="switch">
        <el-switch v-model="form.isCanRegister" inline-prompt active-text="Y" inactive-text="N" />
        <span>若未注册, 则使用当前账号密码自动注册</span>
      </el-form-item>
      <el-alert v-show="alertInfo.isShow" class="alert" title="success alert" type="success" />
      <el-form-item>
        <el-button @click="handleSubmit" :disabled="isDisabled">登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script lang="ts" setup>
import { ElMessage } from 'element-plus/dist/index.full'

const route = useRoute()
const { redirect: redirectUrl } = route.query || {}
const { BASE_URL } = useRuntimeConfig()
const isDisabled = ref(true)
const alertInfo = reactive({
  isShow: false,
  title: '',
  type: '',
})
const form = ref({
  account: '',
  password: '',
  isCanRegister: false,
})

watch(
  () => form.value,
  ({ account, password }) => {
    isDisabled.value = !account || !password
  },
  { deep: true }
)

const handleSubmit = async () => {
  const { data, error } = await useAsyncData(
    'login',
    () => $fetch(
      `${BASE_URL}/system/login`,
      { method: 'post', body: form.value, credentials: 'include' }
    )
  )
  const { status, message } = data.value || error.value.data
  const isRight = status === 200
  ElMessage({ message, type: isRight ? 'success' : 'warning' })
  if (isRight && redirectUrl) {
    setTimeout(() => {
      window.location.href = redirectUrl as string
    }, 1000)
  }
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
    width: 360px;
    .alert {
      width: 260px;
      margin-left: 60px;
      margin-bottom: 18px;
    }
    .switch {
      margin-left: -6px;
      display: flex;
      flex-direction: row;
      span {
        margin-left: 8px;
        color: #777777;
      }
    }
  }
}
</style>