
var path = require('path');
var webpack = require('webpack');

var BUILD_DIR = path.resolve(__dirname, '../reactmb/public/js');
var APP_DIR = path.resolve(__dirname, '../reactmb/public/js');

module.exports = {
  entry: APP_DIR + '/reactmb.jsx',

  output: {
    path: BUILD_DIR,
    filename: '/bundle.js'
  },

  module : {
    loaders : [
      {
        test : /\.jsx?/,
        include : APP_DIR,
        loader : 'babel',
        query:
          {
        presets:['react', 'es2015']
          }
      }
    ]
  }

};

