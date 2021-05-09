const mysql = require('mysql');
const inquirer = require('inquirer');

const connection = mysql.createConnection({
  host: 'localhost',

 port: 3306,

  user: 'root',
  password:"FFDP#1983",
  database: 'employee_tracker_db',
});

connection.connect((err) => {
  if (err) throw err;
  runSearch();
});
connection.query = util.promisify(connection.query);

module.exports = connection