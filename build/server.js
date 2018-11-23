const express = require('express');
const path = require('path');
const webpack = require('webpack');
const config = require('../webpack.config.dev');
const port = 3000;
const app = express();
const compile = webpack(config);

app.set('views', path.join(__dirname, 'src')); // this is the folder where we keep our hbs files

app.use(require('webpack-dev-middleware')(compile, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../src/index.html'));
});


app.listen(port, (err) => {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Server Running on http://localhost", port);
  }
})
