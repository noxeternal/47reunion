module.exports = {
  transpileDependencies: ["vuetify"],
  publicPath: 'registration',
  devServer: {
    disableHostCheck: true,
    host: '0.0.0.0',
    port: 3001,
    proxy: {
      '^/api': {
        target: process.env.API_URL || 'https://47inf.org/',
        changeOrigin: true
      },
      '^/pdf': {
        target: process.env.PDF_API_URL || 'http://localhost:8080/',
        changeOrigin: true
      }
    }
  }
};
