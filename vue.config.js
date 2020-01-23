module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: 'registration',
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 3000,
    proxy: {
      '^/api': {
        target: process.env.API_URL || 'https://47inf.org/',
        changeOrigin: true
      }
    }
  }
};
