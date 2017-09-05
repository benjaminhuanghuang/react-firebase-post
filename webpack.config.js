const path = require('path');

module.exports = {
  entry: [
    './src/index.js'
  ],
  output: {
    path: path.resolve(__dirname,"build"),
    publicPath: '/build',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: /\.jsx?$/, // search for js files 
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        presets: ['react', 'es2015']
      }
    }]
  },
  resolve: {
    extensions: [".js", ".jsx"]
  },
  devServer: {
    historyApiFallback: true,
    contentBase: './build'
  }
};