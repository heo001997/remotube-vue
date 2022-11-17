const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      proxy: process.env.VUE_APP_HOST,
      headers: { "Access-Control-Allow-Origin": "*" }
    }
  }
})
