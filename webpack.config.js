
var path = require('path');
var webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, '../reactmb/public/js');
var APP_DIR = path.resolve(__dirname, '../reactmb/public/js');

module.exports = {
  entry: {
    index: APP_DIR + '/index.jsx',
    submit: APP_DIR + '/submit.jsx'
  },
  

  output: {
    path: BUILD_DIR,
    filename: '[name].js'
  },

  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel',
        exclude: "./node_modules/",
        query:
          {
        presets:['react', 'es2015']
          }
      }
    ]
  }

};

