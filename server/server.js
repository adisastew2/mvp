const express = require('express');
const bodyParser = require('body-parser')

const save = require('../DB/index').saveNote;
let app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/../src/client/public'));

app.get('/', (req, res) => {
  res.send('What it Dew');
});

app.post('/msgs', (req, res) => {
  // console.log('FROM ROUTE: ', req.body.msg);
  save(req.body.name, req.body.msg);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});