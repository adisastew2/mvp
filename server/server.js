const express = require('express');
const bodyParser = require('body-parser')
let app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/../src/client/public'));

app.get('/', (req, res)=>{
  res.send('What it Dew');
});

app.post('/msgs', (req, res)=>{
  console.log('REQ FROM ROUTE: ', req);
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});