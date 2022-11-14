const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    devServer: {
      proxy: 'http://localhost:3000/',
      headers: { "Access-Control-Allow-Origin": "*" }
    }
  }
})
