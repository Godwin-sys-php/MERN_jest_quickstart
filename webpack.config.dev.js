import webpack from 'webpack'
import path from 'path'

export default {
  devtool: 'inline-source-map',

  entry: [
    path.resolve(__dirname, 'src/index.jsx') 
  ],
  node: {fs: "empty"},
  target: 'web',
  output: {
    path: path.resolve(__dirname, './public'),
    publicPath: '/',
    filename: 'bundle.js',
	chunkFilename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.jsx$/, exclude: /node_modules/, loaders: ['babel-loader'] },
	  { test: /\.css$/, loaders:['style-loader','css-loader']}
    ]
  }

}
