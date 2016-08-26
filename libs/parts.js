const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const PurifyCSSPlugin = require('purifycss-webpack-plugin');
const autoprefixer = require('autoprefixer');

exports.devServer = function(options){
  return {
    devServer: {
      historyApiFallback:true,
      hot:true,
      inline:true,
      stats:'errors-only',
      host:options.host,
      port:options.port
    },
    plugins:[
      new webpack.HotModuleReplacementPlugin({
        multiStep:true
      })
    ]
  }
};


exports.loadFiles = function(){
  console.log('loading files');
  return {
    module:{
      loaders:[
        {test: /\.eot(\?v=\d+.\d+.\d+)?$/, loader: 'file', exclude: /node_modules/},
        {test: /\.(woff|woff2)$/, loader: 'file-loader?prefix=font/&limit=5000', exclude: /node_modules/},
        {test: /\.ttf(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader?limit=10000&mimetype=application/octet-stream', exclude: /node_modules/},
        {test: /\.svg(\?v=\d+.\d+.\d+)?$/, loader: 'file-loader', exclude: /node_modules/},
        {test: /\.(jpe?g|png|gif)$/i, loader: 'file-loader', exclude: /node_modules/},
        {test: /\.ico$/, loader: 'file-loader?name=[name].[ext]', exclude: /node_modules/},
      ]
    }
  }
}

exports.setupCSS = function(paths){
  return {
    module: {
      loaders: [
        {
          test:/\.scss$/,
          loaders:['style', 'css','sass'],
          include:paths
        }
      ]
    }
  }
};


exports.extractCSS = function(paths){
  return {
    module: {
      loaders: [
        {
          //extract CSS During build:
          test: /\.scss$/,
          loader: ExtractTextPlugin.extract('style', 'css!sass'),
          include:paths
        }
      ]
    },
    plugins: [
      //Output the extracted CSS to a file
      new ExtractTextPlugin('[name].[chunkhash].css')
    ]
  };
};

exports.minify = function(){
  return {
    plugins: [
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          drop_console:true
        },
        beautify: false,
        comments:false,
        mangle:{
          //don't mangle: '$'
          except:['$'],
          //Don't care about IE8
          screw_ie8:true,
          //Don't mangle function names
          keep_fnames:true
        },
        except:['webpackJsonp']
      })
    ]
  }
};

exports.setFreeVariable = function(key,value){
  const env = {};
  env[key] = JSON.stringify(value);

  return {
    plugins:[
      new webpack.DefinePlugin(env)
    ]
  }
};

exports.extractBundle = function(options) {
  const entry= { };
  entry[options.name] = options.entries;

  return {
    entry:entry,
    plugins:[
      new webpack.optimize.CommonsChunkPlugin({
        names:[options.name, 'manifest']
      })
    ]
  }
};

exports.clean = function(path){
  return {
    plugins: [
      new CleanWebpackPlugin([path], {
        root:process.cwd()
      })
    ]
  }
};




exports.purifyCSS = function(paths){
  return {
    plugins: [
      new PurifyCSSPlugin({
        basePath: process.cwd(),
        // `paths` is used to point PurifyCSS to files not
        // visible to Webpack. You can pass glob patterns
        // to it.
        paths:paths
      }),
    ]
  };
};
