module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: 'registration',
  devServer: {
    disableHostCheck: true,
    host: 'dev.vm',
    port: 3000,
    proxy: {
      '^api': {
        target: 'http://dev.vm:3001/?',
        changeOrigin: true
      }
    }
  }
};
