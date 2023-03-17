const { defineConfig } = require("@vue/cli-service");
const path = require('path');
module.exports = defineConfig({
  transpileDependencies: true,
  indexPath: path.resolve(__dirname, 'index.html'),
  publicPath: process.env.NODE_ENV === 'production'
    ? './dist'
    : '/'
});
