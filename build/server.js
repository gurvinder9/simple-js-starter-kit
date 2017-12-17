const express = require('express');
const path = require('path');

const port = 3000;
const app = express();

app.set('views', path.join(__dirname, 'src')); // this is the folder where we keep our hbs files

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
