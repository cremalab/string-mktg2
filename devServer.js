/**
 * Created by lukeaskins on 8/26/16.
 */

var baseDir = 'build';

console.info('NODE ENV: ' + process.env.NODE_ENV);

if ( process.env.NODE_ENV === 'production' ) {
  var express = require('express');
  var path = require("path");
  var app = module.exports.app = exports.app = express();
  var webPath = baseDir + '/';

  app.use(express.static(baseDir));

  app.get('/*', function (req, res) {
    var htmlPath = path.join(process.cwd(), webPath + 'index.html');
    res.sendFile(htmlPath);
  });

  app.listen(process.env.PORT || 3002);
} else {
  var webpack = require('webpack')
  var WebpackDevServer = require('webpack-dev-server');
  var config = require('./webpack.config');

  new WebpackDevServer(webpack(config), {}).listen(3000, 'localhost', function(err){
    if(err){
      console.error(err)
    }
    console.log('Listening at localhost:3000');
  })
}
