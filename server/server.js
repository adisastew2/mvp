const express = require('express');
const bodyParser = require('body-parser')

const save = require('../DB/index').saveNote;
const getMsgs = require('../DB/index').getMsgs;
let app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/../src/client/public'));

app.get('/', (req, res) => {
  res.send('What it Dew');
});

app.get('/msgs', function (req, res) {
  getMsgs((err, data) => {
    if(err){
      res.send(501, err);
    } 
    res.send(data);
    
  });
});

app.post('/msgs', (req, res) => {
  // console.log('FROM ROUTE: ', req.body.msg);
  save(req.body.name, req.body.msg);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});