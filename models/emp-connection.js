const mysql = require('mysql')
require('dotenv').config();
const connection = mysql.createConnection({
    host: 'localhost',
    user: process.env.USER,
    password : 'olakase123',
    database: 'cursada'
  });
  
  connection.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + connection.threadId);
  });

  module.exports = connection