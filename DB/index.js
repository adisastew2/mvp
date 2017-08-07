const mysql = require('mysql');
const mysqlConfig = require('./config');

var connection = mysql.createConnection(mysqlConfig);

var saveNote = (name, msg)=>{
  connection.query(`insert into things (name, msg) values ("${name}", "${msg}")`, (err, results)=>{
    if(err){
      console.log(err, null);
    }
    console.log(null, results);
  
  });
}

module.exports.saveNote = saveNote;