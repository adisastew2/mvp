const mysql = require('mysql');
const mysqlConfig = require('./config');

var connection = mysql.createConnection(mysqlConfig);

var saveNote = (name, msg) => {
  connection.query(`insert into things (name, msg) values ("${name}", "${msg}")`, (err, results) => {
    if(err){
      console.log(err, null);
    }
    console.log(null, results);
  
  });
}

var getMsgs = (cb) => {
  connection.query('select * from things', (err, results) => {
    if(err){
      cb(err, null);
    }
    cb(null, results)
  });
}

module.exports.saveNote = saveNote;
module.exports.getMsgs = getMsgs;