const express = require('express');
const helper = require('./helpers.js');
const bodyParser = require('body-parser');
const app = express();

const port = 4000;

app.use(express.static(`${__dirname} /../client/dist`));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.post('/weather', (req, res) => {
 res.send('success')
});


app.get('/weather', (req, res) => {
  res.send('success')
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
