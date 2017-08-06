const express = require('express');
const app = express();

app.use(express.static(__dirname + '/../src/client/public'));

app.get('/', (req, res)=>{
  res.send('What it Dew');
});

app.listen(3000, () => {
  console.log('Listening on port 3000');
});