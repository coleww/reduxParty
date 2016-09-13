var path = require('path');
var express = require('express');
var PORT = process.env.PORT || 7770
var app = express();

if(process.env.NODE_ENV !== 'production') {
  var webpack = require('webpack');
  var config = require('./webpack.config.dev');
  var compiler = webpack(config);
  app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
  }));

  app.use(require('webpack-hot-middleware')(compiler));
} else {
  app.use(express.static(__dirname + '/dist'))
}


app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, function(err) {
  if (err) {
    console.log(err);
    return;
  }
  console.log('Listening at http://localhost:7770');
});
