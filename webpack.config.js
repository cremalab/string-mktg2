
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');

const parts = require('./libs/parts');
const TARGET = process.env.npm_lifecycle_event;

process.env.BABEL_ENV = TARGET;


const PATHS = {
  app: path.join(__dirname, 'app'),
  style: [
    path.join(__dirname, 'app', 'main.scss'),
  ],
  build: path.join(__dirname, 'build')
};

const common = {
  resolve:{
    extensions:['', '.js', '.jsx']
  },
  entry:{
    style:PATHS.style,
    app: PATHS.app,
  },

  module:{
    loaders:[
      {
        test: /\.jsx?$/,
        loaders:['babel?cacheDirectory'],
        include:PATHS.app
      },
      {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file', exclude: /node_modules/},
      {test: /\.(woff|woff2)$/, loader: 'file-loader?prefix=font/&limit=5000', exclude: /node_modules/},
      {test: /\.ttf(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader?limit=10000&mimetype=application/octet-stream', exclude: /node_modules/},
      {test: /\.svg$/, loader: 'raw-loader', exclude: /node_modules/},
      {test: /\.(jpg|jpeg|png|gif)$/, loader: 'file-loader', exclude: /node_modules/},
      {test: /\.ico$/, loader: 'file-loader?name=[name].[ext]', exclude: /node_modules/},

    ]

  },

  output: {
    path:PATHS.build,
    filename:'[name].[hash].js',
    chunkFilename:'[chunkhash].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template:'./app/index.html'
    })
  ]
};

var config;
switch(process.env.npm_lifecycle_event){
  case 'build':
    config = merge (
      common,
      {
        devtool:'source-map',
        output: {
          path:PATHS.build,
          filename:'[name].[hash].js',
          chunkFilename:'[chunkhash].js',
          sourceMapFilename:'[file].map'
        },
      },
      parts.clean(PATHS.build),
      parts.setFreeVariable(
        'process.env.NODE_ENV',
        'PRODUCTION'
      ),
      parts.extractBundle({
        name:'vendor',
        entries:['react']
      }),
      parts.minify(),
      parts.extractCSS(PATHS.style),
      parts.purifyCSS([PATHS.app])
    );
    break;
  default:
    config = merge (
      common,
      {devtool:'eval-source-map'},
      parts.setupCSS(PATHS.style),
      parts.devServer({
        host:process.env.HOST,
        port:process.env.PORT
      })
    )


}

module.exports = validate(config);
