var webpack = require('webpack');

module.exports = {
  entry: {
    all: './source/javascripts/all.js'
  },

  resolve: {
    root: __dirname + '/source/javascripts'
  },

  output: {
    path: __dirname + '/.tmp/dist',
    filename: 'javascripts/[name].js'
  },

  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery'
    })
  ]
};
