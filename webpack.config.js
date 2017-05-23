var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
var webpack = require('webpack')

module.exports = {
  entry: [
    '!script-loader!jquery/dist/jquery.min.js',
    '!script-loader!foundation-sites/dist/js/foundation.min.js',
    './app/app.jsx'
  ],
  externals: {
    jquery: 'jQuery'
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
  },

  resolve: {
    modules: [__dirname, 'node_modules'],
    alias: {
      Main: 'app/components/Main.jsx',
      applicationStyles: 'app/styles/app.scss',
      Navigation: 'app/components/Navigation.jsx',
      Countdown: 'app/components/Countdown.jsx',
      Timer: 'app/components/Timer.jsx',
      Clock: 'app/components/Clock.jsx'

    },
    extensions: ['*', '.js', '.jsx']
  },

  // module: {
  //   rules: [
  //     { test: /\.(jsx)$/, use: 'babel-loader' },
  //     { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
  //   ]
  // },

  module: {
   loaders: [
     {
       loader: 'babel-loader',
       query: {
         presets: ['react', 'es2017', 'stage-0']
       },
       test: /\.jsx?$/,
       exclude: /(node_modules|bower_components)/
     }
   ],
   rules: [
       { test: /\.(jsx)$/, use: 'babel-loader' },
       { test: /\.css$/, use: [ 'style-loader', 'css-loader' ]}
     ]
 },

  devtool: 'cheap-module-eval-source-map',
  devServer: {
    historyApiFallback: true,
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: 'app/index.html'
    }),
    new webpack.ProvidePlugin({
      '$': 'jquery',
      'jQuery': 'jquery'
    })
  ]
};
