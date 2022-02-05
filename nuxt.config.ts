import { defineNuxtConfig } from 'nuxt3'

const Base_Url = {
  development: 'http://localhost:4000',
  production: 'http://system.sufu.site',
}


export default defineNuxtConfig({
  publicRuntimeConfig: {
    BASE_URL: Base_Url[process.env.NODE_ENV] || Base_Url.production
  },
})
